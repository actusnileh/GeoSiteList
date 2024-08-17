import { FC, memo, useRef, useState } from "react";
import { ApiResponseType } from "../../pages/HomePage/api/apiResponseType";
import {
    Box,
    Text,
    Popover,
    ActionIcon,
    Flex,
    Checkbox,
    Input,
} from "@mantine/core";
import { IconDots } from "@tabler/icons-react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { ScrollToTop } from "../ScrollToTop";

interface DataTableProps {
    data: ApiResponseType;
    onCheckboxChange: (key: string, checked: boolean) => void;
    selectedKeys: Set<string>;
}

const DataTable: FC<DataTableProps> = ({
    data,
    onCheckboxChange,
    selectedKeys,
}) => {
    const parentRef = useRef<HTMLDivElement>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const keys = Object.keys(data).filter((key) =>
        key.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const rowVirtualizer = useVirtualizer({
        count: keys.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 70,
        overscan: 5,
    });

    return (
        <div
            style={{
                height: "98vh",
                width: "100%",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Input
                placeholder="Search..."
                variant="filled"
                radius={"lg"}
                size="md"
                m={10}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.currentTarget.value)}
            />
            <div
                ref={parentRef}
                style={{ flex: 1, overflow: "auto", position: "relative" }}
            >
                <ScrollToTop scrollContainerRef={parentRef} />
                <div
                    style={{
                        height: `${rowVirtualizer.getTotalSize()}px`,
                        width: "100%",
                        position: "relative",
                    }}
                >
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                        const key = keys[virtualRow.index];
                        return (
                            <div
                                key={key}
                                ref={rowVirtualizer.measureElement}
                                data-index={virtualRow.index}
                                style={{
                                    position: "absolute",
                                    top: `${virtualRow.start}px`,
                                    left: "0",
                                    width: "100%",
                                    height: "70px",
                                    boxSizing: "border-box",
                                    padding: "10px",
                                }}
                            >
                                <Box
                                    p="md"
                                    style={{
                                        backgroundColor: "#333333",
                                        color: "#ffffff",
                                        borderRadius: "15px",
                                    }}
                                >
                                    <Flex
                                        justify="space-between"
                                        align="center"
                                    >
                                        <Checkbox
                                            color="darkgray"
                                            label={key}
                                            c="white"
                                            size="md"
                                            checked={selectedKeys.has(key)}
                                            onChange={(event) =>
                                                onCheckboxChange(
                                                    key,
                                                    event.currentTarget.checked
                                                )
                                            }
                                        />
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
                                                    {data[key].map(
                                                        (value, index) => (
                                                            <Text
                                                                key={index}
                                                                size="sm"
                                                                c="white"
                                                            >
                                                                {value}
                                                            </Text>
                                                        )
                                                    )}
                                                </Box>
                                            </Popover.Dropdown>
                                        </Popover>
                                    </Flex>
                                </Box>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default memo(DataTable);
