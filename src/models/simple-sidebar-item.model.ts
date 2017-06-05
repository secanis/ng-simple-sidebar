export class SimpleSidebarItem {
    name: string;
    route: string;
    icon: string;
    target: string;

    constructor(name: string, route: string, icon: string, target: string) {
        this.name = name;
        this.route = route;
        this.icon = icon;
        this.target = target;
    }
}