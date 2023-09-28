import React from 'react'

const PokePage = ({ firstItem, setFirstItem, quantity }) => {

    let pageNumbers = [];
    let limit = Math.ceil(quantity / 8)

    for (let i = 1; i <= limit; i++) {
        pageNumbers.push(i);
    }

    const sum = () => {
        if (pageNumbers <= limit){
            setFirstItem(firstItem+1)
        }else{
            setFirstItem(pageNumbers)
        }
    }

    const rest = () => {
        setFirstItem(firstItem-1)
    }
  return (
    <div className='container__pagination'>
        <button className='btn__pagination' onClick={rest}>Previous</button>

        <div className='container__paginationActual'>
            {
            pageNumbers.map((page, i) => {
            return <button className='btn__actual' key={i} onClick={ () => setFirstItem(page)} > {page} </button>
            })   
            }
        </div>

        <button className='btn__pagination' onClick={sum}>Next</button>
    </div>
  )
}

export default PokePage