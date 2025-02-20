/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useFormik, Formik, FormikProvider } from "formik";
import { title } from "process";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import useBookModule from "../lib";
import { BookCreatePayload } from "../interface";
import Button from "@/app/components/Button";
import InputText from "@/app/components/inputText";

const createBookSchema = Yup.object().shape({
  title: Yup.string().nullable().default("").required("wajib di isi"),
  author: Yup.string().nullable().default("").required("wajib di isi"),
  year: Yup.number()
      .nullable()
      .default(undefined)
      .required("wajib pilih")
      .min(2010, "tahun tidak boleh kurang dari 2010")
      .max(2025, "tahun tidak boleh lebih dari 2025"),
  deskripsi: Yup.string().nullable().default(""),
});

export default function UpdateBook({ params }: { params: { id: string }}) {


    const { useCreateBook } = useBookModule();

    const mutate = useCreateBook();
    const router = useRouter();
  
    const formik = useFormik<BookCreatePayload>({
      initialValues: createBookSchema.getDefault(),
      // isInitialValues : {
      //     title : "",
      //     author : "",
      //     year : undefined,
      //     deskripsi : ""
      // },
      validationSchema: createBookSchema,
      enableReinitialize: true,
      onSubmit: (values) => {
        mutate.mutate(values, {
          onSuccess: () => {
            resetForm();
            setValues(createBookSchema.getDefault());
            router.push("/book");
          },
        });
        console.log("berhasil submit", values);
      },
    });
  
    const {
      handleChange,
      handleSubmit,
      setFieldValue,
      handleBlur,
      values,
      errors,
      resetForm,
      setValues,
    } = formik;
    return (
      <section className="flex justify-center items-center flex-col   ">
        ini halaman tambah buku
        {JSON.stringify(values)}
        <p>=============</p>
        {JSON.stringify(errors)}
        <div className="flex flex-col">
          <FormikProvider value={formik}>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <section>
                <label htmlFor="title" title="judul"></label>
                <InputText
                  value={values.title}
                  placeholder="judul buku"
                  id="title"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isError={!!errors.title}
                  messageError={errors.title}
                />
              </section>
              <section>
                <label htmlFor="author" title="nama Author"></label>
                <InputText
                  value={values.author}
                  placeholder="nama Author"
                  id="author"
                  name="author"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isError={!!errors.author}
                  messageError={errors.author}
                />
              </section>
              <section>
                <label htmlFor="deskripsi" title="deskripsi"></label>
                <InputText
                  value={values.deskripsi}
                  placeholder="deskripsi"
                  id="deskripsi"
                  name="deskripsi"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isError={!!errors.deskripsi}
                  messageError={errors.deskripsi}
                />
              </section>
              <section>
                <label htmlFor="year" title="tahun"></label>
                <InputText
                  value={values.year}
                  placeholder="tahun.."
                  id="year"
                  name="year"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isError={!!errors.year}
                  messageError={errors.year}
                />
              </section>
              
              <Button
                isLoading={mutate.status === "pending"}
                title="submit"
                colorSchema="blue"
              />
            </form>
          </FormikProvider>
        </div>
      </section>
    );
}
