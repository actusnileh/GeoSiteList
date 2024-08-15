import { Group, Burger, Title, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconInfoSquareRounded, IconBrandGithub } from "@tabler/icons-react";
import classes from "./Header.module.css";

const links = [
    { link: "/about", label: "About", icon: IconInfoSquareRounded },
    {
        link: "https://github.com/actusnileh/GeoSiteList",
        label: "GitHub",
        icon: IconBrandGithub,
    },
];

export function HeaderSearch() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => {
        const IconComponent = link.icon;
        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                target={link.link == "GeoSiteList/about" ? "" : "_blank"}
            >
                <Flex align="center" gap={5}>
                    <IconComponent />
                    {link.label}
                </Flex>
            </a>
        );
    });

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <Group>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        size="sm"
                        hiddenFrom="sm"
                    />
                    <Title
                        style={{ cursor: "pointer" }}
                        order={3}
                        onClick={() => (window.location.href = "/")}
                    >
                        GeoSiteList
                    </Title>
                    <Title order={6}>v0.1</Title>
                </Group>

                <Group>
                    <Group
                        ml={50}
                        gap={5}
                        className={classes.links}
                        visibleFrom="sm"
                    >
                        {items}
                    </Group>
                </Group>
            </div>
        </header>
    );
}
