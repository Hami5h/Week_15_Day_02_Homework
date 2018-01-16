import React from 'react';
import SongSelector from '../components/SongSelector';
import SongDetail from '../components/SongDetail';

class MusicContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      focusSong: null,
      selectedIndex: null
    };
    this.setFocusSong = this.setFocusSong.bind(this);
}

setFocusSong(song, selectedIndex) {
    this.setState({focusSong: song, selectedIndex: selectedIndex});
  }


componentDidMount() {
  const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', () => {
    if(request.status !==200) return;
    const jsonString = request.responseText;
    const songs = JSON.parse(jsonString);
    this.setState({songs: songs.feed.entry});
  });
  request.send();
}

render(){
    return (
      <div>
        <h2>Hit Parade Top 20</h2>
        <SongSelector songs={this.state.songs}
        setFocusSong={this.setFocusSong} />
        <SongDetail song={this.state.focusSong} index={ this.state.selectedIndex }/>
      </div>
    );
  }

}

export default MusicContainer;
