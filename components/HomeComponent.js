import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Header } from "react-native";
import { Card, Tile, Icon } from "react-native-elements";
import { ANIMALS } from "../shared/animals";

//Gotta figure out how to get images dynamically!!

function RenderItem({ items }) {
  return items.map((item) => {
    if (item) {
      return (
        <View>
          <Card featuredTitle={item.name} image={item.image}>
            <Text style={{ margin: 10 }}>{item.name}</Text>
            <Text style={{ margin: 10 }}>{`Agency: ${item.agency}`}</Text>
            <Text style={{ margin: 10 }}>{item.description}</Text>
          </Card>
        </View>
      );
    }
    return <View />;
  });
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: ANIMALS,
    };
  }

  static navigationOptions = {
    title: "Home",
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>
            Pet Connect <Icon name='paw' type='font-awesome' color='white' />
          </Text>

          <Text
            style={{
              margin: 10,
              color: "white",

              fontWeight: "bold",
            }}>
            Your New Best Friend
          </Text>
        </View>

        <Tile
          title={"1. Browse available pets"}
          imageSrc={require("./images/smile.jpg")}
          icon={{
            name: "search",
            type: "font-awesome",
            size: 50,
            color: "#fff",
          }}
          style={styles.tile}
          onPress={() => navigate("PetCategory")}
          featured></Tile>

        <Tile
          title={"2. Contact a local agency"}
          imageSrc={require("./images/gracie.jpg")}
          icon={{
            name: "compass",
            type: "font-awesome",
            size: 50,
            color: "#fff",
          }}
          style={styles.tile}
          onPress={() => navigate("Agencies")}
          featured></Tile>

        <Tile
          title={"3. Schedule a visit"}
          imageSrc={require("./images/highfive.jpg")}
          icon={{
            name: "calendar",
            type: "font-awesome",
            size: 50,
            color: "#fff",
          }}
          style={styles.tile}
          onPress={() => navigate("Schedule")}
          featured></Tile>

        <Tile
          title={"4. Bring home your new best friend"}
          imageSrc={require("./images/bestfriend.jpg")}
          icon={{
            name: "heart",
            type: "font-awesome",
            size: 50,
            color: "#fff",
          }}
          style={styles.tile}
          featured></Tile>

        <Tile
          title={"5. Keep in touch with your community"}
          imageSrc={require("./images/fiona.jpg")}
          icon={{
            name: "comment",
            type: "font-awesome",
            size: 50,
            color: "#fff",
          }}
          style={styles.tile}
          onPress={() => navigate("Community")}
          featured></Tile>

        <Text style={styles.text}>Featured New Pets!</Text>
        <RenderItem
          items={this.state.animals.filter((animal) => animal.featured)}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF5EE",
  },
  card: {
    paddingTop: 50,
    margin: 20,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 30,
    margin: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tile: {
    paddingBottom: 60,
    alignItems: "center",
    flex: 1,
  },
  name: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
  },
  header: {
    backgroundColor: "#FF4500",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
});

export default Home;
