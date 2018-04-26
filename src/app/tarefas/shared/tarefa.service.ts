import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable()
export class TarefaService {

  constructor() { }

  /**
   * Metodo responsavel por listar todas as tarefas
   * do local storage e caso nao haja tarefas retornar
   * um array vazio, responsavel por pegar a string do
   * local storage e parsear para json novamente
   * @return Array<Tarefa>
   */
  public listarTodos(): Array<Tarefa> {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  /**
   * Metodo Responsavel por cadastrar uma nova tarefa
   * no local storage, recupera a lista atual de tarefas
   * e faz um push no final do array incluindo uma nova tarefa
   * parsear o objeto json retornado pelo metodo listarTodos()
   * para string e acrescenta no localstorage
   * @param tarefa Tarefa
   * @return void
   */
  public cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }



}
