import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';
import { CadastroTarefaComponent } from './cadastro';
import { EditarTarefaComponent } from './editar';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastroTarefaComponent
  },
  {
    path: 'tarefas/editar/:id',
    component: EditarTarefaComponent
  }
];
