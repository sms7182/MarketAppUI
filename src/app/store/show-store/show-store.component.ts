import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatTableDataSource,MatSort} from '@angular/material';
import {Store} from 'src/app/models/store.model';
import {StoreService} from 'src/app/services/store.service';

@Component({
  selector: 'app-show-store',
  templateUrl: './show-store.component.html',
  styleUrls: ['./show-store.component.css']
})
export class ShowStoreComponent implements OnInit {

  constructor(private service:StoreService) { }
  listData:MatTableDataSource<any>;
  displayedColumns:string[]=['Options','Name','Address','Lat','Lng','City','State']
  
  @ViewChild(MatSort,null) sort:MatSort;
  ngOnInit() {
    this.refereshStoreList();
  }
  refereshStoreList(){
    this.service.getAllStore().subscribe(data=>{
      this.listData=new MatTableDataSource(data);
      this.listData.sort=this.sort;
    })
  }
  onEdit(store:Store){
    console.log(store);
  }
  onDelete(id:string){
    console.log(id);
  }

}
