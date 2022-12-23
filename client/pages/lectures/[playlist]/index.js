import { useRouter } from "next/router";
import React from "react";

const Playlist = () => {
  const { query } = useRouter();
  const { playlist } = query;
  return <div>{playlist}</div>;
};

export default Playlist;
