import CreatePost from "./CreatePost";
import Post from "./Post";
import "../styles/FeedListPage.scss";
import React, { useEffect, useState } from "react";
import ProfilePicture from "../assets/ProfilePicture.png";
import { SAMPLE_POST_DATA } from "../Data";
// import { SAMPLE_POST_DATA } from "../Data";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';

/**Component to store and get the data from local storage and map the data to components */
const FeedListView = () => {
  const localStorageKey = "posts";
  /**Posts array to store all the data */
  const [posts, setPosts] = useState([]);

  const [canShowDeleteAlert, setCanShowDeleteAlert] = useState(false);

  const [postsLength, setPostsLength] = useState(1);

  useEffect(()=>{
    setPostsLength(posts.length);
  
  },[posts])

  /**Function to create a new post array and to update the existing post */
  const createPost = (receivedPost) => {
    setPosts([
      {
        id: uuidv4(),
        name: receivedPost.name,
        message: receivedPost.message,
        createdAt: moment().format(),
        attachment: receivedPost.attachment,
        designation: receivedPost.designation,
        type: receivedPost.fileType,
        fileName: receivedPost.fileName,
        photo: receivedPost.photo,
        audio: receivedPost.audio
      },
      ...posts,
    ]);
  };

  

  /**Function to delete the post */
  const deletePost = (receivedId) =>{
   setPosts(posts.filter((del)=>del.id!==receivedId));
   setCanShowDeleteAlert(!canShowDeleteAlert);
  }
  
  /**To get the posts from local storage */

  useEffect(() => {
    const retrievedPosts = JSON.parse(localStorage.getItem(localStorageKey));
    if (retrievedPosts) setPosts(retrievedPosts);
  }, []);
  
  /**To store the posts in local storage */
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(posts));
  }, [posts]);

  return (
    <React.Fragment>
      {  console.log(postsLength)}
      <div className="main-page-container">
        <CreatePost newPost={createPost} />
        {posts.map((post) => (
          <Post
            name={post.name}
            designation={post.designation}
            createdAt={moment(post.createdAt).fromNow()}
            message={post.message}
            key={post.id}
            value={post.id}
            profile={ProfilePicture}
            attachment={post.attachment}
            onDelete={deletePost}
            fileType={post.type}
            handleDelete={true}
            fileName={post.fileName}
            photo={post.photo}
            audio={post.audio}
            deleteAlert={canShowDeleteAlert}
            
          />
        ))}
        {SAMPLE_POST_DATA.map((post) =>  (
            <Post
              name={post.name}
              designation={post.designation}
              createdAt={post.createdAt}
              message={post.message}
              key={post.key}
              profile={post.profilePic}
            />
          )
        )}
      </div>
    </React.Fragment>
  );
};
export default FeedListView;








