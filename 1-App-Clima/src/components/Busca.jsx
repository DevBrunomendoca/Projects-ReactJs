import { BotaoBuscar, BuscaCidade, BuscaContainer } from "./BuscaStyles.js"

const Busca = ({cidade, setCidade, buscarClima}) => {
  return (
    <BuscaContainer>
        <BuscaCidade 
          type="text" 
          value={cidade} 
          onChange={(e) => setCidade(e.target.value)}  
          placeholder="Digite o nome de uma cidade..."
        />
        <BotaoBuscar  onClick={buscarClima}>Buscar</BotaoBuscar>
    </BuscaContainer>
  )
}

export default Busca