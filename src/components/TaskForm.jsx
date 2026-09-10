import React, { useState } from 'react'

const TaskForm = ({ adicionarTarefa }) => {

  // Hook para armazenar os dados digitados no formulário

  const [nome, setNome] = useState('')

  const [data, setData] = useState('')

  const [descricao, setDescricao] = useState('')

  const [prioridade, setPrioridade] = useState('Média')

  const cadastrarTarefa = (event) => {

    event.preventDefault()

    const novaTarefa = {

      id: Date.now(),

      nome: nome,

      data: data,

      descricao: descricao,

      prioridade: prioridade,

      concluida: false

    }

    adicionarTarefa(novaTarefa)

    setNome('')

    setData('')

    setDescricao('')

    setPrioridade('Média')

  }

  return (
<form onSubmit={cadastrarTarefa}>
<h2>Nova Tarefa</h2>
<input

        type="text"

        placeholder="Nome da tarefa"

        value={nome}

        onChange={(event) => setNome(event.target.value)}

        required

      />
<input

        type="date"

        value={data}

        onChange={(event) => setData(event.target.value)}

        required

      />
<textarea

        placeholder="Descrição da tarefa"

        value={descricao}

        onChange={(event) => setDescricao(event.target.value)}

        required

      />
<select

        value={prioridade}

        onChange={(event) => setPrioridade(event.target.value)}
>
<option value="Baixa">Baixa</option>
<option value="Média">Média</option>
<option value="Alta">Alta</option>
</select>
<button type="submit">Adicionar Tarefa</button>
</form>

  )

}
 


export default TeskForm
