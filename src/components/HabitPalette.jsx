import useTasks from "../hooks/useTasks";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
const HabitPalette = ({ habit }) => {

  const [hovering, setHovering] = useState(false);
  const { name, progress, streak } = habit;
  const { tasks, setTasks } = useTasks();
  const deleteOnClick = () => {
    const updatedTasks = tasks.filter((task) => task.name !== name);
    setTasks(updatedTasks);
  };
  const navigate=useNavigate()
  return (
    <div
    onClick={()=>{
      navigate(`/habit/${habit?.id}`)
    }}
      onMouseEnter={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
      style={{ cursor: "pointer", backgroundColor: "#777", color: "black" }}
    >
      {hovering && <FaTrash onClick={deleteOnClick} />}
      <strong>{name}</strong>
      <p>progress {progress} </p>
      <p>streak {streak || streak.current} </p>
    </div>
  );
};

export default HabitPalette;
