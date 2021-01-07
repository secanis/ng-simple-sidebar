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

    /**
     * Set mode for desktop or mobile page (optional)
     */
    mobile?: boolean;

    /**
     * CSS positioning mode for the dock (optional)
     */
    position?: 'sticky' | 'fixed';

    /**
     * Title, which got written in mobile mode (optional)
     */
    mobileTitle?: string;
}

export interface SimpleSidebarColors {
    darkMode?: boolean;
    background?: string;
    font?: string;
    darkModeBackground?: string;
    darkModeFont?: string;
}

export interface SimpleSidebarAbstractColors {
    darkMode?: boolean;
    fColor: string;
    bColor: string;
}
