import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const ResultBox = (props) => {
    return (
        <View style={[styles.box, styles.border]}>
            <Text style={[styles.resultText, styles.sizeText]}>Your Result:</Text>
            <Text style={[styles.resultText, styles.sizeResult, styles.boldResult]}>{props.result}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    box:{
      marginBottom: 20,
      backgroundColor:'#9426c9'
    },
    border:{
        borderColor:'white',
        borderWidth: 3,
        borderRadius: 20,
    },
    resultText:{
      paddingTop: 10,
      paddingBottom: 10,
      color:'white',
      textAlign:'center',
    },
    sizeText:{
      fontSize:12
    },
    sizeResult:{
      fontSize:22
    },
    boldResult:{
        fontWeight:'bold'
    }
});

export default ResultBox;