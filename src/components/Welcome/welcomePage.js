import React from 'react';
import { Box, Heading, Paragraph, Text } from 'grommet';

const Welcome = () => {
  return (
    <Box justify='center'>
      <Box
        background={{ color: 'light-1', opacity: '0.9' }}
        round="small"
        align="center"
        pad='large'
      >
        <Box>
          <Heading level={1} size="large" align="center" margin="none">
            Welcome
          </Heading>
          <Text>Redux</Text>
          <Paragraph>
           Redux is a great way to manage state. When writing an application that 
           can become very complex to manage state. Redux is a great state manager 
           tool. The Redux dev tools are great, It allows devs to visualize the state
           changes.
          </Paragraph>
        </Box>
      </Box>
    </Box>
  );
};

export { Welcome };
