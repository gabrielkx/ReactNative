import {View, Text} from "react-native";
import { styles } from './styles';
import { TouchableOpacity } from "react-native";

export function Participant(){
    return(
        <View style={styles.container}>
            
            <Text style={styles.name}>Gabriel</Text>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              -
            </Text>
          </TouchableOpacity>

        </View>

    )




}