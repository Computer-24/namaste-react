export const Error = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h1>Opps... Something went wrong =(</h1>
            <h2>{error?.error?.message}</h2>
        </div>

    )
}

import {useRouteError} from "react-router-dom";
