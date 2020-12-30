import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Inc } from "../Redux/store";
import { Dec } from "../Redux/store";

class Counter extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <>
        <h2>Count is {this.props.state.count}</h2>
        <button onClick={this.props.INC}>Count ++</button>
        <button onClick={this.props.DEC}> Count --</button>
      </>
    );
  }
}

const MapStateToProps = (State) => {
  return {
    state: State,
  };
}; //getting the State

const MapDispatchToProps = (dispatch) => {
  return {
    INC: () => dispatch(Inc()),
    DEC: () => dispatch(Dec()),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(Counter);
