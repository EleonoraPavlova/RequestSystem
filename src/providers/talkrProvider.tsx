import { Talkr } from "talkr";
import { ReactNode } from "react";

import { getSavedLocale } from "@/shared/lib/locale";
import uk from "@/locales/uk.json";
import en from "@/locales/en.json";

export const TalkrProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Talkr languages={{ uk, en }} defaultLanguage={getSavedLocale("en")}>
      {children}
    </Talkr>
  );
};
