import React, { useEffect } from 'react'
import useSWR from 'swr';
import PostCard from '../components/PostCard';
import useLocale from '../hooks/useLocale';

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Blog = () => {
  const { lang } = useLocale();

  const { data, error } = useSWR('/api/posts', () => fetcher('/api/posts', { headers: { 'X-Locale':  lang }}));
  if(!data) return <div className="container flex justify-center items-center">Loading...</div>;
  if(error) return <div>{error.message}</div>
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 container mx-auto my-10">
    { data.posts.data.map(post => (
      <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Blog
