import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(
    private http:HttpClient
  ){

  }

  ngOnInit(): void {
    this.getApiRes();
  }

  getApiRes(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe({
      next:(res)=>{
      },error:(err)=>{

      }
    })
  }

}
