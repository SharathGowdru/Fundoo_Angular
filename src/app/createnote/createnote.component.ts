import { Component, OnInit, ViewChild } from '@angular/core';
import { NotesService } from 'src/app/Services/noteservice.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})

export class CreatenoteComponent implements OnInit {
  viewTitle: boolean = false;
  title : any;
  description : any;
  token: any;
  
  constructor(private note: NotesService) { }

  ngOnInit(): void {
  
  }

  viewFull() {
    this.viewTitle = true;
  }

  submit(){

    let data = {
      title: this.title,
      description: this.description,
    }

    console.log(data)
    this.token = localStorage.getItem('Token');
    console.log("Added data in", this.token);
    
    if (this.title && this.description) {
      
      this.note.createNote(data).subscribe((response) => {
        console.log(response);
        let message = "note created successfull";
        console.log(message); 
        this.title = "";
        this.description = "";     
      }, error => {
        console.log("error in register", error);  
      })
    }
     else {
      this.viewTitle = false;
      console.log("Enter some data");
    }
  }
}