import {Injectable} from "@angular/core";
import {Phone} from "../entities/Phone";
import {Observable} from "rxjs/internal/Observable";
import {of} from "rxjs/internal/observable/of";

@Injectable()
export class PhoneService{
    private phonesArray:Array<Phone> = [
      new Phone("nokia","100mpa","cool"),
      new Phone("lg","100mcha","not cool")
    ];
    getPhones():Observable<Array<Phone>>{
      return of(this.phonesArray);
    }
    addPhone(phone:Phone){
      this.phonesArray.push(phone);
    }
}
