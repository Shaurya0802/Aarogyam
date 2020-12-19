import React from 'react';
import { View, Text, TextInput, Modal, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import LogoAnimation from '../components/LogoAnimation';
import RegistrationAnimation from '../components/RegistrationAnimation';
import db from '../config';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            emailId: "",
            password: "",
            confirmPassword: "",
            name: "",
            isModalVisible: false
        }
    }

    userLogin = (emailId, password) => {
        firebase.auth().signInWithEmailAndPassword(emailId, password).then(() => {
            this.props.navigation.navigate("Corona");
            Alert.alert('Successfully Logged in');
        }).catch((error) => {
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
        });
    }

    userSignUp = (emailId, password, confirmPassword) => {
        if (password !== confirmPassword) {
            return Alert.alert("Password doesn't match \n Check your password");
        } else {
            firebase.auth().createUserWithEmailAndPassword(emailId, password).then(() => {
                this.props.navigation.navigate("Corona");
                Alert.alert('Successfully Signed up');
            }).catch((error) => {
                var errorMessage = error.message;
                return Alert.alert(errorMessage);
            });

            db.collection('users').add({
                email_id: this.state.emailId,
                name: this.state.name
            });
        }
    }

    showModal = () => {
        return (
            <Modal animationType="fade" transparent={false} visible={this.state.isModalVisible} >
                <View style={styles.modalContainer}>
                    <ScrollView style={{width: "100%"}}>
                        <KeyboardAvoidingView behavior="padding" enabled>
                                <View style={{margin: 10, marginLeft: 15}}>
                                    <RegistrationAnimation />
                                </View>

                                <View style={{margin: 10}}>
                                    <TextInput 
                                        style={styles.formTextInput}
                                        placeholder={"Name"}
                                        maxLength={16}
                                        onChangeText={e => {this.setState({name: e})}}
                                    />
                                </View>

                                <View style={{margin: 10}}>
                                    <TextInput 
                                        style={styles.formTextInput}
                                        placeholder={"abc@example.com"}
                                        keyboardType={"email-address"}
                                        onChangeText={e => {this.setState({emailId: e})}}
                                    />
                                </View>

                                <View style={{margin: 10}}>
                                    <TextInput 
                                        style={styles.formTextInput}
                                        placeholder={"Password"}
                                        secureTextEntry={true}
                                        onChangeText={e => {this.setState({password: e})}}
                                    />
                                </View>

                                <View style={{margin: 10}}>
                                    <TextInput 
                                        style={styles.formTextInput}
                                        placeholder={"Confirm Password"}
                                        secureTextEntry={true}
                                        onChangeText={e => {this.setState({confirmPassword: e})}}
                                    />
                                </View>
                                
                                <TouchableOpacity 
                                    style={styles.registerButton}
                                    onPress={() => {this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)}}
                                >
                                    <Text style={styles.registerButtonText}>Register</Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
                                    style={styles.cancelButton}
                                    onPress={() => {this.setState({isModalVisible: false})}}
                                >
                                    <Text style={styles.registerButtonText}>Cancel</Text>
                                </TouchableOpacity>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>
        );
    }

    render() {
        return (
            <View style={{backgroundColor: "#fff", height: "100%"}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}></View>

                {this.showModal()}

                <View style={styles.profileContainer}>
                    <LogoAnimation />
                    <Text style={{fontSize: 26, fontFamily: "SemiBold", alignSelf: "center", justifyContent: 'center', textDecorationLine: "underline"}}>Aarogyam</Text>
                    <Text style={{fontFamily: "medium", marginHorizontal: 50, textAlign: "center", marginTop: 13, opacity: 0.4, fontSize: 10}}>"A GOOD LAUGH and A LONG SLEEP are the two BEST CURES for anything"</Text>
                </View>
            
                <KeyboardAvoidingView behavior="padding" enabled>
                    <View style={{ flexDirection:"row", alignItems:"center", marginHorizontal:55, borderWidth:2, marginTop:7, paddingHorizontal:10, borderColor:"#00716F", borderRadius:23, paddingVertical:2}}>
                        <Icon name="email" type="materialCommunityIcons" color="#00716f" size={24}/>
                        <TextInput 
                            style={{paddingHorizontal: 10, width: 300, height: 40, fontSize: 20, padding: 10}}
                            placeholder={"abc@example.com"}
                            keyboardType="email-address"
                            onChangeText={(text) => {
                                this.setState({
                                    emailId: text
                                });
                            }}
                        />
                    </View>

                    <View style={{ flexDirection:"row", alignItems:"center", marginHorizontal:55, borderWidth:2, marginTop:25, paddingHorizontal:10, borderColor:"#00716F", borderRadius:23, paddingVertical:2}}>
                        <Icon name="key" type="feather" color="#00716f" size={24}/>
                        <TextInput 
                            style={{paddingHorizontal: 10, width: 300, height: 40, fontSize: 20, padding: 10}}
                            placeholder={"Enter your password"}
                            secureTextEntry={true}
                            onChangeText={(text) => {
                                this.setState({
                                    password: text
                                });
                            }}
                        />
                    </View>
                </KeyboardAvoidingView>

                <TouchableOpacity 
                    style={{marginHorizontal:55, alignItems:"center", justifyContent:"center", marginTop:30, backgroundColor:"#00716F", paddingVertical:10, borderRadius:23}}
                    onPress={() => {this.userLogin(this.state.emailId, this.state.password)}}
                >
                    <Text style={{color: "#fff", fontFamily: "SemiBold"}}>SIGN IN</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => {this.setState({isModalVisible: true})}}
                    style={{marginHorizontal:55, alignItems:"center", justifyContent:"center", marginTop:15, backgroundColor:"#00716F", paddingVertical:10, borderRadius:23}}
                >
                    <Text style={{color: "#fff", fontFamily: "SemiBold"}}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    profileContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        flex: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginRight: 30,
        marginLeft: 30,
        marginTop: 20,
        marginBottom: 40
    },
    formTextInput: {
        width: '75%',
        height: 35,
        alignSelf: 'center',
        borderColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
        color: '#00716F'
    },
    registerButton: {
        marginHorizontal:15, 
        alignItems:"center", 
        justifyContent:"center", 
        marginTop:30, 
        backgroundColor:"#00716F", 
        paddingVertical:10, 
        borderRadius:23
    },
    registerButtonText: {
        color: "#fff",
        fontFamily: "SemiBold"
    },
    cancelButton: {
        marginHorizontal:15, 
        alignItems:"center", 
        justifyContent:"center", 
        marginTop:30, 
        backgroundColor:"#00716F", 
        paddingVertical:10, 
        borderRadius:23
    }
});