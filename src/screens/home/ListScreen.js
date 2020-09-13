import React from "react";
import { connect } from "react-redux";
import { View, ActivityIndicator, Text, FlatList } from "react-native";
import { getListdata } from "../../actions/homeAction";

class ListScreen extends React.Component {
  componentDidMount() {
    this.props.getListdata();
  }

  render() {
    const { data, loading } = this.props;
    return loading ? (
      <ActivityIndicator style={{ flex: 1 }} />
    ) : (
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
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
