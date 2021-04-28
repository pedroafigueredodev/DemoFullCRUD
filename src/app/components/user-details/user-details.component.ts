import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserData } from 'src/app/model/user';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  selectedUser: UserData;
  fromDialog: string;

  constructor(
    public dialogRef: MatDialogRef<UserDetailsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
   )
   {
    this.selectedUser = data.selectedUser;
   
   }

  ngOnInit() {
    
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.fromDialog });
  }

}
