"use strict";var App={};!function(){for(var e=0,n=["webkit","moz"],t=0;t<n.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[n[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[t]+"CancelAnimationFrame"]||window[n[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n,t){var i=(new Date).getTime(),o=Math.max(0,16-(i-e)),a=window.setTimeout(function(){n(i+o)},o);return e=i+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}();var $=document.querySelector.bind(document),$$=document.querySelectorAll.bind(document);window.LAST_MOVE=0,window.TOGGLE_SELECTION_LISTENER=function(e){var n=(new Date).getTime();window.LAST_MOVE=n;var t=150,i=(e.screenX-t)/(window.screen.width-2*t)*100;i=Math.max(Math.min(i,100),0);var o=i*(100-100/1.75)/100;$(".select .cards").style.transform="translateZ(0) translateX(-"+o+"%)"},App.toggleSelection=function(e){e?document.addEventListener("mousemove",window.TOGGLE_SELECTION_LISTENER):document.removeEventListener("mousemove",window.TOGGLE_SELECTION_LISTENER)},window.GLOBAL_SPEED=.1,window.HYPERSPACE=!0,function(e){if(e.width=window.innerWidth,e.height=window.innerHeight,e.getContext){for(var n=e.getContext("2d"),t=e.width,i=e.height,o=100,a=10,s=[],r=function(){var e=Math.random(),n=Math.random(),o=~~(80*Math.random()+20);return{x:e*t,y:n*i,xs:(e*t-t/2)/500,ys:(n*i-i/2)/500,size:~~(o/20),length:Math.random()*a,color:"rgb("+o+", "+o+", "+~~(o+20*Math.random())+")"}},d=0;o>d;d++)s.push(r());!function c(){window.HYPERSPACE&&window.requestAnimationFrame(c),n.clearRect(0,0,t,i);for(var e=0;o>e;e++){var a=s[e];(a.x<0||a.y<0||a.x>t||a.y>i)&&(a=s[e]=r()),n.strokeStyle=a.color,n.lineWidth=a.size,n.shadowBlur=5,n.lineCap="round",n.shadowColor="#555",n.beginPath(),n.moveTo(a.x,a.y),n.lineTo(a.x+.1+a.length*a.xs*window.GLOBAL_SPEED,a.y+a.length*a.ys*window.GLOBAL_SPEED),n.stroke(),a.x+=a.xs*window.GLOBAL_SPEED,a.y+=a.ys*window.GLOBAL_SPEED}}()}}($(".hyperspace")),App["goto"]=function(e,n){var t=$("section.visible"),i=$("."+e),o=n?"up":"down";if(!i||"boolean"!=typeof n)throw new Error("Wrong arguments: "+i+", "+n);if(t==i)throw new Error("Moving to the same page..");App.toggleSelection("select"===e),t&&(t.classList.remove("visible"),t.classList.add("exit-"+o),t.addEventListener("animationend",function a(e){t.removeEventListener("animationend",a),t.classList.remove("exit-"+o)})),i.classList.add("visible"),i.classList.add("enter-"+o),i.addEventListener("animationend",function s(n){i.removeEventListener("animationend",s),i.classList.remove("enter-"+o),App.setLocation(e)})},App.setLocation=function(e){window.location.hash="#/"+e},$(".begin").addEventListener("click",function(e){TOGGLE_SELECTION_LISTENER(e);var n=setInterval(function(){window.GLOBAL_SPEED=1.3*(window.GLOBAL_SPEED+.1),window.GLOBAL_SPEED>70&&clearInterval(n)},100),t=$(".home"),i=$(".select");i.addEventListener("animationend",function o(e){t.removeEventListener("animationend",o),window.HYPERSPACE=!1,t.classList.remove("visible"),t.classList.remove("exit-hyperspace"),i.classList.add("visible"),i.classList.remove("enter-hyperspace"),App.setLocation("select")}),t.classList.add("exit-hyperspace"),i.classList.add("enter-hyperspace"),App.toggleSelection(!0)}),window.addEventListener("hashchange",function(e){e.preventDefault()});for(var bindNavigation=function(e){e.addEventListener("click",function(e){App["goto"](this.getAttribute("data-target"),"up"===this.getAttribute("data-direction")),e.preventDefault()})},elements=$$(".navigation"),i=elements.length-1;i>=0;i--)bindNavigation(elements[i]);if(window.location.hash&&window.location.hash.length>2){var hash=window.location.hash.substring(2),page=$("."+hash);if(page&&page.classList.contains("page")){var current=$("section.visible");current&&current.classList.remove("visible"),page.classList.add("visible"),App.toggleSelection("select"===hash),window.HYPERSPACE="home"===hash}}console.log("Libs and App loaded !");
//# sourceMappingURL=script.js.map
