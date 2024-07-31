import Formulario from '../../components/Form'
import { Link } from 'react-router-dom'
import Container from './style'

const Cadastro = () => (
  <Container>
    <Link to="/" className="voltar">
      voltar para tarefas
    </Link>
    <Formulario />
  </Container>
)

export default Cadastro
