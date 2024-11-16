import React from "react";
import { data } from "./data";

export default function Main() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {/* <User
        title="mojombo"
        avatar="https://avatars.githubusercontent.com/u/1?v=4"
        githubUrl="https://github.com/mojombo"
      />
      <User
        title="defunkt"
        avatar="https://avatars.githubusercontent.com/u/2?v=4"
        githubUrl="https://github.com/defunkt"
      />
      <User
        title="Haris"
        avatar="https://avatars.githubusercontent.com/u/3?v=4"
        githubUrl="https://github.com/callmeharis"
      /> */}
      {data.map((meraData) => {
        return (
          <>
            <User
              // title={meraData.title}
              // avatar={meraData.avatar}
              // githubUrl={meraData.githubUrl}
              {...meraData} // spread operator
            />
          </>
        );
      })}
    </div>
  );
}
export function User({ title, avatar, githubUrl }) {
  // const { title, avatar, githubUrl } = props;
  return (
    <div className="w-[300px]">
      <img src={avatar} alt="" className="w-full" />
      <h1 className="text-2xl font-semibold">{title}</h1>
      <a className="underline text-blue-600" target="_blank" href={githubUrl}>
        Profile
      </a>
    </div>
  );
}
