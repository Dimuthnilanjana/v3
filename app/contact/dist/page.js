"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var button_1 = require("@/components/ui/button");
var card_1 = require("@/components/ui/card");
function Contact() {
    var _this = this;
    var _a = react_1.useState(false), copied = _a[0], setCopied = _a[1];
    var email = "dimuth.works@gmail.com";
    var copyEmail = function () { return __awaiter(_this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, navigator.clipboard.writeText(email)];
                case 1:
                    _a.sent();
                    setCopied(true);
                    setTimeout(function () { return setCopied(false); }, 2000);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error("Failed to copy email:", err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("section", { className: "flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-12 py-20" },
        React.createElement("div", { className: "hidden lg:block" }),
        React.createElement("div", { className: "w-full max-w-3xl mx-auto space-y-12" },
            React.createElement("div", { className: "space-y-4" },
                React.createElement("h1", { className: "text-2xl font-bold" }, "Contact"),
                React.createElement("p", { className: "text-muted-foreground max-w-2xl leading-relaxed" }, "I'm always interested in hearing about new opportunities and interesting projects. Let's connect and discuss how we can work together.")),
            React.createElement("div", { className: "grid grid-cols-1 gap-8" },
                React.createElement(card_1.Card, { className: "group hover:shadow-lg transition-shadow" },
                    React.createElement(card_1.CardContent, { className: "p-6 space-y-4" },
                        React.createElement("div", { className: "flex items-center space-x-3" },
                            React.createElement("div", { className: "p-2 bg-blue-500/10 rounded-lg" },
                                React.createElement(lucide_react_1.Mail, { className: "h-5 w-5 text-blue-500" })),
                            React.createElement("div", null,
                                React.createElement("h3", { className: "font-semibold" }, "Email Me"),
                                React.createElement("p", { className: "text-sm text-muted-foreground" }, "Send me a message directly"))),
                        React.createElement("div", { className: "space-y-3" },
                            React.createElement("div", { className: "p-3 bg-muted/50 rounded-lg" },
                                React.createElement("p", { className: "font-mono text-sm" }, email)),
                            React.createElement("div", { className: "flex space-x-2" },
                                React.createElement(button_1.Button, { onClick: copyEmail, variant: "outline", size: "sm", className: "flex-1" }, copied ? (React.createElement(React.Fragment, null,
                                    React.createElement(lucide_react_1.Check, { className: "h-4 w-4 mr-2" }),
                                    "Copied!")) : (React.createElement(React.Fragment, null,
                                    React.createElement(lucide_react_1.Copy, { className: "h-4 w-4 mr-2" }),
                                    "Copy Email"))),
                                React.createElement(button_1.Button, { asChild: true, size: "sm", className: "flex-1" },
                                    React.createElement("a", { href: "mailto:" + email },
                                        React.createElement(lucide_react_1.Mail, { className: "h-4 w-4 mr-2" }),
                                        "Send Email")))))),
                React.createElement(card_1.Card, { className: "group hover:shadow-lg transition-shadow" },
                    React.createElement(card_1.CardContent, { className: "p-6 space-y-4" },
                        React.createElement("div", { className: "flex items-center space-x-3" },
                            React.createElement("div", { className: "p-2 bg-green-500/10 rounded-lg" },
                                React.createElement(lucide_react_1.Calendar, { className: "h-5 w-5 text-green-500" })),
                            React.createElement("div", null,
                                React.createElement("h3", { className: "font-semibold" }, "Schedule a Call"),
                                React.createElement("p", { className: "text-sm text-muted-foreground" }, "Book a time that works for you"))),
                        React.createElement("div", { className: "space-y-3" },
                            React.createElement("p", { className: "text-sm text-muted-foreground" }, "Available for 30-minute calls to discuss projects, opportunities, or just to chat about technology and development."),
                            React.createElement(button_1.Button, { asChild: true, size: "sm", className: "w-full" },
                                React.createElement("a", { href: "https://cal.com/dimuth", target: "_blank", rel: "noopener noreferrer" },
                                    React.createElement(lucide_react_1.Calendar, { className: "h-4 w-4 mr-2" }),
                                    "Book a Call")))))),
            React.createElement("div", { className: "text-center space-y-4" },
                React.createElement("div", { className: "space-y-3" },
                    React.createElement("h2", { className: "text-lg font-medium" }, "Let's Build Something Amazing"),
                    React.createElement("p", { className: "text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed" }, "Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. I typically respond within 24 hours.")))),
        React.createElement("div", { className: "hidden lg:block" })));
}
exports["default"] = Contact;
