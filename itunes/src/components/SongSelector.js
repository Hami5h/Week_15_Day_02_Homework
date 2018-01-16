import React from 'react';

class SongSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: undefined
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const selectedIndex = event.target.value
    this.setState({selectedIndex: selectedIndex});
    const selectedSong = this.props.songs[selectedIndex];
    this.props.setFocusSong(selectedSong, selectedIndex);
  }

  render() {
    const options = this.props.songs.map((song, index) => {
      return(
          <option key={index} value ={index}>{song.title.label}</option>
      );
    });


    return (
      <select id="songs" value={this.state.selectedIndex}
        onChange={this.handleChange}>
        {options}
      </select>
    );
  }

}

export default SongSelector;
