import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { v4 as uuidV4 } from 'uuid';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { CertificadoService } from '../../_services/certificado.service';
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
    id: '',
    atividades: [],
    nome: '',
    dataEmissao: ''
  }
  atividade: string = ''
  @ViewChild('form') form!: NgForm

  constructor(private certificadoService: CertificadoService) { }

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched
  }

  formValido(): boolean {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0
  }

  adicionarAtividade() {
    if (this.atividade.length === 0) {
      return
    }
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
    this.certificado.id = uuidV4()
    this.certificado.dataEmissao = this.pegarDataAtual()

    this.certificadoService.adicionarCertificados(this.certificado)

    this.certificado = this.pegarEstadoInicialCertificado()
    this.form.resetForm()
  }

  pegarDataAtual() {
    const dataAtual = new Date()
    const dia = String(dataAtual.getDate()).padStart(2, '0')
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0')
    const ano = dataAtual.getFullYear()

    const dataFormatada = `${dia}/${mes}/${ano}`
    return dataFormatada
  }

  pegarEstadoInicialCertificado(): ICertificado {
    return {
      id: '',
      atividades: [],
      nome: '',
      dataEmissao: ''
    }
  }
}
