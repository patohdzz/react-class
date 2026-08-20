import { useState } from "react"

function InputControl() {

    const [taskInput, setTaskInput] = useState("")
    const [tasks, setTasks] = useState(""
        // [
        //     "Preview React Components",
        //     "Practice Props"
        // ]
    )

    function handleSubmit(event) {
        event.preventDefault();
        setTasks((previousTasks) => [...previousTasks, taskInput]);
        setTaskInput("");
    }

    return (
        <>
            <main className="container py-4">
                <section className="card shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Study Tasks</h2>
                    </div>

                    <form action="" className="row g-2 mb-3 p-4" onSubmit={handleSubmit}>
                        <div className="col-10 col-md p3">
                            <label className="form-label" htmlFor="task-input">New Task</label>

                            <input 
                                type="text"
                                id="task-input"
                                className="form-control"
                                value={taskInput}
                                onChange={(event) => setTaskInput(event.target.value)}
                            />
                        </div>

                        <div className="col-10 col-md-auto d-flex align-items-end">
                            <button className="btn btn-success w-100" type="submit">
                                Add Task
                            </button>
                        </div>
                    </form>

                    { // need {} because of scripting, === checks type as well as value, strict checking
                        tasks.length === 0 ? (<p className="text-muted mb-0">No Tasks Yet.</p>) : 
                        (
                            <ul className="list-group p-4">
                                {
                                    tasks.map((task, index) => (
                                        <li className="list-group-item" key={task + index}>
                                            {task}
                                            <button className="btn btn-sm btn-danger">Delete</button>
                                        </li>

                                        
                                    ))
                                }
                            </ul>
                        )
                    }
                    {/* AFTER EVERY TASK, WE NEED A DELETE BUTTON AND EDIT BUTTON DONT ASK AI TO GIVE IT TO YOU/GIVE ME STEPS INSTEAD */}
                </section>
            </main>
        </>
    )

}
export default InputControl