import { FC } from "react";
import { Button, Flex, Grid, Textarea } from "@mantine/core";
import { IconCopy } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";

export const CopyTable: FC<{ data: string }> = ({ data }) => {
    const handleCopyClick = () => {
        if (navigator.clipboard) {
            navigator.clipboard
                .writeText(data)
                .then(() => {
                    notifications.show({
                        title: "Success!",
                        message: "Text copied to clipboard.",
                        color: "teal",
                        icon: <IconCopy size={16} />,
                    });
                })
                .catch((err) => {
                    console.error("Failed to copy text: ", err);
                });
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = data;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand("copy");
                notifications.show({
                    title: "Success!",
                    message: "Text copied to clipboard.",
                    color: "blue",
                    radius: "lg",
                    icon: <IconCopy size={16} />,
                });
            } catch (err) {
                console.error("Failed to copy text: ", err);
            } finally {
                document.body.removeChild(textArea);
            }
        }
    };

    return (
        <Grid grow gutter="xs" m={20} mt={80}>
            <Grid.Col span={12}>
                <Flex
                    justify="center"
                    align="center"
                    direction="column"
                    style={{ minHeight: "100%" }}
                >
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            maxWidth: "600px",
                        }}
                    >
                        <Textarea
                            size="md"
                            variant="filled"
                            value={data}
                            placeholder="Selected domains will be added here. You can copy them and add them wherever needed."
                            readOnly
                            maxRows={4}
                            minRows={4}
                            autosize
                            radius="lg"
                            style={{ width: "100%" }}
                        />
                        <Button
                            disabled={data.trim() === ""}
                            onClick={handleCopyClick}
                            style={{
                                position: "absolute",
                                bottom: "8px",
                                right: "8px",
                                zIndex: 1500,
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: 0,
                            }}
                            size="sm"
                        >
                            <IconCopy />
                        </Button>
                    </div>
                </Flex>
            </Grid.Col>
        </Grid>
    );
};
