import { useScrollIntoView } from '@mantine/hooks';
import { Button, Box } from '@mantine/core';
import classes from './ScrollToTop.module.css';
import { useEffect, useState } from 'react';
import { IconChevronUp } from '@tabler/icons-react';

export function ScrollToTop() {
    const [ visible, setVisible ] = useState(false);
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

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {visible && (
                <Button
                    className={classes.scrollButton}
                    onClick={() => scrollIntoView({ alignment: 'center' })}
                    size="lm"
                    color="darkgray"
                >
                    < IconChevronUp />
                </Button>
            )}
            <Box ref={targetRef} style={{ position: 'absolute', top: 0 }} />
        </>
    );
}
