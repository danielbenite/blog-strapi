import Image from 'next/image'
import Msmarvel from '../src/posts/msmarvel.jpg'
import HeroCard from './HeroCard'
import { useEffect, useState } from "react"

export default function Hero(posts) {

    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(() => {
        setLatestPosts(posts.posts.posts.data.slice(-2));
    }, [posts]);

    const [bottomPosts, setBottomPosts] = useState([]);

    useEffect(() => {
        setBottomPosts(posts.posts.posts.data.slice(2, 6));
    }, [posts]);

    return (
        <div style={{ backgroundColor: '#1A191E' }}>
            <section className="hero--wrapper container">
                <div className="hero--row_top">
                    {latestPosts.map(post => {
                        return (
                            <>
                                <HeroCard key={post.id} post={post} />
                            </>
                        )
                    })}
                </div>
                <div className="hero--row_bottom">
                    {bottomPosts.map(post => {
                        return (
                            <>
                                <HeroCard key={post.id} post={post} />
                            </>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}