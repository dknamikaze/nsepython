(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{365:function(t,e,s){"use strict";s.r(e);var a=s(44),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"welcome"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#welcome"}},[t._v("#")]),t._v(" Welcome")]),t._v(" "),s("p",[t._v("NSEPython is a Python library to get publicly available data on NSE website ie. stock quotes, historical data, live indices, etc.\nThanks for using NSEPython 🙂. Let's get you up and running.")]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("To use it, open up your terminal in the desired directory and run the following command:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nsepython\n")])])]),s("h3",{attrs:{id:"notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),s("ul",[s("li",[t._v("If You’ve other doubts, Ask at "),s("a",{attrs:{href:"https://forum.unofficed.com/c/programming/nse-python-api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NSEPython Doubts and Discussions"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("If You’ve feature requests, Ask at "),s("a",{attrs:{href:"https://forum.unofficed.com/t/nsepython-discussion-and-feature-request/665",target:"_blank",rel:"noopener noreferrer"}},[t._v("NSEPython Discussion and Feature Request"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("To upgrade the program to its latest version, run the following command:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --upgrade nsepython\n")])])]),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started "),s("Badge",{attrs:{text:"Fast"}})],1),t._v(" "),s("p",[t._v("To Initialize, You need to do "),s("code",[t._v("from nsepython import *")])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("p",[t._v("Fetching the Indices of NSE")]),t._v(" "),s("p",[s("strong",[t._v("Input")])]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" nsepython "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("   \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("indices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Output")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NIFTY'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FINNIFTY'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BANKNIFTY'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"unofficed-session-tutorials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unofficed-session-tutorials"}},[t._v("#")]),t._v(" Unofficed Session Tutorials "),s("Badge",{attrs:{text:"Youtube",type:"warning"}})],1),t._v(" "),s("p",[t._v("If You have never used Python, Jupyter and are beginner stumbling into this project, Go through this link "),s("RouterLink",{attrs:{to:"/guide/unofficed.com/quant-session/"}},[t._v("Basics of NSEPython Using Python and Jupyter")]),t._v(".")],1),t._v(" "),s("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/gFvoL1jiq4w",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),t._v(" "),s("h2",{attrs:{id:"google-cloud-aws-servers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google-cloud-aws-servers"}},[t._v("#")]),t._v(" Google Cloud, AWS, Servers "),s("Badge",{attrs:{text:"Common Problem",type:"error"}})],1),t._v(" "),s("p",[t._v("This current version of scrapper does not work with AWS, Google Cloud and web servers. It is not a problem of Python Request. Nse’s robots.txt has blocked all webservers all together. See here "),s("a",{attrs:{href:"https://www.nseindia.com/robots.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("NSE Robots Txt"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("User-agent: *\n\nDisallow: /static/htmls/\nDisallow: /static/src/\nDisallow: /server/\nDisallow: /api/\n\nSitemap: https://www.nseindia.com/sitemap.xml\nSitemap: https://www.nseindia.com/sitemap-stocks.xml\n")])])]),s("p",[t._v("You can use the curl method and initiate shell commands using Python if you want to do it.")]),t._v(" "),s("p",[t._v("I do not plan to add Curl Method in the library unless I see some other library doing it because - That will increase the load in NSE servers and they will guard up their firewalls causing lots of problems for general scavengers like us like they did with their old website.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("ul",[s("li",[t._v("If I make NSEPython compatible for servers, it "),s("strong",[t._v("will not")]),t._v(" work in windows laptops.")]),t._v(" "),s("li",[t._v("If I make NSEPython compatible for laptops, it "),s("strong",[t._v("will not")]),t._v(" work in server.")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);