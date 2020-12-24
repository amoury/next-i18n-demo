import Image from 'next/image';

const PostCard = ({ post }) => {
  return (
    <article className="border shadow rounded flex flex-col">
      <div className="relative w-full">
        <Image src={post.image} width={1080} height={720}  layout="responsive" />
      </div>
      <div className="p-5 uppercase text-sm font-bold tracking-wide">
        {post.text} 
      </div>
    </article>
  )
}

export default PostCard
