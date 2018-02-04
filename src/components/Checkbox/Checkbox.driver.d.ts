export declare const checkboxDriverFactory: ({ element, eventTrigger }: {
    element: any;
    eventTrigger: any;
}) => {
    exists: () => boolean;
    click: () => any;
    mouseEnter: () => any;
    mouseLeave: () => any;
    getType: () => any;
    isChecked: () => boolean;
    getTextContent: () => any;
    children: () => any;
    tickmark: () => any;
    indeterminateMark: () => any;
    isIndeterminate: () => boolean;
    input: () => any;
    isDisabled: () => boolean;
    styles: {
        getMinWidth: () => string;
        getWidth: () => string;
        getHeight: () => string;
        getPadding: () => string;
        getBorderRadius: () => string;
    };
};
