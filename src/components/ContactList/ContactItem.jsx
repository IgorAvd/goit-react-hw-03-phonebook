import { ContactItemBtn, StyledContactItem } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <StyledContactItem>
      <span>{name}:</span>
      {number}
      <ContactItemBtn type="submit" onClick={() => deleteContact(id)}>
        Delete
      </ContactItemBtn>
    </StyledContactItem>
  );
};
