"use client"


import {ThemeProvider} from "next-themes";
import {ProgressProvider} from "@bprogress/next/app";
import {ReduxProvider} from "@/lib/reduxProvider";

export function Providers({children}) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <ProgressProvider
                height="4px"
                color="#5465ff"
                options={{showSpinner: false}}
            >
                <ReduxProvider>
                    {children}
                </ReduxProvider>
            </ProgressProvider>
        </ThemeProvider>
    );
}
