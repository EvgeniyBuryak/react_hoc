import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row, Rows, Cell } from 'react-native-table-component';
import { TableRow } from './table-row.view';

class UserList extends Component{
    constructor(props){
        super(props);
        /*this.state = {
            users: [
                {
                    id: 1,
                    name: 'Krunal'
                },
                {
                    id: 2,
                    name: 'Ankit'
                },
                {
                    id: 3,
                    name: 'Rushabh'
                }
            ]
        };*/
    }

    tabRow(){
        if(this.props.data instanceof Array) {
            return this.props.data.map((object, i) => {
                return [object.id, object.name];
                //return <TableRow obj={object} key={i} />;
            })
        }
    }

    render() {        
        return (
          <View style={styles.container}>            
            <Table borderStyle={styles.borderStyle}>
                <Row data={['User ID', 'User Name']}/>
                <Rows data={this.tabRow()}/>            
            </Table>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'green',
        borderWidth: 1,
        width: 310,
        height: 150
    },
    borderStyle: {
        borderWidth: 1, 
        borderColor: '#ffa1d2'
    }
});

export { UserList };