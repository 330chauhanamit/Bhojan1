import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Text, Image } from 'react-native';
import theme from '../Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = () => {
       // const [usr, setUsr] = useState( '' );
       // const [pass, setPass] = useState( '' );
       const [usr, setUsr] = useState( {
              user: '',
              pass: '',
       } );
       console.log( usr.user );
       const [alert, setAlert] = useState( '' );
       const login = async () => {
              const { user, pass } = usr;
              console.log( user + ' ' + pass );
              if ( user.length === 0 )
                     setAlert( 'Username is required' );
              else if ( pass.length === 0 )
                     setAlert( 'Password is required' );
              else {

                     try {
                            await AsyncStorage.setItem( "userdata", JSON.stringify( usr ) );

                     } catch ( error ) {
                            console.log( error );
                     }
                     try {
                            let result = await AsyncStorage.getItem( 'userdata' );
                            let localdata = JSON.parse( result );
                     } catch ( err ) {
                            console.log( err );
                     }
              };

       };

       return (
              <View style={ {
                     flex: 1,
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
              } }>
                     <View>
                            <Image
                                   source={ {
                                          uri: 'https://png.pngtree.com/element_our/png_detail/20180910/food-logo-vector-design.-restaurant-and-cafe-logo.-png_90113.jpg'
                                   } }
                                   style={ {
                                          width: 250,
                                          height: 250
                                   } }
                            />
                     </View>
                     <View>
                            <Text>Login</Text>
                     </View>
                     <View >
                            <TextInput style={ style.input }
                                   onChangeText={ ( user ) => setUsr( { user } ) }
                                   placeholder='Username'></TextInput>
                     </View>
                     <View>
                            <TextInput style={ style.input }
                                   onChangeText={ ( pass ) => setUsr( { pass} ) }
                                   placeholder='Password' secureTextEntry={ true }></TextInput>
                     </View>
                     <View style={ style.buttons_container }>
                            <View style={ style.login_btn }>
                                   <Button onPress={ login } title='Login' color={ theme.pri_color } />
                            </View>
                            <View style={ style.login_btn }>
                                   <Button title='Signup' color={ theme.g_color } />
                            </View>
                     </View>
                     <View styel={ style.footer }>
                            <Text>copyright &copy; Rasoi</Text>
                     </View>

              </View >
       );

};

export default Login;

const style = StyleSheet.create( {
       input: {
              borderColor: theme.g_color,
              borderRadius: 5,
              borderWidth: 2,
              margin: 10,
              width: '100%',
              height: 40,
              fontSize: 20
       },
       buttons_container: {
              flexDirection: 'row',
              justifyContent: 'space-evenly',
       },
       login_btn: {
              margin: 20
       },
       footer: {
              bottom: 10
       }
} );
