import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InstituteModule } from './institute/institute.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/Guard/auth.guard';
import { UserGuard } from './shared/Guard/user.guard';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'enrollment', loadChildren:()=>import('./enrollment/enrollment.module').then((m)=>m.EnrollmentModule),canActivate:[UserGuard]},
  {path:'institute', loadChildren:()=>import('./institute/institute.module').then((m)=>m.InstituteModule),canActivate:[UserGuard,]},
  {path:'course', loadChildren:()=>import('./course/course.module').then((m)=>m.CourseModule),canActivate:[UserGuard,]},
  {path:'user', loadChildren:()=>import('./user/user.module').then((m)=>m.UserModule),canActivate:[AuthGuard,]},
  {path:'batch', loadChildren:()=>import('./batch/batch.module').then((m)=>m.BatchModule),canActivate:[UserGuard,]},
  {path:'**', redirectTo:'login', pathMatch:"full"},
  // {path:'header/:id', component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
