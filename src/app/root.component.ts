import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
    standalone: true,
    selector: 'root',
    imports: [RouterOutlet],
    template: `
        <router-outlet></router-outlet>
    `
})
export class RootComponent {
hideComponent: boolean = false;
messageParent: number =0;

}

