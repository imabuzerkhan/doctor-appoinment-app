import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Calendar } from "@/components/ui/calendar"

import { NotebookPen } from "lucide-react"



const Booking = () => {
  return (
    <div>
      <Sheet>
  <SheetTrigger className="flex item-center gap-1 font-bold px-2 py-2 text-white bg-[#272E3F] dark:text-black dark:bg-white rounded-lg  " ><NotebookPen/> Booking Appoinment </SheetTrigger>
  <SheetContent className="overflow-auto" >
    <SheetHeader>
      <SheetTitle>Booking Appoinment </SheetTitle>
      <SheetDescription>
      Get your time and appoinment date from here
      </SheetDescription>
      <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
    </SheetHeader>
  </SheetContent>
</Sheet>

    </div>
  )
}

export default Booking
