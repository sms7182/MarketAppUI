import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import{MatTableModule,MatIconModule,MatButtonModule} from '@angular/material';
import{MatSortModule} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { ItemComponent } from './item/item.component';
import { ShowItemComponent } from './item/show-item/show-item.component';
import { EditItemComponent } from './item/edit-item/edit-item.component';
import { AddItemComponent } from './item/add-item/add-item.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { ShowInvoiceComponent } from './invoice/show-invoice/show-invoice.component';
import { EditInvoiceComponent } from './invoice/edit-invoice/edit-invoice.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { AddUserComponent } from './userinfo/add-user/add-user.component';
import { ShowUserComponent } from './userinfo/show-user/show-user.component';
import { EditUserComponent } from './userinfo/edit-user/edit-user.component';
import { StoreComponent } from './store/store.component';
import { EditStoreComponent } from './store/edit-store/edit-store.component';
import { AddStoreComponent } from './store/add-store/add-store.component';
import { ShowStoreComponent } from './store/show-store/show-store.component';

import {InvoiceService} from 'src/app/services/invoice.service';
import {UserinfoService} from 'src/app/services/userinfo.service';
import {StoreService} from 'src/app/services/store.service';
import {ItemService} from 'src/app/services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ShowItemComponent,
    EditItemComponent,
    AddItemComponent,
    InvoiceComponent,
    AddInvoiceComponent,
    ShowInvoiceComponent,
    EditInvoiceComponent,
    UserinfoComponent,
    AddUserComponent,
    ShowUserComponent,
    EditUserComponent,
    StoreComponent,
    EditStoreComponent,
    AddStoreComponent,
    ShowStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,MatIconModule,MatButtonModule,HttpClientModule,MatSortModule
  ], 
  providers: [InvoiceService,ItemService,UserinfoService,StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
