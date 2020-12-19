import React from 'react';
import { Header, Icon } from 'react-native-elements';
import LinearGradient from 'expo-linear-gradient';

export default class HeaderComponent extends React.Component {
    render() {
        return (
            <Header 
                leftComponent={<Icon name='bars' type='font-awesome' color='#fff'  onPress={() => {this.props.navigation.toggleDrawer()}}/>}
                ViewComponent={LinearGradient}
                centerComponent={{text: this.props.title, style:{color: "#fff", fontFamily: "Medium", fontWeight: "bold"}}}
                linearGradientProps={{
                    colors: ["#00716F", "#00beba"],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 }
                }}
            />
        );
    }
}