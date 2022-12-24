import type Task from "./Task"

export type List = {
    id: string
    name: string
    color: string
    tasks: Task[]
}

export default List
