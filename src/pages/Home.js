import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router";

const Home=()=>{
    const [username, setUsername] = useState("");
    const navigate =useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        //check if local storage is null
        if (localStorage.getItem('usernames') !== null) {
            //check if name is in local storage
            const storedUser = JSON.parse(localStorage.getItem('usernames')).filter((item) => {
                if (item === username) {
                    navigate(`/chat/${username}`)
                   return true;
                }
                return false;
            })

            if (storedUser.length === 0) {
                addUserToLocalStorage(username)
                navigate(`/chat/${username}`)
            }

        } else {
            addUserToLocalStorage(username)

        }


    }

    function addUserToLocalStorage(name) {
        const items = [];
        items.push(JSON.parse(localStorage.getItem('usernames')))
        items.push(name)
        const merged = [].concat.apply([], items);
        localStorage.setItem('usernames', JSON.stringify(merged.filter((element)=>{return element !=null;})));
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="username">
                <Form.Control type="text" value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              placeholder="Enter username"/>
            </Form.Group>

            <Button variant="primary" type="submit">
                next
            </Button>
        </Form>
    );
}

export  default Home;
