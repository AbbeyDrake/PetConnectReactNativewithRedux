import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { connect } from 'react-redux';
import { baseUrl } from '../baseUrl';

const mapStateToProps = state => {
  return {
      animals: state.animals, //need to do JSON server for this.. do I need this? Can't I just use the static ANIMALS.js file?
      favorites: state.favorites
  };
};


class Favorites extends Component {

  static NavigationOptions = {
    title: "Favorites",
  };

    render() {
      const { navigate } = this.props.navigation;
      const renderFavoriteItem = ({item}) => {
          return (
              <ListItem
                  title={item.name}
                  subtitle={item.description}
                  leftAvatar={{source: {uri: baseUrl + item.image}}}
                  onPress={() => navigate('IndividualPetInfo', {animalId: item.id})}
              />
          );
      };

      return (
        <FlatList
            data={this.props.animals.animals.filter(
                animal => this.props.favorites.includes(animal.id)
            )}
            renderItem={renderFavoriteItem}
            keyExtractor={item => item.id.toString()}
        />
    );
  }
}

export default connect(mapStateToProps)(Favorites);