export default function Post( { post } ){
    return (
<>
    <div className="card container col-md-5 p-0 mb-4">
        <strong className="py-2 text-start ps-3">@{post.username}</strong>
        <div className="">
            <img src={post.imageUrl} className="w-100" />
        </div>
        <p className="text-start ps-3 pt-3">♡ {post.likeCount} likes</p>
        <p className="text-start ps-3"><strong className="pe-1">@{post.username}</strong>{post.caption}</p>
    </div>
</>
    )
}