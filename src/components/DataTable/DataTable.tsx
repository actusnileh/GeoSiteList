import { FC } from "react";
import { ApiResponseType } from "../../pages/HomePage/api/apiResponseType";
import {
    Grid,
    Box,
    Text,
    Popover,
    ActionIcon,
    Flex,
    Checkbox,
} from "@mantine/core";
import { IconDots } from "@tabler/icons-react";

export const DataTable: FC<{ data: ApiResponseType }> = ({ data }) => {
    return (
        <Grid grow gutter="xs" m={20} mt={70}>
            {Object.keys(data).map((key) => (
                <Grid.Col key={key} span={3}>
                    <Box
                        p="md"
                        style={{
                            backgroundColor: "#333333",
                            color: "#ffffff",
                            borderRadius: "15px",
                        }}
                    >
                        <Flex justify="space-between" align="center">
                            <Checkbox color="darkgray" label={key} c="white" />
                            <Popover
                                position="bottom"
                                offset={8}
                                shadow="md"
                                closeOnClickOutside
                            >
                                <Popover.Target>
                                    <ActionIcon variant="default">
                                        <IconDots size={24} />
                                    </ActionIcon>
                                </Popover.Target>
                                <Popover.Dropdown>
                                    <Box>
                                        {data[key].map((value, index) => (
                                            <Text
                                                key={index}
                                                size="sm"
                                                c="white"
                                            >
                                                {value}
                                            </Text>
                                        ))}
                                    </Box>
                                </Popover.Dropdown>
                            </Popover>
                        </Flex>
                    </Box>
                </Grid.Col>
            ))}
        </Grid>
    );
};
