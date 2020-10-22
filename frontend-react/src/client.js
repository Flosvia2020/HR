import axios from 'axios'

const client=axios.create(
    {
        baseURL:"http://localhost:3000"
    }
);
client.defaults.xsrfCookieName = 'csrftoken';
client.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
export default client;