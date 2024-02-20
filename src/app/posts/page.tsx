// pages/index.tsx
"use client";
import React, { useState, useEffect } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsPage: React.FC = () => {
  // fetch  https://jsonplaceholder.typicode.com/posts

  return (
    <div>
      <h1>Posts Grouped by User ID</h1>
    </div>
  );
};

export default PostsPage;
