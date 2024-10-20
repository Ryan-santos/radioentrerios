import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { createThemes } from "tw-colors";

const colors = {
    white: {
        DEFAULT: "#FFFFFF",
        100: "#EEEEEE"
    },
    black: {
        DEFAULT: "#0E0E10",
        100: "#18181B"
    }
};

export default <Partial<Config>> {
    darkMode: "class",

    theme: {
        container: {
            center: true,
            padding: "1rem"
        },
        fontFamily: {
            sans: ["'DM Sans'", "sans-serif"]
        },
        extend: {
            screens: {
                xs: "475px"
            },
            colors: {
                primary: "#FFCB00",
                danger: "#DC2626",
                warn: "#ca8a04",
                success: "#16A34A",
                whatsapp: "#25D366",
                ...colors
            },
        }
    },

    plugins: [
        plugin(function ({ addVariant }) {
            addVariant("activated", "&.activated");
            addVariant("hovact", ["&:hover", "&:active", "&.activated"]);
        }),

        createThemes({
            light: {
                background: colors.white,
                contrast: colors.black
            },
            dark: {
                background: colors.black,
                contrast: colors.white
            }
        })
    ]
};