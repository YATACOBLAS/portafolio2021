import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public projects:any=[];

  constructor(private http:HttpClient){

   }

  ngOnInit(){
    this.http.get('../../assets/data/projects.json').subscribe( 
      res=>{
      this.projects=res;
      })
    };

}
