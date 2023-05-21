import React from 'react'

interface PostProps {
    blogImage: any
    title: any
    sDescription: any
    authorName: any
    authorProfileImage:any
    description:any
    key:any
    comment:any
  }

const Post: React.FC<PostProps> = ({ blogImage, title, sDescription, authorName, authorProfileImage}) => {

  
  return (
<div
className='bg-slate-300 rounded-xl p-10'>
            <img src={blogImage} alt=''/>
            <p className='text-2xl py-6 text-center'>{title}</p>
            <p>{sDescription}</p>
            <div className='flex my-10'>
            <p>{authorName}</p>
            <img src ={authorProfileImage} alt=''/>
            </div>
            <p className='bg-sky-500 px-10 py-2 text-center'>VIEW</p>
</div>
  )
}

export default Post