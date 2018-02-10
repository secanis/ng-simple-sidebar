/**
 * Defines the simple sidebar settings.
 */
export class SidebarSettings {
    /**
     * Describes the current state of the sidebar, as an effect for the css events (true or false)
     */
    state: boolean;
    /**
     * Deactivate the open/close button, default: true (optional)
     */
    openCloseButton: boolean;
    /**
     * Set an own icon (like font-awesome), default: fa fa-bars fa-2x (optional)
     */
    openCloseButtonIcon: string;

    constructor(state: boolean, openCloseButton: boolean, openCloseButtonIcon: string) {
        this.state = state || false;
        this.openCloseButton = openCloseButton || true;
        this.openCloseButtonIcon = openCloseButtonIcon || 'fa fa-bars fa-2x';
    }
}
