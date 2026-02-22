import { Button } from "@/components/atoms/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/atoms/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms/popover";
import capitalizeFirstLetter from "@/shared/utils/capitalizeFirstLetter";
import { useState } from "react";
import { languages } from "../../consts";
import { ChevronsUpDown } from "lucide-react";

export default function SelectLanguageMenu() {
  const [open, setOpen] = useState(false);
  const [languageValue, setLanguageValue] = useState<string | undefined>(
    undefined,
  );

  function selectItemFn(value: string) {
    console.log(value);
    setLanguageValue(value);
    setOpen(false);
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="justify-self-start w-46">
          {languageValue ? (
            <p>{capitalizeFirstLetter(languageValue)}</p>
          ) : (
            <p className="text-muted-foreground">Select language</p>
          )}
          <ChevronsUpDown className="size-3 text-muted-foreground ml-auto" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command defaultValue={languageValue} onValueChange={setLanguageValue}>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language}
                  value={language}
                  onSelect={() => selectItemFn(language)}
                >
                  {capitalizeFirstLetter(language)}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
