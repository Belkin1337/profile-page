import { useState } from "react";

import {
  Command,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface ChangerProps {
  list: any,
  translateItem: () => void;
}

const Changer: React.FC<ChangerProps> = ({ list, translateItem }) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="text-[1.08rem] text-MAIN_PINK font-medium flex justify-between py-2 px-6 items-center
            hover:bg-LIGHT_BACKGROUND dark:hover:bg-MAIN_BACKGROUND hover:transition hover:duration-100 transition duration-100
          ">
          {value ? list.find((item: any) => item.value === value)?.label : translateItem()}
        </div>
      </PopoverTrigger>
      <PopoverContent className="max-w-[200px] p-1">
        <Command>
          <CommandGroup>
            {list.map((item: any) => (
              <div key={item.value} onClick={item.onClick}>
                <CommandItem
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {item.label}
                </CommandItem>
              </div>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default Changer;