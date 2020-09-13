export function sendData(data, props) {
  return async dispatch => {
    dispatch({
      type: "DETAIL_REQUEST"
    });

    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      let json = await response.json();
      console.log("DETAIL_SUCCESS", json);
      dispatch({
        type: "DETAIL_SUCCESS",
        payload: json
      });

      props.navigation.navigate("ListScreen");
    } catch (error) {
      dispatch({
        type: "DETAIL_FAIL",
        payload: { error: "Some error occured" }
      });
    }
  };
}

export function getListdata() {
  return async dispatch => {
    dispatch({
      type: "DETAIL_REQUEST"
    });

    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });

      let json = await response.json();
      console.log(json);
      dispatch({
        type: "DETAIL_SUCCESS",
        payload: json
      });
    } catch (error) {
      dispatch({
        type: "DETAIL_FAIL",
        payload: { error: "Some error occured" }
      });
    }
  };
}
