import { createPortal } from "react-dom";
import { XSquare as CloseIcon } from "react-feather";

import { Grid } from "@mui/material";

import {
    Actions,
    CardModal,
    Content,
    Description,
    Header,
    IconClose,
    Overlay,
    TextStrong,
    Title,
} from "./styles";

import Button from "../Button";

import { Box } from "..";

import { IModalProps } from "./types";

function Modal({
    isOpen,
    title,
    description,
    strong,
    actions,
    children,
    width,
    height,
    onClose,
    closeIcon,
    enableScroll,
    justifyTitle,
    justifyActions,
    padding,
}: IModalProps) {
    const inOverlay = document.getElementById("overlay")!;

    return createPortal(
        <Overlay
            open={isOpen}
            onClose={onClose}
            maxWidth="xl"
            className="animate__animated animate__fadeIn animate__faster"
        >
            <CardModal width={width} height={height} scroll={enableScroll}>
                {title || description || closeIcon ? (
                    <Header>
                        <Box>
                            <Title justify={justifyTitle}>{title}</Title>

                            {description ? (
                                <Description justify={justifyTitle}>
                                    {description}
                                    <TextStrong>{strong}</TextStrong>
                                </Description>
                            ) : null}
                        </Box>

                        {closeIcon ? (
                            <IconClose onClick={onClose}>
                                <CloseIcon />
                            </IconClose>
                        ) : null}
                    </Header>
                ) : null}

                <Content padding={padding}>
                    {children}

                    {actions ? (
                        <>
                            <Grid />

                            <Actions justify={justifyActions}>
                                {actions?.map(
                                    ({ value, isValidForm, ...rest }: any) => (
                                        <Button
                                            key={value}
                                            value={value}
                                            {...rest}
                                        />
                                    )
                                )}
                            </Actions>
                        </>
                    ) : null}
                </Content>
            </CardModal>
        </Overlay>,
        inOverlay
    );
}
export default Modal;
