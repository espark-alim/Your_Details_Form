import React from 'react'
import { extendTheme, theme as base, withDefaultColorScheme } from '@chakra-ui/react'
const theme = extendTheme({
    color: {
        brand: {
            100: "#f5fee5",
            200: "#cdf781",
            300: "#b8ee56"
        }
    },
    fonts: {
        heading: `montserrat, ${base.fonts.heading} `,
        body: "Inter"
    },
},
    withDefaultColorScheme({
        colorScheme: "brand",
    })
);
