import Image from 'next/image'
import Tag from './Tag'

export default function HeroCard(post) {
    return (
        <>
            <div className="hero--card">
                <div className="hero--info">
                    <Tag key={post} category={post.post.attributes.tag} />
                    <h3>{post.post.attributes.title}</h3>
                </div>
                <div className="mask-square"></div>
                <div className="hero--img">
                    <Image src={post.post.attributes.cover.data.attributes.formats.medium.url} layout='fill' objectFit='cover' className="rounded--img" />
                </div>
            </div>
            
        </>
    )
}