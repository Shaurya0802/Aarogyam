import React from 'react';
import LottieView from 'lottie-react-native';

export default class LogoAnimation extends React.Component {
    render() {
        return (
            <LottieView 
                source={require('../assets/21474-medical-frontliners.json')} 
                style={{width: "45%"}} 
                autoPlay 
                loop
            />
        )
    }    
}