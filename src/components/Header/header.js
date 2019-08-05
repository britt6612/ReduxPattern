import React from 'react';
import { Box, Heading } from 'grommet';

const Header = () => (
  <Box
    flex={false}
    pad="small"
    direction="row"
    align="center"
    justify="between"
  >
    <Heading color="black" level="1" margin="none">
      Grommet Redux Login Example
    </Heading>
  </Box>
);

export { Header };
