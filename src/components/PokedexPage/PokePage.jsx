import React from 'react'

const PokePage = ({ firstItem, setFirstItem, quantity }) => {

    let pageNumbers = [];
    let limit = Math.ceil(quantity / 8)

    for (let i = 1; i <= limit; i++) {
        pageNumbers.push(i);
    }

    const sum = () => {
            setFirstItem(firstItem+1)
    }

    const rest = () => {
        setFirstItem(firstItem-1)
    }
  return (
    <div className='container__pagination'>
        <button className='btn__pagination previous' onClick={rest} disabled={firstItem === 1}>Previous</button>

        <div className='container__paginationActual'>
            {
            pageNumbers.map((page, i) => {
            return <button className={`btn__pagination actual ${page === firstItem ? 'is-current' :"" }`}key={i} onClick={ () => setFirstItem(page)} > {page} </button>
            })   
            }
        </div>

        <button className='btn__pagination next' onClick={sum} disabled={firstItem >= limit}>Next</button>
    </div>
  )
}

export default PokePage