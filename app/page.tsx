/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
// pages/index.tsx
// pages/index.tsx
import { useState } from "react";

export default function Home() {
    const [number, setNumber] = useState(1);

    const handleMultiply = () => {
        setNumber(prev => prev * 2);
    };

    const handleAdd = () => {
        setNumber(prev => prev + 2);
    };

    const handleSubtract = () => {
        setNumber(prev => prev - 2);
    };

    const handleReset = () => {
        setNumber(1);
    };

    return (
        <div className="w-screen h-screen relative">
            {/* Circular display for the number */}
            <div className="absolute top-10 left-10 w-32 h-32 flex items-center justify-center rounded-full bg-white shadow-lg text-6xl font-bold text-blue-700 border border-gray-300">
                {number}
            </div>
            
            {/* Full-screen grid layout for the colored quadrants */}
            <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
                <div
                    onMouseEnter={handleMultiply}
                    className="bg-green-500 flex items-center justify-center text-4xl font-bold text-black"
                >
                    x 2
                </div>
                <div
                    onMouseEnter={handleAdd}
                    className="bg-yellow-500 flex items-center justify-center text-4xl font-bold text-black"
                >
                    + 2
                </div>
                <div
                    onMouseEnter={handleReset}
                    className="bg-blue-500 flex items-center justify-center text-4xl font-bold text-black"
                >
                    Reset
                </div>
                <div
                    onMouseEnter={handleSubtract}
                    className="bg-red-500 flex items-center justify-center text-4xl font-bold text-black"
                >
                    - 2
                </div>
            </div>
        </div>
    );
}




















// import { ChangeEvent, useState } from "react";

// interface Identitas {
//   name: string;
//   age: number;
//   alamat?: string;
// }

// function Home() {
//   const [identitas, setIdentitas] = useState<Identitas[]>([]);
//   const [name, setName] = useState("");

//   const handleChange = (event: ChangeEvent<any>) => {
//     console.log("value", event.target.value);
//     console.log("name", event.target.name);
//     console.log("placeholder", event.target.placeholder);
//     console.log("id", event.target.id);
//     setName(event.target.value);
//   };

//   const handleSubmit = (id:number) => {
//       console.log('id',id)
//   }
//   const addHandle = () => {
//     setIdentitas((prev) => [
//       ...prev,
//       {
//         name: "Rahsya",
//         age: 21,
//       },
//       {
//         name: "Ihsan",
//         age: 30,
//         alamat: "Bandung",
//       },
//     ]);
//   };

//   return (
//     <div className="grid grid-cols-1 gap-5 mt-5">
//       {identitas.length === 0 ? (
//         <p className="text-red-500">Tidak ada data</p>
//       ) : (
//         identitas.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col rounded-lg px-5 border-red-400"
//           >
//             <span>Nama : {item.name}</span>
//             <span>Umur : {item.age}</span>
//             <span>Alamat : {item.alamat || "-"}</span>
//           </div>
//         ))
//       )}
//       <button onClick={addHandle}>Tambah</button>
//       <button onClick={() => handleSubmit(100)}>Submit</button>
//       <input id="tes id"
//                placeholder="123"
//                className="border p-2"
//                value={name}
//                name="tes"
//                onChange={handleChange}             
//     />
//       <input
//         className="boder p-2"
//         value={"nama"}
//         name="tes"
//         onChange={handleChange}
//       />
//     </div>
//   );
// }

// export default Home;

// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable prefer-const */
// // /* eslint-disable @typescript-eslint/no-unused-vars */
// // import Label from "./component/lebel";
// // import Input from "./component/Input";
// // import Button from "./component/button";
// // import { tree } from "next/dist/build/templates/app-page";

// export default function App() {
//   return (
//     <div className="p-4">
//       <h1 className="text-white text-3xl mb-4">Hello World</h1>

//       <div className="mb-4 ">
//         <Label htmlFor="username" isRequired={true} title="Username" />
//         <Input id="username" name="username" value="Rahsya" />
//       </div>

//       <div className="mb-4">
//         <Label htmlFor="password" isRequired={true} title="Password" />
//         <Input id="password" name="password" value="12345678" />
//       </div>

//       <div className="mb-4">
//         <Label htmlFor="name" isRequired={true} title="Name" />
//         <Input id="name" name="name" value="Rahsya" />
//       </div>

//       <div className="flex space-x-2 mt-11">
//         <Button title="Simpan" colorSchema="blue" variant="solid" />
//         <Button title="Simpan" colorSchema="blue" variant="solid" isDisabled={true} />
//         <Button title="Update" colorSchema="blue" variant="outline" />
//         <Button title="Update" colorSchema="blue" variant="outline" isDisabled={true} />
//         <Button title="Draft" colorSchema="green" variant="outline" />
//         <Button title="Batal" colorSchema="red" variant="solid" isDisabled={true}/>
//         <Button title="Batal" colorSchema="red" variant="solid" />
//       </div>
//     </div>
//   );
// }

// interface InputType {
//   isError? : boolean
//   isSmk? : boolean
//   number? : number
//   isloading? : boolean
// }

// function InputText({isError , isSmk, number,isloading = false, ...props} : InputType & React.InputHTMLAttributes<HTMLInputElement>) {
//   if(isloading) {
//     return (
//       <div className="bg-red-500 w-full h-20">sedang loading ...</div>
//     )
//   }
//   return(
//     <>
//     <input {...props} className="border rounded-md border-black text-black"/>
//     {isSmk ? "sekolah" : isSmk === false ? "bolos" : "sakit"}
//     {number === 100 ? " lulus" : " tidak lulus"}
//     {isError ? <span className="text-red-500">wajib di isi</span> : <></>}
//     </>
//   )
// }

// //props children

// interface NoteType {
//   title : string
//   children :ReactNode
// }

// function Note({title ,children} : NoteType) {
//   return (
//     <div className="border p-2 rounded-md mb-5">
//       <h1 className="text-red-500 mb-1">{title}</h1>
//       <div className="bg-blue-500">{children}</div>
//     </div>
//   )
// }

// interface CardType {
//   angka: string;
//   nama: string;
//   isLoding?: boolean;
//   nomor? : number
// }

// //props = angka
// //contoh props

// function Card({ angka, nama, isLoding  , nomor = 1}: CardType) {
//   // console.log('isLoding' ,angka , isLoding , nomor);
//   // console.log('ok');
//   return (
//     <div className="w-full h-10 bg-blue-500">
//       {angka} {nama}
//       <span className="text-yellow-500">{isLoding ? " sedang mengambil data" : ""}</span>
//       <span> {nomor}</span>
//     </div>
//   );
// }
