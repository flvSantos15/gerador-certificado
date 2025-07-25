import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { PrimaryButtonComponent } from './_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './_components/secondary-button/secondary-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PrimaryButtonComponent, SecondaryButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gerador-certificado';
  showNavbar: boolean = false;
}
