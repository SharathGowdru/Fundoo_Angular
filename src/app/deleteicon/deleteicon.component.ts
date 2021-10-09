import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../Services/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-deleteicon',
  templateUrl: './deleteicon.component.html',
  styleUrls: ['./deleteicon.component.scss']
})
export class DeleteiconComponent implements OnInit {
  @Input() notecard:any;
  isDeleted=false;
 
  constructor( private noteService : NotesService,private snackBar:MatSnackBar,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // openDialog() {
  //   this.dialog.open(DialogElementsExampleDialog);
  // }

    delete() {
      let req = {
        noteIdList: [this.notecard.id],
        isDeleted: false,
      }
      this.noteService.foreverdeleteNoteService(req).subscribe((response) => {
        console.log("delete response",response);
        this.snackBar.open('Deleted Permanently','',{duration:2000,})
      })
      // console.log();
      window.location.reload();
    }


    restore() {
      console.log("Trash note");
      let data = {
        noteIdList: [this.notecard.id],
        isDeleted: this.isDeleted
      }
      console.log(data);
      this.noteService.TrashNoteService(data).subscribe((response:any)=>{
        console.log('response Trash', response);
        this.snackBar.open('Note restored','',{duration:2000, });
      },(error:any)=>{
        console.log(error);
        this.snackBar.open('Error occured ', 'try Again', { duration: 2000, });
      })
      window.location.reload();
    }

// }
// @Component({
//   selector: 'dialog-elements-example-dialog',
//   templateUrl: 'dialog-elements-example-dialog.html',
// })
// export class DialogElementsExampleDialog {
//   @Input() notecard:any;
//   isDeleted=false;
 
//   constructor( private service : NotesService,private snackBar:MatSnackBar,public dialog: MatDialog) { }

//   ngOnInit(): void {
//   }
//   delete() {
//     let req = {
//       noteIdList: [this.notecard.id],
//       isDeleted: false,
//     }
//     this.service.foreverdeleteNoteService(req).subscribe((response) => {
//       console.log("delete response",response);
//       this.snackBar.open('Deleted Permanently','',{duration:2000,})
//     })
//     // console.log();
//   }
// }
}