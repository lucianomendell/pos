import { Observable } from 'rxjs';
import { Convidado } from './../../../model/convidado';
import { ConvidadoServiceService } from 'src/app/services/convidado-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-detalhes-convidado',
  templateUrl: './detalhes-convidado.component.html',
  styleUrls: ['./detalhes-convidado.component.css'],
})
export class DetalhesConvidadoComponent implements OnInit {
  convidados!: Convidado[];
  id!: any;
  selectFaixaEtaria: string[] = [
    'Criança',
    'Adolescente',
    'Jovem',
    'Adulto',
    'Idoso',
  ];

  selectPosicao: any;
  selectedValue = 'Jovem';

  formConvidado = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl({ value: '', disabled: true }),
    telefone: new FormControl({ value: '', disabled: true }),
    endereco: new FormControl({ value: '', disabled: true }),
    email: new FormControl({ value: '', disabled: true }),
    faixaEtaria: new FormControl({ value: '', disabled: true }),
  });

  constructor(
    private router: ActivatedRoute,
    private convidadoService: ConvidadoServiceService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getById(this.router.snapshot.params['id']);
  }
  getById(id: number) {
    this.convidadoService.getById(id).then((dados) => {
      this.formConvidado.patchValue({
        nome: dados?.nome,
        endereco: dados?.endereco,
        email: dados?.email,
        telefone: dados?.telefone,
        faixaEtaria: dados?.faixaEtaria,
      });
    });
  }
  get f() {
    return this.formConvidado.controls;
  }
  voltarListar() {
    this.route.navigate(['convidados']);
  }
}
