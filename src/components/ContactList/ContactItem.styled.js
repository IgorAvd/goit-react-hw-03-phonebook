import styled from '@emotion/styled';

export const ContactItemBtn = styled.button`
  margin-left: 15px;
  border-radius: 4px;
  padding: 4px 10px;
  border-color: cyan;
  cursor: pointer;

  &:active {
    background-color: aqua;
  }
`;

export const StyledContactItem = styled.li`
  margin-bottom: 8px;

  span {
    margin-right: 7px;
  }
`;
