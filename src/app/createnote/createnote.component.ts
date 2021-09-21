import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;
  panelSize = false;

  form = new FormGroup({
    titleText: new FormControl('' ,[Validators.required ,Validators.minLength(3)]),
    notesText: new FormControl('' ,[Validators.minLength(3)])
  })
  
  tokenId = localStorage.getItem("token");


  constructor() { }

  ngOnInit(): void {
  }
}