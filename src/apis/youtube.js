import axios from 'axios';

const KEY = 'AIzaSyD0rpYmIfB5Ycwt0-zbDwDkGGkvzknqFd0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})