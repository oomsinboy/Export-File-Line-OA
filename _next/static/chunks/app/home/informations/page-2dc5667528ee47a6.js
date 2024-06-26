(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[960],{2373:function(e,s,t){Promise.resolve().then(t.bind(t,8225))},8225:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return f}});var l=t(7437),n=t(6504),i=t(2265),c=t(6648),a=t(4379),o=t.n(a),d=t(461),r=t(357),x=e=>{let{isVisible:s,onClose:t,title:n,children:i}=e;return s?(0,l.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center",children:(0,l.jsx)("div",{className:"w-[80%] animate-modalOpen",children:(0,l.jsxs)("div",{className:"bg-white p-3 rounded",children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsx)("span",{className:"text-2xl text-[#5955B3] font-semibold ",children:n}),(0,l.jsx)("button",{onClick:()=>t(),children:(0,l.jsx)(c.default,{src:"".concat(r.env.NEXT_PUBLIC_BASEPAHT,"/image/icon_close.png"),alt:"logo",width:30,height:30})})]}),i]})})}):null},h=t(357),m=e=>{let{items:s}=e,[t,n]=(0,i.useState)(s),[a,r]=(0,i.useState)(!1),m=(0,i.useRef)(null);(0,i.useEffect)(()=>{n(s)},[s]);let u=e=>{o().fire({title:"ยืนยันการลบข้อมูล",text:"คุณกำลังลบข้อมูล ต้องการดำเนินการต่อหรือไม่ ?",icon:"warning",showCancelButton:!0,cancelButtonText:"ยกเลิก",confirmButtonText:"ยืนยัน",reverseButtons:!1,customClass:{icon:"custom-swal2-warning"}}).then(e=>{e.isConfirmed&&o().fire({title:"สำเร็จ",text:"คุณได้ทำรายการเรียบร้อยแล้ว",icon:"success",confirmButtonText:"ปิด"})})};return(0,l.jsx)("div",{className:"px-8",children:(0,l.jsxs)("div",{className:"h-full w-full rounded-[15px] bg-white p-5 ",children:[(0,l.jsxs)("div",{className:"min-h-[81.71dvh] flex flex-col",children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"text-2xl text-[#5955B3] font-semibold ",children:"บทความ"}),(0,l.jsxs)("div",{className:"text-[#705396]",children:["ทั้งหมด ",s.length," รายการ"]})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("button",{onClick:()=>r(!0),className:"relative text-white w-40 font-light bg-[#AF88FF] btn btn-active",children:[(0,l.jsx)(c.default,{className:"absolute left-4",src:"".concat(h.env.NEXT_PUBLIC_BASEPAHT,"/image/icon_plus.png"),alt:"logo",width:20,height:20}),"Add New"]}),(0,l.jsx)("dialog",{className:"modal",ref:m,children:(0,l.jsxs)("div",{className:"modal-box w-11/12 max-w-5xl",children:[(0,l.jsx)("h3",{className:"font-bold text-lg",children:"Hello!"}),(0,l.jsx)("p",{className:"py-4",children:"Click the button below to close"}),(0,l.jsx)("div",{className:"modal-action",children:(0,l.jsx)("form",{method:"dialog",children:(0,l.jsx)("button",{className:"btn",children:"Close"})})})]})})]})]}),(0,l.jsx)("div",{className:"pt-4 flex-grow",children:(0,l.jsx)("div",{className:"flex flex-wrap -mx-2",children:t.map((e,s)=>(0,l.jsx)(d.Z,{item:e,onDelete:u},e.id))})})]}),(0,l.jsx)(x,{isVisible:a,onClose:()=>r(!1),title:"เพิ่มบทความ",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{}),(0,l.jsx)("div",{children:(0,l.jsx)("form",{className:"space-y-6",action:"",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block mb-2 font-medium text-gray-900",children:"หัวข้อ"}),(0,l.jsx)("input",{type:"text",className:"bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:right-blue-500 focus:border-blue-500 block w-full p-2.5"})]})})})]})})]})})},u=t(8472),f=function(){let[e,s]=(0,i.useState)([]);return(0,i.useEffect)(()=>{u.Z.get("https://city.planetcloud.cloud/citybackend/lineoa/information").then(e=>{s(e.data)}).catch(e=>{console.error("Error fetching data:",e)})},[]),(0,l.jsxs)("div",{className:"min-h-screen",children:[(0,l.jsx)(n.default,{}),(0,l.jsx)(m,{items:e})]})}},6504:function(e,s,t){"use strict";var l=t(7437);t(2265);var n=t(6648),i=t(7138),c=t(4379),a=t.n(c),o=t(357);s.default=()=>(0,l.jsx)("div",{className:"p-8 pb-2",children:(0,l.jsxs)("div",{className:" rounded-[15px] bg-white px-2 py-1 flex justify-between",children:[(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)(n.default,{src:"".concat(o.env.NEXT_PUBLIC_BASEPAHT,"/image/logo_colonoscopy_small.png"),alt:"logo",width:80,height:80}),(0,l.jsx)("div",{className:"flex items-center text-xl text-[#9b88c0] font-medium select-none ",children:(0,l.jsx)("h1",{children:"COLONOSCOPY TUH"})}),(0,l.jsxs)(i.default,{href:"".concat("/coc/lineoa/","home"),className:"mx-10 text-[#461F78] flex items-center text-xl font-bold select-none",children:[(0,l.jsx)("div",{children:(0,l.jsx)(n.default,{src:"".concat(o.env.NEXT_PUBLIC_BASEPAHT,"/image/icon_home.png"),alt:"logo",width:30,height:30})}),(0,l.jsx)("h1",{className:"mx-2",children:"หน้าหลัก"})]})]}),(0,l.jsx)("div",{className:"flex",children:(0,l.jsxs)("div",{onClick:e=>{e.preventDefault(),a().fire({title:"ยืนยันการออกจากระบบ",text:"คุณกำลังออกจากระบบ ต้องการดำเนินการต่อหรือไม่ ?",icon:"warning",showCancelButton:!0,cancelButtonText:"ยกเลิก",confirmButtonText:"ยืนยัน",reverseButtons:!1,customClass:{icon:"custom-swal2-warning"}}).then(e=>{e.isConfirmed&&a().fire({title:"ออกจากระบบ!",text:"คุณได้ออกจากระบบแล้ว",icon:"success",confirmButtonText:"ปิด"}).then(()=>{window.location.href="".concat("/coc/lineoa/","login")})})},className:"cursor-pointer mx-16 text-[#461F78] flex items-center text-xl font-bold select-none",children:[(0,l.jsx)("div",{children:(0,l.jsx)(n.default,{src:"".concat(o.env.NEXT_PUBLIC_BASEPAHT,"/image/icon_out.png"),alt:"logo",width:30,height:30})}),(0,l.jsx)("h1",{className:"mx-2",children:"ออกจากระบบ"})]})})]})})},461:function(e,s,t){"use strict";var l=t(7437);t(2265);var n=t(6648),i=t(357);s.Z=e=>{let{item:s,onDelete:t}=e;return(0,l.jsx)("div",{className:"w-full sm:w-1/2 lg:w-1/4 px-2 mb-4",children:(0,l.jsx)("div",{className:"border border-[#705396] bg-[#F4F4FE] shadow-md rounded-lg image-full h-full",children:(0,l.jsxs)("div",{className:"card-body p-2",children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsx)("div",{className:"w-4/5 break-words",children:s.header}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("button",{className:"mx-1",children:(0,l.jsx)(n.default,{src:"".concat(i.env.NEXT_PUBLIC_BASEPAHT,"/image/icon_view.png"),alt:"logo",width:30,height:30})}),(0,l.jsx)("button",{onClick:()=>t(s.id),children:(0,l.jsx)(n.default,{src:"".concat(i.env.NEXT_PUBLIC_BASEPAHT,"/image/icon_trash.png"),alt:"logo",width:30,height:30})})]})]}),(0,l.jsx)("div",{className:"border-b border-[#705396] opacity-50"}),(0,l.jsx)("div",{className:"break-words",dangerouslySetInnerHTML:{__html:s.detail}})]})})})}}},function(e){e.O(0,[461,472,892,138,971,23,744],function(){return e(e.s=2373)}),_N_E=e.O()}]);