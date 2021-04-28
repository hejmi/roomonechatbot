import React, {Component} from "react";
import ChatBot from "react-simple-chatbot";
import FaqApi from "../services/FaqApi";

export class Chatbot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            help: '',
            apiAnswer: ''
        };
    }

    componentDidMount() {
        this.getApiAnswers()
    }

    getApiAnswers(q) {
        FaqApi.getAnswer('delivery')
            .then(response => {
                this.setState({
                    apiAnswer: response.data
                });
                this.state.apiAnswer.map((answer) => (
                    console.log(answer.answerText)
                ))

            })
            .catch(e => {
                console.log(e);
            })

    }

    render() {
        const { name, help, speech } = this.state;
        const steps = [
            {
                id: '0',
                message: 'Hello! Welcome to ROOM Ones chatbot!',
                trigger: '1'
            },
            {
                id: '1',
                message: 'Please enter your name',
                trigger: 'name'
            },
            {
                id: 'name',
                user: true,
                trigger: '2'
            },
            {
                id: '2',
                message: 'Hi {previousValue}! How may I help you?',
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
                        <ChatBot speechSynthesis={{ enable: true, lang: 'en' }} recognitionEnable={true} steps={steps} />
                    </div>

                </div>
            </div>
        )
    }
}
export default Chatbot;
