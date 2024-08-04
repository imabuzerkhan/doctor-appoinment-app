import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NotebookPen } from "lucide-react"



const Booking = () => {
  return (
    <div>
      <Sheet>
  <SheetTrigger className="flex item-center gap-1 font-bold px-2 py-2 text-white bg-[#272E3F] dark:text-black dark:bg-white rounded-lg  " ><NotebookPen/> Booking Appoinment </SheetTrigger>
  <SheetContent className="overflow-auto" >
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    </div>
  )
}

export default Booking
