import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {path:"home", component: HomeComponent},
    {path:"", component:LayoutComponent}
];
