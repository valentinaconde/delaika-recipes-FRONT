'use client'
import { CircularProgress, useMediaQuery } from "@mui/material"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { useContext } from "react"
import { LoadingContext } from "../context/LoadingContext"

export default function LayoutComponent({ children }: { children: React.ReactNode }) {
  const { loading } = useContext(LoadingContext)
  const isMobile = useMediaQuery('(max-width:768px)');


  return (
    <div className="flex flex-col">
      <Header />
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'}`}>
        <div className="z-0 border-r-2"><Sidebar /></div>
        {
          loading ?
            <div className='w-full h-full d-flex items-center justify-center'>
              <CircularProgress />
            </div>
            : <div className="p-3 md:p-5">{children}</div>
        }
      </div>
    </div>
  )
}