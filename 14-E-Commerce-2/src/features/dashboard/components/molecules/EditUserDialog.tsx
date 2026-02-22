import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type User from "@/types/user";
import { UserPen } from "lucide-react";
import { useState } from "react";
import EditForm from "../organisms/EditForm";

export default function EditUserDialog({ user }: { user: User }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="h-6 w-full flex gap-3">
          <UserPen />
          <p>edit</p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle></DialogTitle>
        <EditForm value={user} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}


