(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[851],{46526:function(e,t,s){Promise.resolve().then(s.bind(s,28691))},28691:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return o}});var i=s(57437),a=s(2265),l=s(66648),n=s(16463),d=e=>{let{items:t}=e,s=(0,n.useRouter)(),a=e=>{s.push("/mobile/information/detail?id=".concat(encodeURIComponent(e)))};return(0,i.jsx)("div",{className:"overflow-y-auto",children:t.map((e,t)=>(0,i.jsxs)("div",{onClick:()=>a(e.id),className:"relative m-4 bg-white rounded-[30px] overflow-hidden",children:[(0,i.jsx)("div",{className:"relative w-full h-[220px] pb-[50%]",children:(0,i.jsx)(l.default,{src:e.images[0],alt:"".concat(e.header," image"),fill:!0,style:{objectFit:"cover"},className:"absolute inset-0",priority:!0})}),(0,i.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-30"}),(0,i.jsxs)("div",{className:"p-4 absolute bottom-0 left-0 right-0",children:[(0,i.jsx)("h2",{className:"text-white text-xl font-bold",children:e.header}),(0,i.jsx)("div",{className:"flex justify-end items-end",children:(0,i.jsx)("button",{className:"mt-2 bg-[#AF88FF] text-white py-1 px-3 rounded-2xl",children:"อ่านต่อ"})})]})]},e.id))})},c=s(38472);let r=async(e,t)=>{try{let t=await c.Z.get("https://city.planetcloud.cloud/citybackend/lineoa/information");e(t.data)}catch(e){console.error("Error fetching data:",e)}finally{t(!1)}};var o=()=>{let[e,t]=(0,a.useState)([]),[s,l]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{r(t,l)},[]),(0,i.jsxs)("div",{className:"min-h-screen",children:[(0,i.jsx)("div",{className:"z-10 fixed top-0 left-0 right-0 py-2 bg-[#AF88FF] flex justify-center items-center h-12",children:(0,i.jsx)("div",{className:"text-white text-center",children:(0,i.jsx)("span",{children:"Information"})})}),(0,i.jsx)("div",{className:"pt-16",children:s?(0,i.jsx)("div",{className:"flex flex-col space-y-4",children:[void 0,void 0,void 0,void 0,void 0].map((e,t)=>(0,i.jsxs)("div",{className:"relative m-4 bg-gray-300 rounded-[30px] overflow-hidden animate-pulse",children:[(0,i.jsx)("div",{className:"relative w-full h-[220px] bg-gray-400"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-30"}),(0,i.jsxs)("div",{className:"p-4 absolute bottom-0 left-0 right-0",children:[(0,i.jsx)("h2",{className:"text-white text-xl font-bold bg-gray-500 rounded-md h-6 w-3/4 mb-2"}),(0,i.jsx)("div",{className:"flex justify-end items-end",children:(0,i.jsx)("div",{className:"mt-2 bg-gray-500 rounded-2xl h-8 w-20"})})]})]},t))}):(0,i.jsx)(d,{items:e})})]})}}},function(e){e.O(0,[236,648,971,23,744],function(){return e(e.s=46526)}),_N_E=e.O()}]);