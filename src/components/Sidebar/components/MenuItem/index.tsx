import { GroupLabel, ItemLabel, Link } from "./styles";

import Tooltips from "../../../Tooltips";

function MenuItem({ items, open, styled_theme }: any) {
    return items.map(
        ({ path, label, nested_routes, icon: Icon, permissions }: any) =>
            !nested_routes ? (
                <Tooltips
                    title={label}
                    placement="right"
                    isActiveHover={open}
                    key={label}
                    disableInteractive
                    arrow
                >
                    <Link to={path} open={open} styled_theme={styled_theme}>
                        <Icon
                            className="svg-hover"
                            width="24px"
                            height="24px"
                        />

                        <ItemLabel open={open}>{label}</ItemLabel>
                    </Link>
                </Tooltips>
            ) : (

                <div>
                    <Tooltips
                        title={label}
                        placement="right"
                        isActiveHover={open}
                        key={label}
                        color={styled_theme.color.background.default}
                        text_color={styled_theme.color.text.main}
                        disableInteractive
                        arrow
                    >
                        <GroupLabel open={open} styled_theme={styled_theme}>
                            {label}
                        </GroupLabel>
                    </Tooltips>

                    {nested_routes.map(
                        ({ path, label, icon: Icon, permissions }: any) => (

                            <Tooltips
                                title={label}
                                placement="right"
                                isActiveHover={open}
                                key={label}
                                disableInteractive
                                arrow
                            >
                                <Link
                                    to={path}
                                    open={open}
                                    key={label}
                                    styled_theme={styled_theme}
                                >
                                    <Icon
                                        className="svg-hover"
                                        width="24px"
                                        height="24px"
                                    />

                                    <ItemLabel open={open}>
                                        {label}
                                    </ItemLabel>
                                </Link>
                            </Tooltips>

                        )
                    )}
                </div>

            )
    );
}

export default MenuItem;
