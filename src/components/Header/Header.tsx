import { Autocomplete, Group, Burger, rem, Title, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch, IconInfoSquareRoundedFilled, IconBrandGithub } from '@tabler/icons-react';
import classes from './Header.module.css';

const links = [
    { link: '/about', label: 'About', icon: IconInfoSquareRoundedFilled },
    { link: 'https://github.com/actusnileh/GeoSiteList', label: 'GitHub', icon: IconBrandGithub },
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
                target={link.link == '/about' ? '' : "_blank"}
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
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                    <Title order={3}>GeoSiteList</Title>
                </Group>

                <Group>
                    <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
                        {items}
                    </Group>
                    <Autocomplete
                        className={classes.search}
                        placeholder="Search"
                        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                        data={['Test']}
                        visibleFrom="xs"
                    />
                </Group>
            </div>
        </header>
    );
};
