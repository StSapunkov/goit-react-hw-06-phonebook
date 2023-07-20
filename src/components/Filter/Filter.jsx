import { useDispatch, useSelector } from 'react-redux';
// Redux
import { getFilter } from 'redux/selectors';
// Redux actions
import { filterContacts } from 'redux/filterSlice';
// Styled
import { Label, InputHeading, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterInput = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <Label>
      <InputHeading>Find contacts by name</InputHeading>
      <Input
        type="text"
        name="filter"
        title="Please enter a name to find your contacts"
        value={filter}
        onChange={handleFilterInput}
      />
    </Label>
  );
};
