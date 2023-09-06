import { Component } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators,FormBuilder} from '@angular/forms';
import { matchpassword } from 'src/matchPassword.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  //  registerForm:FormGroup=new FormGroup({
  //      Name: new FormControl('',Validators.required),
  //      email:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
  //      userName:new FormControl('',[Validators.required,this.notContainSpace]),
  //      userPassword:new FormControl('',Validators.required),
      
      
  //      confirmPassword: new FormControl('',Validators.required),

  //  },{
  //   validators:matchpassword
  //  }
   
  //  )


  registerForm:FormGroup;
  constructor(private fb:FormBuilder){
       this.registerForm=this.fb.group({
        Name:['',Validators.required],
        email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
        userName:['',[Validators.required,this.notContainSpace]],
        userPassword: ['',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?\/><.,])(?!.*\s).{8,}$/
            ),
          ],
        ],
        confirmPassword:['',Validators.required]
       },{
        validators:matchpassword
       })
  }
  
   Registeration(){
    console.log(this.registerForm)
   }
   notContainSpace(control:FormControl): ValidationErrors | null{
    if((control.value as string).indexOf(' ') >= 0){  
      return {notContainSpace: true}  
      }  

      return null;  
   }
  

  
}
