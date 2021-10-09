import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  @Input() noteArray : any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    
  }
  openDialog(notecard: any){
    console.log(notecard);
    const dialogRef = this.dialog.open(UpdatenoteComponent,{data:notecard});
  }
}
