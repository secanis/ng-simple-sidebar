import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSimpleSidebarComponent } from './ng-simple-sidebar.component';

describe('NgSimpleSidebarComponent', () => {
    let component: NgSimpleSidebarComponent;
    let fixture: ComponentFixture<NgSimpleSidebarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgSimpleSidebarComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgSimpleSidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
