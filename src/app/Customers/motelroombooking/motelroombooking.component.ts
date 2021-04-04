import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormControl} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {Search} from '../../../variables/variables'
import { AngularFirestore } from '@angular/fire/firestore';
import { Action } from 'rxjs/internal/scheduler/Action';

interface Locations {
  locationName: string;
  locationValue: string;
}

@Component({
  selector: 'app-motelroombooking',
  templateUrl: './motelroombooking.component.html',
  styleUrls: ['./motelroombooking.component.css']
})
export class MotelroombookingComponent implements OnInit {
  search:Search =  new Search
  submitted:boolean=false;
  rooms:boolean=true;
  selectedLocation:String;
  a:String;
  myData:[];
  locations: Locations[] = [
    {locationName: 'New Jersey', locationValue: 'New Jersey'},
    {locationName: 'New York', locationValue: 'New York'},
    {locationName: 'Texas', locationValue: 'Texas'},
    {locationName: 'Sansfransisco', locationValue: 'SFO'},
    {locationName: 'Kentucky', locationValue: 'Kentucky'},
    {locationName: 'Philadelphia', locationValue: 'Philly'},
    {locationName: 'Virginia', locationValue: 'Virginia'}
  ];
  
  constructor(private afStore:AngularFirestore) {

          console.log("From constructor")

        afStore.collection("CustomerInfo").get().subscribe(snap => {
        snap.forEach(doc => {
          console.log(typeof(doc.data()))
    });
});
  


  }
  ngOnInit(): void {
    console.log("fron onginit")
    
  }
  onSubmit(){
    this.submitted =  true;
    this.rooms = false
    console.log("Here, I am.")
    console.log(this.selectedLocation)
    
  }
}
