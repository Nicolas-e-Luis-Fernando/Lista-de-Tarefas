import React from 'react'

const TaskItem = ({ tarefa, concluirTarefa, removerTarefa }) => {

  return (
<div className="task-item">
<h3>{tarefa.nome}</h3>
<p>Data: {tarefa.data}</p>
<p>{tarefa.descricao}</p>
<p>Prioridade: {tarefa.prioridade}</p>
<p>

        Status: {tarefa.concluida ? 'Concluída' : 'Pendente'}
</p>
<button onClick={() => concluirTarefa(tarefa.id)}>

        {tarefa.concluida ? 'Voltar para Pendente' : 'Concluir'}
</button>
<button onClick={() => removerTarefa(tarefa.id)}>

        Remover
</button>
</div>

  )

}

export default TaskItem
 