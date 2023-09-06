import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


  export const matchpassword : ValidatorFn = (control: AbstractControl):ValidationErrors|null =>{

     let password = control.get('userPassword');
     let confirmpass = control.get('confirmPassword');
     if(password && confirmpass && password?.value != confirmpass?.value){
        return {
            passwordmatcherror : true }
     }
    return null; 


    
}