import React, { useState, useEffect } from 'react';

const UserList = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données depuis l\'API', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {/* Map sur la liste des utilisateurs pour les afficher */}
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
