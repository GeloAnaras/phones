import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Phone} from "../../entities/Phone";
import {PhoneService} from "../../services/phoneService";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  phones:Array<Phone>;
  constructor(private aR:ActivatedRoute,private PhoneService:PhoneService) {
    PhoneService.getPhones().subscribe(phones=>this.phones=phones);
  }
  letphone:number = this.aR.snapshot.params["phone"];
  ngOnInit() {
  }

}
