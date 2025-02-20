// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// "use client"; // gunakan use client karena ada onChange pda komponen
// import { ChangeEvent, useState } from "react";
// import Label from "../component/lebel";
// import InputText from "../component/textInput";
// import Select from "../component/select";
// import Button from "../component/button";
// interface Value {
//   title: string;
//   author: string;
//   year: number | string;
//   deskripsi: string;
// }
 
// const Home = () => {
//   const [error, setError] = useState(false);
//   const [values, setValues] = useState<Value>({
//     title: "",
//     author: "",
//     year: "",
//     deskripsi: "",
//   });
 
//   const handleChange = (event: ChangeEvent<any>) => {
//     setValues((prevValues) => {
//       return {
//         ...prevValues,
//         [event.target.name]: event.target.value,
//       };
//     });
//   };
 
//   const handleSubmit = (e: ChangeEvent<any>) => {
//     e.preventDefault()
//     if (!values.title || !values.author || !values.year || !values.deskripsi) {
//       alert("Data Tidak Boleh Kosong");
//       setError(true);
//       return;
//     }else{
      
//     }
 
//     alert(JSON.stringify(values));
//   };
 
//   return (
//     <main className="space-y-5">
//       {JSON.stringify(values)}
//       <h1 className="text-red-500 font-bold">Latihan Form</h1>
//       <form onSubmit={handleSubmit} className="space-y-3">
//         <section>
//           <Label htmlFor="author" isRequired title="Penulis" />
//           <InputText
//             placeholder="Nama Penulis buku"
//             id="author"
//             name="author"
//             value={values.author}
//             isError={}
//             messageError="wajib di isi"
//             onChange={handleChange}
//           />
//         </section>
 
//         <section>
//           <Label htmlFor="title" isRequired title="Judul Buku" />
//           <InputText
//             placeholder="Nama Judul buku"
//             id="title"
//             name="title"
//             value={values.title}
//             isError={}
//             messageError="wajib di isi"
//             onChange={handleChange}
//           />
//         </section>
//         <section>
//           <Label htmlFor="year" title="Tahun Terbit"  />
//           <Select
//             value={values.year}
//             name="year"
//             onChange={handleChange}
//             isError={}
//             messageError="wajib di isi"
//             id="year"
//             options={[
//               {
//                 value: 2020,
//                 label: "2020",
//               },
//               {
//                 value: 2021,
//                 label: "2021",
//               },
//               {
//                 value: 2022,
//                 label: "2022",
//               },
//               {
//                 value: 2023,
//                 label: "2023",
//               },
//             ]}
//           />
//         </section>

//         <section>
//           <Label htmlFor="deskripsi" title="Deskripsi" />
//           <InputText
//             placeholder="Deskripsi buku"
//             id="deskripsi"
//             name="deskripsi"
//             value={values.deskripsi}
//             onChange={handleChange}
//           />
//         </section>  

//         <section>
//           <Button type="submit" colorSchema="blue" title="Simpan" />
//         </section>
//       </form>
//     </main>
//   );
// };
 
// export default Home;