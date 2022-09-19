import React from "react";
import Post from "./Post";

const realtimePosts = [
  {
    id: "1",
    name: "Elon Musk",
    message: "Hello. I'm Elon Musk",
    email: "ElonMusk@gmail.com",
    timestamp: "15/05/2021 22:18:02",
    postImage: "https://i.gadgets360cdn.com/large/elon_musk_reuters_1610084738222.jpg?downsize=950:*&output-quality=80",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
  },
  {
    id: "2",
    name: "Jeff Bezoz",
    message: "Hello. I'm Jeff Bezoz",
    email: "JeffBezoz@gmail.com",
    timestamp: "16/05/2021 17:15:03",
    postImage: "https://www.rollingstone.com/wp-content/uploads/2018/06/jeff-bezos-richest-man-2018-read-7977aa13-c046-420a-b20d-c9bf45ab8ec0.jpg?resize=1800,1200&w=1800",
    image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
  },
];

function Posts() {
  return (
    <div>
      {realtimePosts.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          message={post.message}
          email={post.email}
          timestamp={post.timestamp}
          image={post.image}
          postImage={post.postImage}
        />
      ))}
    </div>
  );
}

export default Posts;
