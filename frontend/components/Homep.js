import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TextInput,ScrollView,ImageBackground } from 'react-native';
import ServiceBg4 from "../images/Services3BgImg.jpg";
import axios from "axios"
import { BASE_URL } from "./url"; // Import BASE_URL from config

const Homep = () => {
  const [data, setData] = useState([]);
  const [code,setCode]=useState();
  const [show, setShow]= useState(1)
  const [singleData,setSingleData] =useState();

  return (
    <ScrollView>
    
    </ScrollView>
  );
};

export default Homep;

const styles=StyleSheet.create({
  textColor:{
    color:"black",
    backgroundColor:"#dcdde1"
  },dummyData:{
    textAlign:'center',
    marginTop:20,
    fontSize:20
  },
  fetchedData:{
    marginBottom:20,
    marginLeft:70
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: "center",
    width:"100%"
  },     
  serachContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    marginTop:60
  },
  SearchInput:{
    textAlign:"center",
    padding:8,
    width:250,
    textAlign:'center',
    backgroundColor:"white",
    color:"black",elevation:15,
    borderRadius:10,
    marginTop:25
  },
  border:{
    borderWidth:2,
    borderColor:"red",
    marginBottom:3
  },
  btnView:{
    marginRight:10,
    marginLeft:-20,
    marginTop:25
  },
  btnViewSingle:{
    marginRight:10,
    marginLeft:100,
    marginTop:100,
    marginBottom:30,
    width:200
  },
  Results:{
    marginTop:20,
    textAlign:'center',
    fontSize:20,
    fontWeight:'700',
    borderBottomWidth:2,
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
  },
  singleDataContainer: {
    paddingLeft:60,
    borderWidth: 2,
    paddingTop:20,
    margin: 10,
    borderColor: 'purple',
    elevation: 5,
    marginLeft:10,
    marginBottom:220,
    marginTop:70
  },
  resultData:{
    textAlign:'justify',
    marginBottom:10,
    fontSize:15,
    color:"white",
    fontWeight:'900'
  },
  resultSingleData:{
    textAlign:'justify',
    marginBottom:20,
    fontSize:20,
    color:"white",
    fontWeight:'200'
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
    marginLeft:20,
    marginRight:20
  }
})

