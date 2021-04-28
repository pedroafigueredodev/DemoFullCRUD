import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild,Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ManageUserService } from '../../services/manage-user.service';
import { UserData } from '../../model/user';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef,MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';





@AutoUnsubscribe()
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
  providers: [ManageUserService]
})


export class ListUsersComponent implements AfterViewInit, OnInit  {
  displayedColumns: string[] = ['name', 'email', 'phone', 'company', 'Operations' ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selectedUser: UserData;
  userList : UserData[]; 

  //DIALOGS test
  title = 'angular-material-tree-tutorial';

  dialogValue: string;
  sendValue: string = "PRUEBA";

  constructor(
    private manageUserService: ManageUserService,
    private router: Router,
    private dialog: MatDialog,
    ) {
  //this.dataSource = new MatTableDataSource(this.userList);
  }

  ngOnDestroy(){}


  loadUserList(){
    this.manageUserService.loadUserList().subscribe(
      (data: UserData[]) => {
        this.dataSource = new MatTableDataSource(data); 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  private deleteUser(id: string){
    this.manageUserService.deleteUser(id).subscribe(
       res => {
        //console.log('Eentro en deleteUser()')
        this.deleteUserOKBox();
      },
      err => {
        console.error(err)
      }
    )
  }

  ngOnInit():void{
    this.loadUserList();
  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteUserBox(id: string){
    Swal.fire({
      title: 'Delete user',
      text: 'You will not be able to recover this user!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        this.deleteUser(id);
      } 
    })
  }

  deleteUserOKBox(){
    Swal.fire({
      title: 'Operation result',
      text: 'User deleted succesfully!',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'OK',
      
    }).then((result) => {
      if (result.value) {
        this.loadUserList();
        //window.location.reload();
      } 
    })
  }

  openDialog(user: UserData): void {
    const dialogRef = this.dialog.open(UserDetailsComponent, {
      disableClose : false,
      autoFocus : true,
      width: '50%',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { selectedUser: user }
    });
 
  }

}