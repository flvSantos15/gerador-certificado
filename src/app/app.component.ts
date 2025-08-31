import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { CertificadoService } from './_services/certificado.service';

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
export class AppComponent implements OnInit {
  title = 'gerador-certificado';
  showNavbar: boolean = false;

  constructor(private certificadosService: CertificadoService) { }

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados')
    this.certificadosService.certificados = certificados ? JSON.parse(certificados) : []
  }
}
