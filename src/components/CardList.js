
import React, { Component } from 'react';
import { ScrollView, Linking } from 'react-native';
import axios from 'axios';
import CardDetail from './CardDetail';

class CardList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(function(response) {
      this.setState({ albums: response.data })}//,
        //() => console.log(this.state.albums));}
    .bind(this));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <CardDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default CardList;
