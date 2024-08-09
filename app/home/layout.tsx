import Header from "../components/Header"
import Sidebar from "../components/Sidebar"


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <div className="z-0"><Sidebar /></div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  )
}