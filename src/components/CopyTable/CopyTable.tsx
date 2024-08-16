import { FC } from "react";
import { Flex, Grid, Textarea } from "@mantine/core";

export const CopyTable: FC<{ data: string }> = ({ data }) => {
    return (
        <Grid grow gutter="xs" m={20} mt={80}>
            <Grid.Col span={12}>
                <Flex
                    justify="center"
                    align="center"
                    direction="column"
                    style={{ minHeight: "100%" }}
                >
                    <Textarea
                        size="md"
                        value={data}
                        placeholder="Selected domains will be added here.
You can copy them and add them wherever needed."
                        readOnly
                        maxRows={4}
                        minRows={4}
                        autosize
                        radius="md"
                        style={{ width: "100%", maxWidth: "600px" }}
                    />
                </Flex>
            </Grid.Col>
        </Grid>
    );
};
