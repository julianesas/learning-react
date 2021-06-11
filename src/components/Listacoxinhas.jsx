import coxinhas from "./../service/dados"

function Listacoxinhas() {
    return(
        <div>
            {coxinhas.map(coxinha =>{
                return(
                    <ul>
                        <li>{coxinha.id}</li>
                        <p>{coxinha.nome}</p>
                        <p>{coxinha.descricao}</p>
                        <img src={coxinha.imagem} alt={coxinha.nome}/>
                    </ul>
                )
            })}
        </div>
    )
}

export default Listacoxinhas