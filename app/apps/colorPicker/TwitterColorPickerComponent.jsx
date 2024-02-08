import React from "react";
import { TwitterPicker } from "react-color";

class TwitterColorPickerComponent extends React.Component {
  state = {
    background: "#fff",
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <TwitterPicker
        color={this.state.background}
        onChangeComplete={this.handleChangeComplete}
      />
    );
  }
}

export default TwitterColorPickerComponent;
