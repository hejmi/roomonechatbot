import React, {Component} from "react";
import ChatBot from "react-simple-chatbot";
import ApiAnswer from "./ApiAnswer";

export class Chatbot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            help: '',
            apiAnswer: [],
            opened: false,
            voice: false,
            answerText: ''
        };
    }


    toggleFloating = ({ opened, voice }) => {
        this.setState({ opened });
        this.setState({ voice });
    }

    render() {
        const { name, help, voice, opened } = this.state;
        const steps = [
            {
                id: '0',
                message: 'Hello and welcome to ROOM Ones chatbot, ',
                trigger: '1'
            },
            {
                id: '1',
                message: 'Who am I talking to?',
                trigger: 'name'
            },
            {
                id: 'name',
                user: true,
                placeholder: 'Enter your name please...',
                trigger: '2'
            },
            {
                id: '2',
                message: 'Hi {previousValue}! How may I help you today?',
                trigger: 'help'
            },
            {
                id: '22',
                message: 'How may I help you today?',
                trigger: 'help'
            },
            {
                id: 'help',
                user: true,
                trigger: '3'
            },
            {
                id: '3',
                message: 'Searching for {previousValue}! I found these results',
                trigger: '4'
            },
            {
                id: '4',
                component: <ApiAnswer />,
                asMessage: true,
                trigger: '5'
            },
            {
                id: '5',
                message: 'Would you like to ask anything else?',
                trigger: '6'
            },
            {
                id: '6',
                options: [
                    { value: 'yes', label: 'Yes', trigger: '22' },
                    { value: 'no', label: 'No', trigger: '7' },
                ],
            },
            {
                id: '7',
                message: 'Have a nice day!',
                end: true
            }
        ];
        return (
            <div className="contact">
                <div className="container">
                    <div className="container">
                        <ChatBot recognitionPlaceholder={'Speak now or forever hold your peace...'}
                                 headerTitle={'Room 1\'s chatbot'}
                                 style={{headerTitle: 'black', backgroundColor: 'black'}}
                                 botAvatar={'robotics.png'}
                                 userAvatar={'ninja.png'}
                                 botDelay={0}
                                 steps={steps}
                                 opened={opened}
                                 toggleFloating={this.toggleFloating}
                                 floating={true}
                                 speechSynthesis={{ enable: false, lang: 'en' }}
                                 recognitionEnable={true} />
                    </div>

                </div>
            </div>
        )
    }
}
export default Chatbot;
