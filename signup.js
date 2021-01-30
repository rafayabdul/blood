// import React, { Component } from 'react';
// import { connect } from "react-redux";
// // import RestDialogBox from "../components/RestDialogBox";
// // import { callAPI, updateAPIConfig } from "../api";
// // import { restAction, API_CONTS, storeData } from "../actions/constant";
// // import { authUser, logout } from "../actions/authAction";

// import { View, Text, StyleSheet,TextInput, Button, TouchableOpacity, TouchableHighlight, ImageBackground, Image, ScrollView, } from 'react-native'
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// // import Checkbox from '../components/Checkbox'
// import Ionicons from 'react-native-vector-icons/Ionicons';

// class SignUp extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       input:"",
//       hidePassword: true,
//       email: "",
//       password: "",
//       show_password: false,
//       showAlert: true
//     }
//   }
//   handleChangeInput = (text) => {
//     this.setState({ input: text })
//   }

// //   componentDidMount() {
// //     setTimeout(() => {
// //       this.props.logout();
// //     }, 500);
// //   }


// //   loginClick = () => {
// //     try {
// //       const restInit = {
// //         IS_LOADING: true,
// //         RETURN: false,
// //         IS_RETURN: false,
// //         RETURN_MESSAGE: "Something wrong",
// //       }
// //       this.props.restAction(restInit);
// //       const postsData = callAPI(API_CONTS.LOGIN, "post", {
// //         "username": this.state.email, "password": this.state.password
// //       }).then(res => {
// //         restInit.IS_LOADING = false;
// //         restInit.RETURN_MESSAGE = res.message;
// //         restInit.IS_RETURN = true;
// //         restInit.RETURN = res.return;
// //         if (res.return === true ) {
// //           const authUserInit = {
// //             userType: res.users.usertype,
// //             authToken: res.token,
// //             userAuthenticates: true,
// //             id: res.users.id,
// //             user: res.users
// //           }
// //           restInit.IS_RETURN = false;
// //           this.setUserData(authUserInit);
// //           this.props.restAction(restInit);
// //           this.props.authUser(authUserInit)
// //         } else {
// //           this.props.logout();
// //           this.props.restAction(restInit);
// //         }
// //       });

// //     } catch (error) {
// //       this.props.restAction(
// //         {
// //           IS_LOADING: false,
// //           IS_RETURN: true,
// //           RETURN: false,
// //           RETURN_MESSAGE: "Network request failed"
// //         });
// //     }
// //   }
// //   setUserData = async (authUserInit) => {
// //     await storeData("authToken", authUserInit.authToken);
// //     updateAPIConfig(authUserInit.authToken);

// //     await storeData("userAuthenticates", authUserInit.userAuthenticates);
// //     await storeData("userType", authUserInit.userType);
// //     await storeData("id", authUserInit.id);
// //     await storeData("user", JSON.stringify(authUserInit.user));
// //   }


// //   setPasswordVisibility = () => {
// //     this.setState({ hidePassword: !this.state.hidePassword });
// //   }

//   render() {
    
//     const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//         backgroundColor: 'white',
//         marginTop:"20%"
//       },

//       header: {
//         flex: 1,
//         backgroundColor: '#2bc5c1',
//         alignItems: 'center',
//         justifyContent: 'center'

//       },
//       Curb: {
//         flex: 1,
//         backgroundColor: '#eefcfb',
//         justifyContent: 'center'
//       },

//       btn: {

//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'

//       },



//       Cards: {
//         flex: 7,
//         backgroundColor: 'white'
//       },
//       card: {

//         backgroundColor: 'white',
//         width: wp('90%'),
//         height: 150,
//         marginTop: 10,
//         alignSelf: "center",
//         borderRadius: 10,
//         alignItems: 'center',
//         justifyContent: 'center',
//         shadowColor: "#000",
//         shadowOffset: {
//           width: 0,
//           height: 1,
//         },
//         shadowOpacity: 0.15,
//         shadowRadius: 1.9,
//         elevation: 5,
//       },

//       InventoryText: {
//         fontSize: 30,
//         fontWeight: '500',
//       }


//     });
  


    
//     return (
//         <View style={styles.container}>
//           {/* <View style={{
//             height: hp("10%")
//           }}></View>

//           <View style={{
//             height: hp('20%'),
//             backgroundColor: "white",
//             justifyContent: 'center',
//             alignItems: 'center'
//           }}>

        
//           </View> */}
//           <View style={{
//             width: wp('100%'),
//             height: hp('12%'),
//             backgroundColor: "white",
//             alignItems: "center",
//             alignSelf: 'center',
//             justifyContent: 'center',
//             flexDirection: "column"
//           }}>
//             <Text style={{
//               fontSize: 28,
//               textAlign: 'center'
//             }} >Welcome to the</Text>
//             <Text style={{
//               fontWeight: 'bold',
//               fontSize: 28,
//             }}>Blood Bank App!</Text>
           
           


//           </View>




//           <View style={{
//             flex: 1,
//             paddingTop: 10
//           }}>


            


            
          
//               <TextInput

//                 onChangeText={this.handleChangeInput}
                  
//                 value={input}
                
//                keyboardType="default"
//                 placeholderTextColor='#817f81'
//                 placeholder="First Name"
//                 style={{ alignSelf: 'center',color:"red", width: wp('80%'), margin: 5, paddingLeft: 10, height: 60, borderColor: '#252525', borderRadius: 10, fontWeight: '500', fontSize: 20, padding: 5, backgroundColor: 'white', borderWidth: 1, }}
//               />
            

              
//               <TextInput

