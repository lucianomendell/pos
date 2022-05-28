import { Convidado } from './../../../model/convidado';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-convidado',
  templateUrl: './listar-convidado.component.html',
  styleUrls: ['./listar-convidado.component.css'],
})
export class ListarConvidadoComponent implements OnInit {
  @Input() litstaConvidados: Convidado[] = []; // Atributo filho

  public clienteForm: any;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  onClickItem(t: any) {
    this.router.navigate(['detalhes', t?.nome]);
  }
}
