'use client'
import LoadingProvider from "../../context/LoadingProvider"
import LayoutAdminComponent from "./layoutComponent"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <LoadingProvider>
      <LayoutAdminComponent>{children}</LayoutAdminComponent>
    </LoadingProvider>
  )
}