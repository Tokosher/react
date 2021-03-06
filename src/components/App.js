import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
    state = { videos: [] };

    onTurnSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        // response.data.items

        this.setState({ videos: response.data.items })
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTurnSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;