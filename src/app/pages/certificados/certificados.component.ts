import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { ItemCertificadoComponent } from '../../_components/item-certificado/item-certificado.component';

@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [SecondaryButtonComponent, ItemCertificadoComponent],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent {

}
