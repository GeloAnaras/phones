import { Component, OnInit } from '@angular/core';
import {PhoneService} from "../services/phoneService";
import {Phone} from "../entities/Phone";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  model:string;
  battery:string;
  desc:string;

  constructor(private PhoneService:PhoneService, private Router:Router) { }

  ngOnInit() {
  }
  onAdd(){
      this.PhoneService.addPhone(new Phone(this.model,this.battery,this.desc));
      this.Router.navigateByUrl("list");
  }
}
