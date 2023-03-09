import React from 'react'
import { StyledInput } from './styled/PageStyles'

const Input = ({width, placeholder, type, pattern, name, id}) => {
  return (
    <StyledInput 
      width={width} 
      placeholder = {placeholder} 
      type = {type}
      pattern = {pattern}
      id = {id}
      name = {name}
      required >

    </StyledInput>
  )
}

export default Input