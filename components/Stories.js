import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Elon Musk",
    src: "https://i.gadgets360cdn.com/large/elon_musk_reuters_1610084738222.jpg?downsize=950:*&output-quality=80",
    profile: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
  },
  {
    name: "Jeff Bezoz",
    src: "https://www.rollingstone.com/wp-content/uploads/2018/06/jeff-bezos-richest-man-2018-read-7977aa13-c046-420a-b20d-c9bf45ab8ec0.jpg?resize=1800,1200&w=1800",
    profile: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto ">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
