import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo:"user-list"},
  {path: "user-list", component: ListUsersComponent},
  {path: "add-user",  component: AddUserComponent},
  {path: "user-details",  component: UserDetailsComponent},
  {path: "edit-user/:id",  component: AddUserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
