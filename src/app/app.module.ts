import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './list/details/details.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { BadUrlComponent } from './bad-url/bad-url.component';
import {PhoneService} from "./services/phoneService";

const routes = [
  {path:"", component:ListComponent},
  {path:"add",component:AddComponent},
  {path:"list/details/:phone",component:DetailsComponent},
  {path:"list",component:ListComponent},
  {path:"**",component:BadUrlComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    DetailsComponent,
    BadUrlComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule {}
