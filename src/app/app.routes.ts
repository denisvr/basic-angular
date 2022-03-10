import { Routes } from '@angular/router';
import { HomeComponent } from './navigation/home/home.component';
import { ContactComponent } from './company/contact/contact.component';
import { AboutComponent } from './company/about/about.component';
import { DataBindingComponent } from './demo/data-binding/data-binding.component';
// import { ProductListComponent } from './products/product-list/product-list.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    // { path: 'products', component: ProductListComponent },
    // { path: 'product-detail/:id', component: ProductListComponent }
];