import React, { Component } from "react";
import "../styles/Tray.css";

class Tray extends Component {
  state = {
    active: false
  };

  toggleActive = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };

  render() {
    const { active } = this.state;
    const { handler, title, selected } = this.props;
    return (
      <div className="Tray noselect" onClick={this.toggleActive}>
        <p>{`${title}: ${selected}`}</p>

        <ul className={`Tray-List-${active ? "Active" : "Inactive"}`}>
          {this.props.trayOptions.map(option => (
            <li
              className="Tray-Li"
              key={option.value}
              onClick={() => handler(option.value)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Tray;
