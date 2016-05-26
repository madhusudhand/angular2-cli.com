import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { SideNavComponent } from "../../public/side-nav.component";
import { ContainerComponent } from "../../public/container.component";
import { UserGuideComponent } from "../../public/+user-guide/user-guide.component";

@Component({
    moduleId: __moduleName,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [ROUTER_DIRECTIVES, SideNavComponent, ContainerComponent],
    providers: [ROUTER_PROVIDERS]
})
@Routes([
  { path: '/user-guide', component: UserGuideComponent }
])
export class AppComponent {

}
