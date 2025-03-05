import React from "react"

const PokemonTypesContext = React.createContext({
  typeList: {},
  setTypeList: () => {}
})

export default PokemonTypesContext