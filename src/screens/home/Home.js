import React from "react";
import { connect } from "react-redux";
import {
  View,
  ActivityIndicator,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import { dispatch } from "rxjs/internal/observable/pairs";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";
import { RFValue } from "react-native-responsive-fontsize";
import CheckBox from "@react-native-community/checkbox";
import Toast from "react-native-simple-toast";
import { sendData } from "../../actions/homeAction";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "1",
      isSelected: true,
      title: "",
      description: ""
    };
  }

  validate = () => {
    const { title, description, isSelected } = this.state;
    if (title == "") return Toast.show("Please enter the title");
    else if (description == "")
      return Toast.show("Please enter the description");
    else if (!isSelected) return Toast.show("Please accept the conditions.");
    else {
      this.props.sendData(this.state, this.props);
    }
  };

  render() {
    const { loading } = this.props;
    return loading ? (
      <ActivityIndicator style={{ flex: 1 }} />
    ) : (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          marginHorizontal: RFValue(15)
        }}
      >
        <TextInput
          placeholder={"title"}
          style={{ marginVertical: RFValue(10) }}
          onChangeText={text => {
            this.setState({ title: text });
          }}
        />
        <DropDownPicker
          items={[
            {
              label: "user1",
              value: "1",
              icon: () => <Icon name="flag" size={18} color="#900" />
            },
            {
              label: "user2",
              value: "2",
              icon: () => <Icon name="flag" size={18} color="#900" />
            }
          ]}
          defaultValue={this.state.id}
          containerStyle={{ height: 40 }}
          style={{ backgroundColor: "#fafafa", marginBottom: RFValue(10) }}
          itemStyle={{
            justifyContent: "flex-start"
          }}
          dropDownStyle={{
            backgroundColor: "#fafafa"
          }}
          onChangeItem={item =>
            this.setState({
              userId: item.value
            })
          }
        />

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            value={this.state.isSelected}
            onValueChange={value => {
              this.setState({ isSelected: value });
            }}
            style={{ height: RFValue(20), width: RFValue(20) }}
          ></CheckBox>
          <Text>Terms and conditions</Text>
        </View>

        <TextInput
          placeholder={"description"}
          onChangeText={text => {
            this.setState({ description: text });
          }}
          style={{
            marginVertical: RFValue(10),
            height: RFValue(100),
            borderColor: "gray",
            borderWidth: 1
          }}
        />
        <TouchableOpacity
          onPress={() => {
            this.validate();
          }}
        >
          <Text
            style={{
              padding: RFValue(10),
              backgroundColor: "blue",
              textAlign: "center",
              color: "white"
            }}
          >
            save data
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { loading: state.homeReducer.loading };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, { sendData })(Home);
