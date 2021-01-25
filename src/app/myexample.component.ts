import { Component } from '@angular/core'
import { myexampleService } from './myexample.service';

@Component({
    selector: 'myexample',
    template: `
        <h2>MY {{ name }} Example</h2>
        <ul>
            <li *ngFor="let topics of agenda">
                {{ topics }}
            </li>
        </ul>
    `
})
export class MyExample {   
    name = "Angular";
    agenda;

    constructor(service: myexampleService){
        this.agenda = service.getAgenda();
    }
}
