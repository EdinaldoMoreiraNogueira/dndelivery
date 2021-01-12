import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Header() {
  const navigation = useNavigation();
  const handleOnPress = ()=>{
    navigation.navigate('Home')
}


  return (
    <TouchableWithoutFeedback onPress={handleOnPress} >
      <View style={styles.container}>
      <Text style={styles.text} >DV DELIVERY</Text>
      <Image source={require('../assets/logo.png')}/>
     
    </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C',
    height: 70,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    
  },

  text: {
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 25,
      letterSpacing: -0.24,
      color: '#fff', 
      marginRight:15,
      fontFamily: 'OpenSans_700Bold'

  }
});
