import React, { useEffect, useState } from 'react';
import Container from './component/Container.jsx';
import FilterInput from './component/FilterInput.jsx';
import Table from './component/Table.jsx';
import Jumbotronheader from './component/Jumbotron.jsx';
import { getUsers } from './utils/API.jsx';
import './App.css';

function App() {
  const [initialUsers, updateAvailableUsers] = useState([]);
  const [usersToRender, updateUsersToRender] = useState([]);

  useEffect(() => {
    getUsers().then(({ data: { results } }) => updateAvailableUsers(results));
  }, []);

  return (
    <Container fluid={true}>
      <Jumbotronheader />
      <div className='App'>
        <p>Search by First Name!</p>
        <FilterInput users={initialUsers} updateUsers={updateUsersToRender} />

        <Table users={usersToRender} dark={true} />
      </div>
    </Container>
  );
}

export default App;