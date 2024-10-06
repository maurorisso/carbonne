import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex px-20 py-10 ">
      <Sidebar />
      <div className="  flex-1">{children}</div>
    </div>
  );
}
