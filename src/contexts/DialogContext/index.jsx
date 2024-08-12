import React, { useContext, useState } from "react";

const DialogContext = React.createContext(null);

export default function DialogProvider(props) {
    const [dialog, setDialog] = useState(false);
    const [state, setState] = useState({});

    const context = {
        functions: props.functions instanceof Function ? props.functions(state, setState) : {},
        close: () => setDialog(false),
        open: () => setDialog(true),
        toggle: () => setDialog(!dialog),
        dialog,
        state
    }

    return (
        <>
            {dialog &&
                <DialogContext.Provider value={context}>
                    {props.children}
                </DialogContext.Provider>}
            {props.button && React.cloneElement(props.button, { onClick: context.open })}
        </>
    );
}

export const useDialogContext = () => useContext(DialogContext);