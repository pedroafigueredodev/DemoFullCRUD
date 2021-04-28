import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageUserService } from '../../services/manage-user.service'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { UserData } from 'src/app/model/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


 

  addMode: boolean = true;
  userId : string;
  selectedUser : UserData;
  

  addUserForm = new FormGroup({

    name: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    address: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    website: new FormControl("", Validators.required),
    company: new FormControl("", Validators.required),

  });

  constructor(
     private muService: ManageUserService,
     private router: Router,
     private route: ActivatedRoute,
     ) 
     {

     }

   public addUserFormCheckError (controlName: string, errorName: string){
      return this.addUserForm.controls[controlName].hasError(errorName);
    }

   
    public onSubmit(form: NgForm) {
     if(this.addMode){this.addUser(form);}
     else{this.editUser(this.userId,form);}
    }

   
  private addUser(form: NgForm){
    this.muService.addUser(form.value).subscribe(
       res => {
       this.addUserOKBox();
        
      },
      err => {
        this.errorBox(err.message);
      }
    )
  }

  private editUser(id: string, form: NgForm){
    this.muService.editUser(id, form.value).subscribe(
       res => {
        this.editUserOKBox();
      },
      err => {
        this.errorBox(err.message);
      }
    )
  }

  

  ngOnInit(): void {
    if (this.route.snapshot.params['id']){
      this.addMode = false;
      this.userId = this.route.snapshot.params['id'];
      this.addFormInitialValues(this.userId);
    }
    
  }

  errorBox(errorText: string){
    Swal.fire({
      title: 'Operation fails!',
      text: errorText,
      icon: 'error',
      showCancelButton: false,
      confirmButtonText: 'ok',
      
    }).then((result) => {})
  }

  addUserOKBox(){
    Swal.fire({
      title: 'Operation result',
      text: 'User added succesfully!',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'ok',
      
    }).then((result) => {
      if (result.value) {
        this.router.navigateByUrl('user-list');
      } 
    })
  }

  editUserOKBox(){
    Swal.fire({
      title: 'Operation result',
      text: 'User edited succesfully!',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'ok',
      
    }).then((result) => {
      if (result.value) {
        this.router.navigateByUrl('user-list');
      } 
    })
  }

  addFormInitialValues(id: string){
    this.muService.getUser(id).subscribe(
      res => {
              this.addUserForm.patchValue(res);
              console.log('init val ok');
     },
     err => {
       console.error(err)
     }
   )
  }


}
