import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PaymentDetailModel } from 'src/app/shared/payment-detail-model.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styleUrls: ['./payment-details-form.component.css']
})
export class PaymentDetailsFormComponent implements OnInit {

  constructor(public service :PaymentDetailService) { }

  ngOnInit(): void {
  }

  addPaymentDetail(){
    // console.log(data);
    
    this.service.addPaymentDetails().subscribe(res=>{
      console.log(res);
      
    })


  }

}
