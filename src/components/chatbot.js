import React, {Component} from "react";
import ChatBot from "react-simple-chatbot";
import FaqApi from "../services/FaqApi";

export class Chatbot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            help: '',
            apiAnswer: '',
            opened: false,
            voice: false
        };
    }

    componentDidMount() {
        //this.getApiAnswers()
    }

    toggleFloating = ({ opened, voice }) => {
        this.setState({ opened });
        this.setState({ voice });
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
                        <ChatBot botDelay={2000} steps={steps} opened={opened} toggleFloating={this.toggleFloating} floating={true} speechSynthesis={{ enable: {voice}, lang: 'en' }} recognitionEnable={true} />
                    </div>

                </div>
            </div>
        )
    }
}
export default Chatbot;
