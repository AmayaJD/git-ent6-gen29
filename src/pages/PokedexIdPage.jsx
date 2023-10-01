import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import '../styles/pokeIdPage.css'
import pokedex from "../assets/logo-pokedex.4364faa8.png"


const PokedexIdPage = () => {

    const { id } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const [ pokemon, getPokemon ] = useFetch(url)

    useEffect(() => {
      getPokemon()
    }, [id])
    
    // console.log(pokemon)

    const firstType = pokemon?.types[0].type.name
    const types = pokemon?.types.map((type) => type.type.name);
    // console.log(types)

  
  return (
    <div className="container_id">
      <header className="header_pokedexPage">
        <div className="rectan_black1"></div>
        <div className="circle2"></div>
        <img className="img_pokedex2" src={pokedex} alt="image" />
      </header>
      <Link className="btn_back" to='/pokedex'> <i className='bx bx-arrow-back'></i> </Link>
      <article className="container___pokeStats">
        <header className={`header__pokeStats ${firstType}-gradient`}>
          <img className="imgId" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <div className="container__abilitie">
            <section>
                <div className="pokeId">#{pokemon?.id}</div>
                <h1 className="title__namePoke">{pokemon?.name}</h1>
                <hr className="hr__id"/>
                <ul className="poke__caracter">
                  <li className="poke__caracterItem">
                    <span className="poke__caracterItemClave">Weight</span> 
                    <span className="poke__caracterItemValue">{pokemon?.weight} Lbs</span>
                  </li>
                  <li className="poke__caracterItem">
                    <span className="poke__caracterItemClave">Height</span> 
                    <span className="poke__caracterItemValue">{pokemon?.height} Pulgs</span>
                  </li>
                </ul>
                  <ul className="poke__caracter2">
            
                    <li className="poke__type"><span>Type </span> <div className="type__value">{ pokemon?.types.map(typeInfo => (
                        <div className='type__value' key={typeInfo.type.url}> <div className={`type__valueItem ${firstType}-gradient`}>{typeInfo.type.name}</div></div>
                        ))
                      }</div>
                    </li>
                    <li className="poke__abilitie"><span>Abilitie </span> <div className="abilitie__value">{ pokemon?.abilities.map(AbilitieInfo => (
                      <div key={AbilitieInfo.ability.url}><div className="abilitie__valueItem">{AbilitieInfo.ability.name}</div></div>
                      ))
                      }</div>
                    </li>
              </ul>
            </section>
          <h2 className="title__stats">Stats</h2>
          <hr  className="hr__stats"/>
              <ul className="stats_pokeId">

                <li className="stats__sss">
                  <span>HP</span>
                  <span>{pokemon?.stats[0].base_stat}/ 250</span>
                </li>
                <li className="stats__sss">
                    <span className="class_value" style={{'--bar': `${pokemon?.stats[0].base_stat}%`}}>{ pokemon?.stats[0].base_stat}</span>    
                 </li>
                 
                <li className="stats__sss">
                  <span>ATTACK</span>
                  <span>{pokemon?.stats[1].base_stat}/ 250</span>
                </li>
                <li className="stats__sss">
                  <span className="class_value" style={{'--bar': `${pokemon?.stats[1].base_stat}%`}}>{ pokemon?.stats[1].base_stat}</span>
                </li>
                
                <li className="stats__sss">
                  <span>DEFENSE</span>
                  <span>{pokemon?.stats[2].base_stat}/ 250</span>
                </li>
                <li className="stats__sss">
                  <span className="class_value" style={{'--bar': `${pokemon?.stats[2].base_stat}%`}}>{ pokemon?.stats[2].base_stat}</span>
                </li>

                <li className="stats__sss">
                  <span>SPECIAL-ATTACK</span>
                  <span>{pokemon?.stats[3].base_stat}/ 250</span>
                </li>
                <li className="stats__sss">
                  <span className="class_value" style={{'--bar': `${pokemon?.stats[3].base_stat}%`}}>{ pokemon?.stats[3].base_stat}</span>
                </li>

                <li className="stats__sss">
                  <span>SPECIAL-DEFENSE</span>
                  <span>{pokemon?.stats[4].base_stat}/ 250</span>
                </li>
                <li className="stats__sss">
                  <span className="class_value" style={{'--bar': `${pokemon?.stats[4].base_stat}%`}}>{ pokemon?.stats[4].base_stat}</span>
                </li>

                <li className="stats__sss">
                  <span>SPEED</span>
                  <span>{pokemon?.stats[5].base_stat}/ 250</span>
                </li>
                <li className="stats__sss">
                  <span className="class_value" style={{'--bar': `${pokemon?.stats[5].base_stat}%`}}>{ pokemon?.stats[5].base_stat}</span>
                </li>
              </ul>
        </div>
      </article>
      <article className="movements_pokeId">
          <h2 className="title__moves">Movements</h2>
          <hr className="hr__moves"/>
          <div className="container__moves">
            {
              pokemon?.moves.map( moveValue =>
                <span key={moveValue.url} className="moves__value"> {moveValue.move.name} </span>
              )
            }
          </div>
      </article>
    </div>
  )
}

export default PokedexIdPage