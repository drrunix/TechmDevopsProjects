import { Component, OnInit } from '@angular/core';
import { ProgressService } from 'src/app/services/progress.service';

@Component({
  selector: 'app-user-graphs',
  templateUrl: './user-graphs.component.html',
  styleUrls: ['./user-graphs.component.css']
})
export class UserGraphsComponent implements OnInit {
progress:any[];
series1:any[];
series2:any[];
  constructor(private pf:ProgressService) { }

  ngOnInit(): void {
       this.pf.getProgress().subscribe(
         (data:any[])=>{
           let result=[]
           let result2=[]
           this.progress=data
           let object1={ "name": "Days", "series":[]}
           let object2={ "name": "Days", "series":[]}
           for(let x in this.progress){
               object1["series"].push({"name":this.progress[x].date,"value":Number(this.progress[x].weight)})
               object2["series"].push({"name":this.progress[x].date,"value":Number(this.progress[x].calories)})
           }
               result.push(object1)
               result2.push(object2);
               this.series1=result;
               this.series2=result2;
         },
         ()=> this.progress=[]
       )
  }

}
