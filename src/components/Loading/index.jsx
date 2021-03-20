import { Container } from "./styles"
import { MdAutorenew } from "react-icons/md"

export function Loading() {
  return (
    <Container>
      <MdAutorenew
        size={24}
        className="icon-loading"
      />
      <div>
        Carregando...
      </div>
    </Container>
  )
}