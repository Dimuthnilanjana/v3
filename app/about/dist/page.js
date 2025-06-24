"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var tech_stack_1 = require("@/components/tech-stack");
function About() {
    var experiences = [
        {
            company: "TechCorp",
            position: "Senior Software Engineer",
            period: "2022 - Present",
            current: true
        },
        {
            company: "StartupXYZ",
            position: "Full Stack Developer",
            period: "2020 - 2022",
            current: false
        },
        {
            company: "WebAgency",
            position: "Frontend Developer",
            period: "2018 - 2020",
            current: false
        },
    ];
    return (React.createElement("section", { className: "flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-12 py-20" },
        React.createElement("div", { className: "hidden lg:block" }),
        React.createElement("div", { className: "w-full max-w-3xl mx-auto space-y-12" },
            React.createElement("div", { className: "space-y-4" },
                React.createElement("h1", { className: "text-2xl font-bold" }, "about")),
            React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl" }, [1, 2, 3, 4].map(function (n) { return (React.createElement("div", { key: n, className: "aspect-square rounded-lg overflow-hidden" },
                React.createElement(image_1["default"], { src: "/placeholder.svg?height=150&width=150", alt: "Photography " + n, width: 150, height: 150, className: "w-full h-full object-cover" }))); })),
            React.createElement("div", { className: "grid lg:grid-cols-2 gap-12" },
                React.createElement("div", { className: "space-y-6" },
                    React.createElement("div", { className: "space-y-4" },
                        React.createElement("p", { className: "text-muted-foreground leading-relaxed" }, "I've been working as a software engineer, specializing in full-stack development and design, for 4+ years now."),
                        React.createElement("p", { className: "text-muted-foreground leading-relaxed" }, "I specialize in React, Node, AWS, Serverless, web development, UI/UX, and product design. But I'm always learning new things. Here are the places I've worked and technologies I've explored.")),
                    React.createElement("div", { className: "space-y-4" }, experiences.map(function (exp, index) { return (React.createElement("div", { key: index, className: "flex items-start space-x-3" },
                        React.createElement("div", { className: "flex flex-col items-center" },
                            React.createElement("div", { className: "w-2 h-2 rounded-full mt-2 " + (exp.current ? "bg-green-500" : "bg-muted") }),
                            index < experiences.length - 1 && React.createElement("div", { className: "w-px h-12 bg-border mt-1" })),
                        React.createElement("div", { className: "space-y-1 flex-1" },
                            React.createElement("div", { className: "flex items-center space-x-2" },
                                React.createElement("h3", { className: "font-medium text-sm" }, exp.company),
                                exp.current && (React.createElement("span", { className: "text-xs bg-green-500/20 text-green-500 px-1.5 py-0.5 rounded-full" }, "\u25CF"))),
                            React.createElement("p", { className: "text-xs text-muted-foreground" }, exp.position),
                            React.createElement("p", { className: "text-xs text-muted-foreground" }, exp.period)))); }))),
                React.createElement("div", { className: "space-y-6" },
                    React.createElement("div", { className: "gradient-border" },
                        React.createElement("div", { className: "gradient-border-inner" },
                            React.createElement(tech_stack_1.TechStack, null))))),
            React.createElement("div", { className: "space-y-6" },
                React.createElement("h2", { className: "text-xl font-medium" }, "Throwbacks..."),
                React.createElement("div", { className: "grid md:grid-cols-2 gap-6" }, [1, 2].map(function (n) { return (React.createElement("div", { key: n, className: "space-y-3" },
                    React.createElement("div", { className: "aspect-video rounded-lg overflow-hidden" },
                        React.createElement(image_1["default"], { src: "/placeholder.svg?height=200&width=300", alt: "Throwback " + n, width: 300, height: 200, className: "w-full h-full object-cover grayscale" })),
                    React.createElement("div", { className: "space-y-1" },
                        React.createElement("p", { className: "text-xs text-muted-foreground" }, n === 1 ? "University days, LK" : "Graduation Ceremony"),
                        React.createElement("p", { className: "text-xs text-muted-foreground" }, n === 1 ? "#dreamteam #coastalbeauty #tropical" : "#graduation #achievement #milestone")))); })))),
        React.createElement("div", { className: "hidden lg:block" })));
}
exports["default"] = About;
