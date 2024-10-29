import AddHabit from "../components/AddHabit";
import HabitPalette from "../components/HabitPalette";
import Sidebar from "../components/SIdebar";
import useTasks from "../hooks/useTasks";
const Home = () => {
    const {tasks :habits}=useTasks()
  return (
    <div>
    
        <AddHabit/>
      {
        habits.map((habit)=>{
            return( <HabitPalette habit={habit} key={habit.id}/> )
        })
      }
    </div>
  );
}

export default Home;
