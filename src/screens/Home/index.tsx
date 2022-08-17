import React from "react"
import { Text , TextInput, View, TouchableOpacity , FlatList, Alert } from 'react-native';

import { styles } from './styles';

import { Participant } from "../../components/Participant";

export function Home() {
  const participants = ["Gabriel", "Elisa", "Douglas", "Vini", "Catia" , "Marcos" , "João", "Max", "Christian", "Rubens" , "Pofão"]

  function handleParticipantAdd() {
    if(participants.includes('Gabriel')){
      return Alert.alert("Participante já Existe"," Já existe um participante na lista com este nome")

    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`,[
      
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado")
      },

      {
        text: "Não",
        style: "cancel"
      }


    ]);
    

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
          placeholder="Nome do participante"
          placeholderTextColor = "#6B6B6B"
          />
          
          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
          key={item}
          name={item}
          onRemove={() => handleParticipantRemove(item)}/>


        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.


          </Text>

        )}
      />

    </View>
  );

}
