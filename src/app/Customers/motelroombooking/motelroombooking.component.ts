import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormControl,FormGroup} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {Search} from '../../../variables/variables'
import {DataserviceService} from '../../service/dataservice.service'




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
  locationData:any;
  myData:[];
  myDate = new Date()
  
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(private ds:DataserviceService,
              ) {
    console.log("From constructor")
    ds.getLocations().subscribe(a=> {
      this.locationData = a;
      console.log(this.locationData)
    })            
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
  confirmMotel(){
    console.log("confirm Motel")
    console.log(this.myDate);
  }
}
