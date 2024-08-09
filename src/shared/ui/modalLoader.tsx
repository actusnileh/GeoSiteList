import { Loader, Modal, Flex } from "@mantine/core";
import { FC } from "react";

export const ModalLoader: FC<{ isOpen: boolean }> = ({ isOpen }) => {
    const MockClose = () => { };

    return (
        <Modal
            centered
            withCloseButton={false}
            opened={isOpen} onClose={MockClose}
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 10,
            }}
        >
            <Flex justify="center" align="center" h={200}>
                <Loader type="dots" color="blue" size="xl" />
            </Flex>
        </Modal>
    );
};