import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TextInput, Touchable, SafeAreaView, Alert} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import StartMeeting from '../components/StartMeeting';
import {io} from 'socket.io-client'
import {Camera} from 'expo-camera'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

let socket;

const menuIcons = [
   {
      id: 1,
      name: "microphone",
      title: "Mute",
      customColor: "#efefef",
   },
   {
      id: 2,
      name: "video-camera",
      title: "Stop Video"
   },
   {
      id: 3,
      name: "upload",
      title: "Share content"
   },
   {
      id: 4,
      name: "group",
      title: "Participants"
   }
]

function MeetingRoom(){
   const [name, setName] = useState("");
   const [roomId, setRoomId] = useState("");
   const [activeUser, setActiveUser] = useState()
   const [startCamera, setStartCamera] = useState(false)

   const startCameraFunc = () => {
      // const {status} = await Camera.requestPermissionsAsync();
      // if (status == "granted")
      setStartCamera(true)
      // else 
         // Alert.alert("Access denied")
   }
   const joinRoom = () => {
      setStartCamera(true)
      socket.emit('join-room', {roomId: roomId, userName: name})
   }
   useEffect(() => {
      const API_URL = "http://f13e-2402-800-63f3-cbf1-a83f-16e-10b7-c8a.ngrok.io"
      socket = io(`${API_URL}`)
      socket.on('connection', () => console.log("Connected"))
      console.log("Ayooooooo")
      // socket.on("all-users", users => {
      //    console.log("Active users")
      //    console.log(users)
      //    setActiveUser(users)
      // })
   }, [])
   return (
      <View style={styles.container}>
         { startCamera ? 
         
         (<SafeAreaView style={{flex: 1}}>
            <View style={styles.cameraContainer}>
               <Camera
                  type={"front"}
                  style={{width: "100%", height: 600}}>

               </Camera>
            </View>
            <View style={styles.menu}>
               { menuIcons.map((icon, index) =>
                  <TouchableOpacity
                     style={styles.tile}>
                     <FontAwesome name={icon.name} size={24} color={"#efefef"}></FontAwesome>
                     <Text style={styles.textTitle}> {icon.title} </Text>
                  </TouchableOpacity> )
               }
            </View>
         </SafeAreaView>) : 
         (
         <StartMeeting 
            name={name}
            setName={setName}
            roomId={roomId}
            setRoomId={setRoomId}
            joinRoom={joinRoom}
         />
         ) 
         }
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#1c1c1c",
      flex: 1,

   },
   tile : {
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      marginTop: 15
   },
   textTitle: {
      color: "white",
      marginTop: 10,
   },
   menu: {
      flexDirection: "row",
      justifyContent: "space-around"
   },
   cameraContainer: {
      flex: 1,
      backgroundColor: "black",
      justifyContent: "center"
   }
  
})

export default MeetingRoom