import { useScrollIntoView } from "@mantine/hooks";
import { Button, Box } from "@mantine/core";
import { useEffect, useState } from "react";
import { IconChevronUp } from "@tabler/icons-react";

export function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
        offset: 0,
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {visible && (
                <Button
                    style={{
                        position: "fixed",
                        bottom: "16px",
                        right: "16px",
                        zIndex: 1500,
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 0,
                    }}
                    onClick={() => scrollIntoView({ alignment: "center" })}
                    size="lm"
                    color="darkgray"
                >
                    <IconChevronUp />
                </Button>
            )}
            <Box ref={targetRef} style={{ position: "absolute", top: 0 }} />
        </>
    );
}
