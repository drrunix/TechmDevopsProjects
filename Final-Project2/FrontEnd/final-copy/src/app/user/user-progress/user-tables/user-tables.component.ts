import { Component, OnInit } from '@angular/core';
import { ProgressService } from 'src/app/services/progress.service';

@Component({
  selector: 'app-user-tables',
  templateUrl: './user-tables.component.html',
  styleUrls: ['./user-tables.component.css']
})
export class UserTablesComponent implements OnInit {
progress:any[]=[];
  constructor(private pf:ProgressService) { }

  ngOnInit(): void {
       this.pf.getProgress().subscribe(
         (data:any[])=>this.progress=data,
         ()=> this.progress=[]
       )
  }

}
