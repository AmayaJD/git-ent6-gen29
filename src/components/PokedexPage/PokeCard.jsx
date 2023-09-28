import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import '../../styles/pokecard.css'

const PokeCard = ({ url }) => {

  const [ pokemon, getPokemon ] = useFetch(url)

  const navigate = useNavigate()

  useEffect(() => {
    getPokemon()
  }, [])

  console.log(pokemon)

  const handleNavigate = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }
  
  return (
    <article className="container_pokeCard" onClick={handleNavigate}>
      <header className="header_poke">
        <img className="img_pokemonCard" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className="section_pokeCard">
        <h3 className="name_pokemon">{pokemon?.name}</h3>
        <ul className="type_poke">
          <span className="type__container">
            {
          
              pokemon?.types.map(typeInfo => (
                <span key={typeInfo.type.url}>{typeInfo.type.name}</span>
              ))
            }
          </span>
           <span>Type</span>
        </ul>
        <hr className="hr_card"/>
        <ul className="stats_poke">
          {
            pokemon?.stats.map(statInfo => (
              <li className="stats__item" key={statInfo.stat.url}>
                <span className="stats__">{statInfo.stat.name}: </span>
                <span className="stats__value">{statInfo.base_stat}</span>
              </li>  
            )) 
          }
        </ul>
      </section>
    </article>
  )
}

export default PokeCard