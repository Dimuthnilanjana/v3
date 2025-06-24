"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("../../app/globals.css");
var theme_provider_1 = require("@/components/theme-provider");
var navigation_1 = require("@/components/navigation");
var footer_1 = require("@/components/footer");
var inter = google_1.Inter({ subsets: ["latin"] });
exports.metadata = {
    title: "Dimuth Nilanjana - UX Engineer",
    description: "Portfolio of Dimuth Nilanjana, a user experience engineer specializing in modern solutions."
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en", suppressHydrationWarning: true },
        React.createElement("body", { className: inter.className },
            React.createElement(theme_provider_1.ThemeProvider, { attribute: "class", defaultTheme: "dark", enableSystem: true, disableTransitionOnChange: true },
                React.createElement("div", { className: "flex min-h-screen flex-col bg-background text-foreground" },
                    React.createElement(navigation_1.Navigation, null),
                    React.createElement("main", { className: "flex-1 flex flex-col" }, children),
                    React.createElement(footer_1.Footer, null))))));
}
exports["default"] = RootLayout;
