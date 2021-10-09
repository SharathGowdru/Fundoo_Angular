import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../Services/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-archiveicon',
  templateUrl: './archiveicon.component.html',
  styleUrls: ['./archiveicon.component.scss']
})
export class ArchiveiconComponent implements OnInit {
  @Input() notecard: any;

  isArchived=false;

  constructor( private noteService : NotesService, private snackBar : MatSnackBar ) { }

  ngOnInit(): void {
    // this.unarchive()
  }
  unarchive(){
    let data ={

      noteIdList: [this.notecard.id],
      isArchived: this.isArchived
    }
    console.log(data);
    this.noteService.archiveNotes(data).subscribe((response:any) => {  
        console.log('archiveResponse',response);
        this.snackBar.open('Unarchived','',{duration:2000,})
      },
      (error:any) => {
        console.log('Unarchive Error', error);
        this.snackBar.open('Error occured during Unarcive','try Again',{duration:2000,})
      });
      window.location.reload();
  }
}
