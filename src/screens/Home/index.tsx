import React from "react"
import { Text , TextInput, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { Participant } from "../../components/Participant";

export function Home() {

  function handleParticipantAdd() {
    console.log("caraxcadas");

  }

  return(
    <View style= { styles.container }>
      <Text style ={styles.eventName}> 
        Nome do evento
        </Text>

        <Text style={styles.eventDate}> 
          18 08 1999
        </Text>


        <View style={styles.form}>
          <TextInput 
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor = "#6B6B6B"
          />
          
          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        
        <Participant/>
        <Participant/>

    </View>
  );

}
