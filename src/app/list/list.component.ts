import {Component, Injectable, OnInit} from '@angular/core';
import {PhoneService} from "../services/phoneService";
import {Phone} from "../entities/Phone";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public phonesArray:Array<Phone>;
  constructor(private PhoneService:PhoneService) {
      PhoneService.getPhones().subscribe(phones=>this.phonesArray=phones);
  }

  ngOnInit() {
  }

}
