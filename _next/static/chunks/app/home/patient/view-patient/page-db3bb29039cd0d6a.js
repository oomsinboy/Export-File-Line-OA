(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[527],{8259:function(e,t,a){Promise.resolve().then(a.bind(a,444))},5055:function(e,t,a){!function(e){e.defineLocale("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),monthsParseExact:!0,weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H:mm",LLLL:"วันddddที่ D MMMM YYYY เวลา H:mm"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,isPM:function(e){return"หลังเที่ยง"===e},meridiem:function(e,t,a){return e<12?"ก่อนเที่ยง":"หลังเที่ยง"},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",ss:"%d วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",w:"1 สัปดาห์",ww:"%d สัปดาห์",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}})}(a(9212))},551:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let s=a(9920);a(7437),a(2265);let l=s._(a(148));function i(e,t){var a;let s={loading:e=>{let{error:t,isLoading:a,pastDelay:s}=e;return null}};"function"==typeof e&&(s.loader=e);let i={...s,...t};return(0,l.default)({...i,modules:null==(a=i.loadableGenerated)?void 0:a.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},912:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return l}});let s=a(5592);function l(e){let{reason:t,children:a}=e;if("undefined"==typeof window)throw new s.BailoutToCSRError(t);return a}},148:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let s=a(7437),l=a(2265),i=a(912),n=a(1481);function d(e){return{default:e&&"default"in e?e.default:e}}let c={loader:()=>Promise.resolve(d(()=>null)),loading:null,ssr:!0},r=function(e){let t={...c,...e},a=(0,l.lazy)(()=>t.loader().then(d)),r=t.loading;function o(e){let d=r?(0,s.jsx)(r,{isLoading:!0,pastDelay:!0,error:null}):null,c=t.ssr?(0,s.jsxs)(s.Fragment,{children:["undefined"==typeof window?(0,s.jsx)(n.PreloadCss,{moduleIds:t.modules}):null,(0,s.jsx)(a,{...e})]}):(0,s.jsx)(i.BailoutToCSR,{reason:"next/dynamic",children:(0,s.jsx)(a,{...e})});return(0,s.jsx)(l.Suspense,{fallback:d,children:c})}return o.displayName="LoadableComponent",o}},1481:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return i}});let s=a(7437),l=a(8512);function i(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let a=(0,l.getExpectedRequestStore)("next/dynamic css"),i=[];if(a.reactLoadableManifest&&t){let e=a.reactLoadableManifest;for(let a of t){if(!e[a])continue;let t=e[a].files.filter(e=>e.endsWith(".css"));i.push(...t)}}return 0===i.length?null:(0,s.jsx)(s.Fragment,{children:i.map(e=>(0,s.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:a.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},444:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return F}});var s=a(7437),l=a(6504),i=a(2265),n=a(6463),d=a(8472),c=a(448),r=e=>{let{items:t}=e,a=t.patient.appointment_date.split("T")[0],l="".concat(a,"T").concat(t.patient.appointment_time);return(0,s.jsx)("div",{className:"px-8",children:(0,s.jsx)("div",{className:"h-full w-full rounded-[15px] bg-white p-5 flex justify-center",children:(0,s.jsxs)("div",{className:"min-h-[81.71dvh] w-[70%] flex flex-col",children:[(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"text-2xl text-[#5955B3] font-semibold",children:"เพิ่มผู้ป่วยใหม่"})}),(0,s.jsxs)("form",{action:"",className:" mt-2",children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("div",{className:"w-1/2 pr-4",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396]",children:"ชื่อ"}),(0,s.jsx)("label",{className:"bg-[#F8F5FB] input input-bordered flex items-center gap-2 w-full",children:(0,s.jsx)("input",{type:"text",className:"grow text-[#705396]",value:t.patient.patient_fname,readOnly:!0})})]})}),(0,s.jsx)("div",{className:"w-1/2 pl-4",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396]",children:"นามสกุล"}),(0,s.jsx)("label",{className:"bg-[#F8F5FB] input input-bordered flex items-center gap-2 w-full",children:(0,s.jsx)("input",{type:"text",className:"grow text-[#705396]",value:t.patient.patient_lname,readOnly:!0})})]})})]}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("div",{className:"w-1/2 pr-4",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396]",children:"เลขที่บัตรประจำตัวประชาชน"}),(0,s.jsx)("label",{className:"bg-[#F8F5FB] input input-bordered flex items-center gap-2 w-full",children:(0,s.jsx)("input",{type:"text",className:"grow text-[#705396]",value:t.patient.id_card,maxLength:13,pattern:"\\d{13}",readOnly:!0})})]})}),(0,s.jsx)("div",{className:"w-1/2 pl-4",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396]",children:"วันเดือนปีเกิด"}),(0,s.jsx)("label",{className:"bg-[#F8F5FB] input input-bordered flex items-center gap-2 w-full",children:(0,s.jsx)("input",{type:"date",className:"grow text-[#705396]",value:t.patient.dob,readOnly:!0})})]})})]}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("div",{className:"w-1/2 pr-4",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396]",children:"วันที่ลงทะเบียน"}),(0,s.jsx)("label",{className:" bg-[#F8F5FB] input input-bordered flex items-center gap-2 w-full",children:(0,s.jsx)("input",{type:"text",className:"grow pointer-events-none text-[#705396]",value:(0,c.p)(t.patient.register_date),readOnly:!0})})]})}),(0,s.jsx)("div",{className:"w-1/2 pl-4",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396]",children:"วันนัดหมาย"}),(0,s.jsx)("label",{className:"bg-[#F8F5FB] input input-bordered flex items-center gap-2 w-full",children:(0,s.jsx)("input",{type:"datetime-local",className:"grow text-[#705396]",value:l,readOnly:!0})})]})})]})]}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsxs)("div",{className:"my-2 w-1/2 pr-4",children:[(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("span",{className:"text-[#705396]",children:"เลือกยาที่ควรหยุดรับประทาน"})}),(0,s.jsxs)("div",{className:"rounded bg-[#E8DBF5] min-h-[49dvh] p-3",children:[(0,s.jsxs)("span",{className:"text-[#705396]",children:[" รายการที่เลือก ",t.patient.med.length," รายการ"]}),(0,s.jsx)("div",{className:"max-h-[45dvh] overflow-y-auto",children:t.patient.med.map((e,t)=>(0,s.jsxs)("div",{className:"flex justify-between pt-2",children:[(0,s.jsx)("select",{className:"w-[70%] mx-1 h-[3rem] rounded bg-[#F8F5FB] text-center text-[#705396]",defaultValue:e.medic,disabled:!0,children:(0,s.jsx)("option",{value:e.medic,children:e.medic})}),(0,s.jsx)("select",{className:"w-[20%] mx-1 h-[3rem] rounded text-center text-[#705396]",defaultValue:e.val,disabled:!0,children:(0,s.jsxs)("option",{value:e.val,children:[e.val," วัน"]})})]},t))})]})]}),(0,s.jsx)("div",{className:"w-1/2 pl-4 flex justify-center items-center",children:(0,s.jsxs)("div",{className:"text-center w-1/2",children:[(0,s.jsx)("div",{className:"text-[#461F78] text-3xl font-semibold my-2",children:"OTP"}),(0,s.jsx)("div",{className:"text-[#705396] my-2",children:"รหัสนี้ใช้สำหรับลงทะเบียนผู้ใช้งาน Line OA"}),(0,s.jsx)("div",{className:"p-10 bg-[#F8F5FB] my-2",children:(0,s.jsx)("span",{className:"text-[#7F57D0] text-4xl tracking-widest",children:t.patient.otp})})]})})]})]})})})},o=a(6797),m=a(6648),x=a(9212),p=a.n(x);a(5055);var h=e=>{let{isVisible:t,onClose:a,title:l,children:i}=e;return t?(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center",children:(0,s.jsx)("div",{className:"w-[80%] animate-modalOpen",children:(0,s.jsxs)("div",{className:"relative bg-white p-3 rounded",children:[(0,s.jsx)("div",{className:"absolute right-2",children:(0,s.jsx)("button",{onClick:()=>a(),children:(0,s.jsx)(m.default,{src:"/image/icon_close.png",alt:"logo",width:30,height:30})})}),i]})})}):null},u=a(4379),j=a.n(u),f=a(551),v=a.n(f);a(8416);let g=v()(()=>Promise.all([a.e(70),a.e(436)]).then(a.t.bind(a,8436,23)),{loadableGenerated:{webpack:()=>[8436]},ssr:!1});p().locale("th");var N=e=>{let{visit_id:t,dailyDetail:a,notilist:l}=e,[n,c]=(0,i.useState)(!1),[r,o]=(0,i.useState)(null),[x,u]=(0,i.useState)(!1),[f,v]=(0,i.useState)(""),[N,b]=(0,i.useState)(0),[w,y]=(0,i.useState)(p()()),_=w.clone().startOf("month").startOf("week"),F=w.clone().endOf("month").endOf("week"),S=_.clone().subtract(1,"day"),B=[];for(;S.isBefore(F,"day");)B.push(Array(7).fill(0).map(()=>S.add(1,"day").clone()));let C=e=>e.isSame(w,"month"),k=e=>{o(e),v(e.noti_detail||""),c(!0)},O=async()=>{let e=0===N?r.noti_id:N.toString(),a=new FormData;a.append("visit_id",t.toString()),a.append("noti_id",e),a.append("noti_detail",f);try{let e=await d.Z.post("".concat("https://city.planetcloud.cloud/citybackend/lineoa/","daily_noti/task/").concat(r.daily_id),a);200===e.status?(u(!1),j().fire({title:"สำเร็จ",text:"คุณได้การแก้ไขเรียบร้อยแล้ว",icon:"success",confirmButtonText:"ปิด"}).then(()=>{window.location.reload()})):j().fire({title:"ขออภัย",text:"คุณทำรายการไม่ถูกต้อง กรุณาตรวจสอบใหม่อีกครั้ง",icon:"warning",confirmButtonText:"ปิด",customClass:{icon:"custom-swal2-warning"}})}catch(e){console.error("Error saving data:",e),j().fire({title:"ขออภัย",text:"เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง",icon:"error",confirmButtonText:"ปิด",customClass:{icon:"custom-swal2-error"}})}};return(0,s.jsxs)("div",{className:"pl-8 pt-10",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center ",children:[(0,s.jsx)("button",{onClick:()=>{y(w.clone().subtract(1,"month"))},children:(0,s.jsx)(m.default,{src:"/image/icon_left.png",alt:"logo",width:15,height:15})}),(0,s.jsx)("span",{className:"text-lg font-semibold text-[#BE77F1]",children:w.format("MMMM YYYY")}),(0,s.jsx)("button",{onClick:()=>{y(w.clone().add(1,"month"))},children:(0,s.jsx)(m.default,{src:"/image/icon_right.png",alt:"logo",width:15,height:15})})]}),(()=>{let e=p().weekdays(!0);return(0,s.jsx)("div",{className:"grid grid-cols-7 bg-[#B498F0] text-white rounded mt-4",children:e.map(e=>(0,s.jsx)("div",{className:"text-center py-2",children:e},e))})})(),(0,s.jsx)("div",{className:"grid grid-cols-7",children:B.map((e,t)=>(0,s.jsx)("div",{className:"contents",children:e.map((e,t)=>{let l=a.some((t,s)=>p()(t.date_before_appointment).isSame(e,"day")&&s===a.length-1);return(0,s.jsxs)("div",{className:"relative flex justify-end items-end text-center h-24 p-2 w-full border ".concat(C(e)?"":"text-gray-400"),children:[a.map((t,l)=>{if(p()(t.date_before_appointment).isSame(e,"day")){let i=0===l,n=p()().isSame(e,"day"),d=e.isBefore(p()(),"day");return(0,s.jsxs)("div",{children:[i&&(0,s.jsx)("div",{className:"w-[calc(100%-8px)] absolute top-1 left-1 text-white bg-[#BE77F1] p-1 rounded",children:"ลงทะเบียน"}),l===a.length-1?(0,s.jsx)("div",{className:"h-[calc(100%-8px)] w-[calc(100%-8px)] absolute top-1 left-1 text-center text-white p-1 rounded ".concat(n||!d?"bg-[#BE77F1]":"bg-[#AEB2B5]"),children:"ส่องกล้อง"}):(0,s.jsx)("button",{className:"absolute bottom-2 left-2 rounded text-white w-7 h-7 font-light flex justify-center items-center ".concat(i?"bg-[#AEB2B5] hover:bg-[#e5e7eb]":n||!d?"bg-[#705396] hover:bg-[#BE77F1]":"bg-[#AEB2B5] hover:bg-[#e5e7eb]"),onClick:()=>k(t),children:(0,s.jsx)(m.default,{className:"gap-2",src:i?"/image/icon_edit_pass.png":n||!d?"/image/icon_edit.png":"/image/icon_edit_pass.png",alt:"logo",width:20,height:20})})]},t.date_before_appointment)}return null}),(0,s.jsx)("div",{className:"absolute bottom-2 right-3 ".concat(l?"text-white":""),children:e.format("D")})]},t)})},t))}),(0,s.jsx)(h,{isVisible:n,onClose:()=>{c(!1),u(!1),v(r&&r.noti_detail||"")},title:"รายละเอียดการแจ้งเตือน",children:r&&(0,s.jsxs)("div",{className:"p-5",children:[(0,s.jsxs)("div",{className:"text-2xl text-[#5955B3] font-semibold",children:["แจ้งเตือนคุณ ",r.ptname]}),(0,s.jsxs)("div",{className:"text-2xl text-[#5955B3] font-semibold",children:["วันที่ ",r.date_before_appointment]}),(0,s.jsx)("div",{className:"rounded ".concat(x?"bg-white":" bg-[#E8DBF5]","  min-h-[48dvh] p-3 mt-4 text-xl"),children:x?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("select",{className:"w-full mb-4 p-2 border rounded",value:N,onChange:e=>{let t=parseInt(e.target.value,10);b(t);let a=l.find(e=>e.id===t);v(a?a.detail:"")},children:[(0,s.jsx)("option",{value:0,disabled:!0,children:"เลือกการแจ้งเตือน"}),l.map(e=>(0,s.jsx)("option",{value:e.id,children:e.header},e.id))]}),(0,s.jsx)(g,{className:"h-[360px]",value:f,onChange:e=>v(e),theme:"snow"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"my-2",children:"ข้อควรปฏิบัติก่อนรับการตรวจส่องกล้องลำไส้ใหญ่"}),(0,s.jsx)("div",{className:"break-words max-h-[460px]",dangerouslySetInnerHTML:{__html:r.noti_detail||""}})]})}),!p()(r.date_before_appointment).isBefore(p()(),"day")&&(0,s.jsx)("div",{className:"flex justify-center mt-4",children:(0,s.jsxs)("button",{onClick:x?O:()=>{u(!0)},className:"relative text-white w-38 font-light btn btn-active mx-4 ".concat(x?"bg-[#693092]":"bg-[#AF88FF]"),children:[(0,s.jsx)(m.default,{className:"gap-2",src:x?"/image/icon_save.png":"/image/icon_edit.png",alt:"logo",width:30,height:30}),(0,s.jsx)("span",{children:x?"Save":"Edit"})]})})]})})]})};let b=v()(()=>Promise.all([a.e(70),a.e(436)]).then(a.t.bind(a,8436,23)),{loadableGenerated:{webpack:()=>[8436]},ssr:!1});p().locale("th");var w=e=>{let{items:t}=e,[a,l]=(0,i.useState)(!1),[n,r]=(0,i.useState)(t.patient.patient_fname),[o,x]=(0,i.useState)(t.patient.patient_lname),[u,f]=(0,i.useState)(t.patient.id_card),[v,g]=(0,i.useState)(t.patient.dob),[w,y]=(0,i.useState)("".concat(t.patient.appointment_date.split("T")[0],"T").concat(t.patient.appointment_time)),[_,F]=(0,i.useState)(t.patient.line_name),[S,B]=(0,i.useState)([]),[C,k]=(0,i.useState)([]),[O,M]=(0,i.useState)({}),[D,E]=(0,i.useState)({}),[T,L]=(0,i.useState)(""),[P,Y]=(0,i.useState)([]),[Z,A]=(0,i.useState)(!1),[I,V]=(0,i.useState)(null),[H,R]=(0,i.useState)(!1),[G,U]=(0,i.useState)(""),[W,q]=(0,i.useState)(0);console.log(t.daily_detail),(0,i.useEffect)(()=>{let e=async()=>{try{let e=await d.Z.get("".concat("https://city.planetcloud.cloud/citybackend/lineoa/","notification"));Y(e.data)}catch(e){console.error("Error fetching noti data:",e)}};(async()=>{try{let e=await d.Z.get("".concat("https://city.planetcloud.cloud/citybackend/lineoa/","medical"));k(e.data)}catch(e){console.error("Error fetching medical data:",e)}})(),e(),t.patient.med&&B(t.patient.med.map((e,t)=>({id:t,name:e.medic,dose:e.val,isOther:!1})))},[t.patient.med]);let z=async()=>{if(S.some(e=>!e.name||!e.dose)){L("กรุณากรอกข้อมูลยาและจำนวนวันที่รับประทานให้ครบถ้วน");return}L("");let e={};if(n.trim()||(e.firstname="กรุณากรอกชื่อ"),o.trim()||(e.lastname="กรุณากรอกนามสกุล"),u.trim()?13!==u.trim().length&&(e.idCard="กรุณากรอกบัตรประจำตัวประชาชนให้ถูกต้อง (13 หลัก)"):e.idCard="กรุณากรอกบัตรประจำตัวประชาชน",v.trim()||(e.birthDate="กรุณากรอกวันเดือนปีเกิด"),w.trim()||(e.appointmentDate="กรุณากรอกวันนัดหมาย"),Object.keys(e).length>0){E(e);return}E({}),await ee()},J=e=>{B(S.filter(t=>t.id!==e))},K=(e,t)=>{let a=e.target.value;S.some(e=>e.name===a&&e.id!==t&&"other"!==a)?j().fire({title:"ขออภัย",text:"รายการยานี้ถูกเลือกแล้ว",icon:"error",confirmButtonText:"ปิด",customClass:{icon:"custom-swal2-error"}}):B(S.map(e=>{if(e.id===t){let t="other"===a||!C.some(e=>e.name===a);return{...e,name:a,isOther:t}}return e}))},Q=(e,t)=>{M({...O,[t]:e.target.value}),B(S.map(a=>a.id===t?{...a,name:e.target.value}:a))},X=(e,t)=>{B(S.map(a=>a.id===t?{...a,dose:e.target.value}:a))},$=async()=>{let e={visit_id:t.patient.visit_id,userId:t.patient.line_id};try{let t=await d.Z.post("".concat("https://city.planetcloud.cloud/citybackend/lineoa/","visit/line/renew"),e);200===t.status?F(t.data.line_name):console.error("Failed to refresh data")}catch(e){console.error("Error while refreshing data:",e)}},ee=async()=>{let e=JSON.stringify(S.map(e=>({val:e.dose,medic:e.name}))),a=new FormData;a.append("fname",n),a.append("lname",o),a.append("idcard",u),a.append("dob",v),a.append("appointment_date",w.split("T")[0]),a.append("appointment_time",w.split("T")[1]),a.append("patient_id",String(t.patient.patient_id)),a.append("med",e);try{let e=await d.Z.post("".concat("https://city.planetcloud.cloud/citybackend/lineoa/","visit/task/").concat(t.patient.visit_id),a);200===e.status?(l(!1),j().fire({title:"สำเร็จ",text:"คุณได้การแก้ไขเรียบร้อยแล้ว",icon:"success",confirmButtonText:"ปิด"}).then(()=>{window.location.reload()})):j().fire({title:"ขออภัย",text:"คุณทำรายการไม่ถูกต้อง กรุณาตรวจสอบใหม่อีกครั้ง",icon:"warning",confirmButtonText:"ปิด",customClass:{icon:"custom-swal2-warning"}})}catch(e){console.error("Error saving data:",e),j().fire({title:"ขออภัย",text:"เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง",icon:"error",confirmButtonText:"ปิด",customClass:{icon:"custom-swal2-error"}})}},et=t.daily_detail.slice(1,t.daily_detail.length-1).some(e=>p()().isSame(e.date_before_appointment,"day")),ea=e=>{V(e),U(e.noti_detail||""),A(!0)},es=async()=>{let e=new FormData,a=0===W?I.noti_id:W.toString();e.append("visit_id",t.patient.visit_id.toString()),e.append("noti_id",a),e.append("noti_detail",G);try{let t=await d.Z.post("".concat("https://city.planetcloud.cloud/citybackend/lineoa/","daily_noti/task/").concat(I.daily_id),e);200===t.status?(R(!1),j().fire({title:"สำเร็จ",text:"คุณได้การแก้ไขเรียบร้อยแล้ว",icon:"success",confirmButtonText:"ปิด"}).then(()=>{window.location.reload()})):j().fire({title:"ขออภัย",text:"คุณทำรายการไม่ถูกต้อง กรุณาตรวจสอบใหม่อีกครั้ง",icon:"warning",confirmButtonText:"ปิด",customClass:{icon:"custom-swal2-warning"}})}catch(e){console.error("Error saving data:",e),j().fire({title:"ขออภัย",text:"เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง",icon:"error",confirmButtonText:"ปิด",customClass:{icon:"custom-swal2-error"}})}};return(0,s.jsx)("div",{className:"px-8",children:(0,s.jsx)("div",{className:"h-full w-full rounded-[15px] bg-white p-5 ",children:(0,s.jsxs)("div",{className:"min-h-[81.71dvh] flex flex-col",children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"text-2xl text-[#5955B3] font-semibold",children:"ลงทะเบียนผู้ป่วย"})}),(0,s.jsx)("div",{className:"flex",children:(0,s.jsxs)("button",{onClick:a?z:()=>{l(!0)},className:"relative text-white w-38 font-light btn btn-active mx-4 ".concat(a?"bg-[#693092]":"bg-[#AF88FF]"),children:[(0,s.jsx)(m.default,{className:"gap-2",src:a?"/image/icon_save.png":"/image/icon_edit.png",alt:"logo",width:30,height:30}),(0,s.jsx)("span",{children:a?"Save":"Edit"})]})})]}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsxs)("div",{className:" w-[55%]",children:[(0,s.jsxs)("form",{action:"",children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("div",{className:"w-1/2 pr-4",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396]",children:"ชื่อ"}),(0,s.jsx)("label",{className:"".concat(a?"":"bg-[#F8F5FB]"," input input-bordered flex items-center gap-2 w-full"),children:(0,s.jsx)("input",{type:"text",className:"grow text-[#705396]",readOnly:!a,value:n,onChange:e=>r(e.target.value)})}),D.firstname&&(0,s.jsx)("span",{className:"text-red-500",children:D.firstname})]})}),(0,s.jsx)("div",{className:"w-1/2 pl-4",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396] ",children:"นามสกุล"}),(0,s.jsx)("label",{className:"".concat(a?"":"bg-[#F8F5FB]"," input input-bordered flex items-center gap-2 w-full"),children:(0,s.jsx)("input",{type:"text",className:"grow text-[#705396]",readOnly:!a,value:o,onChange:e=>x(e.target.value)})}),D.lastname&&(0,s.jsx)("span",{className:"text-red-500",children:D.lastname})]})})]}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("div",{className:"w-1/2 pr-4",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396]",children:"เลขที่บัตรประจำตัวประชาชน"}),(0,s.jsx)("label",{className:"".concat(a?"":"bg-[#F8F5FB]"," input input-bordered flex items-center gap-2 w-full"),children:(0,s.jsx)("input",{type:"text",className:"grow text-[#705396]",value:u,maxLength:13,pattern:"\\d{13}",readOnly:!a,onChange:e=>f(e.target.value)})}),D.idCard&&(0,s.jsx)("span",{className:"text-red-500",children:D.idCard})]})}),(0,s.jsx)("div",{className:"w-1/2 pl-4",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396]",children:"วันเดือนปีเกิด"}),(0,s.jsx)("label",{className:"".concat(a?"":"bg-[#F8F5FB]"," input input-bordered flex items-center gap-2 w-full"),children:(0,s.jsx)("input",{type:"date",className:"grow text-[#705396]",value:v,readOnly:!a,onChange:e=>g(e.target.value)})}),D.birthDate&&(0,s.jsx)("span",{className:"text-red-500",children:D.birthDate})]})})]}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("div",{className:"w-1/2 pr-4",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396]",children:"วันที่ลงทะเบียน"}),(0,s.jsx)("label",{className:" bg-[#F8F5FB] input input-bordered flex items-center gap-2 w-full",children:(0,s.jsx)("input",{type:"text",className:"grow pointer-events-none text-[#705396]",value:(0,c.p)(t.patient.register_date),readOnly:!0})})]})}),(0,s.jsx)("div",{className:"w-1/2 pl-4",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396]",children:"วันนัดหมาย"}),(0,s.jsx)("label",{className:"".concat(a?"":"bg-[#F8F5FB]"," input input-bordered flex items-center gap-2 w-full"),children:(0,s.jsx)("input",{type:"datetime-local",className:"grow text-[#705396]",value:w,readOnly:!a,onChange:e=>y(e.target.value)})}),D.appointmentDate&&(0,s.jsx)("span",{className:"text-red-500",children:D.appointmentDate})]})})]})]}),(0,s.jsxs)("div",{className:"my-2 relative  ".concat(et?"w-full":"w-1/2 pr-4"),children:[(0,s.jsxs)("div",{className:"flex ".concat(et?"h-[50px]":"h-[30px]"),children:[(0,s.jsx)("span",{className:"text-[#705396]  ".concat(et?"flex items-center":""," "),children:et?"ข้อความที่ต้องส่งวันที่ ".concat(p()().format("DD-MM-YYYY")):"เลือกยาที่ควรหยุดรับประทาน"}),!et&&a&&(0,s.jsx)("button",{className:"mx-2",onClick:()=>{B([...S,{id:Date.now(),name:"",dose:"",isOther:!1}])},children:(0,s.jsx)(m.default,{src:"/image/icon_addplus.png",alt:"add medication",width:30,height:30})})]}),T&&(0,s.jsx)("span",{className:"text-red-500",children:T}),(0,s.jsx)("div",{className:"rounded bg-[#E8DBF5] min-h-[48dvh] p-3",children:et?(0,s.jsx)("div",{className:"",children:t.daily_detail.filter(e=>p()(e.date_before_appointment).isSame(p()(),"day")).map((e,t)=>{var a;return(0,s.jsxs)("div",{className:"items-center m-2",children:[(0,s.jsx)("div",{className:"flex",children:null===(a=e.noti_image)||void 0===a?void 0:a.map((e,t)=>(0,s.jsx)(m.default,{src:e,width:100,height:100,alt:"notification image ".concat(t),className:"cursor-pointer max-w-[80px] h-[80px] object-cover rounded-lg mr-3",onClick:()=>window.open(e,"_blank")},t))}),(0,s.jsxs)("div",{className:"w-full text-[#705396] mt-2",children:[(0,s.jsxs)("p",{className:"my-2",children:["แจ้งคุณ ",n," ",o]}),(0,s.jsx)("p",{className:"my-2",children:"ข้อควรปฏิบัติก่อนรับการตรวจส่องกล้องลำไส้ใหญ่"}),(0,s.jsx)("div",{className:" break-words max-h-[30dvh] overflow-y-auto",dangerouslySetInnerHTML:{__html:e.noti_detail||""}})]}),(0,s.jsxs)("button",{onClick:()=>ea(e),className:"absolute top-0 left-56 text-white w-38 font-light btn btn-active mx-4 bg-[#693092] ",children:[(0,s.jsx)(m.default,{className:"gap-1",src:"/image/icon_edit.png",alt:"logo",width:30,height:30}),(0,s.jsx)("span",{children:" Edit"})]})]},t)})}):(0,s.jsxs)("div",{children:[(0,s.jsxs)("span",{className:"text-[#705396]",children:[" รายการที่เลือก ",t.patient.med.length," รายการ"]}),(0,s.jsx)("div",{className:"max-h-[45dvh] overflow-y-auto",children:a?(0,s.jsx)("div",{children:S.map(e=>(console.log(!C.some(t=>t.name===e.name)),(0,s.jsxs)("div",{className:"flex justify-between pt-2",children:[e.isOther?(0,s.jsx)("input",{type:"text",className:"w-[70%] mx-1 h-[3rem] rounded bg-[#F8F5FB] text-center text-[#705396]",value:O[e.id]||e.name||"",onChange:t=>Q(t,e.id),placeholder:"ระบุชื่อยา"}):(0,s.jsxs)("select",{className:"w-[70%] mx-1 h-[3rem] rounded bg-[#F8F5FB] text-center text-[#705396]",value:e.name,onChange:t=>K(t,e.id),children:[(0,s.jsx)("option",{value:"",disabled:!0,children:"เลือกยา"}),C.map(e=>(0,s.jsx)("option",{value:e.name,children:e.name},e.id)),(0,s.jsx)("option",{value:"other",children:"อื่นๆ"})]}),(0,s.jsxs)("select",{className:"w-[20%] mx-1 h-[3rem] rounded text-center text-[#705396]",value:e.dose,onChange:t=>X(t,e.id),children:[(0,s.jsx)("option",{value:"",disabled:!0,children:"วัน"}),[...Array(7)].map((e,t)=>(0,s.jsxs)("option",{value:t+1,children:[t+1," วัน"]},t+1))]}),(0,s.jsx)("button",{className:"mx-1",onClick:()=>J(e.id),children:(0,s.jsx)(m.default,{src:"/image/icon_delete.png",alt:"delete medication",width:30,height:30})})]},e.id)))}):(0,s.jsx)("div",{children:t.patient.med.map((e,t)=>(0,s.jsxs)("div",{className:"flex justify-between pt-2",children:[(0,s.jsx)("select",{className:"w-[70%] mx-1 h-[3rem] rounded bg-[#F8F5FB] text-center text-[#705396]",defaultValue:e.medic,disabled:!0,children:(0,s.jsx)("option",{value:e.medic,children:e.medic})}),(0,s.jsx)("select",{className:"w-[20%] mx-1 h-[3rem] rounded text-center text-[#705396]",defaultValue:e.val,disabled:!0,children:(0,s.jsxs)("option",{value:e.val,children:[e.val," วัน"]})})]},t))})})]})})]})]}),(0,s.jsxs)("div",{className:" w-[45%]",children:[(0,s.jsxs)("div",{className:"flex pl-8",children:[(0,s.jsx)("div",{className:"w-[63.016%] ",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396] ",children:"Line Username"}),(0,s.jsx)("label",{className:"bg-[#F8F5FB] relative input input-bordered flex items-center gap-2 w-full",children:(0,s.jsx)("input",{type:"text",className:"grow text-[#705396]",value:_,readOnly:!0})})]})}),(0,s.jsx)("div",{className:"flex items-center pt-6",children:(0,s.jsx)("button",{onClick:$,className:"relative text-white font-light bg-[#693092] btn btn-active mx-3",children:(0,s.jsx)(m.default,{src:"/image/icon_refresh.png",alt:"logo",width:30,height:30})})})]}),(0,s.jsx)(N,{visit_id:t.patient.visit_id,dailyDetail:t.daily_detail,notilist:P}),(0,s.jsx)(h,{isVisible:Z,onClose:()=>{A(!1),R(!1),U(I&&I.noti_detail||"")},title:"รายละเอียดการแจ้งเตือน",children:I&&(0,s.jsxs)("div",{className:"p-5",children:[(0,s.jsxs)("div",{className:"text-2xl text-[#5955B3] font-semibold",children:["แจ้งเตือนคุณ ",I.ptname]}),(0,s.jsxs)("div",{className:"text-2xl text-[#5955B3] font-semibold",children:["วันที่ ",I.date_before_appointment]}),(0,s.jsxs)("div",{className:"rounded bg-white  min-h-[48dvh] p-3 mt-4 text-xl",children:[(0,s.jsxs)("select",{className:"w-full mb-4 p-2 border rounded",value:W,onChange:e=>{let t=parseInt(e.target.value,10);console.log(t),q(t);let a=P.find(e=>e.id===t);U(a?a.detail:"")},children:[(0,s.jsx)("option",{value:0,disabled:!0,children:"เลือกการแจ้งเตือน"}),P.map(e=>(0,s.jsx)("option",{value:e.id,children:e.header},e.id))]}),(0,s.jsx)(b,{className:"h-[360px]",value:G,onChange:e=>U(e),theme:"snow"})]}),!p()(I.date_before_appointment).isBefore(p()(),"day")&&(0,s.jsx)("div",{className:"flex justify-center mt-4",children:(0,s.jsxs)("button",{onClick:es,className:"relative text-white w-38 font-light btn btn-active mx-4 bg-[#693092]",children:[(0,s.jsx)(m.default,{className:"gap-2",src:"/image/icon_save.png",alt:"logo",width:30,height:30}),(0,s.jsx)("span",{children:"Save"})]})})]})})]})]})]})})})},y=a(7138),_=e=>{let{items:t}=e,[a,l]=(0,i.useState)(!1),[n,r]=(0,i.useState)(t.patient.patient_fname),[o,x]=(0,i.useState)(t.patient.patient_lname),[p,h]=(0,i.useState)(t.patient.id_card),[u,j]=(0,i.useState)(t.patient.dob),[f,v]=(0,i.useState)("".concat(t.patient.appointment_date.split("T")[0],"T").concat(t.patient.appointment_time)),[g,b]=(0,i.useState)(t.patient.line_name),[w,_]=(0,i.useState)([]),[F,S]=(0,i.useState)([]),[B,C]=(0,i.useState)({}),[k,O]=(0,i.useState)({}),[M,D]=(0,i.useState)(""),[E,T]=(0,i.useState)([]);(0,i.useEffect)(()=>{(async()=>{try{let e=await d.Z.get("".concat("https://city.planetcloud.cloud/citybackend/lineoa/","medical"));S(e.data)}catch(e){console.error("Error fetching medical data:",e)}})(),t.patient.med&&_(t.patient.med.map(e=>({id:e.id,name:e.medic,dose:e.val,isOther:!1})))},[t.patient.med]);let L=async()=>{let e={visit_id:t.patient.visit_id,userId:t.patient.line_id};try{let t=await d.Z.post("".concat("https://city.planetcloud.cloud/citybackend/lineoa/","visit/line/renew"),e);200===t.status?b(t.data.line_name):console.error("Failed to refresh data")}catch(e){console.error("Error while refreshing data:",e)}};return(0,s.jsx)("div",{className:"px-8",children:(0,s.jsx)("div",{className:"h-full w-full rounded-[15px] bg-white p-5 ",children:(0,s.jsxs)("div",{className:"min-h-[81.71dvh] flex flex-col",children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"text-2xl text-[#5955B3] font-semibold",children:"ตรวจสำเร็จแล้ว"})}),(0,s.jsx)("div",{className:"flex",children:(0,s.jsxs)(y.default,{href:"/home/patient/new-patient?id=".concat(t.patient.visit_id),className:"relative text-white w-38 font-light btn btn-active mx-4 bg-[#693092]",children:[(0,s.jsx)(m.default,{className:"gap-2",src:"/image/icon_new_appointment.png",alt:"logo",width:30,height:30}),(0,s.jsx)("span",{children:"New Appointment"})]})})]}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsxs)("div",{className:" w-[55%]",children:[(0,s.jsxs)("form",{action:"",children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("div",{className:"w-1/2 pr-4",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396]",children:"ชื่อ"}),(0,s.jsx)("label",{className:"bg-[#F8F5FB] input input-bordered flex items-center gap-2 w-full",children:(0,s.jsx)("input",{type:"text",className:"grow text-[#705396]",readOnly:!a,value:n,onChange:e=>r(e.target.value)})})]})}),(0,s.jsx)("div",{className:"w-1/2 pl-4",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396] ",children:"นามสกุล"}),(0,s.jsx)("label",{className:"bg-[#F8F5FB] input input-bordered flex items-center gap-2 w-full",children:(0,s.jsx)("input",{type:"text",className:"grow text-[#705396]",readOnly:!a,value:o,onChange:e=>x(e.target.value)})}),k.lastname&&(0,s.jsx)("span",{className:"text-red-500",children:k.lastname})]})})]}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("div",{className:"w-1/2 pr-4",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396]",children:"เลขที่บัตรประจำตัวประชาชน"}),(0,s.jsx)("label",{className:"bg-[#F8F5FB] input input-bordered flex items-center gap-2 w-full",children:(0,s.jsx)("input",{type:"text",className:"grow text-[#705396]",value:p,maxLength:13,pattern:"\\d{13}",readOnly:!a,onChange:e=>h(e.target.value)})}),k.idCard&&(0,s.jsx)("span",{className:"text-red-500",children:k.idCard})]})}),(0,s.jsx)("div",{className:"w-1/2 pl-4",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396]",children:"วันเดือนปีเกิด"}),(0,s.jsx)("label",{className:"bg-[#F8F5FB] input input-bordered flex items-center gap-2 w-full",children:(0,s.jsx)("input",{type:"date",className:"grow text-[#705396]",value:u,readOnly:!a,onChange:e=>j(e.target.value)})}),k.birthDate&&(0,s.jsx)("span",{className:"text-red-500",children:k.birthDate})]})})]}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("div",{className:"w-1/2 pr-4",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396]",children:"วันที่ลงทะเบียน"}),(0,s.jsx)("label",{className:" bg-[#F8F5FB] input input-bordered flex items-center gap-2 w-full",children:(0,s.jsx)("input",{type:"text",className:"grow pointer-events-none text-[#705396]",value:(0,c.p)(t.patient.register_date),readOnly:!0})})]})}),(0,s.jsx)("div",{className:"w-1/2 pl-4",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396]",children:"วันนัดหมาย"}),(0,s.jsx)("label",{className:"bg-[#F8F5FB] input input-bordered flex items-center gap-2 w-full",children:(0,s.jsx)("input",{type:"datetime-local",className:"grow text-[#705396]",value:f,readOnly:!a,onChange:e=>v(e.target.value)})}),k.appointmentDate&&(0,s.jsx)("span",{className:"text-red-500",children:k.appointmentDate})]})})]})]}),(0,s.jsxs)("div",{className:"my-2 w-1/2 pr-4",children:[(0,s.jsx)("div",{className:"flex h-[30px]",children:(0,s.jsx)("span",{className:"text-[#705396]",children:"เลือกยาที่ควรหยุดรับประทาน"})}),(0,s.jsxs)("div",{className:"rounded bg-[#E8DBF5] min-h-[48dvh] p-3",children:[(0,s.jsxs)("span",{className:"text-[#705396]",children:[" รายการที่เลือก ",t.patient.med.length," รายการ"]}),(0,s.jsx)("div",{className:"max-h-[45dvh] overflow-y-auto",children:t.patient.med.map((e,t)=>(0,s.jsxs)("div",{className:"flex justify-between pt-2",children:[(0,s.jsx)("select",{className:"w-[70%] mx-1 h-[3rem] rounded bg-[#F8F5FB] text-center text-[#705396]",defaultValue:e.medic,disabled:!0,children:(0,s.jsx)("option",{value:e.medic,children:e.medic})}),(0,s.jsx)("select",{className:"w-[20%] mx-1 h-[3rem] rounded text-center text-[#705396]",defaultValue:e.val,disabled:!0,children:(0,s.jsxs)("option",{value:e.val,children:[e.val," วัน"]})})]},t))})]})]})]}),(0,s.jsxs)("div",{className:" w-[45%]",children:[(0,s.jsxs)("div",{className:"flex pl-8",children:[(0,s.jsx)("div",{className:"w-[63.016%] ",children:(0,s.jsxs)("div",{className:"my-2",children:[(0,s.jsx)("span",{className:"text-[#705396] ",children:"Line Username"}),(0,s.jsx)("label",{className:"bg-[#F8F5FB] relative input input-bordered flex items-center gap-2 w-full",children:(0,s.jsx)("input",{type:"text",className:"grow text-[#705396]",value:g,readOnly:!0})})]})}),(0,s.jsx)("div",{className:"flex items-center pt-6",children:(0,s.jsx)("button",{onClick:L,className:"relative text-white font-light bg-[#693092] btn btn-active mx-3",children:(0,s.jsx)(m.default,{src:"/image/icon_refresh.png",alt:"logo",width:30,height:30})})})]}),(0,s.jsx)(N,{visit_id:t.patient.visit_id,dailyDetail:t.daily_detail,notilist:E})]})]})]})})})},F=function(){let e=(0,n.useSearchParams)(),[t,a]=(0,i.useState)(""),[c,m]=(0,i.useState)(null),[x,p]=(0,i.useState)(!0);return((0,i.useEffect)(()=>{let t=e.get("id"),s=async()=>{try{var e;let s=await d.Z.get("".concat("https://city.planetcloud.cloud/citybackend/lineoa/","visit/task/").concat(t));m(s.data);let l=null===(e=s.data.patient)||void 0===e?void 0:e.state;"string"==typeof l&&a(l)}catch(e){console.error("Error fetching data:",e)}finally{p(!1)}};t?s():p(!1)},[e]),x)?(0,s.jsxs)("div",{className:"min-h-screen",children:[(0,s.jsx)(l.default,{}),"OTP"===t?(0,s.jsx)(o.Z,{}):(0,s.jsx)(o.o,{})]}):(console.log(c),(0,s.jsxs)("div",{className:"min-h-screen",children:[(0,s.jsx)(l.default,{}),"OTP"===t?c&&(0,s.jsx)(r,{items:c}):"Registered"===t?c&&(0,s.jsx)(w,{items:c}):c&&(0,s.jsx)(_,{items:c})]}))}},8416:function(){}},function(e){e.O(0,[325,461,990,236,648,138,304,971,23,744],function(){return e(e.s=8259)}),_N_E=e.O()}]);