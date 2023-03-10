import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setContactFilter } from 'redux/filterSlice';
import { FilterBox, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeFilter = event =>
    dispatch(setContactFilter(event.currentTarget.value.toLowerCase()));
  return (
    <FilterBox>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        id="filter"
        onChange={onChangeFilter}
        value={filter}
        autoComplete="off"
        placeholder="input field"
      />
    </FilterBox>
  );
};

