import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {

  constructor(private myapi:ApiService) { }

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
  this.myapi.addData(data).subscribe(
    (data)=>{
      alert("Data Added Successfully")
    }
  )
}
  ngOnInit(): void {
  }

}
