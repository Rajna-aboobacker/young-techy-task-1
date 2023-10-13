import { StyleSheet, Text, View ,Button,Image, TouchableOpacity,ImageBackground} from 'react-native'
import React from 'react'


const App = () => {
  return (
  <View style={{
     flex:1,
    background:'yellow',

 

 }}>
   <View style={{
    flex:2,
    background:'red',
   
 }}>
 <View style={{
  height:60,
  width:60,
  backgroundColor:'white',
  borderRadius:30,
  marginTop:12,
  marginLeft:500,
 }}>
    <Image style={{
      height:40,
      width:40,
      marginTop:12,
      marginLeft:12,
    }} source={require('./assets/Hat.png')}/>   
 </View>
  <Text style={{
    color:'white',
    fontWeight:'bold',            
    fontSize:40,
    marginLeft:500, 
    marginTop:20,       
  }}>Food for</Text>

  <Text style={{
    color:'white',
    fontWeight:'bold',
    fontSize:40,
    marginLeft:500,  
    lineHeight:18, 
    }}>Everyone</Text>
 </View>

  <View style={{
    flex:2,
    background:'red'
  }}>
  <Image style={{ 
   height:255,
   width:235,
   marginTop:2,
   marginLeft:500,
  }}  

 
   source={require('./assets/people.png')}/>  
  </View>

  <View style={{
    flex:1,
    background:'red',
    }}>
    <TouchableOpacity style={{
      backgroundColor:'white',
      height:40,
      width:250,
      borderRadius:50,
      marginLeft:500,
      marginTop:60,
      justifyContent:'center',
      alignCenter:'Text'
    }}> <Text style={{
      color:'red',
      fontSize:18,
      fontWeight:'bold',
      marginLeft:75
      
    }}>Get started</Text>
      
    </TouchableOpacity> 
    
    
    
  
  </View>

  </View>
  )
}

export default App

const styles = StyleSheet.create({})
