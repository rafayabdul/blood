import React, { Component } from 'react';
import{View,TextInput,StyleSheet,TouchableOpacity,Text} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';






const Input = () => {
    const [value, onChangeText] = React.useState('AAAAAAAAA');
        

    

     return (

        <View accessible={true}
         style={styles.container}>

        <View style={{
            width: wp('100%'),
            height: hp('12%'),
            backgroundColor: "white",
            alignItems: "center",
            alignSelf: 'center',
            justifyContent: 'center',
            flexDirection: "column"
          }}>
              <Text style={{
              fontSize: 28,
              textAlign: 'center'
            }} >Welcome to the</Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 28,
            }}>Blood Bank App!</Text>
          </View>


          <View
          accessible={true}
           style={{
            flex: 1,
            paddingTop: 10
          }}>

        <TextInput
        editable={true}
        clearTextOnFocus={true}
        style={{ height: 60,fontSize:40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
        />
          
          </View>



         </View>

    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      marginTop:"20%"
    }
})



  
export default Input;
