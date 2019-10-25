import { Component, OnInit } from '@angular/core';
import{MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(public dialogbox:MatDialogRef<AddItemComponent>) { }

  ngOnInit() {
  }
  onClose(){
     this.dialogbox.close(); 
  }
}
