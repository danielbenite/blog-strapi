import Image from 'next/image'
import Tag from './Tag'
import Link from 'next/link'

export default function LastNewsCard(post) {

    return (
        <>
            <Link href={`/posts/${post.post.attributes.slug}`}>
                <div className='card'>
                    <div className='card--img'>
                        <Image src={post.post.attributes.cover.data.attributes.formats.medium.url} width={294} height={234} objectFit='cover' className='rounded--img' />
                    </div>
                    <Tag key={post} category={post.post.attributes.tag} />
                    <h3>{post.post.attributes.title}</h3>
                    <p>{post.post.attributes.description}</p>
                </div>
            </Link>
        </>
    )
}