import { StyleSheet } from "react-native";
import { Colors } from "../themes/colors";



const defaultScreenStyle = StyleSheet.create({
  safeAreaContainer:{
    flex: 1,
    backgroundColor:Colors.white
  },
    container: {
      padding: 10,
    }
  })
  export { defaultScreenStyle}