import { FC } from "react";
import { ApiResponseType } from "../../pages/HomePage/api/apiResponseType";
import { Grid, Box, Text } from "@mantine/core";

export const DataTable: FC<{ data: ApiResponseType }> = ({ data }) => {
    return (
        <Grid grow gutter="xs">
            {Object.keys(data).map((key) => (
                <Grid.Col key={key} span={3}>
                    <Box
                        p="md"
                        style={{
                            backgroundColor: '#333333',
                            color: '#333',
                            borderRadius: '15px',
                        }}>
                        <Text color="white">{key}</Text>
                    </Box>
                </Grid.Col>
            ))}
        </Grid>
    );
};
