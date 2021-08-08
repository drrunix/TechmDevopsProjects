import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExercisesFormComponent } from '../exercises-form/exercises-form.component';
import { exercise } from 'src/app/model/exercise';
import { ExercisesService } from 'src/app/services/exercises.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adm-exercises-home',
  templateUrl: './adm-exercises-home.component.html',
  styleUrls: ['./adm-exercises-home.component.css']
})
export class AdmExercisesHomeComponent implements OnInit {

  exercises:exercise[]=[];
  constructor(private dialog:MatDialog,private es:ExercisesService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.es.getExercise().subscribe(
         (data:exercise[])=> this.exercises=data,
         ()=>this.exercises=[]
      )
  }
  
  changeroute(current){
    this.router.navigate(['details'],{relativeTo:this.route.parent,state:current});;
  }

  loadDialog(){
    
    const dialogRef = this.dialog.open(ExercisesFormComponent, {
      width: '900px',
      height: '650px'
    });

    dialogRef.afterClosed().subscribe(()=>this.ngOnInit());

}
}