//by Roberto Aleydon

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from './styles';
import { phraseList } from './Constants/consts';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';






function App (){
    const [ phrase,setPhrase ] = useState([])


    function generatePhrase(){
        const randomPhrase = Math.floor(Math.random() * phraseList.length);
        setPhrase(phraseList[randomPhrase]);
    }
    

    return(
        <>
            <LinearGradient colors={['#81FBB8', '#28C76F']} style={{flex: 1}} > 
             <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
                <View style={styles.container}>
                    <Animatable.Image animation="bounce" style={styles.img} source={require('./assets/biscoito.png')}/>
                    
                    <Animatable.View animation="zoomInUp">
                        <TouchableOpacity style={styles.btnOpen} onPress={generatePhrase}>
                            <Text style={styles.btnText}>Abrir Biscoito</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                
                    <View style={styles.phraseView}>
                        <Text style={styles.phraseText}>{phrase}</Text>
                    </View>
                </View>
            </LinearGradient>
        </>
)}


export default App;




