import { Component, OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
// import { UserGuideComponent } from "../+user-guide/user-guide.component/user-guide.component";

@Component({
  moduleId: __moduleName,
  selector: 'side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['side-nav.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
// @Routes([
//   { path: '/user-guide', component: UserGuideComponent }
// ])
export class SideNavComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
