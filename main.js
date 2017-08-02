import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import CardList from './src/components/CardList';

export default class Main extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerTitle={'Albums'} />
        <CardList />
      </View>
    );
  }
}
