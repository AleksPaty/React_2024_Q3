import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function ErrorPage() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h1>{error.status}</h1>
                <p>{error.statusText}</p>
            </div>
        )
    } else if(error instanceof Error) {
        return (
            <div>
                <h1>Oops! Unexpected Error</h1>
                <p>{error.message}</p>
            </div>
        )
    } else {
        return <></>
    }
}