import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID dc98e507ab893a5dc4d91d80a53025b2f1ddaef36bb4e5b4aade54775744c896'
    }
});