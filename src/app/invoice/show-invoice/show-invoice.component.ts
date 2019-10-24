import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import {Invoice} from 'src/app/models/invoice.model';
import {InvoiceService} from 'src/app/services/invoice.service';
@Component({
  selector: 'app-show-invoice',
  templateUrl: './show-invoice.component.html',
  styleUrls: ['./show-invoice.component.css']
})
export class ShowInvoiceComponent implements OnInit {

  constructor(private service:InvoiceService) { }
  listData:MatTableDataSource<any>;
  displayedColumns:string[]=['Options','Code','CreatedBy','CreationDate','StoreName','TotalPrice']
  ngOnInit() {
   this.refreshInvList();
  }
  @ViewChild(MatSort,null) sort: MatSort;
  
   onEdit(inv:Invoice){
    console.log(inv);
  }
  onDelete(id:string){
    console.log(id);
  }
  refreshInvList(){
   
    this.service.getInvoiceListPerUser().subscribe(data=>{
      this.listData=new MatTableDataSource(data);
      this.listData.sort=this.sort;
    });
    
  }
}
