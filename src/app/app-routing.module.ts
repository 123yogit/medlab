import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { ViewProductDetailsCategoryComponent } from './view-product-details-category/view-product-details-category.component';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'medicines',component:MedicineHomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'view-product-details/:drug-code',component:ViewProductDetailsComponent},
  {path:'view-product-details-category',component:ViewProductDetailsCategoryComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
