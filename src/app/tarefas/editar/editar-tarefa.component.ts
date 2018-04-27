import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefa } from '..';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from './../shared/tarefa.service';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  public tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  public atualizar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }

}
