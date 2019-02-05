import React, {Component} from 'react';
import './style.css';
import ChatBot from 'react-simple-chatbot';

class Chatbot extends Component {
    render(){
        return(
            <ChatBot
                steps={[
                    {
                    id: 'hello-world',
                    message: 'Hello World!',
                    end: true,
                    },
                ]}
            />
        )
    }
}
export default Chatbot;