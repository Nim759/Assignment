import React from 'react'

interface PostProps {
  blogImage: any
  title: any
  description: any
  authorName: any
  authorProfileImage: any
  key: any
  comment: any
  id: any
}

const PostId: React.FC<PostProps> = ({ blogImage, title, description, authorName, authorProfileImage, id }) => {


  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded" key={id}>
      <a href="/" aria-label="Article">
        <img
          src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
          className="object-cover w-full h-64 rounded"
          alt=""
        />
      </a>
      <div className="py-5">
        <a
          href="/"
          aria-label="Article"
          className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          <p className="text-2xl font-bold leading-5">{title}</p>
        </a>
        <p className="mb-4 text-gray-700">
          {description}
        </p>
        <div className='flex gap-6'>
          <img
            src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            className="object-cover rounded-full h-8"
            alt=""
          />
          <p className="mb-2 text-xs font-semibold text-gray-600 uppercase text-center" >
            {authorName}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostId