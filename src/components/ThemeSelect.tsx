import { THEMES, type Theme, useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/shadcnui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/shadcnui/dropdown-menu";

export function ThemeSelect() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button
            type="button"
            className="capitalize hover:text-foreground hover:underline focus-visible:text-foreground focus-visible:underline">
            {theme} Theme
          </button>
        }
      />
      <DropdownMenuContent className="rounded-none">
        <DropdownMenuRadioGroup value={theme} onValueChange={(value) => setTheme(value as Theme)}>
          {THEMES.map((themeOption) => (
            <DropdownMenuRadioItem key={themeOption} value={themeOption} className="rounded-none capitalize">
              {themeOption}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
