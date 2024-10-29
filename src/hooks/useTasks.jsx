import {useContext} from 'react'
import TaskContext from '../store/TaskContext'

const useTasks=()=>{
    return useContext(TaskContext)
}
export default useTasks