import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity, Image } from "react-native";

export default function Profile(props) {
  const [logOut, setLogOut] = useState(false);

  const sendBack = () => {
    setLogOut(true);
  };

  const loggingOut = () => {
    setLogOut(false);
    props.navigation.navigate("Login");
  };

  const stayLogIn = () => {
    setLogOut(false);
    props.navigation.navigate("About");
  };

  return (
    <>
      <View style={Styles.container}>
        <Image
          source={{ uri: 'https://img.freepik.com/premium-photo/man-orange-vest-is-kneeling-field-with-man-vest_644690-88538.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid' }}
          style={Styles.image}
        />
        {/* User Information */}
        <View style={Styles.infoContainer}>
          <Text style={Styles.labelText}>Username</Text>
          <Text style={Styles.infoText}>Tushar Kumar</Text>
        </View>
        <View style={Styles.infoContainer}>
          <Text style={Styles.labelText}>Email</Text>
          <Text style={Styles.infoText}>tushar@gmail.com</Text>
        </View>
        <View style={Styles.infoContainer}>
          <Text style={Styles.labelText}>Location</Text>
          <Text style={Styles.infoText}>Una</Text>
        </View>

        {/* Navigation Links */}
        <View style={Styles.navigationContainer}>
          <TouchableOpacity style={Styles.navButton} onPress={() => props.navigation.navigate('Home')}>
            <Text style={Styles.navButtonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.navButton} onPress={() => props.navigation.navigate('Shop')}>
            <Text style={Styles.navButtonText}>Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.navButton} onPress={() => props.navigation.navigate('Tutorials')}>
            <Text style={Styles.navButtonText}>Tutorials</Text>
          </TouchableOpacity>

          {/* Log Out Button */}
          <TouchableOpacity style={Styles.navButton} onPress={sendBack}>
            <Text style={Styles.navButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>

        {/* Log Out Confirmation Modal */}
        <Modal animationType={"slide"} transparent={true} visible={logOut}>
          <View style={Styles.border}>
            <Text style={Styles.words}>Are you sure you want to log out?</Text>
            <View style={Styles.btnBox}>
              <TouchableOpacity style={Styles.btnLogOut} onPress={loggingOut}>
                <Text style={Styles.btnText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.btnStayIn} onPress={stayLogIn}>
                <Text style={Styles.btnText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#e0f7fa"
    // backgroundColor: "#f5f5f5",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 15,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor:"#f5f5f5",
    // backgroundColor: "#e0f7fa",
    paddingVertical: 10,
    borderRadius: 10,
    width: '80%',
  },
  labelText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#00796B",
    marginBottom: 5,
  },
  infoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#004D40",
  },
  navigationContainer: {
    marginTop: 30,
    width: '80%',
  },
  navButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  navButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  border: {
    borderWidth: 2,
    borderRadius: 10,
    width: 250,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 520,
    marginLeft: 70,
    padding: 25,
    backgroundColor: "#f7f1e3",
  },
  words: {
    fontWeight: "900",
    fontSize: 18,
    textAlign: "center",
  },
  btnBox: {
    flexDirection: "row",
    marginTop: 15,
  },
  btnLogOut: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 80,
  },
  btnStayIn: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 80,
  },
  btnLogOutMain: {
    backgroundColor: "purple",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  showMessage: {
    color: "white",
    marginBottom: 20,
    fontSize: 15,
    fontWeight: "bold",
  },
});
