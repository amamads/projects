import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/atoms/alert-dialog";
import { Button } from "@/components/atoms/button";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function DeleteRowDialog({ taskId, open }: { taskId: string ,open:boolean}) {
    const [open2, setOpen] = useState(false)
    console.log(open);
    
  return (
    <AlertDialog open={open2} >
      {/* <AlertDialogTrigger asChild onClick={()=>setOpen(true)}> */}
      <AlertDialogTrigger asChild onClick={()=>setOpen(true)}>
        <Button variant='ghost' className="w-full">
          <p>Delete</p>
          <Trash2 className="ml-auto" />
        </Button>
        {/* <>
          <p>Delete</p>
          <Trash2 className="ml-auto" />
        </> */}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Delete this task: {taskId} ?</AlertDialogTitle>
        <AlertDialogDescription>
          You are about to delete a task with the ID {taskId}. This action
          cannot be undone.
        </AlertDialogDescription>
        <AlertDialogAction asChild>
          <Button variant="destructive" className="text-foreground">
            Delete
          </Button>
        </AlertDialogAction>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
}
