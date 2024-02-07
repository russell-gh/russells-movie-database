import React, { Component } from "react";

class search extends Component {
  render() {
    const { onSearchInput } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="search">Search:</label>
          <input
            onInput={onSearchInput}
            type="text"
            id="search"
            name="search"
          />
        </form>
      </div>
    );
  }
}

export default search;
