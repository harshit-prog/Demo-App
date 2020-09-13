import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: RFValue(15)
  },
  checkBoxstyle: {
    flexDirection: "row",
    marginBottom: RFValue(10),
    alignItems: "center"
  },
  textArea: {
    marginVertical: RFValue(10),
    height: RFValue(100),
    borderColor: "gray",
    borderWidth: 1
  },
  dropDownStyle: { backgroundColor: "#fafafa", marginBottom: RFValue(10) },
  checkBoxStyke: { height: RFValue(20), width: RFValue(20) },
  buttonStyle: {
    padding: RFValue(10),
    backgroundColor: "#F4DC1E",
    textAlign: "center",
    color: "#000",
    fontSize: RFValue(13)
  },
  listContainer: {
    marginTop: RFValue(5),
    marginHorizontal: 10,
    backgroundColor: "#FFF",
    padding: RFValue(5)
  },
  indicator: { flex: 1 },
  input: {
    marginVertical: RFValue(10),
    borderColor: "gray",
    borderWidth: 1,
    height: RFValue(30),
    paddingStart: RFValue(5)
  },
  termStyle: { marginLeft: RFValue(8) }
});
