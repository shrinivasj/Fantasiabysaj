import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EthnicComponent } from './pages/ethnic/ethnic.component';
import { HomeComponent } from './pages/home/home.component';
import { JewelleryComponent } from './pages/jewellery/jewellery.component';

const routes: Routes = [
  {path:"Home" , component:HomeComponent},
  {path:"Ethnic" , component:EthnicComponent},
  {path:"Jewellery" , component:JewelleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
