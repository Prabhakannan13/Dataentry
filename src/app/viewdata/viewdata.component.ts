import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.viewdata=data
      }
    )
   }



deleteData=(id:any)=>{
  let data={
    "id":id
  }
  this.myapi.deleteData(data).subscribe(
    (resp)=>{
      alert("Deleted")
    }
  )
  this.fetchData()
}
 viewdata:any=[]
  ngOnInit(): void {
  }

}
