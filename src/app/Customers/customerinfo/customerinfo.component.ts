import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import {DataserviceService} from '../../dataservice.service'
// import {CustomerInfo} from '../../app.customerinfo'
import {FormControl,FormGroup} from '@angular/forms';





@Component({
  selector: 'app-customerinfo',
  templateUrl: './customerinfo.component.html',
  styleUrls: ['./customerinfo.component.css']
})
export class CustomerinfoComponent implements OnInit {

 submitted:boolean=false;
 selectedgender:String;

 first_name:string;
 last_name :string;
 gender :string;
 phone:string;
 email:string; 
 street:String;
 city:String;
 state:String;
 zip:String;
 country:String;
 
 range = new FormGroup({
  start: new FormControl(),
  end: new FormControl()
});


  constructor(private db:AngularFirestore,
              public customerdataservice:DataserviceService) { 


              

  }

  ngOnInit(): void {
  }

  CreatRecord(){

    let Address:{}={
      street:this.street,
      city:this.city,
      state:this.state,
      zip:this.zip,
      country:this.country
    }

    let Record:{}={
    cust_first_name:this.first_name,
    cust_last_name:this.last_name,
    cust_phone:this.phone,
    cust_gender:this.selectedgender,
    cust_email:this.email,
    cust_address:Address

    }
    
   

    this.customerdataservice.saveCustomerInfo(Record).then(ser=>{

      console.log('This is Data',ser)
    }).catch(error =>{
        console.log(error)
    });
    
  }
  
  public submitForm(){
    console.log(this.selectedgender)
    console.log(this.first_name)
    this.CreatRecord()
    

  }
  
}



