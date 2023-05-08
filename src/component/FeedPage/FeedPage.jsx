import React, { useState } from 'react'
import './feedPage.css'
import { FcLikePlaceholder } from 'react-icons/fc';
import { FcLike } from 'react-icons/fc';
import { BiCommentDetail } from 'react-icons/bi';
import { BiLike } from 'react-icons/bi';


export default function FeedPage() {
  const [readMore, setReadMore] = useState(false)
  const [like,setLike] =useState(false)
  return (
    <>
    <div className="feed-page">
    <div className="feed-cards">
    <div className="feed-card">
          <div className="feed-user-sec">
            <img src="https://picsum.photos/100/100" alt="user" />
            <div>
              <h5> Muhammed Safvan </h5>
              <h6>10:26 </h6>
            </div>
          </div>
          <div className='post-text'>
            <p className={readMore ? 'expanded-text' : 'short-text'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              ad aliquam? Nihil error, similique alias sequi ullam magnam animi
              at, doloremque distinctio officia optio laboriosam obcaecati vero
              architecto esse! Minus.
            </p>
            {!readMore && <p onClick={() => setReadMore(true)}>read more</p>}
          </div>

          <div className="feed-single-post">
            <img src="https://picsum.photos/500/300" alt="post" />
          </div>
		  <div className="social-sec">
			<h3><BiLike/></h3><span>34</span>
			<h3 ><BiCommentDetail/></h3><span>15</span>
		  </div>
		  <div className="social-comment-sec">
			<div>
			<h2 onClick={()=>setLike(prevLike=>!prevLike)} >{like? <FcLike/>:<FcLikePlaceholder/>}</h2>
			<p>Like</p>
			</div>
			<input placeholder='write a comment...'/>
		  </div>
        </div>

        <div className="feed-card">
          <div className="feed-user-sec">
            <img src="https://picsum.photos/100/100" alt="user" />
            <div>
              <h5> Muhammed Safvan </h5>
              <h6>10:26 </h6>
            </div>
          </div>
          <div className='post-text'>
            <p className={readMore ? 'expanded-text' : 'short-text'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              ad aliquam? Nihil error, similique alias sequi ullam magnam animi
              at, doloremque distinctio officia optio laboriosam obcaecati vero
              architecto esse! Minus.
            </p>
            {!readMore && <p onClick={() => setReadMore(true)}>read more</p>}
          </div>

          <div className="feed-single-post">
            <img src="https://picsum.photos/600/200" alt="post" />
          </div>
		  <div className="social-sec">
			<h3><BiLike/></h3><p>34</p>
			<br />
			<h3 style={{marginTop:"5px"}}><BiCommentDetail/></h3><p>15</p>
		  </div>
		  <div className="social-comment-sec">
			<div>
			<h2 onClick={()=>setLike(prevLike=>!prevLike)} >{like? <FcLike/>:<FcLikePlaceholder/>}</h2>
			<p>Like</p>
			</div>
			<input placeholder='write a comment...'/>
		  </div>
        </div>

        <div className="feed-card">
          <div className="feed-user-sec">
            <img src="https://picsum.photos/100/100" alt="user" />
            <div>
              <h5> Muhammed Safvan </h5>
              <h6>10:26 </h6>
            </div>
          </div>
          <div className='post-text'>
            <p className={readMore ? 'expanded-text' : 'short-text'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              ad aliquam? Nihil error, similique alias sequi ullam magnam animi
              at, doloremque distinctio officia optio laboriosam obcaecati vero
              architecto esse! Minus.
            </p>
            {!readMore && <p onClick={() => setReadMore(true)}>read more</p>}
          </div>

          <div className="feed-single-post">
            <img src="https://picsum.photos/200/400" alt="post" />
          </div>
		  <div className="social-sec">
			<h3><BiLike/></h3><p>34</p>
			<br />
			<h3 style={{marginTop:"5px"}}><BiCommentDetail/></h3><p>15</p>
		  </div>
		  <div className="social-comment-sec">
			<div>
			<h2 onClick={()=>setLike(prevLike=>!prevLike)} >{like? <FcLike/>:<FcLikePlaceholder/>}</h2>
			<p>Like</p>
			</div>
			<input placeholder='write a comment...'/>
		  </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
