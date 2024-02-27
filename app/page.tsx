import HomePage from "./home-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adam J. Arling homepage",
};

export default async function Page() {
  return <HomePage />;
}
