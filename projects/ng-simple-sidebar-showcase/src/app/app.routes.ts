import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome.component';
import { AboutComponent } from './components/about.component';

export const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: '',
        component: WelcomeComponent
    }
];