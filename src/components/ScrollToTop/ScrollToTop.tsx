import { useEffect, useState } from "react";
import { Button } from "@mantine/core";
import { IconChevronUp } from "@tabler/icons-react";

interface ScrollToTopProps {
    scrollContainerRef: React.RefObject<HTMLDivElement>;
}

export function ScrollToTop({ scrollContainerRef }: ScrollToTopProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                if (scrollContainerRef.current.scrollTop > 300) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        };

        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);
            return () => {
                scrollContainer.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    const handleClick = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

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
                    onClick={handleClick}
                    size="md"
                    color="darkgray"
                >
                    <IconChevronUp />
                </Button>
            )}
        </>
    );
}
