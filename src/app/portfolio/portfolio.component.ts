import { HttpClient } from '@angular/common/http';
import { Component,  OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public projects:any=[];
   closeModal: string="";
  description: string="";

  constructor(private http:HttpClient,private modalService:NgbModal){
   }




  ngOnInit(){
    this.description=""
    this.http.get('../../assets/data/projects.json').subscribe( 
      res=>{
      this.projects=res;
      })
    };

    triggerModal(content:any,description:string) {
      this.description=description;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
        this.closeModal = `Closed with: ${res}`;
      }, (res) => {
        this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
      });
    }
 

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }


}
