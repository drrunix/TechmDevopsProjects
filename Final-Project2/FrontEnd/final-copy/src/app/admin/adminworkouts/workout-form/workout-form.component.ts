import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WorkoutService } from 'src/app/services/workout.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ExercisesService } from 'src/app/services/exercises.service';
import { exercise } from 'src/app/model/exercise';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent implements OnInit {
  myForm;
  exercises:exercise[];
  selected:any[]=[];
  constructor(public fb:FormBuilder,private ws:WorkoutService,private es:ExercisesService,  public dialogRef: MatDialogRef<WorkoutFormComponent>) {
     this.myForm=  this.fb.group({
         name:['',[Validators.required,Validators.minLength(4)]],
         description:['',[Validators.required,Validators.minLength(20)]],
         weeks:['',[Validators.required]],
         days:['',[Validators.required]],
         imagefile: [null,[Validators.required]]
       });
   }
   
   uploadFile1(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.myForm.patchValue({
      imagefile: file
    });
    this.myForm.get('imagefile').updateValueAndValidity()
  }

 

  addWorkout(){
    let exercises=[];
    for(let x in this.selected){
            if(this.selected[x].id!=0){
               exercises.push(this.selected[x].id);
            }
    }
    if(exercises.length==0){
      alert("Please select exercises");
      
    }
    else{
    console.log(exercises);
    var formData: any = new FormData();
    formData.append("name",this.myForm.get('name').value);
    formData.append("description",this.myForm.get('description').value);
    formData.append("weeks",this.myForm.get('weeks').value);
    formData.append("days",this.myForm.get('days').value);
    formData.append("imagefile",this.myForm.get('imagefile').value);
    

    this.ws.addWorkout(formData).subscribe(
        (result:any)=>{
          console.log(result);
          let workoutid=result.id;
          let obj={workoutid:workoutid,exercises:exercises}
          this.ws.addWorkoutmap(obj).subscribe(
            ()=>  this.dialogRef.close(),
            ()=> alert("Something Went wrong")
          )
        
        },
        ()=>{alert("Something Went Wrong")}
    );
    }
  }
 
  selectedItem(x){
    if(this.selected[x].class.length==0){
        this.selected[x].id=this.exercises[x].id;
        this.selected[x].class="tick";
    }

    else{
        this.selected[x].id=0;
        this.selected[x].class="";
    }
  }

  ngOnInit(): void {
       this.es.getExercise().subscribe(
          (exercises:exercise[])=>{
            this.exercises=exercises
            console.log(this.exercises)
            for(let x in this.exercises)
                 {
                   
                   let temp={ class: '', id: 0}
                   this.selected.push(temp);
                 }
                 console.log(this.selected)
          },
          ()=>{}
       )
  }

}
