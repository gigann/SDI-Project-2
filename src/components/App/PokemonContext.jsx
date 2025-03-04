import React from "react"

const PokemonContext = React.createContext({
  details: {},
  setDetails: () => {}
})

export default PokemonContext