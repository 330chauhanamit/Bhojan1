import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity,Alert,ScrollView,StatusBar} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import theme from '../../Constant'

export default function manageorder(props) {
       let count
       props.route.params!=undefined? {count} = props.route.params:count={
              id: 'None',
              cnt: 0,
              price: 0
       };
      
       const [addedItem, setAddedItem] = useState([])

       useEffect(()=>{
              get();
       },[]);
       const save =  async () => {
              let finaitems
              addedItem!=null?finaitems =[...count, ...addedItem]:finaitems =[...count]
              await AsyncStorage.setItem('Data',JSON.stringify(finaitems));
       };
       const get = async () => {
              try{
                     let name = AsyncStorage.getItem('Data', (err, result) => {
                            let localdata = JSON.parse(result)
                            setAddedItem(localdata)
                     })
              
              }catch(err){
              }

       };
       function orderdelivered(){
              
              return(
                     <View style={{alignItems:'center', marginBottom:30}}>
                            <TouchableOpacity
                                   onPress={ ()=>save()}
                            >
                            <Text style={{ color:theme.g_color}}>Add order to your History</Text>
                            </TouchableOpacity>
                     </View>
              )
       }
       function header(){
       return(<View>
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
                     }}>Manage Your Order</Text>
              </View>
              </View>
       )
}
       function update(){
              return(
                    <View
                     style={{
                            flex:1,
                            padding:30,
                            margin:20,
                            alignItems: 'center',
                            borderRadius: 15,
                            justifyContent: 'center'
                     }}>
                            <TouchableOpacity
                          
                                    onPress={() => Alert.alert('Your Order Updated')}
                                   style={{
                                          flexDirection:"row",
                                          flex:1,
                                          justifyContent: 'center'
                                   }}>
                                   <View style={{
                                          width:300,
                                          height:40,
                                          alignItems: 'center',
                                          backgroundColor:theme.pri_color,
                                          borderRadius: 25,
                                          alignItems: 'center',
                                          justifyContent:'center',
                                          flexDirection:"row",
                                   }}>
                                   <Text style={{ fontWeight: 'bold', fontSize: 20, color:theme.w_color}} >Update Your Order</Text>
                                   {/* <Text> {gettotalprice()}</Text> */}
                                   </View>
                            </TouchableOpacity>
                     </View>
              )
       }
       function manage(){
             return(
                    <ScrollView
                            style={{
                            }}>
                           {count!="undefined" && count.id!='None'?count.filter(a =>a.cnt!=0).map((media, ind) =>
                            <View  key={ind}
                            style={{flexDirection:"row", 
                                          justifyContent:'space-evenly'
                                   }}>
                                   <View
                                                               style={{
                                                                      width:'100%',
                                                                      flexDirection: "row",
                                                                      justifyContent: 'space-evenly',
                                                                      padding: 5,
                                                                      backgroundColor: theme.w_color,
                                                                      marginVertical: 1,
                                                                      borderBottomWidth:1,
                                                                      borderColor:theme.pri_color
                                                               }}>
                                                               <View 
                                                               style={{ flexDirection: "row" }}key={ind}>
                                                                      <Text style={{ fontSize: 18, fontWeight: 'bold', paddingRight: 30, color:theme.b_color}} >
                                                                             {media.id}
                                                                      </Text>
                                                                      <Text style={{ fontSize: 18, fontWeight: 'bold', paddingRight: 5, color:theme.g_color }} >
                                                                             $
                                                                      </Text>
                                                                      <Text style={{ fontSize: 18, fontWeight: 'bold', paddingRight: 50, color:theme.b_color }} >
                                                                             {media.price}
                                                                      </Text>
                                                               </View>
                                                               <View pointerEvents={media.instock==false?"none":"auto"}
                                                               style={{ flexDirection: "row", marginRight: 0 }}>
                                                                      <TouchableOpacity
                                                                      //      onPress={()=>decreaseCount(media.name,media.price,count)}
                                                                             style={{
                                                                                    height: 30,
                                                                                    width: 30,
                                                                                    backgroundColor: theme.w_color,
                                                                                    alignItems: 'center',
                                                                                    justifyContent: 'center',
                                                                                    borderTopLeftRadius: 25,
                                                                                    borderBottomLeftRadius: 25
                                                                             }}>
                                                                             <Text style={{ color:theme.pri_color}}>-</Text>
                                                                      </TouchableOpacity>
                                                                      <View 
                                                                             style={{
                                                                                    height: 30,
                                                                                    width: 30,
                                                                                    backgroundColor: theme.w_color,
                                                                                    alignItems: 'center',
                                                                                    justifyContent: 'center',
                                                                             }}
                                                                      >
                                                                             <Text  style={{ color:theme.g_color}}>{media.cnt}</Text>
                                                                      </View >
                                                                      <TouchableOpacity
                                                                             // onPress={()=>Placeorder.increaseCount(media.name,media.price)}
                                                                             style={{
                                                                                    height: 30,
                                                                                    width: 30,
                                                                                    backgroundColor: theme.w_color,
                                                                                    alignItems: 'center',
                                                                                    justifyContent: 'center',
                                                                                    borderTopRightRadius: 25,
                                                                                    borderBottomRightRadius: 25
                                                                             }}>
                                                                             <Text  style={{ color:theme.pri_color}}>+</Text>
                                                                      </TouchableOpacity>
                                                               </View>

                                                        </View>
                            </View>
                           ):console.log("")}
                            
                    </ScrollView>
             )
      }
           
 
     
       return (
              <SafeAreaView style={{ backgroundColor:theme.w_color, flex:1}}>
                     {header()}
                     {manage()}
                     {update()}
                     {orderdelivered()}
              </SafeAreaView>
       )
             
       
                  
              
       
}
const style = StyleSheet.create({
       container: {
              flex: 1,
              backgroundColor: '#ffffff'
       }
})
