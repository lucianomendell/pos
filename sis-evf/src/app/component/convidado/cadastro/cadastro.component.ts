import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';

import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  donationValue?: number;
  formCliente: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formCliente.value);
  }

  onChanged = function () {
    alert('changed!');
  };
}
