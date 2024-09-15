'use client'
import React, { useMemo } from "react";
import LeftPanel from "./LeftPanel";
import Header from "./Header";
import { Profile } from "@/lib/definitions";
import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
query {
  myProfile {
    id
    name
    avatar
  }
}
`;
export default function layout(
  { children }:
    Readonly<{ children: React.ReactNode; }>
) {
  const { loading, error, data } = useQuery<{ myProfile: Profile }>(GET_USER)
  const defaultProfile: Profile = {
    id: 0,
    name: "",
    avatar: "/foto.png"
  }
  const profile = useMemo<Profile>(() => data ? data.myProfile : defaultProfile, [data])

  return <div className="relative px-[70px] ">
    <div className="h-[200px] bg-blue absolute top-0 left-0 right-0 z-[-1]"></div>
    <div className="grid grid-cols-5 grid-rows-[200px,1fr] gap-x-4 h-full">
      <LeftPanel></LeftPanel>
      <Header className="col-span-9"></Header>
      <main className="col-start-2 row-start-4 col-span-9 bg-background-2 px-4 py-6">
        {children}
      </main>
    </div>
  </div>

}
