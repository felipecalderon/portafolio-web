declare global {
    interface Window {
        grecaptcha: {
            ready: (callback: () => void) => void
            execute: (siteKey: string, options: { action: string }) => Promise<string>
            render: (element: string | HTMLElement, options: any) => number
            reset: (widgetId?: number) => void
            getResponse: (widgetId?: number) => string
        }
    }
}
