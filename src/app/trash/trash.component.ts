import { Component, OnInit } from '@angular/core';
import { NotesService } from '../Services/noteservice.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  noteList=[];

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.getTrash()
  }
 
  getTrash(){
    console.log("Trash Notes");
    this.noteService.getTrashNoteService().subscribe((response:any)=>{
      console.log('NoteList Trash ', response);

      this.noteList=response.data.data;
      this.noteList.reverse()
      console.log('noteList Trash' ,this.noteList)

    },(error:any)=>{
      console.log(error);
       window.location.reload();
    })  
  }
}