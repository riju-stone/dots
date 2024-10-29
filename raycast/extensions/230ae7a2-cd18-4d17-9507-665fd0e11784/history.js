"use strict";var v=Object.defineProperty;var M=Object.getOwnPropertyDescriptor;var G=Object.getOwnPropertyNames;var Q=Object.prototype.hasOwnProperty;var U=(e,t)=>{for(var i in t)v(e,i,{get:t[i],enumerable:!0})},Y=(e,t,i,S)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of G(t))!Q.call(e,s)&&s!==i&&v(e,s,{get:()=>t[s],enumerable:!(S=M(t,s))||S.enumerable});return e};var $=e=>Y(v({},"__esModule",{value:!0}),e);var z={};U(z,{default:()=>B});module.exports=$(z);var p=require("@raycast/api"),L=require("react");var r=require("@raycast/api"),g=require("react/jsx-runtime");var P=e=>(0,g.jsx)(r.Action.CopyToClipboard,{icon:r.Icon.CopyClipboard,...e}),I=({onAction:e})=>(0,g.jsx)(r.Action,{icon:r.Icon.Star,title:"Save Answer",onAction:e,shortcut:{modifiers:["cmd"],key:"s"}}),H=({text:e,name:t})=>(0,g.jsx)(r.Action.CreateSnippet,{icon:r.Icon.Snippets,title:"Save as a Snippet",snippet:{text:e,name:t},shortcut:{modifiers:["cmd"],key:"n"}}),x=({icon:e=r.Icon.Trash,title:t,dialog:i,onAction:S,shortcut:s={modifiers:["cmd"],key:"d"}})=>(0,g.jsx)(r.Action,{style:r.Action.Style.Destructive,icon:e,title:t,onAction:async()=>{await(0,r.confirmAlert)({title:i.title??t,message:i.message??"This action cannot be undone",icon:e,primaryAction:{title:i.primaryButton??t,style:r.Alert.ActionStyle.Destructive,onAction:S}})},shortcut:s});var T=require("@raycast/api");var C=require("react/jsx-runtime"),b=({question:e,answer:t})=>(0,C.jsxs)(T.ActionPanel.Section,{title:"Copy",children:[(0,C.jsx)(P,{title:"Copy Answer",content:t}),(0,C.jsx)(P,{title:"Copy Question",content:e})]});var u=require("@raycast/api"),D=require("react/jsx-runtime"),k=()=>(0,D.jsx)(u.ActionPanel.Section,{title:"Preferences",children:(0,D.jsx)(u.Action,{icon:u.Icon.Gear,title:"Open Extension Preferences",onAction:u.openExtensionPreferences})});var q=require("@raycast/api");var w=require("react/jsx-runtime"),O=({onSaveAnswerAction:e,snippet:t})=>(0,w.jsxs)(q.ActionPanel.Section,{title:"Save",children:[(0,w.jsx)(I,{onAction:e}),t&&(0,w.jsx)(H,{text:t.text,name:t.name})]});var y=require("@raycast/api"),d=require("react");function E(){let[e,t]=(0,d.useState)([]),[i,S]=(0,d.useState)(!0);(0,d.useEffect)(()=>{(async()=>{let n=await y.LocalStorage.getItem("history");n&&(t(a=>[...a,...JSON.parse(n)]),S(!1))})()},[]),(0,d.useEffect)(()=>{y.LocalStorage.setItem("history",JSON.stringify(e))},[e]);let s=(0,d.useCallback)(async n=>{t([...e,n])},[t,e]),A=(0,d.useCallback)(async n=>{let a=await(0,y.showToast)({title:"Removing answer...",style:y.Toast.Style.Animated}),o=e.filter(h=>h.id!==n.id);t(o),a.title="Answer removed!",a.style=y.Toast.Style.Success},[t,e]),f=(0,d.useCallback)(async()=>{let n=await(0,y.showToast)({title:"Clearing history...",style:y.Toast.Style.Animated});t([]),n.title="History cleared!",n.style=y.Toast.Style.Success},[t]);return(0,d.useMemo)(()=>({data:e,isLoading:i,add:s,remove:A,clear:f}),[e,i,s,A,f])}var l=require("@raycast/api"),m=require("react");function N(){let[e,t]=(0,m.useState)([]),[i,S]=(0,m.useState)(!0);(0,m.useEffect)(()=>{(async()=>{let n=await l.LocalStorage.getItem("savedChats");n&&(t(a=>[...a,...JSON.parse(n)]),S(!1))})()},[]),(0,m.useEffect)(()=>{l.LocalStorage.setItem("savedChats",JSON.stringify(e))},[e]);let s=(0,m.useCallback)(async n=>{let a=await(0,l.showToast)({title:"Saving your answer...",style:l.Toast.Style.Animated}),o={...n,saved_at:new Date().toISOString()};t([...e,o]),a.title="Answer saved!",a.style=l.Toast.Style.Success},[t,e]),A=(0,m.useCallback)(async n=>{let a=await(0,l.showToast)({title:"Unsaving your answer...",style:l.Toast.Style.Animated}),o=e.filter(h=>h.id!==n.id);t(o),a.title="Answer unsaved!",a.style=l.Toast.Style.Success},[t,e]),f=(0,m.useCallback)(async()=>{let n=await(0,l.showToast)({title:"Clearing your saved answers...",style:l.Toast.Style.Animated});t([]),n.title="Saved answers cleared!",n.style=l.Toast.Style.Success},[t]);return(0,m.useMemo)(()=>({data:e,isLoading:i,add:s,remove:A,clear:f}),[e,i,s,A,f])}var J=require("@raycast/api"),_=require("react/jsx-runtime"),R=e=>{let{chat:t,streamData:i}=e,s=`${i&&i.id===t.id?i?.answer:t.answer}`;return(0,_.jsx)(J.List.Item.Detail,{markdown:s})};var c=require("react/jsx-runtime");function B(){let e=N(),t=E(),[i,S]=(0,L.useState)(""),[s,A]=(0,L.useState)(null),f=o=>(0,c.jsxs)(p.ActionPanel,{children:[(0,c.jsx)(b,{answer:o.answer,question:o.question}),(0,c.jsx)(O,{onSaveAnswerAction:()=>e.add(o)}),(0,c.jsx)(p.ActionPanel.Section,{title:"Output"}),(0,c.jsxs)(p.ActionPanel.Section,{title:"Delete",children:[(0,c.jsx)(x,{title:"Remove",dialog:{title:"Are you sure you want to remove this answer from your history?"},onAction:()=>t.remove(o)}),(0,c.jsx)(x,{title:"Clear History",dialog:{title:"Are you sure you want to clear your history?"},onAction:()=>t.clear(),shortcut:{modifiers:["cmd","shift"],key:"delete"}})]}),(0,c.jsx)(k,{})]}),a=t.data.sort((o,h)=>new Date(h.created_at??0).getTime()-new Date(o.created_at??0).getTime()).filter((o,h,V)=>h===V.findIndex(K=>K.id===o.id)).filter(o=>i===""?!0:o.question.toLowerCase().includes(i.toLowerCase())||o.answer.toLowerCase().includes(i.toLowerCase()));return(0,c.jsx)(p.List,{isShowingDetail:a.length!==0,isLoading:t.isLoading,filtering:!1,throttle:!1,navigationTitle:"History",selectedItemId:s||void 0,onSelectionChange:o=>{o!==s&&A(o)},searchBarPlaceholder:"Search answer/question...",searchText:i,onSearchTextChange:S,children:t.data.length===0?(0,c.jsx)(p.List.EmptyView,{title:"No history",description:"Your recent questions will be showed up here",icon:p.Icon.Stars}):(0,c.jsx)(p.List.Section,{title:"Recent",subtitle:a.length.toLocaleString(),children:a.map(o=>(0,c.jsx)(p.List.Item,{id:o.id,title:o.question,accessories:[{text:new Date(o.created_at??0).toLocaleDateString()}],detail:(0,c.jsx)(R,{chat:o}),actions:o&&s===o.id?f(o):void 0},o.id))})})}
