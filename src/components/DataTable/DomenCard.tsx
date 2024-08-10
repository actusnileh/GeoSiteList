import { Grid, Box, Popover, Checkbox, ActionIcon, Flex, Text } from "@mantine/core";
import { IconDots } from "@tabler/icons-react";
import { FC, useState } from "react";

interface DomenCardType {
    keyElement: string;
    values: string[];
    setDomen: (arg: string) => void;
}

export const DomenCard: FC<DomenCardType> = ({ keyElement, values, setDomen }) => {
    const [checked, setChecked] = useState<boolean>(false);

    const toggleChecked = (flag: boolean, key: string) => {
        if (flag) {
            setDomen(key);
        }
        setChecked(flag);
    }

    return (
        <Grid.Col key={keyElement} span={3}>
            <Box p="md"
                style={{
                    backgroundColor: '#333333',
                    color: '#333',
                    borderRadius: '15px',
                    cursor: 'pointer'
                }}
            >
                <Flex justify="space-between" align="center">
                    <Checkbox color="darkgray" c="white" label={keyElement} checked={checked}
                        onChange={(event) => toggleChecked(event.currentTarget.checked, keyElement)} />
                    <Popover
                        position="bottom"
                        offset={{ mainAxis: 0, crossAxis: 0 }}
                        shadow="md"
                        closeOnClickOutside={true}
                    >
                        <Popover.Target>
                            <ActionIcon variant="default">
                                <IconDots size={24} />
                            </ActionIcon>
                        </Popover.Target>
                        <Popover.Dropdown>
                            {
                                values.map((value, index) => (
                                    <Text key={index} size="sm" c="white">{value}</Text>
                                ))
                            }
                        </Popover.Dropdown>
                    </Popover>
                </Flex>
            </Box>
        </Grid.Col>
    )
}