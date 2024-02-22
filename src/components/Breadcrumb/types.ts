import { ILinkBreadcrumb } from "../../models/interfaces/ILinkBreadcrumb";

export interface IBreadcrumbProps {
    links: Array<ILinkBreadcrumb>;
    underline?: boolean;
}
