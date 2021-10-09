import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NotesService } from '../Services/noteservice.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  @Input() notes: any;
  title:any;
  description:any;
  color:any;
  // @Input() notes: any

  constructor( private noteService:NotesService,
    public dialogRef: MatDialogRef<UpdatenoteComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
      this.title=data.title
      this.description=data.description
      this.color = data.color
    }

  ngOnInit(): void {
    console.log(this.data);
  }

  updateNotes(){
    console.log(this.data);
    let request ={
      noteId: this.data.id,
      title: this.title,
      description: this.description
    }
      // console.log(request);
      this.noteService.updateNote(request).subscribe((result)=>{
      console.log(result);
      this.dialogRef.close();
    })
    window.location.reload();
  }
}