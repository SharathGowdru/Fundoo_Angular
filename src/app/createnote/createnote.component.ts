import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NotesService } from 'src/app/Services/noteservice.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})

export class CreatenoteComponent implements OnInit {
  notes : any;
  viewTitle: boolean = false;
  title : any;
  description : any;
  token: any;
  @Output() noteCreate: EventEmitter<any> = new EventEmitter();

  constructor(private noteservice: NotesService) { }

  ngOnInit(): void {
  
  }

  viewFull() {
    this.viewTitle = true;
  }

  submit(){
    
    let data = {
      title: this.title,
      description: this.description
    }

    console.log(data);
    
    this.token = localStorage.getItem('Token');
    console.log("Added data in", this.token);
    
    if (this.title && this.description) {
      this.noteservice.createNote(data).subscribe((response) => {

        this.noteCreate.emit(response);
        console.log(response);
        let message = "note created successfull";
        console.log(message); 
        
        this.title = "";
        this.description = "";   
        this.viewTitle = false;
      }, error => {
        console.log("Note creation error", error);  
      })
    }

    else {
      this.viewTitle = false;
      console.log("Enter some data");
    }
  }
}