import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row, Rows, Cell } from 'react-native-table-component';
import { TableRow } from './table-row.view';

class StockList extends Component{
    constructor(props) {
        super(props);
        /*this.state = {
            stocks: [
                {
                    id: 1,
                    name: 'TCS'
                },
                {
                    id: 2,
                    name: 'Infosys'
                },
                {
                    id: 3,
                    name: 'Reliance'
                }
            ]
        };*/
    }
/*
    constructor(props) {
        super(props);
        this.state = {
          HeadTable: ['Head1', 'Head2', 'Head3', 'Head4', 'Head5'],
          DataTable: [
            ['1', '2', '3', '4', '5'],
            ['a', 'b', 'c', 'd', 'e'],
            ['1', '2', '3', '4', '5'],
            ['a', 'b', 'c', 'd', 'e'],
            ['1', '2', '3', '4', '5']
          ]
        }
      }
*/
    tabRow(){
        if(this.props.data instanceof Array) {
            return this.props.data.map((object, i) => {
                return [object.id, object.name];
                //return <TableRow obj={object} key={i} />;
            })
        }
    }

    /*
        <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
          <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
          <Rows data={state.DataTable} textStyle={styles.TableText}/>
        </Table>
      </View>
    }*/
    render() {        
        return (
          <View style={styles.container}>            
            <Table borderStyle={styles.borderStyle}>
                <Row data={['Stock Name', 'Stock Price']}/>
                <Rows data={this.tabRow()}/>            
            </Table>
          </View>
        )
    }
}
//<Text>{console.log(this.tabRow())}</Text>

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
//<Cell>Stock Name</Cell>
//<Cell>Stock Price</Cell>

export { StockList };