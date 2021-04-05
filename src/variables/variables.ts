export class Search{
    when?:Date;
    where:String;
}
export class CustomerInfo{
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