
import { useEffect, useState } from "react";
import Day2 from "./Day2";
import Day3 from "./Day3";
import Day4 from "./Day4";
import Day5 from "./Day5";
import Day6 from "./Day6";
import Day7 from "./Day7";
import Day1 from "./Day1";
import Day8 from "./Day8";
import Day9 from "./Day9";
import Day10 from "./Day10";
import Day11 from "./Day11";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Profile from "./profile";


//Main Component
const App = () => {
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, Profile]
  const [currentDay, setCurrentDay] =useState(9);
  const navigate = useNavigate()

  useEffect(() => {
    if(!localStorage.getItem("token")) {
      navigate("/authentication");
    }
  }, [])

  const handleDayClick = (day) => {
    setCurrentDay(day);
  };
  const handleLogout = async () => {
    const result = await Swal.fire({
        icon: "warning",
        title: "ທ່ານແນ່ໃຈບໍ?",
        text: "ແນ່ໃຈບໍຈະອອກລະບົບບໍ?",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonText: "ຍົກເລີກ",
        confirmButtonText: "ແມ່ນ",
    });
    if (result.isConfirmed) {
        localStorage.removeItem("token");
        await Swal.fire({
            icon: "success",
            title: "ອອກຈາກລະບົບ",
            text: "ຂອບໃຈທີ່ໃຊ້ບໍລິການ!",
            timer: "1500",
        });
        navigate('/authentication')
    }
   
}

  const Daycontent = ({day}) => {
    switch (day) {
      case 1:
        return <Day1></Day1>
      case 2:
        return <Day2></Day2>
      case 3:
        return <Day3></Day3>
      case 4:
        return <Day4></Day4>
      case 5:
        return <Day5></Day5>
      case 6:
        return <Day6></Day6>
      case 7:
        return <Day7></Day7>
      case 8:
        return <Day8></Day8>
      case 9:
        return <Day9></Day9>
      case 10:
        return <Day10></Day10>
      case 11:
        return <Day11></Day11>
      case Profile:
          return <Profile></Profile>
      default:
        return null;
    }
  }
  
  return (
    <div className="app">
    {days.map((day) => (
      <button onClick={() => {
        handleDayClick(day);
      }}
      className={currentDay === day ? "active-btn" : "inactive-btn"} 
      >

      ມື້ທີ {day}</button>
    ))}
    <h1>Welcom To day:  {currentDay}</h1>
    <Daycontent day={currentDay}></Daycontent>
    <button
            onClick={
            async () =>
            {await handleLogout()
            }}
        >ອອກລະບົບ</button>
    <style jsx>
      {
        `
        * {
          font-family: 'Phetsarath OT',serif;
        }

        .app {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        text-align: center
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: green;
            color: white;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
            margin: 20px 10px;
            }
            .active-btn {
            background-color: #e38676;
            }
      `}
    </style>
    </div>
  );
};


     
     
export default App;