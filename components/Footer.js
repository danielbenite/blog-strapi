import Image from 'next/image'
import Logo from '../src/spot-zoing-logo.svg'
import Facebook from '../src/facebook.svg'
import Youtube from '../src/youtube.svg'
import Twitter from '../src/twitter.svg'
import Arrow from '../src/arrow.svg'

export default function Footer() {
    return (
        <>
            <footer>
                <section id='footer-wrapper' className='container'>
                    <section className='footer--contact'>
                        <Image src={Logo} />
                        <p>contato@zoing.com.br</p>
                        <div className='footer--social'>
                            <Image src={Facebook} />
                            <Image src={Youtube} />
                            <Image src={Twitter} />
                        </div>
                    </section>
                    <section className='footer--links'>
                        <h3>institucional</h3>
                        <p><a>Quem somos</a></p>
                        <p><a>Contato</a></p>
                        <p><a>Faça parte do time</a></p>
                        <p><a>Política de Privacidade</a></p>
                    </section>
                    <section className='footer--links'>
                        <h3>categorias</h3>
                        <p><a>Últimas notícias</a></p>
                        <p><a>Tecnologia</a></p>
                        <p><a>Smart</a></p>
                        <p><a>Reviews</a></p>
                        <p><a>Dicas</a></p>
                    </section>
                    <section className='footer--links'>
                        <p><a>Games</a></p>
                        <p><a>PCs</a></p>
                        <p><a>Entretenimento</a></p>
                        <p><a>Segurança</a></p>
                    </section>
                    <section className='footer-newsletter'>
                        <h3>cadastre em nossa newsletter</h3>
                        <input placeholder='Digite seu email...'></input>
                        <p><a>Cadastrar</a></p>
                    </section>
                </section>
                <div className='footer--bottom container'>
                    <div className='footer--line'></div>
                    <p>©2022 Zoing Informática - Todos os Direitos Reservados</p>
                </div>
            </footer>
        </>
    )
}