import { Component, OnInit } from '@angular/core';
import { profile } from 'src/app/model/profile';
import { ProfileService } from 'src/app/services/profile.service';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-upro-home',
  templateUrl: './upro-home.component.html',
  styleUrls: ['./upro-home.component.css']
})
export class UproHomeComponent implements OnInit {
profile:profile;
  constructor(public dialog: MatDialog,private ps:ProfileService) { }

  ngOnInit(): void {
      this.ps.getProfile().subscribe(
        (data:profile)=>this.profile=data,
          ()=>{}
      )
  }

  loadDialog(type){
    
    const dialogRef = this.dialog.open(UpdateProfileComponent, {
      width: '600px',
      height: '320px',
      data: {itemtype:type}
    });

    dialogRef.afterClosed().subscribe(()=>this.ngOnInit());

}

}
