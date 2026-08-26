import './App.css'
import Profile from './Profile'
import Header from './Header'
import Counter from './Counter';
import InputControl from './InputControl';
import { useState, useEffect } from 'react';

function App() {
  // parent component

  const students = [
    {
      id : 1,
      name : "Jason",
      currentWeek : 9,
      topic : "React",
      status : "Active"
    },
    {
      id : 2,
      name : "Juan",
      currentWeek : 9,
      topic : "React",
      status : "Active"
    },
    {
      id : 3,
      name : "Pato",
      currentWeek : 9,
      topic : "React",
      status : "Not Active"
    },
    {
      id : 4,
      name : "Sebas",
      currentWeek : 9,
      topic : "React",
      status : "Not Active"
    },
    {
      id : 5,
      name : "Armando",
      currentWeek : 9,
      topic : "React",
      status : "Active"
    },
    {
      id : 6,
      name : "Kayla",
      currentWeek : 9,
      topic : "React",
      status : "Active"
    }
  ];

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // async makes this function synchronized; like running instructions step by step with no blocking of code
    async function loadUsers () {
      // need this block if we are going to request data from another source
      try {
        // write code here
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Could not load users.");
        }
        const data = await response.json();
        setUsers(data); // our react will render again


      } catch (error) {
        // we got an error, write code for that scenario
        setErrorMessage(error.message);

      }
    }

    loadUsers();
  }, []);

  return (
    <>
      <Header/>

      {/* only needs one tag? */}
      {/* <Counter/>
      <hr />

      <InputControl/>
      <hr /> */}

      <main className='container py-4'>

        { isLoading !== "" && (
            <div className='d=flex align-items-center gap-2'>
              <div className='spinner-border text-primary' role='status'></div>
              <span>Loading users.....</span>
            </div>
        )}

        { errorMessage !== "" && (
            <div className='alert alert-danger' role='alert'>
              {errorMessage}
            </div>
        )}

        { !isLoading && errorMessage === "" && users.length > 0 && (
          <div className='row gap-3'>
            {
              users.map((user) => (
                <div className='col-12 col-md-6 col-lg-4' key={user.id}>
                  <article className='card shadow'>

                  </article>
                </div>
              ))
            }
          </div>
        )}

        {/* <div className='row g-3'>
          
          { // this is how you do a loop
            students.map((student) => (
              // needs uniqueness; key goes to the parent of the component
              <div className='col-12 col-md-4' key={student.id}>
                  <Profile
                    name={student.name}
                    currentWeek={student.currentWeek}
                    topic={student.topic}
                    status={student.status}
                  />
              </div>
            ))
          }
        </div> */}
      </main>
    </>
  )
}

export default App
