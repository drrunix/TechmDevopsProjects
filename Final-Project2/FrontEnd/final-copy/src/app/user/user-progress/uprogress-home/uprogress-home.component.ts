import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-uprogress-home',
  templateUrl: './uprogress-home.component.html',
  styleUrls: ['./uprogress-home.component.css']
})
export class UprogressHomeComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  changeroute(url){
  this.router.navigate([url],{relativeTo:this.route.parent,});;
  }
}
