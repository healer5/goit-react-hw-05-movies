import styled from '@emotion/styled';
import { SpinnerDotted } from 'spinners-react';

export const Container = styled.div`
  padding: ${props => props.theme.spacing(6)};
`;

export const Spinner = styled(SpinnerDotted)`
  margin: 0 auto;
`;