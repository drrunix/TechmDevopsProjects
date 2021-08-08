import { Component, OnInit, Input } from '@angular/core';
import { LogService } from 'src/app/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

interface menu{
  active:boolean;
  route:string
}
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  menugroup:menu[]=[{active:true,route:'ausers'},{active:false,route:'awp'}, {active:true,route:'uwp'},
  {active:false,route:'aex'},{active:false,route:'uex'},{active:false,route:'upro'},{active:false,route:'uprogress'}];

  username:String;
  @Input() subtitle:string;
  user:boolean=false;
  admin:boolean=false;
  
  constructor(private log:LogService,private router:Router,private route:ActivatedRoute) {
    
      
           if(this.log.usertype=="admin"){
            this.admin=true;
            this.router.navigate([this.menugroup[0].route], {relativeTo:this.route});
           }
           else{
            this.router.navigate([this.menugroup[2].route], {relativeTo:this.route});
            this.user=true;
           }

          
      
   }

  activereset(){
    for(let i=0;i<7;i++){
         this.menugroup[i].active=false;
    }
  }

  activate(index){
      this.activereset();
      this.menugroup[index].active=true;
      this.router.navigate([this.menugroup[index].route], {relativeTo:this.route});
  }
  ngOnInit(): void {
      this.username=this.log.username;
  }

  logout(){
      this.log.logout();
      window.location.reload();
  }
}
