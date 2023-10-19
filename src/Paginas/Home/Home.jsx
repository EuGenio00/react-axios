import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogAxios from "../../Hooks/Axios/axios_config";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogAxios.get("/posts");
      //console.log(response);

      const data = response.data;
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(console.error());
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <h1>Últimos posts</h1>

      {posts.length === 0 ? (
        <h4>Carregando...</h4>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <Link to={`/posts/${post.id}`} className="btn">
              Saiba Mais
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
