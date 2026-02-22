import { Button } from "@/components/atoms/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/atoms/dialog";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { Download } from "lucide-react";

export default function ImportDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <span>Import</span>
          <Download />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-left space-y-0">
          <DialogTitle className="p-0 text-lg m-0">Import Tasks</DialogTitle>
          <p className="text-sm text-muted-foreground">Import tasks quickly from a CSV file.</p>
        </DialogHeader>
        <main className="space-y-2">
            <Label htmlFor="file-input" >File</Label>
            <Input type="file" id="file-input" className="text-sm"/>
            
        </main>
        <footer className="grid gap-2">
            <Button>import</Button>
            <DialogClose asChild>
                <Button variant='outline'>Close</Button>
            </DialogClose>
        </footer>
      </DialogContent>
    </Dialog>
  );
}
