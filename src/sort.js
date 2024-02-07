export const sort = (movies, sortSelection) => {
  if (sortSelection.includes("DATE")) {
    movies.sort((a, b) => {
      const aDateObject = new Date(a.release_date);
      const bDateObject = new Date(b.release_date);

      if (aDateObject.getTime() < bDateObject.getTime()) {
        return 1;
      }

      if (bDateObject.getTime() < aDateObject.getTime()) {
        return -1;
      }

      return 0;
    });

    if (sortSelection === "DATE:OLDEST") {
      movies.reverse();
    }
  }

  if (sortSelection.includes("TITLE")) {
    movies.sort((a, b) => {
      if (a.original_title > b.original_title) {
        return 1;
      }
      if (b.original_title > a.original_title) {
        return -1;
      }
      return 0;
    });

    if (sortSelection === "TITLE:Z-A") {
      movies.reverse();
    }
  }

  return movies;
};
