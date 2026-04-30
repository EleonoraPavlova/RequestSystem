import { useT } from "talkr";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";

import { languages } from "@/components/lang-switcher/lang-switcher.const";
import Button from "@/components/button";

const LanguageSwitcher = () => {
  const { locale, setLocale } = useT();

  const currentLang = languages.find((lang) => lang.code === locale) || languages[0];

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="ghost" className="flex items-center gap-2 px-3">
          <span className="m-2">{currentLang.flag}</span>
          <span className="hidden sm:inline">{currentLang.name}</span>
        </Button>
      </DropdownTrigger>

      <DropdownMenu aria-label="Language selection" onAction={(key) => setLocale(key as string)}>
        {languages.map((lang) => (
          <DropdownItem key={lang.code} className="flex items-center gap-3 py-2">
            <span className="m-3">{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LanguageSwitcher;
