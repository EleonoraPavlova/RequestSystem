import { ReactElement, ReactNode } from "react";

import AlertHeroui from "@/components/alert";
import NavbarHeroui from "@/components/navBar";
import ProgressHeroui from "@/components/progress";
import { useAppSelector } from "@/services/hooks";

type PageLayoutProps = {
  title: string;
  children: ReactNode;
};

export const PageLayout = ({ title, children }: PageLayoutProps): ReactElement => {
  const error = useAppSelector((state) => state.items.error);
  const isLoading = useAppSelector((state) => state.items.isLoading);
  const success = useAppSelector((state) => state.items.success);

  return (
    <>
      {isLoading && <ProgressHeroui />}
      <main className="m-6">
        <NavbarHeroui />
        <h1 className="text-[30px] font-bold mb-[20px]">{title}</h1>
        {error && <AlertHeroui title={error} color={"danger"} />}
        {success && <AlertHeroui title={"Success!"} color={"success"} />}
        {children}
      </main>
    </>
  );
};
