import { QuickDrop } from "@/components/quick-drop";
import { isOption } from "@/lib/utils";
import type { Action } from "@/store";
import type { IndexCtrl as Ctrl } from "@/store/artifacts.slice";
import { ArrowUpDown } from "lucide-react";

export interface HeaderProps {
  ctrl?: Ctrl;
  setCtrl?: (value: Action<Ctrl>) => void;
}

export function Header(props: HeaderProps) {
  const { ctrl, setCtrl } = props;

  return (
    <div className="flex justify-between">
      <div></div>
      <QuickDrop
        name="sort"
        label="Sort"
        icon={<ArrowUpDown />}
        options={[
          { name: "name", label: "A-Z" },
          { name: "height", label: "Height" },
          { name: "age", label: "Age" },
        ]}
        value={ctrl?.sort}
        onChange={(value) =>
          setCtrl?.((prev) => ({
            ...prev,
            sort: value,
          }))
        }
      />
    </div>
  );
}
