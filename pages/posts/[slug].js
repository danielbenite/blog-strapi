import Image from 'next/image'
import Stranger from '../../src/posts/stranger.jpg'
import Ads from '../../src/ads/stories.png'
import Newspaper from '../../src/newspaper.svg'
import Arrow from '../../src/arrow.svg'
import axios from 'axios'

export default function Post({ posts }) {
    console.log(posts)
    return (
        // {<>
        //     <section className="post--wrapper container">
        //         <section>
        //             <div className="post--ad_one"></div>
        //         </section>

        //         <div><span></span></div>

        //         <section>
        //             <article>

        //                 <div>
        //                     <img />
        //                 </div>

        //                 <div className="post--article_title">
        //                     <div className="post--article_cover">
        //                         <Image src={Stranger} layout='fill' objectFit="cover" className="rounded--img" />
        //                     </div>
        //                     <span>{posts.posts.data[0].attributes.tag}</span>
        //                     <h1>'CORINGA 2': TODD PHILLIPS CONFIRMA DESENVOLVIMENTO E TÍTULO DA CONTINUAÇÃO</h1>
        //                     <p>'Joker: Folie à Deux' é o atual nome da sequência. Diretor publicou foto de Joaquin Phoenix lendo roteiro.</p>
        //                     <div className="post-article_info">
        //                         <div className='post--article_avatar'>
        //                             <Image src={Stranger} width={60} height={60} objectFit="cover" style={{ borderRadius: '100%' }} />
        //                             <p>Publicado por <span>Christian Bale</span></p>
        //                         </div>
        //                         <span>{' | '}9 de junho de 2022 às 14:27</span>
        //                         <span>{' | '}Atualizado há 1 hora</span>
        //                     </div>
        //                 </div>

        //                 <div className="post--article_grid">
        //                     <div className="post--content">
        //                         <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vel nunc nec purus tempus consectetur. In nec est nec ligula suscipit semper. Donec nec tellus auctor, lobortis tellus eget, efficitur tellus. Nulla at tempus ante. Vivamus sed faucibus nulla, quis vulputate lacus. Aliquam vel velit ut mi euismod congue. Aenean sed felis lobortis, ornare libero vitae, porttitor purus. Mauris et rutrum tortor. Etiam vitae sapien placerat, iaculis massa ac, ullamcorper nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ut pellentesque mauris. Nullam sodales tortor efficitur, dictum magna vel, aliquam tellus. Proin nec lacus nulla. Cras fermentum arcu ipsum, vel scelerisque nisi blandit id. Nulla enim eros, dignissim vel faucibus eget, porta eu ipsum. Phasellus a risus et eros blandit sollicitudin sed vulputate sapien. Cras aliquam quam massa, at facilisis mauris auctor non. Duis scelerisque rutrum nisi, eu pretium tortor vehicula ut. Integer a laoreet nisi. Ut maximus diam tincidunt magna mollis sodales. Nam placerat felis pharetra magna feugiat, ut porta lectus scelerisque. Praesent ac velit nec orci lobortis ultrices a ullamcorper eros. Vivamus condimentum commodo euismod. Nunc varius convallis augue sit amet tincidunt. Integer ultricies diam quis ipsum molestie pretium. Sed et viverra purus. Quisque convallis, leo ac viverra scelerisque, ex orci euismod diam, a vestibulum lorem orci luctus nisl. In lorem libero, porttitor non consequat sed, congue sit amet enim. Donec non velit libero. Nulla consectetur enim id nisl sollicitudin, in dignissim felis posuere. Cras a varius risus, eget aliquam velit. Maecenas in lorem sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat tortor non viverra posuere. Pellentesque vestibulum nulla at erat porta fringilla. Nam at rutrum massa, at luctus ipsum. Nam cursus sapien ut lorem dignissim congue. Donec sit amet ex ac neque tincidunt consectetur ac at ipsum. Proin nec ex vestibulum, scelerisque mi id, lobortis libero. Phasellus aliquam euismod enim eu ullamcorper. Nam augue sapien, convallis a accumsan vitae, egestas quis odio.</p>
        //                     </div>
        //                     <div className="sidebar">
        //                         <div className="post--ads_img">
        //                             <Image src={Ads} layout='fill' objectFit="cover" />
        //                         </div>

        //                         <div>
        //                             <div className='post--hot_title'>
        //                                 <Image src={Newspaper} />
        //                                 <h1>últimas notícias</h1>
        //                                 <div>
        //                                     <p><a>ver todos <Image src={Arrow} /></a></p>
        //                                 </div>
        //                             </div>
        //                             <div className='post--hot_card'>
        //                                 <div className='post--hot_cover'>
        //                                     <Image src={Stranger} layout='fill' objectFit="cover" className="rounded--img" />
        //                                 </div>
        //                                 <div className="post--hot_info">
        //                                     <span>entretenimento</span>
        //                                     <h2>Netflix pode comprar a Roku por US$ 13 bilhões, diz vazamento</h2>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <div></div>

        //             </article>
        //         </section>
        //     </section>
        // </>}
        <></>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://mysterious-river-92048.herokuapp.com/api/posts');
    const posts = await res.json()
    console.log(posts);

    const paths = posts.data.map((post) => ({
        params: { slug: post.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {

    const res = await fetch(`https://mysterious-river-92048.herokuapp.com/api/posts?filters[slug][$eq]=${slug}`);
    const data = await res.json();

    return {
        props: {
            post: data[0]
        },
        revalidate: 1
    };
}