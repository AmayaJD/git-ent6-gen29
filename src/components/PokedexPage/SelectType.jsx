import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"

const SelectType = ({ setTypeSelected }) => {

    const url = 'https://pokeapi.co/api/v2/type'

    const [ types, getTypes] = useFetch(url)

    // const [first, setfirst] = useState(second)

    useEffect(() => {
        getTypes()
    }, [])

    const handleChange = e => {
        setTypeSelected(e.target.value)
    }    
  return (
    
        <select className="select_typ" onChange={handleChange}>
            <option value={'allPokemons'}>All pokemons</option>
            {
                types?.results.map(typeInfo => (
                    <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
                ))
            }
        </select>
  )
}

export default SelectType