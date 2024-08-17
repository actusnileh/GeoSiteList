import { Group, Burger, Title, Flex, Paper } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconInfoSquareRounded, IconBrandGithub } from "@tabler/icons-react";
import classes from "./Header.module.css";
import { LastCommitDate } from "../LastCommitDate";

const links = [
    {
        link: "/GeoSiteList/about/",
        label: "About",
        icon: IconInfoSquareRounded,
    },
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
                target={link.link === "/GeoSiteList/about/" ? "" : "_blank"}
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
                        onClick={() => (window.location.href = "/GeoSiteList/")}
                    >
                        GeoSiteList
                    </Title>
                    <Title order={6}>
                        v0.3.1
                    </Title>
                    <LastCommitDate />
                </Group>

                <Group className={classes.links} visibleFrom="sm">
                    {items}
                </Group>
            </div>
            {opened && (
                <Paper className={classes.burgerMenu} shadow="md">
                    <Group align="start">{items}</Group>
                </Paper>
            )}
        </header>
    );
}
