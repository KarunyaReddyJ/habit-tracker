import {createContext,useState} from 'react'

const TaskContext=createContext(null)


// eslint-disable-next-line react/prop-types
export const TaskContextProvider=({children})=>{
    const [tasks, setTasks] = useState([
        {
          id: 1,
          name: 'water',
          progress: '12', // Days tracked
          streak: '7', // Current streak
          completedDays: [true, true, false, true, true, true, false, true, true, true], 
          startDate: '2024-10-01', // Start date for tracking
          badgeEarned: false // Badge status
        },
        {
          id: 2,
          name: 'rice',
          progress: '2', 
          streak: '3', // Current streak
          completedDays: [true, false, false, true, true, false, false, true, false, true, false, true, false, false, false, false, true, true, false, true, false], // Last 21 days
          startDate: '2024-10-05',
          badgeEarned: false 
        },
        {
          id: 3,
          name: 'potato',
          progress: '19', // Days tracked
          streak: '18', // Current streak
          completedDays: [true, true, false, true, true, true,] ,
          startDate: '2024-09-25', 
          badgeEarned: true 
        }
      ]);
    return(
        <TaskContext.Provider value={{tasks,setTasks}} >
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext