import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Linking, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { ListItem, Card, Icon } from "react-native-elements";
import { AGENCIES } from "../shared/agencies";

class Agencies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agencies: AGENCIES,
    };
  }

  static NavigationOptions = {
    title: "Local Agencies",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderLocalAgencies = ({ item }) => {
      return (
        <ScrollView style={styles.container}>
          <Card>
            <ListItem
              title={item.name}
              onPress={() => Linking.openURL(`${item.url}`)}
            />
             <Icon
                    name='calendar'
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => navigate('Schedule')}
                />
            
          </Card>
        </ScrollView>
      );
    };
    const maxfundRegion = {
      latitude: 39.73229,
      longitude: -104.99659,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    const dumbFriendsLeagueRegion = {
      latitude: 39.67902,
      longitude: -104.90254,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    const rockyMountainFelineRescueLeagueRegion = {
      latitude: 39.67325,
      longitude: -104.99198,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    const denverAnimalShelterRegion = {
      latitude: 39.71556,
      longitude: -105.00346,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };

    return (
      <View  >
        <Text style={{ fontSize: 18, fontWeight: "bold", margin: 15}}>Check Out Your Local Pet Adoption Agencies!</Text>
      
        <FlatList
          data={this.state.agencies}
          renderItem={renderLocalAgencies}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={styles.mapview}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 39.7,
              longitude: -104.95,
              latitudeDelta: 0.04987,
              longitudeDelta: 0.15,
            }}
            showsUserLocation>
            <Marker coordinate={maxfundRegion} />
            <Marker coordinate={dumbFriendsLeagueRegion} />
            <Marker coordinate={rockyMountainFelineRescueLeagueRegion} />
            <Marker coordinate={denverAnimalShelterRegion} />
          </MapView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "60%",
  },
  
  container: {
    flex: 1,
    backgroundColor: "grey",
    padding: 20
  },
  
  mapview:{
    padding: 20,
    
  }

});

export default Agencies;
