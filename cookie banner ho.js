{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 (function() \{\
  if (localStorage.getItem("cookiesAccepted") === "true") return;\
\
  var banner = document.createElement("div");\
  banner.style.position = "fixed";\
  banner.style.bottom = "20px";\
  banner.style.left = "20px";\
  banner.style.right = "20px";\
  banner.style.backgroundColor = "#222";\
  banner.style.color = "#fff";\
  banner.style.padding = "15px";\
  banner.style.borderRadius = "8px";\
  banner.style.zIndex = "10000";\
  banner.style.textAlign = "center";\
  banner.style.fontFamily = "sans-serif";\
\
  var text = document.createElement("span");\
  text.textContent = "Usamos cookies para mejorar tu experiencia en la web. \uc0\u55356 \u57194 ";\
\
  var button = document.createElement("button");\
  button.textContent = "Aceptar";\
  button.style.marginLeft = "15px";\
  button.style.backgroundColor = "#4CAF50";\
  button.style.color = "white";\
  button.style.border = "none";\
  button.style.padding = "8px 12px";\
  button.style.borderRadius = "4px";\
  button.style.cursor = "pointer";\
\
  button.onclick = function() \{\
    localStorage.setItem("cookiesAccepted", "true");\
    banner.remove();\
  \};\
\
  banner.appendChild(text);\
  banner.appendChild(button);\
  document.body.appendChild(banner);\
\})();\
}