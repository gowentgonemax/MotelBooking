import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FirebaseConfig} from './app.firebaseconfig'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotelroombookingComponent } from './Customers/motelroombooking/motelroombooking.component';
import { RidebookingComponent } from './Customers/ridebooking/ridebooking.component';
import { RouterModule } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout'
import { AngularFireModule } from '@angular/fire';
import {MatInputModule} from '@angular/material/input';

import { CustomerinfoComponent } from './Customers/customerinfo/customerinfo.component';
import {FormControl,FormGroup,ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {DataserviceService} from '../../src/app/dataservice.service'

@NgModule({
  declarations: [
    AppComponent,
    MotelroombookingComponent,
    RidebookingComponent,
    CustomerinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    
    
    
  
    
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
