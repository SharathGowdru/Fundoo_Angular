import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { NotesComponent } from './notes/notes.component';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';
import { CreatenoteComponent } from './createnote/createnote.component';
import { RemindersComponent } from './reminders/reminders.component';
import { EditlabelsComponent } from './editlabels/editlabels.component';
import { NullTemplateVisitor } from '@angular/compiler';
import { NotesComponent } from './notes/notes.component';
const routes: Routes = [
  {
    path : "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "forget-password",
    component: ForgetPasswordComponent
  },
  {
    path: 'resetpassword/:token',
    component: ResetPasswordComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children:[
      { 
        path : "",
        redirectTo: "notes",
        pathMatch: "full"
      },
      {
        path:'notes',
        component: NotesComponent
      },
      {
        path:'reminders',
        component: RemindersComponent
      },
      {
        path:'editlabels',
        component: EditlabelsComponent
      },
      {
        path:'archive',
        component: ArchiveComponent
      },
      {
        path:'trash',
        component:TrashComponent
      }
    ]
  },
  {
  path: 'createnote',
  component: CreatenoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
