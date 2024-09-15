import { Select, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";
import Nav from "./Nav";
import { Profile, GET_PROFILE, placeholderProfile } from "@/lib/definitions";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";

export default function Header({ className = "" }: { className?: string }) {
  const { loading, error, data } = useQuery<{ myProfile: Profile }>(GET_PROFILE)
  const name = useMemo<string>(() => data ? data.myProfile.name : placeholderProfile.name, [data])
  return <header className={"h-[200px] grid grid-rows-3 " + className}>
    <div></div>
    <div className="flex items-center gap-4">
      <h1 className="font-semibold text-3xl">{name}</h1>
      <div className="grow"></div>
      <Select>
        <SelectTrigger className="w-[200px] rounded-lg p-3 h-[33px]">
          <SelectValue placeholder="Request a Change" className="text-sm" />
        </SelectTrigger>
        <SelectContent>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[64px] rounded-lg p-2 h-[33px]">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.88357 2.16673C6.42084 -0.053836 9.5783 -0.0562718 10.119 2.16346C10.2118 2.54459 10.6487 2.72516 10.9835 2.52079C12.9336 1.33051 15.168 3.56146 13.9808 5.51338C13.7769 5.84852 13.9582 6.28512 14.3394 6.37737C16.56 6.91464 16.5624 10.0721 14.3427 10.6128C13.9616 10.7056 13.781 11.1425 13.9854 11.4774C15.1756 13.4274 12.9447 15.6618 10.9928 14.4746C10.6576 14.2707 10.221 14.452 10.1288 14.8332C9.59152 17.0538 6.43405 17.0562 5.89336 14.8365C5.80052 14.4554 5.36364 14.2748 5.02881 14.4792C3.07873 15.6695 0.844332 13.4385 2.03159 11.4866C2.23544 11.1514 2.0542 10.7148 1.67293 10.6226C-0.547636 10.0853 -0.550079 6.92786 1.66966 6.38716C2.05079 6.29432 2.23135 5.85744 2.02698 5.52261C0.836709 3.57253 3.06765 1.33813 5.01957 2.52539C5.35472 2.72925 5.79132 2.54801 5.88357 2.16673ZM8.56446 2.54213C8.42074 1.95213 7.5815 1.95278 7.4387 2.543C7.09163 3.97746 5.44902 4.65934 4.1881 3.89238C3.66929 3.57681 3.07631 4.17071 3.39268 4.68903C4.16159 5.94876 3.48225 7.59242 2.04832 7.9417C1.45833 8.08542 1.45898 8.92466 2.04919 9.06746C3.48365 9.41453 4.16553 11.0571 3.39858 12.3181C3.08301 12.8369 3.6769 13.4298 4.19523 13.1135C5.45496 12.3446 7.09862 13.0239 7.4479 14.4578C7.59162 15.0478 8.43086 15.0472 8.57366 14.457C8.92073 13.0225 10.5633 12.3406 11.8243 13.1076C12.3431 13.4231 12.936 12.8293 12.6197 12.3109C11.8508 11.0512 12.5301 9.40754 13.964 9.05826C14.554 8.91454 14.5534 8.0753 13.9632 7.9325C12.5287 7.58543 11.8468 5.94282 12.6138 4.68191C12.9293 4.16309 12.3355 3.57012 11.8171 3.88649C10.5574 4.65539 8.91374 3.97605 8.56446 2.54213ZM8.00494 6.89998C7.12129 6.90067 6.4055 7.61756 6.40618 8.50122C6.40686 9.38487 7.12376 10.1007 8.00741 10.1C8.89107 10.0993 9.60686 9.3824 9.60618 8.49875C9.6055 7.61509 8.8886 6.8993 8.00494 6.89998ZM4.80618 8.50245C4.80481 6.73514 6.2364 5.30135 8.00371 5.29998C9.77102 5.29862 11.2048 6.7302 11.2062 8.49751C11.2075 10.2648 9.77596 11.6986 8.00865 11.7C6.24134 11.7013 4.80754 10.2698 4.80618 8.50245Z" fill="#1C3144" />
          </svg>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
        </SelectContent>
      </Select>
    </div>
    <Nav></Nav>
  </header >
}
