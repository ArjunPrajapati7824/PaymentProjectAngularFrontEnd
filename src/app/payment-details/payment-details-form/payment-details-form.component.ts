import { NgFor, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetailModel } from 'src/app/shared/payment-detail-model.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styleUrls: ['./payment-details-form.component.css']
})
export class PaymentDetailsFormComponent implements OnInit {

  constructor(public service :PaymentDetailService, private toast :ToastrService) { }

  ngOnInit(): void {
  }

  addPaymentDetail(formData:NgForm){
    // console.log(data);
    
    this.service.formSubmited=true;
    if(formData.valid){
      if(this.service.formData.paymentDetailId===0)
      this.insertData(formData)
      else
      this.updateRecord(formData)
    }else{
      this.toast.error("Invalid Form" ,"Payment detail")

    }

  }

  insertData(form:NgForm){

    this.service.addPaymentDetails().subscribe(res=>{
      console.log(res);
      this.service.formSubmited=false
      if(res){
        
        this.toast.success("Data Inserted " ,"Payment detail")
        this.service.resetData(form)
        
      this.service.changeData.next(res as PaymentDetailModel);
    }  
    })
  }

  updateRecord(form:NgForm){
   
    this.service.updatePaymentRecord().subscribe(res=>{
      console.log(res);
      this.service.formSubmited=false
            
      this.service.resetData(form)

        this.toast.info("Data Updated " ,"Payment detail")
        
      this.service.changeData.next(res as PaymentDetailModel);
     
    })
  }

}
