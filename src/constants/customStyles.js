export const customStyles = {
    control: (styles) => ({
        ...styles,
        width: "100%",
        maxWidth: "12rem",
        minWidth: "10rem",
        borderRadius: "10px",
        color: "#0c4a6e !important",
        fontSize: "1rem",
        lineHeight: "2rem",
        backgroundColor: "#f1f5f9",
        cursor: "pointer",
        border: "none",
        display: "flex",
        alignItems: "center",
        marginTop: "2px", // Added margin-top
        ":hover": {
            boxShadow: "none",
        },
    }),
    option: (styles) => {
        return {
            ...styles,
            color: "#f1f5f9",
            fontSize: "1rem",
            lineHeight: "2rem",
            width: "100%",
            background: "#0c4a6e",
            ":hover": {
                backgroundColor: "rgb(12 74 110 / 0.8)",
                color: "#f1f5f9",
                cursor: "pointer",
            },
        };
    },
    menu: (styles) => {
        return {
            ...styles,
            backgroundColor: "#0c4a6e",
            maxWidth: "12rem",
            border: "2px solid #000000",
            borderRadius: "10px",
            boxShadow: "5px 5px 0px 0px rgba(0,0,0);",
        };
    },
    placeholder: (defaultStyles) => {
        return {
            ...defaultStyles,
            color: "#0c4a6e !important",
            fontSize: "1rem",
            lineHeight: "2rem",
        };
    },
};
