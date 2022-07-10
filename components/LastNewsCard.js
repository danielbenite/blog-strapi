import Image from 'next/image'
import Tag from './Tag'

export default function LastNewsCard(post) {

    return (
        <>
            <div className='card'>
                <div className='card--img'>
                    <Image src={post.post.attributes.cover.data.attributes.formats.medium.url} width={294} height={234} objectFit='cover' className='rounded--img' />
                </div>
                <Tag key={post} category={post.post.attributes.tag} />
                <h3>{post.post.attributes.title}</h3>
                <p>{post.post.attributes.description}</p>
            </div>
        </>
    )
}