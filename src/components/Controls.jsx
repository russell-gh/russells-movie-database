import React, { Component } from "react";

class Controls extends Component {
  render() {
    const { onSortSelect } = this.props;

    return (
      <div>
        <select onChange={onSortSelect}>
          <option value="TITLE:A-Z">Title: A-Z</option>
          <option value="TITLE:Z-A">Title: Z-A</option>
          <option value="DATE:NEWEST">Newest</option>
          <option value="DATE:OLDEST">Oldest</option>
        </select>
      </div>
    );
  }
}

export default Controls;
