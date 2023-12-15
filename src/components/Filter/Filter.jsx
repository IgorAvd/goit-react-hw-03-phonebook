import { FilterDescr } from './Filter.styled';

export const Filter = ({ handleFilterChange }) => {
  const handleFilterSubmit = e => {
    const filterValue = e.target.value.trim();

    handleFilterChange(filterValue);
  };

  return (
    <div>
      <FilterDescr>Find contacts by name</FilterDescr>
      <input type="text" name="name" required onChange={handleFilterSubmit} />
    </div>
  );
};
