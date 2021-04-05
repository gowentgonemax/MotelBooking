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
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { CustomerinfoComponent } from './Customers/customerinfo/customerinfo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormControl,FormGroup} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
