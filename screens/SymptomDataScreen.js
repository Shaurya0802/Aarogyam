import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { Table, Row, Rows } from 'react-native-table-component';

export class SymptomDataScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            symptom: this.props.navigation.getParam("symptom"),
            character: this.props.navigation.getParam("character"),
            treatment: this.props.navigation.getParam("treatment"),
            heading: "",
            data: [],
            error: "",
            quality: "",
            status: "",
            isReady: ""
        }
    }

    componentDidMount() {
        if (this.state.symptom === "Fatigue") {
            this.setState({
                heading: this.props.navigation.getParam("heading"),
                data: this.props.navigation.getParam("data")
            });
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={{flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'}}>
                    <Card containerStyle={{backgroundColor: "#a6e3e9"}} title={this.state.symptom} titleStyle={{fontFamily: "SemiBold", fontSize: 30, fontWeight: "bold", justifyContent: "center"}}>
                        <Card containerStyle={{backgroundColor: "#f08a5d"}} title={"Character"} titleStyle={{fontFamily: "SemiBold", fontSize: 22, fontWeight: "bold", justifyContent: "center"}}>
                            <Text style={{fontFamily: "Medium", fontSize: 15}}>{this.state.character}</Text>
                        </Card>

                        {this.state.symptom === "Fatigue" ? (
                            <Table borderStyle={{borderWidth: 2, borderColor: '#000', padding: 10, marginTop: 20}}>
                                <Row data={this.state.heading} style={{height: 40, backgroundColor: '#f6416c'}} textStyle={{margin: 6, fontFamily: "SemiBold", fontWeight: "bold"}} />
                                <Rows data={this.state.data} textStyle={{margin: 6, fontFamily: "Regular"}}  style={{backgroundColor: "#fff48f"}}/>
                            </Table>
                        ):null}

                        <Card containerStyle={{backgroundColor: "#aa96da"}} title={"Treatment"} titleStyle={{fontFamily: "SemiBold", fontSize: 22, fontWeight: "bold", justifyContent: "center"}}>
                            <Text style={{fontFamily: "Medium", fontSize: 15}}>{this.state.treatment}</Text>
                        </Card>
                    </Card>
                </View>
            </ScrollView>
        );  
    }
}

export default SymptomDataScreen