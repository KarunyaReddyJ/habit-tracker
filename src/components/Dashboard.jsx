import ProgressChart from './ProgressChart';
import StreakCounter from './StreakCounter';
import useTasks from '../hooks/useTasks';
const Dashboard = () => {
    const {tasks }=useTasks()
    console.log(tasks)
    //if(!habits) return <>Loading</>
  return (
    <div>
      <h1>Habit Tracker Dashboard</h1>
      {tasks?.map((habit) => (
        <div key={habit.id} style={{ marginBottom: '30px' }}>
          <h3>{habit.name}</h3>
          <ProgressChart habit={habit} />
          <StreakCounter streak={habit.streak} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
