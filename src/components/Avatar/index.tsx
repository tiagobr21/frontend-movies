import { Skeleton } from "@mui/material";

import { AvatarMui } from "./styles";

import Tooltips from "../Tooltips";

import { stringAvatar } from "./utils";

const Avatar = ({
    userName,
    width,
    height,
    tipTitle,
    tipPosition,
    ...rest
}: any) => {
    const user_avatar = stringAvatar(userName);

    return user_avatar ? (
        <Tooltips title={tipTitle} placement={tipPosition}>
            <AvatarMui
                src="/static/images/avatar/1.jpg"
                sx={{ width: "2.3rem", height: "2.3rem" }}
                {...rest}
            >
                {user_avatar}
            </AvatarMui>
        </Tooltips>
    ) : (
        <Skeleton variant="circular" width={width} height={height} />
    );
};

export default Avatar;
