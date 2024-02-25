import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetailModel } from '../shared/payment-detail-model.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(private service : PaymentDetailService,private toast:ToastrService){}

  paymentDetails:PaymentDetailModel[]=[
    
  ]

  ngOnInit(): void {
    this.fetchData();
    
    
    this.service.changeData.subscribe(s=>{
      this.fetchData();
    })

  }


  fetchData(){
    this.service.fetchData().subscribe(res=>{
      console.log(res);
      
      this.paymentDetails=res as PaymentDetailModel[]
    })
  }

  updateData(data:PaymentDetailModel){
    this.service.formData=Object.assign({},data)

  }

  deleteData(id:number){
    if(confirm('yes'))
    this.service.deleteRecord(id).subscribe(res=>{
      this.service.changeData.next(res as PaymentDetailModel);
      
      this.toast.success("Data Deleted", "PaymentDetail")
    })

  }
}
