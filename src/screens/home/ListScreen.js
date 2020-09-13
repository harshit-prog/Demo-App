import React from "react";
import { connect } from "react-redux";
import { View, ActivityIndicator, Text, FlatList } from "react-native";
import { getListdata } from "../../actions/homeAction";
import { RFValue } from "react-native-responsive-fontsize";
import Styles from "./styles/Styles";

class ListScreen extends React.Component {
  componentDidMount() {
    this.props.getListdata();
  }

  render() {
    const { data, loading } = this.props;
    return loading ? (
      <ActivityIndicator style={Styles.indicator} />
    ) : (
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={Styles.listContainer}>
              <Text numberOfLines={1}>{item.id}</Text>
              <Text numberOfLines={1}>{item.title}</Text>
              <Text numberOfLines={1}>{item.body}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    );
  }
}

function mapStateToProps(state) {
  return { loading: state.homeReducer.loading, data: state.homeReducer.data };
}

export default connect(mapStateToProps, { getListdata })(ListScreen);
