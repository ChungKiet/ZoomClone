import React from 'react'
import {View, SafeAreaView, StyleSheet} from 'react-native'
import Header from '../components/Header'
import Searchbar from '../components/SearchBar'
import ContactsMenu from '../components/ContactsMenu'
import MenuButtons from '../components/MenuButtons'


function Home(){
   return (
      <View style={styles.container}>
         <SafeAreaView>
            {/* Header */}
            <Header/>

            {/* Searchbar */}
            <Searchbar/>

            {/* Menu Buttons */}
            <MenuButtons/>

            {/* Contacts Menu */}
            <ContactsMenu/>
         </SafeAreaView>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#1c1c1c',
      height: "100%",
      padding: 15
   }
})

export default Home