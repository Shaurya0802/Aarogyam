import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import FirstTable from '../components/FirstTable';

export default class LiveCasesByCountry extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <HeaderComponent title={"LIVE CASES BY COUNTRY"} navigation={this.props.navigation}/>  
                    <View style={{padding: 15}}>
                        <FirstTable />
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