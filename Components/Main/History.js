import React, { useState, useEffect } from 'react'
import { RefreshControl, Text, View, Button, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView,StatusBar } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import theme from '../../Constant'

const wait = (timeout) => {
       return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function History() {
       const [data, setData] = useState([])
       useEffect(()=>{
              load();
       },[])
       const load = async () => {
              try {
                     let name = AsyncStorage.getItem('Data', (err, result) => {
                            setData(JSON.parse(result));

                     }).then(() => {


                     })

              } catch (err) {
              }

       };
       const [refreshing, setRefreshing] = React.useState(false);

       const onRefresh = React.useCallback(() => {
              setRefreshing(true);
              wait(2000).then(() => setRefreshing(false));
       }, []);
       const clear = async () => {
              try {
                     await AsyncStorage.clear()
              } catch (error) {
                     console.log(error)
              }
       }
       function clearhistory() {
              return (
                     <View
                            style={{marginTop:10, 
                                   flex: 1,
                                   alignItems: 'center',
                            }}
                     >
                            <TouchableOpacity

                                   onPress={() => clear()}
                                   style={{flex:1,
                                          width: '50%',
                                          height: 30,
                                          backgroundColor: theme.pri_color,
                                          borderRadius: 25,
                                          justifyContent: 'center'
                                   }}>
                                   <View style={{
                                          justifyContent: 'center',
                                          flexDirection: 'row',
                                   }}>
                                          <Text style={{ fontWeight:  'normal', 
                                                        fontSize: theme.large_font, 
                                                        flexDirection: 'row',
                                                        color:theme.w_color}} >Clear History</Text>

                                   </View>
                            </TouchableOpacity>
                                   <Text style={{flex:1, 
                                                 fontSize: 15, 
                                                 flexDirection: 'row',
                                                 color:theme.g_color}} >Pull down to refresh</Text>
                     </View>
              )

       }
       function items() {
              return (
                     <ScrollView >
                            {data!=null?data.filter(a => a.cnt != 0).map((media, ind) =>
                            <View key={ind} style={{height:40}}>
                                   <View
                                          style={{flex: 1,
                                                 flexDirection:'row',
                                                 justifyContent: 'space-evenly',
                                                 borderBottomColor:theme.g_color,
                                                 borderBottomWidth:1
                                                 
                                          }} key={ind}>
                                          <View  style={{ flex: 1,marginLeft:30,}}>
                                                 <Text style={{ fontSize: 18, 
                                                               fontWeight:'bold',
                                                               color: theme.b_color }} 
                                                 >{media.id}
                                                 </Text>
                                          </View>
                                          <View style={{flex:1,flexDirection:'row'}}>
                                                 <Text style={{ fontSize: 18, 
                                                               fontWeight: 'bold', 
                                                               color: theme.g_color }}
                                                 >$
                                                 </Text>
                                                 <Text style={{ fontSize: 18, 
                                                               fontWeight:'bold',
                                                               color: theme.b_color }}
                                                 >{media.price}
                                                 </Text>
                                          </View>
                                          <View style={{flex:0.5}} >
                                                 <Text style={{ fontSize: 18, 
                                                               fontWeight:'bold',
                                                               color: theme.b_color }}
                                                 >{media.cnt}
                                                 </Text>
                                          </View>
                                   </View>
                            </View>
                            ):''}

                     </ScrollView>

              )
       }

       function header() {
       return(
       <View>
              <View style={{
                     flexDirection: 'row',
                     height: StatusBar.currentHeight,
                     backgroundColor: theme.pri_color
              }}
              />
              <View
                     style={{
                            padding:10,
                          height:50,
                          alignItems:'center',
                          backgroundColor:theme.pri_color
                     }}>
                     <Text style={{
                            fontSize:20,
                            fontWeight: 'bold',
                            color:theme.w_color
                     }}>History</Text>
              </View>
              </View>
              )
       }
       return (
              <SafeAreaView>
                     <ScrollView
                            refreshControl={
                                   <RefreshControl
                                          refreshing={refreshing}
                                          onRefresh={onRefresh, load}
                                   />
                            }>
                            {header()}
                            {/* {item()} */}
                            {items()}
                            {clearhistory()}
                     </ScrollView>
              </SafeAreaView>
       )

}
const style = StyleSheet.create({
       container: {
              flex: 1,
              backgroundColor: '#ffffff'
       },
       shadow: {
              shadowColor: '#000',
              width: 0,
              height: 3
       },
})
