export class Search{
    when?:Date;
    where:String;
}
export interface CustomerInfo{
    first_name:string;
    last_name:string;
    gender:string;
    phone:string;
    email:string
    full_address?:[
        address:string,
        city:String,
        state:String,
        zip:String,
        country:String
    ];

}

export class CustomerInfo1 {

    constructor(
        public first_name:string,
        public last_name:string,
        public gender:string,
        public phone:string,
        public email:string
    ) {  }
  
  }