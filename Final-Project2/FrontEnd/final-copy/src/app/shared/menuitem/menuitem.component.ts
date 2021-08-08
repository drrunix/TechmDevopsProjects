import { Component, OnInit,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit,OnChanges {
@Input() icontext:string;
@Input() iconname:String;
@Input() iconstyle:String;
mystyle:any={}
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log("iconstyle",this.iconstyle)
    if(this.iconstyle=='active')
       this.mystyle={backgroundColor:"#8B56A2"}
    else
       this.mystyle={}
  }

}
