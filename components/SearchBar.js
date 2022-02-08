import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'

function Searchbar(){
   return (
      <View style={styles.container}>
         <Fontisto name='search' size={28} color={"#858585"} />
         <Text style={styles.textSearcBbar}> Search</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#333333",
      flexDirection: "row",
      paddingHorizontal: 10,
      height: 40,
      alignItems: "center",
      borderRadius: 10
   },
   textSearcBbar : {
      color: "#858585",
      paddingLeft: 10, 
      fontSize: 20
   }
})

export default Searchbar