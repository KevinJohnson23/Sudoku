import { useState } from "react"

export default function Week({ year, month, row, setDate }) {

  // function selectDay(day) {
  //   const lastDay = new Date(year, month + 1, 0).getDate()
  //   if (day > lastDay) {
  //     let newMonth = date.month + 1
  //     let newYear = date.year
  //     if (newMonth > 11) {

  //     }
  //   } else {
  //     setDate({
  //       year: year,
  //       month: month,
  //       day: day
  //     })
  //   }
  // }

  const firstDay = new Date(year, month, 1).getDay()
  const lastDay = new Date(year, month + 1, 0).getDate()
  const prevLastDay = new Date(year, month, 0).getDate()

  const dayNum = row * 7 - firstDay + 1

  return <>
    {
      Array(7).fill(0).map((_, i) => (
        <td key={i}><button>{
          dayNum + i < 0 ?
            prevLastDay + i - firstDay + 2
            : dayNum + i >= lastDay ?
              dayNum + i - lastDay + 1
              : dayNum + i + 1
        }</button></td>
      ))
    }
  </>

  // if (row < 4) {
  //   return (
  //     <>
  //       <td><button>{dayNum + 1}</button></td>
  //       <td><button>{dayNum + 2}</button></td>
  //       <td><button>{dayNum + 3}</button></td>
  //       <td><button>{dayNum + 4}</button></td>
  //       <td><button>{dayNum + 5}</button></td>
  //       <td><button>{dayNum + 6}</button></td>
  //       <td><button>{dayNum + 7}</button></td>
  //     </>
  //   )
  // } else {
  //   const lastDay = new Date(year, month + 1, 0).getDate()
  //   const numDays = lastDay - dayNum
  //   return (
  //     <>
  //       {Array(7).fill(0).map((_, i) => (
  //         <td key={i}><button>{i < numDays ? dayNum + i + 1 : i - numDays + 1}</button></td>
  //       ))}
  //     </>
  //   )
  // }
}