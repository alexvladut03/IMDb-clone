import React from "react";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div className="flex dark:bg-amber-500 bg-amber-100 p-4 justify-center gap-10">
      <NavBarItem title="Trending" param="fetchTranding" />
      <NavBarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
