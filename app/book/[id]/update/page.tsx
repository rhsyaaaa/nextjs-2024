/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { string } from "yup";
import useBookModule from "../../lib";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { FormikProvider, useFormik } from "formik";
import { BookCreatePayload } from "../../interface";
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
    .max(2028, "tahun tidak boleh lebih dari 2028"),
  deskripsi: Yup.string().nullable().default(""),
});

export default function Update({ params }: { params: { id: string } }) {
  const { useDetailBook } = useBookModule();
  const { data, isFetching, isLoading } = useDetailBook(params.id);
  console.log("data detail", data);

  const { useUpdateBook } = useBookModule();

  const { mutate, message, setMessage } = useUpdateBook(params.id);
  const router = useRouter();

  const formik = useFormik<BookCreatePayload>({
    // initialValues: createBookSchema.getDefault(),
    initialValues : {
        title : data?.title || "",
        author : data?.author || "",
        year : data?.year  || "",
        deskripsi : data?.deskripsi || ""
    },
    validationSchema: createBookSchema,
    validateOnChange: false,
    validateOnBlur: false,
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

  if (isFetching) {
    return <p>Loading ....</p>;
  }
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