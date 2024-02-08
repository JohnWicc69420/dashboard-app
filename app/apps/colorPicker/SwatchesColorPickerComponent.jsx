import React from "react";
import { SwatchesPicker } from "react-color";

class SwatchesColorPickerComponent extends React.Component {
  state = {
    background: "#fff",
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <div className="flex gap-4">
        <SwatchesPicker
          color={this.state.background}
          onChangeComplete={this.handleChangeComplete}
        />
      </div>
    );
  }
}

export default SwatchesColorPickerComponent;
