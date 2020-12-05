import React, { useState } from 'react';
import "./ChatScreen.css";
import Avatar from '@material-ui/core/Avatar';


const ChatScreen = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'MS Dhoni',
            image: 'https://c.ndtvimg.com/2020-07/m7opt04g_ms-dhoni-afp_625x300_06_July_20.jpg',
            message: 'Yo Whats up!'
        },
        {
            message: 'All good, you say.'
        }
    ]);
    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput('');
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH MS DHONI ON 04/12/20</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{message.message}</p>
                        </div>
                    )
            ))}
            <form className="chatScreen__input">
                <input
                    className="chatScreen__inputField"
                    type="text"
                    placeholder="Type a message..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button
                    className="chatScreen__inputButton"
                    onClick={handleSend}
                >Send</button>
            </form>
        </div>
    )
}

export default ChatScreen
