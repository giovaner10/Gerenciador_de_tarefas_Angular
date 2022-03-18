import { inject, TestBed } from '@angular/core/testing';

import { TarefaService } from './tarefa.service';

describe('TarefaService', () => {
  let service: TarefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarefaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
});

it('Deve garantir a listagem do vetor',
inject([TarefaService], (service: TarefaService) =>{
  let tarefa = service.listarTodos()
  expect(tarefa).toEqual(service.listarTodos())

}))

