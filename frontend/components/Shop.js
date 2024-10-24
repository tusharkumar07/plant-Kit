import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TextInput,ScrollView,ImageBackground } from 'react-native';
// import ServiceBg2 from "../images/Services2BgImg.jpg"
import ServiceBg from "../images/Services1BgImg.jpg"
import axios from "axios";
import { BASE_URL } from "./url"; // Import BASE_URL from config
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Fertilizer from "./Fertilizer";
import Pesticides from "./pesticides";

const Tab = createMaterialTopTabNavigator();

const Shop = () => {
  // const [data, setData] = useState([]);
  // const [show, setShow]= useState(1)
  // const [singleData,setSingleData] =useState();
  // const [showDate,setShowDate]=useState(false);
 

  // const showData=()=>{
  //   setShow(false);
  //   console.log("button clicked");
  // }

  // const hideData=()=>{
  //   setShow(1);
  // }

  // useEffect(() => {
  //   const fetchTrainData = async () => {
  //     axios.get(`${BASE_URL}/trainBtStations`).then((res)=>{
  //       setData(res.data);
  //   }).catch((err)=>{
  //       console.log(err);
  //   })
  //   };
  //     fetchTrainData();
  //   }, []);
  
  //   const searchData=()=>{
  //     setShow(2)
  //     axios.get(`${BASE_URL}/trainBtStations`).then((res)=>{
  //       setSingleData(res.data);
  //   }).catch((err)=>{
  //       console.log(err);
  //   })
  //   }

  const Frt = () => {
    return (
      <View>
        <Text>Fertilizers Screen</Text>
      </View>
    )
  }

  const Pst = () => {
    return (
      <View>
        <Text>Pesticides Screen</Text>
      </View>
    )
  }

  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          style: { backgroundColor: '#4CAF50', paddingTop: 50 }, 
          labelStyle: { fontWeight: 'bold', fontSize: 14, color: 'white' },
          
        }}
      >
        <Tab.Screen
          name="Fertilizers"
          component={Fertilizer}
          options={{
            tabBarLabel: 'Fertilizers',
          }}
        />
        <Tab.Screen
          name="Pesticides"
          component={Pesticides}
          options={{
            tabBarLabel: 'Pesticides',
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Shop;

const styles=StyleSheet.create({
  textColor:{
    color:"black",
    backgroundColor:"#dcdde1"
  },dummyData:{
    textAlign:'center',
    marginTop:20,
    fontSize:20
  },
  textAndInput:{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}
  ,
  inputHead:{
    color:"white",
    fontWeight:"700",
    fontSize:15,
    marginTop:25,
    marginRight:20
  }
  ,
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: "center",
    width:"100%"
  },
  headerDetail:{marginBottom:15,marginLeft:0,borderColor:"white",borderWidth:2,paddingLeft:20,paddingRight:20,paddingTop:20,paddingBottom:20},     
  serachContainer:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around',
    marginTop:20
  },
  SearchInput:{
    textAlign:"center",
    padding:8,
    width:200,
    textAlign:'center',
    backgroundColor:"white",
    color:"black",elevation:15,
    borderRadius:10,
    marginTop:25
  }, 
  border:{
    borderWidth:2,
    borderColor:"white",
    marginBottom:3
  },
  btnView:{
    marginRight:10,
    marginLeft:0,
    marginTop:25,
    width:150,
    alignItems:'center'
  },
  Results:{
    marginTop:20,
    textAlign:'center',
    fontSize:20,
    fontWeight:'700',
    borderBottomWidth:1,
    borderBottomColor:"white",
    paddingBottom:10,
    color:"white",
    fontWeight:'800',
    marginLeft:90,
    marginRight:90,
    marginBottom:30
  },
  dataContainer:{
    borderWidth:1,
    margin:10,
    borderColor:"white",
  },resultData:{
    textAlign:'justify',
    marginBottom:10,
    fontSize:15,
    color:"white",
    fontWeight:'900'
  },
  dataContainer:{
    marginBottom:30,
    paddingLeft:15,
    paddingRight:15,
    paddingTop:20,
    borderWidth:1,
    paddingBottom:20,
  },

  dataConstainerSingle:{
    borderColor:"purple",
    marginBottom:30,
    paddingLeft:15,
    paddingRight:15,
    paddingTop:20,
    borderWidth:2,
    paddingBottom:20,
  }
})

