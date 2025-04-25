'use client'

import Paginator from "@/components/Paginator";
import { API_URL } from "@/constants";
import { APIEvent } from "@/types/Event";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([] as APIEvent[] | null)

  useEffect(() => {
    fetch(API_URL, { method: "GET" }).then(
      (res) => {
        if (res.ok) {
          res.json().then(
            (data) => {
              setPosts(data as APIEvent[]);
            }
          )
        } else {
          setPosts(null);
        }
      }
    );
  }, []);

  return (
    <div className="flex flex-col flex-center flex flex-col items-center m-20">
      {
        posts != null &&
        <Paginator posts={posts} />
      }
      {posts == null &&
        <div>No posts from the API!</div>
      }
    </div>
  );
}
