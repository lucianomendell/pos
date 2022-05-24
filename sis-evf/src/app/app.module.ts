import { CadastroComponent } from './component/convidado/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroducaoComponent } from './component/introducao/introducao.component';
import { ConvidadoComponent } from './component/convidado/convidado.component';
import { MenuComponent } from './component/menu/menu.component';
import { RodapeComponent } from './component/rodape/rodape.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    IntroducaoComponent,
    ConvidadoComponent,
    CadastroComponent,
    MenuComponent,
    RodapeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
