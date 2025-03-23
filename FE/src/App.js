// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import TeacherDashboard from "./Pages/TeacherDashboard";
// import ViewPage from "./Pages/ViewPage";
// import Profilepage from "./Pages/Profilepage"
// import Home from "./Pages/Home";
// import Navbar from "./Components/Navbar";

// function App() {
//   return (
//     <div>
      
//       <Router>
//      <Navbar/>
//       <Routes>
      
//       <Route path="/" element={<Home/>} />
//       <Route path="/profile" element={<Profilepage/>} />
//         <Route path="/mystudent" element={<TeacherDashboard />} />
//         <Route path="/student/:id" element={<ViewPage/>} />
//       </Routes>
//     </Router>
//     </div>
    
    
//   );
// }

// export default App;



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import TeacherDashboard from "./Pages/TeacherDashboard";
import ViewPage from "./Pages/ViewPage";
import Profilepage from "./Pages/Profilepage";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  const [teacherName, setTeacherName] = useState("Loading..."); // Default while fetching

  useEffect(() => {
    // Fetch teacher name from API
    const fetchTeacherName = async () => {
      try {
        const response = await fetch("https://your-api.com/getTeacher"); // Change API URL
        const data = await response.json();
        setTeacherName(data.name); // Assuming API returns { name: "Mr. John Smith" }
      } catch (error) {
        console.error("Error fetching teacher name:", error);
        setTeacherName("Unknown Teacher"); // Fallback
      }
    };

    fetchTeacherName();
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home teacherName={teacherName} />} />
          <Route path="/profile" element={<Profilepage setTeacherName={setTeacherName} />} />
          <Route path="/mystudent" element={<TeacherDashboard />} />
          <Route path="/student/:id" element={<ViewPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
