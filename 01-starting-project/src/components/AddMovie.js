import React from "react";

const AddMovie = (props) => {
  return (
    <div className="add-movie">
      <input type="text" placeholder="Add Movie Title" />
      <input type="text" placeholder="Add Movie Opening Text" />
      <input type="date" placeholder="Add Movie Release Date" />
      <button>Add Movie</button>
    </div>
  );
};

export default AddMovie;