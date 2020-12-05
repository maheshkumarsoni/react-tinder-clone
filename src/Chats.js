import React from 'react';
import Chat from './Chat';
import "./Chats.css";


const Chats = () => {
    return (
        <div className="chats">
            <Chat
                name="MS Dhoni"
                message="Yo Whats up!"
                timestamp="40 seconds ago"
                profilePic="https://c.ndtvimg.com/2020-07/m7opt04g_ms-dhoni-afp_625x300_06_July_20.jpg"
            />
            <Chat
                name="Virat Kohli"
                message="Yo Whats up!"
                timestamp="50 seconds ago"
                profilePic="https://i.pinimg.com/736x/58/f5/29/58f5295e76b6bd5dbe0cc0c55a98ce5a.jpg"
            />
            <Chat
                name="Jane"
                message="Yo Whats up!"
                timestamp="10 seconds ago"
                profilePic="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <Chat
                name="Sonny"
                message="Hey Dude!"
                timestamp="32 seconds ago"
            // profilePic="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
        </div>
    )
}

export default Chats;