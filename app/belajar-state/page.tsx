// "use client";
// import { useState } from "react";

// interface UserProfile {
//   name: string;
//   age: string;
//   email: string;
// }

// const StateTest: React.FC = () => {
//   const [userProfile, setUserProfile] = useState<UserProfile>({
//     name: "",
//     age: "",
//     email: "",
//   });

//   const [tasks, setTasks] = useState<string[]>([]);
//   const [newTask, setNewTask] = useState<string>("");

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setUserProfile((prevProfile) => ({
//       ...prevProfile,
//       [name]: value,
//     }));
//   };

//   const handleTaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNewTask(e.target.value);
//   };

//   const addTask = () => {
//     if (newTask.trim() !== "") {
//       setTasks([...tasks, newTask]);
//       setNewTask("");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">User Profile</h1>

//       {/* Name Input */}
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-gray-700">Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={userProfile.name}
//           onChange={handleInputChange}
//           className="w-full mt-2 p-2 border rounded-md text-black"
//           placeholder="Enter your name"
//         />
//       </div>

//       {/* Age Input */}
//       <div className="mb-4">
//         <label htmlFor="age" className="block text-gray-700">Age</label>
//         <input
//           type="text"
//           id="age"
//           name="age"
//           value={userProfile.age}
//           onChange={handleInputChange}
//           className="w-full mt-2 p-2 border rounded-md text-black"
//           placeholder="Enter your age"
//         />
//       </div>

//       {/* Email Input */}
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-gray-700">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={userProfile.email}
//           onChange={handleInputChange}
//           className="w-full mt-2 p-2 border rounded-md text-black"
//           placeholder="Enter your email"
//         />
//       </div>

//       {/* Display Current Profile */}
//       <div className="bg-blue-300 text-blue-700 p-4 rounded-md mb-4">
//         <h3 className="text-lg font-semibold">Current Profile</h3>
//         <p><strong>Name:</strong> {userProfile.name || '-'}</p>
//         <p><strong>Age:</strong> {userProfile.age || '-'}</p>
//         <p><strong>Email:</strong> {userProfile.email || '-'}</p>
//       </div>

//       {/* Task List */}
//       <h2 className="text-2xl font-bold mb-4">Task List</h2>
//       <div className="flex mb-4">
//         <input
//           type="text"
//           placeholder="Add a new task"
//           value={newTask}
//           onChange={handleTaskInputChange}
//           className="w-full mt-2 p-2 border rounded-md text-black"
//         />
//         <button
//           onClick={addTask}
//           className="ml-2 mt-2 bg-green-500 text-white p-2 rounded-md"
//         >
//           Add Task
//         </button>
//       </div>
//       <div className="bg-yellow-300 text-black  p-2 rounded-md">
//       <ul className="list-disc pl-5">
//         {tasks.length === 0 ? (
//           <p className="text-gray-500 p-4 rounded-md mb-4">No tasks added</p>
//         ) : (
//           tasks.map((task, index) => (
//             <li key={index} className="mb-2">
//               {task}
//             </li>
//           ))
//         )}
//       </ul>
//       </div>
      
//     </div>
//   );
// };

// export default StateTest;
