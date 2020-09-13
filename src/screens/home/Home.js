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
import Styles from "./styles/Styles";
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
      <ActivityIndicator style={Styles.indicator} />
    ) : (
      <View style={Styles.container}>
        <TextInput
          placeholder={"title"}
          style={Styles.input}
          onChangeText={text => {
            this.setState({ title: text });
          }}
        />
        <DropDownPicker
          items={[
            {
              label: "User 1",
              value: "1",
              icon: () => <Icon name="user" size={18} color="#900" />
            },
            {
              label: "User 2",
              value: "2",
              icon: () => <Icon name="user" size={18} color="#900" />
            }
          ]}
          defaultValue={this.state.userId}
          containerStyle={{ height: 50 }}
          style={Styles.dropDownStyle}
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
        <TextInput
          placeholder={"description"}
          onChangeText={text => {
            this.setState({ description: text });
          }}
          style={Styles.textArea}
        />
        <View style={Styles.checkBoxstyle}>
          <CheckBox
            value={this.state.isSelected}
            onValueChange={value => {
              this.setState({ isSelected: value });
            }}
            style={Styles.checkBoxStyke}
          ></CheckBox>
          <Text style={Styles.termStyle}>Terms and conditions</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.validate();
          }}
        >
          <Text style={Styles.buttonStyle}>Save Data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { loading: state.homeReducer.loading };
}

export default connect(mapStateToProps, { sendData })(Home);
