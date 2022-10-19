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
  let data={
  "studentname":this.studentname,
  "clubname":this.clubname,
  "clubcolour":this.clubcolour,
  "moto":this.moto
  }
  console.log(data)
}
  ngOnInit(): void {
  }

}
