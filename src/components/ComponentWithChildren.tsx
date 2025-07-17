import type { ReactNode } from "react";

function ComponentWithChildren({ children }: { children: ReactNode | ReactNode[] }) {
    return (<div style={{ background: "2px dotted black" }}>
        {children}
    </div>);
}

export default ComponentWithChildren;