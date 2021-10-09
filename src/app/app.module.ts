import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NotesComponent } from './notes/notes.component';
import { RemindersComponent } from './reminders/reminders.component';
import { EditlabelsComponent } from './editlabels/editlabels.component';
import { TrashComponent } from './trash/trash.component';
import { CreatenoteComponent } from './createnote/createnote.component';
import { HeaderComponent } from './header/header.component';
import { DisplaynoteComponent } from './displaynote/displaynote.component';
import { UpdatenoteComponent } from './updatenote/updatenote.component';
import { ColorsComponent } from './colors/colors.component';
import { IconsComponent } from './icons/icons.component';
import { DeleteiconComponent } from './deleteicon/deleteicon.component';
import { ArchiveComponent } from './archive/archive.component';
import { ArchiveiconComponent } from './archiveicon/archiveicon.component';
import { materialModule } from './material/material.module';
import { DialogueElementComponent } from './dialogue-element/dialogue-element.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetPasswordComponent,
    DashboardComponent,
    ResetPasswordComponent,
    NotesComponent,
    RemindersComponent,
    EditlabelsComponent,
    TrashComponent,
    CreatenoteComponent,
    HeaderComponent,
    DisplaynoteComponent,
    UpdatenoteComponent,
    ColorsComponent,
    IconsComponent,
    DeleteiconComponent, 
    ArchiveComponent, 
    ArchiveiconComponent, DialogueElementComponent
  ],
  imports: [
    materialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
