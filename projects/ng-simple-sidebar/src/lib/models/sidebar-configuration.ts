/**
 * Configuration Object for SimpleSidebar
 */
export class SimpleSidebarConfiguration {
    /**
     * Icon to open the sidebar as CSS class string (optional, to remove,
     * do not set it)
     */
    openIcon?: string;

    /**
     * Icon to close the sidebar as CSS class string (optional, to remove,
     * do not set it)
     */
    closeIcon?: string;

    /**
     * Color configuration for darkMode and normal view (optional)
     */
    colors?: SimpleSidebarColors;

    /**
     * In default mode the sidebar minimize after click on a link (optional)
     */
    closeAfterClick?: boolean;
}

export interface SimpleSidebarColors {
    darkMode?: boolean;
    background?: string;
    font?: string;
    darkModeBackground?: string;
    darkModeFont?: string;
}
