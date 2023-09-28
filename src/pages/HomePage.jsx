import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import pokedex from "../assets/logo-pokedex.4364faa8.png"
import '../styles/homePage.css'

const HomePage = () => {

  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  // para compobar que esta capturando el valor del input
  // y seteando en el estado global.
  // const trainer = useSelector(store => store.trainer)
  // console.log(trainer)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim())) 
    navigate('/pokedex')
  }

  return (
    <article className="home">
        <header className="home__header">
          <img className="img_pokedex" src={pokedex} alt="image pokedex letters"></img>
          <h1 className="home__title">Hi, trainer!</h1>
          <p className="home__description">To start, give me your name</p>
        </header>
        <form className="home__form" onSubmit={handleSubmit}>
            <input className="home__input" ref={inputTrainer} type="text" placeholder="Enter your trainer name."/>
            <button className="btn__home">Let Start!</button>
        </form>
        <div className="rectan_red">
            <div className="rectan_black"></div>
            <div className="circle"></div>
          </div>
    </article>
  )
}

export default HomePage