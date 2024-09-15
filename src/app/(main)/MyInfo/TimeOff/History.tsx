import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select"

type HistoryEntry = { date: Date, accrual: [Date, Date], used_days?: number, earned_days?: number, balance: number }
export default function History() {
  const history: HistoryEntry[] = Array.from(Array(6), () => ({
    date: new Date(2024, 5, 23),
    accrual: [new Date(2024, 5, 23), new Date(2024, 11, 20)],
    balance: 3
  }));
  [0, 2, 3, 5].forEach(v => history[v].earned_days = 3);
  [1, 4].forEach(v => history[v].used_days = -6)

  const format_date = (date: Date) => `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
  const Row = ({ active = false, history_entry }: { active?: boolean, history_entry: HistoryEntry }) =>
    <tr className={"border-b-2 " + (active ? "bg-blue/60 border-b-blue" : "border-b-gray-2")}>
      <td className="p-2 text-sm">{format_date(history_entry.date)}</td>
      <td className="p-2 text-sm">Accrual for {format_date(history_entry.accrual[0])} to {format_date(history_entry.accrual[1])}</td>
      <td className="p-2 text-sm">{history_entry.used_days}</td>
      <td className="p-2 text-sm">{history_entry.earned_days?.toFixed(2)}</td>
      <td className="p-2 text-sm">{history_entry.balance.toFixed(2)}</td>
    </tr>
  return <>
    <div className="text-sm flex items-center gap-2 mb-4">
      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.49994 13.5235V3.00623C1.51299 3.00274 1.52974 3.00006 1.5503 3.00006H14.356C14.3766 3.00006 14.3933 3.00274 14.4064 3.00623V8.26485C14.4064 8.67907 14.7422 9.01485 15.1564 9.01485C15.5706 9.01485 15.9064 8.67907 15.9064 8.26485V2.91837C15.9064 2.0141 15.0799 1.50006 14.356 1.50006H1.5503C0.826379 1.50006 -6.10352e-05 2.0141 -6.10352e-05 2.91837V13.6113C-6.10352e-05 14.5156 0.826379 15.0296 1.5503 15.0296H5.15191C5.56612 15.0296 5.90191 14.6939 5.90191 14.2796C5.90191 13.8654 5.56612 13.5296 5.15191 13.5296H1.5503C1.52974 13.5296 1.51299 13.527 1.49994 13.5235ZM8.70332 4.92389C8.70332 4.50967 8.36754 4.17389 7.95332 4.17389C7.53911 4.17389 7.20332 4.50967 7.20332 4.92389V7.51544H4.75189C4.33768 7.51544 4.00189 7.85122 4.00189 8.26544C4.00189 8.67965 4.33768 9.01544 4.75189 9.01544H7.95332C8.36754 9.01544 8.70332 8.67965 8.70332 8.26544V4.92389ZM15.3347 9.82829C15.7466 9.86923 16.0429 10.2364 15.9966 10.6484C15.8963 11.5408 15.6075 12.3047 15.1295 12.9347C14.6528 13.5629 14.0188 14.0172 13.2883 14.3391C12.2949 14.7769 11.0892 14.9839 9.76126 15.0501L9.81945 15.0804C10.1848 15.2712 10.3223 15.7237 10.1267 16.0912C9.93109 16.4586 9.47635 16.6019 9.11103 16.4112L6.93826 15.277C6.73588 15.1713 6.59425 14.9783 6.55384 14.7531C6.51343 14.5278 6.5787 14.2952 6.73098 14.1216L8.19491 12.4529C8.4698 12.1396 8.94403 12.1049 9.25414 12.3755C9.56424 12.6461 9.59279 13.1195 9.31789 13.4329L9.19728 13.5704C10.64 13.5391 11.8194 13.3556 12.6976 12.9685C13.2399 12.7296 13.6475 12.4214 13.9379 12.0387C14.227 11.6577 14.4309 11.1623 14.5053 10.5002C14.5516 10.0882 14.9229 9.78736 15.3347 9.82829Z" fill="#1C3144" />
      </svg>
      History
    </div>
    <menu className="flex gap-4 mb-4">
      <li>
        <Select>
          <SelectTrigger classNameArrow="bg-blue h-full" className="w-[180px] border-[#7C96B1] border-[1px] p-0 pl-2 h-7">
            <SelectValue placeholder="Sick" />
            <div className="grow"></div>
            <svg width="10" height="11" className="mr-2" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.209371 0.709048C0.488101 0.429886 0.940362 0.429537 1.21952 0.708267L5.00308 4.48598L8.7808 0.702426C9.05953 0.423265 9.51179 0.422915 9.79095 0.701646C10.0701 0.980376 10.0705 1.43264 9.79173 1.7118L6.01401 5.49536L9.79757 9.27307C10.0767 9.5518 10.0771 10.0041 9.79835 10.2832C9.51962 10.5624 9.06736 10.5627 8.7882 10.284L5.00464 6.50629L1.22693 10.2898C0.948195 10.569 0.495935 10.5694 0.216773 10.2906C-0.0623882 10.0119 -0.0627376 9.55963 0.215993 9.28047L3.99371 5.49692L0.210151 1.7192C-0.06901 1.44047 -0.0693594 0.988209 0.209371 0.709048Z" fill="#1C3144" fillOpacity="0.6" />
            </svg>
          </SelectTrigger>
        </Select>
      </li>
      <li>
        <Select>
          <SelectTrigger classNameArrow="bg-blue h-full" className="w-[96px] border-[#7C96B1] border-[1px] p-0 pl-2 h-7">
            <SelectValue placeholder="All" />
            <div className="grow"></div>
            <svg width="10" height="11" className="mr-2" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.209371 0.709048C0.488101 0.429886 0.940362 0.429537 1.21952 0.708267L5.00308 4.48598L8.7808 0.702426C9.05953 0.423265 9.51179 0.422915 9.79095 0.701646C10.0701 0.980376 10.0705 1.43264 9.79173 1.7118L6.01401 5.49536L9.79757 9.27307C10.0767 9.5518 10.0771 10.0041 9.79835 10.2832C9.51962 10.5624 9.06736 10.5627 8.7882 10.284L5.00464 6.50629L1.22693 10.2898C0.948195 10.569 0.495935 10.5694 0.216773 10.2906C-0.0623882 10.0119 -0.0627376 9.55963 0.215993 9.28047L3.99371 5.49692L0.210151 1.7192C-0.06901 1.44047 -0.0693594 0.988209 0.209371 0.709048Z" fill="#1C3144" fillOpacity="0.6" />
            </svg>
          </SelectTrigger>
        </Select>
      </li>
      <li className="grow"></li>
      <li>
        <Select>
          <SelectTrigger classNameArrow="bg-blue h-full" className="w-[176px] border-[#7C96B1] border-[1px] p-0 pl-2 h-7">
            <SelectValue placeholder="Balance History" />
          </SelectTrigger>
        </Select>
      </li>
    </menu>
    <table className="w-full">
      <thead className="bg-[#DAE6F2]">
        <tr>
          <th className="font-medium text-sm text-left py-3 px-2">Date </th>
          <th className="font-medium text-sm text-left py-3 px-2">Description</th>
          <th className="font-medium text-sm text-left py-3 px-2">Used Days (-)</th>
          <th className="font-medium text-sm text-left py-3 px-2">Earned Days (+)</th>
          <th className="font-medium text-sm text-left py-3 px-2">Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr className="h-2">
        </tr>
        {history.map((history_entry, i) => <Row key={i} active={i == 3} history_entry={history_entry}></Row>)}
      </tbody>
    </table>
  </>
}
