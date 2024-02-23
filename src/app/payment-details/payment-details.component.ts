import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetailModel } from '../shared/payment-detail-model.model';


@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(private service : PaymentDetailService){}

  paymentDetails:PaymentDetailModel[]=[]

  ngOnInit(): void {
    this.service.fetchData().subscribe(res=>{
      console.log(res);
      
      this.paymentDetails=res as PaymentDetailModel[]
    })
    console.log("Welcome");
    

  }

}
