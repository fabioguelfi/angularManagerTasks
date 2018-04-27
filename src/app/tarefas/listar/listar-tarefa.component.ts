import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from './../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  public tarefas: Array<Tarefa>;

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  public listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  public remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm(`Deseja remover a tarefa ${tarefa.nome} ?`)) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }

  }

}
