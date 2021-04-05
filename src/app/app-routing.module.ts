import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotelroombookingComponent } from './Customers/motelroombooking/motelroombooking.component';
import { RidebookingComponent } from './Customers/ridebooking/ridebooking.component';
import {CustomerinfoComponent} from './Customers/customerinfo/customerinfo.component';
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:''},
  {path:'selectyourmotel',component:MotelroombookingComponent},
  {path:'selectyourride',component:RidebookingComponent},
  {path:'customerinfo',component:CustomerinfoComponent}
  


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
