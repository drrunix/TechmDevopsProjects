import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ExercisesService } from 'src/app/services/exercises.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exercises-form',
  templateUrl: './exercises-form.component.html',
  styleUrls: ['./exercises-form.component.css']
})
export class ExercisesFormComponent implements OnInit {
myForm;
  constructor(public fb:FormBuilder,private es:ExercisesService,  public dialogRef: MatDialogRef<ExercisesFormComponent>) {
     this.myForm=  this.fb.group({
         name:['',[Validators.required,Validators.minLength(4)]],
         description:['',[Validators.required,Validators.minLength(20)]],
         duration:['',[Validators.required]],
         reps:['',[Validators.required]],
         sets:['',[Validators.required]],
         calrange1: ['',[Validators.required]],
         calrange2: ['',[Validators.required]],
         calrange3: ['',[Validators.required]],
         difficulty:['Beginner'],
         bodypart: ['',[Validators.required,Validators.minLength(2)]],
         equipment: ['',[Validators.required,Validators.minLength(2)]],
         imagefile: [null,[Validators.required]],
         videofile: [null,[Validators.required]]
       });
   }
   
   uploadFile1(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.myForm.patchValue({
      imagefile: file
    });
    this.myForm.get('imagefile').updateValueAndValidity()
  }

  uploadFile2(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.myForm.patchValue({
      videofile: file
    });
    this.myForm.get('videofile').updateValueAndValidity()
  }

  addExercise(){
    var formData: any = new FormData();
    formData.append("name",this.myForm.get('name').value);
    formData.append("description",this.myForm.get('description').value);
    formData.append("sets",this.myForm.get('sets').value);
    formData.append("reps",this.myForm.get('reps').value);
    formData.append("calrange1",this.myForm.get('calrange1').value);
    formData.append("calrange2",this.myForm.get('calrange2').value);
    formData.append("calrange3",this.myForm.get('calrange3').value);
    formData.append("equipment",this.myForm.get('equipment').value);
    formData.append("difficulty",this.myForm.get('difficulty').value);
    formData.append("duration",this.myForm.get('duration').value);
    formData.append("bodypart",this.myForm.get('bodypart').value);
    formData.append("imagefile",this.myForm.get('imagefile').value);
    formData.append("videofile",this.myForm.get('videofile').value);

    this.es.addExercise(formData).subscribe(
        ()=>{this.dialogRef.close()},
        ()=>{alert("Something Went Wrong")}
    );
  }
  ngOnInit(): void {
  }

}
