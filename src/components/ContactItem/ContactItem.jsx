import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Item, Text, ButtonDelete, Marker } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Item>
      <Marker />
      <Text>
        {name}: {number}
      </Text>
      <ButtonDelete
        name={id}
        type="button"
        onClick={handleDelete}
        aria-label="Delete contact"
      >
        Delete
      </ButtonDelete>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
