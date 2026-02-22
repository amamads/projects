import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { RadioGroup, RadioGroupItem } from "@/components/atoms/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/atoms/sheet";
import capitalizeFirstLetter from "@/shared/utils/capitalizeFirstLetter";
import { Plus } from "lucide-react";
import { prioritys, statuses, labels } from "../../consts";


export default function CreateTaskSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <span>Create</span>
          <Plus />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-lg p-0">Create Task</SheetTitle>
          <SheetDescription>
            Add a new task by providing necessary info.Click save when you're
            done.
          </SheetDescription>
        </SheetHeader>
        <main className="space-y-4 ml-5">
          <div className="space-y-2">
            <Label htmlFor="create-task-input-title">Title</Label>
            <Input
              id="create-task-input-title"
              className="h-8 w-19/20 placeholder:text-sm pb-2"
              placeholder="Enter a title"
            />
          </div>

          <div className="space-y-2">
            <p className="text-sm">Status</p>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="select dropdown" />
              </SelectTrigger>
              <SelectContent position="popper">
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <RadioGroup defaultValue={labels[0]}>
            <p className="text-sm">Label</p>
            <div className="space-y-3">
              {labels.map((type) => (
                <div className="flex items-center gap-3" key={type}>
                  <RadioGroupItem value={type} id={type} />
                  <Label className="font-normal" htmlFor={type}>
                    {capitalizeFirstLetter(type)}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
          <RadioGroup defaultValue={labels[0]}>
            <p className="text-sm">Priority</p>
            <div className="space-y-3">
              {prioritys.map((priority) => (
                <div className="flex items-center gap-3" key={priority}>
                  <RadioGroupItem value={priority} id={priority} />
                  <Label className="font-normal" htmlFor={priority}>
                    {capitalizeFirstLetter(priority)}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </main>
      <SheetFooter>
        <SheetClose asChild>
          <Button variant='outline'>Close</Button>
        </SheetClose>
        <Button>Save chnges</Button>
      </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
