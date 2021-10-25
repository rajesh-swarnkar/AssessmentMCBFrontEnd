import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder,FormArray} from '@angular/forms';
import { IMessage } from '../auth/login/auth.model';
import { saveAs } from 'file-saver';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import transactionData from '../data/transaction.json';
import {PeriodicElement} from '../view-submitted-transactions/view-submitted-transactions.component';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss']
})
export class NewTransactionComponent implements OnInit {

  hasError: boolean;
  message: string='show message!';
  name = 'Angular'; 
  TransactionForm: FormGroup; 
  
  constructor(private fb:FormBuilder) { 
    this.TransactionForm = this.fb.group({  
      name: '',  
      forms: this.fb.array([]) ,  
    });  
  }

  ngOnInit(): void {
    this.addMoreForm();
  }

  forms() : FormArray {  
    return this.TransactionForm.get("forms") as FormArray  
  } 
  
  newForm(): FormGroup {  
    return this.fb.group({  
      "Reference": '',  
      "Customer number": '',  
      "Customer name":'',
      "Customer address":'',
      "Customer Phone number":'',
      "transfer amount":'',
      "Transfer currency":'',
      "Beneficiary Bank":'',
      "Beneficiary Account Number":'',
      "Payment details":'',
      "Credit/Debit Card":'',
      "cvv":'',
      "Valid Through":'',
      "Region":'',
    })  
  }  
  addMoreForm() {  
    this.forms().push(this.newForm());  
  }  
     
  removeForm(i:number) {  
    console.log('removeForm at ',i);
    
    this.forms().removeAt(i);  
  }  
     
  onSubmit() {  
    console.log(this.TransactionForm.value);
    // let customObj:PeriodicElement; 
    // this.TransactionForm.value.forEach(element => {
    //   console.log(element)
    //   // transactionData.push(customObj);
    // });
    // // data:PeriodicElement[]=transactionData;

    const blob = new Blob([JSON.stringify(this.TransactionForm.value)], {type : 'application/json'});
    saveAs(blob,'transaction.json');
  }  

  //validation...
  error:string="";
  isPhoneError:boolean=false;
  validatePhone(event){
      console.log("$event: ",event.target.value,event.target.value.length);
      if(event.target.value.length>10 || event.target.value.length<10){
        this.error="Please Enter valid phone number!";
        this.isPhoneError=true;
      }

      console.log(this.error,this.isPhoneError);
  }

}
