"use strict";(self.webpackChunkperi=self.webpackChunkperi||[]).push([[5022],{5022:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return a}});var r=n(1811),i=n(9507),u=n(9448),a=function(e,t,n,a,c){var o=e.ownerDocument.defaultView,f=(0,i.i)(e),s=function(e){return f?-e.deltaX:e.deltaX};return(0,u.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:function(n){return f=(0,i.i)(e),function(e){var t=e.startX;return f?t>=o.innerWidth-50:t<=50}(n)&&t()},onStart:n,onMove:function(e){var t=s(e)/o.innerWidth;a(t)},onEnd:function(e){var t=s(e),n=o.innerWidth,i=t/n,u=function(e){return f?-e.velocityX:e.velocityX}(e),a=u>=0&&(u>.2||t>n/2),h=(a?1-i:i)*n,d=0;if(h>5){var l=h/Math.abs(u);d=Math.min(l,540)}c(a,i<=0?.01:(0,r.m)(0,i,.9999),d)}})}}}]);
//# sourceMappingURL=5022.0e1d77ab.chunk.js.map