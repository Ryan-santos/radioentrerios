export default defineNuxtConfig({
    modules: [
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxt/icon",
        "@nuxtjs/color-mode",
        "@nuxtjs/tailwindcss"
    ],

    ssr: false,

    app: {
        head: {
            titleTemplate: "%s %separator Rádio entre rios",

            templateParams: {
                separator: "·"
            },

            htmlAttrs: {
                lang: "pt-BR"
            },

            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon/favicon.ico" },
                { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/1.png" },
                { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/2.png" },
                { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon/3.png" },
                { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon/4.png" },
                { rel: "apple-touch-icon", type: "image/png", sizes: "180x180", href: "/favicon/apple-icon.png" }
            ]
        },

        pageTransition: {
            name: "page",
            mode: "out-in"
        },

        layoutTransition: {
            name: "layout",
            mode: "out-in"
        }
    },

    colorMode: {
        fallback: "dark",
        classSuffix: ""
    },

    compatibilityDate: "2024-04-03",

    typescript: {
        strict: true
    },

    eslint: {
        config: {
            stylistic: true
        }
    },

    fonts: {
        families: [
            { name: "DM Sans" }
        ],
        provider: "google"
    },

    icon: {
        fetchTimeout: 10000
    },

    tailwindcss: {
        exposeConfig: true
    }
});