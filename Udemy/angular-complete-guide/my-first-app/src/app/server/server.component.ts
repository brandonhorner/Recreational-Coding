import { Component } from "@angular/core";
 
 
//a component is a typescript class, enhanced by decorators
@Component({
    selector: 'app-server',  //selector is the html tag you will refer to this component in other sections of code
    templateUrl: './server.component.html'  //we need a template, we will create this html file to accompany the component
}) //here we pass meta data that tells angular what to do with this class
export class ServerComponent {
}
