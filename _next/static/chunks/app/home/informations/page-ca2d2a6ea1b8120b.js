(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[960],{42373:function(e,t,l){Promise.resolve().then(l.bind(l,79616))},57818:function(e,t,l){"use strict";l.d(t,{default:function(){return n.a}});var s=l(50551),n=l.n(s)},50551:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let s=l(99920);l(57437),l(2265);let n=s._(l(40148));function a(e,t){var l;let s={loading:e=>{let{error:t,isLoading:l,pastDelay:s}=e;return null}};"function"==typeof e&&(s.loader=e);let a={...s,...t};return(0,n.default)({...a,modules:null==(l=a.loadableGenerated)?void 0:l.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},10912:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let s=l(55592);function n(e){let{reason:t,children:l}=e;if("undefined"==typeof window)throw new s.BailoutToCSRError(t);return l}},40148:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let s=l(57437),n=l(2265),a=l(10912),i=l(61481);function c(e){return{default:e&&"default"in e?e.default:e}}let r={loader:()=>Promise.resolve(c(()=>null)),loading:null,ssr:!0},o=function(e){let t={...r,...e},l=(0,n.lazy)(()=>t.loader().then(c)),o=t.loading;function d(e){let c=o?(0,s.jsx)(o,{isLoading:!0,pastDelay:!0,error:null}):null,r=t.ssr?(0,s.jsxs)(s.Fragment,{children:["undefined"==typeof window?(0,s.jsx)(i.PreloadCss,{moduleIds:t.modules}):null,(0,s.jsx)(l,{...e})]}):(0,s.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,s.jsx)(l,{...e})});return(0,s.jsx)(n.Suspense,{fallback:c,children:r})}return d.displayName="LoadableComponent",d}},61481:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return a}});let s=l(57437),n=l(58512);function a(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let l=(0,n.getExpectedRequestStore)("next/dynamic css"),a=[];if(l.reactLoadableManifest&&t){let e=l.reactLoadableManifest;for(let l of t){if(!e[l])continue;let t=e[l].files.filter(e=>e.endsWith(".css"));a.push(...t)}}return 0===a.length?null:(0,s.jsx)(s.Fragment,{children:a.map(e=>(0,s.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:l.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},79616:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return p}});var s=l(57437),n=l(86504),a=l(2265),i=l(66648),c=l(64379),r=l.n(c),o=l(50461),d=l(42773),u=l(57818);l(18416);var x=l(38472);let h=(0,u.default)(()=>Promise.all([l.e(70),l.e(436)]).then(l.t.bind(l,98436,23)),{loadableGenerated:{webpack:()=>[98436]},ssr:!1});var m=e=>{var t;let{items:l,onFetchInfo:n}=e,[c,u]=(0,a.useState)(l),[m,f]=(0,a.useState)(!1),[p,g]=(0,a.useState)([]),[j,v]=(0,a.useState)(""),[w,b]=(0,a.useState)(""),[N,y]=(0,a.useState)({}),[_,k]=(0,a.useState)(null),[C,B]=(0,a.useState)(null),[S,O]=(0,a.useState)(!1),[T,P]=(0,a.useState)(!1),[E,F]=(0,a.useState)("");(0,a.useEffect)(()=>{u(l)},[l]);let D=()=>{f(!1),g([]),v(""),b("")},M=e=>{g(p.filter((t,l)=>l!==e)),p.length<=4&&k(null)},Z=async(e,t)=>{e.preventDefault();try{(await r().fire({title:"ยืนยันการลบข้อมูล",text:"คุณกำลังลบข้อมูล ต้องการดำเนินการต่อหรือไม่?",icon:"warning",showCancelButton:!0,cancelButtonText:"ยกเลิก",confirmButtonText:"ยืนยัน",reverseButtons:!1,customClass:{icon:"custom-swal2-warning"}})).isConfirmed&&(await x.Z.delete("".concat("https://colonoscopytuh.com/backend/api/","information/task/").concat(t)),u(c.filter(e=>e.id!==t)),await r().fire({title:"สำเร็จ",text:"คุณได้ทำรายการเรียบร้อยแล้ว",icon:"success",confirmButtonText:"ปิด"}))}catch(e){console.error("Error deleting data:",e),r().fire({title:"ขออภัย",text:"เกิดข้อผิดพลาดในการลบข้อมูล กรุณาลองใหม่อีกครั้ง",icon:"error",confirmButtonText:"ปิด",customClass:{icon:"custom-swal2-error"}})}},L=async e=>{try{let t=(await x.Z.get("".concat("https://colonoscopytuh.com/backend/api/","information/task/").concat(e))).data;B(t),v(t.header),b(t.detail),P(!1),O(!1),f(!0),F("บทความ")}catch(e){console.error("Error fetching item details:",e)}},R=async()=>{let e=new FormData;e.append("header",j),e.append("des",w),p.forEach(t=>{e.append("image",t)});try{let t=await x.Z.post("".concat("https://colonoscopytuh.com/backend/api/","information/task/").concat(C.id),e);200===t.status?r().fire({title:"สำเร็จ",text:"คุณได้ทำการแก้ไขบทความเรียบร้อยแล้ว",icon:"success",confirmButtonText:"ปิด"}).then(()=>{n(),D()}):r().fire({title:"ขออภัย",text:"คุณทำรายการไม่ถูกต้อง กรุณาตรวจสอบใหม่อีกครั้ง",icon:"warning",confirmButtonText:"ปิด",customClass:{icon:"custom-swal2-warning"}})}catch(e){console.error("Error saving data:",e),r().fire({title:"ขออภัย",text:"เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง",icon:"error",confirmButtonText:"ปิด",customClass:{icon:"custom-swal2-error"}})}},I=async()=>{let e={};if(j.trim()||(e.titlename="กรุณากรอกหัวข้อ"),Object.keys(e).length>0){y(e);return}y({}),C?await R():await U()},U=async()=>{let e=new FormData;e.append("header",j),e.append("des",w),p.forEach(t=>{e.append("image",t)});try{let t=await x.Z.post("".concat("https://colonoscopytuh.com/backend/api/","information"),e);200===t.status?r().fire({title:"สำเร็จ",text:"คุณได้ทำการเพิ่มบทความเรียบร้อยแล้ว",icon:"success",confirmButtonText:"ปิด"}).then(()=>{n(),D()}):r().fire({title:"ขออภัย",text:"คุณทำรายการไม่ถูกต้อง กรุณาตรวจสอบใหม่อีกครั้ง",icon:"warning",confirmButtonText:"ปิด",customClass:{icon:"custom-swal2-warning"}})}catch(e){console.error("Error saving data:",e),r().fire({title:"ขออภัย",text:"เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง",icon:"error",confirmButtonText:"ปิด",customClass:{icon:"custom-swal2-error"}})}};return(0,s.jsx)("div",{className:"px-8",children:(0,s.jsxs)("div",{className:"h-full w-full rounded-[15px] bg-white p-5 ",children:[(0,s.jsxs)("div",{className:"min-h-[81.71dvh] flex flex-col",children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"text-xl 2xl:text-2xl text-[#5955B3] font-semibold",children:"บทความ"}),(0,s.jsxs)("div",{className:"text-[#705396]",children:["ทั้งหมด ",l.length," รายการ"]})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("button",{onClick:()=>{P(!0),B(null),f(!0),O(!0),F("เพิ่มบทความ")},className:"relative text-white w-40 font-light bg-[#AF88FF] btn btn-active",children:[(0,s.jsx)(i.default,{className:"absolute left-4",src:"/image/icon_plus.png",alt:"logo",width:20,height:20}),"Add New"]})})]}),(0,s.jsx)("div",{className:"pt-4 flex-grow",children:(0,s.jsx)("div",{className:"flex flex-wrap -mx-2",children:c.map(e=>(0,s.jsx)(o.Z,{item:e,onDelete:Z,onView:L,title:"info"},e.id))})})]}),(0,s.jsx)(d.Z,{isVisible:m,onClose:D,title:E,children:(0,s.jsxs)("div",{className:"p-5",children:[(0,s.jsx)("div",{className:"text-xl 2xl:text-2xl text-[#705396] font-semibold",children:E}),(0,s.jsxs)("div",{className:"mt-2",children:[(0,s.jsx)("div",{className:"text-[#705396]",children:"ข้อมูลภาพ"}),(0,s.jsx)("div",{className:"mt-4 grid grid-cols-7 gap-7",children:S?(0,s.jsxs)(s.Fragment,{children:[p.length<=4&&(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{e.target.files&&e.target.files[0]&&(p.length<4?(g([...p,e.target.files[0]]),k(null)):k("สามารถเพิ่มได้สูงสุด 4 รูปเท่านั้น"))},className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer"}),(0,s.jsx)("div",{className:"flex items-center justify-center w-full h-auto max-h-32",children:(0,s.jsx)(i.default,{src:"/image/icon_plus_border.png",alt:"add icon",width:40,height:40,className:"w-[90%] 2xl:w-full h-auto max-h-32"})})]}),p.map((e,t)=>(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(i.default,{src:URL.createObjectURL(e),alt:"Selected ".concat(t),width:40,height:40,className:"w-[90%] 2xl:w-full h-auto max-h-40 object-cover rounded-lg"}),(0,s.jsx)("button",{onClick:()=>M(t),className:"absolute top-0 right-0 p-1 shadow-md","aria-label":"Delete",children:(0,s.jsx)(i.default,{src:"/image/icon_delete.png",alt:"delete icon",width:20,height:20})})]},t))]}):(null==C?void 0:null===(t=C.image)||void 0===t?void 0:t.length)>0&&(0,s.jsx)(s.Fragment,{children:C.image.map((e,t)=>(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)(i.default,{src:e,alt:"Image ".concat(t),width:40,height:40,className:"w-[90%] 2xl:w-full h-auto max-h-40 object-cover rounded-lg cursor-pointer",onClick:()=>window.open(e,"_blank")})},t))})}),_&&(0,s.jsx)("div",{className:"mt-4 text-red-500",children:_}),(0,s.jsx)("div",{className:"w-full mt-4",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396]",children:"หัวข้อ"}),(0,s.jsx)("label",{className:" input input-bordered flex items-center gap-2 w-full",children:(0,s.jsx)("input",{type:"text",className:"grow text-[#705396]",value:j,onChange:e=>v(e.target.value),disabled:!S})}),N.titlename&&(0,s.jsx)("span",{className:"text-red-500",children:N.titlename})]})}),(0,s.jsxs)("div",{className:"mt-4 mb-16",children:[(0,s.jsx)("span",{className:"text-[#705396]",children:"เนื้อหา"}),(0,s.jsx)(h,{className:"h-[150px] 2xl:h-[250px]",value:w,onChange:e=>b(e),theme:"snow",readOnly:!S,modules:{toolbar:[[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike","blockquote"],[{align:["right","center","justify"]}],[{list:"ordered"},{list:"bullet"}],["link","image"]]}})]}),!(C&&[2,3,4,5,6,7,8,9].includes(C.id))&&(0,s.jsx)("div",{className:"mt-4 flex justify-center items-center",children:(0,s.jsxs)("button",{onClick:T?I:()=>{P(!0),O(!0),F("แก้ไขบทความ")},className:"text-white w-38 font-light btn btn-active bg-[#693092]",children:[(0,s.jsx)(i.default,{className:"gap-2",src:"/image/icon_save.png",alt:"logo",width:30,height:30}),(0,s.jsx)("span",{children:T?"Save":"Edit"})]})})]})]})})]})})};let f=async e=>{try{let t=await x.Z.get("https://colonoscopytuh.com/backend/api/information");e(t.data)}catch(e){console.error("Error fetching data:",e)}};var p=function(){let[e,t]=(0,a.useState)([]);return(0,a.useEffect)(()=>{f(t)},[]),(0,s.jsxs)("div",{className:"min-h-screen",children:[(0,s.jsx)(n.default,{}),(0,s.jsx)(m,{items:e,onFetchInfo:()=>f(t)})]})}},86504:function(e,t,l){"use strict";var s=l(57437);l(2265);var n=l(66648),a=l(87138),i=l(64379),c=l.n(i),r=l(16463);t.default=()=>{let e=(0,r.useRouter)(),t=(0,r.usePathname)();return(0,s.jsx)("div",{className:"p-8 pt-3 2xl:pt-8 pb-2",children:(0,s.jsxs)("div",{className:" rounded-[15px] bg-white px-2 py-1 flex justify-between",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)(n.default,{src:"/image/logo_colonoscopy_small.png",alt:"logo",width:64,height:64,className:"2xl:w-20"}),(0,s.jsx)("div",{className:"flex items-center text-xl text-[#9b88c0] font-medium select-none ",children:(0,s.jsx)("h1",{children:"COLONOSCOPY TUH"})}),(0,s.jsxs)(a.default,{href:"".concat("/","home"),className:"ml-10 text-[#461F78] flex items-center text-xl font-bold select-none",children:[(0,s.jsx)("div",{children:(0,s.jsx)(n.default,{src:"/image/icon_home.png",alt:"logo",width:30,height:30})}),(0,s.jsx)("h1",{className:"mx-2",children:"หน้าหลัก"})]}),(0,s.jsxs)(a.default,{href:"#",onClick:l=>{l.preventDefault(),"/home/"===t?e.push("/home/"):e.back()},className:"mx-5 text-[#461F78] flex items-center text-xl font-bold select-none",children:[(0,s.jsx)("div",{children:(0,s.jsx)(n.default,{src:"/image/icon_back.png",alt:"logo",width:30,height:30})}),(0,s.jsx)("h1",{className:"mx-2",children:"ย้อนกลับ"})]})]}),(0,s.jsx)("div",{className:"flex",children:(0,s.jsxs)("div",{onClick:e=>{e.preventDefault(),c().fire({title:"ยืนยันการออกจากระบบ",text:"คุณกำลังออกจากระบบ ต้องการดำเนินการต่อหรือไม่ ?",icon:"warning",showCancelButton:!0,cancelButtonText:"ยกเลิก",confirmButtonText:"ยืนยัน",reverseButtons:!1,customClass:{icon:"custom-swal2-warning"}}).then(e=>{e.isConfirmed&&c().fire({title:"ออกจากระบบ!",text:"คุณได้ออกจากระบบแล้ว",icon:"success",confirmButtonText:"ปิด"}).then(()=>{window.location.href="".concat("/")})})},className:"cursor-pointer mx-16 text-[#461F78] flex items-center text-xl font-bold select-none",children:[(0,s.jsx)("div",{children:(0,s.jsx)(n.default,{src:"/image/icon_out.png",alt:"logo",width:30,height:30})}),(0,s.jsx)("h1",{className:"mx-2",children:"ออกจากระบบ"})]})})]})})}},50461:function(e,t,l){"use strict";var s=l(57437);l(2265);var n=l(66648);t.Z=e=>{let{item:t,onDelete:l,onView:a,title:i}=e,c="noti"===i?[1,2,3,4].includes(t.id):[2,3,4,5,6,7,8,9].includes(t.id);return(0,s.jsx)("div",{className:"w-full sm:w-1/2 lg:w-1/4 px-2 mb-4",children:(0,s.jsx)("div",{className:"border border-[#705396] bg-[#F4F4FE] shadow-md rounded-lg image-full h-full",children:(0,s.jsxs)("div",{className:"card-body p-2",children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("div",{className:"w-4/5 break-words overflow-hidden text-ellipsis min-h-[48px] max-h-[50px]",children:t.header}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("button",{className:"mx-1",onClick:e=>{e.preventDefault(),a(t.id)},children:(0,s.jsx)(n.default,{src:"/image/icon_view.png",alt:"logo",width:30,height:30})}),!c&&(0,s.jsx)("button",{onClick:e=>{l(e,t.id)},children:(0,s.jsx)(n.default,{src:"/image/icon_trash.png",alt:"logo",width:30,height:30})})]})]}),(0,s.jsx)("div",{className:"border-b border-[#705396] opacity-50"}),(0,s.jsx)("div",{className:"break-words overflow-hidden text-ellipsis min-h-[90px] max-h-[90px]",dangerouslySetInnerHTML:{__html:t.detail}})]})})})}},42773:function(e,t,l){"use strict";var s=l(57437);l(2265);var n=l(66648);t.Z=e=>{let{isVisible:t,onClose:l,title:a,children:i}=e;return t?(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center",children:(0,s.jsx)("div",{className:"w-[80%] animate-modalOpen",children:(0,s.jsxs)("div",{className:"relative bg-white p-3 rounded",children:[(0,s.jsx)("div",{className:"absolute right-2",children:(0,s.jsx)("button",{onClick:()=>l(),children:(0,s.jsx)(n.default,{src:"/image/icon_close.png",alt:"logo",width:30,height:30})})}),i]})})}):null}},18416:function(){}},function(e){e.O(0,[325,461,236,648,138,971,23,744],function(){return e(e.s=42373)}),_N_E=e.O()}]);