import { Component, OnChanges, OnInit } from '@angular/core';
import { NotesService } from '../Services/noteservice.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})

export class NotesComponent implements OnInit,OnChanges {
  noteList=[];
  constructor( private noteservice : NotesService ) {
    
   }

  ngOnInit(): void {
    this.getAllCards();
  }

  ngOnChanges(){
    this.getAllCards();
  }

  checkData(){
    this.getAllCards();
  }
  getAllCards(): void {
    let notes : [];
    this.noteservice.getAllCards().subscribe((response: any) =>{
      console.log(response);
      notes=response.data.data;
      this.noteList = notes.filter((data:any) => data.isArchived != true && data.isDeleted != true);
      console.log(this.noteList);
      this.noteList.reverse();
      // console.log("cardList",this.cardList)
    },
      error => {
        console.log(error);
      })
    }
  }