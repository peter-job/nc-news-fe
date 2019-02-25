import React, { Component } from "react";
import "../styles/Dropdown.css";

class Dropdown extends Component {
  state = {
    active: false
  };

  toggleActive = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };

  render() {
    const { active } = this.state;
    const { handler, title, selected, field, trayOptions } = this.props;
    return (
      <div className="Dropdown noselect" onClick={this.toggleActive}>
        <p>{`${title}${selected}`}</p>

        <ul className={`Dropdown-List-${active ? "Active" : "Inactive"}`}>
          {trayOptions.map(option => (
            <li
              className="Dropdown-Li"
              key={option.value}
              onClick={() =>
                handler({ field, value: option.value, name: option.name })
              }
            >
              {option.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Dropdown;
