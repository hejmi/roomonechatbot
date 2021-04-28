import http from '../http-common';
class FaqApi {

    getAnswer() {
        return http.get('/chatbot/answers/questions');
    }

}
export default new FaqApi();