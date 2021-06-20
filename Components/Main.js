import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import HistoryScreen from './Main/History';
import PlaceorderScreen from './Main/Placeorder';
import ManageorderScreen from './Main/Manageorder';
import Svg, { Path, Rect } from 'react-native-svg';
import theme from '../Constant';
import { ThemeProvider } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

//Bottom Tab Bar Buttons

const TabBarCustomButton = ( { accessibilityState, children, onPress } ) => {
    var isSelected = accessibilityState.selected;
    if ( isSelected ) {
        return (
            <View style={ { flex: 1, alignItems: "center" } }>
                <View style={ { flexDirection: 'row', position: 'absolute', top: 0 } }>
                    <View style={ { flex: 1, backgroundColor: '#ffffff' } }></View>
                    <Svg width="150" height="65">
                        <Rect
                            x="0"
                            y="0"
                            width="150"
                            height="65"
                            fill={ theme.w_color }
                        />
                    </Svg>
                    <View style={ { flex: 1, backgroundColor: '#ffffff' } }></View>
                </View>
                <TouchableOpacity
                    style={ {
                        top: -22.5,
                        justifyContent: 'center',
                        alignContent: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: theme.pri_color,
                    } }
                    onPress={ onPress }
                >
                    { children }
                </TouchableOpacity>
            </View>
        );
    }
    else {
        return (
            <TouchableOpacity
                style={ {
                    flex: 1,
                    alignContent: 'center',
                    height: 60,
                    backgroundColor: '#ffffff'
                } }
                activeOpacity={ 1 }
                onPress={ onPress }
            >
                { children }
            </TouchableOpacity>
        );

    }
};


export class Main extends Component {
    render () {
        return (
            <Tab.Navigator initialRouteName="Placeorder"
                tabBarOptions={ {
                    showLabel: false,
                    activeTintColor: theme.w_color,
                    style: { backgroundColor: "transparent", marginBottom: 10 }
                } }
            >
                <Tab.Screen name="Placeorder" component={ PlaceorderScreen }
                    options={ {
                        tabBarIcon: ( { color, size } ) => (
                            <MaterialCommunityIcons name="chef-hat" color={ color } size={ size } />
                        ),
                        tabBarButton: ( props ) => (
                            <TabBarCustomButton
                                { ...props }
                            />
                        )
                    } } />
                <Tab.Screen name="Manageorder" component={ ManageorderScreen }
                    options={ {
                        tabBarIcon: ( { color = theme.pri_color, size } ) => (

                            <MaterialCommunityIcons name="inbox-full" color={ color } size={ size } />
                        ),

                        tabBarButton: ( props ) => (
                            <TabBarCustomButton
                                { ...props }
                            />
                        )
                    } } />
                <Tab.Screen name="History" component={ HistoryScreen }
                    options={ {
                        tabBarIcon: ( { color, size } ) => (
                            <MaterialCommunityIcons name="clock-time-twelve" color={ color } size={ size } />
                        ),
                        tabBarButton: ( props ) => (
                            <TabBarCustomButton
                                { ...props }
                            />
                        )
                    } } />
            </Tab.Navigator>
        );
    }
}


export default Main;
