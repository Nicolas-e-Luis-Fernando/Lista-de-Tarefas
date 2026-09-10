import React from 'react'

import TaskItem from './TaskItem'

const TaskList = ({ tarefas, concluirTarefa, removerTarefa }) => {

  return (
<div className="task-list">

      {/* map percorre a lista de tarefas e cria um TaskItem para cada tarefa */}

      {tarefas.map((tarefa) => (
<TaskItem

          key={tarefa.id}

          tarefa={tarefa}

          concluirTarefa={concluirTarefa}

          removerTarefa={removerTarefa}

        />

      ))}
</div>

  )

}

export default TaskList
 


 