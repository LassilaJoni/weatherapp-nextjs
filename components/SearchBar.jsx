import React from "react";
import city from "../lib/cities.json";

function SearchBar(props) {
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState([]);

  const onChange = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value.length > 3) {
      const filteredCities = city
        .filter((city) => {
          const cityName = city.name.toLowerCase();
          const searchValue = value.toLowerCase();
          return cityName.includes(searchValue);
        })
        .slice(0, 5);
      return setResults(filteredCities);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={onChange}
        value={search}
        className="border rounded-md p-2"
      />
      {results.length > 3 && (
        <ul className="bg-white rounded-md p-2 w-fit my-1">
          {search.length > 0 ? (
            results.map((city, index) => (
              <li
                key={index}
                className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  props.onCitySelect(city);
                  console.log(city);
                }}
              >
                {city.name}
                {city.state ? `, ${city.state}` : ""}
                <span className="text-gray-600">({city.country})</span>
              </li>
            ))
          ) : (
            <li className="py-2 px-4">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
