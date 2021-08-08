import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { user } from 'src/app/model/user';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  displayedColumns: string[] = ['User Name', 'Email', 'Created'];
  datasource;
  @Input() users:user[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    
    this.datasource=new MatTableDataSource<user>(this.users);
    this.datasource.paginator=this.paginator;
  }
}
