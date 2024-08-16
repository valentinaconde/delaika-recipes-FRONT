'use client'
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import LoadingProvider from "../context/LoadingProvider"
import LayoutComponent from "./layoutComponent"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <LoadingProvider>
      <LayoutComponent>{children}</LayoutComponent>
    </LoadingProvider>
  )
}