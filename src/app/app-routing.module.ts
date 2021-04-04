import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotelroombookingComponent } from './Customers/motelroombooking/motelroombooking.component';
import { RidebookingComponent } from './Customers/ridebooking/ridebooking.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:''},
  {path:'bookyourroom',component:MotelroombookingComponent},
  {path:'bookyourride',component:RidebookingComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
