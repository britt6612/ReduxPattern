import React from 'react';
import { Box, Heading, Paragraph, Text } from 'grommet';

const Welcome = () => {
    return (<Box flex fill>
        <Box background={{ color: "light-1", opacity: "0.9" }} round="small" align="center">
            <Box>
                <Heading level={1} size="large" align="center" margin="none">
                    Welcome
                </Heading>
                <Text>What is Lorem Ipsum?</Text>
                <Paragraph>
                    Lorem Ipsum is simply dummy text of the pri                                                  typesetting industry.Lorem Ipsum has b                              dustry's
                    standard dummy text ever since, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.It has survived not
                </Paragraph>
            </Box>
        </Box>
    </Box>);
};

export {Welcome};