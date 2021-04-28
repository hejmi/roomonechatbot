import React, {Component} from "react";
import ChatBot from "react-simple-chatbot";

const name = "";

export class Chatbot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            help: '',
            age: '',
        };
    }

    render() {
        const { name, help, age } = this.state;
        const steps = [
            {
                id: '0',
                message: 'Hello! Welcome to ROOM1\'s chatbot!',
                trigger: '1'
            },
            {
                id: '1',
                message: 'What is your name?',
                trigger: 'name'
            },
            {
                id: 'name',
                user: true,
                trigger: '2'
            },
            {
                id: '2',
                message: 'Hi {previousValue}! How can I help you?',
                trigger: 'help'
            },
            {
                id: 'help',
                user: true,
                trigger: '3'
            },
            {
                id: '3',
                message: 'Searching FAQs for {previousValue}...',
                end: true
            }
        ];
        return (
            <div className="contact">
                <div className="container">
                    <div className="container">

                        <ChatBot steps={steps} />

                    </div>

                </div>
            </div>
        )
    }
}
export default Chatbot