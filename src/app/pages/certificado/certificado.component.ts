import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import html2canvas from 'html2canvas';
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";
import { CertificadoService } from '../../_services/certificado.service';
import { ICertificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado',
  standalone: true,
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css'
})
export class CertificadoComponent implements OnInit {
  id: string | null = null
  certificado: ICertificado | undefined

  @ViewChild('certificadoContainer') certificadoContainer!: ElementRef

  constructor(
    private certificadoService: CertificadoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')
      this.certificado = this.certificadoService.certificados
        .find((item) => item.id === this.id)
    })
  }

  downloadCertificado() {
    if (this.certificado == undefined) {
      return
    }
    html2canvas(this.certificadoContainer.nativeElement, { scale: 2 }).then(
      canvas => {
        const link = document.createElement('a')
        link.href = canvas.toDataURL('image/png')
        link.download = 'certificado_' + this.certificado?.id.replaceAll(' ', '_') + '.png'
        link.click()
      }
    )
  }
}
