import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";
import Movies from "./Movies";

class Interface extends Component {
  state = {};

  async componentDidMount() {
    this.getMovies("future");
  }

  getMovies = async (searchTerm) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${searchTerm}`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGQ2YjFmOGE4ZmM2ZGJmOGU0YWY0M2U3MzBhNDY2MSIsInN1YiI6IjY0Nzc4OGJhOTM4MjhlMDBiZjljOTkwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5PaH_RToi9pI0GJ_K_BtR3PlwJiScoFClmEfUqXuUzo`,
        },
      }
    );
    this.setState({ movies: data.results });
  };

  onSearchInput = (e) => {
    this.getMovies(e.target.value);
  };

  onSortSelect = (e) => {
    console.log(e.target.value);
    this.setState({ sortSelection: e.target.value });
  };

  render() {
    console.log(this.state);
    const { movies } = this.state;

    return (
      <>
        <Search onSearchInput={this.onSearchInput} />
        {movies && <Movies movies={movies} onSortSelect={this.onSortSelect} />}
      </>
    );
  }
}

export default Interface;
