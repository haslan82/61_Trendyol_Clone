import { StyleSheet } from "react-native";
import { Colors } from "../themes/colors";



const defaultScreenStyle = StyleSheet.create({
  safeAreaContainer:{
    flex: 1,
    
  },
    container: {
      padding: 10,
      backgroundColor:Colors.white,
      flex: 1,
    }
  })
  
  
  export { defaultScreenStyle}