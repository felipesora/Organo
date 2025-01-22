import './Rodape.css'

const Rodape = () => {
    return (
        <footer>
            <div className='icones'>
                <img src="../../../public/imagens/fb.png" alt="icone Facebook" />
                <img src="../../../public/imagens/tw.png" alt="icone Twitter" />
                <img src="../../../public/imagens/ig.png" alt="icone Instagram" />
            </div>
            <div>
                <img src="../../../public/imagens/logo.png" alt="icone Organo" />
            </div>
            <div className='texto'>
                <p>Desenvolvido por <a href="https://github.com/felipesora" target='_blank'>Felipe Sora</a></p>
            </div>
        </footer>
    )
}

export default Rodape