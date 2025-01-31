import { AlertCircle } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { memo } from "react"
const ErrorAlert = memo(({ error }: { error: string | undefined }) => {
    return (
        <Alert variant="destructive" className='z-20 absolute w-1/2 h-20 top-2 bg-red-500 text-white font-thin left-0 right-0 mx-auto'>
            <AlertCircle className="h-4 w-4" color='#ffffff' />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                {error}
            </AlertDescription>
        </Alert>
    )
}
)

ErrorAlert.displayName = "ErrorAlert"

export default ErrorAlert