//                 // onChangeText={(text) =>
//                 //   this.setState({ email: text })
//                 // }
//                 // value={this.state.email}
//                 placeholderTextColor='#817f81'
//                 placeholder="Last Name"
//                 style={{ alignSelf: 'center', width: wp('80%'), margin: 5, paddingLeft: 10, height: 60, borderColor: '#252525', borderRadius: 10, fontWeight: '500', fontSize: 20, padding: 5, backgroundColor: 'white', borderWidth: 1, }}
//               />
//                <TextInput

// // onChangeText={(text) =>
// //   this.setState({ email: text })
// // }
// // value={this.state.email}
// placeholderTextColor='#817f81'
// placeholder="Enter Email"
// style={{ alignSelf: 'center', width: wp('80%'), margin: 5, paddingLeft: 10, height: 60, borderColor: '#252525', borderRadius: 10, fontWeight: '500', fontSize: 20, padding: 5, backgroundColor: 'white', borderWidth: 1, }}
// />
// <TextInput

// // onChangeText={(text) =>
// //   this.setState({ email: text })
// // }
// // value={this.state.email}
// placeholderTextColor='#817f81'
// placeholder="Enter Password"
// style={{ alignSelf: 'center', width: wp('80%'), margin: 5, paddingLeft: 10, height: 60, borderColor: '#252525', borderRadius: 10, fontWeight: '500', fontSize: 20, padding: 5, backgroundColor: 'white', borderWidth: 1, }}
// />
// <TextInput

// // onChangeText={(text) =>
// //   this.setState({ email: text })
// // }
// // value={this.state.email}
// placeholderTextColor='#817f81'
// placeholder="Confirm Password"
// style={{ alignSelf: 'center', width: wp('80%'), margin: 5, paddingLeft: 10, height: 60, borderColor: '#252525', borderRadius: 10, fontWeight: '500', fontSize: 20, padding: 5, backgroundColor: 'white', borderWidth: 1, }}
// />

              
//               <TouchableOpacity

//                 style={{
//                   height: 60,
//                   width: wp('40%'),
//                   backgroundColor: '#2ac4c1',
//                   justifyContent: 'center',
//                   alignSelf: 'center',
//                   alignItems: 'center',
//                   borderRadius: 8
//                 }}>
//                 <Text style={{
//                   color: 'white',
//                   fontSize: 22,
//                   fontWeight: '500'
//                 }}>Sign Up</Text>
//               </TouchableOpacity>
             
//               {/* <View style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 width: wp('80%'),
//                 alignSelf: "center",
//                 borderRadius: 10,
//                 backgroundColor: 'white',
//                 borderWidth: 1,
//                 borderColor: '#252525'
//               }}> */}
//                 {/* <TextInput
//                   onChangeText={(text) =>
//                     this.setState({ password: text })
//                   }
//                   value={this.state.password}
//                   placeholder="Password"
//                   placeholderTextColor='#817f81'
//                   style={{ width: wp('60%'), marginTop: 70, paddingRight: 60, height: "100%", fontWeight: '500', fontSize: 20 }}
//                   secureTextEntry={this.state.hidePassword}
//                   maxLength={30}
//                 /> */}
//                 {/* <TouchableOpacity onPress={() => { this.setPasswordVisibility() }}>

//                   <Ionicons name={(this.state.hidePassword) ? 'eye-off' : 'eye'} size={25} color='gray' style={{
//                     marginLeft: -10,
//                     marginLeft: 20
//                   }} />

//                 </TouchableOpacity> */}

//               {/* </View> */}
//             {/* </View> */}
//             {/* <View style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               height: hp("6%"),
//               alignSelf: 'center',
//               width: wp('82%')
//             }}> */}

//               {/* <View style={{
//                 flexDirection: 'row',
//                 justifyContent: 'flex-start',
//                 alignItems: 'center'
//               }}> */}

//                 {/* <Checkbox /> */}
//                 {/* <Text style={{
//                   width: wp('35%'),
//                   fontSize: 15,
//                   fontWeight: 'bold',

//                 }} >Remember me</Text> */}
//               {/* </View> */}
//               {/* <TouchableOpacity style={{ display: "none"}}>
//                 <View>
//                   <Text style={{
//                     textDecorationLine: 'underline',
//                     color: '#2ac4c1',
//                     fontWeight: '500',
//                     fontSize: 15,
//                     paddingRight: 10,

//                   }}>Forgot Password?</Text>
//                 </View>
//               </TouchableOpacity> */}
//             </View>


//             {/* <View style={{
//               height: hp("26%"),
//               justifyContent: "center",
//               alignItems: "flex-end"
//             }}> */}

//               {/* <TouchableOpacity

//                 style={{
//                   height: 60,
//                   width: wp('40%'),
//                   backgroundColor: '#2ac4c1',
//                   justifyContent: 'center',
//                   alignSelf: 'center',
//                   alignItems: 'center',
//                   borderRadius: 8
//                 }}>
//                 <Text style={{
//                   color: 'white',
//                   fontSize: 22,
//                   fontWeight: '500'
//                 }}>Login</Text>
//               </TouchableOpacity> */}
//             {/* </View> */}

//           {/* </View> */}
//           {/* <RestDialogBox /> */}
//         </View>
//     );
            

// // const mapStateToProps = state => ({
// //   auth: state.auth,
// //   rest: state.rest,
// // });
// // const mapDispatchToProps = dispatch => ({
// //   authUser: payload => dispatch(authUser(payload)),
// //   restAction: payload => dispatch(restAction(payload)),
// //   logout: () => dispatch(logout())
// // });
//             }}
// export default SignUp;

            
