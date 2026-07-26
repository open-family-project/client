import {Children, ReactNode} from "react";

type DrawerProps = {
    children: ReactNode;
    drawerId?: string;
    sidebarCenter?: ReactNode;
    sidebarBottom?: ReactNode;
};

function renderMenuItems(content?: ReactNode) {
    if (!content) return null;

    return Children.map(content, (child) => {
        if (child == null) return null;

        if (
            typeof child === "object" &&
            "type" in child &&
            child.type === "li"
        ) {
            return child;
        }

        return <li>{child}</li>;
    });
}

export default function Drawer({children, drawerId = "my-drawer-2", sidebarCenter, sidebarBottom}: DrawerProps) {
    return (
        <div className="drawer lg:drawer-open">
            <input
                id={drawerId}
                type="checkbox"
                className="drawer-toggle"
            />

            <div className="drawer-content">
                {children}
            </div>

            <div className="drawer-side">
                <label htmlFor={drawerId} className="drawer-overlay"/>

                <div className="flex h-full flex-col bg-base-200 text-base-content">
                    <ul className="menu flex-1 w-80 overflow-y-auto p-4">
                        {renderMenuItems(sidebarCenter)}
                    </ul>

                    {sidebarBottom && (
                        <ul className="menu flex-none w-80 p-4">
                            {renderMenuItems(sidebarBottom)}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}