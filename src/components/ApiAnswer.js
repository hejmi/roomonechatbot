import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaqApi from "../services/FaqApi";

class ApiAnswer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            help: '',
            apiAnswer: []
        };
    }

    componentDidMount() {
        const {steps} = this.props;
        const {help} = steps;
        this.getApiAnswers(help.value)
    }


    getApiAnswers(q) {
        FaqApi.getAnswer(q)
            .then(response => {
                this.setState({
                    apiAnswer: response.data
                });
            })
            .catch(e => {
                console.log(e);
            })

    }

    render() {
        const { apiAnswer } = this.state;
        return (
            <div style={{width: '100%'}}>
                <table>
                    <tbody>
                    <tr>
                        {apiAnswer.map((answer, index) => (
                            <td key={index}>{answer.answerText}</td>
                        ))}
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ApiAnswer;

