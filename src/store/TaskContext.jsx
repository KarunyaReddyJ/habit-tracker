import {createContext,useState} from 'react'

const TaskContext=createContext(null)


export const TaskContextProvider=({children})=>{
    const [tasks, setTasks] = useState([{
        id:1,
        name:'water',
        progress:'12',
        streak:'7'
    },
    {
        id:2,
        name:'rice',
        progress:'2',
        streak:'3'
    },
    {
        id:3,
        name:'potato',
        progress:'19',
        streak:'18'
    }]);
    return(
        <TaskContext.Provider value={{tasks,setTasks}} >
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext