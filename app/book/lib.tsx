/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "@/lib/axiosClient";
import { ChangeEvent, use, useState } from "react";
import { pages } from "next/dist/build/templates/app-page";
import { BookCreatePayload, BookListFilter, BookListResponse, DetailBookResponse } from "./interface";
import Swal from "sweetalert2";

const useBookModule = () => {
  const queryClient = useQueryClient();

  //create
  const createBook = (payload : BookCreatePayload) => {
    return axiosClient.post("/book/tambah", payload)
  }
  const useCreateBook = () => {
    const mutate = useMutation({
      mutationFn: (payload : BookCreatePayload) => createBook(payload),
      onSuccess : (res) =>{
        console.log("response", res);
      },
      onError : (err) => {
        console.log('error', err)
      }
    });
    return mutate;
  }
  const defaultParams = {
    title: "",
    author: "",
    from_year: "",
    to_year: "",
    page: 1,
    pageSize: 10,
  };

  // list
  const getBookList = async (
    params: BookListFilter
  ): Promise<BookListResponse> => {
    return axiosClient.get("/book/list", { params }).then((res) => res.data);
  };

  const useBookList = () => {
    let [params, setParams] = useState<BookListFilter>(defaultParams);
    let [filterParams, setFilterParams] =
      useState<BookListFilter>(defaultParams);

    const handleClear = () => {
      console.log("clear berjalan");
      setParams(defaultParams);
      setFilterParams(defaultParams);
    };
    const handleFilter = () => {
      console.log("filter berjalan");
      setFilterParams(() => {
        return {
          ...params,
        };
      });
    };

    const handlePage = (page: number) => {
      console.log("page berjalan");

      setFilterParams((filterParams) => {
        return {
          ...filterParams,
          page: page,
        };
      });

      setParams((params) => {
        return {
          ...params,
          page: page,
        };
      });
    };

    const handlePageSize = (e: ChangeEvent<any>) => {
      console.log("pageSize berjalan");
      setParams((params) => {
        return {
          ...params,
          page: 1,
          pageSize: e.target.value,
        };
      });

      setFilterParams((filterParams) => {
        return {
          ...filterParams,
          page: 1,
          pageSize: e.target.value,
        };
      });
    };

    const { data, isFetching, isLoading } = useQuery<BookListResponse>({
      queryKey: ["/book/list", [filterParams]],
      queryFn: () => getBookList(filterParams),
    });

    return {
      data,
      isFetching,
      isLoading,
      params,
      setParams,
      handleClear,
      handleFilter,
      handlePage,
      handlePageSize,
    };


  };

  // detail
  const getDetailBook = async (
    id:string
  ): Promise<DetailBookResponse> => {
    return axiosClient.get(`/book/detail/${id}`).then((res) => res.data.data);
  };
 
  const useDetailBook = (id:string) => {
    const { data, isLoading, isFetching } = useQuery(
      {
        queryKey: ["/book/detail", { id }],
        queryFn: () => getDetailBook(id),
        select: (response: any) => response,    
      }
    );
 
    return { data, isFetching, isLoading };
 
  }

  // update
  const updateBook = (id : string, payload : BookCreatePayload) => {
    return axiosClient.put(`/book/update/${id}`, payload)
  }
  const useUpdateBook = (id : string) => {
    const [message,setMessage] = useState<any>([])
    const mutate = useMutation({
      mutationFn: (payload : BookCreatePayload) => updateBook(id,payload),
      onSuccess : (res) =>{
        console.log("response", res);
      },
      onError : (err : any) => {
        console.log('error', err.response),
        setMessage(err.response.data.message)
      }
    });
    return {mutate, message, setMessage};
  }

  // delete
  const useDeleteBook = () => {
    const mutate = useMutation({
      mutationFn: (id : number) => axiosClient.delete(`/book/delete/${id}`),

      onSuccess : (res: any) =>{
        queryClient.invalidateQueries({ queryKey: ["/book/list"] });
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
        console.log("response");
      },
      onError : (err: any) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
        console.log('error')
      }
    });
    return mutate;
  }

  const useDeleteBookMulti = () => {
    const mutate = useMutation({
      mutationFn: async (ids: number[]) => {
        return Promise.all(ids.map(id => axiosClient.delete(`/book/delete/${id}`)));
      },
      onSuccess: (res: any) => {
        queryClient.invalidateQueries({ queryKey: ["/book/list"] });
        Swal.fire({
          title: "Good job!",
          text: "Semua data berhasil dihapus!",
          icon: "success"
        });
      },
      onError: (error: any) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Beberapa data gagal dihapus!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      },
    });
    return mutate;
  };

  

  return { useBookList, useCreateBook, useDetailBook, useUpdateBook, useDeleteBook, useDeleteBookMulti };
};



export default useBookModule;