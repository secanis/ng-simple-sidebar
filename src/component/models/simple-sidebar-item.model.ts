/**
 * Definition of a simple sidebar item.
 */
export class SimpleSidebarItem {
    /**
     * item name
     */
    name: string;
    /**
     * item url (could be a route or a full url)
     */
    route: string;
    /**
     * item icon (optional)
     */
    icon: string;
    /**
     * item target (optional, equals to the HTML5 target of an "a" tag)
     */
    target: string;
    /**
     * items position (optional, container top or botton, default top)
     */
    position: string;

    constructor(name: string, route: string, icon: string, target: string, position: string) {
        this.name = name;
        this.route = route;
        this.icon = icon;
        this.target = target;
        this.position = position || 'top';
    }
}
