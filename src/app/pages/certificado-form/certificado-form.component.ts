import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { ICertificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado-form',
  standalone: true,
  imports: [
    SecondaryButtonComponent,
    PrimaryButtonComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})
export class CertificadoFormComponent {
  certificado: ICertificado = {
    atividades: [],
    nome: ''
  }
  atividade: string = ''

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched
  }

  formValido(): boolean {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0
  }

  adicionarAtividade() {
    this.certificado.atividades.push(this.atividade)
    this.atividade = ''
  }

  removerAtividade(index: number) {
    this.certificado.atividades.splice(index, 1)
  }

  submit() {
    if (!this.formValido) {
      return
    }
    this.certificado
  }
}
