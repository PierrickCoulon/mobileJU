import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    imageNav: {
        width: 20,
        height: 20,
        tintColor: 'black'
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
      },
      headline: {
        fontSize: 30,
        textAlign: "center",
        margin: 10
      },
      valueContainer: {
        flexDirection: "row",
        flexWrap: "wrap"
      },
      valueValue: {
        width: 200,
        fontSize: 20
      },
      valueName: {
        width: 50,
        fontSize: 20,
        fontWeight: "bold"
      },
      instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
      }
 })