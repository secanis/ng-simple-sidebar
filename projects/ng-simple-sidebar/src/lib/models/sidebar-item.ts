/**
 * Definition of a simple sidebar item.
 */
export interface SimpleSidebarItem {
    /**
     * item name
     */
    name: string;
    /**
     * item url (optional, could be a uri or a full url)
     */
    url?: string;
    /**
     * item routerLink (optional)
     */
    routerLink?: string[];
    /**
     * item icon
     */
    icon: string;
    /**
     * item target (optional, equals to the HTML5 target of an "a" tag)
     */
    target?: string;
    /**
     * items position (optional, container top or botton, default top)
     */
    position?: string;
}

export enum SimpleSidebarPosition {
    top = 'top',
    bottom = 'bottom'
}
