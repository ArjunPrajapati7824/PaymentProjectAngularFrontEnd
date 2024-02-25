import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { PaymentDetailModel } from './payment-detail-model.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  url:string=environment.apiBaseUrl + '/PaymentDetail'

  formData:PaymentDetailModel = new PaymentDetailModel();

  formSubmited:boolean=false;

  constructor(private http:HttpClient) { }


  fetchData(){
    return this.http.get(this.url)
  }

  changeData=new BehaviorSubject<PaymentDetailModel>({cardNumebr: "123456789",cardOwnerName: "Arjun",expirationDate : "01/02",paymentDetailId: 1,securityCode :"111123"})

  
  addPaymentDetails(){
    // console.log(data);
    console.log(this.formData);
    
    return this.http.post(this.url,this.formData)
  }

  updatePaymentRecord(){
    const urlId=`${this.url}/${this.formData.paymentDetailId}`
    console.log(urlId);
    
    return this.http.put(urlId,this.formData)
  }

  deleteRecord(id:number){
    const urlId=`${this.url}/${id}`
      return this.http.delete(urlId)
  }

  resetData(form:NgForm){
    form.form.reset();
  }
}
