import Header from "./landing/header";
import ComponentList from "./landing/componentList";
import { HomePageProps } from "@/types/page";

export default async function Home({ searchParams }: HomePageProps) {
  const awaitedSearchParams = await searchParams;
  const searchQuery = awaitedSearchParams?.search || "";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-blue-950">
      <Header />
      <ComponentList searchQuery={searchQuery} />
    </div>
  );
}