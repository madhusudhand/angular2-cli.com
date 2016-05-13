import {Component} from '@angular/core';
import {UserGuideComponent} from "../../public/+user-guide/user-guide.component/user-guide.component";
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
    moduleId: __moduleName,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@Routes([
  { path: '/user-guide', component: UserGuideComponent }
])
export class AppComponent {

}
