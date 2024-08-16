import { createContext } from "react";


interface LoadingContextProps {
    loading: boolean;
    handleSetLoading: (loading: boolean) => void;
}

export const LoadingContext = createContext({} as LoadingContextProps);


