import React from 'react'

const FilterButtons = ({ filtro, setFiltro }) => {
  return (
    <div className="filter-buttons">

      <button onClick={() => setFiltro('todas')}>
        Todas
      </button>

      <button onClick={() => setFiltro('pendentes')}>
        Pendentes
      </button>

      <button onClick={() => setFiltro('concluidas')}>
        Concluídas
      </button>

    </div>
  )
}

export default FilterButtons