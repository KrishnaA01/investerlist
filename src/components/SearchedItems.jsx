const SearchedItems = () => {
  return;
  <div>
    <ul>
      {searchResults.map((item) => (
        <li key={item.snNumber}>
          {`Name: ${item.name}, Devices: ${item.devices}, SN: ${item.snNumber}`}
        </li>
      ))}
    </ul>
    ;
  </div>;
};

export default SearchedItems;
