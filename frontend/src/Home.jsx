import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>Yodlr Design Challenge</h1>
            <p>
                <Link to="/users">Registration Page</Link><br/>
                <Link to="/users/admin">Admin Page</Link>
            </p>
        </>
    )
}

export default Home;