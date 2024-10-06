import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen flex bg-zinc-900 ">
      <Sidebar />
      <div className="flex-1 ml-14 ">{children}</div>
    </div>
  );
}
