import Head from "next/head";
import React from "react";

export default function Posts() {
  const posts = [
    { post: "post 1" },
    { post: "post 2" },
    { post: "post 3" },
    { post: "post 4" },
  ];
  return (
    <div>
      <Head>
        <title>Posts | ig.news</title>
      </Head>
      <h1>Post 1</h1>
    </div>
  );
}
