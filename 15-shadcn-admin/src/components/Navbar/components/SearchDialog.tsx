import { Badge } from "@/components/atoms/badge";
import { Button } from "@/components/atoms/button";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/atoms/command";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/atoms/dialog";
import type { Theme } from "@/providers/thme-provider/theme-procider-context";
import { useTheme } from "@/providers/thme-provider/use-theme";
import capitalizeFirstLetter from "@/shared/utils/capitalizeFirstLetter";
import { selectMenuButtons, useSidebarStore } from "@/stores/sidebar-store";
import {
  ArrowRight,
  ChevronRight,
  Command as CommandIcon,
  Laptop,
  Moon,
  Search,
  Sun,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function SearchDialog({inDashboardPage}:{inDashboardPage:boolean}) {
  const [open, setOpen] = useState(false);
  const { general, pages, other } = useSidebarStore(selectMenuButtons);
  const navigate = useNavigate();
  const { setTheme } = useTheme();

  const themeOptions: { icon: LucideIcon; theme: Theme }[] = [
    { icon: Sun, theme: "light" },
    { icon: Moon, theme: "dark" },
    { icon: Laptop, theme: "system" },
  ];

  function onSelectCommandItem(path: string) {
    navigate(path);
    setOpen(false);
  }
  function onSelectCommandThemeItem(value: Theme) {
    setTheme(value);
    setOpen(false);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`flex gap-2 text-muted-foreground sm:px-1! sm:w-40 lg:w-55 justify-start ${inDashboardPage || 'flex-1'}`}
          // className={`flex gap-2 text-muted-foreground sm:px-1! sm:w-40 lg:w-55 justify-start ${inDashboardPage || 'flex-1 '}`}
        >
          <Search />
          <span>Search</span>
          <Badge variant='secondary' className="text-muted-foreground rounded-sm border-input p-1 px-1.5 hidden sm:flex ml-auto">
            <CommandIcon className="size-4"/>
            <span className="text-[10px]">K</span>
          </Badge>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 w-full">
        <Command>
          <CommandInput
            placeholder="Type a command or search..."
            className="placeholder:text-base"
          />
          <CommandList className="overflow-auto">
            {/* <div className="h-[50vh]"> */}
              <CommandGroup heading="General">
                {general.items?.map(({ title, path }) => (
                  <CommandItem
                    onSelect={() => onSelectCommandItem(path)}
                    className="p-3"
                  >
                    <ArrowRight />
                    <p>{title}</p>
                  </CommandItem>
                ))}
                {general.collapsibles?.flatMap(
                  ({ items, title: collapTitle }) =>
                    items.map(({ path, title }) => (
                      <CommandItem
                        onSelect={() => onSelectCommandItem(path)}
                        className="p-3"
                      >
                        <ArrowRight />
                        <div className="flex gap-2 items-center">
                          <p>{collapTitle}</p>
                          <ChevronRight className="" />
                          <p>{title}</p>
                        </div>
                      </CommandItem>
                    )),
                )}
              </CommandGroup>
              <CommandGroup heading="Pages">
                {pages.collapsibles?.flatMap(({ items, title: collapTitle }) =>
                  items.map(({ path, title }) => (
                    <CommandItem
                      onSelect={() => onSelectCommandItem(path)}
                      className="p-3"
                    >
                      <ArrowRight />
                      <div className="flex gap-2 items-center">
                        <p>{collapTitle}</p>
                        <ChevronRight className="" />
                        <p>{title}</p>
                      </div>
                    </CommandItem>
                  )),
                )}
              </CommandGroup>
              <CommandGroup heading="Other">
                {other.collapsibles?.flatMap(({ items, title: collapTitle }) =>
                  items.map(({ path, title }) => (
                    <CommandItem
                      onSelect={() => onSelectCommandItem(path)}
                      className="p-3"
                    >
                      <ArrowRight />
                      <div className="flex gap-2 items-center">
                        <p>{collapTitle}</p>
                        <ChevronRight className="" />
                        <p>{title}</p>
                      </div>
                    </CommandItem>
                  )),
                )}
                {other.items?.map(({ title, path }) => (
                  <CommandItem
                    onSelect={() => onSelectCommandItem(path)}
                    className="p-3"
                  >
                    <ArrowRight />
                    <p>{title}</p>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Theme">
                {themeOptions.map(({ theme: theme, icon: Icon }) => (
                  <CommandItem
                    onSelect={() => onSelectCommandThemeItem(theme)}
                    className="p-3"
                  >
                    <Icon />
                    <p>{capitalizeFirstLetter(theme)}</p>
                  </CommandItem>
                ))}
              </CommandGroup>
            {/* </div> */}
            {/* <ScrollArea className="h-[50vh]">
              <CommandGroup heading="General">
                {general.items?.map(({ title, path }) => (
                  <CommandItem
                    onSelect={() => onSelectCommandItem(path)}
                    className="p-3"
                  >
                    <ArrowRight />
                    <p>{title}</p>
                  </CommandItem>
                ))}
                {general.collapsibles?.flatMap(
                  ({ items, title: collapTitle }) =>
                    items.map(({ path, title }) => (
                      <CommandItem
                        onSelect={() => onSelectCommandItem(path)}
                        className="p-3"
                      >
                        <ArrowRight />
                        <div className="flex gap-2 items-center">
                          <p>{collapTitle}</p>
                          <ChevronRight className="" />
                          <p>{title}</p>
                        </div>
                      </CommandItem>
                    )),
                )}
              </CommandGroup>
              <CommandGroup heading="Pages">
                {pages.collapsibles?.flatMap(({ items, title: collapTitle }) =>
                  items.map(({ path, title }) => (
                    <CommandItem
                      onSelect={() => onSelectCommandItem(path)}
                      className="p-3"
                    >
                      <ArrowRight />
                      <div className="flex gap-2 items-center">
                        <p>{collapTitle}</p>
                        <ChevronRight className="" />
                        <p>{title}</p>
                      </div>
                    </CommandItem>
                  )),
                )}
              </CommandGroup>
              <CommandGroup heading="Other">
                {other.collapsibles?.flatMap(({ items, title: collapTitle }) =>
                  items.map(({ path, title }) => (
                    <CommandItem
                      onSelect={() => onSelectCommandItem(path)}
                      className="p-3"
                    >
                      <ArrowRight />
                      <div className="flex gap-2 items-center">
                        <p>{collapTitle}</p>
                        <ChevronRight className="" />
                        <p>{title}</p>
                      </div>
                    </CommandItem>
                  )),
                )}
                {other.items?.map(({ title, path }) => (
                  <CommandItem
                    onSelect={() => onSelectCommandItem(path)}
                    className="p-3"
                  >
                    <ArrowRight />
                    <p>{title}</p>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Theme">
                {themeOptions.map(({ theme: theme, icon: Icon }) => (
                  <CommandItem
                    onSelect={() => onSelectCommandThemeItem(theme)}
                    className="p-3"
                  >
                    <Icon />
                    <p>{capitalizeFirstLetter(theme)}</p>
                  </CommandItem>
                ))}
              </CommandGroup>
            </ScrollArea> */}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
