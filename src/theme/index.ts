import { extendTheme } from "@chakra-ui/react";
import '@fontsource/raleway/100.css';
import '@fontsource/raleway/200.css';
import '@fontsource/raleway/300.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/800.css';
import '@fontsource/raleway/900.css';

export const globalTheme = extendTheme({
    colors: {
        brand: {
            black: {
                100: "#0A0A0A",
                200: "#171717"
            },
            white: {
                100: "#f9f9f9",
                35: "rgba(249, 249, 249, 0.35)",
                5: "rgba(249, 249, 249, 0.05)"
            },
            green: {
                100: "#3EAC91"
            }
        }
    },
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false
    },
    fonts: {
        body: `'Raleway', sans-serif`,
        heading: `'Raleway', sans-serif`,
    }
},
)