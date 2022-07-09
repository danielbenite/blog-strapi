import Image from 'next/image'
import Msmarvel from '../src/posts/msmarvel.jpg'

export default function LastNewsCard(post) {
    console.log(post)
    return (
        <>
            <div className='card'>
                <div className='card--img'>
                    <Image src={post.post.attributes.cover.data.attributes.formats.medium.url} width={294} height={234} objectFit='cover' className='rounded--img' />
                </div>
                <span>{post.post.attributes.tag}</span>
                <h3>{post.post.attributes.title}</h3>
                <p>{post.post.attributes.description}</p>
            </div>
        </>
    )
}