import { Component, OnInit,ViewChild } from '@angular/core';
import{MatTableDataSource,MatSort} from '@angular/material'
import{Item} from 'src/app/models/item-model';
import{ItemService} from 'src/app/services/item.service';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css']
})
export class ShowItemComponent implements OnInit {

  constructor(private service:ItemService) { }
  listData:MatTableDataSource<any>;
  displayedColumns:string[]=['Options','Code','Name','Unit','UnitPrice']
@ViewChild(MatSort,null) sort:MatSort;
  ngOnInit() {
    this.refereshItemList();
  }
  onEdit(item:Item){
    console.log(item);
  }
  onDelete(id:string){
    console.log(id);
  }
  refereshItemList(){
    this.service.getItemList().subscribe(data=>{
      this.listData=new MatTableDataSource(data);
      this.listData.sort=this.sort;
    });
  }
}
