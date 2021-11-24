import React, { Component } from 'react';
import { View } from 'react-native';

export default function Hoc(HocComponent, data) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: data
            };
        }

        render(){
            return (
                <HocComponent data={this.state.data} {...this.props} />
            );
        }
    }
}