import { Component, OnInit } from '@angular/core';
import {CustomerInfo} from '../../../variables/variables'
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-customerinfo',
  templateUrl: './customerinfo.component.html',
  styleUrls: ['./customerinfo.component.css']
})
export class CustomerinfoComponent implements OnInit {

 customerinfo :CustomerInfo = new CustomerInfo
 submitted:boolean=false;



  constructor(private db:AngularFirestore) { 


  }

  ngOnInit(): void {
  }

  onSubmit(){
    
    this.submitted =  true;
    //this.db.collection("CustomerInfo").add()
     
    
    
    // cust_first_name : this.customerinfo.first_name
    // cust_last_name:this.customerinfo.last_name
    // cust_gender:this.customerinfo.gender
    // cust_phone:this.customerinfo.phone
    // cust_email:this.customerinfo.email

  }
}



