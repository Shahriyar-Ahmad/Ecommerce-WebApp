import React from 'react'

const BlogPosts = ({ posts }) => {
    return (
        <div className='flex flex-col justify-center items-center md:px-24 py-5 mx-4'>
            <div className='w-full flex items-center justify-between my-3'>
                <h2 className='text-4xl text-left'>
                    BLOG POST
                </h2>
                <button className='font-thin text-lg text-black underline text-right'>
                    BLOG POST
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center gap-4'>
                {
                    posts.map((post, index) => (
                        <div key={index} className='flex flex-col justify-center hover:cursor-pointer overflow-hidden'>
                            <div className=''>
                                <img className="w-full h-full object-cover transition-transform transform group-hover:scale-105" src={post.imgSrc} alt={post.title} />
                                <div>
                                    <span className='text-lg opacity-70'>{post.date} - {post.category}</span>
                                    <h2 className='text-xl '>{post.title}</h2>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BlogPosts
