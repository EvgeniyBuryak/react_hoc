import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Col, Cell, Row, Table, Rows, Cols } from 'react-native-table-component';

class TableRow extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View>
                <Cell data={this.props.obj.id}/>
                <Cell data={this.props.obj.name}/>               
            </View>
        );
    }
}
//<Text>{this.props.obj.id}</Text>                    
export { TableRow };