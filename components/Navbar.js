import Image from 'next/image'
import Logo from '../src/spot-zoing-logo.svg'
import Search from '../src/icon/search.svg'
import Menu from '../src/icon/menu.svg'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <div className='container nav--wrapper'>
                <Link href='/'>
                    <Image src={Logo} className="cursor"/>
                </Link>
                <ul className='nav--link'>
                    <li>útimas notícias</li>
                    <li>games</li>
                    <li>tecnologia</li>
                    <li>entretenimento</li>
                    <li>reviews</li>
                    <Link href='/posts/id'><li>dicas</li></Link>
                </ul>
                <ul className='nav--link'>
                    <li><Image src={Search} /></li>
                    <li><Image src={Menu} /></li>
                </ul>
            </div>
        </nav>
    )
}