import { useState } from "react"

function Counter() {

    // normal variable    
    const a = 1; 
    // another way to create a variable; setCompletedSessions is the function
    const [completedSessions, setCompletedSessions] = useState(0);
    function handleIncrease() {
        setCompletedSessions(completedSessions + 1);
    }

    function handleDecrease() {
        setCompletedSessions(completedSessions - 1);
    }

    function handleReset() {
        setCompletedSessions(0);
    }

    return (
        <>
        <main className="container py-4">
            <section className="card shadow-sm">
                <div className="card-body">
                <h1 className="card-title h3">React Study Tracker</h1>
                <p className="card-text">
                    Completed study sessions:
                    <span className="badge text-bg-primary ms-2">{completedSessions}</span>
                </p>
                <div className="d-flex gap-2">
                    <button className="btn btn-primary" type="button" onClick={handleIncrease}>
                    Increase
                    </button>
                    <button className="btn btn-outline-secondary" type="button" onClick={handleDecrease}>
                    Decrease
                    </button>
                    <button className="btn btn-outline-danger" type="button" onClick={handleReset}>
                    Reset
                    </button>
                </div>
                </div>

                {
                    completedSessions >= 5 && (
                        <div className="alert alert-success mt-3 mb-0" role="alert">
                            Great Progress, You've completed {completedSessions} sessions.
                        </div>
                    )
                }
            </section>
        </main>        
        </>
    )
}
export default Counter