import React from 'react';
import {useParams} from "react-router";
const Chat=()=>{
    let {username}=useParams();
    return <h1>Chat {username}</h1>;
}

export  default Chat;
