/**
 * Defines the simple sidebar settings.
 */
export class SimpleSidebarSettings {
    /**
     * Describes the current state of the sidebar, as an effect for the css events (true or false)
     */
    state: boolean;
    /**
     * Set a custom title to the top of the sidebar (optional)
     */
    title: string;
    /**
     * Describes the current close-state of the sidebar (true or false)
     */
    close: boolean;
    /**
     * Set a custom icon as close icon (optional)
     */
    closeIcon: string;
    /**
     * Decide if the icons should be docked (optional)
     */
    docked: boolean;

    constructor(state: boolean, title: string, close: boolean, closeIcon: string, docked: boolean) {
        this.state = state || false;
        this.title = title || '';
        this.close = close || true;
        this.closeIcon = closeIcon || null;
        this.docked = docked || false;
    }
}
