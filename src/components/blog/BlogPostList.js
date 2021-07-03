import React from 'react';
import { useSelector } from 'react-redux';
import { BlogPost } from './BlogPost';
import { BlogPostCard } from './BlogPostCard';

export const BlogPostList = () => {

    const state = useSelector(state => state.blogData);
    const { posts, single, postActive } = state;

    return (
        <div className="col-xl-8 col-lg-7 order-1 order-lg-2">
            <div className="col-12">
                <article className="post">
                    {
                        (single)
                            ?
                            <BlogPost post={postActive[0]}></BlogPost>
                            :
                            posts.map(post => (
                                <BlogPostCard key={post.id} post={post} />
                            ))
                    }
                </article>
            </div>
        </div>
    );
}