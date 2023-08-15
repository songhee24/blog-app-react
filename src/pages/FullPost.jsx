import Post from "../components/Post/index.jsx";
import { CommentsBlock } from "../components/index.js";
import AddComment from "../components/AddComment/index.jsx";
import { useParams } from "react-router-dom";
import React from "react";
import axios from "../api/axios.js";
import ReactMarkdown from "react-markdown";

export const FullPost = () => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch(() => alert("Ошибка что то пошло не так"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Post isLoading={loading} />;
  }

  return (
    <>
      <Post
        _id={data._id}
        title={data.title}
        imageUrl={data.imageUrl ? `http://localhost:4444/${data.imageUrl}` : ""}
        user={data.user}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        commentsCount={3}
        tags={data.tags}
        isFullPost
      >
        <ReactMarkdown>{data.text}</ReactMarkdown>
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Вася Пупкин",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "Это тестовый комментарий 555555",
          },
          {
            user: {
              fullName: "Иван Иванов",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
          },
        ]}
        isLoading={false}
      >
        <AddComment />
      </CommentsBlock>
    </>
  );
};
