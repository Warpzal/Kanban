export function useQuery() {
    const deleteTasks = () => {
        localStorage.removeItem("tasks")
    }

    const getTasks = (): Object[] => {
        const data = localStorage.getItem("tasks") || "[]"
        return JSON.parse(data)
    }

    const setTasks = (card: Object) => {
        const data = JSON.stringify([...getTasks(), card])
        localStorage.setItem("tasks", data)
    }
    return { deleteTasks, getTasks, setTasks }
}
