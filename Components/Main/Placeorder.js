import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../Constant';



export default function Placeorder ( { navigation } ) {
       let fcnt = 0;
       let finalrate = 0;
       // All Menu....
       const menu = {
              cat1: [
                     { name: 'XYZ', price: 100, instock: true },
                     { name: 'ABC', price: 934, instock: false },
                     { name: 'OTR', price: 945, instock: true }, { name: 'SLG', price: 343, instock: true },
                     { name: 'KGN', price: 342, instock: true },
                     { name: 'GDS', price: 234, instock: true }, { name: 'KNL', price: 934, instock: true },
                     { name: 'GLM', price: 320, instock: true },
                     { name: 'DKF', price: 394, instock: false },
                     { name: 'VFS', price: 854, instock: true },
              ],
              cat2: [
                     { name: 'NA', price: 124, instock: true }, { name: 'DS', price: 953, instock: true },
                     { name: 'HF', price: 100, instock: true }, { name: 'FJ', price: 583, instock: true },
                     { name: 'LS', price: 945, instock: false }, { name: 'TR', price: 394, instock: true },
                     { name: 'PD', price: 35, instock: true }, { name: 'AL', price: 125, instock: true },
                     { name: 'TK', price: 129, instock: true }, { name: 'PG', price: 294, instock: true },
              ],
              cat3: [
                     { name: 'A', price: 294, instock: true }, { name: 'B', price: 125, instock: true },
                     { name: 'C', price: 256, instock: true }, { name: 'D', price: 100, instock: true },
                     { name: 'E', price: 100, instock: true }, { name: 'F', price: 530, instock: true },
                     { name: 'G', price: 100, instock: true }, { name: 'H', price: 100, instock: true },
                     { name: 'I', price: 395, instock: true },
              ],
              cat4: [
                     { name: 'J', price: 100, instock: true }, { name: 'K', price: 100, instock: true },
                     { name: 'L', price: 125, instock: false }, { name: 'M', price: 530, instock: true },
                     { name: 'N', price: 100, instock: true }, { name: 'O', price: 395, instock: true },
                     { name: 'P', price: 100, instock: true }, { name: 'Q', price: 400, instock: true },
                     { name: 'R', price: 100, instock: true }, { name: 'S', price: 256, instock: true },
              ], cat5: [
                     { name: 'T', price: 100, instock: false }, { name: 'U', price: 100, instock: true },
                     { name: 'V', price: 395, instock: true }, { name: 'W', price: 100, instock: true },
                     { name: 'X', price: 100, instock: false }, { name: 'Y', price: 125, instock: true },
                     { name: 'Z', price: 530, instock: true },
              ],
              cat6: [
                     { name: 'ABCD', price: 400, instock: true },
                     { name: 'PROS', price: 256, instock: true },
                     { name: 'NFDD', price: 200, instock: true },
                     { name: 'LFKR', price: 200, instock: true },
              ]
       };
       const [count, setCount] = useState( [
              {
                     id: 'A',
                     price: 0,
                     cnt: 0
              }
       ] );

       // Get the price
       function gettotalprice () {
              let temp = count.filter( anon => anon.cnt != 0 );
              let total = temp.reduce( ( a, v ) => a = a + v.price, 0 );
              return total;
       }

       //Decrease Count of Items  

       const decreaseCount = ( name, rate ) => {
              let temp = count.filter( anon => anon.id != name );
              let temp1 = count.filter( anon => anon.id === name );
              let cnt2 = 0;
              temp1.length != 0 ? finalrate = rate * ( getcount( name ) - 1 ) : finalrate = rate;
              temp1[0].cnt > 0 ? cnt2 = temp1[0].cnt - 1 : cnt2 = 0;
              setCount( [...temp, {
                     id: name,
                     cnt: cnt2,
                     price: finalrate
              }] );
       };
       //Increase count of Items
       const increaseCount = ( name, rate ) => {
              let temp = count.filter( anon => anon.id != name );
              let temp1 = count.filter( anon => anon.id === name );
              let price = 0;
              let cnt2 = 0;
              temp1.length != 0 ? finalrate = rate * ( getcount( name ) + 1 ) : finalrate = rate;
              temp1.length != 0 ? cnt2 = temp1[0].cnt + 1 : cnt2 = 1;
              setCount( [...temp, {
                     id: name,
                     cnt: cnt2,
                     price: finalrate
              }] );

       };

       //Get the count
       const getcount = ( name1 ) => {
              let temp = ( count.filter( a => a.id === name1 ) );
              fcnt = temp.length == 0 ? 0 : temp[0].cnt;
              return fcnt;
       };

       const [menuitems, setMenuitems] = useState( 'cat1' );

       //PlaceOrder Component
       function placeorder () {
              return (
                     <View
                            style={ {
                                   width: '100%',
                                   flex: 1,
                                   marginBottom: 30,
                                   padding: 30,
                                   alignItems: 'center',
                                   borderRadius: 15,
                                   justifyContent: 'center'
                            } }>
                            <TouchableOpacity

                                   onPress={ () => navigation.navigate( 'Manageorder', { count } ) }
                                   style={ {
                                          flexDirection: 'row',
                                          flex: 1,
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                   } }>
                                   <View style={ {
                                          width: 300,
                                          height: 40,
                                          borderRadius: 25,
                                          alignItems: 'center',
                                          justifyContent: 'space-evenly',
                                          flexDirection: 'row',
                                          backgroundColor: theme.pri_color
                                   } }>
                                          <Text style={ {
                                                 fontWeight: 'normal',
                                                 fontSize: 20,
                                                 flexDirection: 'row',
                                                 color: theme.w_color
                                          } }
                                          >Place Your Order
                                          </Text>
                                          <Text style={ {
                                                 fontWeight: 'bold',
                                                 fontSize: 20,
                                                 flexDirection: 'row',
                                                 color: theme.w_color
                                          } }
                                          > { gettotalprice() }
                                          </Text>
                                   </View>
                            </TouchableOpacity>
                     </View>
              );
       }

       // Header Component
       function header () {
              return (
                     <View>
                            <View style={ {
                                   flexDirection: 'row',
                                   height: StatusBar.currentHeight,
                                   backgroundColor: theme.pri_color
                            } }
                            />
                            <View style={ {
                                   flexDirection: 'row',
                                   height: 55,
                                   backgroundColor: theme.pri_color
                            } }
                            >
                                   <TouchableOpacity
                                          style={ {
                                                 justifyContent: 'center',
                                                 paddingLeft: 30
                                          } }
                                   >
                                          <MaterialCommunityIcons name="google-maps"
                                                 color={ theme.sec_color }
                                                 size={ 26 } />
                                   </TouchableOpacity>
                                   <View style={ {
                                          flex: 1,
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                   } }
                                   >
                                          <Text style={ {
                                                 fontSize: theme.mid_font,
                                                 color: theme.sec_color,
                                                 fontWeight: 'bold'
                                          } }
                                          >Gurugaon
                                          </Text>
                                   </View>
                                   <TouchableOpacity
                                          style={ {

                                                 justifyContent: 'center',
                                                 paddingRight: 30
                                          } }
                                   >
                                          <MaterialCommunityIcons name="account"
                                                 color={ theme.sec_color }
                                                 size={ 26 } />
                                   </TouchableOpacity>
                            </View>
                     </View>
              );

       }

       // Menuitem Component

       function menuitem () {

              return (

                     <ScrollView
                            showsVerticalScrollIndicator={ false }
                     >
                            <View
                                   style={ {
                                          backgroundColor: theme.pri_color,
                                   } }>
                                   <Text style={ { fontWeight: 'bold', fontSize: 28, color: theme.w_color } }>Main</Text>
                                   <Text style={ { fontWeight: 'bold', fontSize: 25, color: theme.w_color } }>Categories</Text>
                            </View>
                            <View >
                                   <ScrollView
                                          horizontal={ true }
                                          showsHorizontalScrollIndicator={ false }
                                          style={ {
                                                 flexDirection: 'row',
                                          } }>
                                          { Object.keys( menu ).map( ( item, i ) => (
                                                 <View key={ i }
                                                        style={ {
                                                               backgroundColor: theme.pri_color,
                                                               flexDirection: 'row',
                                                               borderWidth: 0
                                                        } }>
                                                        <TouchableOpacity
                                                               onPress={ () => setMenuitems( item ) }
                                                               style={ {
                                                                      width: 75,
                                                                      flex: 1,
                                                                      padding: 10,
                                                                      alignItems: 'center',
                                                                      borderRadius: 5,
                                                                      justifyContent: 'center',
                                                               } }
                                                        >
                                                               <View
                                                                      style={ {
                                                                             height: 30,
                                                                             width: 30,
                                                                             backgroundColor: theme.t_color,
                                                                             alignItems: 'center',
                                                                             justifyContent: 'center',
                                                                             borderRadius: 25,
                                                                             borderWidth: 2,
                                                                             borderColor: theme.sec_color
                                                                      } }>

                                                               </View>
                                                               <View style={ {
                                                                      flex: 1,
                                                                      alignItems: 'center',
                                                                      paddingHorizontal: 10,
                                                                      backgroundColor: item == menuitems ? theme.sec_color : theme.t_color,

                                                                      borderRadius: 7,
                                                                      justifyContent: 'space-evenly',
                                                               } }
                                                               >
                                                                      <Text style={ {
                                                                             fontSize: theme.large_font,
                                                                             fontWeight: 'bold',
                                                                             color: item == menuitems ?
                                                                                    theme.pri_color : theme.sec_color,
                                                                      } }
                                                                      >{ item }
                                                                      </Text>
                                                               </View>
                                                        </TouchableOpacity>
                                                 </View>
                                          ) ) }
                                   </ScrollView>
                                   <View
                                          style={ style.shadow, {
                                          } }>
                                          { menu[menuitems].map( ( media, ind ) =>
                                                 <View key={ ind }
                                                        style={ {

                                                               alignItems: 'center',
                                                               flexDirection: 'row',
                                                               justifyContent: 'space-evenly',
                                                               padding: 5,
                                                               borderBottomWidth: 1,
                                                               borderBottomColor: theme.pri_color
                                                        } }>
                                                        <View
                                                               key={ ind }>
                                                               <Text style={ {
                                                                      fontSize: 18,
                                                                      fontWeight: 'bold',
                                                                      color: theme.g
                                                               } } >
                                                                      { media.name }
                                                               </Text>
                                                        </View>
                                                        <View
                                                               style={ { flexDirection: 'row' } }>
                                                               <Text style={ {
                                                                      fontSize: 18,
                                                                      fontWeight: 'normal',
                                                                      paddingRight: 5,
                                                                      color: theme.g_color
                                                               } } >
                                                                      $
                                                               </Text>
                                                               <Text style={ {
                                                                      fontSize: 18,
                                                                      fontWeight: 'bold',
                                                                      color: theme.g_color
                                                               } } >
                                                                      { media.price }
                                                               </Text>
                                                        </View>

                                                        { getcount( media.name ) == 0 ?
                                                               <View pointerEvents={ media.instock == false ? "none" : "auto" }>
                                                                      <TouchableOpacity

                                                                             onPress={ () => increaseCount( media.name, media.price ) }
                                                                             style={ {
                                                                                    height: 32,
                                                                                    width: 93,
                                                                                    backgroundColor: theme.s2_color,
                                                                                    alignItems: 'center',
                                                                                    justifyContent: 'center',
                                                                                    borderRadius: 25,
                                                                                    borderWidth: 1,
                                                                                    borderColor: theme.pri_color
                                                                             } }>
                                                                             <Text style={ { color: theme.pri_color } }>Add</Text>
                                                                      </TouchableOpacity>
                                                               </View> :
                                                               <View pointerEvents={ media.instock == false ? "none" : "auto" }
                                                                      style={ { flexDirection: 'row', marginRight: 0, borderWidth: 1, borderRadius: 25 } }>
                                                                      <TouchableOpacity
                                                                             onPress={ () => decreaseCount( media.name, media.price ) }
                                                                             style={ {
                                                                                    height: 30,
                                                                                    width: 30,
                                                                                    backgroundColor: theme.w_color,
                                                                                    alignItems: 'center',
                                                                                    justifyContent: 'center',
                                                                                    borderTopLeftRadius: 25,
                                                                                    borderColor: theme.pri_color,
                                                                                    borderBottomLeftRadius: 25,
                                                                             } }>
                                                                             <Text style={ { color: theme.pri_color } }>-</Text>
                                                                      </TouchableOpacity>
                                                                      <View
                                                                             style={ {
                                                                                    height: 30,
                                                                                    width: 30,
                                                                                    backgroundColor: theme.w_color,
                                                                                    alignItems: 'center',
                                                                                    justifyContent: 'center',
                                                                                    borderColor: theme.pri_color
                                                                             } }
                                                                      >
                                                                             <Text style={ { color: theme.g_color } }>{ getcount( media.name ) }</Text>
                                                                      </View >
                                                                      <TouchableOpacity
                                                                             onPress={ () => increaseCount( media.name, media.price ) }
                                                                             style={ {
                                                                                    height: 30,
                                                                                    width: 30,
                                                                                    backgroundColor: theme.w_color,
                                                                                    alignItems: 'center',
                                                                                    justifyContent: 'center',
                                                                                    borderTopRightRadius: 25,
                                                                                    borderBottomRightRadius: 25,
                                                                                    borderColor: theme.pri_color
                                                                             } }>
                                                                             <Text style={ { color: theme.pri_color } }>+</Text>
                                                                      </TouchableOpacity>
                                                               </View> }
                                                 </View> ) }
                                   </View>
                            </View>
                     </ScrollView>

              );
       }


       return (
              <SafeAreaView style={ style.container }>
                     { header() }
                     { menuitem() }
                     { placeorder() }
              </SafeAreaView>
       );
}

const style = StyleSheet.create( {
       container: {
              flex: 1,
              backgroundColor: '#ffffff'
       },
       shadow: {
              shadowColor: '#000',
              width: 4,
              height: 10
       },
} );
