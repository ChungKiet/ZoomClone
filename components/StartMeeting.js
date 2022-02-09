import React from 'react'
import {Text, StyleSheet, View, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function StartMeeting({name, setName, roomId, setRoomId, joinRoom}){
   return (
      <View>
         <View style={styles.startMeetingContainer}>
            <View style={styles.info}>
               <TextInput 
                  style={styles.textInput}
                  value={name}
                  placeholder="Enter Name"
                  onChangeText={text => setName(text)}>

               </TextInput>
            </View>

            <View style={styles.info}>
               <TextInput 
                  style={styles.textInput}
                  value={roomId}
                  placeholder="Enter Room ID"
                  onChangeText={text => setRoomId(text)}>

               </TextInput>
            </View>
            <View style={{alignItems: "center"}}>
               <TouchableOpacity
                  onPress={() => joinRoom()}
                  style={styles.startMeetingButton}
                  >
                  <Text style={{color: "white", fontWeight: "bold"}}>
                     Start Meeting
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#1c1c1c",
      flex: 1,

   },
   startMeetingContainer: {

   },
   info: {
      width: "100%",
      backgroundColor: "#373538",
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: "#484648",
      padding: 12,
      justifyContent: "center",
   },
   textInput: {
      color: "white",
      fontSize: 18,
   },
   startMeetingButton : {
      width: 350, 
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0470DC",
      height: 50,
      borderRadius: 15,
   }
})

export default StartMeeting