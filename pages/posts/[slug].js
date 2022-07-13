import Image from 'next/image'
import Stranger from '../../src/posts/stranger.jpg'
import Ads from '../../src/ads/stories.png'
import Newspaper from '../../src/newspaper.svg'
import Arrow from '../../src/arrow.svg'
import axios from 'axios'
import Tag from '../../components/Tag'
import { DateTime } from "luxon";

export default function Post({ post }) {
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
                                <Image src={post.data[0].attributes.cover.data.attributes.url} layout='fill' objectFit="cover" className="rounded--img" />
                            </div>
                            <Tag key={post} category={post.data[0].attributes.tag} />
                            <h1>{post.data[0].attributes.title}</h1>
                            <p>{post.data[0].attributes.description}</p>
                            <div className="post-article_info">
                                <div className='post--article_avatar'>
                                    <Image src={Stranger} width={60} height={60} objectFit="cover" style={{ borderRadius: '100%' }} />
                                    <p>Publicado por <span>{post.data[0].attributes.author.data.attributes.name}</span></p>
                                </div>
                                <span>•</span>
                                <span>{DateTime.now(post.data[0].attributes.publishedAt).toLocaleString(DateTime.DATE_MED)} às</span>
                            </div>
                        </div>

                        <div className="post--article_grid">
                            <div className="post--content">
                                <p>{post.data[0].attributes.content}</p>
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

export async function getStaticPaths() {
    const res = await fetch('https://mysterious-river-92048.herokuapp.com/api/posts?populate=*').then(res => res.json());

    const paths = res.data.map((post) => ({
        params: { slug: post.attributes.slug },
    }));

    // console.log(paths)

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {

    const posts = await axios.get(`https://mysterious-river-92048.herokuapp.com/api/posts?[filters][slug][$eq]=${slug}&populate=*`, {
        populate: "*",
    });

    //console.log(posts)

    return {
        props: {
            post: posts.data,
        },
        revalidate: 1,
    };
}