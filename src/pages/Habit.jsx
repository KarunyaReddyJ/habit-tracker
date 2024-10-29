import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useTasks from '../hooks/useTasks';
import ProgressChart from '../components/ProgressChart';
import StreakCounter from '../components/StreakCounter';

const Habit = () => {
  const { id } = useParams();  
  const { tasks } = useTasks();  

  
  const [habit, setHabit] = useState(null);

  
  useEffect(() => {
    const foundHabit = tasks.find((hb) => hb.id == id) || {}
    console.log(foundHabit)
    setHabit(foundHabit || null);  
  }, [id, tasks]);

  if (!habit) return <p>Habit not found</p>;

  return (
    <div>
      <ProgressChart habit={habit} />
      <StreakCounter streak={habit?.streak || 0} />
    </div>
  );
};

export default Habit;
