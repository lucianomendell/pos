import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css'],
})
export class DetalhesComponent implements OnInit {
  nome?: string;
  endereco?: string;
  telefone?: string;
  categoria?: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let nomeParam = this.route.snapshot.params['nome'];

    this.nome = nomeParam;
  }
}
