import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight,TouchableOpacity,Image} from 'react-native';

export default function App() {

  const [validCod, setValidCode] = useState(0)
  const [changeMode ,setChangeMode] = useState('PageA')

  //功能：減10
  function minusTen(){
    value = validCod -10
    return setValidCode(value)
  }

  //功能：加10
  function plusTen(){
    value = validCod + 10 
    return setValidCode(value)
  }
  
  //功能：歸0
  function CountZero(){
    return setValidCode(0)
  }

  //功能：渲染條件頁面
  function ChangePage(){
    if (changeMode ==='PageA'){
      return setChangeMode('PageB')
    }else{
      return setChangeMode('PageA')
    }
  }

  //功能：渲染Ａ
  function PageA(){
    return(
    <View style={styles.container}>
      <Text style={[styles.textType]}>Start Counts Number!</Text>
      <CustomButtons onPress={()=>plusTen()} title=' + ' changeStyle={[styles.buttonType,{backgroundColor:'green'}]}/>    
      <CustomButtons onPress={()=>minusTen()} title=' - ' changeStyle={[styles.buttonType,{backgroundColor:'red'}]}/>    
      <CustomButtons onPress={()=>CountZero()} title='數字歸零' changeStyle={styles.buttonType}/>   
      <Text style={[styles.textType]}>計數器：{validCod}</Text>
      <Divider/>
      <CustomButtons onPress={()=>ChangePage()} title='頁面切換' changeStyle={[styles.buttonType,{backgroundColor:'gray'}]}/>    
    </View>
    )
  }
    //功能：渲染B
    function PageB(){
    return(
    <View style={styles.container}>
      <Text style={[styles.textType]}>顯示計數器結果：{validCod}</Text>
      <Image
        style={styles.imageType}
        source={require('./src/image/icons8-timer-96.png')}
      />
      <Divider/>
      <CustomButtons onPress={()=>ChangePage()} title='頁面切換' changeStyle={[styles.buttonType,{backgroundColor:'gray'}]}/>    
    </View>
    )
  }

  //功能：按鈕件-客製化
  function CustomButtons({onPress,title,changeStyle}){
    return(
      <TouchableOpacity style={changeStyle} onPress={onPress}>
        <Text style={[styles.textType,{color:'white'}]}>
          {title}
        </Text>
      </TouchableOpacity>
    )
  }

  //功能：分隔線
  function Divider(){
    return  <View style={styles.divider} />
  }

  //功能：渲染頁面
  function ModeView (){
    if (changeMode === 'PageA'){
      return(<PageA/>)
    }else{
      return(<PageB/>)
    }
  }

  //渲染
  return (
    <View style={styles.container}>
      <ModeView/>
    </View>
  );
}

//SCSS樣式
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edfaf2',
    alignItems: 'center',
    justifyContent: 'center',
    margin:'2px'
  },
  boxes:{
    height: 50, 
    width: 300, 
    borderRadius: 5, 
    borderColor: 'darkgray', 
    borderWidth: 2, 
    backgroundColor: 'gray', 
    color: 'white', 
    fontSize: 28, 
    textAlign: 'center', 
    margin:2,
    padding:2
  },
  textType:{
    fontSize: 28, 
    textAlign: 'center', 
    margin:5,
    padding:'2px'
  },
  buttonType:{
    backgroundColor:'#00aeef',
    borderRadius:10,
    height:50,
    width:150,
    textAlign: 'center',
    margin:5
  },
  divider: {
    width: 250, // 調整寬度
    height: 2, // 調整高度
    backgroundColor: 'black', // 調整顏色
    marginVertical: 10, // 調整上下間距
  },
  imageType:{
    width:200,
    height:200,
    margin:5
  }
});
