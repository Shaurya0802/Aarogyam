import React from 'react';
import { Text, View, Image, ScrollView, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { sortData, prettyPrintStat } from '../util';

export default class FirstTable extends React.Component {
    constructor() {
        super();
        this.state={
            tableData: []
        }
    }

    getTableData = async () => {
        await fetch("https://disease.sh/v3/covid-19/countries").then((response) => response.json()).then((data) => {
            const sortedData = sortData(data);
            this.setState({tableData: sortedData});
        });
    }

    componentDidMount() {
        this.getTableData();
    }

    keyExtractor = (index) => index.toString()

    renderItem = ({item}) =>{
        return (
            <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", padding: 5, borderBottomWidth: 1}}>
                <View>
                    <Image style={{width: 40, height: 30}} source={{uri: item.countryInfo.flag}}/>
                    <Text style={{fontFamily: "Regular", color: "#6a5d5d"}}>{item.country}</Text>
                </View>
                <View> 
                    <Text style={{fontWeight: "bold", color: "#6a5d5d"}}>{item.cases}</Text>
                    <Text style={{fontFamily: "Regular", color: "#6a5d5d"}}>{prettyPrintStat(item.cases)}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Card>
                        <FlatList 
                            keyExtractor={this.keyExtractor}
                            data={this.state.tableData}
                            renderItem={this.renderItem}
                        />
                    </Card>
                </View>
            </ScrollView>
        ); 
    }
}