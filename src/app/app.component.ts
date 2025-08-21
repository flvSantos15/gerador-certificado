import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { NavbarComponent } from './_components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    BaseUiComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gerador-certificado';
  showNavbar: boolean = false;
}
