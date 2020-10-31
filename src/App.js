//by Roberto Aleydon

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';



function App (){
    const [ phrase,setPhrase ] = useState('Frase do Biscoito ');

    
    return(
        <>
            <View style={styles.container}>
                <Image style={styles.img} source={require('./assets/biscoito.png')}/>
                
                <TouchableOpacity>
                    <Text>Abrir Biscoito</Text>
                </TouchableOpacity>

                <Text>{phrase}</Text>
            </View>
        </>
)}


export default App;




