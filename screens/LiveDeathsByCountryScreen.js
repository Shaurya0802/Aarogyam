import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import SecondTable from '../components/SecondTable';

export default class LiveDeathsByCountry extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <HeaderComponent title={"LIVE DEATHS BY COUNTRY"} navigation={this.props.navigation}/>  
                    <View style={{padding: 15}}>
                        <SecondTable />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f6fa'
    }
});