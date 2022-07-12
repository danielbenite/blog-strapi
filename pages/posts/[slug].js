import Tag from "../../components/Tag";
import Image from 'next/image'
import Stranger from '../../src/posts/stranger.jpg'
import Ads from '../../src/ads/stories.png'
import Newspaper from '../../src/newspaper.svg'
import Arrow from '../../src/arrow.svg'

export default function Post() {
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
                            <span>entretenimento</span>
                            <h1>Stranger Things 4: Netflix revela prévia do volume2 da quarta temporada</h1>
                            <p>Stranger Things 4: Netflix revela prévia do volume 2 da quarta temporada</p>
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus eu turpis massa nulla diam ut. Nec, dictum velit nunc,
                                    condimentum netus morbi facilisis nunc. Augue tristique sagittis tincidunt mattis non proin. Tortor elementum adipiscing sit
                                    hendrerit donec ornare aliquam odio varius. Dignissim donec dui egestas dictum eu purus a. Id vitae massa elementum fringilla
                                    netus ipsum risus tristique faucibus. Turpis arcu faucibus nec in vestibulum. Risus mus diam duis velit lectus.
                                    Suscipit commodo, egestas et pharetra nunc tristique augue convallis. Vitae ullamcorper massa aenean auctor faucibus.
                                    Libero lorem blandit arcu eu proin. Id morbi massa phasellus iaculis quam. Malesuada sed volutpat maecenas feugiat.
                                    Luctus adipiscing diam adipiscing odio tortor pulvinar. Dignissim lectus justo, diam fringilla vel a et, non dolor.
                                    Imperdiet consequat auctor lacus, mollis nec feugiat vitae.</p>
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