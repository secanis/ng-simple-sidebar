import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '**', redirectTo: '/' }
];

export const routing = RouterModule.forRoot(routes);
