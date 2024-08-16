'use client'
import * as React from 'react';
import { useState } from 'react';
import { LoadingContext } from './LoadingContext';

export default function LoadingProvider({children}: {children: React.ReactNode}) {

    const [loading, setLoading] = useState(false)

    const handleSetLoading = (loading: boolean) => {
        setLoading(loading)
    }

    return (
        <LoadingContext.Provider value={{ loading, handleSetLoading }}>{children}</LoadingContext.Provider>
    )

}
