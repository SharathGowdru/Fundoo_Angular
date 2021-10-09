import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from '../Services/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServiceService } from '../Services/data-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notecard: any;

  @Output() color: EventEmitter<any> = new EventEmitter();
  @Output() archive: EventEmitter<any> = new EventEmitter();
  // @Output() updatenote: EventEmitter<any> = new EventEmitter();

  isDeleted=false;
  isArchived=false;

  constructor(private noteService: NotesService, private snackBar : MatSnackBar,private dataService: DataServiceService) { }

  ngOnInit(): void {

  }

  trash() {
    console.log("Trash note");
    let data = {
      noteIdList: [this.notecard.id],
      isDeleted: !this.isDeleted
    }
      console.log(data);
      this.noteService.TrashNoteService(data).subscribe((response:any)=>{
      console.log('response Trash', response);
      this.snackBar.open('Note moved to Bin','',{duration:2000, });
    },(error:any)=>{
      console.log(error);
      this.snackBar.open('Error occured ', 'try Again', { duration: 2000, });
    })
    // window.location.reload();
  }
  colors: Array<any> = [
                        { code: '#ffffff', name: 'white' },
                        { code: '#FF6347', name: 'red' },
                        { code: '#FF4500', name: 'orange' },
                        { code: '#FFFF00', name: 'yellow' },
                        { code: '#ADFF2F', name: 'green' },
                        { code: '#43C6DB', name: 'teal' },
                        { code: '#728FCE', name: 'Blue' },
                        { code: '#2B65EC', name: 'darkblue' },
                        { code: '#D16587', name: 'purple' },
                        { code: '#F9A7B0', name: 'pink' },
                        { code: '#E2A76F', name: 'brown' },
                        { code: '#D3D3D3', name: 'grey' },
                      ];
setColor(color: any){
        this.notecard.color = color;
        // console.log('color',color);
        let data = {
        color: color,
        noteIdList: [this.notecard.id],
        }
        // console.log(data);
        this.noteService.changeColorService(data).subscribe(
        (response:any)=>{ 
        console.log('Response of setColour',response);
        this.snackBar.open('Background color Changed','',{duration:2000,})
        },
        (error:any) => {
        this.snackBar.open('Error occured ','try Again',{duration:2000,})
      }
    );
  }

  archiveNote(){
    // let notes : [];
    let data ={

      noteIdList: [this.notecard.id],
      isArchived: !this.isArchived
    }
        console.log(data);
        this.noteService.archiveNotes(data).subscribe((response:any) => {  
        console.log('archiveResponse',response);
        this.archive.emit();
        // notes=response.data.data;
        // this.notecard = notes.filter((data:any) =>  data.isDeleted != true);
        this.snackBar.open('Archived','',{duration:2000})
      },
      (error:any) => {
        console.log('archive Error', error);
        this.snackBar.open('Error occured during arcive','try Again',{duration:2000})
      });
      // window.location.reload();
   }

   unarchiveNote(){
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
        console.log('archive Error', error);
        this.snackBar.open('Error occured during arcive','try Again',{duration:2000,})
      });
      window.location.reload();
   }

   delete() {
    let req = {
      noteIdList: [this.notecard.id],
      isDeleted: false,
    }
      this.noteService.foreverdeleteNoteService(req).subscribe((response) => {
      console.log("delete response",response);
      this.snackBar.open('Deleted Permanently','',{duration:2000,});
      this.dataService.sendData(response);
    })
    // window.location.reload();
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
    // window.location.reload();
  }
}