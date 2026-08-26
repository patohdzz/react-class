import './App.css'
import Profile from './Profile'
import Header from './Header'
import Counter from './Counter';
import InputControl from './InputControl';
import SearchUsers from './SearchUsers';
import LoadingUsers from './LoadingUsers';
import ErrorMessage from './ErrorMessage';
import UserList from './UserList';
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

  // variable for searching and filtering
  const [searchText, setSearchText] = useState("");
  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(searchText.toLowerCase());
  });

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

      } finally {
        setIsLoading(false);
      }
    }

    loadUsers();
  }, []);

  return (
    <>
      <Header/>
      <hr />

      <SearchUsers
        searchText={searchText}
        setSearchText={setSearchText}
        filteredCount={filteredUsers.length}
        totalCount={users.length}
      />

      <main className='container py-4'>
        {isLoading && <LoadingUsers/>}

        {errorMessage !== "" && <ErrorMessage message={errorMessage}/>}

        {!isLoading && errorMessage === "" && filteredUsers.length > 0 && (
          <UserList users={filteredUsers}/>
        )}

      </main>
    </>
  )
}

export default App

// so for this app.jsx file 
// help me separate all of the section that can be separated on 
// app.jsx into their separate components. for example, the loading users 
// part can be a separate components, as well as the error message, 
// the search users part and the displaying users through the .map()