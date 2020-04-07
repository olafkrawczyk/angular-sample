import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent,
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: ContactComponent,
  },
  {
    path: 'products',
    component: HomePageComponent,
    children: [
      { path: ':id', component: ProductDetailsComponent },
      { path: '', component: ProductsListComponent },
      { path: '**', component: ProductsListComponent },
    ],
  },
  { path: '**', redirectTo: '/products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
