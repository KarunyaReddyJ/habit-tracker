import useTasks from "../hooks/useTasks";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HabitPalette = ({ habit }) => {
  const { id, name } = habit;
  const { tasks, setTasks } = useTasks();
  const [Done, setDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!habit) return;
    setDone(habit.completedDays[habit.completedDays.length - 1]);
  }, [habit]);

  const deleteOnClick = () => {
    const updatedTasks = tasks.filter((task) => task.name !== name);
    setTasks(updatedTasks);
  };

  return (
    <div
      style={{
        cursor: "pointer",
        backgroundColor: Done ? "#e0ffe0" : "#ffe0e0", // Green or Red background
        color: "black",
        margin: "5px 0",
        padding: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s, transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={{ flex: 1, fontWeight: "bold", fontSize: "18px" }}>
        {name}
      </div>

      <div
        style={{
          flex: 1,
          textAlign: "center",
          color: Done ? "green" : "red",
          textShadow: `0 0 2px ${Done ? "green" : "red"}`,
          cursor: "pointer",
        }}
        onClick={() => {
          setDone((p) => !p);
          setTasks((tasks) =>
            tasks.map((task) =>
              task.id === id
                ? {
                    ...task,
                    completedDays: task.completedDays.map((day, index) =>
                      index === task.completedDays.length - 1 ? !Done : day
                    ),
                  }
                : task
            )
          );
        }}
      >
        {Done ? "Done" : "Not Done"}
      </div>

      <button
        onClick={() => navigate(`/habit/${habit?.id}`)}
        style={{
          flex: 1,
          padding: "5px 10px",
          margin: "0 10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#45a049")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4CAF50")}
      >
        Details
      </button>

      <FaTrash
        onClick={deleteOnClick}
        style={{
          color: "red",
          cursor: "pointer",
          marginLeft: "10px",
          fontSize: "20px",
        }}
      />
    </div>
  );
};

export default HabitPalette;
