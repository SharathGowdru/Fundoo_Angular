import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from '../Services/noteservice.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  noteList = [];

  constructor(private noteService: NotesService, private snackBar:MatSnackBar) { }

  ngOnInit(){

    this.getArchiveNotes()
  }


  getArchiveNotes(){
      let notes = [];
      this.noteService.getArchiveNotes().subscribe((response:any) => { 
      console.log(response);
      notes=response.data.data;
      this.noteList = notes.filter((data:any) =>  data.isDeleted != true);
      this.noteList.reverse()
      console.log("noteList ",this.noteList)
      // this.snackBar.open('Archived','',{duration:2000,});
      },
      error => {console.log(error);
      this.snackBar.open('Error Occured','try Again',{duration:2000,});
    })
  }
}
