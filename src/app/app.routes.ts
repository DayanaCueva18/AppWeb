import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { Error404Component } from "./pages/error404/error404.component";
import { ProductsComponent } from "./pages/products/products.component";


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'nosotros', component:NosotrosComponent },
    
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '**', component:Error404Component}
];