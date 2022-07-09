import Image from 'next/image'
import Logo from '../src/spot-zoing-logo.svg'
import Search from '../src/icon/search.svg'
import Menu from '../src/icon/menu.svg'

export default function Navbar() {
    return (
        <nav>
            <div className='container nav--wrapper'>
                <Image src={Logo} />
                <ul className='nav--link'>
                    <li>útimas notícias</li>
                    <li>games</li>
                    <li>tecnologia</li>
                    <li>entretenimento</li>
                    <li>reviews</li>
                    <li>dicas</li>
                </ul>
                <ul className='nav--link'>
                    <li><Image src={Search} /></li>
                    <li><Image src={Menu} /></li>
                </ul>
            </div>
        </nav>
    )
}