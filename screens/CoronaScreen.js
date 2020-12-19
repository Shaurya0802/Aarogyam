import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';
import HeaderComponent from '../components/HeaderComponent';
import { Card } from 'react-native-elements';
import { prettyPrintStat } from '../util';

export default class CoronaScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            country: "worldwide",
            countries: [],
            countryInfo: {}
        }
    }

    getAllData = async () => {
        await fetch("https://disease.sh/v3/covid-19/all").then((response) => response.json()).then((data) => {
            this.setState({
                countryInfo: data
            });
        });
    }

    getCountriesData = async () => {
        await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
            const countries = data.map((country) => ({
                name: country.country,
                value: country.countryInfo.iso2,
                flag: country.countryInfo.flag
            }));

            this.setState({
                countries: countries
            });
        });
    }

    componentDidMount() {
        this.getCountriesData();
        this.getAllData();
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <HeaderComponent title={"COVID-19 UPDATES"} navigation={this.props.navigation}/>

                    <View style={{justifyContent: "center", padding: 10, marginTop: 10}}>
                        <Picker 
                            selectedValue={this.state.country} 
                            onValueChange={async (countryCode) => {
                                this.setState({country: countryCode});
                                console.log("COUNTRY >>>", countryCode);
                                const url = countryCode === 'worldwide' ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
                                console.log("URL >>>", url);
                                await fetch(url).then((response) => response.json()).then((data) => {
                                    this.setState({
                                        countryInfo: data,
                                        country: countryCode
                                    });
                                });
                            }} 
                            style={styles.pickers} 
                            itemStyle={styles.pickerItems}
                        >
                            <Picker.Item label="Worldwide" value="worldwide" />
                            {this.state.countries.map((country) => (
                                <Picker.Item label={country.name} value={country.value}/>
                            ))}
                        </Picker>
                    </View>

                    <View>
                        <Card>
                            <Text style={{fontFamily: "Medium", fontSize: 25, textDecorationLine: "underline", fontWeight: "bold", justifyContent: "center"}}>Coronavirus Cases</Text>
                            <Text style={{fontFamily: "Regular", fontSize: 15}}>Cases Today: {prettyPrintStat(this.state.countryInfo.todayCases)}</Text>
                            <Text style={{fontFamily: "Regular", fontSize: 15}}>Total Cases: {prettyPrintStat(this.state.countryInfo.cases)}</Text>
                        </Card>

                        <Card>
                            <Text style={{fontFamily: "Medium", fontSize: 25, textDecorationLine: "underline", fontWeight: "bold", justifyContent: "center"}}>Recovered</Text>
                            <Text style={{fontFamily: "Regular", fontSize: 15}}>Recovered Cases Today: {prettyPrintStat(this.state.countryInfo.todayRecovered)}</Text>
                            <Text style={{fontFamily: "Regular", fontSize: 15}}>Total Recovered Cases: {prettyPrintStat(this.state.countryInfo.recovered)}</Text>
                        </Card>

                        <Card>
                            <Text style={{fontFamily: "Medium", fontSize: 25, textDecorationLine: "underline", fontWeight: "bold", justifyContent: "center"}}>Deaths</Text>
                            <Text style={{fontFamily: "Regular", fontSize: 15}}>Deaths Today: {prettyPrintStat(this.state.countryInfo.todayDeaths)}</Text>
                            <Text style={{fontFamily: "Regular", fontSize: 15}}>Total Deaths: {prettyPrintStat(this.state.countryInfo.deaths)}</Text>
                        </Card>

                        <Card>
                            <Text style={{fontFamily: "Medium", fontSize: 25, textDecorationLine: "underline", fontWeight: "bold", justifyContent: "center"}}>Tests</Text>
                            <Text style={{fontFamily: "Regular", fontSize: 15}}>Tests: {prettyPrintStat(this.state.countryInfo.tests)}</Text>
                        </Card>

                        <Card>
                            <Text style={{fontFamily: "Medium", fontSize: 25, textDecorationLine: "underline", fontWeight: "bold", justifyContent: "center"}}>Active Cases</Text>
                            <Text style={{fontFamily: "Regular", fontSize: 15}}>Active Cases: {prettyPrintStat(this.state.countryInfo.active)}</Text>
                        </Card>

                        <Card>
                            <Text style={{fontFamily: "Medium", fontSize: 25, textDecorationLine: "underline", fontWeight: "bold", justifyContent: "center"}}>Critical Cases</Text>
                            <Text style={{fontFamily: "Regular", fontSize: 15}}>Critical Cases: {prettyPrintStat(this.state.countryInfo.critical)}</Text>
                        </Card>
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
    },
    pickers: {
        width: 325,
        height: 44,
        backgroundColor: '#e3fdfd',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 25
    },
    pickerItems: {
        height: 44,
        color: '#0b78b3'
    }
});