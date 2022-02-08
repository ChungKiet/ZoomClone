import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const contacts = [
   {
      type: "starred",
      name: "Starred"
   },
   {
      type: "contact",
      name: "Kietchung",
      photo: require('../assets/bear.jpg')
   },{
      type: "contact",
      name: "Tester",
      photo: require('../assets/bear.jpg')
   },
   {
      type: "contact",
      name: "Teddy",
      photo: require('../assets/bear.jpg')
   }
]

function ContactsMenu(){
   return (
      <View style={styles.container}>
      {/* Contact container */}
         { contacts.map((item, index) => 
            <View 
               key={index}
               style={styles.row}>
            {/* Image */}
               { item.type == "starred"? (
               <View style={styles.starredIcon}>
                  <AntDesign name="star" size={30} color={"#efefef"} />
               </View> ) : 
               (
                  <Image source={item.photo} style={styles.image}/>
               )
               }
               {/* Text */}
               <View>
                  <Text style={styles.text}>
                     {item.name}
                  </Text>
               </View>
            </View>   
         )}
      </View>
   )
}

const styles = StyleSheet.create({
   container : {
      
   },
   row: {
      flexDirection: "row",
      marginTop: 20,
      alignItems: "center",
   },
   starredIcon : {
      backgroundColor: "#333333",
      width: 55,
      height: 55,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
   },
   text : {
      color: "white",
      paddingLeft: 15,
      fontSize: 18,
   },
   image : {
      width: 55,
      height: 55,
      borderRadius: 20,
   }
})

export default ContactsMenu