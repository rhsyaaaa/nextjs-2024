// "use client";
// import { useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import { ColorProvider } from '../context/colorContext';
// import Button from '../components/layout/Button';

// const Home = () => {
//   const appContext = useContext(AppContext)

//   const {toggleTheme} = appContext;
//   return (
//     <ColorProvider>
//       <div className="min-h-screen p-24 flex flex-col items-center justify-center">
//         <p className="text-lg mb-4">Belajar useContext</p>

//         <Grid />
//         <Button title="ubah Tema" colorSchema="blue" variant="outline" isLoading={false} onClick={toggleTheme}/>

//       </div>
//     {/* </ColorProvider> */}
//   );
// };

// export default Home;