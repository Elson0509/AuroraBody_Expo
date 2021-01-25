import React, {useState, Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import InputBox from './components/InputBox'
import BtnCalculate from './components/BtnCalculate'
import TableBMI from './components/TableBMI'
import ResultBox from './components/ResultBox'
import ResultReport from './components/ResultReport'
import {calcBmi} from './utils/Functions'

export default function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState(0)

  const calcImc=()=>{
    if(weight<=0 || !weight){
      alert('Please, inform your Weight!') 
      setResult('')
      return
    }
    if(height<=0 || !height){
      alert('Please, inform your Height!'); 
      setResult('')
      return
    }
    setResult(calcBmi(weight, height))
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.body}>
        <View style={[styles.box, styles.borderBottomTitle, styles.marginTop]}>
          <Text style={styles.fontTitle}>Aurora Body</Text>
          <Text style={styles.fontTitle}>BMI Calculator</Text>
        </View>
        <InputBox text="Weight (Kg):" value={weight} changed={value=>setWeight(value)}/>
        <InputBox text="Height (cm):" value={height} changed={value=>setHeight(value)}/>
        <BtnCalculate text="Calculate" press={()=>calcImc()}/>
        {result ? 
          <Fragment>
            <ResultBox result={result}/>
            <View style={styles.box}>
              <TableBMI weight={result}/>
            </View>
            <ResultReport weight={weight} height={height} result={result}/>
          </Fragment>
        : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body:{
    padding:10,
    backgroundColor:'#8e5da6',
    minHeight:'100%'
  },
  fontTitle:{
    textAlign:'center',
    color:'white',
    fontSize:16,
    paddingBottom: 5,
    fontFamily:'serif',
    fontWeight:'bold',
    letterSpacing:2,
  },
  box:{
    marginBottom: 20
  },
  borderBottomTitle:{
    borderBottomColor:'white',
    borderBottomWidth: 3,
  },
  marginTop:{
    marginTop:15,
  },
  borderTop:{
    borderTopColor:'white',
    borderTopWidth: 1,
  },
  resultText:{
    paddingTop: 15,
    color:'white',
    textAlign:'center',
  },
  sizeText:{
    fontSize:20
  },
  sizeResult:{
    fontSize:40
  }
});
