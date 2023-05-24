import React from 'react'

interface PostProps {
    blogImage: any
    title: any
    description: any
    authorName: any
    authorProfileImage:any
    key:any
    comment:any
    id:any
  }

const PostId: React.FC<PostProps> = ({ blogImage, title, description, authorName, authorProfileImage,id}) => {

  
  return (
<div
className='bg-slate-300 rounded-xl p-10' key={id}>
            <img src={blogImage} alt=''/>
            <p className='text-2xl py-6 text-center'>{title}</p>
            <p>{description}</p>
            <div className='flex my-10'>
            <p>{authorName}</p>
            <img src ={authorProfileImage} alt=''/>
            </div>
            <p className='bg-sky-500 px-10 py-2 text-center'>VIEW</p>
</div>
  )
}

export default PostId