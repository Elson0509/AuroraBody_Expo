import React from 'react';
import {
    StyleSheet,
    View,
  } from 'react-native';
import { Table, Row} from 'react-native-table-component';
import {wheightHeader, wheightScales} from '../utils/Constants'
import {getIndexScale} from '../utils/Functions'

const TableBMI = (props) => {
    return (
        <View>
            <Table>
                <Row data={wheightHeader} style={styles.head} textStyle={[styles.textCenter, styles.textSizeHeader, styles.textStyleHeader]}/>
                {wheightScales.map((el, ind) => (
                    <Row 
                        key={ind} 
                        data={el} 
                        style={[styles.bodyRow, props.weight && getIndexScale(props.weight)==ind ? styles.bodyRowMarkedColor : styles.bodyRowNormalColor]} 
                        textStyle={[styles.textCenter, styles.textSizeBody]}
                    />
                ))}
            </Table>
        </View>
    );
};

const styles = StyleSheet.create({
    head:{
        padding: 10,
        backgroundColor:'#ccc',
    },
    textSizeHeader:{
        fontSize:15
    },
    textStyleHeader:{
        fontWeight:"bold",
        letterSpacing:1
    },
    textSizeBody:{
        fontSize:13
    },
    bodyRow:{
        borderBottomColor:'black',
        borderBottomWidth:1,
        paddingVertical:4
    },
    bodyRowNormalColor:{
        backgroundColor:'#f5efdf',
    },
    bodyRowMarkedColor:{
        backgroundColor:'#f59b7d',
    },
    textCenter:{
        textAlign:'center'
    }
    
})

export default TableBMI;