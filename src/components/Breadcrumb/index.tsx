import { Breadcrumb, Link } from "./styles";

import { IBreadcrumbProps } from "./types";
export default function Breadcrumbs({ links, underline }: IBreadcrumbProps) {
    return (
        <Breadcrumb separator="›">
            {links?.map((link) => (
                <Link
                    key={link?.id}
                    color="text.primary"
                    to={link?.path}
                    fontWeight={link?.fontWeight}
                    onClick={link?.onClick}
                >
                    {link?.name}
                </Link>
            ))}
        </Breadcrumb>
    );
}
