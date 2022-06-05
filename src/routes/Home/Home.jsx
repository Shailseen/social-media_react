import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import NewPostCard from "../../components/NewPostCard/NewPostCard";
import PostCard from "../../components/PostCard/PostCard";
import { addPost, getPost, usePost } from "../../feature/postSlice";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const { status } = useSelector((state) => state.post);
  console.log(status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) navigate("/");
  }, [user]);
  useEffect(() => {
    dispatch(getPost());
  }, []);
  const { posts } = useSelector((state) => state.post);
  return (
    <>
      {user && <NewPostCard />}
      {user && status==="loading" && <div className="w-fit mx-auto"> <Loader/></div>}
      {posts.map((item) => {
        return <PostCard key={item._id} postData={item} />;
      })}
    </>
  );
};

export default Home;
