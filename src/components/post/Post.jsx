import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={require('./post1.jpg')} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">really really long paragraph</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        this is the paragraph where the post will be described. all the description of this post
         will be written here so that the post can be described perfectly
         this is the paragraph where the post will be described. all the description of this post
         will be written here so that the post can be described perfectly
         this is the paragraph where the post will be described. all the description of this post
         will be written here so that the post can be described perfectly
         this is the paragraph where the post will be described. all the description of this post
         will be written here so that the post can be described perfectly
         this is the paragraph where the post will be described. all the description of this post
         will be written here so that the post can be described perfectly
         this is the paragraph where the post will be described. all the description of this post
         will be written here so that the post can be described perfectly
         this is the paragraph where the post will be described. all the description of this post
         will be written here so that the post can be described perfectly
         this is the paragraph where the post will be described. all the description of this post
         will be written here so that the post can be described perfectly
         this is the paragraph where the post will be described. all the description of this post
         will be written here so that the post can be described perfectly
         this is the paragraph where the post will be described. all the description of this post
         will be written here so that the post can be described perfectly</p>
    </div>
  )
}
