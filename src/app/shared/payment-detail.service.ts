import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { PaymentDetailModel } from './payment-detail-model.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  url:string=environment.apiBaseUrl + '/PaymentDetail'

  formData:PaymentDetailModel = new PaymentDetailModel();

  constructor(private http:HttpClient) { }


  fetchData(){
    return this.http.get(this.url)
  }

  addPaymentDetails(){
    // console.log(data);
    console.log(this.formData);
    
    return this.http.post(this.url,this.formData)
  }
}
