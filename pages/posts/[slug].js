import Tag from "../../components/Tag";
import Image from 'next/image'
import Stranger from '../../src/posts/stranger.jpg'
import Ads from '../../src/ads/stories.png'
import Newspaper from '../../src/newspaper.svg'
import Arrow from '../../src/arrow.svg'
import axios from 'axios'

export default function Post(posts) {
    console.log(posts)
    return (
        <>
            <section className="post--wrapper container">
                <section>
                    <div className="post--ad_one"></div>
                </section>

                <div><span></span></div>

                <section>
                    <article>

                        <div>
                            <img />
                        </div>

                        <div className="post--article_title">
                            <div className="post--article_cover">
                                <Image src={Stranger} layout='fill' objectFit="cover" className="rounded--img" />
                            </div>
                            <span>{posts.posts.data[0].attributes.tag}</span>
                            <h1>{posts.posts.data[0].attributes.title}</h1>
                            <p>{posts.posts.data[0].attributes.description}</p>
                            <div className="post-article_info">
                                <div className='post--article_avatar'>
                                    <Image src={Stranger} width={60} height={60} objectFit="cover" style={{ borderRadius: '100%' }} />
                                    <p>Publicado por <span>Christian Bale</span></p>
                                </div>
                                <span>{' | '}9 de junho de 2022 às 14:27</span>
                                <span>{' | '}Atualizado há 1 hora</span>
                            </div>
                        </div>

                        <div className="post--article_grid">
                            <div className="post--content">
                                <p>{posts.posts.data[0].attributes.content}</p>
                            </div>
                            <div className="sidebar">
                                <div className="post--ads_img">
                                    <Image src={Ads} layout='fill' objectFit="cover" />
                                </div>

                                <div>
                                    <div className='post--hot_title'>
                                        <Image src={Newspaper} />
                                        <h1>últimas notícias</h1>
                                        <div>
                                            <p><a>ver todos <Image src={Arrow} /></a></p>
                                        </div>
                                    </div>
                                    <div className='post--hot_card'>
                                        <div className='post--hot_cover'>
                                            <Image src={Stranger} layout='fill' objectFit="cover" className="rounded--img" />
                                        </div>
                                        <div className="post--hot_info">
                                            <span>entretenimento</span>
                                            <h2>Netflix pode comprar a Roku por US$ 13 bilhões, diz vazamento</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div></div>

                    </article>
                </section>
            </section>
        </>
    )
}

export async function getServerSideProps() {
    const database = await axios.get('https://mysterious-river-92048.herokuapp.com/api/posts?populate=*');
    
    return {
        props: {
            posts: database.data
        }
    }
}