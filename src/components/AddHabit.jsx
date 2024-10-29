import { useState } from "react";
import useTasks from "../hooks/useTasks";
import toast from "react-hot-toast";
const AddHabit = () => {
  const [habit, setHabit] = useState("");
  const { setTasks } = useTasks();
  const handleFormSubmission=(e) => {
    e.preventDefault();
    if (!habit.trim()) {
      toast.error("Enter Habit");
      return;
    }
    setTasks((habits) => [
      ...habits,
      {
        id:habits.length+1,
        name: habit,
        progress: 0,
        streak: 0,
      },
    ]);
    setHabit("");
  }
  return (
    <form
      onSubmit={handleFormSubmission}
    >
      <input
        placeholder="Add Habit"
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddHabit;