import { Convidado } from './../../../model/convidado';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ConvidadoServiceService } from 'src/app/services/convidado-service.service';

import { data } from 'jquery';

@Component({
  selector: 'app-convidado-form',
  templateUrl: './convidado-form.component.html',
  styleUrls: ['./convidado-form.component.css'],
})
export class ConvidadoFormComponent implements OnInit {
  convidado!: Convidado;
  convidados: Convidado[];

  formConvidado = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl('', [Validators.required, Validators.minLength(5)]),
    telefone: new FormControl('', [
      Validators.required,
      Validators.minLength(14),
    ]),
    endereco: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    ]),
    faixaEtaria: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private convidadoService: ConvidadoServiceService
  ) {
    this.convidados = [];
  }

  ngOnInit(): void {
    this.getAll();
  }

  get f() {
    return this.formConvidado.controls;
  }

  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }

  onSelectChange(event: Event) {
    this.formConvidado.patchValue({
      ativo: (event.target as HTMLInputElement).value,
    });
  }

  submit() {
    if (!this.formConvidado.get('nome')?.hasError('required')) {
      let convidado = new Convidado();

      convidado.nome = this.formConvidado.value.nome;
      convidado.endereco = this.formConvidado.value.endereco;
      convidado.telefone = this.formConvidado.value.telefone;
      convidado.email = this.formConvidado.value.email;
      convidado.faixaEtaria = this.formConvidado.value.faixaEtaria;

      this.convidadoService.save(convidado).subscribe(
        (res) => {
          M.toast({ html: 'Registro Salvo com Sucesso!' });
        },
        (err) => {
          M.toast({ html: 'Erro ao Gravar' });
        }
      );

      this.router.navigate(['convidados']);
    }
  }

  getAll(): void {
    this.convidadoService.getAll().subscribe(
      (res: Convidado[]) => {
        if (!res || res.length == 0) {
          return;
        }
        this.convidados = res;
      },
      (error) => {
        alert(error.message);
      }
    );
  }
}
