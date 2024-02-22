import { MouseEvent, useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { IAppbarProps } from "./types";
import { useTheme as useThemeStyled } from "styled-components";
import { simplifyName } from "../../utils/Compose";
import { AppBar, Menu, Option, SubtitleModal, TitleModal, Toolbar, UserEmail, UserName } from "./styles";
import { Divider, IconButton, ListItemIcon, ListItemText } from "@mui/material";
import { LogOut, Menu as MenuIcon } from "react-feather";

import {
    Box,
    Box as HeaderProfile,
    Box as MainProfile,
    Box as Options,
    PageActions,
    SectionTitle,
} from "..";

import Avatar from "../Avatar";
import Modal from "../Modal";
import Button from "../Button";

export default function Appbar({ open, handleVisibility}: IAppbarProps) {

    const { signOut, user } = useAuth();
    const styledTheme = useThemeStyled();
    const [isOpenModal, setIsOpenModal] = useState(false);

    const [isOpenProfile, setIsOpenProfile] = useState<null | HTMLElement>(
        null
    );
    
    const [simpleName, setSimpleName] = useState<string>("");

    useEffect(() => {
        user.name && simplifyName(user.name, setSimpleName);
    }, [user.name]);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setIsOpenProfile(event.currentTarget);
    };

    const handleClose = () => {
        setIsOpenProfile(null);
    }

    const handleOpenModalLogout = () => {
        setIsOpenModal(true);
    }

    const handleSignOutConfirmed = () => {
        toggleModalLogout();
        signOut();
    }

    const toggleModalLogout = () => {
        setIsOpenModal((state: boolean) => !state);
    }

    return (
        <AppBar position="sticky" open={open} styled_theme={styledTheme}>
            <Toolbar styled_theme={styledTheme}>
                <IconButton 
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleVisibility}
                    edge="start"
                    sx={{
                        position: "relative",
                        left: 3,
                        ...(open && { visibility: "hidden" }),
                    }}
                >
                    <MenuIcon color={styledTheme.color.primary.main} />
                </IconButton>

                <Box direction="row" align="center" gap="small">
                    <IconButton onClick={handleClick}>
                        <Avatar
                            userName={simpleName}
                            color={styledTheme.color.background.soft}
                            width="40px"
                            height="40px"
                            tipTitle={simpleName}
                            tipPosition="right"
                        />
                    </IconButton>
                </Box>

                <Menu
                    id="user-profile-menu"
                    anchorEl={isOpenProfile}
                    open={Boolean(isOpenProfile)}
                    onClose={handleClose}
                    styled_theme={styledTheme}
                >
                    <HeaderProfile padding="0px 20px">
                        <SectionTitle>CONTA</SectionTitle>
                    </HeaderProfile>

                    <MainProfile
                        width="260px"
                        padding="0px 20px"
                        direction="row"
                        gap="small"
                    >
                        <Avatar 
                            userName={simpleName}
                            color={styledTheme.color.background.soft}
                            width="40px"
                            height="40px"
                        />

                        <Box>
                            <UserName>{user.name}</UserName>
                            <UserEmail>{user.email}</UserEmail>
                        </Box>
                    </MainProfile>

                    <Divider />

                    <Options>
                        <Option
                            id="logout-option"
                            onClick={handleOpenModalLogout}
                        >
                            <ListItemIcon>
                                <LogOut size={20} />
                            </ListItemIcon>
                            <ListItemText>Sair</ListItemText>
                        </Option>
                    </Options>
                </Menu>
            </Toolbar>
            <Modal
                isOpen={isOpenModal}
                onClose={toggleModalLogout}
                width="auto"
            >
                <header
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "21px",
                        marginBottom: "86px",
                    }}
                >
                    <TitleModal>
                        Tem certeza que gostaria de sair da sessão ?
                    </TitleModal>
                    <SubtitleModal>
                        Ao sair você será deslogado do sistema e retornará a
                        tela principal
                    </SubtitleModal>
                </header>
                <PageActions justify="center">
                    <Button
                        value="Não"
                        variant="outlined"
                        width="5.75rem"
                        onClick={toggleModalLogout}
                    />
                    <Button
                        type="submit"
                        value="Sim"
                        onClick={handleSignOutConfirmed}
                        width="5.75rem"
                    />
                </PageActions>
            </Modal>
        </AppBar>
    )
}