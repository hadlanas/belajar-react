import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");
  const changeSearch = () => {
    props.onSearch(search);
    console.log(search);
    console.log(props);
  };
  return (
    <>
      <div>
        cari artike :{" "}
        <input
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <button onClick={changeSearch}>cari</button>
      </div>
      <small>
        {props.totalPost} kata yang di cari adalah {search}
      </small>
    </>
  );
}

export default Search;
