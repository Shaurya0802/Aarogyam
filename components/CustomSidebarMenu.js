import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { DrawerItems } from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomSidebarMenu extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 0.5}}>
                    <DrawerItems {...this.props}/>
                </View>

                <View style={styles.logOutContainer}>
                    <TouchableOpacity 
                        style={styles.logOutButton}
                        onPress = {() => {
                            this.props.navigation.navigate('LoginScreen');
                            firebase.auth().signOut();
                        }}
                    >
                        <Icon name="logout" type="antdesign" size={20} iconStyle={{paddingLeft: 10}}/>
                        <Text style={{fontSize: 15, fontWeight: "bold", marginLeft: 30}}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logOutContainer : {
        flex:0.2,
        marginTop: 5,
        alignItems: "center",
        alignSelf: "center"
    },
    logOutButton : {
      height:30,
      width:'100%',
      justifyContent:'center',
      padding:10
    }
});