'use client'
import { CircularProgress } from "@mui/material"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { useContext } from "react"
import { LoadingContext } from "../context/LoadingContext"

export default function LayoutComponent({children}: {children: React.ReactNode}) {
  const { loading } = useContext(LoadingContext)

    return (
        <div className="flex flex-col">
        <Header />
        <div className="flex">
          <div className="z-0"><Sidebar /></div>
          {
            loading ?
              <div className='w-full h-full d-flex items-center justify-center'>
                <CircularProgress />
              </div>
              : <div className="p-5">{children}</div>
          }
        </div>
      </div>
    )
}