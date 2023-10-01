import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import '../styles/pokePage.css'
import pokedex from "../assets/logo-pokedex.4364faa8.png"
import PokePage from "../components/PokedexPage/PokePage"

const PokedexPage = () => {

  const trainer = useSelector(store => store.trainer)

  // console.log(trainer)
  const inputSearch = useRef()
  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')
  const [firstItem, setFirstItem] = useState(1)
  const [lastItem, setLastItem] = useState(8)
  
  // console.log(typeSelected)

  const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=30}`
  const [ pokemons, getPokemons, getTypePokemon ] = useFetch(url)
  
  useEffect(() => {
    if (typeSelected === 'allPokemons') {
      getPokemons()
    } else {
      getTypePokemon(typeSelected)
    }
  }, [typeSelected])

  // console.log(pokemons)
  
  const handlesearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
    // debemos guaradar este informacion en un estado.
  }

  const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))

  const lastIndex = firstItem * lastItem
  const firstIndex = lastIndex - lastItem
  const currentPoke = pokeFiltered?.slice(firstIndex,lastIndex) 


  return (
  
    <div className="container_pokedexPage">
      <header className="header_pokedexPage">
        <div className="rectan_black1"></div>
        <div className="circle2"></div>
        <img className="img_pokedex2" src={pokedex} alt="image" />
      </header>
      <aside className="page__aside">
        <h1 className="page__title">
          <span className="sapn1">Welcome {trainer}</span>
            <span className="span2">, here you can find your favorite pokemon</span>
        </h1>
        <form className="page__form" onSubmit={handlesearch}>
          {/* Necesitamos capturar el valor de este input con useRef */}
          <div className="page__search">
            <input className="page__input"  ref={inputSearch} type="text" placeholder="Search pokemon by name"/>
            <button className="btn_page">Search</button>
          </div>
        <SelectType
          setTypeSelected={setTypeSelected}
        />
        </form>
      </aside>
        <PokePage
          firstItem={firstItem}
          setFirstItem={setFirstItem}
          quantity={pokeFiltered?.length}
        />
      <div className="container__card">
        {
         currentPoke?.map(poke => (
          <PokeCard 
            key={poke.url}
            url={poke.url}
          />
         )) 
        }
      </div>
      <PokePage
          firstItem={firstItem}
          setFirstItem={setFirstItem}
          quantity={pokeFiltered?.length}
        />
    </div>
  )
}

export default PokedexPage