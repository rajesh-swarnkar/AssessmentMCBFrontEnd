import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGaurdService as AuthGuard} from './auth/auth-gaurd.service';
import { BackGaurdService as BackGuard} from './auth/back-gaurd.service';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'auth/login', component: LoginComponent, canActivate: [BackGuard]},
  { path: 'auth/customer-form', component: CustomerFormComponent, canActivate: [AuthGuard]},
  { path: 'auth/profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: 'auth/table', component: TableComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
