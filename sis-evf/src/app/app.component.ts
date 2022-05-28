import { CadastroComponent } from './component/convidado/cadastro/cadastro.component';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChange,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Sistema Controle Eventos Familiar';
  @ViewChild(CadastroComponent) teste?: CadastroComponent;

  ngOnInit(): void {
    console.log('*** ----*################## ' + this.teste);
  }
}
