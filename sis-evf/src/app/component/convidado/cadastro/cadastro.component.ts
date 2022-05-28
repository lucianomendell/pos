import { Convidado } from './../../../model/convidado';
import { Component, OnInit, Output } from '@angular/core';

import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  @Output() litstaConvidados: Convidado[] = []; //Componete Pai

  donationValue?: number;
  formCliente: FormGroup;
  convidados: Convidado[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formCliente = new FormGroup({});
  }

  ngOnInit(): void {
    this.formCliente = this.formBuilder.group({
      nome: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      faixaEtaria: ['', [Validators.required]],
      isAtivo: ['', [Validators.required]],
    });
  }

  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }

  onSelectChange(event: Event) {
    this.formCliente.patchValue({
      isAtivo: (event.target as HTMLInputElement).value,
    });
  }

  createFormCliente() {
    this.formCliente = new FormGroup({
      nome: new FormControl(null, [Validators.required]),
      telefone: new FormControl(null, [Validators.required]),
      endereco: new FormControl(null, [Validators.required]),
      faixaEtaria: new FormControl(null, [Validators.required]),
      isAtivo: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    let convidado = new Convidado();
    convidado.nome = this.formCliente.controls['nome'].value;
    convidado.telefone = this.formCliente.controls['telefone'].value;
    convidado.endereco = this.formCliente.controls['endereco'].value;
    convidado.faixaEtaria = this.formCliente.controls['faixaEtaria'].value;
    this.convidados?.push(convidado);

    if (
      !this.formCliente.get('nome')?.hasError('required') &&
      !this.formCliente.get('faixaEtaria')?.hasError('required')
    ) {
      this.litstaConvidados.push(convidado);
    }

    // this.router.navigate(['detalhes']);
  }
}
