import styled from 'styled-components';

export const CustomButton = styled.button`
  display: block;
  margin-bottom: ${props => props.theme.spacing(1)};
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};
  border: none;
  outline: none;
  border-radius: ${props => props.theme.spacing(1)};
  cursor: pointer;
  font-size: ${props => props.theme.spacing(3)};
  font-weight: 700;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
`;
