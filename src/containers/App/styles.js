import styled from 'styled-components';
import { Grommet } from 'grommet';

export const StyledApp = styled(Grommet)`
  min-height: 100vh;
  & > div {
    min-height: 100vh;
  }
`;
