import { Container, Text, Button, Group } from '@mantine/core';
import classes from './About.module.css';

export function About() {
    return (
        <div className={classes.wrapper}>
            <Container size={700} className={classes.inner}>
                <h1 className={classes.title}>
                    A{' '}
                    <Text component="span" c={"darkgray"} inherit>
                        user-friendly
                    </Text>{' '}
                    GeoSite database
                </h1>

                <Text className={classes.description} c="dimmed">
                    That lists domains concealed behind service names,
                    allowing you to easily select and copy the domains you need
                </Text>

                <Group className={classes.controls}>
                    <Button
                        size="xl"
                        className={classes.control}
                        color="gray"
                        onClick={() => window.location.href = '/'}>
                        Main Page
                    </Button>
                    <Button
                        size="xl"
                        className={classes.control}
                        color="gray"
                    >
                        How to  use?
                    </Button>
                </Group>
            </Container>
        </div>
    );
}