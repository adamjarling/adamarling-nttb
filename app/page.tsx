import Banner from "@/components/home/banner";
import Main from "@/components/Main";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adam J. Arling homepage",
};

export default async function Page() {
  return (
    <Main flushTop>
      <Banner />
    </Main>
  );
}
