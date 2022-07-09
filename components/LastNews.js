import Image from 'next/image'
import Newspaper from '../src/newspaper.svg'
import Arrow from '../src/arrow.svg'
import LastNewsCard from './LastNewsCard'

export default function LastNews(posts) {
    function renderLastNewsCard() {
        return posts.posts.posts.data.map(post => {
            return <LastNewsCard post={post} key={post.id} />
        })
    }
    return (
        <>
            <section className='lastnews--wrapper container'>
                <div className='lastnews--title'>
                    <Image src={Newspaper} />
                    <h1>últimas notícias</h1>
                    <div>
                        <p><a>ver todos <Image src={Arrow} /></a></p>
                    </div>
                </div>
                <div className="lastnews--card">
                    {renderLastNewsCard()}
                </div>
            </section>
        </>
    )
}