import { FC } from 'react';
import { Card, CopyButton, Flex, Text, Box, Button } from '@mantine/core';

interface CopyPlaceType {
    domens: string[];
};

export const CopyPlace: FC<CopyPlaceType> = ({ domens }) => {
    const domensString: string = domens.join(', ');

    return (
        <Card style={{
            position: "fixed",
            top: "30px",
            margin: "auto",
        }}>
            <Flex>
                <Box>
                    {
                        domens.map((item, index) => (
                            <Text key={index}>
                                {item}
                            </Text>
                        ))
                    }
                </Box>
                <CopyButton value={domensString}>
                    {({ copied, copy }) => (
                        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
                            {copied ? 'Copied url' : 'Copy url'}
                        </Button>
                    )}
                </CopyButton>
            </Flex>
        </Card>
    );
};
