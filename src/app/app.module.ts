import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FirebaseConfig} from './app.firebaseconfig'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotelroombookingComponent } from './Customers/motelroombooking/motelroombooking.component';
import { RidebookingComponent } from './Customers/ridebooking/ridebooking.component';
import {FormsModule} from '@angular/forms';
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
    RouterModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    
    
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
