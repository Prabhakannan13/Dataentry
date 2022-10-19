import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {

  constructor() { }

  studentname=""
  clubname=""
  clubcolour=""
  moto=""

readValues=()=>{
  console.log("success")
}
  ngOnInit(): void {
  }

}
