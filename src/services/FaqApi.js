import http from '../http-common';
class FaqApi {

    getAnswer(q) {
        return http.get(`/chatbot/answers?question=${q}`);
    }

}
export default new FaqApi();