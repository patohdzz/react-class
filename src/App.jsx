import './App.css'
import Profile from './Profile'
import Header from './Header'

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
      topic : "GF",
      status : "Active"
    }
  ];

  return (
    <>
      <Header/>

      <main className='container py-4'>
        <div className='row g-3'>
          
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
        </div>
      </main>
    </>
  )
}

export default App
