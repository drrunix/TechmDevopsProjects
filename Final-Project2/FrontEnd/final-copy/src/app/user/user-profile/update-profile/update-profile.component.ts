import { Component, OnInit, Inject } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/scroll/scroll-strategy';
import { ProfileService } from 'src/app/services/profile.service';
import { LogService } from 'src/app/services/login.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
password:string="";
cpassword:string="";
address:string="";
age:number;
weight:number;
inch:number;
feet:number;
error:string="";

  constructor(  public dialogRef: MatDialogRef<UpdateProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private ps:ProfileService,private log:LogService) { }

  ngOnInit(): void {
  }
 
  updateRecord(){
      let item;
      let obj;
      this.error=""
       
       if(this.data.itemtype=="address"){ 
         
          if(this.address.length<10)
             this.error="Address should be atleast 10 charectar long"
          else{
             item="address";
             obj={"address":this.address}
          }
       }
       else if(this.data.itemtype=="password"){
        if( this.password==undefined || this.cpassword==undefined || (this.password!=this.cpassword) || this.password.length<=6)
           this.error="Passwords should match and atleast 6 char long"
           else{
           item="password";
           obj={"password":this.password}
           }
       }

       if(this.data.itemtype=="weight"){
        if(this.weight==undefined||isNaN(this.weight)||this.weight<100||this.weight>=300)
           this.error="Invalid Weight" 
        else{
           item="weight";
           obj={"weight":this.weight}
        }
     }

     if(this.data.itemtype=="age"){
      if(this.age==undefined||isNaN(this.age)||this.age<10||this.weight>=90)
         this.error="Invalid Age"
      else{
         item="age";
         obj={"age":this.age}
      }
   }
 
   if(this.data.itemtype=="height"){
     
    if((this.feet==undefined||isNaN(this.feet)||this.feet<=2||this.feet>=8) ||
    (this.inch==undefined||isNaN(this.inch)||this.inch<=0||this.feet>=11))
       this.error="Invalid Height"
    else{
       item="height";
       obj={"height":this.feet + ' fts ' + this.inch+" inches"  }
    }
 
 }
      console.log(item,obj);
    if(this.error=="")
      this.ps.updateItem(item,obj).subscribe(
        ()=>{
            if(this.data.itemtype=="password")
            {
              this.log.logout();
              window.location.reload();
            }
            alert("Updated");
            this.dialogRef.close()
        },
        ()=>{
           alert("Some issue in updating")
        }
      )
  }

  
}
