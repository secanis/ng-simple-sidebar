export class SimpleSidebarSettings {
    state: boolean;
    title: string;
    close: boolean;
    closeIcon: string;

    constructor(state: boolean, title: string, close: boolean, closeIcon: string) {
        this.state = state || false;
        this.title = title || '';
        this.close = close || true;
        this.closeIcon = closeIcon || null;
    }
}
