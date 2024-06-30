import React from "react";
import { Greeting } from "tuanhuydev-test-package";
const RemoteApp = React.lazy(() => import("app1/App"));

const AppShell = () => {
    return (
        <div>
            <h1>App Shell</h1>
            <Greeting name="tuanhuydev" />
            <React.Suspense fallback="Loading Remote App">
                <RemoteApp />
            </React.Suspense>
        </div>
    );
}

export default AppShell;