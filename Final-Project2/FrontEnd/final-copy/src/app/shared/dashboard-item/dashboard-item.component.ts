import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css']
})
export class DashboardItemComponent implements OnInit {
@Input() imgurl:string;
@Input() title:string;
@Input() count:string;
  constructor() { }

  ngOnInit(): void {
      console.log(this.imgurl)
  }

}
