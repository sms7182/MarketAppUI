import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatTableDataSource,MatSort} from '@angular/material';
import {UserInfo} from 'src/app/models/userinfo.model';
import {UserinfoService} from 'src/app/services/userinfo.service';
@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  constructor(private service:UserinfoService) { }
  listData:MatTableDataSource<any>;
  displayedColumns:string[]=['Options','UserName']
@ViewChild(MatSort,null) sort:MatSort;
  ngOnInit() {
    this.refereshUserList();
    }
  
  
  onEdit(user:UserInfo){
    console.log(user);
  }
  onDelete(Id:string){
    console.log(Id);
  }
  refereshUserList(){
    this.service.getAllUser().subscribe(data=>{
      this.listData=new MatTableDataSource(data);
      this.listData.sort=this.sort;
    })
  }

}
