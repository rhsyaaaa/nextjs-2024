// /* eslint-disable prefer-const */
// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/dist/client/link";
// import InputText from "../components/layout/inputText";
// import Button from "../components/layout/Button";

// const Page = () => {
//     let [count, setCount] = useState(0);
//     let [text, setText] = useState("");
//     let [change, setChange] = useState(false);
    
   
//     useEffect(() => {
//       // Set up an interval to increase count
//       const interval = setInterval(() => {
//         setCount((prevCount) => prevCount + 1);
//         console.log("interval berjalan")
//       }, 1000);
   
//       // Return a clean-up function to clear the interval when component unmounts
//       return () => {
//         clearInterval(interval);
//         console.log('Interval dibersihkan');
//       };
//     }, []);
//     return (
//       <>
//       <Link href={"belajar-form"}>Ke Form</Link>
//         <div>{count}</div>
//         <InputText
//           value={text}
//           id="text"
//           name="text"
//           onChange={(e) => {
//             setText(e.target.value);
//           }}
//         />
   
//         <Button
//           title="ubah count"
//           colorSchema="red"
//           variant="solid"
//           onClick={() => {
//             setChange(!change);
//           }}
//         />
//       </>
//     );
//   };
   
   
//   export default Page