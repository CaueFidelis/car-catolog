import { HeaderView, Title } from "./styles"

interface HeaderWithTextProps{
  title: string
}

export function HeaderWithText({title}: HeaderWithTextProps){
  return(
    <HeaderView>
      <Title>{title}</Title>
    </HeaderView>
  )
}