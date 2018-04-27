import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ListarTarefaComponent } from './listar';
import { TarefaService } from './shared/tarefa.service';
import { CadastroTarefaComponent } from './cadastro';
import { EditarTarefaComponent } from './editar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    ListarTarefaComponent,
    CadastroTarefaComponent,
    EditarTarefaComponent
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
