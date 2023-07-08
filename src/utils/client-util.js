/**
* 判断设备类型
*/

function isClient(clientName) {
    return (
        window.navigator.userAgent
            .toLowerCase()
            .indexOf(clientName.toLowerCase()) > -1
    );
 }
 
 export function isMobile() {
   return window.screen.availWidth < 768;
 }
 
 function isIphone() {
    return isClient("iPhone");
 }
 
 function isAndroid() {
    return isClient("Android");
 }
 
 function isWeixin() {
    return isClient("MicroMessenger");
 }
 
 function isWorkWeixin() {
    return isClient("wxwork");
 }
 