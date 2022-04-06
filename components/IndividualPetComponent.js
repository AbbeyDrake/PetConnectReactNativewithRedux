import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { Card, Icon, ListItem } from "react-native-elements";
import { ANIMALS } from "../shared/animals";
import { connect } from 'react-redux';
import { baseUrl } from '../baseUrl';
import { postFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
      favorites: state.favorites
  };
};

const mapDispatchToProps = {
  postFavorite: animalId => (postFavorite(animalId))
};

function RenderIndividualPet(props) {
  const {animal} = props;
  const { navigate } = props;
  if (animal) {
    return (
      <View>
        <Card featuredTitle={animal.name} image={animal.image}>
            <Text style={{ margin: 20 }}>{animal.description}</Text>
            <Text style={{ margin: 20 }}>{`Adoption Agency: ${animal.agency}`}</Text>
            <View style={styles.cardRow}>
                <Icon
                        name={props.favorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#f50'
                        raised
                        reverse
                        onPress={() => props.favorite ? 
                            console.log('Already set as a favorite') : props.markFavorite()}
                    />
                <Icon
                    name='calendar'
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => navigate('Schedule')}
                />
            </View>
        </Card>
      </View>
    );
  }
  return <View />;
}


class IndividualPetInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      animals: ANIMALS
    }
  }
  

  markFavorite(animalId) {
    this.props.postFavorite(animalId);
}

  static NavigationOptions = {
    title: "Pet Information",
  };


  render() {
    const animalId = this.props.navigation.getParam("animalId");
    const animal = this.state.animals.filter(
      (animal) => animal.id === animalId
    )[0];
    const { navigate } = this.props.navigation;
  


    return (
  
       <RenderIndividualPet 
            animal={animal}
            favorite={this.props.favorites.includes(animalId)}
            markFavorite={() => this.markFavorite(animalId)}
            navigate = {navigate}
        />
       
    );
  }
}
const styles = StyleSheet.create({
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 30
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(IndividualPetInfo);