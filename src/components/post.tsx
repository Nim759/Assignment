import React from 'react'
import { Link } from 'react-router-dom'

interface PostProps {
  blogImage: any
  title: any
  sDescription: any
  authorName: any
  authorProfileImage: any
  description: any
  key: any
  comment: any
  id: any
}


const Post: React.FC<PostProps> = ({ blogImage, title, sDescription, authorName, authorProfileImage, id }) => {

  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
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
          {sDescription}
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
        <Link to={`/view/${id}`}><div className='flex items-center justify-end'><p className='bg-orange-300 px-4 py-3 rounded-xl'>View</p></div></Link>
      </div>
    </div>
  )
}

export default Post