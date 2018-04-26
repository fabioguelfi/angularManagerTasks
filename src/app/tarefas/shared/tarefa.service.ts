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

  /**
   * Metodo responsavel por retornar tarefa por id
   * caso o id exista no localstorage
   * @param id number
   * @return Tarefa
   */
  public buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  /**
   * Metodo Responsavel por atualizar uma tarefa
   * no localstorage
   * @param tarefa Tarefa
   * @return void
   */
  public atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * Metodo responsavel por acessar a lista
   * de tarefas e fazer um filter buscando o
   * id passado no parametro da funcao e
   * retornar um array com todas tarefas exceto
   * a que o id for igual ao parametro passado
   * no metodo
   * @param id number
   * @return void
   */
  public remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * Metodo Responsavel por atualizar o status da tarefa
   * no localstorage e gravar novamente uma nova lista de
   * tarefas
   * @param id number
   * @return void
   */
  public alterarStatus(id: number): void {
    const tarefas = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
