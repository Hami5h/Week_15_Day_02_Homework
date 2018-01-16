import React from 'react';

class SongDetail extends React.Component {

componentDidUpdate() {
  if(this.refs.audio) {
    this.refs.audio.pause();
    this.refs.audio.load();
  }
}

  render(){
    if(!this.props.song) return null;
    return (
      <div>
        <h3>
          <hr />
          Artist: {this.props.song['im:artist'].label}
          <hr />
          Title: {this.props.song['im:name'].label}
        </h3>
        <h5>
          Chart Position: {parseInt(this.props.index) + 1}
          <hr />
          Preview: <audio ref="audio" controls>
            <source src={this.props.song.link[1].attributes.href} type="audio/ogg"/>
            {/* <source src={this.props.song.link[1].attributes.href} type="audio/mpeg"/> */}
          </audio>
          <hr />
        </h5>
        <a href={this.props.song['im:collection'].link.attributes.href}>
        <img src={this.props.song['im:image'][2].label}/>
      </a>
      </div>
    );
  }
}

export default SongDetail;
