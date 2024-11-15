import React, { useState, useEffect } from "react";
import API from './api'
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

function Admin() {
    // Step 1: Create state to hold users
    const [users, setUsers] = useState([]);

    // Step 2: Fetch users on component mount
    useEffect(() => {
    async function fetchUsers() {
        try {
        const data = await API.getAllUsers();
        setUsers(data); // Update state with fetched users
        } catch (error) {
        console.error("Error fetching users:", error);
        }
    }

    fetchUsers();
  }, []); // Empty dependency array ensures it runs only on mount

    // Step 3: Render the list of users
    return (
    <>
        <h1>User List</h1>
        <ListGroup>
        {users.length > 0 ? (
            users.map((user) => (
            <ListGroup.Item action as="li" key={user.id}>
                <p>{user.email}</p>
                <p>Status: {user.state}</p>
            </ListGroup.Item>
        ))
        ) : (
            <p>No users found</p>
        )}
        </ListGroup>
        <Link to="/">Back</Link>
    </>
  );
}

export default Admin;