import "talkr";
import uk from "./uk.json";
import en from "./en.json";

export type Translations = typeof uk & typeof en;

declare module "talkr" {
  interface UseT {
    t: (key: keyof Translations | (string & {}), params?: any) => string;
  }

  export function useT(): UseT;
}
