'use client';
"use strict";

exports.__esModule = true;

var link_1 = require("next/link");

var button_1 = require("@/components/ui/button");

var loadertxt_1 = require("@/components/loadertxt");

function Home() {
  return React.createElement("section", {
    className: "flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-12 py-20"
  }, React.createElement("div", {
    className: "hidden lg:block"
  }), React.createElement("div", {
    className: "w-full max-w-2xl mx-auto space-y-8"
  }, React.createElement("div", {
    className: "space-y-4"
  }, React.createElement("h1", {
    className: "text-3xl sm:text-4xl font-bold"
  }, "hey, dimuth is here!"), React.createElement(loadertxt_1["default"], {
    words: ['Developer', 'Designer', 'Researcher']
  }), React.createElement("div", {
    className: "space-y-4 text-base text-muted-foreground leading-relaxed"
  }, React.createElement("p", null, "I'm a UX Engineer with a user-first mindset. I work at", ' ', React.createElement(link_1["default"], {
    href: "https://www.epictechnology.lk/",
    className: "text-foreground hover:underline"
  }, "Epic Lanka"), ". I specialize in UX/UI Designs, User Research, Product Engineering, and Serverless tech stacks."), React.createElement("p", null, "With a strong JavaScript background, I\u2019ve built dynamic, end-to-end web apps. If you'd like to hear more about my journey,", ' ', React.createElement(link_1["default"], {
    href: "/about",
    className: "text-foreground hover:underline"
  }, "click here"), "."), React.createElement("p", null, "Outside of work, I enjoy photography and traveling. I occasionally write about technical topics. Check out my", ' ', React.createElement(link_1["default"], {
    href: "/work",
    className: "text-foreground hover:underline"
  }, "work here"), "."))), React.createElement("div", {
    className: "flex flex-wrap gap-4"
  }, React.createElement(button_1.Button, {
    asChild: true
  }, React.createElement(link_1["default"], {
    href: "/work"
  }, "View My Work")), React.createElement(button_1.Button, {
    variant: "outline",
    asChild: true
  }, React.createElement(link_1["default"], {
    href: "/contact"
  }, "Get In Touch")))), React.createElement("div", {
    className: "hidden lg:block"
  }));
}

exports["default"] = Home;