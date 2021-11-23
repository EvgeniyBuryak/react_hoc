import React, { Component } from 'react';
import { View } from 'react-native';

export default function Hoc(HocComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
        }

        render(){
            return (
                <View>
                    <HocComponent></HocComponent>
                </View>
            );
        }
    }
}