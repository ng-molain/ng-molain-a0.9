import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DefaultLayoutService {
    sidebarCollapsed: boolean = false;

    constructor() { }

    public toggleSidebarCollapsed() {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    }

    public expandSidebar() {
        this.sidebarCollapsed = false;
    }

    public collapseSidebar() {
        this.sidebarCollapsed = true;
    }
}