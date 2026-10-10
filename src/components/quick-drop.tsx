import { isOption } from "@/lib/utils";
import type { Option } from "@/types/common";
import { Button, Dropdown, type Key } from "@heroui/react";
import { Check } from "lucide-react";
import { useMemo } from "react";

export interface QuickDropProps {
  name: string;
  label?: string;
  value?: string;
  icon?: React.ReactNode;
  options?: Option[];
  onChange?: (value: string) => void;
}

export function QuickDrop(props: QuickDropProps) {
  const { name, label, icon, value, options = [], onChange } = props;

  const selected = useMemo(() => {
    if (value === undefined) return new Set<Key>();
    return new Set<Key>([value]);
  }, [value]);

  return (
    <Dropdown>
      <Button variant="secondary" className="rounded-md text-xs" size="sm">
        {icon}
        {options.find((o) => o.name === value)?.label ?? label ?? name}
      </Button>
      <Dropdown.Popover
        className="min-w-[256px] rounded-md"
        placement="bottom end"
      >
        <Dropdown.Menu
          selectedKeys={selected}
          selectionMode="single"
          onSelectionChange={(keys) => {
            const [key] = Array.from(keys);
            onChange?.(String(key));
          }}
        >
          {options.map((o) => (
            <Dropdown.Item
              key={o.name}
              id={o.name}
              textValue={o.label}
              className="h-auto min-h-0 p-2 rounded-md text-xs text-xs flex items-center justify-between gap-2"
            >
              {({ isSelected }) => (
                <>
                  {o.label}
                  {isSelected && <Check className="size-3.5" />}
                </>
              )}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
