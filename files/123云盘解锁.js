(()=>{var s={vip:GM_getValue("vip",1),svip:GM_getValue("svip",1),ad:GM_getValue("ad",1),name:GM_getValue("name","QingJ"),photo:GM_getValue("photo","http://q.qlogo.cn/headimg_dl?dst_uin=2903609300&spec=640&img_type=jpg"),mail:GM_getValue("mail",""),phone:GM_getValue("phone",""),id:GM_getValue("id",""),level:GM_getValue("level",128),endtime:GM_getValue("endtime",253402185600),debug:GM_getValue("debug",0)};let e=unsafeWindow.XMLHttpRequest,o=unsafeWindow.fetch,a=(unsafeWindow.XMLHttpRequest=function(){let a=new e,n=a.open.bind(a),r=a.setRequestHeader.bind(a);return a.open=function(e,t,...o){try{if(t=new URL(t,location.origin).href,(a.url=t).includes("web_logs")||t.includes("metrics"))throw new Error("【123 云盘解锁】已屏蔽此数据收集器");return n(e,t,...o)}catch(e){throw console.error("XHR open error:",e),e}},a.setRequestHeader=function(t,o){try{var e=i(),a={"user-agent":e.ua,platform:e.os.toLowerCase(),"app-version":e.version,"x-app-version":e.versionX};return t.toLowerCase()in a&&(o=a[t.toLowerCase()]),r(t,o)}catch(e){return console.error("XHR setRequestHeader error:",e),r(t,o)}},a.addEventListener("readystatechange",function(){if(4===this.readyState)try{var o=a;if(o.url){let t;try{t=JSON.parse(o.responseText)}catch(e){return}if(o.url.includes("api/user/info")&&1===s.vip?(e=>{var t;e.data&&(e.data.Vip=!0,e.data.VipLevel=s.svip?2:1,1===s.ad&&(e.data.IsShowAdvertisement=!1),s.endtime&&(t=new Date(1e3*s.endtime),e.data.VipExpire=t.toLocaleString(),e.data.UserVipDetailInfos=[{VipDesc:1===s.svip?"SVIP 会员":"VIP 会员",TimeDesc:t.toLocaleDateString()+" 到期",IsUse:t>=new Date}]),s.name&&(e.data.Nickname=s.name),s.photo&&(e.data.HeadImage=s.photo),s.mail&&(e.data.Mail=s.mail),s.phone&&(e.data.Passport=Number(s.phone)),s.id)&&(e.data.UID=Number(s.id))})(t):(o.url.includes("file/download_info")||o.url.includes("share/download_info")||o.url.includes("file/batch_download_info"))&&(t=>{if(t.data){let e=t.data.DownloadUrl||t.data.DownloadURL;if(e)try{var o,a,n=new URL(e);e=n.origin.includes("web-pro")?((o=new URL(decodeURIComponent(atob(n.searchParams.get("params"))),n.origin)).searchParams.set("auto_redirect",0),n.searchParams.set("params",btoa(o.href)),n.href):(n.searchParams.set("auto_redirect",0),(a=new URL("https://web-pro2.123952.com/download-v2/",n.origin)).searchParams.set("params",btoa(encodeURI(n.href))),a.searchParams.set("is_s3",0),decodeURIComponent(a.href)),t.data.DownloadUrl&&(t.data.DownloadUrl=e),t.data.DownloadURL&&(t.data.DownloadURL=e)}catch(e){console.error("Download URL modification error:",e)}}})(t,o.url),t&&!o._responseModified){o._responseModified=!0;let e=JSON.stringify(t);Object.defineProperties(o,{response:{configurable:!0,enumerable:!0,get:()=>e},responseText:{configurable:!0,enumerable:!0,get:()=>e}})}}}catch(e){console.error("XHR response handler error:",e)}}),a},unsafeWindow.fetch=async function(e,t){if(e.includes("web_logs")||e.includes("metrics"))throw new Error("【123 云盘解锁】已屏蔽此数据收集器");return o(e,t)},unsafeWindow.atob),i=(unsafeWindow.atob=function(t){try{return a(decodeURIComponent(t))}catch(e){return a(t)}},unsafeWindow.reddem=()=>{var e={os:"Android",vers:["6.0","7.1.2","8.1.0","9.0","10.0"]},e={Apple:{os:"iOS",vers:["12.0","13.4","14.0","15.0"]},Xiaomi:e,Samsung:e,Huawei:{...e,hmos:()=>Math.random()<.5?"HarmonyOS;":"",hmsCore:()=>`HMScore ${Math.floor(7*Math.random())+1}.${Math.floor(10*Math.random())}.${Math.floor(10*Math.random())}.${Math.floor(1e3*Math.random())};`},Google:e,Oneplus:e,Vivo:e,Oppo:e},t=["2.1.3","2.1.4","2.3.1","2.3.2","2.3.4","2.3.5","2.3.6","2.3.7","2.3.8","2.3.9","2.3.12","2.3.13","2.3.14","2.4.0","2.4.1","2.4.7"],o=t[Math.floor(Math.random()*t.length)],t=["38","39","42","43","44","45","46","47","48","49","50","54","55","56","61","62","69"][t.indexOf(o)],a=Object.keys(e),a=a[Math.floor(Math.random()*a.length)],{os:e,vers:n}=e[a],n=n[Math.floor(Math.random()*n.length)];return{ua:`123pan/v${o} (${e}_${n};${a})`,version:Number(t),versionX:o,osVersion:n,os:e,brand:a}}),r=(a,n,e)=>{var t=document.createElement("div");t.style.cssText=`
        padding: 12px;
        background: #f8f9fa;
        border-radius: 6px;
        border: 1px solid #e0e0e0;
    `;let r=document.createElement("div");r.style.cssText=`
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
    `;var o=document.createElement("strong"),o=(o.style.cssText=`
        color: #202124;
        margin-right: 10px;
        flex: 1;
    `,o.textContent=a+":",r.appendChild(o),"number"==typeof n&&(0===n||1===n)),i=["用户名","头像","等级"].includes(a);if(o){let t=document.createElement("div"),o=(t.style.cssText=`
            position: relative;
            display: inline-block;
            width: 44px;
            height: 24px;
            background: ${n?"#1a73e8":"#ccc"};
            border-radius: 12px;
            transition: all 0.3s;
            cursor: pointer;
            flex-shrink: 0;
        `,document.createElement("div"));o.style.cssText=`
            position: absolute;
            top: 2px;
            left: ${n?"22px":"2px"};
            width: 20px;
            height: 20px;
            background: white;
            border-radius: 50%;
            transition: all 0.3s;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        `,t.appendChild(o),t.onclick=()=>{var e=1===n?0:1;switch(a){case"VIP状态":s.vip=e,GM_setValue("vip",e);break;case"SVIP显示":s.svip=e,GM_setValue("svip",e);break;case"广告控制":s.ad=e,GM_setValue("ad",e);break;case"调试模式":s.debug=e,GM_setValue("debug",e)}t.style.background=e?"#1a73e8":"#ccc",o.style.left=e?"22px":"2px",n=e,location.reload()},r.appendChild(t)}else if(i){let e=document.createElement("input"),t=(e.type="等级"===a?"number":"text",e.value=n,e.style.cssText=`
            flex: 2;
            padding: 6px 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
            width: 200px;
            transition: border-color 0.3s;
        `,"等级"===a&&(e.min=0,e.max=128),e.addEventListener("focus",()=>{e.style.borderColor="#1a73e8"}),e.addEventListener("blur",()=>{e.style.borderColor="#ddd"}),document.createElement("button"));t.textContent="保存",t.style.cssText=`
            padding: 6px 12px;
            background: #1a73e8;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            margin-left: 8px;
            transition: background 0.2s;
        `,t.onmouseover=()=>{t.style.background="#1557b0"},t.onmouseout=()=>{t.style.background="#1a73e8"},t.onclick=()=>{let t=e.value;if("等级"===a&&(t=parseInt(t),isNaN(t)||t<0||128<t))alert("等级必须在 0-128 之间");else{switch(a){case"用户名":s.name=t,GM_setValue("name",t);break;case"头像":s.photo=t,GM_setValue("photo",t);break;case"等级":s.level=t,GM_setValue("level",t)}let e=document.createElement("span");e.textContent="已保存",e.style.cssText=`
                color: #188038;
                font-size: 12px;
                margin-left: 8px;
            `,r.appendChild(e),setTimeout(()=>e.remove(),2e3),location.reload()}};o=document.createElement("div");o.style.cssText=`
            display: flex;
            align-items: center;
            flex: 2;
        `,o.appendChild(e),o.appendChild(t),r.appendChild(o)}else{i=document.createElement("span");i.style.cssText=`
            color: ${"number"==typeof n?"#1a73e8":"#188038"};
            font-weight: 500;
            word-break: break-all;
            text-align: right;
            flex: 2;
        `,i.textContent="过期时间"===a?new Date(1e3*n).toLocaleString():n,r.appendChild(i)}return t.appendChild(r),e&&((o=document.createElement("div")).style.cssText=`
            margin-top: 8px;
            font-size: 12px;
            color: #5f6368;
            line-height: 1.4;
        `,o.textContent=e,t.appendChild(o)),t};function t(){if(!document.getElementById("vip-settings-panel")){let e=document.createElement("div");e.id="vip-settings-panel",e.style.cssText=`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.98), rgba(250, 250, 250, 0.98));
    backdrop-filter: blur(10px);
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    width: 520px;
    font-size: 14px;
    max-height: 85vh;
    overflow-y: auto;
    font-family: Arial, sans-serif;
    border: 1px solid rgba(230, 230, 230, 0.7);
    scrollbar-width: thin;
    scrollbar-color: #1a73e8 #f8f9fa;
`;var n=document.createElement("h3");n.textContent="123云盘VIP设置面板",n.style.cssText=`
        margin: 0 0 15px 0;
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 10px;
        border-bottom: 2px solid #e0e0e0;
        background: linear-gradient(135deg, #1a73e8, #1557b0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: 0.5px;
    `,e.appendChild(n);let t=document.createElement("div");t.style.cssText=`
    display: grid;
    gap: 15px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
`;[{key:"VIP状态",value:s.vip,comment:"会员修改总开关"},{key:"SVIP显示",value:s.svip,comment:"显示为超级会员"},{key:"广告控制",value:s.ad,comment:"关闭广告"},{key:"用户名",value:s.name,comment:"自定义用户名"},{key:"头像",value:s.photo,comment:"自定义头像URL"},{key:"等级",value:s.level,comment:"成长容量等级(最高128)"},{key:"过期时间",value:s.endtime,comment:"会员过期时间"},{key:"调试模式",value:s.debug,comment:"调试信息显示级别"}].forEach(e=>{t.appendChild(r(e.key,e.value,e.comment))}),e.appendChild(t);n=document.createElement("div");n.style.cssText=`
        height: 1px;
        background: linear-gradient(to right, transparent, #e0e0e0, transparent);
        margin: 15px 0;
    `,e.appendChild(n);let o=document.createElement("a"),a=(o.href="https://qm.qq.com/cgi-bin/qm/qr?k=7j_1SXC6SUlOKqHfqVk2YMPrWSdf5Js7&jump_from=webapi&authKey=ih1vlkxMeQc9CxE18GjR2WN0x85OQoP7jB78/3UzeJ4hvXw3+eSUNeRMjHjS24lT",o.target="_blank",o.style.cssText=`
        display: block;
        margin-top: 20px;
        padding: 12px 20px;
        background: linear-gradient(135deg, #1a73e8, #1557b0);
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.3s ease;
        box-shadow: 0 2px 6px rgba(26, 115, 232, 0.3);
    `,o.innerHTML=`
        <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            <span>加入交流群</span>
        </div>
    `,o.onmouseover=()=>{o.style.transform="translateY(-2px)",o.style.boxShadow="0 4px 12px rgba(26, 115, 232, 0.4)"},o.onmouseout=()=>{o.style.transform="translateY(0)",o.style.boxShadow="0 2px 6px rgba(26, 115, 232, 0.3)"},e.appendChild(o),document.createElement("button"));a.textContent="×",a.style.cssText=`
        position: absolute;
        top: 10px;
        right: 10px;
        width: 24px;
        height: 24px;
        border: none;
        background: #f44336;
        color: white;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        padding: 0;
        line-height: 1;
        transition: all 0.2s ease;
    `,a.onmouseover=()=>{a.style.transform="rotate(90deg)",a.style.background="#d32f2f"},a.onmouseout=()=>{a.style.transform="rotate(0)",a.style.background="#f44336"},a.onclick=()=>e.remove(),e.appendChild(a);n=document.createElement("style");n.textContent=`
        #vip-settings-panel::-webkit-scrollbar {
            width: 8px;
        }
        #vip-settings-panel::-webkit-scrollbar-track {
            background: #f8f9fa;
            border-radius: 4px;
        }
        #vip-settings-panel::-webkit-scrollbar-thumb {
            background: #1a73e8;
            border-radius: 4px;
        }
        #vip-settings-panel::-webkit-scrollbar-thumb:hover {
            background: #1557b0;
        }
    `,document.head.appendChild(n),document.body.appendChild(e)}}function n(){if(document.body){let e=document.createElement("button");e.textContent="设置面板",e.style.cssText=`
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 8px 16px;
        background: #1a73e8;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        z-index: 9998;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 2px 6px rgba(26, 115, 232, 0.3);
        transition: all 0.2s ease;
    `,e.onmouseover=()=>{e.style.background="#1557b0",e.style.boxShadow="0 4px 8px rgba(26, 115, 232, 0.4)"},e.onmouseout=()=>{e.style.background="#1a73e8",e.style.boxShadow="0 2px 6px rgba(26, 115, 232, 0.3)"},e.onclick=t,document.body.appendChild(e)}else setTimeout(n,100)}document.addEventListener("DOMContentLoaded",n),window.addEventListener("load",n),n()})();