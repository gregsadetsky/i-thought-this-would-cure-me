(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jr="157",bo=0,os=1,wo=2,Ha=1,Ro=2,jt=3,$t=0,xt=1,Kt=2,ln=0,kn=1,ls=2,cs=3,us=4,Co=5,zn=100,Lo=101,Po=102,fs=103,ds=104,Do=200,Uo=201,Io=202,No=203,Ga=204,za=205,Fo=206,Oo=207,Bo=208,Ho=209,Go=210,zo=0,Vo=1,ko=2,Hr=3,Wo=4,Xo=5,qo=6,Yo=7,Kr=0,jo=1,Ko=2,cn=0,Zo=1,$o=2,Jo=3,Qo=4,el=5,Va=300,Xn=301,qn=302,Gr=303,zr=304,Ji=306,qi=1e3,Ut=1001,Vr=1002,pt=1003,hs=1004,ar=1005,wt=1006,tl=1007,ci=1008,un=1009,nl=1010,il=1011,Zr=1012,ka=1013,an=1014,on=1015,ui=1016,Wa=1017,Xa=1018,Mn=1020,rl=1021,It=1023,sl=1024,al=1025,Sn=1026,Yn=1027,ol=1028,qa=1029,ll=1030,Ya=1031,ja=1033,or=33776,lr=33777,cr=33778,ur=33779,ps=35840,ms=35841,_s=35842,gs=35843,cl=36196,vs=37492,xs=37496,Ms=37808,Ss=37809,Es=37810,ys=37811,Ts=37812,As=37813,bs=37814,ws=37815,Rs=37816,Cs=37817,Ls=37818,Ps=37819,Ds=37820,Us=37821,fr=36492,Is=36494,Ns=36495,ul=36283,Fs=36284,Os=36285,Bs=36286,Ka=3e3,En=3001,fl=3200,dl=3201,Za=0,hl=1,Ct="",nt="srgb",Jt="srgb-linear",$r="display-p3",Qi="display-p3-linear",Yi="linear",Xe="srgb",ji="rec709",Ki="p3",dr=7680,pl=519,ml=512,_l=513,gl=514,vl=515,xl=516,Ml=517,Sl=518,El=519,Hs=35044,Gs="300 es",kr=1035,Zt=2e3,Zi=2001;class Kn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,c=i.length;a<c;a++)i[a].call(this,e);e.target=null}}}const ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hr=Math.PI/180,Wr=180/Math.PI;function di(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ot[r&255]+ot[r>>8&255]+ot[r>>16&255]+ot[r>>24&255]+"-"+ot[e&255]+ot[e>>8&255]+"-"+ot[e>>16&15|64]+ot[e>>24&255]+"-"+ot[t&63|128]+ot[t>>8&255]+"-"+ot[t>>16&255]+ot[t>>24&255]+ot[n&255]+ot[n>>8&255]+ot[n>>16&255]+ot[n>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function yl(r,e){return(r%e+e)%e}function pr(r,e,t){return(1-t)*r+t*e}function zs(r){return(r&r-1)===0&&r!==0}function Xr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Qn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*i+e.x,this.y=a*i+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,n,i,a,c,l,f,u){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,c,l,f,u)}set(e,t,n,i,a,c,l,f,u){const m=this.elements;return m[0]=e,m[1]=i,m[2]=l,m[3]=t,m[4]=a,m[5]=f,m[6]=n,m[7]=c,m[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,c=n[0],l=n[3],f=n[6],u=n[1],m=n[4],s=n[7],o=n[2],d=n[5],_=n[8],g=i[0],p=i[3],h=i[6],S=i[1],x=i[4],y=i[7],w=i[2],R=i[5],C=i[8];return a[0]=c*g+l*S+f*w,a[3]=c*p+l*x+f*R,a[6]=c*h+l*y+f*C,a[1]=u*g+m*S+s*w,a[4]=u*p+m*x+s*R,a[7]=u*h+m*y+s*C,a[2]=o*g+d*S+_*w,a[5]=o*p+d*x+_*R,a[8]=o*h+d*y+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],c=e[4],l=e[5],f=e[6],u=e[7],m=e[8];return t*c*m-t*l*u-n*a*m+n*l*f+i*a*u-i*c*f}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],c=e[4],l=e[5],f=e[6],u=e[7],m=e[8],s=m*c-l*u,o=l*f-m*a,d=u*a-c*f,_=t*s+n*o+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=s*g,e[1]=(i*u-m*n)*g,e[2]=(l*n-i*c)*g,e[3]=o*g,e[4]=(m*t-i*f)*g,e[5]=(i*a-l*t)*g,e[6]=d*g,e[7]=(n*f-u*t)*g,e[8]=(c*t-n*a)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,c,l){const f=Math.cos(a),u=Math.sin(a);return this.set(n*f,n*u,-n*(f*c+u*l)+c+e,-i*u,i*f,-i*(-u*c+f*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(mr.makeScale(e,t)),this}rotate(e){return this.premultiply(mr.makeRotation(-e)),this}translate(e,t){return this.premultiply(mr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mr=new Ue;function $a(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Tl(){const r=fi("canvas");return r.style.display="block",r}const Vs={};function li(r){r in Vs||(Vs[r]=!0,console.warn(r))}const ks=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ws=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xi={[Jt]:{transfer:Yi,primaries:ji,toReference:r=>r,fromReference:r=>r},[nt]:{transfer:Xe,primaries:ji,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Qi]:{transfer:Yi,primaries:Ki,toReference:r=>r.applyMatrix3(Ws),fromReference:r=>r.applyMatrix3(ks)},[$r]:{transfer:Xe,primaries:Ki,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ws),fromReference:r=>r.applyMatrix3(ks).convertLinearToSRGB()}},Al=new Set([Jt,Qi]),Ve={enabled:!0,_workingColorSpace:Jt,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Al.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=xi[e].toReference,i=xi[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return xi[r].primaries},getTransfer:function(r){return r===Ct?Yi:xi[r].transfer}};function Wn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _r(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let An;class Ja{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{An===void 0&&(An=fi("canvas")),An.width=e.width,An.height=e.height;const n=An.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=An}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let c=0;c<a.length;c++)a[c]=Wn(a[c]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wn(t[n]/255)*255):t[n]=Wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bl=0;class Qa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bl++}),this.uuid=di(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let c=0,l=i.length;c<l;c++)i[c].isDataTexture?a.push(gr(i[c].image)):a.push(gr(i[c]))}else a=gr(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function gr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ja.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wl=0;class Mt extends Kn{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=Ut,i=Ut,a=wt,c=ci,l=It,f=un,u=Mt.DEFAULT_ANISOTROPY,m=Ct){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wl++}),this.uuid=di(),this.name="",this.source=new Qa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=c,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=f,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===En?nt:Ct),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Va)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qi:e.x=e.x-Math.floor(e.x);break;case Ut:e.x=e.x<0?0:1;break;case Vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qi:e.y=e.y-Math.floor(e.y);break;case Ut:e.y=e.y<0?0:1;break;case Vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===nt?En:Ka}set encoding(e){li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===En?nt:Ct}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Va;Mt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*i+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*i+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*i+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*i+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const f=e.elements,u=f[0],m=f[4],s=f[8],o=f[1],d=f[5],_=f[9],g=f[2],p=f[6],h=f[10];if(Math.abs(m-o)<.01&&Math.abs(s-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(m+o)<.1&&Math.abs(s+g)<.1&&Math.abs(_+p)<.1&&Math.abs(u+d+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(d+1)/2,w=(h+1)/2,R=(m+o)/4,C=(s+g)/4,z=(_+p)/4;return x>y&&x>w?x<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(x),i=R/n,a=C/n):y>w?y<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(y),n=R/i,a=z/i):w<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(w),n=C/a,i=z/a),this.set(n,i,a,t),this}let S=Math.sqrt((p-_)*(p-_)+(s-g)*(s-g)+(o-m)*(o-m));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(s-g)/S,this.z=(o-m)/S,this.w=Math.acos((u+d+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rl extends Kn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(li("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===En?nt:Ct),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends Rl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class eo extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cl extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,c,l){let f=n[i+0],u=n[i+1],m=n[i+2],s=n[i+3];const o=a[c+0],d=a[c+1],_=a[c+2],g=a[c+3];if(l===0){e[t+0]=f,e[t+1]=u,e[t+2]=m,e[t+3]=s;return}if(l===1){e[t+0]=o,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(s!==g||f!==o||u!==d||m!==_){let p=1-l;const h=f*o+u*d+m*_+s*g,S=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const w=Math.sqrt(x),R=Math.atan2(w,h*S);p=Math.sin(p*R)/w,l=Math.sin(l*R)/w}const y=l*S;if(f=f*p+o*y,u=u*p+d*y,m=m*p+_*y,s=s*p+g*y,p===1-l){const w=1/Math.sqrt(f*f+u*u+m*m+s*s);f*=w,u*=w,m*=w,s*=w}}e[t]=f,e[t+1]=u,e[t+2]=m,e[t+3]=s}static multiplyQuaternionsFlat(e,t,n,i,a,c){const l=n[i],f=n[i+1],u=n[i+2],m=n[i+3],s=a[c],o=a[c+1],d=a[c+2],_=a[c+3];return e[t]=l*_+m*s+f*d-u*o,e[t+1]=f*_+m*o+u*s-l*d,e[t+2]=u*_+m*d+l*o-f*s,e[t+3]=m*_-l*s-f*o-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,a=e._z,c=e._order,l=Math.cos,f=Math.sin,u=l(n/2),m=l(i/2),s=l(a/2),o=f(n/2),d=f(i/2),_=f(a/2);switch(c){case"XYZ":this._x=o*m*s+u*d*_,this._y=u*d*s-o*m*_,this._z=u*m*_+o*d*s,this._w=u*m*s-o*d*_;break;case"YXZ":this._x=o*m*s+u*d*_,this._y=u*d*s-o*m*_,this._z=u*m*_-o*d*s,this._w=u*m*s+o*d*_;break;case"ZXY":this._x=o*m*s-u*d*_,this._y=u*d*s+o*m*_,this._z=u*m*_+o*d*s,this._w=u*m*s-o*d*_;break;case"ZYX":this._x=o*m*s-u*d*_,this._y=u*d*s+o*m*_,this._z=u*m*_-o*d*s,this._w=u*m*s+o*d*_;break;case"YZX":this._x=o*m*s+u*d*_,this._y=u*d*s+o*m*_,this._z=u*m*_-o*d*s,this._w=u*m*s-o*d*_;break;case"XZY":this._x=o*m*s-u*d*_,this._y=u*d*s-o*m*_,this._z=u*m*_+o*d*s,this._w=u*m*s+o*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],c=t[1],l=t[5],f=t[9],u=t[2],m=t[6],s=t[10],o=n+l+s;if(o>0){const d=.5/Math.sqrt(o+1);this._w=.25/d,this._x=(m-f)*d,this._y=(a-u)*d,this._z=(c-i)*d}else if(n>l&&n>s){const d=2*Math.sqrt(1+n-l-s);this._w=(m-f)/d,this._x=.25*d,this._y=(i+c)/d,this._z=(a+u)/d}else if(l>s){const d=2*Math.sqrt(1+l-n-s);this._w=(a-u)/d,this._x=(i+c)/d,this._y=.25*d,this._z=(f+m)/d}else{const d=2*Math.sqrt(1+s-n-l);this._w=(c-i)/d,this._x=(a+u)/d,this._y=(f+m)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,c=e._w,l=t._x,f=t._y,u=t._z,m=t._w;return this._x=n*m+c*l+i*u-a*f,this._y=i*m+c*f+a*l-n*u,this._z=a*m+c*u+n*f-i*l,this._w=c*m-n*l-i*f-a*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,c=this._w;let l=c*e._w+n*e._x+i*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=i,this._z=a,this;const f=1-l*l;if(f<=Number.EPSILON){const d=1-t;return this._w=d*c+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(f),m=Math.atan2(u,l),s=Math.sin((1-t)*m)/u,o=Math.sin(t*m)/u;return this._w=c*s+this._w*o,this._x=n*s+this._x*o,this._y=i*s+this._y*o,this._z=a*s+this._z*o,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(a),n*Math.cos(a),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,c=e.y,l=e.z,f=e.w,u=f*t+c*i-l*n,m=f*n+l*t-a*i,s=f*i+a*n-c*t,o=-a*t-c*n-l*i;return this.x=u*f+o*-a+m*-l-s*-c,this.y=m*f+o*-c+s*-a-u*-l,this.z=s*f+o*-l+u*-c-m*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,c=t.x,l=t.y,f=t.z;return this.x=i*f-a*l,this.y=a*c-n*f,this.z=n*l-i*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vr.copy(this).projectOnVector(e),this.sub(vr)}reflect(e){return this.sub(vr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vr=new D,Xs=new hi;class pi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),bn.copy(e.boundingBox),bn.applyMatrix4(e.matrixWorld),this.union(bn);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const a=i.attributes.position;for(let c=0,l=a.count;c<l;c++)Vt.fromBufferAttribute(a,c).applyMatrix4(e.matrixWorld),this.expandByPoint(Vt)}else i.boundingBox===null&&i.computeBoundingBox(),bn.copy(i.boundingBox),bn.applyMatrix4(e.matrixWorld),this.union(bn)}const n=e.children;for(let i=0,a=n.length;i<a;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vt),Vt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ei),Mi.subVectors(this.max,ei),wn.subVectors(e.a,ei),Rn.subVectors(e.b,ei),Cn.subVectors(e.c,ei),en.subVectors(Rn,wn),tn.subVectors(Cn,Rn),hn.subVectors(wn,Cn);let t=[0,-en.z,en.y,0,-tn.z,tn.y,0,-hn.z,hn.y,en.z,0,-en.x,tn.z,0,-tn.x,hn.z,0,-hn.x,-en.y,en.x,0,-tn.y,tn.x,0,-hn.y,hn.x,0];return!xr(t,wn,Rn,Cn,Mi)||(t=[1,0,0,0,1,0,0,0,1],!xr(t,wn,Rn,Cn,Mi))?!1:(Si.crossVectors(en,tn),t=[Si.x,Si.y,Si.z],xr(t,wn,Rn,Cn,Mi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zt=[new D,new D,new D,new D,new D,new D,new D,new D],Vt=new D,bn=new pi,wn=new D,Rn=new D,Cn=new D,en=new D,tn=new D,hn=new D,ei=new D,Mi=new D,Si=new D,pn=new D;function xr(r,e,t,n,i){for(let a=0,c=r.length-3;a<=c;a+=3){pn.fromArray(r,a);const l=i.x*Math.abs(pn.x)+i.y*Math.abs(pn.y)+i.z*Math.abs(pn.z),f=e.dot(pn),u=t.dot(pn),m=n.dot(pn);if(Math.max(-Math.max(f,u,m),Math.min(f,u,m))>l)return!1}return!0}const Ll=new pi,ti=new D,Mr=new D;class mi{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ll.setFromPoints(e).getCenter(n);let i=0;for(let a=0,c=e.length;a<c;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ti.subVectors(e,this.center);const t=ti.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ti,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ti.copy(e.center).add(Mr)),this.expandByPoint(ti.copy(e.center).sub(Mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kt=new D,Sr=new D,Ei=new D,nn=new D,Er=new D,yi=new D,yr=new D;class Jr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kt.copy(this.origin).addScaledVector(this.direction,t),kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sr.copy(e).add(t).multiplyScalar(.5),Ei.copy(t).sub(e).normalize(),nn.copy(this.origin).sub(Sr);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Ei),l=nn.dot(this.direction),f=-nn.dot(Ei),u=nn.lengthSq(),m=Math.abs(1-c*c);let s,o,d,_;if(m>0)if(s=c*f-l,o=c*l-f,_=a*m,s>=0)if(o>=-_)if(o<=_){const g=1/m;s*=g,o*=g,d=s*(s+c*o+2*l)+o*(c*s+o+2*f)+u}else o=a,s=Math.max(0,-(c*o+l)),d=-s*s+o*(o+2*f)+u;else o=-a,s=Math.max(0,-(c*o+l)),d=-s*s+o*(o+2*f)+u;else o<=-_?(s=Math.max(0,-(-c*a+l)),o=s>0?-a:Math.min(Math.max(-a,-f),a),d=-s*s+o*(o+2*f)+u):o<=_?(s=0,o=Math.min(Math.max(-a,-f),a),d=o*(o+2*f)+u):(s=Math.max(0,-(c*a+l)),o=s>0?a:Math.min(Math.max(-a,-f),a),d=-s*s+o*(o+2*f)+u);else o=c>0?-a:a,s=Math.max(0,-(c*o+l)),d=-s*s+o*(o+2*f)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,s),i&&i.copy(Sr).addScaledVector(Ei,o),d}intersectSphere(e,t){kt.subVectors(e.center,this.origin);const n=kt.dot(this.direction),i=kt.dot(kt)-n*n,a=e.radius*e.radius;if(i>a)return null;const c=Math.sqrt(a-i),l=n-c,f=n+c;return f<0?null:l<0?this.at(f,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,c,l,f;const u=1/this.direction.x,m=1/this.direction.y,s=1/this.direction.z,o=this.origin;return u>=0?(n=(e.min.x-o.x)*u,i=(e.max.x-o.x)*u):(n=(e.max.x-o.x)*u,i=(e.min.x-o.x)*u),m>=0?(a=(e.min.y-o.y)*m,c=(e.max.y-o.y)*m):(a=(e.max.y-o.y)*m,c=(e.min.y-o.y)*m),n>c||a>i||((a>n||isNaN(n))&&(n=a),(c<i||isNaN(i))&&(i=c),s>=0?(l=(e.min.z-o.z)*s,f=(e.max.z-o.z)*s):(l=(e.max.z-o.z)*s,f=(e.min.z-o.z)*s),n>f||l>i)||((l>n||n!==n)&&(n=l),(f<i||i!==i)&&(i=f),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kt)!==null}intersectTriangle(e,t,n,i,a){Er.subVectors(t,e),yi.subVectors(n,e),yr.crossVectors(Er,yi);let c=this.direction.dot(yr),l;if(c>0){if(i)return null;l=1}else if(c<0)l=-1,c=-c;else return null;nn.subVectors(this.origin,e);const f=l*this.direction.dot(yi.crossVectors(nn,yi));if(f<0)return null;const u=l*this.direction.dot(Er.cross(nn));if(u<0||f+u>c)return null;const m=-l*nn.dot(yr);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,i,a,c,l,f,u,m,s,o,d,_,g,p){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,c,l,f,u,m,s,o,d,_,g,p)}set(e,t,n,i,a,c,l,f,u,m,s,o,d,_,g,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=i,h[1]=a,h[5]=c,h[9]=l,h[13]=f,h[2]=u,h[6]=m,h[10]=s,h[14]=o,h[3]=d,h[7]=_,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ln.setFromMatrixColumn(e,0).length(),a=1/Ln.setFromMatrixColumn(e,1).length(),c=1/Ln.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,c=Math.cos(n),l=Math.sin(n),f=Math.cos(i),u=Math.sin(i),m=Math.cos(a),s=Math.sin(a);if(e.order==="XYZ"){const o=c*m,d=c*s,_=l*m,g=l*s;t[0]=f*m,t[4]=-f*s,t[8]=u,t[1]=d+_*u,t[5]=o-g*u,t[9]=-l*f,t[2]=g-o*u,t[6]=_+d*u,t[10]=c*f}else if(e.order==="YXZ"){const o=f*m,d=f*s,_=u*m,g=u*s;t[0]=o+g*l,t[4]=_*l-d,t[8]=c*u,t[1]=c*s,t[5]=c*m,t[9]=-l,t[2]=d*l-_,t[6]=g+o*l,t[10]=c*f}else if(e.order==="ZXY"){const o=f*m,d=f*s,_=u*m,g=u*s;t[0]=o-g*l,t[4]=-c*s,t[8]=_+d*l,t[1]=d+_*l,t[5]=c*m,t[9]=g-o*l,t[2]=-c*u,t[6]=l,t[10]=c*f}else if(e.order==="ZYX"){const o=c*m,d=c*s,_=l*m,g=l*s;t[0]=f*m,t[4]=_*u-d,t[8]=o*u+g,t[1]=f*s,t[5]=g*u+o,t[9]=d*u-_,t[2]=-u,t[6]=l*f,t[10]=c*f}else if(e.order==="YZX"){const o=c*f,d=c*u,_=l*f,g=l*u;t[0]=f*m,t[4]=g-o*s,t[8]=_*s+d,t[1]=s,t[5]=c*m,t[9]=-l*m,t[2]=-u*m,t[6]=d*s+_,t[10]=o-g*s}else if(e.order==="XZY"){const o=c*f,d=c*u,_=l*f,g=l*u;t[0]=f*m,t[4]=-s,t[8]=u*m,t[1]=o*s+g,t[5]=c*m,t[9]=d*s-_,t[2]=_*s-d,t[6]=l*m,t[10]=g*s+o}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pl,e,Dl)}lookAt(e,t,n){const i=this.elements;return Et.subVectors(e,t),Et.lengthSq()===0&&(Et.z=1),Et.normalize(),rn.crossVectors(n,Et),rn.lengthSq()===0&&(Math.abs(n.z)===1?Et.x+=1e-4:Et.z+=1e-4,Et.normalize(),rn.crossVectors(n,Et)),rn.normalize(),Ti.crossVectors(Et,rn),i[0]=rn.x,i[4]=Ti.x,i[8]=Et.x,i[1]=rn.y,i[5]=Ti.y,i[9]=Et.y,i[2]=rn.z,i[6]=Ti.z,i[10]=Et.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,c=n[0],l=n[4],f=n[8],u=n[12],m=n[1],s=n[5],o=n[9],d=n[13],_=n[2],g=n[6],p=n[10],h=n[14],S=n[3],x=n[7],y=n[11],w=n[15],R=i[0],C=i[4],z=i[8],M=i[12],b=i[1],k=i[5],j=i[9],Z=i[13],L=i[2],G=i[6],X=i[10],V=i[14],te=i[3],q=i[7],W=i[11],P=i[15];return a[0]=c*R+l*b+f*L+u*te,a[4]=c*C+l*k+f*G+u*q,a[8]=c*z+l*j+f*X+u*W,a[12]=c*M+l*Z+f*V+u*P,a[1]=m*R+s*b+o*L+d*te,a[5]=m*C+s*k+o*G+d*q,a[9]=m*z+s*j+o*X+d*W,a[13]=m*M+s*Z+o*V+d*P,a[2]=_*R+g*b+p*L+h*te,a[6]=_*C+g*k+p*G+h*q,a[10]=_*z+g*j+p*X+h*W,a[14]=_*M+g*Z+p*V+h*P,a[3]=S*R+x*b+y*L+w*te,a[7]=S*C+x*k+y*G+w*q,a[11]=S*z+x*j+y*X+w*W,a[15]=S*M+x*Z+y*V+w*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],c=e[1],l=e[5],f=e[9],u=e[13],m=e[2],s=e[6],o=e[10],d=e[14],_=e[3],g=e[7],p=e[11],h=e[15];return _*(+a*f*s-i*u*s-a*l*o+n*u*o+i*l*d-n*f*d)+g*(+t*f*d-t*u*o+a*c*o-i*c*d+i*u*m-a*f*m)+p*(+t*u*s-t*l*d-a*c*s+n*c*d+a*l*m-n*u*m)+h*(-i*l*m-t*f*s+t*l*o+i*c*s-n*c*o+n*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],c=e[4],l=e[5],f=e[6],u=e[7],m=e[8],s=e[9],o=e[10],d=e[11],_=e[12],g=e[13],p=e[14],h=e[15],S=s*p*u-g*o*u+g*f*d-l*p*d-s*f*h+l*o*h,x=_*o*u-m*p*u-_*f*d+c*p*d+m*f*h-c*o*h,y=m*g*u-_*s*u+_*l*d-c*g*d-m*l*h+c*s*h,w=_*s*f-m*g*f-_*l*o+c*g*o+m*l*p-c*s*p,R=t*S+n*x+i*y+a*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=S*C,e[1]=(g*o*a-s*p*a-g*i*d+n*p*d+s*i*h-n*o*h)*C,e[2]=(l*p*a-g*f*a+g*i*u-n*p*u-l*i*h+n*f*h)*C,e[3]=(s*f*a-l*o*a-s*i*u+n*o*u+l*i*d-n*f*d)*C,e[4]=x*C,e[5]=(m*p*a-_*o*a+_*i*d-t*p*d-m*i*h+t*o*h)*C,e[6]=(_*f*a-c*p*a-_*i*u+t*p*u+c*i*h-t*f*h)*C,e[7]=(c*o*a-m*f*a+m*i*u-t*o*u-c*i*d+t*f*d)*C,e[8]=y*C,e[9]=(_*s*a-m*g*a-_*n*d+t*g*d+m*n*h-t*s*h)*C,e[10]=(c*g*a-_*l*a+_*n*u-t*g*u-c*n*h+t*l*h)*C,e[11]=(m*l*a-c*s*a-m*n*u+t*s*u+c*n*d-t*l*d)*C,e[12]=w*C,e[13]=(m*g*i-_*s*i+_*n*o-t*g*o-m*n*p+t*s*p)*C,e[14]=(_*l*i-c*g*i-_*n*f+t*g*f+c*n*p-t*l*p)*C,e[15]=(c*s*i-m*l*i+m*n*f-t*s*f-c*n*o+t*l*o)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,c=e.x,l=e.y,f=e.z,u=a*c,m=a*l;return this.set(u*c+n,u*l-i*f,u*f+i*l,0,u*l+i*f,m*l+n,m*f-i*c,0,u*f-i*l,m*f+i*c,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,c){return this.set(1,n,a,0,e,1,c,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,c=t._y,l=t._z,f=t._w,u=a+a,m=c+c,s=l+l,o=a*u,d=a*m,_=a*s,g=c*m,p=c*s,h=l*s,S=f*u,x=f*m,y=f*s,w=n.x,R=n.y,C=n.z;return i[0]=(1-(g+h))*w,i[1]=(d+y)*w,i[2]=(_-x)*w,i[3]=0,i[4]=(d-y)*R,i[5]=(1-(o+h))*R,i[6]=(p+S)*R,i[7]=0,i[8]=(_+x)*C,i[9]=(p-S)*C,i[10]=(1-(o+g))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=Ln.set(i[0],i[1],i[2]).length();const c=Ln.set(i[4],i[5],i[6]).length(),l=Ln.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],Lt.copy(this);const u=1/a,m=1/c,s=1/l;return Lt.elements[0]*=u,Lt.elements[1]*=u,Lt.elements[2]*=u,Lt.elements[4]*=m,Lt.elements[5]*=m,Lt.elements[6]*=m,Lt.elements[8]*=s,Lt.elements[9]*=s,Lt.elements[10]*=s,t.setFromRotationMatrix(Lt),n.x=a,n.y=c,n.z=l,this}makePerspective(e,t,n,i,a,c,l=Zt){const f=this.elements,u=2*a/(t-e),m=2*a/(n-i),s=(t+e)/(t-e),o=(n+i)/(n-i);let d,_;if(l===Zt)d=-(c+a)/(c-a),_=-2*c*a/(c-a);else if(l===Zi)d=-c/(c-a),_=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return f[0]=u,f[4]=0,f[8]=s,f[12]=0,f[1]=0,f[5]=m,f[9]=o,f[13]=0,f[2]=0,f[6]=0,f[10]=d,f[14]=_,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,i,a,c,l=Zt){const f=this.elements,u=1/(t-e),m=1/(n-i),s=1/(c-a),o=(t+e)*u,d=(n+i)*m;let _,g;if(l===Zt)_=(c+a)*s,g=-2*s;else if(l===Zi)_=a*s,g=-1*s;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return f[0]=2*u,f[4]=0,f[8]=0,f[12]=-o,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-d,f[2]=0,f[6]=0,f[10]=g,f[14]=-_,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ln=new D,Lt=new Je,Pl=new D(0,0,0),Dl=new D(1,1,1),rn=new D,Ti=new D,Et=new D,qs=new Je,Ys=new hi;class er{constructor(e=0,t=0,n=0,i=er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],c=i[4],l=i[8],f=i[1],u=i[5],m=i[9],s=i[2],o=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-m,d),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(o,u),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(f,u)):(this._y=Math.atan2(-s,a),this._z=0);break;case"ZXY":this._x=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._y=Math.atan2(-s,d),this._z=Math.atan2(-c,u)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(o,d),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,u));break;case"YZX":this._z=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,u),this._y=Math.atan2(-s,a)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(o,u),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-m,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ys.setFromEuler(this),this.setFromQuaternion(Ys,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";class to{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ul=0;const js=new D,Pn=new hi,Wt=new Je,Ai=new D,ni=new D,Il=new D,Nl=new hi,Ks=new D(1,0,0),Zs=new D(0,1,0),$s=new D(0,0,1),Fl={type:"added"},Ol={type:"removed"};class ct extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new D,t=new er,n=new hi,i=new D(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ue}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new to,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pn.setFromAxisAngle(e,t),this.quaternion.multiply(Pn),this}rotateOnWorldAxis(e,t){return Pn.setFromAxisAngle(e,t),this.quaternion.premultiply(Pn),this}rotateX(e){return this.rotateOnAxis(Ks,e)}rotateY(e){return this.rotateOnAxis(Zs,e)}rotateZ(e){return this.rotateOnAxis($s,e)}translateOnAxis(e,t){return js.copy(e).applyQuaternion(this.quaternion),this.position.add(js.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ks,e)}translateY(e){return this.translateOnAxis(Zs,e)}translateZ(e){return this.translateOnAxis($s,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ai.copy(e):Ai.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wt.lookAt(ni,Ai,this.up):Wt.lookAt(Ai,ni,this.up),this.quaternion.setFromRotationMatrix(Wt),i&&(Wt.extractRotation(i.matrixWorld),Pn.setFromRotationMatrix(Wt),this.quaternion.premultiply(Pn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Fl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ol)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectsByProperty(e,t);c.length>0&&(n=n.concat(c))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ni,e,Il),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ni,Nl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let a=0,c=i.length;a<c;a++){const l=i[a];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function a(l,f){return l[f.uuid]===void 0&&(l[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const f=l.shapes;if(Array.isArray(f))for(let u=0,m=f.length;u<m;u++){const s=f[u];a(e.shapes,s)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let f=0,u=this.material.length;f<u;f++)l.push(a(e.materials,this.material[f]));i.material=l}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const f=this.animations[l];i.animations.push(a(e.animations,f))}}if(t){const l=c(e.geometries),f=c(e.materials),u=c(e.textures),m=c(e.images),s=c(e.shapes),o=c(e.skeletons),d=c(e.animations),_=c(e.nodes);l.length>0&&(n.geometries=l),f.length>0&&(n.materials=f),u.length>0&&(n.textures=u),m.length>0&&(n.images=m),s.length>0&&(n.shapes=s),o.length>0&&(n.skeletons=o),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function c(l){const f=[];for(const u in l){const m=l[u];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ct.DEFAULT_UP=new D(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pt=new D,Xt=new D,Tr=new D,qt=new D,Dn=new D,Un=new D,Js=new D,Ar=new D,br=new D,wr=new D;let bi=!1;class Dt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pt.subVectors(e,t),i.cross(Pt);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){Pt.subVectors(i,t),Xt.subVectors(n,t),Tr.subVectors(e,t);const c=Pt.dot(Pt),l=Pt.dot(Xt),f=Pt.dot(Tr),u=Xt.dot(Xt),m=Xt.dot(Tr),s=c*u-l*l;if(s===0)return a.set(-2,-1,-1);const o=1/s,d=(u*f-l*m)*o,_=(c*m-l*f)*o;return a.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qt),qt.x>=0&&qt.y>=0&&qt.x+qt.y<=1}static getUV(e,t,n,i,a,c,l,f){return bi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bi=!0),this.getInterpolation(e,t,n,i,a,c,l,f)}static getInterpolation(e,t,n,i,a,c,l,f){return this.getBarycoord(e,t,n,i,qt),f.setScalar(0),f.addScaledVector(a,qt.x),f.addScaledVector(c,qt.y),f.addScaledVector(l,qt.z),f}static isFrontFacing(e,t,n,i){return Pt.subVectors(n,t),Xt.subVectors(e,t),Pt.cross(Xt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pt.subVectors(this.c,this.b),Xt.subVectors(this.a,this.b),Pt.cross(Xt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,a){return bi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bi=!0),Dt.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}getInterpolation(e,t,n,i,a){return Dt.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return Dt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let c,l;Dn.subVectors(i,n),Un.subVectors(a,n),Ar.subVectors(e,n);const f=Dn.dot(Ar),u=Un.dot(Ar);if(f<=0&&u<=0)return t.copy(n);br.subVectors(e,i);const m=Dn.dot(br),s=Un.dot(br);if(m>=0&&s<=m)return t.copy(i);const o=f*s-m*u;if(o<=0&&f>=0&&m<=0)return c=f/(f-m),t.copy(n).addScaledVector(Dn,c);wr.subVectors(e,a);const d=Dn.dot(wr),_=Un.dot(wr);if(_>=0&&d<=_)return t.copy(a);const g=d*u-f*_;if(g<=0&&u>=0&&_<=0)return l=u/(u-_),t.copy(n).addScaledVector(Un,l);const p=m*_-d*s;if(p<=0&&s-m>=0&&d-_>=0)return Js.subVectors(a,i),l=(s-m)/(s-m+(d-_)),t.copy(i).addScaledVector(Js,l);const h=1/(p+g+o);return c=g*h,l=o*h,t.copy(n).addScaledVector(Dn,c).addScaledVector(Un,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Bl=0;class Qt extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=di(),this.name="",this.type="Material",this.blending=kn,this.side=$t,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=za,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kn&&(n.blending=this.blending),this.side!==$t&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const c=[];for(const l in a){const f=a[l];delete f.metadata,c.push(f)}return c}if(t){const a=i(e.textures),c=i(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const no={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sn={h:0,s:0,l:0},wi={h:0,s:0,l:0};function Rr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ve.workingColorSpace){if(e=yl(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=Rr(c,a,e+1/3),this.g=Rr(c,a,e),this.b=Rr(c,a,e-1/3)}return Ve.toWorkingColorSpace(this,i),this}setStyle(e,t=nt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=i[1],l=i[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){const n=no[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return Ve.fromWorkingColorSpace(lt.copy(this),e),Math.round(vt(lt.r*255,0,255))*65536+Math.round(vt(lt.g*255,0,255))*256+Math.round(vt(lt.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(lt.copy(this),t);const n=lt.r,i=lt.g,a=lt.b,c=Math.max(n,i,a),l=Math.min(n,i,a);let f,u;const m=(l+c)/2;if(l===c)f=0,u=0;else{const s=c-l;switch(u=m<=.5?s/(c+l):s/(2-c-l),c){case n:f=(i-a)/s+(i<a?6:0);break;case i:f=(a-n)/s+2;break;case a:f=(n-i)/s+4;break}f/=6}return e.h=f,e.s=u,e.l=m,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(lt.copy(this),t),e.r=lt.r,e.g=lt.g,e.b=lt.b,e}getStyle(e=nt){Ve.fromWorkingColorSpace(lt.copy(this),e);const t=lt.r,n=lt.g,i=lt.b;return e!==nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(sn),this.setHSL(sn.h+e,sn.s+t,sn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(sn),e.getHSL(wi);const n=pr(sn.h,wi.h,t),i=pr(sn.s,wi.s,t),a=pr(sn.l,wi.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const lt=new Oe;Oe.NAMES=no;class io extends Qt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $e=new D,Ri=new Ge;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hs,this.updateRange={offset:0,count:-1},this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ri.fromBufferAttribute(this,t),Ri.applyMatrix3(e),this.setXY(t,Ri.x,Ri.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix3(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix4(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyNormalMatrix(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.transformDirection(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),a=gt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ro extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class so extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hl=0;const At=new Je,Cr=new ct,In=new D,yt=new pi,ii=new pi,tt=new D;class Nt extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hl++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($a(e)?so:ro)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ue().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return At.makeRotationFromQuaternion(e),this.applyMatrix4(At),this}rotateX(e){return At.makeRotationX(e),this.applyMatrix4(At),this}rotateY(e){return At.makeRotationY(e),this.applyMatrix4(At),this}rotateZ(e){return At.makeRotationZ(e),this.applyMatrix4(At),this}translate(e,t,n){return At.makeTranslation(e,t,n),this.applyMatrix4(At),this}scale(e,t,n){return At.makeScale(e,t,n),this.applyMatrix4(At),this}lookAt(e){return Cr.lookAt(e),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(In).negate(),this.translate(In.x,In.y,In.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];yt.setFromBufferAttribute(a),this.morphTargetsRelative?(tt.addVectors(this.boundingBox.min,yt.min),this.boundingBox.expandByPoint(tt),tt.addVectors(this.boundingBox.max,yt.max),this.boundingBox.expandByPoint(tt)):(this.boundingBox.expandByPoint(yt.min),this.boundingBox.expandByPoint(yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(yt.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const l=t[a];ii.setFromBufferAttribute(l),this.morphTargetsRelative?(tt.addVectors(yt.min,ii.min),yt.expandByPoint(tt),tt.addVectors(yt.max,ii.max),yt.expandByPoint(tt)):(yt.expandByPoint(ii.min),yt.expandByPoint(ii.max))}yt.getCenter(n);let i=0;for(let a=0,c=e.count;a<c;a++)tt.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(tt));if(t)for(let a=0,c=t.length;a<c;a++){const l=t[a],f=this.morphTargetsRelative;for(let u=0,m=l.count;u<m;u++)tt.fromBufferAttribute(l,u),f&&(In.fromBufferAttribute(e,u),tt.add(In)),i=Math.max(i,n.distanceToSquared(tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,a=t.normal.array,c=t.uv.array,l=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*l),4));const f=this.getAttribute("tangent").array,u=[],m=[];for(let b=0;b<l;b++)u[b]=new D,m[b]=new D;const s=new D,o=new D,d=new D,_=new Ge,g=new Ge,p=new Ge,h=new D,S=new D;function x(b,k,j){s.fromArray(i,b*3),o.fromArray(i,k*3),d.fromArray(i,j*3),_.fromArray(c,b*2),g.fromArray(c,k*2),p.fromArray(c,j*2),o.sub(s),d.sub(s),g.sub(_),p.sub(_);const Z=1/(g.x*p.y-p.x*g.y);isFinite(Z)&&(h.copy(o).multiplyScalar(p.y).addScaledVector(d,-g.y).multiplyScalar(Z),S.copy(d).multiplyScalar(g.x).addScaledVector(o,-p.x).multiplyScalar(Z),u[b].add(h),u[k].add(h),u[j].add(h),m[b].add(S),m[k].add(S),m[j].add(S))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let b=0,k=y.length;b<k;++b){const j=y[b],Z=j.start,L=j.count;for(let G=Z,X=Z+L;G<X;G+=3)x(n[G+0],n[G+1],n[G+2])}const w=new D,R=new D,C=new D,z=new D;function M(b){C.fromArray(a,b*3),z.copy(C);const k=u[b];w.copy(k),w.sub(C.multiplyScalar(C.dot(k))).normalize(),R.crossVectors(z,k);const Z=R.dot(m[b])<0?-1:1;f[b*4]=w.x,f[b*4+1]=w.y,f[b*4+2]=w.z,f[b*4+3]=Z}for(let b=0,k=y.length;b<k;++b){const j=y[b],Z=j.start,L=j.count;for(let G=Z,X=Z+L;G<X;G+=3)M(n[G+0]),M(n[G+1]),M(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let o=0,d=n.count;o<d;o++)n.setXYZ(o,0,0,0);const i=new D,a=new D,c=new D,l=new D,f=new D,u=new D,m=new D,s=new D;if(e)for(let o=0,d=e.count;o<d;o+=3){const _=e.getX(o+0),g=e.getX(o+1),p=e.getX(o+2);i.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),c.fromBufferAttribute(t,p),m.subVectors(c,a),s.subVectors(i,a),m.cross(s),l.fromBufferAttribute(n,_),f.fromBufferAttribute(n,g),u.fromBufferAttribute(n,p),l.add(m),f.add(m),u.add(m),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,f.x,f.y,f.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let o=0,d=t.count;o<d;o+=3)i.fromBufferAttribute(t,o+0),a.fromBufferAttribute(t,o+1),c.fromBufferAttribute(t,o+2),m.subVectors(c,a),s.subVectors(i,a),m.cross(s),n.setXYZ(o+0,m.x,m.y,m.z),n.setXYZ(o+1,m.x,m.y,m.z),n.setXYZ(o+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tt.fromBufferAttribute(e,t),tt.normalize(),e.setXYZ(t,tt.x,tt.y,tt.z)}toNonIndexed(){function e(l,f){const u=l.array,m=l.itemSize,s=l.normalized,o=new u.constructor(f.length*m);let d=0,_=0;for(let g=0,p=f.length;g<p;g++){l.isInterleavedBufferAttribute?d=f[g]*l.data.stride+l.offset:d=f[g]*m;for(let h=0;h<m;h++)o[_++]=u[d++]}return new Ht(o,m,s)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,i=this.attributes;for(const l in i){const f=i[l],u=e(f,n);t.setAttribute(l,u)}const a=this.morphAttributes;for(const l in a){const f=[],u=a[l];for(let m=0,s=u.length;m<s;m++){const o=u[m],d=e(o,n);f.push(d)}t.morphAttributes[l]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,f=c.length;l<f;l++){const u=c[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const u in f)f[u]!==void 0&&(e[u]=f[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const u=n[f];e.data.attributes[f]=u.toJSON(e.data)}const i={};let a=!1;for(const f in this.morphAttributes){const u=this.morphAttributes[f],m=[];for(let s=0,o=u.length;s<o;s++){const d=u[s];m.push(d.toJSON(e.data))}m.length>0&&(i[f]=m,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const m=i[u];this.setAttribute(u,m.clone(t))}const a=e.morphAttributes;for(const u in a){const m=[],s=a[u];for(let o=0,d=s.length;o<d;o++)m.push(s[o].clone(t));this.morphAttributes[u]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let u=0,m=c.length;u<m;u++){const s=c[u];this.addGroup(s.start,s.count,s.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qs=new Je,mn=new Jr,Ci=new mi,ea=new D,Nn=new D,Fn=new D,On=new D,Lr=new D,Li=new D,Pi=new Ge,Di=new Ge,Ui=new Ge,ta=new D,na=new D,ia=new D,Ii=new D,Ni=new D;class Bt extends ct{constructor(e=new Nt,t=new io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=i.length;a<c;a++){const l=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(a&&l){Li.set(0,0,0);for(let f=0,u=a.length;f<u;f++){const m=l[f],s=a[f];m!==0&&(Lr.fromBufferAttribute(s,e),c?Li.addScaledVector(Lr,m):Li.addScaledVector(Lr.sub(t),m))}t.add(Li)}return t}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ci.copy(n.boundingSphere),Ci.applyMatrix4(a),mn.copy(e.ray).recast(e.near),!(Ci.containsPoint(mn.origin)===!1&&(mn.intersectSphere(Ci,ea)===null||mn.origin.distanceToSquared(ea)>(e.far-e.near)**2))&&(Qs.copy(a).invert(),mn.copy(e.ray).applyMatrix4(Qs),!(n.boundingBox!==null&&mn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mn)))}_computeIntersections(e,t,n){let i;const a=this.geometry,c=this.material,l=a.index,f=a.attributes.position,u=a.attributes.uv,m=a.attributes.uv1,s=a.attributes.normal,o=a.groups,d=a.drawRange;if(l!==null)if(Array.isArray(c))for(let _=0,g=o.length;_<g;_++){const p=o[_],h=c[p.materialIndex],S=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=S,w=x;y<w;y+=3){const R=l.getX(y),C=l.getX(y+1),z=l.getX(y+2);i=Fi(this,h,e,n,u,m,s,R,C,z),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,h=g;p<h;p+=3){const S=l.getX(p),x=l.getX(p+1),y=l.getX(p+2);i=Fi(this,c,e,n,u,m,s,S,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(f!==void 0)if(Array.isArray(c))for(let _=0,g=o.length;_<g;_++){const p=o[_],h=c[p.materialIndex],S=Math.max(p.start,d.start),x=Math.min(f.count,Math.min(p.start+p.count,d.start+d.count));for(let y=S,w=x;y<w;y+=3){const R=y,C=y+1,z=y+2;i=Fi(this,h,e,n,u,m,s,R,C,z),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(f.count,d.start+d.count);for(let p=_,h=g;p<h;p+=3){const S=p,x=p+1,y=p+2;i=Fi(this,c,e,n,u,m,s,S,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Gl(r,e,t,n,i,a,c,l){let f;if(e.side===xt?f=n.intersectTriangle(c,a,i,!0,l):f=n.intersectTriangle(i,a,c,e.side===$t,l),f===null)return null;Ni.copy(l),Ni.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(Ni);return u<t.near||u>t.far?null:{distance:u,point:Ni.clone(),object:r}}function Fi(r,e,t,n,i,a,c,l,f,u){r.getVertexPosition(l,Nn),r.getVertexPosition(f,Fn),r.getVertexPosition(u,On);const m=Gl(r,e,t,n,Nn,Fn,On,Ii);if(m){i&&(Pi.fromBufferAttribute(i,l),Di.fromBufferAttribute(i,f),Ui.fromBufferAttribute(i,u),m.uv=Dt.getInterpolation(Ii,Nn,Fn,On,Pi,Di,Ui,new Ge)),a&&(Pi.fromBufferAttribute(a,l),Di.fromBufferAttribute(a,f),Ui.fromBufferAttribute(a,u),m.uv1=Dt.getInterpolation(Ii,Nn,Fn,On,Pi,Di,Ui,new Ge),m.uv2=m.uv1),c&&(ta.fromBufferAttribute(c,l),na.fromBufferAttribute(c,f),ia.fromBufferAttribute(c,u),m.normal=Dt.getInterpolation(Ii,Nn,Fn,On,ta,na,ia,new D),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const s={a:l,b:f,c:u,normal:new D,materialIndex:0};Dt.getNormal(Nn,Fn,On,s.normal),m.face=s}return m}class _i extends Nt{constructor(e=1,t=1,n=1,i=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:c};const l=this;i=Math.floor(i),a=Math.floor(a),c=Math.floor(c);const f=[],u=[],m=[],s=[];let o=0,d=0;_("z","y","x",-1,-1,n,t,e,c,a,0),_("z","y","x",1,-1,n,t,-e,c,a,1),_("x","z","y",1,1,e,n,t,i,c,2),_("x","z","y",1,-1,e,n,-t,i,c,3),_("x","y","z",1,-1,e,t,n,i,a,4),_("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(f),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(m,3)),this.setAttribute("uv",new mt(s,2));function _(g,p,h,S,x,y,w,R,C,z,M){const b=y/C,k=w/z,j=y/2,Z=w/2,L=R/2,G=C+1,X=z+1;let V=0,te=0;const q=new D;for(let W=0;W<X;W++){const P=W*k-Z;for(let H=0;H<G;H++){const ae=H*b-j;q[g]=ae*S,q[p]=P*x,q[h]=L,u.push(q.x,q.y,q.z),q[g]=0,q[p]=0,q[h]=R>0?1:-1,m.push(q.x,q.y,q.z),s.push(H/C),s.push(1-W/z),V+=1}}for(let W=0;W<z;W++)for(let P=0;P<C;P++){const H=o+P+G*W,ae=o+P+G*(W+1),oe=o+(P+1)+G*(W+1),fe=o+(P+1)+G*W;f.push(H,ae,fe),f.push(ae,oe,fe),te+=6}l.addGroup(d,te,M),d+=te,o+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jn(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ht(r){const e={};for(let t=0;t<r.length;t++){const n=jn(r[t]);for(const i in n)e[i]=n[i]}return e}function zl(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ao(r){return r.getRenderTarget()===null?r.outputColorSpace:Ve.workingColorSpace}const Vl={clone:jn,merge:ht};var kl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends Qt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kl,this.fragmentShader=Wl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jn(e.uniforms),this.uniformsGroups=zl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const c=this.uniforms[i].value;c&&c.isTexture?t.uniforms[i]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[i]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[i]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[i]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[i]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[i]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[i]={type:"m4",value:c.toArray()}:t.uniforms[i]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class oo extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Zt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rt extends oo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,u=c.fullHeight;a+=c.offsetX*i/f,t-=c.offsetY*n/u,i*=c.width/f,n*=c.height/u}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bn=-90,Hn=1;class Xl extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Rt(Bn,Hn,e,t);i.layers=this.layers,this.add(i);const a=new Rt(Bn,Hn,e,t);a.layers=this.layers,this.add(a);const c=new Rt(Bn,Hn,e,t);c.layers=this.layers,this.add(c);const l=new Rt(Bn,Hn,e,t);l.layers=this.layers,this.add(l);const f=new Rt(Bn,Hn,e,t);f.layers=this.layers,this.add(f);const u=new Rt(Bn,Hn,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,c,l,f]=t;for(const u of t)this.remove(u);if(e===Zt)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Zi)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,l,f,u,m]=this.children,s=e.getRenderTarget(),o=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,a),e.setRenderTarget(n,1,i),e.render(t,c),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,f),e.setRenderTarget(n,4,i),e.render(t,u),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,m),e.setRenderTarget(s,o,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class lo extends Mt{constructor(e,t,n,i,a,c,l,f,u,m){e=e!==void 0?e:[],t=t!==void 0?t:Xn,super(e,t,n,i,a,c,l,f,u,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ql extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(li("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===En?nt:Ct),this.texture=new lo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new _i(5,5,5),a=new Tn({name:"CubemapFromEquirect",uniforms:jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xt,blending:ln});a.uniforms.tEquirect.value=t;const c=new Bt(i,a),l=t.minFilter;return t.minFilter===ci&&(t.minFilter=wt),new Xl(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,i){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,i);e.setRenderTarget(a)}}const Pr=new D,Yl=new D,jl=new Ue;class gn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Pr.subVectors(n,t).cross(Yl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jl.getNormalMatrix(e),i=this.coplanarPoint(Pr).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _n=new mi,Oi=new D;class co{constructor(e=new gn,t=new gn,n=new gn,i=new gn,a=new gn,c=new gn){this.planes=[e,t,n,i,a,c]}set(e,t,n,i,a,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(a),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zt){const n=this.planes,i=e.elements,a=i[0],c=i[1],l=i[2],f=i[3],u=i[4],m=i[5],s=i[6],o=i[7],d=i[8],_=i[9],g=i[10],p=i[11],h=i[12],S=i[13],x=i[14],y=i[15];if(n[0].setComponents(f-a,o-u,p-d,y-h).normalize(),n[1].setComponents(f+a,o+u,p+d,y+h).normalize(),n[2].setComponents(f+c,o+m,p+_,y+S).normalize(),n[3].setComponents(f-c,o-m,p-_,y-S).normalize(),n[4].setComponents(f-l,o-s,p-g,y-x).normalize(),t===Zt)n[5].setComponents(f+l,o+s,p+g,y+x).normalize();else if(t===Zi)n[5].setComponents(l,s,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_n)}intersectsSprite(e){return _n.center.set(0,0,0),_n.radius=.7071067811865476,_n.applyMatrix4(e.matrixWorld),this.intersectsSphere(_n)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Oi.x=i.normal.x>0?e.max.x:e.min.x,Oi.y=i.normal.y>0?e.max.y:e.min.y,Oi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Oi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uo(){let r=null,e=!1,t=null,n=null;function i(a,c){t(a,c),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Kl(r,e){const t=e.isWebGL2,n=new WeakMap;function i(u,m){const s=u.array,o=u.usage,d=r.createBuffer();r.bindBuffer(m,d),r.bufferData(m,s,o),u.onUploadCallback();let _;if(s instanceof Float32Array)_=r.FLOAT;else if(s instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(s instanceof Int16Array)_=r.SHORT;else if(s instanceof Uint32Array)_=r.UNSIGNED_INT;else if(s instanceof Int32Array)_=r.INT;else if(s instanceof Int8Array)_=r.BYTE;else if(s instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(s instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+s);return{buffer:d,type:_,bytesPerElement:s.BYTES_PER_ELEMENT,version:u.version}}function a(u,m,s){const o=m.array,d=m.updateRange;r.bindBuffer(s,u),d.count===-1?r.bufferSubData(s,0,o):(t?r.bufferSubData(s,d.offset*o.BYTES_PER_ELEMENT,o,d.offset,d.count):r.bufferSubData(s,d.offset*o.BYTES_PER_ELEMENT,o.subarray(d.offset,d.offset+d.count)),d.count=-1),m.onUploadCallback()}function c(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const m=n.get(u);m&&(r.deleteBuffer(m.buffer),n.delete(u))}function f(u,m){if(u.isGLBufferAttribute){const o=n.get(u);(!o||o.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const s=n.get(u);s===void 0?n.set(u,i(u,m)):s.version<u.version&&(a(s.buffer,u,m),s.version=u.version)}return{get:c,remove:l,update:f}}class Qr extends Nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,c=t/2,l=Math.floor(n),f=Math.floor(i),u=l+1,m=f+1,s=e/l,o=t/f,d=[],_=[],g=[],p=[];for(let h=0;h<m;h++){const S=h*o-c;for(let x=0;x<u;x++){const y=x*s-a;_.push(y,-S,0),g.push(0,0,1),p.push(x/l),p.push(1-h/f)}}for(let h=0;h<f;h++)for(let S=0;S<l;S++){const x=S+u*h,y=S+u*(h+1),w=S+1+u*(h+1),R=S+1+u*h;d.push(x,y,R),d.push(y,w,R)}this.setIndex(d),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(g,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$l=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ql=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ec=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ic=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ac=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,uc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_c=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ec=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ac=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,bc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ic=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Oc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Yc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jc=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$c=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,eu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ru=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,su=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,au=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ou=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,uu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,du=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_u=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Su=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Au=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ru=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Lu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Du=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Nu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ou=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ju=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ju=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ef=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,of=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lf=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ff=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_f=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Le={alphahash_fragment:Zl,alphahash_pars_fragment:$l,alphamap_fragment:Jl,alphamap_pars_fragment:Ql,alphatest_fragment:ec,alphatest_pars_fragment:tc,aomap_fragment:nc,aomap_pars_fragment:ic,begin_vertex:rc,beginnormal_vertex:sc,bsdfs:ac,iridescence_fragment:oc,bumpmap_pars_fragment:lc,clipping_planes_fragment:cc,clipping_planes_pars_fragment:uc,clipping_planes_pars_vertex:fc,clipping_planes_vertex:dc,color_fragment:hc,color_pars_fragment:pc,color_pars_vertex:mc,color_vertex:_c,common:gc,cube_uv_reflection_fragment:vc,defaultnormal_vertex:xc,displacementmap_pars_vertex:Mc,displacementmap_vertex:Sc,emissivemap_fragment:Ec,emissivemap_pars_fragment:yc,colorspace_fragment:Tc,colorspace_pars_fragment:Ac,envmap_fragment:bc,envmap_common_pars_fragment:wc,envmap_pars_fragment:Rc,envmap_pars_vertex:Cc,envmap_physical_pars_fragment:zc,envmap_vertex:Lc,fog_vertex:Pc,fog_pars_vertex:Dc,fog_fragment:Uc,fog_pars_fragment:Ic,gradientmap_pars_fragment:Nc,lightmap_fragment:Fc,lightmap_pars_fragment:Oc,lights_lambert_fragment:Bc,lights_lambert_pars_fragment:Hc,lights_pars_begin:Gc,lights_toon_fragment:Vc,lights_toon_pars_fragment:kc,lights_phong_fragment:Wc,lights_phong_pars_fragment:Xc,lights_physical_fragment:qc,lights_physical_pars_fragment:Yc,lights_fragment_begin:jc,lights_fragment_maps:Kc,lights_fragment_end:Zc,logdepthbuf_fragment:$c,logdepthbuf_pars_fragment:Jc,logdepthbuf_pars_vertex:Qc,logdepthbuf_vertex:eu,map_fragment:tu,map_pars_fragment:nu,map_particle_fragment:iu,map_particle_pars_fragment:ru,metalnessmap_fragment:su,metalnessmap_pars_fragment:au,morphcolor_vertex:ou,morphnormal_vertex:lu,morphtarget_pars_vertex:cu,morphtarget_vertex:uu,normal_fragment_begin:fu,normal_fragment_maps:du,normal_pars_fragment:hu,normal_pars_vertex:pu,normal_vertex:mu,normalmap_pars_fragment:_u,clearcoat_normal_fragment_begin:gu,clearcoat_normal_fragment_maps:vu,clearcoat_pars_fragment:xu,iridescence_pars_fragment:Mu,opaque_fragment:Su,packing:Eu,premultiplied_alpha_fragment:yu,project_vertex:Tu,dithering_fragment:Au,dithering_pars_fragment:bu,roughnessmap_fragment:wu,roughnessmap_pars_fragment:Ru,shadowmap_pars_fragment:Cu,shadowmap_pars_vertex:Lu,shadowmap_vertex:Pu,shadowmask_pars_fragment:Du,skinbase_vertex:Uu,skinning_pars_vertex:Iu,skinning_vertex:Nu,skinnormal_vertex:Fu,specularmap_fragment:Ou,specularmap_pars_fragment:Bu,tonemapping_fragment:Hu,tonemapping_pars_fragment:Gu,transmission_fragment:zu,transmission_pars_fragment:Vu,uv_pars_fragment:ku,uv_pars_vertex:Wu,uv_vertex:Xu,worldpos_vertex:qu,background_vert:Yu,background_frag:ju,backgroundCube_vert:Ku,backgroundCube_frag:Zu,cube_vert:$u,cube_frag:Ju,depth_vert:Qu,depth_frag:ef,distanceRGBA_vert:tf,distanceRGBA_frag:nf,equirect_vert:rf,equirect_frag:sf,linedashed_vert:af,linedashed_frag:of,meshbasic_vert:lf,meshbasic_frag:cf,meshlambert_vert:uf,meshlambert_frag:ff,meshmatcap_vert:df,meshmatcap_frag:hf,meshnormal_vert:pf,meshnormal_frag:mf,meshphong_vert:_f,meshphong_frag:gf,meshphysical_vert:vf,meshphysical_frag:xf,meshtoon_vert:Mf,meshtoon_frag:Sf,points_vert:Ef,points_frag:yf,shadow_vert:Tf,shadow_frag:Af,sprite_vert:bf,sprite_frag:wf},re={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Ot={basic:{uniforms:ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:ht([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:ht([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:ht([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:ht([re.points,re.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:ht([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:ht([re.common,re.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:ht([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:ht([re.sprite,re.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:ht([re.common,re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:ht([re.lights,re.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Ot.physical={uniforms:ht([Ot.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Bi={r:0,b:0,g:0};function Rf(r,e,t,n,i,a,c){const l=new Oe(0);let f=a===!0?0:1,u,m,s=null,o=0,d=null;function _(p,h){let S=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=(h.backgroundBlurriness>0?t:e).get(x)),x===null?g(l,f):x&&x.isColor&&(g(x,1),S=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,c):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ji)?(m===void 0&&(m=new Bt(new _i(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:jn(Ot.backgroundCube.uniforms),vertexShader:Ot.backgroundCube.vertexShader,fragmentShader:Ot.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(w,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(m)),m.material.uniforms.envMap.value=x,m.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,m.material.toneMapped=Ve.getTransfer(x.colorSpace)!==Xe,(s!==x||o!==x.version||d!==r.toneMapping)&&(m.material.needsUpdate=!0,s=x,o=x.version,d=r.toneMapping),m.layers.enableAll(),p.unshift(m,m.geometry,m.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Bt(new Qr(2,2),new Tn({name:"BackgroundMaterial",uniforms:jn(Ot.background.uniforms),vertexShader:Ot.background.vertexShader,fragmentShader:Ot.background.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Ve.getTransfer(x.colorSpace)!==Xe,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(s!==x||o!==x.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,s=x,o=x.version,d=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function g(p,h){p.getRGB(Bi,ao(r)),n.buffers.color.setClear(Bi.r,Bi.g,Bi.b,h,c)}return{getClearColor:function(){return l},setClearColor:function(p,h=1){l.set(p),f=h,g(l,f)},getClearAlpha:function(){return f},setClearAlpha:function(p){f=p,g(l,f)},render:_}}function Cf(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),c=n.isWebGL2||a!==null,l={},f=p(null);let u=f,m=!1;function s(L,G,X,V,te){let q=!1;if(c){const W=g(V,X,G);u!==W&&(u=W,d(u.object)),q=h(L,V,X,te),q&&S(L,V,X,te)}else{const W=G.wireframe===!0;(u.geometry!==V.id||u.program!==X.id||u.wireframe!==W)&&(u.geometry=V.id,u.program=X.id,u.wireframe=W,q=!0)}te!==null&&t.update(te,r.ELEMENT_ARRAY_BUFFER),(q||m)&&(m=!1,z(L,G,X,V),te!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function o(){return n.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function d(L){return n.isWebGL2?r.bindVertexArray(L):a.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?r.deleteVertexArray(L):a.deleteVertexArrayOES(L)}function g(L,G,X){const V=X.wireframe===!0;let te=l[L.id];te===void 0&&(te={},l[L.id]=te);let q=te[G.id];q===void 0&&(q={},te[G.id]=q);let W=q[V];return W===void 0&&(W=p(o()),q[V]=W),W}function p(L){const G=[],X=[],V=[];for(let te=0;te<i;te++)G[te]=0,X[te]=0,V[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:X,attributeDivisors:V,object:L,attributes:{},index:null}}function h(L,G,X,V){const te=u.attributes,q=G.attributes;let W=0;const P=X.getAttributes();for(const H in P)if(P[H].location>=0){const oe=te[H];let fe=q[H];if(fe===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(fe=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(fe=L.instanceColor)),oe===void 0||oe.attribute!==fe||fe&&oe.data!==fe.data)return!0;W++}return u.attributesNum!==W||u.index!==V}function S(L,G,X,V){const te={},q=G.attributes;let W=0;const P=X.getAttributes();for(const H in P)if(P[H].location>=0){let oe=q[H];oe===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor));const fe={};fe.attribute=oe,oe&&oe.data&&(fe.data=oe.data),te[H]=fe,W++}u.attributes=te,u.attributesNum=W,u.index=V}function x(){const L=u.newAttributes;for(let G=0,X=L.length;G<X;G++)L[G]=0}function y(L){w(L,0)}function w(L,G){const X=u.newAttributes,V=u.enabledAttributes,te=u.attributeDivisors;X[L]=1,V[L]===0&&(r.enableVertexAttribArray(L),V[L]=1),te[L]!==G&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,G),te[L]=G)}function R(){const L=u.newAttributes,G=u.enabledAttributes;for(let X=0,V=G.length;X<V;X++)G[X]!==L[X]&&(r.disableVertexAttribArray(X),G[X]=0)}function C(L,G,X,V,te,q,W){W===!0?r.vertexAttribIPointer(L,G,X,te,q):r.vertexAttribPointer(L,G,X,V,te,q)}function z(L,G,X,V){if(n.isWebGL2===!1&&(L.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const te=V.attributes,q=X.getAttributes(),W=G.defaultAttributeValues;for(const P in q){const H=q[P];if(H.location>=0){let ae=te[P];if(ae===void 0&&(P==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),P==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor)),ae!==void 0){const oe=ae.normalized,fe=ae.itemSize,_e=t.get(ae);if(_e===void 0)continue;const Ae=_e.buffer,ge=_e.type,He=_e.bytesPerElement,_t=n.isWebGL2===!0&&(ge===r.INT||ge===r.UNSIGNED_INT||ae.gpuType===ka);if(ae.isInterleavedBufferAttribute){const Pe=ae.data,I=Pe.stride,st=ae.offset;if(Pe.isInstancedInterleavedBuffer){for(let ve=0;ve<H.locationSize;ve++)w(H.location+ve,Pe.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let ve=0;ve<H.locationSize;ve++)y(H.location+ve);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let ve=0;ve<H.locationSize;ve++)C(H.location+ve,fe/H.locationSize,ge,oe,I*He,(st+fe/H.locationSize*ve)*He,_t)}else{if(ae.isInstancedBufferAttribute){for(let Pe=0;Pe<H.locationSize;Pe++)w(H.location+Pe,ae.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Pe=0;Pe<H.locationSize;Pe++)y(H.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let Pe=0;Pe<H.locationSize;Pe++)C(H.location+Pe,fe/H.locationSize,ge,oe,fe*He,fe/H.locationSize*Pe*He,_t)}}else if(W!==void 0){const oe=W[P];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(H.location,oe);break;case 3:r.vertexAttrib3fv(H.location,oe);break;case 4:r.vertexAttrib4fv(H.location,oe);break;default:r.vertexAttrib1fv(H.location,oe)}}}}R()}function M(){j();for(const L in l){const G=l[L];for(const X in G){const V=G[X];for(const te in V)_(V[te].object),delete V[te];delete G[X]}delete l[L]}}function b(L){if(l[L.id]===void 0)return;const G=l[L.id];for(const X in G){const V=G[X];for(const te in V)_(V[te].object),delete V[te];delete G[X]}delete l[L.id]}function k(L){for(const G in l){const X=l[G];if(X[L.id]===void 0)continue;const V=X[L.id];for(const te in V)_(V[te].object),delete V[te];delete X[L.id]}}function j(){Z(),m=!0,u!==f&&(u=f,d(u.object))}function Z(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:s,reset:j,resetDefaultState:Z,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:y,disableUnusedAttributes:R}}function Lf(r,e,t,n){const i=n.isWebGL2;let a;function c(u){a=u}function l(u,m){r.drawArrays(a,u,m),t.update(m,a,1)}function f(u,m,s){if(s===0)return;let o,d;if(i)o=r,d="drawArraysInstanced";else if(o=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",o===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}o[d](a,u,m,s),t.update(m,a,s)}this.setMode=c,this.render=l,this.renderInstances=f}function Pf(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const f=a(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const u=c||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,s=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),o=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),h=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=o>0,y=c||e.has("OES_texture_float"),w=x&&y,R=c?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:a,precision:l,logarithmicDepthBuffer:m,maxTextures:s,maxVertexTextures:o,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:R}}function Df(r){const e=this;let t=null,n=0,i=!1,a=!1;const c=new gn,l=new Ue,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(s,o){const d=s.length!==0||o||n!==0||i;return i=o,n=s.length,d},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(s,o){t=m(s,o,0)},this.setState=function(s,o,d){const _=s.clippingPlanes,g=s.clipIntersection,p=s.clipShadows,h=r.get(s);if(!i||_===null||_.length===0||a&&!p)a?m(null):u();else{const S=a?0:n,x=S*4;let y=h.clippingState||null;f.value=y,y=m(_,o,x,d);for(let w=0;w!==x;++w)y[w]=t[w];h.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function u(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(s,o,d,_){const g=s!==null?s.length:0;let p=null;if(g!==0){if(p=f.value,_!==!0||p===null){const h=d+g*4,S=o.matrixWorldInverse;l.getNormalMatrix(S),(p===null||p.length<h)&&(p=new Float32Array(h));for(let x=0,y=d;x!==g;++x,y+=4)c.copy(s[x]).applyMatrix4(S,l),c.normal.toArray(p,y),p[y+3]=c.constant}f.value=p,f.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Uf(r){let e=new WeakMap;function t(c,l){return l===Gr?c.mapping=Xn:l===zr&&(c.mapping=qn),c}function n(c){if(c&&c.isTexture&&c.isRenderTargetTexture===!1){const l=c.mapping;if(l===Gr||l===zr)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const u=new ql(f.height/2);return u.fromEquirectangularTexture(r,c),e.set(c,u),c.addEventListener("dispose",i),t(u.texture,c.mapping)}else return null}}return c}function i(c){const l=c.target;l.removeEventListener("dispose",i);const f=e.get(l);f!==void 0&&(e.delete(l),f.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class If extends oo{constructor(e=-1,t=1,n=1,i=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,c=n+e,l=i+t,f=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,c=a+u*this.view.width,l-=m*this.view.offsetY,f=l-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,l,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vn=4,ra=[.125,.215,.35,.446,.526,.582],xn=20,Dr=new If,sa=new Oe;let Ur=null;const vn=(1+Math.sqrt(5))/2,Gn=1/vn,aa=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,vn,Gn),new D(0,vn,-Gn),new D(Gn,0,vn),new D(-Gn,0,vn),new D(vn,Gn,0),new D(-vn,Gn,0)];class oa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ur=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ua(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ca(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ur),e.scissorTest=!1,Hi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xn||e.mapping===qn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ur=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:ui,format:It,colorSpace:Jt,depthBuffer:!1},i=la(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=la(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nf(a)),this._blurMaterial=Ff(a,e,t)}return i}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,Dr)}_sceneToCubeUV(e,t,n,i){const l=new Rt(90,1,t,n),f=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],m=this._renderer,s=m.autoClear,o=m.toneMapping;m.getClearColor(sa),m.toneMapping=cn,m.autoClear=!1;const d=new io({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),_=new Bt(new _i,d);let g=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(sa),g=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(l.up.set(0,f[h],0),l.lookAt(u[h],0,0)):S===1?(l.up.set(0,0,f[h]),l.lookAt(0,u[h],0)):(l.up.set(0,f[h],0),l.lookAt(0,0,u[h]));const x=this._cubeSize;Hi(i,S*x,h>2?x:0,x,x),m.setRenderTarget(i),g&&m.render(_,l),m.render(e,l)}_.geometry.dispose(),_.material.dispose(),m.toneMapping=o,m.autoClear=s,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Xn||e.mapping===qn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ua()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ca());const a=i?this._cubemapMaterial:this._equirectMaterial,c=new Bt(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=e;const f=this._cubeSize;Hi(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(c,Dr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),c=aa[(i-1)%aa.length];this._blur(e,i-1,i,a,c)}t.autoClear=n}_blur(e,t,n,i,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,i,"latitudinal",a),this._halfBlur(c,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,c,l){const f=this._renderer,u=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,s=new Bt(this._lodPlanes[i],u),o=u.uniforms,d=this._sizeLods[n]-1,_=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*xn-1),g=a/_,p=isFinite(a)?1+Math.floor(m*g):xn;p>xn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xn}`);const h=[];let S=0;for(let C=0;C<xn;++C){const z=C/g,M=Math.exp(-z*z/2);h.push(M),C===0?S+=M:C<p&&(S+=2*M)}for(let C=0;C<h.length;C++)h[C]=h[C]/S;o.envMap.value=e.texture,o.samples.value=p,o.weights.value=h,o.latitudinal.value=c==="latitudinal",l&&(o.poleAxis.value=l);const{_lodMax:x}=this;o.dTheta.value=_,o.mipInt.value=x-n;const y=this._sizeLods[i],w=3*y*(i>x-Vn?i-x+Vn:0),R=4*(this._cubeSize-y);Hi(t,w,R,3*y,2*y),f.setRenderTarget(t),f.render(s,Dr)}}function Nf(r){const e=[],t=[],n=[];let i=r;const a=r-Vn+1+ra.length;for(let c=0;c<a;c++){const l=Math.pow(2,i);t.push(l);let f=1/l;c>r-Vn?f=ra[c-r+Vn-1]:c===0&&(f=0),n.push(f);const u=1/(l-2),m=-u,s=1+u,o=[m,m,s,m,s,s,m,m,s,s,m,s],d=6,_=6,g=3,p=2,h=1,S=new Float32Array(g*_*d),x=new Float32Array(p*_*d),y=new Float32Array(h*_*d);for(let R=0;R<d;R++){const C=R%3*2/3-1,z=R>2?0:-1,M=[C,z,0,C+2/3,z,0,C+2/3,z+1,0,C,z,0,C+2/3,z+1,0,C,z+1,0];S.set(M,g*_*R),x.set(o,p*_*R);const b=[R,R,R,R,R,R];y.set(b,h*_*R)}const w=new Nt;w.setAttribute("position",new Ht(S,g)),w.setAttribute("uv",new Ht(x,p)),w.setAttribute("faceIndex",new Ht(y,h)),e.push(w),i>Vn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function la(r,e,t){const n=new yn(r,e,t);return n.texture.mapping=Ji,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hi(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ff(r,e,t){const n=new Float32Array(xn),i=new D(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:es(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function ca(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:es(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function ua(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:es(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function es(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Of(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const f=l.mapping,u=f===Gr||f===zr,m=f===Xn||f===qn;if(u||m)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let s=e.get(l);return t===null&&(t=new oa(r)),s=u?t.fromEquirectangular(l,s):t.fromCubemap(l,s),e.set(l,s),s.texture}else{if(e.has(l))return e.get(l).texture;{const s=l.image;if(u&&s&&s.height>0||m&&s&&i(s)){t===null&&(t=new oa(r));const o=u?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,o),l.addEventListener("dispose",a),o.texture}else return null}}}return l}function i(l){let f=0;const u=6;for(let m=0;m<u;m++)l[m]!==void 0&&f++;return f===u}function a(l){const f=l.target;f.removeEventListener("dispose",a);const u=e.get(f);u!==void 0&&(e.delete(f),u.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function Bf(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Hf(r,e,t,n){const i={},a=new WeakMap;function c(s){const o=s.target;o.index!==null&&e.remove(o.index);for(const _ in o.attributes)e.remove(o.attributes[_]);for(const _ in o.morphAttributes){const g=o.morphAttributes[_];for(let p=0,h=g.length;p<h;p++)e.remove(g[p])}o.removeEventListener("dispose",c),delete i[o.id];const d=a.get(o);d&&(e.remove(d),a.delete(o)),n.releaseStatesOfGeometry(o),o.isInstancedBufferGeometry===!0&&delete o._maxInstanceCount,t.memory.geometries--}function l(s,o){return i[o.id]===!0||(o.addEventListener("dispose",c),i[o.id]=!0,t.memory.geometries++),o}function f(s){const o=s.attributes;for(const _ in o)e.update(o[_],r.ARRAY_BUFFER);const d=s.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,h=g.length;p<h;p++)e.update(g[p],r.ARRAY_BUFFER)}}function u(s){const o=[],d=s.index,_=s.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let x=0,y=S.length;x<y;x+=3){const w=S[x+0],R=S[x+1],C=S[x+2];o.push(w,R,R,C,C,w)}}else if(_!==void 0){const S=_.array;g=_.version;for(let x=0,y=S.length/3-1;x<y;x+=3){const w=x+0,R=x+1,C=x+2;o.push(w,R,R,C,C,w)}}else return;const p=new($a(o)?so:ro)(o,1);p.version=g;const h=a.get(s);h&&e.remove(h),a.set(s,p)}function m(s){const o=a.get(s);if(o){const d=s.index;d!==null&&o.version<d.version&&u(s)}else u(s);return a.get(s)}return{get:l,update:f,getWireframeAttribute:m}}function Gf(r,e,t,n){const i=n.isWebGL2;let a;function c(o){a=o}let l,f;function u(o){l=o.type,f=o.bytesPerElement}function m(o,d){r.drawElements(a,d,l,o*f),t.update(d,a,1)}function s(o,d,_){if(_===0)return;let g,p;if(i)g=r,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](a,d,l,o*f,_),t.update(d,a,_)}this.setMode=c,this.setIndex=u,this.render=m,this.renderInstances=s}function zf(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,l){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=l*(a/3);break;case r.LINES:t.lines+=l*(a/2);break;case r.LINE_STRIP:t.lines+=l*(a-1);break;case r.LINE_LOOP:t.lines+=l*a;break;case r.POINTS:t.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Vf(r,e){return r[0]-e[0]}function kf(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Wf(r,e,t){const n={},i=new Float32Array(8),a=new WeakMap,c=new rt,l=[];for(let u=0;u<8;u++)l[u]=[u,0];function f(u,m,s){const o=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,g=_!==void 0?_.length:0;let p=a.get(m);if(p===void 0||p.count!==g){let G=function(){Z.dispose(),a.delete(m),m.removeEventListener("dispose",G)};var d=G;p!==void 0&&p.texture.dispose();const x=m.morphAttributes.position!==void 0,y=m.morphAttributes.normal!==void 0,w=m.morphAttributes.color!==void 0,R=m.morphAttributes.position||[],C=m.morphAttributes.normal||[],z=m.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),w===!0&&(M=3);let b=m.attributes.position.count*M,k=1;b>e.maxTextureSize&&(k=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const j=new Float32Array(b*k*4*g),Z=new eo(j,b,k,g);Z.type=on,Z.needsUpdate=!0;const L=M*4;for(let X=0;X<g;X++){const V=R[X],te=C[X],q=z[X],W=b*k*4*X;for(let P=0;P<V.count;P++){const H=P*L;x===!0&&(c.fromBufferAttribute(V,P),j[W+H+0]=c.x,j[W+H+1]=c.y,j[W+H+2]=c.z,j[W+H+3]=0),y===!0&&(c.fromBufferAttribute(te,P),j[W+H+4]=c.x,j[W+H+5]=c.y,j[W+H+6]=c.z,j[W+H+7]=0),w===!0&&(c.fromBufferAttribute(q,P),j[W+H+8]=c.x,j[W+H+9]=c.y,j[W+H+10]=c.z,j[W+H+11]=q.itemSize===4?c.w:1)}}p={count:g,texture:Z,size:new Ge(b,k)},a.set(m,p),m.addEventListener("dispose",G)}let h=0;for(let x=0;x<o.length;x++)h+=o[x];const S=m.morphTargetsRelative?1:1-h;s.getUniforms().setValue(r,"morphTargetBaseInfluence",S),s.getUniforms().setValue(r,"morphTargetInfluences",o),s.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),s.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const _=o===void 0?0:o.length;let g=n[m.id];if(g===void 0||g.length!==_){g=[];for(let y=0;y<_;y++)g[y]=[y,0];n[m.id]=g}for(let y=0;y<_;y++){const w=g[y];w[0]=y,w[1]=o[y]}g.sort(kf);for(let y=0;y<8;y++)y<_&&g[y][1]?(l[y][0]=g[y][0],l[y][1]=g[y][1]):(l[y][0]=Number.MAX_SAFE_INTEGER,l[y][1]=0);l.sort(Vf);const p=m.morphAttributes.position,h=m.morphAttributes.normal;let S=0;for(let y=0;y<8;y++){const w=l[y],R=w[0],C=w[1];R!==Number.MAX_SAFE_INTEGER&&C?(p&&m.getAttribute("morphTarget"+y)!==p[R]&&m.setAttribute("morphTarget"+y,p[R]),h&&m.getAttribute("morphNormal"+y)!==h[R]&&m.setAttribute("morphNormal"+y,h[R]),i[y]=C,S+=C):(p&&m.hasAttribute("morphTarget"+y)===!0&&m.deleteAttribute("morphTarget"+y),h&&m.hasAttribute("morphNormal"+y)===!0&&m.deleteAttribute("morphNormal"+y),i[y]=0)}const x=m.morphTargetsRelative?1:1-S;s.getUniforms().setValue(r,"morphTargetBaseInfluence",x),s.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:f}}function Xf(r,e,t,n){let i=new WeakMap;function a(f){const u=n.render.frame,m=f.geometry,s=e.get(f,m);if(i.get(s)!==u&&(e.update(s),i.set(s,u)),f.isInstancedMesh&&(f.hasEventListener("dispose",l)===!1&&f.addEventListener("dispose",l),i.get(f)!==u&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),i.set(f,u))),f.isSkinnedMesh){const o=f.skeleton;i.get(o)!==u&&(o.update(),i.set(o,u))}return s}function c(){i=new WeakMap}function l(f){const u=f.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:c}}const fo=new Mt,ho=new eo,po=new Cl,mo=new lo,fa=[],da=[],ha=new Float32Array(16),pa=new Float32Array(9),ma=new Float32Array(4);function Zn(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let a=fa[i];if(a===void 0&&(a=new Float32Array(i),fa[i]=a),e!==0){n.toArray(a,0);for(let c=1,l=0;c!==e;++c)l+=t,r[c].toArray(a,l)}return a}function Qe(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function et(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function tr(r,e){let t=da[e];t===void 0&&(t=new Int32Array(e),da[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function qf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Yf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qe(t,e))return;r.uniform2fv(this.addr,e),et(t,e)}}function jf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qe(t,e))return;r.uniform3fv(this.addr,e),et(t,e)}}function Kf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qe(t,e))return;r.uniform4fv(this.addr,e),et(t,e)}}function Zf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qe(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),et(t,e)}else{if(Qe(t,n))return;ma.set(n),r.uniformMatrix2fv(this.addr,!1,ma),et(t,n)}}function $f(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qe(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),et(t,e)}else{if(Qe(t,n))return;pa.set(n),r.uniformMatrix3fv(this.addr,!1,pa),et(t,n)}}function Jf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qe(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),et(t,e)}else{if(Qe(t,n))return;ha.set(n),r.uniformMatrix4fv(this.addr,!1,ha),et(t,n)}}function Qf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ed(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qe(t,e))return;r.uniform2iv(this.addr,e),et(t,e)}}function td(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qe(t,e))return;r.uniform3iv(this.addr,e),et(t,e)}}function nd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qe(t,e))return;r.uniform4iv(this.addr,e),et(t,e)}}function id(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function rd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qe(t,e))return;r.uniform2uiv(this.addr,e),et(t,e)}}function sd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qe(t,e))return;r.uniform3uiv(this.addr,e),et(t,e)}}function ad(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qe(t,e))return;r.uniform4uiv(this.addr,e),et(t,e)}}function od(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||fo,i)}function ld(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||po,i)}function cd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||mo,i)}function ud(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ho,i)}function fd(r){switch(r){case 5126:return qf;case 35664:return Yf;case 35665:return jf;case 35666:return Kf;case 35674:return Zf;case 35675:return $f;case 35676:return Jf;case 5124:case 35670:return Qf;case 35667:case 35671:return ed;case 35668:case 35672:return td;case 35669:case 35673:return nd;case 5125:return id;case 36294:return rd;case 36295:return sd;case 36296:return ad;case 35678:case 36198:case 36298:case 36306:case 35682:return od;case 35679:case 36299:case 36307:return ld;case 35680:case 36300:case 36308:case 36293:return cd;case 36289:case 36303:case 36311:case 36292:return ud}}function dd(r,e){r.uniform1fv(this.addr,e)}function hd(r,e){const t=Zn(e,this.size,2);r.uniform2fv(this.addr,t)}function pd(r,e){const t=Zn(e,this.size,3);r.uniform3fv(this.addr,t)}function md(r,e){const t=Zn(e,this.size,4);r.uniform4fv(this.addr,t)}function _d(r,e){const t=Zn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function gd(r,e){const t=Zn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function vd(r,e){const t=Zn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function xd(r,e){r.uniform1iv(this.addr,e)}function Md(r,e){r.uniform2iv(this.addr,e)}function Sd(r,e){r.uniform3iv(this.addr,e)}function Ed(r,e){r.uniform4iv(this.addr,e)}function yd(r,e){r.uniform1uiv(this.addr,e)}function Td(r,e){r.uniform2uiv(this.addr,e)}function Ad(r,e){r.uniform3uiv(this.addr,e)}function bd(r,e){r.uniform4uiv(this.addr,e)}function wd(r,e,t){const n=this.cache,i=e.length,a=tr(t,i);Qe(n,a)||(r.uniform1iv(this.addr,a),et(n,a));for(let c=0;c!==i;++c)t.setTexture2D(e[c]||fo,a[c])}function Rd(r,e,t){const n=this.cache,i=e.length,a=tr(t,i);Qe(n,a)||(r.uniform1iv(this.addr,a),et(n,a));for(let c=0;c!==i;++c)t.setTexture3D(e[c]||po,a[c])}function Cd(r,e,t){const n=this.cache,i=e.length,a=tr(t,i);Qe(n,a)||(r.uniform1iv(this.addr,a),et(n,a));for(let c=0;c!==i;++c)t.setTextureCube(e[c]||mo,a[c])}function Ld(r,e,t){const n=this.cache,i=e.length,a=tr(t,i);Qe(n,a)||(r.uniform1iv(this.addr,a),et(n,a));for(let c=0;c!==i;++c)t.setTexture2DArray(e[c]||ho,a[c])}function Pd(r){switch(r){case 5126:return dd;case 35664:return hd;case 35665:return pd;case 35666:return md;case 35674:return _d;case 35675:return gd;case 35676:return vd;case 5124:case 35670:return xd;case 35667:case 35671:return Md;case 35668:case 35672:return Sd;case 35669:case 35673:return Ed;case 5125:return yd;case 36294:return Td;case 36295:return Ad;case 36296:return bd;case 35678:case 36198:case 36298:case 36306:case 35682:return wd;case 35679:case 36299:case 36307:return Rd;case 35680:case 36300:case 36308:case 36293:return Cd;case 36289:case 36303:case 36311:case 36292:return Ld}}class Dd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=fd(t.type)}}class Ud{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Pd(t.type)}}class Id{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,c=i.length;a!==c;++a){const l=i[a];l.setValue(e,t[l.id],n)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function _a(r,e){r.seq.push(e),r.map[e.id]=e}function Nd(r,e,t){const n=r.name,i=n.length;for(Ir.lastIndex=0;;){const a=Ir.exec(n),c=Ir.lastIndex;let l=a[1];const f=a[2]==="]",u=a[3];if(f&&(l=l|0),u===void 0||u==="["&&c+2===i){_a(t,u===void 0?new Dd(l,r,e):new Ud(l,r,e));break}else{let s=t.map[l];s===void 0&&(s=new Id(l),_a(t,s)),t=s}}}class Wi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i),c=e.getUniformLocation(t,a.name);Nd(a,c,this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,c=t.length;a!==c;++a){const l=t[a],f=n[l.id];f.needsUpdate!==!1&&l.setValue(e,f.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const c=e[i];c.id in t&&n.push(c)}return n}}function ga(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Fd=0;function Od(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=i;c<a;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}function Bd(r){const e=Ve.getPrimaries(Ve.workingColorSpace),t=Ve.getPrimaries(r);let n;switch(e===t?n="":e===Ki&&t===ji?n="LinearDisplayP3ToLinearSRGB":e===ji&&t===Ki&&(n="LinearSRGBToLinearDisplayP3"),r){case Jt:case Qi:return[n,"LinearTransferOETF"];case nt:case $r:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function va(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+Od(r.getShaderSource(e),c)}else return i}function Hd(r,e){const t=Bd(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Gd(r,e){let t;switch(e){case Zo:t="Linear";break;case $o:t="Reinhard";break;case Jo:t="OptimizedCineon";break;case Qo:t="ACESFilmic";break;case el:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zd(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(si).join(`
`)}function Vd(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kd(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=r.getActiveAttrib(e,i),c=a.name;let l=1;a.type===r.FLOAT_MAT2&&(l=2),a.type===r.FLOAT_MAT3&&(l=3),a.type===r.FLOAT_MAT4&&(l=4),t[c]={type:a.type,location:r.getAttribLocation(e,c),locationSize:l}}return t}function si(r){return r!==""}function xa(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ma(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wd=/^[ \t]*#include +<([\w\d./]+)>/gm;function qr(r){return r.replace(Wd,qd)}const Xd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qd(r,e){let t=Le[e];if(t===void 0){const n=Xd.get(e);if(n!==void 0)t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qr(t)}const Yd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sa(r){return r.replace(Yd,jd)}function jd(r,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Ea(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Kd(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ha?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ro?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===jt&&(e="SHADOWMAP_TYPE_VSM"),e}function Zd(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Xn:case qn:e="ENVMAP_TYPE_CUBE";break;case Ji:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $d(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case qn:e="ENVMAP_MODE_REFRACTION";break}return e}function Jd(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Kr:e="ENVMAP_BLENDING_MULTIPLY";break;case jo:e="ENVMAP_BLENDING_MIX";break;case Ko:e="ENVMAP_BLENDING_ADD";break}return e}function Qd(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function eh(r,e,t,n){const i=r.getContext(),a=t.defines;let c=t.vertexShader,l=t.fragmentShader;const f=Kd(t),u=Zd(t),m=$d(t),s=Jd(t),o=Qd(t),d=t.isWebGL2?"":zd(t),_=Vd(a),g=i.createProgram();let p,h,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(si).join(`
`),p.length>0&&(p+=`
`),h=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(si).join(`
`),h.length>0&&(h+=`
`)):(p=[Ea(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(si).join(`
`),h=[d,Ea(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+m:"",t.envMap?"#define "+s:"",o?"#define CUBEUV_TEXEL_WIDTH "+o.texelWidth:"",o?"#define CUBEUV_TEXEL_HEIGHT "+o.texelHeight:"",o?"#define CUBEUV_MAX_MIP "+o.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cn?"#define TONE_MAPPING":"",t.toneMapping!==cn?Le.tonemapping_pars_fragment:"",t.toneMapping!==cn?Gd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,Hd("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(si).join(`
`)),c=qr(c),c=xa(c,t),c=Ma(c,t),l=qr(l),l=xa(l,t),l=Ma(l,t),c=Sa(c),l=Sa(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Gs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=S+p+c,y=S+h+l,w=ga(i,i.VERTEX_SHADER,x),R=ga(i,i.FRAGMENT_SHADER,y);if(i.attachShader(g,w),i.attachShader(g,R),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){const M=i.getProgramInfoLog(g).trim(),b=i.getShaderInfoLog(w).trim(),k=i.getShaderInfoLog(R).trim();let j=!0,Z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,w,R);else{const L=va(i,w,"vertex"),G=va(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+L+`
`+G)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(b===""||k==="")&&(Z=!1);Z&&(this.diagnostics={runnable:j,programLog:M,vertexShader:{log:b,prefix:p},fragmentShader:{log:k,prefix:h}})}i.deleteShader(w),i.deleteShader(R);let C;this.getUniforms=function(){return C===void 0&&(C=new Wi(i,g)),C};let z;return this.getAttributes=function(){return z===void 0&&(z=kd(i,g)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fd++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=R,this}let th=0;class nh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(i)===!1&&(c.add(i),i.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ih(e),t.set(e,n)),n}}class ih{constructor(e){this.id=th++,this.code=e,this.usedTimes=0}}function rh(r,e,t,n,i,a,c){const l=new to,f=new nh,u=[],m=i.isWebGL2,s=i.logarithmicDepthBuffer,o=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function p(M,b,k,j,Z){const L=j.fog,G=Z.geometry,X=M.isMeshStandardMaterial?j.environment:null,V=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),te=V&&V.mapping===Ji?V.image.height:null,q=_[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const W=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,P=W!==void 0?W.length:0;let H=0;G.morphAttributes.position!==void 0&&(H=1),G.morphAttributes.normal!==void 0&&(H=2),G.morphAttributes.color!==void 0&&(H=3);let ae,oe,fe,_e;if(q){const We=Ot[q];ae=We.vertexShader,oe=We.fragmentShader}else ae=M.vertexShader,oe=M.fragmentShader,f.update(M),fe=f.getVertexShaderID(M),_e=f.getFragmentShaderID(M);const Ae=r.getRenderTarget(),ge=Z.isInstancedMesh===!0,He=!!M.map,_t=!!M.matcap,Pe=!!V,I=!!M.aoMap,st=!!M.lightMap,ve=!!M.bumpMap,Re=!!M.normalMap,Te=!!M.displacementMap,qe=!!M.emissiveMap,Fe=!!M.metalnessMap,De=!!M.roughnessMap,ke=M.anisotropy>0,it=M.clearcoat>0,at=M.iridescence>0,T=M.sheen>0,v=M.transmission>0,F=ke&&!!M.anisotropyMap,J=it&&!!M.clearcoatMap,K=it&&!!M.clearcoatNormalMap,Q=it&&!!M.clearcoatRoughnessMap,de=at&&!!M.iridescenceMap,ie=at&&!!M.iridescenceThicknessMap,le=T&&!!M.sheenColorMap,Me=T&&!!M.sheenRoughnessMap,Be=!!M.specularMap,$=!!M.specularColorMap,ze=!!M.specularIntensityMap,be=v&&!!M.transmissionMap,Se=v&&!!M.thicknessMap,me=!!M.gradientMap,A=!!M.alphaMap,ne=M.alphaTest>0,ee=!!M.alphaHash,ce=!!M.extensions,se=!!G.attributes.uv1,Y=!!G.attributes.uv2,he=!!G.attributes.uv3;let we=cn;return M.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(we=r.toneMapping),{isWebGL2:m,shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:ae,fragmentShader:oe,defines:M.defines,customVertexShaderID:fe,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:ge,instancingColor:ge&&Z.instanceColor!==null,supportsVertexTextures:o,outputColorSpace:Ae===null?r.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Jt,map:He,matcap:_t,envMap:Pe,envMapMode:Pe&&V.mapping,envMapCubeUVHeight:te,aoMap:I,lightMap:st,bumpMap:ve,normalMap:Re,displacementMap:o&&Te,emissiveMap:qe,normalMapObjectSpace:Re&&M.normalMapType===hl,normalMapTangentSpace:Re&&M.normalMapType===Za,metalnessMap:Fe,roughnessMap:De,anisotropy:ke,anisotropyMap:F,clearcoat:it,clearcoatMap:J,clearcoatNormalMap:K,clearcoatRoughnessMap:Q,iridescence:at,iridescenceMap:de,iridescenceThicknessMap:ie,sheen:T,sheenColorMap:le,sheenRoughnessMap:Me,specularMap:Be,specularColorMap:$,specularIntensityMap:ze,transmission:v,transmissionMap:be,thicknessMap:Se,gradientMap:me,opaque:M.transparent===!1&&M.blending===kn,alphaMap:A,alphaTest:ne,alphaHash:ee,combine:M.combine,mapUv:He&&g(M.map.channel),aoMapUv:I&&g(M.aoMap.channel),lightMapUv:st&&g(M.lightMap.channel),bumpMapUv:ve&&g(M.bumpMap.channel),normalMapUv:Re&&g(M.normalMap.channel),displacementMapUv:Te&&g(M.displacementMap.channel),emissiveMapUv:qe&&g(M.emissiveMap.channel),metalnessMapUv:Fe&&g(M.metalnessMap.channel),roughnessMapUv:De&&g(M.roughnessMap.channel),anisotropyMapUv:F&&g(M.anisotropyMap.channel),clearcoatMapUv:J&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:K&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:le&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(M.sheenRoughnessMap.channel),specularMapUv:Be&&g(M.specularMap.channel),specularColorMapUv:$&&g(M.specularColorMap.channel),specularIntensityMapUv:ze&&g(M.specularIntensityMap.channel),transmissionMapUv:be&&g(M.transmissionMap.channel),thicknessMapUv:Se&&g(M.thicknessMap.channel),alphaMapUv:A&&g(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Re||ke),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:se,vertexUv2s:Y,vertexUv3s:he,pointsUvs:Z.isPoints===!0&&!!G.attributes.uv&&(He||A),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:s,skinning:Z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:H,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:we,useLegacyLights:r._useLegacyLights,decodeVideoTexture:He&&M.map.isVideoTexture===!0&&Ve.getTransfer(M.map.colorSpace)===Xe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Kt,flipSided:M.side===xt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ce&&M.extensions.derivatives===!0,extensionFragDepth:ce&&M.extensions.fragDepth===!0,extensionDrawBuffers:ce&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:m||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)b.push(k),b.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(S(b,M),x(b,M),b.push(r.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function S(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function x(M,b){l.disableAll(),b.isWebGL2&&l.enable(0),b.supportsVertexTextures&&l.enable(1),b.instancing&&l.enable(2),b.instancingColor&&l.enable(3),b.matcap&&l.enable(4),b.envMap&&l.enable(5),b.normalMapObjectSpace&&l.enable(6),b.normalMapTangentSpace&&l.enable(7),b.clearcoat&&l.enable(8),b.iridescence&&l.enable(9),b.alphaTest&&l.enable(10),b.vertexColors&&l.enable(11),b.vertexAlphas&&l.enable(12),b.vertexUv1s&&l.enable(13),b.vertexUv2s&&l.enable(14),b.vertexUv3s&&l.enable(15),b.vertexTangents&&l.enable(16),b.anisotropy&&l.enable(17),M.push(l.mask),l.disableAll(),b.fog&&l.enable(0),b.useFog&&l.enable(1),b.flatShading&&l.enable(2),b.logarithmicDepthBuffer&&l.enable(3),b.skinning&&l.enable(4),b.morphTargets&&l.enable(5),b.morphNormals&&l.enable(6),b.morphColors&&l.enable(7),b.premultipliedAlpha&&l.enable(8),b.shadowMapEnabled&&l.enable(9),b.useLegacyLights&&l.enable(10),b.doubleSided&&l.enable(11),b.flipSided&&l.enable(12),b.useDepthPacking&&l.enable(13),b.dithering&&l.enable(14),b.transmission&&l.enable(15),b.sheen&&l.enable(16),b.opaque&&l.enable(17),b.pointsUvs&&l.enable(18),b.decodeVideoTexture&&l.enable(19),M.push(l.mask)}function y(M){const b=_[M.type];let k;if(b){const j=Ot[b];k=Vl.clone(j.uniforms)}else k=M.uniforms;return k}function w(M,b){let k;for(let j=0,Z=u.length;j<Z;j++){const L=u[j];if(L.cacheKey===b){k=L,++k.usedTimes;break}}return k===void 0&&(k=new eh(r,b,M,a),u.push(k)),k}function R(M){if(--M.usedTimes===0){const b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),M.destroy()}}function C(M){f.remove(M)}function z(){f.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:y,acquireProgram:w,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:z}}function sh(){let r=new WeakMap;function e(a){let c=r.get(a);return c===void 0&&(c={},r.set(a,c)),c}function t(a){r.delete(a)}function n(a,c,l){r.get(a)[c]=l}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ah(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ya(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ta(){const r=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function c(s,o,d,_,g,p){let h=r[e];return h===void 0?(h={id:s.id,object:s,geometry:o,material:d,groupOrder:_,renderOrder:s.renderOrder,z:g,group:p},r[e]=h):(h.id=s.id,h.object=s,h.geometry=o,h.material=d,h.groupOrder=_,h.renderOrder=s.renderOrder,h.z=g,h.group=p),e++,h}function l(s,o,d,_,g,p){const h=c(s,o,d,_,g,p);d.transmission>0?n.push(h):d.transparent===!0?i.push(h):t.push(h)}function f(s,o,d,_,g,p){const h=c(s,o,d,_,g,p);d.transmission>0?n.unshift(h):d.transparent===!0?i.unshift(h):t.unshift(h)}function u(s,o){t.length>1&&t.sort(s||ah),n.length>1&&n.sort(o||ya),i.length>1&&i.sort(o||ya)}function m(){for(let s=e,o=r.length;s<o;s++){const d=r[s];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:l,unshift:f,finish:m,sort:u}}function oh(){let r=new WeakMap;function e(n,i){const a=r.get(n);let c;return a===void 0?(c=new Ta,r.set(n,[c])):i>=a.length?(c=new Ta,a.push(c)):c=a[i],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function lh(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Oe};break;case"SpotLight":t={position:new D,direction:new D,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function ch(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let uh=0;function fh(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function dh(r,e){const t=new lh,n=ch(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)i.probe.push(new D);const a=new D,c=new Je,l=new Je;function f(m,s){let o=0,d=0,_=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let g=0,p=0,h=0,S=0,x=0,y=0,w=0,R=0,C=0,z=0,M=0;m.sort(fh);const b=s===!0?Math.PI:1;for(let j=0,Z=m.length;j<Z;j++){const L=m[j],G=L.color,X=L.intensity,V=L.distance,te=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)o+=G.r*X*b,d+=G.g*X*b,_+=G.b*X*b;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],X);M++}else if(L.isDirectionalLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const W=L.shadow,P=n.get(L);P.shadowBias=W.bias,P.shadowNormalBias=W.normalBias,P.shadowRadius=W.radius,P.shadowMapSize=W.mapSize,i.directionalShadow[g]=P,i.directionalShadowMap[g]=te,i.directionalShadowMatrix[g]=L.shadow.matrix,y++}i.directional[g]=q,g++}else if(L.isSpotLight){const q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(G).multiplyScalar(X*b),q.distance=V,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[h]=q;const W=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,W.updateMatrices(L),L.castShadow&&z++),i.spotLightMatrix[h]=W.matrix,L.castShadow){const P=n.get(L);P.shadowBias=W.bias,P.shadowNormalBias=W.normalBias,P.shadowRadius=W.radius,P.shadowMapSize=W.mapSize,i.spotShadow[h]=P,i.spotShadowMap[h]=te,R++}h++}else if(L.isRectAreaLight){const q=t.get(L);q.color.copy(G).multiplyScalar(X),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=q,S++}else if(L.isPointLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*b),q.distance=L.distance,q.decay=L.decay,L.castShadow){const W=L.shadow,P=n.get(L);P.shadowBias=W.bias,P.shadowNormalBias=W.normalBias,P.shadowRadius=W.radius,P.shadowMapSize=W.mapSize,P.shadowCameraNear=W.camera.near,P.shadowCameraFar=W.camera.far,i.pointShadow[p]=P,i.pointShadowMap[p]=te,i.pointShadowMatrix[p]=L.shadow.matrix,w++}i.point[p]=q,p++}else if(L.isHemisphereLight){const q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(X*b),q.groundColor.copy(L.groundColor).multiplyScalar(X*b),i.hemi[x]=q,x++}}S>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=o,i.ambient[1]=d,i.ambient[2]=_;const k=i.hash;(k.directionalLength!==g||k.pointLength!==p||k.spotLength!==h||k.rectAreaLength!==S||k.hemiLength!==x||k.numDirectionalShadows!==y||k.numPointShadows!==w||k.numSpotShadows!==R||k.numSpotMaps!==C||k.numLightProbes!==M)&&(i.directional.length=g,i.spot.length=h,i.rectArea.length=S,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=R+C-z,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=M,k.directionalLength=g,k.pointLength=p,k.spotLength=h,k.rectAreaLength=S,k.hemiLength=x,k.numDirectionalShadows=y,k.numPointShadows=w,k.numSpotShadows=R,k.numSpotMaps=C,k.numLightProbes=M,i.version=uh++)}function u(m,s){let o=0,d=0,_=0,g=0,p=0;const h=s.matrixWorldInverse;for(let S=0,x=m.length;S<x;S++){const y=m[S];if(y.isDirectionalLight){const w=i.directional[o];w.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(h),o++}else if(y.isSpotLight){const w=i.spot[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(h),_++}else if(y.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(h),l.identity(),c.copy(y.matrixWorld),c.premultiply(h),l.extractRotation(c),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(l),w.halfHeight.applyMatrix4(l),g++}else if(y.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(h),d++}else if(y.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(h),p++}}}return{setup:f,setupView:u,state:i}}function Aa(r,e){const t=new dh(r,e),n=[],i=[];function a(){n.length=0,i.length=0}function c(s){n.push(s)}function l(s){i.push(s)}function f(s){t.setup(n,s)}function u(s){t.setupView(n,s)}return{init:a,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:f,setupLightsView:u,pushLight:c,pushShadow:l}}function hh(r,e){let t=new WeakMap;function n(a,c=0){const l=t.get(a);let f;return l===void 0?(f=new Aa(r,e),t.set(a,[f])):c>=l.length?(f=new Aa(r,e),l.push(f)):f=l[c],f}function i(){t=new WeakMap}return{get:n,dispose:i}}class ph extends Qt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mh extends Qt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _h=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gh=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vh(r,e,t){let n=new co;const i=new Ge,a=new Ge,c=new rt,l=new ph({depthPacking:dl}),f=new mh,u={},m=t.maxTextureSize,s={[$t]:xt,[xt]:$t,[Kt]:Kt},o=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:_h,fragmentShader:gh}),d=o.clone();d.defines.HORIZONTAL_PASS=1;const _=new Nt;_.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Bt(_,o),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ha;let h=this.type;this.render=function(w,R,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const z=r.getRenderTarget(),M=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),k=r.state;k.setBlending(ln),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const j=h!==jt&&this.type===jt,Z=h===jt&&this.type!==jt;for(let L=0,G=w.length;L<G;L++){const X=w[L],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const te=V.getFrameExtents();if(i.multiply(te),a.copy(V.mapSize),(i.x>m||i.y>m)&&(i.x>m&&(a.x=Math.floor(m/te.x),i.x=a.x*te.x,V.mapSize.x=a.x),i.y>m&&(a.y=Math.floor(m/te.y),i.y=a.y*te.y,V.mapSize.y=a.y)),V.map===null||j===!0||Z===!0){const W=this.type!==jt?{minFilter:pt,magFilter:pt}:{};V.map!==null&&V.map.dispose(),V.map=new yn(i.x,i.y,W),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const q=V.getViewportCount();for(let W=0;W<q;W++){const P=V.getViewport(W);c.set(a.x*P.x,a.y*P.y,a.x*P.z,a.y*P.w),k.viewport(c),V.updateMatrices(X,W),n=V.getFrustum(),y(R,C,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===jt&&S(V,C),V.needsUpdate=!1}h=this.type,p.needsUpdate=!1,r.setRenderTarget(z,M,b)};function S(w,R){const C=e.update(g);o.defines.VSM_SAMPLES!==w.blurSamples&&(o.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,o.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new yn(i.x,i.y)),o.uniforms.shadow_pass.value=w.map.texture,o.uniforms.resolution.value=w.mapSize,o.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(R,null,C,o,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(R,null,C,d,g,null)}function x(w,R,C,z){let M=null;const b=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)M=b;else if(M=C.isPointLight===!0?f:l,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const k=M.uuid,j=R.uuid;let Z=u[k];Z===void 0&&(Z={},u[k]=Z);let L=Z[j];L===void 0&&(L=M.clone(),Z[j]=L),M=L}if(M.visible=R.visible,M.wireframe=R.wireframe,z===jt?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:s[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=r.properties.get(M);k.light=C}return M}function y(w,R,C,z,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===jt)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const j=e.update(w),Z=w.material;if(Array.isArray(Z)){const L=j.groups;for(let G=0,X=L.length;G<X;G++){const V=L[G],te=Z[V.materialIndex];if(te&&te.visible){const q=x(w,te,z,M);r.renderBufferDirect(C,null,j,q,w,V)}}}else if(Z.visible){const L=x(w,Z,z,M);r.renderBufferDirect(C,null,j,L,w,null)}}const k=w.children;for(let j=0,Z=k.length;j<Z;j++)y(k[j],R,C,z,M)}}function xh(r,e,t){const n=t.isWebGL2;function i(){let A=!1;const ne=new rt;let ee=null;const ce=new rt(0,0,0,0);return{setMask:function(se){ee!==se&&!A&&(r.colorMask(se,se,se,se),ee=se)},setLocked:function(se){A=se},setClear:function(se,Y,he,we,ut){ut===!0&&(se*=we,Y*=we,he*=we),ne.set(se,Y,he,we),ce.equals(ne)===!1&&(r.clearColor(se,Y,he,we),ce.copy(ne))},reset:function(){A=!1,ee=null,ce.set(-1,0,0,0)}}}function a(){let A=!1,ne=null,ee=null,ce=null;return{setTest:function(se){se?Ae(r.DEPTH_TEST):ge(r.DEPTH_TEST)},setMask:function(se){ne!==se&&!A&&(r.depthMask(se),ne=se)},setFunc:function(se){if(ee!==se){switch(se){case zo:r.depthFunc(r.NEVER);break;case Vo:r.depthFunc(r.ALWAYS);break;case ko:r.depthFunc(r.LESS);break;case Hr:r.depthFunc(r.LEQUAL);break;case Wo:r.depthFunc(r.EQUAL);break;case Xo:r.depthFunc(r.GEQUAL);break;case qo:r.depthFunc(r.GREATER);break;case Yo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ee=se}},setLocked:function(se){A=se},setClear:function(se){ce!==se&&(r.clearDepth(se),ce=se)},reset:function(){A=!1,ne=null,ee=null,ce=null}}}function c(){let A=!1,ne=null,ee=null,ce=null,se=null,Y=null,he=null,we=null,ut=null;return{setTest:function(We){A||(We?Ae(r.STENCIL_TEST):ge(r.STENCIL_TEST))},setMask:function(We){ne!==We&&!A&&(r.stencilMask(We),ne=We)},setFunc:function(We,Ft,ft){(ee!==We||ce!==Ft||se!==ft)&&(r.stencilFunc(We,Ft,ft),ee=We,ce=Ft,se=ft)},setOp:function(We,Ft,ft){(Y!==We||he!==Ft||we!==ft)&&(r.stencilOp(We,Ft,ft),Y=We,he=Ft,we=ft)},setLocked:function(We){A=We},setClear:function(We){ut!==We&&(r.clearStencil(We),ut=We)},reset:function(){A=!1,ne=null,ee=null,ce=null,se=null,Y=null,he=null,we=null,ut=null}}}const l=new i,f=new a,u=new c,m=new WeakMap,s=new WeakMap;let o={},d={},_=new WeakMap,g=[],p=null,h=!1,S=null,x=null,y=null,w=null,R=null,C=null,z=null,M=!1,b=null,k=null,j=null,Z=null,L=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,V=0;const te=r.getParameter(r.VERSION);te.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(te)[1]),X=V>=1):te.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),X=V>=2);let q=null,W={};const P=r.getParameter(r.SCISSOR_BOX),H=r.getParameter(r.VIEWPORT),ae=new rt().fromArray(P),oe=new rt().fromArray(H);function fe(A,ne,ee,ce){const se=new Uint8Array(4),Y=r.createTexture();r.bindTexture(A,Y),r.texParameteri(A,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(A,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let he=0;he<ee;he++)n&&(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)?r.texImage3D(ne,0,r.RGBA,1,1,ce,0,r.RGBA,r.UNSIGNED_BYTE,se):r.texImage2D(ne+he,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,se);return Y}const _e={};_e[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_e[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),f.setClear(1),u.setClear(0),Ae(r.DEPTH_TEST),f.setFunc(Hr),Te(!1),qe(os),Ae(r.CULL_FACE),ve(ln);function Ae(A){o[A]!==!0&&(r.enable(A),o[A]=!0)}function ge(A){o[A]!==!1&&(r.disable(A),o[A]=!1)}function He(A,ne){return d[A]!==ne?(r.bindFramebuffer(A,ne),d[A]=ne,n&&(A===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ne),A===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ne)),!0):!1}function _t(A,ne){let ee=g,ce=!1;if(A)if(ee=_.get(ne),ee===void 0&&(ee=[],_.set(ne,ee)),A.isWebGLMultipleRenderTargets){const se=A.texture;if(ee.length!==se.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let Y=0,he=se.length;Y<he;Y++)ee[Y]=r.COLOR_ATTACHMENT0+Y;ee.length=se.length,ce=!0}}else ee[0]!==r.COLOR_ATTACHMENT0&&(ee[0]=r.COLOR_ATTACHMENT0,ce=!0);else ee[0]!==r.BACK&&(ee[0]=r.BACK,ce=!0);ce&&(t.isWebGL2?r.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Pe(A){return p!==A?(r.useProgram(A),p=A,!0):!1}const I={[zn]:r.FUNC_ADD,[Lo]:r.FUNC_SUBTRACT,[Po]:r.FUNC_REVERSE_SUBTRACT};if(n)I[fs]=r.MIN,I[ds]=r.MAX;else{const A=e.get("EXT_blend_minmax");A!==null&&(I[fs]=A.MIN_EXT,I[ds]=A.MAX_EXT)}const st={[Do]:r.ZERO,[Uo]:r.ONE,[Io]:r.SRC_COLOR,[Ga]:r.SRC_ALPHA,[Go]:r.SRC_ALPHA_SATURATE,[Bo]:r.DST_COLOR,[Fo]:r.DST_ALPHA,[No]:r.ONE_MINUS_SRC_COLOR,[za]:r.ONE_MINUS_SRC_ALPHA,[Ho]:r.ONE_MINUS_DST_COLOR,[Oo]:r.ONE_MINUS_DST_ALPHA};function ve(A,ne,ee,ce,se,Y,he,we){if(A===ln){h===!0&&(ge(r.BLEND),h=!1);return}if(h===!1&&(Ae(r.BLEND),h=!0),A!==Co){if(A!==S||we!==M){if((x!==zn||R!==zn)&&(r.blendEquation(r.FUNC_ADD),x=zn,R=zn),we)switch(A){case kn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ls:r.blendFunc(r.ONE,r.ONE);break;case cs:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case us:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case kn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ls:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case cs:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case us:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}y=null,w=null,C=null,z=null,S=A,M=we}return}se=se||ne,Y=Y||ee,he=he||ce,(ne!==x||se!==R)&&(r.blendEquationSeparate(I[ne],I[se]),x=ne,R=se),(ee!==y||ce!==w||Y!==C||he!==z)&&(r.blendFuncSeparate(st[ee],st[ce],st[Y],st[he]),y=ee,w=ce,C=Y,z=he),S=A,M=!1}function Re(A,ne){A.side===Kt?ge(r.CULL_FACE):Ae(r.CULL_FACE);let ee=A.side===xt;ne&&(ee=!ee),Te(ee),A.blending===kn&&A.transparent===!1?ve(ln):ve(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),f.setFunc(A.depthFunc),f.setTest(A.depthTest),f.setMask(A.depthWrite),l.setMask(A.colorWrite);const ce=A.stencilWrite;u.setTest(ce),ce&&(u.setMask(A.stencilWriteMask),u.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),u.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),De(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Ae(r.SAMPLE_ALPHA_TO_COVERAGE):ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function Te(A){b!==A&&(A?r.frontFace(r.CW):r.frontFace(r.CCW),b=A)}function qe(A){A!==bo?(Ae(r.CULL_FACE),A!==k&&(A===os?r.cullFace(r.BACK):A===wo?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ge(r.CULL_FACE),k=A}function Fe(A){A!==j&&(X&&r.lineWidth(A),j=A)}function De(A,ne,ee){A?(Ae(r.POLYGON_OFFSET_FILL),(Z!==ne||L!==ee)&&(r.polygonOffset(ne,ee),Z=ne,L=ee)):ge(r.POLYGON_OFFSET_FILL)}function ke(A){A?Ae(r.SCISSOR_TEST):ge(r.SCISSOR_TEST)}function it(A){A===void 0&&(A=r.TEXTURE0+G-1),q!==A&&(r.activeTexture(A),q=A)}function at(A,ne,ee){ee===void 0&&(q===null?ee=r.TEXTURE0+G-1:ee=q);let ce=W[ee];ce===void 0&&(ce={type:void 0,texture:void 0},W[ee]=ce),(ce.type!==A||ce.texture!==ne)&&(q!==ee&&(r.activeTexture(ee),q=ee),r.bindTexture(A,ne||_e[A]),ce.type=A,ce.texture=ne)}function T(){const A=W[q];A!==void 0&&A.type!==void 0&&(r.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function v(){try{r.compressedTexImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function F(){try{r.compressedTexImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function K(){try{r.texSubImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ie(){try{r.texStorage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function le(){try{r.texStorage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Me(){try{r.texImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Be(){try{r.texImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function $(A){ae.equals(A)===!1&&(r.scissor(A.x,A.y,A.z,A.w),ae.copy(A))}function ze(A){oe.equals(A)===!1&&(r.viewport(A.x,A.y,A.z,A.w),oe.copy(A))}function be(A,ne){let ee=s.get(ne);ee===void 0&&(ee=new WeakMap,s.set(ne,ee));let ce=ee.get(A);ce===void 0&&(ce=r.getUniformBlockIndex(ne,A.name),ee.set(A,ce))}function Se(A,ne){const ce=s.get(ne).get(A);m.get(ne)!==ce&&(r.uniformBlockBinding(ne,ce,A.__bindingPointIndex),m.set(ne,ce))}function me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},q=null,W={},d={},_=new WeakMap,g=[],p=null,h=!1,S=null,x=null,y=null,w=null,R=null,C=null,z=null,M=!1,b=null,k=null,j=null,Z=null,L=null,ae.set(0,0,r.canvas.width,r.canvas.height),oe.set(0,0,r.canvas.width,r.canvas.height),l.reset(),f.reset(),u.reset()}return{buffers:{color:l,depth:f,stencil:u},enable:Ae,disable:ge,bindFramebuffer:He,drawBuffers:_t,useProgram:Pe,setBlending:ve,setMaterial:Re,setFlipSided:Te,setCullFace:qe,setLineWidth:Fe,setPolygonOffset:De,setScissorTest:ke,activeTexture:it,bindTexture:at,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:Me,texImage3D:Be,updateUBOMapping:be,uniformBlockBinding:Se,texStorage2D:ie,texStorage3D:le,texSubImage2D:J,texSubImage3D:K,compressedTexSubImage2D:Q,compressedTexSubImage3D:de,scissor:$,viewport:ze,reset:me}}function Mh(r,e,t,n,i,a,c){const l=i.isWebGL2,f=i.maxTextures,u=i.maxCubemapSize,m=i.maxTextureSize,s=i.maxSamples,o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,v){return h?new OffscreenCanvas(T,v):fi("canvas")}function x(T,v,F,J){let K=1;if((T.width>J||T.height>J)&&(K=J/Math.max(T.width,T.height)),K<1||v===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const Q=v?Xr:Math.floor,de=Q(K*T.width),ie=Q(K*T.height);g===void 0&&(g=S(de,ie));const le=F?S(de,ie):g;return le.width=de,le.height=ie,le.getContext("2d").drawImage(T,0,0,de,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+de+"x"+ie+")."),le}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return zs(T.width)&&zs(T.height)}function w(T){return l?!1:T.wrapS!==Ut||T.wrapT!==Ut||T.minFilter!==pt&&T.minFilter!==wt}function R(T,v){return T.generateMipmaps&&v&&T.minFilter!==pt&&T.minFilter!==wt}function C(T){r.generateMipmap(T)}function z(T,v,F,J,K=!1){if(l===!1)return v;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=v;if(v===r.RED&&(F===r.FLOAT&&(Q=r.R32F),F===r.HALF_FLOAT&&(Q=r.R16F),F===r.UNSIGNED_BYTE&&(Q=r.R8)),v===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(Q=r.R8UI),F===r.UNSIGNED_SHORT&&(Q=r.R16UI),F===r.UNSIGNED_INT&&(Q=r.R32UI),F===r.BYTE&&(Q=r.R8I),F===r.SHORT&&(Q=r.R16I),F===r.INT&&(Q=r.R32I)),v===r.RG&&(F===r.FLOAT&&(Q=r.RG32F),F===r.HALF_FLOAT&&(Q=r.RG16F),F===r.UNSIGNED_BYTE&&(Q=r.RG8)),v===r.RGBA){const de=K?Yi:Ve.getTransfer(J);F===r.FLOAT&&(Q=r.RGBA32F),F===r.HALF_FLOAT&&(Q=r.RGBA16F),F===r.UNSIGNED_BYTE&&(Q=de===Xe?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(T,v,F){return R(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==pt&&T.minFilter!==wt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function b(T){return T===pt||T===hs||T===ar?r.NEAREST:r.LINEAR}function k(T){const v=T.target;v.removeEventListener("dispose",k),Z(v),v.isVideoTexture&&_.delete(v)}function j(T){const v=T.target;v.removeEventListener("dispose",j),G(v)}function Z(T){const v=n.get(T);if(v.__webglInit===void 0)return;const F=T.source,J=p.get(F);if(J){const K=J[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&L(T),Object.keys(J).length===0&&p.delete(F)}n.remove(T)}function L(T){const v=n.get(T);r.deleteTexture(v.__webglTexture);const F=T.source,J=p.get(F);delete J[v.__cacheKey],c.memory.textures--}function G(T){const v=T.texture,F=n.get(T),J=n.get(v);if(J.__webglTexture!==void 0&&(r.deleteTexture(J.__webglTexture),c.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(F.__webglFramebuffer[K]))for(let Q=0;Q<F.__webglFramebuffer[K].length;Q++)r.deleteFramebuffer(F.__webglFramebuffer[K][Q]);else r.deleteFramebuffer(F.__webglFramebuffer[K]);F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer[K])}else{if(Array.isArray(F.__webglFramebuffer))for(let K=0;K<F.__webglFramebuffer.length;K++)r.deleteFramebuffer(F.__webglFramebuffer[K]);else r.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&r.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let K=0;K<F.__webglColorRenderbuffer.length;K++)F.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(F.__webglColorRenderbuffer[K]);F.__webglDepthRenderbuffer&&r.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let K=0,Q=v.length;K<Q;K++){const de=n.get(v[K]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),c.memory.textures--),n.remove(v[K])}n.remove(v),n.remove(T)}let X=0;function V(){X=0}function te(){const T=X;return T>=f&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+f),X+=1,T}function q(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function W(T,v){const F=n.get(T);if(T.isVideoTexture&&it(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(F,T,v);return}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+v)}function P(T,v){const F=n.get(T);if(T.version>0&&F.__version!==T.version){He(F,T,v);return}t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+v)}function H(T,v){const F=n.get(T);if(T.version>0&&F.__version!==T.version){He(F,T,v);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+v)}function ae(T,v){const F=n.get(T);if(T.version>0&&F.__version!==T.version){_t(F,T,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+v)}const oe={[qi]:r.REPEAT,[Ut]:r.CLAMP_TO_EDGE,[Vr]:r.MIRRORED_REPEAT},fe={[pt]:r.NEAREST,[hs]:r.NEAREST_MIPMAP_NEAREST,[ar]:r.NEAREST_MIPMAP_LINEAR,[wt]:r.LINEAR,[tl]:r.LINEAR_MIPMAP_NEAREST,[ci]:r.LINEAR_MIPMAP_LINEAR},_e={[ml]:r.NEVER,[El]:r.ALWAYS,[_l]:r.LESS,[vl]:r.LEQUAL,[gl]:r.EQUAL,[Sl]:r.GEQUAL,[xl]:r.GREATER,[Ml]:r.NOTEQUAL};function Ae(T,v,F){if(F?(r.texParameteri(T,r.TEXTURE_WRAP_S,oe[v.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,oe[v.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,oe[v.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,fe[v.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,fe[v.minFilter])):(r.texParameteri(T,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(T,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(v.wrapS!==Ut||v.wrapT!==Ut)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,r.TEXTURE_MAG_FILTER,b(v.magFilter)),r.texParameteri(T,r.TEXTURE_MIN_FILTER,b(v.minFilter)),v.minFilter!==pt&&v.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,_e[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===pt||v.minFilter!==ar&&v.minFilter!==ci||v.type===on&&e.has("OES_texture_float_linear")===!1||l===!1&&v.type===ui&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(r.texParameterf(T,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function ge(T,v){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",k));const J=v.source;let K=p.get(J);K===void 0&&(K={},p.set(J,K));const Q=q(v);if(Q!==T.__cacheKey){K[Q]===void 0&&(K[Q]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,F=!0),K[Q].usedTimes++;const de=K[T.__cacheKey];de!==void 0&&(K[T.__cacheKey].usedTimes--,de.usedTimes===0&&L(v)),T.__cacheKey=Q,T.__webglTexture=K[Q].texture}return F}function He(T,v,F){let J=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=r.TEXTURE_3D);const K=ge(T,v),Q=v.source;t.bindTexture(J,T.__webglTexture,r.TEXTURE0+F);const de=n.get(Q);if(Q.version!==de.__version||K===!0){t.activeTexture(r.TEXTURE0+F);const ie=Ve.getPrimaries(Ve.workingColorSpace),le=v.colorSpace===Ct?null:Ve.getPrimaries(v.colorSpace),Me=v.colorSpace===Ct||ie===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Be=w(v)&&y(v.image)===!1;let $=x(v.image,Be,!1,m);$=at(v,$);const ze=y($)||l,be=a.convert(v.format,v.colorSpace);let Se=a.convert(v.type),me=z(v.internalFormat,be,Se,v.colorSpace,v.isVideoTexture);Ae(J,v,ze);let A;const ne=v.mipmaps,ee=l&&v.isVideoTexture!==!0,ce=de.__version===void 0||K===!0,se=M(v,$,ze);if(v.isDepthTexture)me=r.DEPTH_COMPONENT,l?v.type===on?me=r.DEPTH_COMPONENT32F:v.type===an?me=r.DEPTH_COMPONENT24:v.type===Mn?me=r.DEPTH24_STENCIL8:me=r.DEPTH_COMPONENT16:v.type===on&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Sn&&me===r.DEPTH_COMPONENT&&v.type!==Zr&&v.type!==an&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=an,Se=a.convert(v.type)),v.format===Yn&&me===r.DEPTH_COMPONENT&&(me=r.DEPTH_STENCIL,v.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Mn,Se=a.convert(v.type))),ce&&(ee?t.texStorage2D(r.TEXTURE_2D,1,me,$.width,$.height):t.texImage2D(r.TEXTURE_2D,0,me,$.width,$.height,0,be,Se,null));else if(v.isDataTexture)if(ne.length>0&&ze){ee&&ce&&t.texStorage2D(r.TEXTURE_2D,se,me,ne[0].width,ne[0].height);for(let Y=0,he=ne.length;Y<he;Y++)A=ne[Y],ee?t.texSubImage2D(r.TEXTURE_2D,Y,0,0,A.width,A.height,be,Se,A.data):t.texImage2D(r.TEXTURE_2D,Y,me,A.width,A.height,0,be,Se,A.data);v.generateMipmaps=!1}else ee?(ce&&t.texStorage2D(r.TEXTURE_2D,se,me,$.width,$.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,$.width,$.height,be,Se,$.data)):t.texImage2D(r.TEXTURE_2D,0,me,$.width,$.height,0,be,Se,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ee&&ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,me,ne[0].width,ne[0].height,$.depth);for(let Y=0,he=ne.length;Y<he;Y++)A=ne[Y],v.format!==It?be!==null?ee?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,A.width,A.height,$.depth,be,A.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,me,A.width,A.height,$.depth,0,A.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?t.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,A.width,A.height,$.depth,be,Se,A.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Y,me,A.width,A.height,$.depth,0,be,Se,A.data)}else{ee&&ce&&t.texStorage2D(r.TEXTURE_2D,se,me,ne[0].width,ne[0].height);for(let Y=0,he=ne.length;Y<he;Y++)A=ne[Y],v.format!==It?be!==null?ee?t.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,A.width,A.height,be,A.data):t.compressedTexImage2D(r.TEXTURE_2D,Y,me,A.width,A.height,0,A.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?t.texSubImage2D(r.TEXTURE_2D,Y,0,0,A.width,A.height,be,Se,A.data):t.texImage2D(r.TEXTURE_2D,Y,me,A.width,A.height,0,be,Se,A.data)}else if(v.isDataArrayTexture)ee?(ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,me,$.width,$.height,$.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,be,Se,$.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,me,$.width,$.height,$.depth,0,be,Se,$.data);else if(v.isData3DTexture)ee?(ce&&t.texStorage3D(r.TEXTURE_3D,se,me,$.width,$.height,$.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,be,Se,$.data)):t.texImage3D(r.TEXTURE_3D,0,me,$.width,$.height,$.depth,0,be,Se,$.data);else if(v.isFramebufferTexture){if(ce)if(ee)t.texStorage2D(r.TEXTURE_2D,se,me,$.width,$.height);else{let Y=$.width,he=$.height;for(let we=0;we<se;we++)t.texImage2D(r.TEXTURE_2D,we,me,Y,he,0,be,Se,null),Y>>=1,he>>=1}}else if(ne.length>0&&ze){ee&&ce&&t.texStorage2D(r.TEXTURE_2D,se,me,ne[0].width,ne[0].height);for(let Y=0,he=ne.length;Y<he;Y++)A=ne[Y],ee?t.texSubImage2D(r.TEXTURE_2D,Y,0,0,be,Se,A):t.texImage2D(r.TEXTURE_2D,Y,me,be,Se,A);v.generateMipmaps=!1}else ee?(ce&&t.texStorage2D(r.TEXTURE_2D,se,me,$.width,$.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,be,Se,$)):t.texImage2D(r.TEXTURE_2D,0,me,be,Se,$);R(v,ze)&&C(J),de.__version=Q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function _t(T,v,F){if(v.image.length!==6)return;const J=ge(T,v),K=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+F);const Q=n.get(K);if(K.version!==Q.__version||J===!0){t.activeTexture(r.TEXTURE0+F);const de=Ve.getPrimaries(Ve.workingColorSpace),ie=v.colorSpace===Ct?null:Ve.getPrimaries(v.colorSpace),le=v.colorSpace===Ct||de===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Me=v.isCompressedTexture||v.image[0].isCompressedTexture,Be=v.image[0]&&v.image[0].isDataTexture,$=[];for(let Y=0;Y<6;Y++)!Me&&!Be?$[Y]=x(v.image[Y],!1,!0,u):$[Y]=Be?v.image[Y].image:v.image[Y],$[Y]=at(v,$[Y]);const ze=$[0],be=y(ze)||l,Se=a.convert(v.format,v.colorSpace),me=a.convert(v.type),A=z(v.internalFormat,Se,me,v.colorSpace),ne=l&&v.isVideoTexture!==!0,ee=Q.__version===void 0||J===!0;let ce=M(v,ze,be);Ae(r.TEXTURE_CUBE_MAP,v,be);let se;if(Me){ne&&ee&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,A,ze.width,ze.height);for(let Y=0;Y<6;Y++){se=$[Y].mipmaps;for(let he=0;he<se.length;he++){const we=se[he];v.format!==It?Se!==null?ne?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,0,0,we.width,we.height,Se,we.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,A,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,0,0,we.width,we.height,Se,me,we.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,A,we.width,we.height,0,Se,me,we.data)}}}else{se=v.mipmaps,ne&&ee&&(se.length>0&&ce++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,A,$[0].width,$[0].height));for(let Y=0;Y<6;Y++)if(Be){ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,$[Y].width,$[Y].height,Se,me,$[Y].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,A,$[Y].width,$[Y].height,0,Se,me,$[Y].data);for(let he=0;he<se.length;he++){const ut=se[he].image[Y].image;ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,0,0,ut.width,ut.height,Se,me,ut.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,A,ut.width,ut.height,0,Se,me,ut.data)}}else{ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Se,me,$[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,A,Se,me,$[Y]);for(let he=0;he<se.length;he++){const we=se[he];ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,0,0,Se,me,we.image[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,A,Se,me,we.image[Y])}}}R(v,be)&&C(r.TEXTURE_CUBE_MAP),Q.__version=K.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Pe(T,v,F,J,K,Q){const de=a.convert(F.format,F.colorSpace),ie=a.convert(F.type),le=z(F.internalFormat,de,ie,F.colorSpace);if(!n.get(v).__hasExternalTextures){const Be=Math.max(1,v.width>>Q),$=Math.max(1,v.height>>Q);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,Q,le,Be,$,v.depth,0,de,ie,null):t.texImage2D(K,Q,le,Be,$,0,de,ie,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),ke(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,K,n.get(F).__webglTexture,0,De(v)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,K,n.get(F).__webglTexture,Q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function I(T,v,F){if(r.bindRenderbuffer(r.RENDERBUFFER,T),v.depthBuffer&&!v.stencilBuffer){let J=l===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(F||ke(v)){const K=v.depthTexture;K&&K.isDepthTexture&&(K.type===on?J=r.DEPTH_COMPONENT32F:K.type===an&&(J=r.DEPTH_COMPONENT24));const Q=De(v);ke(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,J,v.width,v.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,J,v.width,v.height)}else r.renderbufferStorage(r.RENDERBUFFER,J,v.width,v.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,T)}else if(v.depthBuffer&&v.stencilBuffer){const J=De(v);F&&ke(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,v.width,v.height):ke(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,T)}else{const J=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let K=0;K<J.length;K++){const Q=J[K],de=a.convert(Q.format,Q.colorSpace),ie=a.convert(Q.type),le=z(Q.internalFormat,de,ie,Q.colorSpace),Me=De(v);F&&ke(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,le,v.width,v.height):ke(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Me,le,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,le,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function st(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const J=n.get(v.depthTexture).__webglTexture,K=De(v);if(v.depthTexture.format===Sn)ke(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(v.depthTexture.format===Yn)ke(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ve(T){const v=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");st(v.__webglFramebuffer,T)}else if(F){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]=r.createRenderbuffer(),I(v.__webglDepthbuffer[J],T,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),I(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(T,v,F){const J=n.get(T);v!==void 0&&Pe(J.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&ve(T)}function Te(T){const v=T.texture,F=n.get(T),J=n.get(v);T.addEventListener("dispose",j),T.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=v.version,c.memory.textures++);const K=T.isWebGLCubeRenderTarget===!0,Q=T.isWebGLMultipleRenderTargets===!0,de=y(T)||l;if(K){F.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(l&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ie]=[];for(let le=0;le<v.mipmaps.length;le++)F.__webglFramebuffer[ie][le]=r.createFramebuffer()}else F.__webglFramebuffer[ie]=r.createFramebuffer()}else{if(l&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ie=0;ie<v.mipmaps.length;ie++)F.__webglFramebuffer[ie]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(Q)if(i.drawBuffers){const ie=T.texture;for(let le=0,Me=ie.length;le<Me;le++){const Be=n.get(ie[le]);Be.__webglTexture===void 0&&(Be.__webglTexture=r.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&T.samples>0&&ke(T)===!1){const ie=Q?v:[v];F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<ie.length;le++){const Me=ie[le];F.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[le]);const Be=a.convert(Me.format,Me.colorSpace),$=a.convert(Me.type),ze=z(Me.internalFormat,Be,$,Me.colorSpace,T.isXRRenderTarget===!0),be=De(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,be,ze,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,F.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),I(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,v,de);for(let ie=0;ie<6;ie++)if(l&&v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)Pe(F.__webglFramebuffer[ie][le],T,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,le);else Pe(F.__webglFramebuffer[ie],T,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);R(v,de)&&C(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const ie=T.texture;for(let le=0,Me=ie.length;le<Me;le++){const Be=ie[le],$=n.get(Be);t.bindTexture(r.TEXTURE_2D,$.__webglTexture),Ae(r.TEXTURE_2D,Be,de),Pe(F.__webglFramebuffer,T,Be,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,0),R(Be,de)&&C(r.TEXTURE_2D)}t.unbindTexture()}else{let ie=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(l?ie=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ie,J.__webglTexture),Ae(ie,v,de),l&&v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)Pe(F.__webglFramebuffer[le],T,v,r.COLOR_ATTACHMENT0,ie,le);else Pe(F.__webglFramebuffer,T,v,r.COLOR_ATTACHMENT0,ie,0);R(v,de)&&C(ie),t.unbindTexture()}T.depthBuffer&&ve(T)}function qe(T){const v=y(T)||l,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let J=0,K=F.length;J<K;J++){const Q=F[J];if(R(Q,v)){const de=T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ie=n.get(Q).__webglTexture;t.bindTexture(de,ie),C(de),t.unbindTexture()}}}function Fe(T){if(l&&T.samples>0&&ke(T)===!1){const v=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,J=T.height;let K=r.COLOR_BUFFER_BIT;const Q=[],de=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=n.get(T),le=T.isWebGLMultipleRenderTargets===!0;if(le)for(let Me=0;Me<v.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let Me=0;Me<v.length;Me++){Q.push(r.COLOR_ATTACHMENT0+Me),T.depthBuffer&&Q.push(de);const Be=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(Be===!1&&(T.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),le&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ie.__webglColorRenderbuffer[Me]),Be===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[de]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[de])),le){const $=n.get(v[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$,0)}r.blitFramebuffer(0,0,F,J,0,0,F,J,K,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let Me=0;Me<v.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,ie.__webglColorRenderbuffer[Me]);const Be=n.get(v[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,Be,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function De(T){return Math.min(s,T.samples)}function ke(T){const v=n.get(T);return l&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function it(T){const v=c.render.frame;_.get(T)!==v&&(_.set(T,v),T.update())}function at(T,v){const F=T.colorSpace,J=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===kr||F!==Jt&&F!==Ct&&(Ve.getTransfer(F)===Xe?l===!1?e.has("EXT_sRGB")===!0&&J===It?(T.format=kr,T.minFilter=wt,T.generateMipmaps=!1):v=Ja.sRGBToLinear(v):(J!==It||K!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}this.allocateTextureUnit=te,this.resetTextureUnits=V,this.setTexture2D=W,this.setTexture2DArray=P,this.setTexture3D=H,this.setTextureCube=ae,this.rebindTextures=Re,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=ke}function Sh(r,e,t){const n=t.isWebGL2;function i(a,c=Ct){let l;const f=Ve.getTransfer(c);if(a===un)return r.UNSIGNED_BYTE;if(a===Wa)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Xa)return r.UNSIGNED_SHORT_5_5_5_1;if(a===nl)return r.BYTE;if(a===il)return r.SHORT;if(a===Zr)return r.UNSIGNED_SHORT;if(a===ka)return r.INT;if(a===an)return r.UNSIGNED_INT;if(a===on)return r.FLOAT;if(a===ui)return n?r.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(a===rl)return r.ALPHA;if(a===It)return r.RGBA;if(a===sl)return r.LUMINANCE;if(a===al)return r.LUMINANCE_ALPHA;if(a===Sn)return r.DEPTH_COMPONENT;if(a===Yn)return r.DEPTH_STENCIL;if(a===kr)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(a===ol)return r.RED;if(a===qa)return r.RED_INTEGER;if(a===ll)return r.RG;if(a===Ya)return r.RG_INTEGER;if(a===ja)return r.RGBA_INTEGER;if(a===or||a===lr||a===cr||a===ur)if(f===Xe)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===or)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===lr)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===cr)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ur)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===or)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===lr)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===cr)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ur)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ps||a===ms||a===_s||a===gs)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===ps)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ms)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===_s)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===gs)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===cl)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===vs||a===xs)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===vs)return f===Xe?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===xs)return f===Xe?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ms||a===Ss||a===Es||a===ys||a===Ts||a===As||a===bs||a===ws||a===Rs||a===Cs||a===Ls||a===Ps||a===Ds||a===Us)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Ms)return f===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Ss)return f===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Es)return f===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ys)return f===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Ts)return f===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===As)return f===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===bs)return f===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ws)return f===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Rs)return f===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Cs)return f===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ls)return f===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ps)return f===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Ds)return f===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Us)return f===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===fr||a===Is||a===Ns)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===fr)return f===Xe?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Is)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Ns)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===ul||a===Fs||a===Os||a===Bs)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===fr)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Fs)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Os)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Bs)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Mn?n?r.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:i}}class Eh extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ai extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yh={type:"move"};class Nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,c=null;const l=this._targetRay,f=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){c=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),h=this._getHandJoint(u,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const m=u.joints["index-finger-tip"],s=u.joints["thumb-tip"],o=m.position.distanceTo(s.position),d=.02,_=.005;u.inputState.pinching&&o>d+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&o<=d-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(yh)))}return l!==null&&(l.visible=i!==null),f!==null&&(f.visible=a!==null),u!==null&&(u.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Th extends Mt{constructor(e,t,n,i,a,c,l,f,u,m){if(m=m!==void 0?m:Sn,m!==Sn&&m!==Yn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===Sn&&(n=an),n===void 0&&m===Yn&&(n=Mn),super(null,i,a,c,l,f,m,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:pt,this.minFilter=f!==void 0?f:pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ah extends Kn{constructor(e,t){super();const n=this;let i=null,a=1,c=null,l="local-floor",f=1,u=null,m=null,s=null,o=null,d=null,_=null;const g=t.getContextAttributes();let p=null,h=null;const S=[],x=[],y=new Rt;y.layers.enable(1),y.viewport=new rt;const w=new Rt;w.layers.enable(2),w.viewport=new rt;const R=[y,w],C=new Eh;C.layers.enable(1),C.layers.enable(2);let z=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let H=S[P];return H===void 0&&(H=new Nr,S[P]=H),H.getTargetRaySpace()},this.getControllerGrip=function(P){let H=S[P];return H===void 0&&(H=new Nr,S[P]=H),H.getGripSpace()},this.getHand=function(P){let H=S[P];return H===void 0&&(H=new Nr,S[P]=H),H.getHandSpace()};function b(P){const H=x.indexOf(P.inputSource);if(H===-1)return;const ae=S[H];ae!==void 0&&(ae.update(P.inputSource,P.frame,u||c),ae.dispatchEvent({type:P.type,data:P.inputSource}))}function k(){i.removeEventListener("select",b),i.removeEventListener("selectstart",b),i.removeEventListener("selectend",b),i.removeEventListener("squeeze",b),i.removeEventListener("squeezestart",b),i.removeEventListener("squeezeend",b),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",j);for(let P=0;P<S.length;P++){const H=x[P];H!==null&&(x[P]=null,S[P].disconnect(H))}z=null,M=null,e.setRenderTarget(p),d=null,o=null,s=null,i=null,h=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){a=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){l=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||c},this.setReferenceSpace=function(P){u=P},this.getBaseLayer=function(){return o!==null?o:d},this.getBinding=function(){return s},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(P){if(i=P,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",b),i.addEventListener("selectstart",b),i.addEventListener("selectend",b),i.addEventListener("squeeze",b),i.addEventListener("squeezestart",b),i.addEventListener("squeezeend",b),i.addEventListener("end",k),i.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(i,t,H),i.updateRenderState({baseLayer:d}),h=new yn(d.framebufferWidth,d.framebufferHeight,{format:It,type:un,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let H=null,ae=null,oe=null;g.depth&&(oe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=g.stencil?Yn:Sn,ae=g.stencil?Mn:an);const fe={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:a};s=new XRWebGLBinding(i,t),o=s.createProjectionLayer(fe),i.updateRenderState({layers:[o]}),h=new yn(o.textureWidth,o.textureHeight,{format:It,type:un,depthTexture:new Th(o.textureWidth,o.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const _e=e.properties.get(h);_e.__ignoreDepthValues=o.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(f),u=null,c=await i.requestReferenceSpace(l),W.setContext(i),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function j(P){for(let H=0;H<P.removed.length;H++){const ae=P.removed[H],oe=x.indexOf(ae);oe>=0&&(x[oe]=null,S[oe].disconnect(ae))}for(let H=0;H<P.added.length;H++){const ae=P.added[H];let oe=x.indexOf(ae);if(oe===-1){for(let _e=0;_e<S.length;_e++)if(_e>=x.length){x.push(ae),oe=_e;break}else if(x[_e]===null){x[_e]=ae,oe=_e;break}if(oe===-1)break}const fe=S[oe];fe&&fe.connect(ae)}}const Z=new D,L=new D;function G(P,H,ae){Z.setFromMatrixPosition(H.matrixWorld),L.setFromMatrixPosition(ae.matrixWorld);const oe=Z.distanceTo(L),fe=H.projectionMatrix.elements,_e=ae.projectionMatrix.elements,Ae=fe[14]/(fe[10]-1),ge=fe[14]/(fe[10]+1),He=(fe[9]+1)/fe[5],_t=(fe[9]-1)/fe[5],Pe=(fe[8]-1)/fe[0],I=(_e[8]+1)/_e[0],st=Ae*Pe,ve=Ae*I,Re=oe/(-Pe+I),Te=Re*-Pe;H.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Te),P.translateZ(Re),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const qe=Ae+Re,Fe=ge+Re,De=st-Te,ke=ve+(oe-Te),it=He*ge/Fe*qe,at=_t*ge/Fe*qe;P.projectionMatrix.makePerspective(De,ke,it,at,qe,Fe),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}function X(P,H){H===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(H.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(i===null)return;C.near=w.near=y.near=P.near,C.far=w.far=y.far=P.far,(z!==C.near||M!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,M=C.far);const H=P.parent,ae=C.cameras;X(C,H);for(let oe=0;oe<ae.length;oe++)X(ae[oe],H);ae.length===2?G(C,y,w):C.projectionMatrix.copy(y.projectionMatrix),V(P,C,H)};function V(P,H,ae){ae===null?P.matrix.copy(H.matrixWorld):(P.matrix.copy(ae.matrixWorld),P.matrix.invert(),P.matrix.multiply(H.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(H.projectionMatrix),P.projectionMatrixInverse.copy(H.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=Wr*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(o===null&&d===null))return f},this.setFoveation=function(P){f=P,o!==null&&(o.fixedFoveation=P),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=P)};let te=null;function q(P,H){if(m=H.getViewerPose(u||c),_=H,m!==null){const ae=m.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let oe=!1;ae.length!==C.cameras.length&&(C.cameras.length=0,oe=!0);for(let fe=0;fe<ae.length;fe++){const _e=ae[fe];let Ae=null;if(d!==null)Ae=d.getViewport(_e);else{const He=s.getViewSubImage(o,_e);Ae=He.viewport,fe===0&&(e.setRenderTargetTextures(h,He.colorTexture,o.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(h))}let ge=R[fe];ge===void 0&&(ge=new Rt,ge.layers.enable(fe),ge.viewport=new rt,R[fe]=ge),ge.matrix.fromArray(_e.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(_e.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),fe===0&&(C.matrix.copy(ge.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),oe===!0&&C.cameras.push(ge)}}for(let ae=0;ae<S.length;ae++){const oe=x[ae],fe=S[ae];oe!==null&&fe!==void 0&&fe.update(oe,H,u||c)}te&&te(P,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),_=null}const W=new uo;W.setAnimationLoop(q),this.setAnimationLoop=function(P){te=P},this.dispose=function(){}}}function bh(r,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,ao(r)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,S,x,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(p,h):h.isMeshToonMaterial?(a(p,h),s(p,h)):h.isMeshPhongMaterial?(a(p,h),m(p,h)):h.isMeshStandardMaterial?(a(p,h),o(p,h),h.isMeshPhysicalMaterial&&d(p,h,y)):h.isMeshMatcapMaterial?(a(p,h),_(p,h)):h.isMeshDepthMaterial?a(p,h):h.isMeshDistanceMaterial?(a(p,h),g(p,h)):h.isMeshNormalMaterial?a(p,h):h.isLineBasicMaterial?(c(p,h),h.isLineDashedMaterial&&l(p,h)):h.isPointsMaterial?f(p,h,S,x):h.isSpriteMaterial?u(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===xt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===xt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const S=e.get(h).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*x,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function l(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function f(p,h,S,x){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*S,p.scale.value=x*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function m(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function s(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function o(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function d(p,h,S){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===xt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const S=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wh(r,e,t,n){let i={},a={},c=[];const l=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(S,x){const y=x.program;n.uniformBlockBinding(S,y)}function u(S,x){let y=i[S.id];y===void 0&&(_(S),y=m(S),i[S.id]=y,S.addEventListener("dispose",p));const w=x.program;n.updateUBOMapping(S,w);const R=e.render.frame;a[S.id]!==R&&(o(S),a[S.id]=R)}function m(S){const x=s();S.__bindingPointIndex=x;const y=r.createBuffer(),w=S.__size,R=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,w,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function s(){for(let S=0;S<l;S++)if(c.indexOf(S)===-1)return c.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function o(S){const x=i[S.id],y=S.uniforms,w=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let R=0,C=y.length;R<C;R++){const z=y[R];if(d(z,R,w)===!0){const M=z.__offset,b=Array.isArray(z.value)?z.value:[z.value];let k=0;for(let j=0;j<b.length;j++){const Z=b[j],L=g(Z);typeof Z=="number"?(z.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,M+k,z.__data)):Z.isMatrix3?(z.__data[0]=Z.elements[0],z.__data[1]=Z.elements[1],z.__data[2]=Z.elements[2],z.__data[3]=Z.elements[0],z.__data[4]=Z.elements[3],z.__data[5]=Z.elements[4],z.__data[6]=Z.elements[5],z.__data[7]=Z.elements[0],z.__data[8]=Z.elements[6],z.__data[9]=Z.elements[7],z.__data[10]=Z.elements[8],z.__data[11]=Z.elements[0]):(Z.toArray(z.__data,k),k+=L.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,M,z.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,x,y){const w=S.value;if(y[x]===void 0){if(typeof w=="number")y[x]=w;else{const R=Array.isArray(w)?w:[w],C=[];for(let z=0;z<R.length;z++)C.push(R[z].clone());y[x]=C}return!0}else if(typeof w=="number"){if(y[x]!==w)return y[x]=w,!0}else{const R=Array.isArray(y[x])?y[x]:[y[x]],C=Array.isArray(w)?w:[w];for(let z=0;z<R.length;z++){const M=R[z];if(M.equals(C[z])===!1)return M.copy(C[z]),!0}}return!1}function _(S){const x=S.uniforms;let y=0;const w=16;let R=0;for(let C=0,z=x.length;C<z;C++){const M=x[C],b={boundary:0,storage:0},k=Array.isArray(M.value)?M.value:[M.value];for(let j=0,Z=k.length;j<Z;j++){const L=k[j],G=g(L);b.boundary+=G.boundary,b.storage+=G.storage}if(M.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,C>0){R=y%w;const j=w-R;R!==0&&j-b.boundary<0&&(y+=w-R,M.__offset=y)}y+=b.storage}return R=y%w,R>0&&(y+=w-R),S.__size=y,S.__cache={},this}function g(S){const x={boundary:0,storage:0};return typeof S=="number"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){const x=S.target;x.removeEventListener("dispose",p);const y=c.indexOf(x.__bindingPointIndex);c.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete a[x.id]}function h(){for(const S in i)r.deleteBuffer(i[S]);c=[],i={},a={}}return{bind:f,update:u,dispose:h}}class _o{constructor(e={}){const{canvas:t=Tl(),context:n=null,depth:i=!0,stencil:a=!0,alpha:c=!1,antialias:l=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:u=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:s=!1}=e;this.isWebGLRenderer=!0;let o;n!==null?o=n.getContextAttributes().alpha:o=c;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const h=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nt,this._useLegacyLights=!1,this.toneMapping=cn,this.toneMappingExposure=1;const x=this;let y=!1,w=0,R=0,C=null,z=-1,M=null;const b=new rt,k=new rt;let j=null;const Z=new Oe(0);let L=0,G=t.width,X=t.height,V=1,te=null,q=null;const W=new rt(0,0,G,X),P=new rt(0,0,G,X);let H=!1;const ae=new co;let oe=!1,fe=!1,_e=null;const Ae=new Je,ge=new Ge,He=new D,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return C===null?V:1}let I=n;function st(E,U){for(let O=0;O<E.length;O++){const N=E[O],B=t.getContext(N,U);if(B!==null)return B}return null}try{const E={alpha:!0,depth:i,stencil:a,antialias:l,premultipliedAlpha:f,preserveDrawingBuffer:u,powerPreference:m,failIfMajorPerformanceCaveat:s};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jr}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",ce,!1),I===null){const U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),I=st(U,E),I===null)throw st(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ve,Re,Te,qe,Fe,De,ke,it,at,T,v,F,J,K,Q,de,ie,le,Me,Be,$,ze,be,Se;function me(){ve=new Bf(I),Re=new Pf(I,ve,e),ve.init(Re),ze=new Sh(I,ve,Re),Te=new xh(I,ve,Re),qe=new zf(I),Fe=new sh,De=new Mh(I,ve,Te,Fe,Re,ze,qe),ke=new Uf(x),it=new Of(x),at=new Kl(I,Re),be=new Cf(I,ve,at,Re),T=new Hf(I,at,qe,be),v=new Xf(I,T,at,qe),Me=new Wf(I,Re,De),de=new Df(Fe),F=new rh(x,ke,it,ve,Re,be,de),J=new bh(x,Fe),K=new oh,Q=new hh(ve,Re),le=new Rf(x,ke,it,Te,v,o,f),ie=new vh(x,v,Re),Se=new wh(I,qe,Re,Te),Be=new Lf(I,ve,qe,Re),$=new Gf(I,ve,qe,Re),qe.programs=F.programs,x.capabilities=Re,x.extensions=ve,x.properties=Fe,x.renderLists=K,x.shadowMap=ie,x.state=Te,x.info=qe}me();const A=new Ah(x,I);this.xr=A,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(G,X,!1))},this.getSize=function(E){return E.set(G,X)},this.setSize=function(E,U,O=!0){if(A.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,X=U,t.width=Math.floor(E*V),t.height=Math.floor(U*V),O===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(G*V,X*V).floor()},this.setDrawingBufferSize=function(E,U,O){G=E,X=U,V=O,t.width=Math.floor(E*O),t.height=Math.floor(U*O),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(W)},this.setViewport=function(E,U,O,N){E.isVector4?W.set(E.x,E.y,E.z,E.w):W.set(E,U,O,N),Te.viewport(b.copy(W).multiplyScalar(V).floor())},this.getScissor=function(E){return E.copy(P)},this.setScissor=function(E,U,O,N){E.isVector4?P.set(E.x,E.y,E.z,E.w):P.set(E,U,O,N),Te.scissor(k.copy(P).multiplyScalar(V).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(E){Te.setScissorTest(H=E)},this.setOpaqueSort=function(E){te=E},this.setTransparentSort=function(E){q=E},this.getClearColor=function(E){return E.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(E=!0,U=!0,O=!0){let N=0;if(E){let B=!1;if(C!==null){const ue=C.texture.format;B=ue===ja||ue===Ya||ue===qa}if(B){const ue=C.texture.type,pe=ue===un||ue===an||ue===Zr||ue===Mn||ue===Wa||ue===Xa,Ee=le.getClearColor(),ye=le.getClearAlpha(),Ie=Ee.r,xe=Ee.g,Ce=Ee.b;pe?(d[0]=Ie,d[1]=xe,d[2]=Ce,d[3]=ye,I.clearBufferuiv(I.COLOR,0,d)):(_[0]=Ie,_[1]=xe,_[2]=Ce,_[3]=ye,I.clearBufferiv(I.COLOR,0,_))}else N|=I.COLOR_BUFFER_BIT}U&&(N|=I.DEPTH_BUFFER_BIT),O&&(N|=I.STENCIL_BUFFER_BIT),I.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),K.dispose(),Q.dispose(),Fe.dispose(),ke.dispose(),it.dispose(),v.dispose(),be.dispose(),Se.dispose(),F.dispose(),A.dispose(),A.removeEventListener("sessionstart",We),A.removeEventListener("sessionend",Ft),_e&&(_e.dispose(),_e=null),ft.stop()};function ne(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=qe.autoReset,U=ie.enabled,O=ie.autoUpdate,N=ie.needsUpdate,B=ie.type;me(),qe.autoReset=E,ie.enabled=U,ie.autoUpdate=O,ie.needsUpdate=N,ie.type=B}function ce(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function se(E){const U=E.target;U.removeEventListener("dispose",se),Y(U)}function Y(E){he(E),Fe.remove(E)}function he(E){const U=Fe.get(E).programs;U!==void 0&&(U.forEach(function(O){F.releaseProgram(O)}),E.isShaderMaterial&&F.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,O,N,B,ue){U===null&&(U=_t);const pe=B.isMesh&&B.matrixWorld.determinant()<0,Ee=Eo(E,U,O,N,B);Te.setMaterial(N,pe);let ye=O.index,Ie=1;if(N.wireframe===!0){if(ye=T.getWireframeAttribute(O),ye===void 0)return;Ie=2}const xe=O.drawRange,Ce=O.attributes.position;let Ye=xe.start*Ie,je=(xe.start+xe.count)*Ie;ue!==null&&(Ye=Math.max(Ye,ue.start*Ie),je=Math.min(je,(ue.start+ue.count)*Ie)),ye!==null?(Ye=Math.max(Ye,0),je=Math.min(je,ye.count)):Ce!=null&&(Ye=Math.max(Ye,0),je=Math.min(je,Ce.count));const Tt=je-Ye;if(Tt<0||Tt===1/0)return;be.setup(B,N,Ee,O,ye);let Gt,Ke=Be;if(ye!==null&&(Gt=at.get(ye),Ke=$,Ke.setIndex(Gt)),B.isMesh)N.wireframe===!0?(Te.setLineWidth(N.wireframeLinewidth*Pe()),Ke.setMode(I.LINES)):Ke.setMode(I.TRIANGLES);else if(B.isLine){let Ne=N.linewidth;Ne===void 0&&(Ne=1),Te.setLineWidth(Ne*Pe()),B.isLineSegments?Ke.setMode(I.LINES):B.isLineLoop?Ke.setMode(I.LINE_LOOP):Ke.setMode(I.LINE_STRIP)}else B.isPoints?Ke.setMode(I.POINTS):B.isSprite&&Ke.setMode(I.TRIANGLES);if(B.isInstancedMesh)Ke.renderInstances(Ye,Tt,B.count);else if(O.isInstancedBufferGeometry){const Ne=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,nr=Math.min(O.instanceCount,Ne);Ke.renderInstances(Ye,Tt,nr)}else Ke.render(Ye,Tt)},this.compile=function(E,U){function O(N,B,ue){N.transparent===!0&&N.side===Kt&&N.forceSinglePass===!1?(N.side=xt,N.needsUpdate=!0,vi(N,B,ue),N.side=$t,N.needsUpdate=!0,vi(N,B,ue),N.side=Kt):vi(N,B,ue)}p=Q.get(E),p.init(),S.push(p),E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(x._useLegacyLights),E.traverse(function(N){const B=N.material;if(B)if(Array.isArray(B))for(let ue=0;ue<B.length;ue++){const pe=B[ue];O(pe,E,N)}else O(B,E,N)}),S.pop(),p=null};let we=null;function ut(E){we&&we(E)}function We(){ft.stop()}function Ft(){ft.start()}const ft=new uo;ft.setAnimationLoop(ut),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(E){we=E,A.setAnimationLoop(E),E===null?ft.stop():ft.start()},A.addEventListener("sessionstart",We),A.addEventListener("sessionend",Ft),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),A.enabled===!0&&A.isPresenting===!0&&(A.cameraAutoUpdate===!0&&A.updateCamera(U),U=A.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,C),p=Q.get(E,S.length),p.init(),S.push(p),Ae.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ae.setFromProjectionMatrix(Ae),fe=this.localClippingEnabled,oe=de.init(this.clippingPlanes,fe),g=K.get(E,h.length),g.init(),h.push(g),ts(E,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(te,q),this.info.render.frame++,oe===!0&&de.beginShadows();const O=p.state.shadowsArray;if(ie.render(O,E,U),oe===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),le.render(g,E),p.setupLights(x._useLegacyLights),U.isArrayCamera){const N=U.cameras;for(let B=0,ue=N.length;B<ue;B++){const pe=N[B];ns(g,E,pe,pe.viewport)}}else ns(g,E,U);C!==null&&(De.updateMultisampleRenderTarget(C),De.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(x,E,U),be.resetDefaultState(),z=-1,M=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function ts(E,U,O,N){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ae.intersectsSprite(E)){N&&He.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ae);const pe=v.update(E),Ee=E.material;Ee.visible&&g.push(E,pe,Ee,O,He.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ae.intersectsObject(E))){const pe=v.update(E),Ee=E.material;if(N&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),He.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),He.copy(pe.boundingSphere.center)),He.applyMatrix4(E.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ee)){const ye=pe.groups;for(let Ie=0,xe=ye.length;Ie<xe;Ie++){const Ce=ye[Ie],Ye=Ee[Ce.materialIndex];Ye&&Ye.visible&&g.push(E,pe,Ye,O,He.z,Ce)}}else Ee.visible&&g.push(E,pe,Ee,O,He.z,null)}}const ue=E.children;for(let pe=0,Ee=ue.length;pe<Ee;pe++)ts(ue[pe],U,O,N)}function ns(E,U,O,N){const B=E.opaque,ue=E.transmissive,pe=E.transparent;p.setupLightsView(O),oe===!0&&de.setGlobalState(x.clippingPlanes,O),ue.length>0&&So(B,ue,U,O),N&&Te.viewport(b.copy(N)),B.length>0&&gi(B,U,O),ue.length>0&&gi(ue,U,O),pe.length>0&&gi(pe,U,O),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function So(E,U,O,N){const B=Re.isWebGL2;_e===null&&(_e=new yn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?ui:un,minFilter:ci,samples:B?4:0})),x.getDrawingBufferSize(ge),B?_e.setSize(ge.x,ge.y):_e.setSize(Xr(ge.x),Xr(ge.y));const ue=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(Z),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const pe=x.toneMapping;x.toneMapping=cn,gi(E,O,N),De.updateMultisampleRenderTarget(_e),De.updateRenderTargetMipmap(_e);let Ee=!1;for(let ye=0,Ie=U.length;ye<Ie;ye++){const xe=U[ye],Ce=xe.object,Ye=xe.geometry,je=xe.material,Tt=xe.group;if(je.side===Kt&&Ce.layers.test(N.layers)){const Gt=je.side;je.side=xt,je.needsUpdate=!0,is(Ce,O,N,Ye,je,Tt),je.side=Gt,je.needsUpdate=!0,Ee=!0}}Ee===!0&&(De.updateMultisampleRenderTarget(_e),De.updateRenderTargetMipmap(_e)),x.setRenderTarget(ue),x.setClearColor(Z,L),x.toneMapping=pe}function gi(E,U,O){const N=U.isScene===!0?U.overrideMaterial:null;for(let B=0,ue=E.length;B<ue;B++){const pe=E[B],Ee=pe.object,ye=pe.geometry,Ie=N===null?pe.material:N,xe=pe.group;Ee.layers.test(O.layers)&&is(Ee,U,O,ye,Ie,xe)}}function is(E,U,O,N,B,ue){E.onBeforeRender(x,U,O,N,B,ue),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(x,U,O,N,E,ue),B.transparent===!0&&B.side===Kt&&B.forceSinglePass===!1?(B.side=xt,B.needsUpdate=!0,x.renderBufferDirect(O,U,N,B,E,ue),B.side=$t,B.needsUpdate=!0,x.renderBufferDirect(O,U,N,B,E,ue),B.side=Kt):x.renderBufferDirect(O,U,N,B,E,ue),E.onAfterRender(x,U,O,N,B,ue)}function vi(E,U,O){U.isScene!==!0&&(U=_t);const N=Fe.get(E),B=p.state.lights,ue=p.state.shadowsArray,pe=B.state.version,Ee=F.getParameters(E,B.state,ue,U,O),ye=F.getProgramCacheKey(Ee);let Ie=N.programs;N.environment=E.isMeshStandardMaterial?U.environment:null,N.fog=U.fog,N.envMap=(E.isMeshStandardMaterial?it:ke).get(E.envMap||N.environment),Ie===void 0&&(E.addEventListener("dispose",se),Ie=new Map,N.programs=Ie);let xe=Ie.get(ye);if(xe!==void 0){if(N.currentProgram===xe&&N.lightsStateVersion===pe)return rs(E,Ee),xe}else Ee.uniforms=F.getUniforms(E),E.onBuild(O,Ee,x),E.onBeforeCompile(Ee,x),xe=F.acquireProgram(Ee,ye),Ie.set(ye,xe),N.uniforms=Ee.uniforms;const Ce=N.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=de.uniform),rs(E,Ee),N.needsLights=To(E),N.lightsStateVersion=pe,N.needsLights&&(Ce.ambientLightColor.value=B.state.ambient,Ce.lightProbe.value=B.state.probe,Ce.directionalLights.value=B.state.directional,Ce.directionalLightShadows.value=B.state.directionalShadow,Ce.spotLights.value=B.state.spot,Ce.spotLightShadows.value=B.state.spotShadow,Ce.rectAreaLights.value=B.state.rectArea,Ce.ltc_1.value=B.state.rectAreaLTC1,Ce.ltc_2.value=B.state.rectAreaLTC2,Ce.pointLights.value=B.state.point,Ce.pointLightShadows.value=B.state.pointShadow,Ce.hemisphereLights.value=B.state.hemi,Ce.directionalShadowMap.value=B.state.directionalShadowMap,Ce.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ce.spotShadowMap.value=B.state.spotShadowMap,Ce.spotLightMatrix.value=B.state.spotLightMatrix,Ce.spotLightMap.value=B.state.spotLightMap,Ce.pointShadowMap.value=B.state.pointShadowMap,Ce.pointShadowMatrix.value=B.state.pointShadowMatrix);const Ye=xe.getUniforms(),je=Wi.seqWithValue(Ye.seq,Ce);return N.currentProgram=xe,N.uniformsList=je,xe}function rs(E,U){const O=Fe.get(E);O.outputColorSpace=U.outputColorSpace,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Eo(E,U,O,N,B){U.isScene!==!0&&(U=_t),De.resetTextureUnits();const ue=U.fog,pe=N.isMeshStandardMaterial?U.environment:null,Ee=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Jt,ye=(N.isMeshStandardMaterial?it:ke).get(N.envMap||pe),Ie=N.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,xe=!!O.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Ce=!!O.morphAttributes.position,Ye=!!O.morphAttributes.normal,je=!!O.morphAttributes.color;let Tt=cn;N.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Tt=x.toneMapping);const Gt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ke=Gt!==void 0?Gt.length:0,Ne=Fe.get(N),nr=p.state.lights;if(oe===!0&&(fe===!0||E!==M)){const St=E===M&&N.id===z;de.setState(N,E,St)}let Ze=!1;N.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==nr.state.version||Ne.outputColorSpace!==Ee||B.isInstancedMesh&&Ne.instancing===!1||!B.isInstancedMesh&&Ne.instancing===!0||B.isSkinnedMesh&&Ne.skinning===!1||!B.isSkinnedMesh&&Ne.skinning===!0||B.isInstancedMesh&&Ne.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ne.instancingColor===!1&&B.instanceColor!==null||Ne.envMap!==ye||N.fog===!0&&Ne.fog!==ue||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==de.numPlanes||Ne.numIntersection!==de.numIntersection)||Ne.vertexAlphas!==Ie||Ne.vertexTangents!==xe||Ne.morphTargets!==Ce||Ne.morphNormals!==Ye||Ne.morphColors!==je||Ne.toneMapping!==Tt||Re.isWebGL2===!0&&Ne.morphTargetsCount!==Ke)&&(Ze=!0):(Ze=!0,Ne.__version=N.version);let fn=Ne.currentProgram;Ze===!0&&(fn=vi(N,U,B));let ss=!1,Jn=!1,ir=!1;const dt=fn.getUniforms(),dn=Ne.uniforms;if(Te.useProgram(fn.program)&&(ss=!0,Jn=!0,ir=!0),N.id!==z&&(z=N.id,Jn=!0),ss||M!==E){dt.setValue(I,"projectionMatrix",E.projectionMatrix),dt.setValue(I,"viewMatrix",E.matrixWorldInverse);const St=dt.map.cameraPosition;St!==void 0&&St.setValue(I,He.setFromMatrixPosition(E.matrixWorld)),Re.logarithmicDepthBuffer&&dt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&dt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Jn=!0,ir=!0)}if(B.isSkinnedMesh){dt.setOptional(I,B,"bindMatrix"),dt.setOptional(I,B,"bindMatrixInverse");const St=B.skeleton;St&&(Re.floatVertexTextures?(St.boneTexture===null&&St.computeBoneTexture(),dt.setValue(I,"boneTexture",St.boneTexture,De),dt.setValue(I,"boneTextureSize",St.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const rr=O.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0&&Re.isWebGL2===!0)&&Me.update(B,O,fn),(Jn||Ne.receiveShadow!==B.receiveShadow)&&(Ne.receiveShadow=B.receiveShadow,dt.setValue(I,"receiveShadow",B.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(dn.envMap.value=ye,dn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),Jn&&(dt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&yo(dn,ir),ue&&N.fog===!0&&J.refreshFogUniforms(dn,ue),J.refreshMaterialUniforms(dn,N,V,X,_e),Wi.upload(I,Ne.uniformsList,dn,De)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Wi.upload(I,Ne.uniformsList,dn,De),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&dt.setValue(I,"center",B.center),dt.setValue(I,"modelViewMatrix",B.modelViewMatrix),dt.setValue(I,"normalMatrix",B.normalMatrix),dt.setValue(I,"modelMatrix",B.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const St=N.uniformsGroups;for(let sr=0,Ao=St.length;sr<Ao;sr++)if(Re.isWebGL2){const as=St[sr];Se.update(as,fn),Se.bind(as,fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fn}function yo(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function To(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,U,O){Fe.get(E.texture).__webglTexture=U,Fe.get(E.depthTexture).__webglTexture=O;const N=Fe.get(E);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=O===void 0,N.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const O=Fe.get(E);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,O=0){C=E,w=U,R=O;let N=!0,B=null,ue=!1,pe=!1;if(E){const ye=Fe.get(E);ye.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(I.FRAMEBUFFER,null),N=!1):ye.__webglFramebuffer===void 0?De.setupRenderTarget(E):ye.__hasExternalTextures&&De.rebindTextures(E,Fe.get(E.texture).__webglTexture,Fe.get(E.depthTexture).__webglTexture);const Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(pe=!0);const xe=Fe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(xe[U])?B=xe[U][O]:B=xe[U],ue=!0):Re.isWebGL2&&E.samples>0&&De.useMultisampledRTT(E)===!1?B=Fe.get(E).__webglMultisampledFramebuffer:Array.isArray(xe)?B=xe[O]:B=xe,b.copy(E.viewport),k.copy(E.scissor),j=E.scissorTest}else b.copy(W).multiplyScalar(V).floor(),k.copy(P).multiplyScalar(V).floor(),j=H;if(Te.bindFramebuffer(I.FRAMEBUFFER,B)&&Re.drawBuffers&&N&&Te.drawBuffers(E,B),Te.viewport(b),Te.scissor(k),Te.setScissorTest(j),ue){const ye=Fe.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,O)}else if(pe){const ye=Fe.get(E.texture),Ie=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.__webglTexture,O||0,Ie)}z=-1},this.readRenderTargetPixels=function(E,U,O,N,B,ue,pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Ee=Ee[pe]),Ee){Te.bindFramebuffer(I.FRAMEBUFFER,Ee);try{const ye=E.texture,Ie=ye.format,xe=ye.type;if(Ie!==It&&ze.convert(Ie)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=xe===ui&&(ve.has("EXT_color_buffer_half_float")||Re.isWebGL2&&ve.has("EXT_color_buffer_float"));if(xe!==un&&ze.convert(xe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(xe===on&&(Re.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-N&&O>=0&&O<=E.height-B&&I.readPixels(U,O,N,B,ze.convert(Ie),ze.convert(xe),ue)}finally{const ye=C!==null?Fe.get(C).__webglFramebuffer:null;Te.bindFramebuffer(I.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(E,U,O=0){const N=Math.pow(2,-O),B=Math.floor(U.image.width*N),ue=Math.floor(U.image.height*N);De.setTexture2D(U,0),I.copyTexSubImage2D(I.TEXTURE_2D,O,0,0,E.x,E.y,B,ue),Te.unbindTexture()},this.copyTextureToTexture=function(E,U,O,N=0){const B=U.image.width,ue=U.image.height,pe=ze.convert(O.format),Ee=ze.convert(O.type);De.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment),U.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,E.x,E.y,B,ue,pe,Ee,U.image.data):U.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,pe,U.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,N,E.x,E.y,pe,Ee,U.image),N===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(E,U,O,N,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=E.max.x-E.min.x+1,pe=E.max.y-E.min.y+1,Ee=E.max.z-E.min.z+1,ye=ze.convert(N.format),Ie=ze.convert(N.type);let xe;if(N.isData3DTexture)De.setTexture3D(N,0),xe=I.TEXTURE_3D;else if(N.isDataArrayTexture)De.setTexture2DArray(N,0),xe=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const Ce=I.getParameter(I.UNPACK_ROW_LENGTH),Ye=I.getParameter(I.UNPACK_IMAGE_HEIGHT),je=I.getParameter(I.UNPACK_SKIP_PIXELS),Tt=I.getParameter(I.UNPACK_SKIP_ROWS),Gt=I.getParameter(I.UNPACK_SKIP_IMAGES),Ke=O.isCompressedTexture?O.mipmaps[0]:O.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ke.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ke.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,E.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,E.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,E.min.z),O.isDataTexture||O.isData3DTexture?I.texSubImage3D(xe,B,U.x,U.y,U.z,ue,pe,Ee,ye,Ie,Ke.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(xe,B,U.x,U.y,U.z,ue,pe,Ee,ye,Ke.data)):I.texSubImage3D(xe,B,U.x,U.y,U.z,ue,pe,Ee,ye,Ie,Ke),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ce),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ye),I.pixelStorei(I.UNPACK_SKIP_PIXELS,je),I.pixelStorei(I.UNPACK_SKIP_ROWS,Tt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Gt),B===0&&N.generateMipmaps&&I.generateMipmap(xe),Te.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?De.setTextureCube(E,0):E.isData3DTexture?De.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?De.setTexture2DArray(E,0):De.setTexture2D(E,0),Te.unbindTexture()},this.resetState=function(){w=0,R=0,C=null,Te.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===$r?"display-p3":"srgb",t.unpackColorSpace=Ve.workingColorSpace===Qi?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===nt?En:Ka}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===En?nt:Jt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Rh extends _o{}Rh.prototype.isWebGL1Renderer=!0;class Ch extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Xi extends Qt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ba=new D,wa=new D,Ra=new Je,Fr=new Jr,Gi=new mi;class Lh extends ct{constructor(e=new Nt,t=new Xi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)ba.fromBufferAttribute(t,i-1),wa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ba.distanceTo(wa);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere),Gi.applyMatrix4(i),Gi.radius+=a,e.ray.intersectsSphere(Gi)===!1)return;Ra.copy(i).invert(),Fr.copy(e.ray).applyMatrix4(Ra);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=l*l,u=new D,m=new D,s=new D,o=new D,d=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const h=Math.max(0,c.start),S=Math.min(_.count,c.start+c.count);for(let x=h,y=S-1;x<y;x+=d){const w=_.getX(x),R=_.getX(x+1);if(u.fromBufferAttribute(p,w),m.fromBufferAttribute(p,R),Fr.distanceSqToSegment(u,m,o,s)>f)continue;o.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(o);z<e.near||z>e.far||t.push({distance:z,point:s.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,c.start),S=Math.min(p.count,c.start+c.count);for(let x=h,y=S-1;x<y;x+=d){if(u.fromBufferAttribute(p,x),m.fromBufferAttribute(p,x+1),Fr.distanceSqToSegment(u,m,o,s)>f)continue;o.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(o);R<e.near||R>e.far||t.push({distance:R,point:s.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=i.length;a<c;a++){const l=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}const Ca=new D,La=new D;class Pa extends Lh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,a=t.count;i<a;i+=2)Ca.fromBufferAttribute(t,i),La.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ca.distanceTo(La);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oi extends Qt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Da=new Je,Yr=new Jr,zi=new mi,Vi=new D;class Or extends ct{constructor(e=new Nt,t=new oi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zi.copy(n.boundingSphere),zi.applyMatrix4(i),zi.radius+=a,e.ray.intersectsSphere(zi)===!1)return;Da.copy(i).invert(),Yr.copy(e.ray).applyMatrix4(Da);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=l*l,u=n.index,s=n.attributes.position;if(u!==null){const o=Math.max(0,c.start),d=Math.min(u.count,c.start+c.count);for(let _=o,g=d;_<g;_++){const p=u.getX(_);Vi.fromBufferAttribute(s,p),Ua(Vi,p,f,i,e,t,this)}}else{const o=Math.max(0,c.start),d=Math.min(s.count,c.start+c.count);for(let _=o,g=d;_<g;_++)Vi.fromBufferAttribute(s,_),Ua(Vi,_,f,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=i.length;a<c;a++){const l=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function Ua(r,e,t,n,i,a,c){const l=Yr.distanceSqToPoint(r);if(l<t){const f=new D;Yr.closestPointToPoint(r,f),f.applyMatrix4(n);const u=i.ray.origin.distanceTo(f);if(u<i.near||u>i.far)return;a.push({distance:u,distanceToRay:Math.sqrt(l),point:f,index:e,face:null,object:c})}}class go extends Qt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Oe(16777215),this.specular=new Oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const $i={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ph{constructor(e,t,n){const i=this;let a=!1,c=0,l=0,f;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(m){l++,a===!1&&i.onStart!==void 0&&i.onStart(m,c,l),a=!0},this.itemEnd=function(m){c++,i.onProgress!==void 0&&i.onProgress(m,c,l),c===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(m){i.onError!==void 0&&i.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,s){return u.push(m,s),this},this.removeHandler=function(m){const s=u.indexOf(m);return s!==-1&&u.splice(s,2),this},this.getHandler=function(m){for(let s=0,o=u.length;s<o;s+=2){const d=u[s],_=u[s+1];if(d.global&&(d.lastIndex=0),d.test(m))return _}return null}}}const vo=new Ph;class $n{constructor(e){this.manager=e!==void 0?e:vo,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,a){n.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}$n.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yt={};class Dh extends Error{constructor(e,t){super(e),this.response=t}}class xo extends $n{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=$i.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Yt[e]!==void 0){Yt[e].push({onLoad:t,onProgress:n,onError:i});return}Yt[e]=[],Yt[e].push({onLoad:t,onProgress:n,onError:i});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,f=this.responseType;fetch(c).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const m=Yt[e],s=u.body.getReader(),o=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),d=o?parseInt(o):0,_=d!==0;let g=0;const p=new ReadableStream({start(h){S();function S(){s.read().then(({done:x,value:y})=>{if(x)h.close();else{g+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let R=0,C=m.length;R<C;R++){const z=m[R];z.onProgress&&z.onProgress(w)}h.enqueue(y),S()}})}}});return new Response(p)}else throw new Dh(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(f){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(m=>new DOMParser().parseFromString(m,l));case"json":return u.json();default:if(l===void 0)return u.text();{const s=/charset="?([^;"\s]*)"?/i.exec(l),o=s&&s[1]?s[1].toLowerCase():void 0,d=new TextDecoder(o);return u.arrayBuffer().then(_=>d.decode(_))}}}).then(u=>{$i.add(e,u);const m=Yt[e];delete Yt[e];for(let s=0,o=m.length;s<o;s++){const d=m[s];d.onLoad&&d.onLoad(u)}}).catch(u=>{const m=Yt[e];if(m===void 0)throw this.manager.itemError(e),u;delete Yt[e];for(let s=0,o=m.length;s<o;s++){const d=m[s];d.onError&&d.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Uh extends $n{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=$i.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const l=fi("img");function f(){m(),$i.add(e,this),t&&t(this),a.manager.itemEnd(e)}function u(s){m(),i&&i(s),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){l.removeEventListener("load",f,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",f,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),a.manager.itemStart(e),l.src=e,l}}class Ih extends $n{constructor(e){super(e)}load(e,t,n,i){const a=new Mt,c=new Uh(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(l){a.image=l,a.needsUpdate=!0,t!==void 0&&t(a)},n,i),a}}class Nh extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Fh extends Nh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Oh{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Bh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ia(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ia();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ia(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jr);class Hh extends $n{constructor(e){super(e)}load(e,t,n,i){const a=this,c=this.path===""?Oh.extractUrlBase(e):this.path,l=new xo(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(f){try{t(a.parse(f,c))}catch(u){i?i(u):console.error(u),a.manager.itemError(e)}},n,i)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const n=e.split(`
`);let i={};const a=/\s+/,c={};for(let f=0;f<n.length;f++){let u=n[f];if(u=u.trim(),u.length===0||u.charAt(0)==="#")continue;const m=u.indexOf(" ");let s=m>=0?u.substring(0,m):u;s=s.toLowerCase();let o=m>=0?u.substring(m+1):"";if(o=o.trim(),s==="newmtl")i={name:o},c[o]=i;else if(s==="ka"||s==="kd"||s==="ks"||s==="ke"){const d=o.split(a,3);i[s]=[parseFloat(d[0]),parseFloat(d[1]),parseFloat(d[2])]}else i[s]=o}const l=new Gh(this.resourcePath||t,this.materialOptions);return l.setCrossOrigin(this.crossOrigin),l.setManager(this.manager),l.setMaterials(c),l}}class Gh{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:$t,this.wrap=this.options.wrap!==void 0?this.options.wrap:qi}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const n in e){const i=e[n],a={};t[n]=a;for(const c in i){let l=!0,f=i[c];const u=c.toLowerCase();switch(u){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(f=[f[0]/255,f[1]/255,f[2]/255]),this.options&&this.options.ignoreZeroRGBs&&f[0]===0&&f[1]===0&&f[2]===0&&(l=!1);break}l&&(a[u]=f)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,n=this.materialsInfo[e],i={name:e,side:this.side};function a(l,f){return typeof f!="string"||f===""?"":/^https?:\/\//i.test(f)?f:l+f}function c(l,f){if(i[l])return;const u=t.getTextureParams(f,i),m=t.loadTexture(a(t.baseUrl,u.url));m.repeat.copy(u.scale),m.offset.copy(u.offset),m.wrapS=t.wrap,m.wrapT=t.wrap,(l==="map"||l==="emissiveMap")&&(m.colorSpace=nt),i[l]=m}for(const l in n){const f=n[l];let u;if(f!=="")switch(l.toLowerCase()){case"kd":i.color=new Oe().fromArray(f).convertSRGBToLinear();break;case"ks":i.specular=new Oe().fromArray(f).convertSRGBToLinear();break;case"ke":i.emissive=new Oe().fromArray(f).convertSRGBToLinear();break;case"map_kd":c("map",f);break;case"map_ks":c("specularMap",f);break;case"map_ke":c("emissiveMap",f);break;case"norm":c("normalMap",f);break;case"map_bump":case"bump":c("bumpMap",f);break;case"map_d":c("alphaMap",f),i.transparent=!0;break;case"ns":i.shininess=parseFloat(f);break;case"d":u=parseFloat(f),u<1&&(i.opacity=u,i.transparent=!0);break;case"tr":u=parseFloat(f),this.options&&this.options.invertTrProperty&&(u=1-u),u>0&&(i.opacity=1-u,i.transparent=!0);break}}return this.materials[e]=new go(i),this.materials[e]}getTextureParams(e,t){const n={scale:new Ge(1,1),offset:new Ge(0,0)},i=e.split(/\s+/);let a;return a=i.indexOf("-bm"),a>=0&&(t.bumpScale=parseFloat(i[a+1]),i.splice(a,2)),a=i.indexOf("-s"),a>=0&&(n.scale.set(parseFloat(i[a+1]),parseFloat(i[a+2])),i.splice(a,4)),a=i.indexOf("-o"),a>=0&&(n.offset.set(parseFloat(i[a+1]),parseFloat(i[a+2])),i.splice(a,4)),n.url=i.join(" ").trim(),n}loadTexture(e,t,n,i,a){const c=this.manager!==void 0?this.manager:vo;let l=c.getHandler(e);l===null&&(l=new Ih(c)),l.setCrossOrigin&&l.setCrossOrigin(this.crossOrigin);const f=l.load(e,n,i,a);return t!==void 0&&(f.mapping=t),f}}const zh=/^[og]\s*(.+)?/,Vh=/^mtllib /,kh=/^usemtl /,Wh=/^usemap /,Na=/\s+/,Fa=new D,Br=new D,Oa=new D,Ba=new D,bt=new D,ki=new Oe;function Xh(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,a){const c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);const l={index:this.materials.length,name:i||"",mtllib:Array.isArray(a)&&a.length>0?a[a.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(f){const u={index:typeof f=="number"?f:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return u.clone=this.clone.bind(u),u}};return this.materials.push(l),l},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const a=this.currentMaterial();if(a&&a.groupEnd===-1&&(a.groupEnd=this.geometry.vertices.length/3,a.groupCount=a.groupEnd-a.groupStart,a.inherited=!1),i&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),a}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,a=this.object.geometry.vertices;a.push(i[e+0],i[e+1],i[e+2]),a.push(i[t+0],i[t+1],i[t+2]),a.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,a=this.object.geometry.normals;a.push(i[e+0],i[e+1],i[e+2]),a.push(i[t+0],i[t+1],i[t+2]),a.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,a=this.object.geometry.normals;Fa.fromArray(i,e),Br.fromArray(i,t),Oa.fromArray(i,n),bt.subVectors(Oa,Br),Ba.subVectors(Fa,Br),bt.cross(Ba),bt.normalize(),a.push(bt.x,bt.y,bt.z),a.push(bt.x,bt.y,bt.z),a.push(bt.x,bt.y,bt.z)},addColor:function(e,t,n){const i=this.colors,a=this.object.geometry.colors;i[e]!==void 0&&a.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&a.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&a.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,a=this.object.geometry.uvs;a.push(i[e+0],i[e+1]),a.push(i[t+0],i[t+1]),a.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,a,c,l,f,u){const m=this.vertices.length;let s=this.parseVertexIndex(e,m),o=this.parseVertexIndex(t,m),d=this.parseVertexIndex(n,m);if(this.addVertex(s,o,d),this.addColor(s,o,d),l!==void 0&&l!==""){const _=this.normals.length;s=this.parseNormalIndex(l,_),o=this.parseNormalIndex(f,_),d=this.parseNormalIndex(u,_),this.addNormal(s,o,d)}else this.addFaceNormal(s,o,d);if(i!==void 0&&i!==""){const _=this.uvs.length;s=this.parseUVIndex(i,_),o=this.parseUVIndex(a,_),d=this.parseUVIndex(c,_),this.addUV(s,o,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const a=this.parseVertexIndex(e[n],t);this.addVertexPoint(a),this.addColor(a)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let a=0,c=e.length;a<c;a++)this.addVertexLine(this.parseVertexIndex(e[a],n));for(let a=0,c=t.length;a<c;a++)this.addUVLine(this.parseUVIndex(t[a],i))}};return r.startObject("",!1),r}class qh extends $n{constructor(e){super(e),this.materials=null}load(e,t,n,i){const a=this,c=new xo(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{t(a.parse(l))}catch(f){i?i(f):console.error(f),a.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Xh;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let l=0,f=n.length;l<f;l++){const u=n[l].trimStart();if(u.length===0)continue;const m=u.charAt(0);if(m!=="#")if(m==="v"){const s=u.split(Na);switch(s[0]){case"v":t.vertices.push(parseFloat(s[1]),parseFloat(s[2]),parseFloat(s[3])),s.length>=7?(ki.setRGB(parseFloat(s[4]),parseFloat(s[5]),parseFloat(s[6])).convertSRGBToLinear(),t.colors.push(ki.r,ki.g,ki.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(s[1]),parseFloat(s[2]),parseFloat(s[3]));break;case"vt":t.uvs.push(parseFloat(s[1]),parseFloat(s[2]));break}}else if(m==="f"){const o=u.slice(1).trim().split(Na),d=[];for(let g=0,p=o.length;g<p;g++){const h=o[g];if(h.length>0){const S=h.split("/");d.push(S)}}const _=d[0];for(let g=1,p=d.length-1;g<p;g++){const h=d[g],S=d[g+1];t.addFace(_[0],h[0],S[0],_[1],h[1],S[1],_[2],h[2],S[2])}}else if(m==="l"){const s=u.substring(1).trim().split(" ");let o=[];const d=[];if(u.indexOf("/")===-1)o=s;else for(let _=0,g=s.length;_<g;_++){const p=s[_].split("/");p[0]!==""&&o.push(p[0]),p[1]!==""&&d.push(p[1])}t.addLineGeometry(o,d)}else if(m==="p"){const o=u.slice(1).trim().split(" ");t.addPointGeometry(o)}else if((i=zh.exec(u))!==null){const s=(" "+i[0].slice(1).trim()).slice(1);t.startObject(s)}else if(kh.test(u))t.object.startMaterial(u.substring(7).trim(),t.materialLibraries);else if(Vh.test(u))t.materialLibraries.push(u.substring(7).trim());else if(Wh.test(u))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(m==="s"){if(i=u.split(" "),i.length>1){const o=i[1].trim().toLowerCase();t.object.smooth=o!=="0"&&o!=="off"}else t.object.smooth=!0;const s=t.object.currentMaterial();s&&(s.smooth=t.object.smooth)}else{if(u==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+u+'"')}}t.finalize();const a=new ai;if(a.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let l=0,f=t.objects.length;l<f;l++){const u=t.objects[l],m=u.geometry,s=u.materials,o=m.type==="Line",d=m.type==="Points";let _=!1;if(m.vertices.length===0)continue;const g=new Nt;g.setAttribute("position",new mt(m.vertices,3)),m.normals.length>0&&g.setAttribute("normal",new mt(m.normals,3)),m.colors.length>0&&(_=!0,g.setAttribute("color",new mt(m.colors,3))),m.hasUVIndices===!0&&g.setAttribute("uv",new mt(m.uvs,2));const p=[];for(let S=0,x=s.length;S<x;S++){const y=s[S],w=y.name+"_"+y.smooth+"_"+_;let R=t.materials[w];if(this.materials!==null){if(R=this.materials.create(y.name),o&&R&&!(R instanceof Xi)){const C=new Xi;Qt.prototype.copy.call(C,R),C.color.copy(R.color),R=C}else if(d&&R&&!(R instanceof oi)){const C=new oi({size:10,sizeAttenuation:!1});Qt.prototype.copy.call(C,R),C.color.copy(R.color),C.map=R.map,R=C}}R===void 0&&(o?R=new Xi:d?R=new oi({size:1,sizeAttenuation:!1}):R=new go,R.name=y.name,R.flatShading=!y.smooth,R.vertexColors=_,t.materials[w]=R),p.push(R)}let h;if(p.length>1){for(let S=0,x=s.length;S<x;S++){const y=s[S];g.addGroup(y.groupStart,y.groupCount,S)}o?h=new Pa(g,p):d?h=new Or(g,p):h=new Bt(g,p)}else o?h=new Pa(g,p[0]):d?h=new Or(g,p[0]):h=new Bt(g,p[0]);h.name=u.name,a.add(h)}else if(t.vertices.length>0){const l=new oi({size:1,sizeAttenuation:!1}),f=new Nt;f.setAttribute("position",new mt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(f.setAttribute("color",new mt(t.colors,3)),l.vertexColors=!0);const u=new Or(f,l);a.add(u)}return a}}var ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Mo={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(r){(function(){var e=function(){this.init()};e.prototype={init:function(){var s=this||t;return s._counter=1e3,s._html5AudioPool=[],s.html5PoolSize=10,s._codecs={},s._howls=[],s._muted=!1,s._volume=1,s._canPlayEvent="canplaythrough",s._navigator=typeof window<"u"&&window.navigator?window.navigator:null,s.masterGain=null,s.noAudio=!1,s.usingWebAudio=!0,s.autoSuspend=!0,s.ctx=null,s.autoUnlock=!0,s._setup(),s},volume:function(s){var o=this||t;if(s=parseFloat(s),o.ctx||m(),typeof s<"u"&&s>=0&&s<=1){if(o._volume=s,o._muted)return o;o.usingWebAudio&&o.masterGain.gain.setValueAtTime(s,t.ctx.currentTime);for(var d=0;d<o._howls.length;d++)if(!o._howls[d]._webAudio)for(var _=o._howls[d]._getSoundIds(),g=0;g<_.length;g++){var p=o._howls[d]._soundById(_[g]);p&&p._node&&(p._node.volume=p._volume*s)}return o}return o._volume},mute:function(s){var o=this||t;o.ctx||m(),o._muted=s,o.usingWebAudio&&o.masterGain.gain.setValueAtTime(s?0:o._volume,t.ctx.currentTime);for(var d=0;d<o._howls.length;d++)if(!o._howls[d]._webAudio)for(var _=o._howls[d]._getSoundIds(),g=0;g<_.length;g++){var p=o._howls[d]._soundById(_[g]);p&&p._node&&(p._node.muted=s?!0:p._muted)}return o},stop:function(){for(var s=this||t,o=0;o<s._howls.length;o++)s._howls[o].stop();return s},unload:function(){for(var s=this||t,o=s._howls.length-1;o>=0;o--)s._howls[o].unload();return s.usingWebAudio&&s.ctx&&typeof s.ctx.close<"u"&&(s.ctx.close(),s.ctx=null,m()),s},codecs:function(s){return(this||t)._codecs[s.replace(/^x-/,"")]},_setup:function(){var s=this||t;if(s.state=s.ctx&&s.ctx.state||"suspended",s._autoSuspend(),!s.usingWebAudio)if(typeof Audio<"u")try{var o=new Audio;typeof o.oncanplaythrough>"u"&&(s._canPlayEvent="canplay")}catch{s.noAudio=!0}else s.noAudio=!0;try{var o=new Audio;o.muted&&(s.noAudio=!0)}catch{}return s.noAudio||s._setupCodecs(),s},_setupCodecs:function(){var s=this||t,o=null;try{o=typeof Audio<"u"?new Audio:null}catch{return s}if(!o||typeof o.canPlayType!="function")return s;var d=o.canPlayType("audio/mpeg;").replace(/^no$/,""),_=s._navigator?s._navigator.userAgent:"",g=_.match(/OPR\/(\d+)/g),p=g&&parseInt(g[0].split("/")[1],10)<33,h=_.indexOf("Safari")!==-1&&_.indexOf("Chrome")===-1,S=_.match(/Version\/(.*?) /),x=h&&S&&parseInt(S[1],10)<15;return s._codecs={mp3:!!(!p&&(d||o.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!o.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(o.canPlayType('audio/wav; codecs="1"')||o.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!o.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!o.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(o.canPlayType("audio/x-m4a;")||o.canPlayType("audio/m4a;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(o.canPlayType("audio/x-m4b;")||o.canPlayType("audio/m4b;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(o.canPlayType("audio/x-mp4;")||o.canPlayType("audio/mp4;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!x&&o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!x&&o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!o.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(o.canPlayType("audio/x-flac;")||o.canPlayType("audio/flac;")).replace(/^no$/,"")},s},_unlockAudio:function(){var s=this||t;if(!(s._audioUnlocked||!s.ctx)){s._audioUnlocked=!1,s.autoUnlock=!1,!s._mobileUnloaded&&s.ctx.sampleRate!==44100&&(s._mobileUnloaded=!0,s.unload()),s._scratchBuffer=s.ctx.createBuffer(1,1,22050);var o=function(d){for(;s._html5AudioPool.length<s.html5PoolSize;)try{var _=new Audio;_._unlocked=!0,s._releaseHtml5Audio(_)}catch{s.noAudio=!0;break}for(var g=0;g<s._howls.length;g++)if(!s._howls[g]._webAudio)for(var p=s._howls[g]._getSoundIds(),h=0;h<p.length;h++){var S=s._howls[g]._soundById(p[h]);S&&S._node&&!S._node._unlocked&&(S._node._unlocked=!0,S._node.load())}s._autoResume();var x=s.ctx.createBufferSource();x.buffer=s._scratchBuffer,x.connect(s.ctx.destination),typeof x.start>"u"?x.noteOn(0):x.start(0),typeof s.ctx.resume=="function"&&s.ctx.resume(),x.onended=function(){x.disconnect(0),s._audioUnlocked=!0,document.removeEventListener("touchstart",o,!0),document.removeEventListener("touchend",o,!0),document.removeEventListener("click",o,!0),document.removeEventListener("keydown",o,!0);for(var y=0;y<s._howls.length;y++)s._howls[y]._emit("unlock")}};return document.addEventListener("touchstart",o,!0),document.addEventListener("touchend",o,!0),document.addEventListener("click",o,!0),document.addEventListener("keydown",o,!0),s}},_obtainHtml5Audio:function(){var s=this||t;if(s._html5AudioPool.length)return s._html5AudioPool.pop();var o=new Audio().play();return o&&typeof Promise<"u"&&(o instanceof Promise||typeof o.then=="function")&&o.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(s){var o=this||t;return s._unlocked&&o._html5AudioPool.push(s),o},_autoSuspend:function(){var s=this;if(!(!s.autoSuspend||!s.ctx||typeof s.ctx.suspend>"u"||!t.usingWebAudio)){for(var o=0;o<s._howls.length;o++)if(s._howls[o]._webAudio){for(var d=0;d<s._howls[o]._sounds.length;d++)if(!s._howls[o]._sounds[d]._paused)return s}return s._suspendTimer&&clearTimeout(s._suspendTimer),s._suspendTimer=setTimeout(function(){if(s.autoSuspend){s._suspendTimer=null,s.state="suspending";var _=function(){s.state="suspended",s._resumeAfterSuspend&&(delete s._resumeAfterSuspend,s._autoResume())};s.ctx.suspend().then(_,_)}},3e4),s}},_autoResume:function(){var s=this;if(!(!s.ctx||typeof s.ctx.resume>"u"||!t.usingWebAudio))return s.state==="running"&&s.ctx.state!=="interrupted"&&s._suspendTimer?(clearTimeout(s._suspendTimer),s._suspendTimer=null):s.state==="suspended"||s.state==="running"&&s.ctx.state==="interrupted"?(s.ctx.resume().then(function(){s.state="running";for(var o=0;o<s._howls.length;o++)s._howls[o]._emit("resume")}),s._suspendTimer&&(clearTimeout(s._suspendTimer),s._suspendTimer=null)):s.state==="suspending"&&(s._resumeAfterSuspend=!0),s}};var t=new e,n=function(s){var o=this;if(!s.src||s.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}o.init(s)};n.prototype={init:function(s){var o=this;return t.ctx||m(),o._autoplay=s.autoplay||!1,o._format=typeof s.format!="string"?s.format:[s.format],o._html5=s.html5||!1,o._muted=s.mute||!1,o._loop=s.loop||!1,o._pool=s.pool||5,o._preload=typeof s.preload=="boolean"||s.preload==="metadata"?s.preload:!0,o._rate=s.rate||1,o._sprite=s.sprite||{},o._src=typeof s.src!="string"?s.src:[s.src],o._volume=s.volume!==void 0?s.volume:1,o._xhr={method:s.xhr&&s.xhr.method?s.xhr.method:"GET",headers:s.xhr&&s.xhr.headers?s.xhr.headers:null,withCredentials:s.xhr&&s.xhr.withCredentials?s.xhr.withCredentials:!1},o._duration=0,o._state="unloaded",o._sounds=[],o._endTimers={},o._queue=[],o._playLock=!1,o._onend=s.onend?[{fn:s.onend}]:[],o._onfade=s.onfade?[{fn:s.onfade}]:[],o._onload=s.onload?[{fn:s.onload}]:[],o._onloaderror=s.onloaderror?[{fn:s.onloaderror}]:[],o._onplayerror=s.onplayerror?[{fn:s.onplayerror}]:[],o._onpause=s.onpause?[{fn:s.onpause}]:[],o._onplay=s.onplay?[{fn:s.onplay}]:[],o._onstop=s.onstop?[{fn:s.onstop}]:[],o._onmute=s.onmute?[{fn:s.onmute}]:[],o._onvolume=s.onvolume?[{fn:s.onvolume}]:[],o._onrate=s.onrate?[{fn:s.onrate}]:[],o._onseek=s.onseek?[{fn:s.onseek}]:[],o._onunlock=s.onunlock?[{fn:s.onunlock}]:[],o._onresume=[],o._webAudio=t.usingWebAudio&&!o._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(o),o._autoplay&&o._queue.push({event:"play",action:function(){o.play()}}),o._preload&&o._preload!=="none"&&o.load(),o},load:function(){var s=this,o=null;if(t.noAudio){s._emit("loaderror",null,"No audio support.");return}typeof s._src=="string"&&(s._src=[s._src]);for(var d=0;d<s._src.length;d++){var _,g;if(s._format&&s._format[d])_=s._format[d];else{if(g=s._src[d],typeof g!="string"){s._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}_=/^data:audio\/([^;,]+);/i.exec(g),_||(_=/\.([^.]+)$/.exec(g.split("?",1)[0])),_&&(_=_[1].toLowerCase())}if(_||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),_&&t.codecs(_)){o=s._src[d];break}}if(!o){s._emit("loaderror",null,"No codec support for selected audio sources.");return}return s._src=o,s._state="loading",window.location.protocol==="https:"&&o.slice(0,5)==="http:"&&(s._html5=!0,s._webAudio=!1),new i(s),s._webAudio&&c(s),s},play:function(s,o){var d=this,_=null;if(typeof s=="number")_=s,s=null;else{if(typeof s=="string"&&d._state==="loaded"&&!d._sprite[s])return null;if(typeof s>"u"&&(s="__default",!d._playLock)){for(var g=0,p=0;p<d._sounds.length;p++)d._sounds[p]._paused&&!d._sounds[p]._ended&&(g++,_=d._sounds[p]._id);g===1?s=null:_=null}}var h=_?d._soundById(_):d._inactiveSound();if(!h)return null;if(_&&!s&&(s=h._sprite||"__default"),d._state!=="loaded"){h._sprite=s,h._ended=!1;var S=h._id;return d._queue.push({event:"play",action:function(){d.play(S)}}),S}if(_&&!h._paused)return o||d._loadQueue("play"),h._id;d._webAudio&&t._autoResume();var x=Math.max(0,h._seek>0?h._seek:d._sprite[s][0]/1e3),y=Math.max(0,(d._sprite[s][0]+d._sprite[s][1])/1e3-x),w=y*1e3/Math.abs(h._rate),R=d._sprite[s][0]/1e3,C=(d._sprite[s][0]+d._sprite[s][1])/1e3;h._sprite=s,h._ended=!1;var z=function(){h._paused=!1,h._seek=x,h._start=R,h._stop=C,h._loop=!!(h._loop||d._sprite[s][2])};if(x>=C){d._ended(h);return}var M=h._node;if(d._webAudio){var b=function(){d._playLock=!1,z(),d._refreshBuffer(h);var L=h._muted||d._muted?0:h._volume;M.gain.setValueAtTime(L,t.ctx.currentTime),h._playStart=t.ctx.currentTime,typeof M.bufferSource.start>"u"?h._loop?M.bufferSource.noteGrainOn(0,x,86400):M.bufferSource.noteGrainOn(0,x,y):h._loop?M.bufferSource.start(0,x,86400):M.bufferSource.start(0,x,y),w!==1/0&&(d._endTimers[h._id]=setTimeout(d._ended.bind(d,h),w)),o||setTimeout(function(){d._emit("play",h._id),d._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?b():(d._playLock=!0,d.once("resume",b),d._clearTimer(h._id))}else{var k=function(){M.currentTime=x,M.muted=h._muted||d._muted||t._muted||M.muted,M.volume=h._volume*t.volume(),M.playbackRate=h._rate;try{var L=M.play();if(L&&typeof Promise<"u"&&(L instanceof Promise||typeof L.then=="function")?(d._playLock=!0,z(),L.then(function(){d._playLock=!1,M._unlocked=!0,o?d._loadQueue():d._emit("play",h._id)}).catch(function(){d._playLock=!1,d._emit("playerror",h._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),h._ended=!0,h._paused=!0})):o||(d._playLock=!1,z(),d._emit("play",h._id)),M.playbackRate=h._rate,M.paused){d._emit("playerror",h._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}s!=="__default"||h._loop?d._endTimers[h._id]=setTimeout(d._ended.bind(d,h),w):(d._endTimers[h._id]=function(){d._ended(h),M.removeEventListener("ended",d._endTimers[h._id],!1)},M.addEventListener("ended",d._endTimers[h._id],!1))}catch(G){d._emit("playerror",h._id,G)}};M.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(M.src=d._src,M.load());var j=window&&window.ejecta||!M.readyState&&t._navigator.isCocoonJS;if(M.readyState>=3||j)k();else{d._playLock=!0,d._state="loading";var Z=function(){d._state="loaded",k(),M.removeEventListener(t._canPlayEvent,Z,!1)};M.addEventListener(t._canPlayEvent,Z,!1),d._clearTimer(h._id)}}return h._id},pause:function(s){var o=this;if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"pause",action:function(){o.pause(s)}}),o;for(var d=o._getSoundIds(s),_=0;_<d.length;_++){o._clearTimer(d[_]);var g=o._soundById(d[_]);if(g&&!g._paused&&(g._seek=o.seek(d[_]),g._rateSeek=0,g._paused=!0,o._stopFade(d[_]),g._node))if(o._webAudio){if(!g._node.bufferSource)continue;typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),o._cleanBuffer(g._node)}else(!isNaN(g._node.duration)||g._node.duration===1/0)&&g._node.pause();arguments[1]||o._emit("pause",g?g._id:null)}return o},stop:function(s,o){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(s)}}),d;for(var _=d._getSoundIds(s),g=0;g<_.length;g++){d._clearTimer(_[g]);var p=d._soundById(_[g]);p&&(p._seek=p._start||0,p._rateSeek=0,p._paused=!0,p._ended=!0,d._stopFade(_[g]),p._node&&(d._webAudio?p._node.bufferSource&&(typeof p._node.bufferSource.stop>"u"?p._node.bufferSource.noteOff(0):p._node.bufferSource.stop(0),d._cleanBuffer(p._node)):(!isNaN(p._node.duration)||p._node.duration===1/0)&&(p._node.currentTime=p._start||0,p._node.pause(),p._node.duration===1/0&&d._clearSound(p._node))),o||d._emit("stop",p._id))}return d},mute:function(s,o){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(s,o)}}),d;if(typeof o>"u")if(typeof s=="boolean")d._muted=s;else return d._muted;for(var _=d._getSoundIds(o),g=0;g<_.length;g++){var p=d._soundById(_[g]);p&&(p._muted=s,p._interval&&d._stopFade(p._id),d._webAudio&&p._node?p._node.gain.setValueAtTime(s?0:p._volume,t.ctx.currentTime):p._node&&(p._node.muted=t._muted?!0:s),d._emit("mute",p._id))}return d},volume:function(){var s=this,o=arguments,d,_;if(o.length===0)return s._volume;if(o.length===1||o.length===2&&typeof o[1]>"u"){var g=s._getSoundIds(),p=g.indexOf(o[0]);p>=0?_=parseInt(o[0],10):d=parseFloat(o[0])}else o.length>=2&&(d=parseFloat(o[0]),_=parseInt(o[1],10));var h;if(typeof d<"u"&&d>=0&&d<=1){if(s._state!=="loaded"||s._playLock)return s._queue.push({event:"volume",action:function(){s.volume.apply(s,o)}}),s;typeof _>"u"&&(s._volume=d),_=s._getSoundIds(_);for(var S=0;S<_.length;S++)h=s._soundById(_[S]),h&&(h._volume=d,o[2]||s._stopFade(_[S]),s._webAudio&&h._node&&!h._muted?h._node.gain.setValueAtTime(d,t.ctx.currentTime):h._node&&!h._muted&&(h._node.volume=d*t.volume()),s._emit("volume",h._id))}else return h=_?s._soundById(_):s._sounds[0],h?h._volume:0;return s},fade:function(s,o,d,_){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"fade",action:function(){g.fade(s,o,d,_)}}),g;s=Math.min(Math.max(0,parseFloat(s)),1),o=Math.min(Math.max(0,parseFloat(o)),1),d=parseFloat(d),g.volume(s,_);for(var p=g._getSoundIds(_),h=0;h<p.length;h++){var S=g._soundById(p[h]);if(S){if(_||g._stopFade(p[h]),g._webAudio&&!S._muted){var x=t.ctx.currentTime,y=x+d/1e3;S._volume=s,S._node.gain.setValueAtTime(s,x),S._node.gain.linearRampToValueAtTime(o,y)}g._startFadeInterval(S,s,o,d,p[h],typeof _>"u")}}return g},_startFadeInterval:function(s,o,d,_,g,p){var h=this,S=o,x=d-o,y=Math.abs(x/.01),w=Math.max(4,y>0?_/y:_),R=Date.now();s._fadeTo=d,s._interval=setInterval(function(){var C=(Date.now()-R)/_;R=Date.now(),S+=x*C,S=Math.round(S*100)/100,x<0?S=Math.max(d,S):S=Math.min(d,S),h._webAudio?s._volume=S:h.volume(S,s._id,!0),p&&(h._volume=S),(d<o&&S<=d||d>o&&S>=d)&&(clearInterval(s._interval),s._interval=null,s._fadeTo=null,h.volume(d,s._id),h._emit("fade",s._id))},w)},_stopFade:function(s){var o=this,d=o._soundById(s);return d&&d._interval&&(o._webAudio&&d._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(d._interval),d._interval=null,o.volume(d._fadeTo,s),d._fadeTo=null,o._emit("fade",s)),o},loop:function(){var s=this,o=arguments,d,_,g;if(o.length===0)return s._loop;if(o.length===1)if(typeof o[0]=="boolean")d=o[0],s._loop=d;else return g=s._soundById(parseInt(o[0],10)),g?g._loop:!1;else o.length===2&&(d=o[0],_=parseInt(o[1],10));for(var p=s._getSoundIds(_),h=0;h<p.length;h++)g=s._soundById(p[h]),g&&(g._loop=d,s._webAudio&&g._node&&g._node.bufferSource&&(g._node.bufferSource.loop=d,d&&(g._node.bufferSource.loopStart=g._start||0,g._node.bufferSource.loopEnd=g._stop,s.playing(p[h])&&(s.pause(p[h],!0),s.play(p[h],!0)))));return s},rate:function(){var s=this,o=arguments,d,_;if(o.length===0)_=s._sounds[0]._id;else if(o.length===1){var g=s._getSoundIds(),p=g.indexOf(o[0]);p>=0?_=parseInt(o[0],10):d=parseFloat(o[0])}else o.length===2&&(d=parseFloat(o[0]),_=parseInt(o[1],10));var h;if(typeof d=="number"){if(s._state!=="loaded"||s._playLock)return s._queue.push({event:"rate",action:function(){s.rate.apply(s,o)}}),s;typeof _>"u"&&(s._rate=d),_=s._getSoundIds(_);for(var S=0;S<_.length;S++)if(h=s._soundById(_[S]),h){s.playing(_[S])&&(h._rateSeek=s.seek(_[S]),h._playStart=s._webAudio?t.ctx.currentTime:h._playStart),h._rate=d,s._webAudio&&h._node&&h._node.bufferSource?h._node.bufferSource.playbackRate.setValueAtTime(d,t.ctx.currentTime):h._node&&(h._node.playbackRate=d);var x=s.seek(_[S]),y=(s._sprite[h._sprite][0]+s._sprite[h._sprite][1])/1e3-x,w=y*1e3/Math.abs(h._rate);(s._endTimers[_[S]]||!h._paused)&&(s._clearTimer(_[S]),s._endTimers[_[S]]=setTimeout(s._ended.bind(s,h),w)),s._emit("rate",h._id)}}else return h=s._soundById(_),h?h._rate:s._rate;return s},seek:function(){var s=this,o=arguments,d,_;if(o.length===0)s._sounds.length&&(_=s._sounds[0]._id);else if(o.length===1){var g=s._getSoundIds(),p=g.indexOf(o[0]);p>=0?_=parseInt(o[0],10):s._sounds.length&&(_=s._sounds[0]._id,d=parseFloat(o[0]))}else o.length===2&&(d=parseFloat(o[0]),_=parseInt(o[1],10));if(typeof _>"u")return 0;if(typeof d=="number"&&(s._state!=="loaded"||s._playLock))return s._queue.push({event:"seek",action:function(){s.seek.apply(s,o)}}),s;var h=s._soundById(_);if(h)if(typeof d=="number"&&d>=0){var S=s.playing(_);S&&s.pause(_,!0),h._seek=d,h._ended=!1,s._clearTimer(_),!s._webAudio&&h._node&&!isNaN(h._node.duration)&&(h._node.currentTime=d);var x=function(){S&&s.play(_,!0),s._emit("seek",_)};if(S&&!s._webAudio){var y=function(){s._playLock?setTimeout(y,0):x()};setTimeout(y,0)}else x()}else if(s._webAudio){var w=s.playing(_)?t.ctx.currentTime-h._playStart:0,R=h._rateSeek?h._rateSeek-h._seek:0;return h._seek+(R+w*Math.abs(h._rate))}else return h._node.currentTime;return s},playing:function(s){var o=this;if(typeof s=="number"){var d=o._soundById(s);return d?!d._paused:!1}for(var _=0;_<o._sounds.length;_++)if(!o._sounds[_]._paused)return!0;return!1},duration:function(s){var o=this,d=o._duration,_=o._soundById(s);return _&&(d=o._sprite[_._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var s=this,o=s._sounds,d=0;d<o.length;d++)o[d]._paused||s.stop(o[d]._id),s._webAudio||(s._clearSound(o[d]._node),o[d]._node.removeEventListener("error",o[d]._errorFn,!1),o[d]._node.removeEventListener(t._canPlayEvent,o[d]._loadFn,!1),o[d]._node.removeEventListener("ended",o[d]._endFn,!1),t._releaseHtml5Audio(o[d]._node)),delete o[d]._node,s._clearTimer(o[d]._id);var _=t._howls.indexOf(s);_>=0&&t._howls.splice(_,1);var g=!0;for(d=0;d<t._howls.length;d++)if(t._howls[d]._src===s._src||s._src.indexOf(t._howls[d]._src)>=0){g=!1;break}return a&&g&&delete a[s._src],t.noAudio=!1,s._state="unloaded",s._sounds=[],s=null,null},on:function(s,o,d,_){var g=this,p=g["_on"+s];return typeof o=="function"&&p.push(_?{id:d,fn:o,once:_}:{id:d,fn:o}),g},off:function(s,o,d){var _=this,g=_["_on"+s],p=0;if(typeof o=="number"&&(d=o,o=null),o||d)for(p=0;p<g.length;p++){var h=d===g[p].id;if(o===g[p].fn&&h||!o&&h){g.splice(p,1);break}}else if(s)_["_on"+s]=[];else{var S=Object.keys(_);for(p=0;p<S.length;p++)S[p].indexOf("_on")===0&&Array.isArray(_[S[p]])&&(_[S[p]]=[])}return _},once:function(s,o,d){var _=this;return _.on(s,o,d,1),_},_emit:function(s,o,d){for(var _=this,g=_["_on"+s],p=g.length-1;p>=0;p--)(!g[p].id||g[p].id===o||s==="load")&&(setTimeout((function(h){h.call(this,o,d)}).bind(_,g[p].fn),0),g[p].once&&_.off(s,g[p].fn,g[p].id));return _._loadQueue(s),_},_loadQueue:function(s){var o=this;if(o._queue.length>0){var d=o._queue[0];d.event===s&&(o._queue.shift(),o._loadQueue()),s||d.action()}return o},_ended:function(s){var o=this,d=s._sprite;if(!o._webAudio&&s._node&&!s._node.paused&&!s._node.ended&&s._node.currentTime<s._stop)return setTimeout(o._ended.bind(o,s),100),o;var _=!!(s._loop||o._sprite[d][2]);if(o._emit("end",s._id),!o._webAudio&&_&&o.stop(s._id,!0).play(s._id),o._webAudio&&_){o._emit("play",s._id),s._seek=s._start||0,s._rateSeek=0,s._playStart=t.ctx.currentTime;var g=(s._stop-s._start)*1e3/Math.abs(s._rate);o._endTimers[s._id]=setTimeout(o._ended.bind(o,s),g)}return o._webAudio&&!_&&(s._paused=!0,s._ended=!0,s._seek=s._start||0,s._rateSeek=0,o._clearTimer(s._id),o._cleanBuffer(s._node),t._autoSuspend()),!o._webAudio&&!_&&o.stop(s._id,!0),o},_clearTimer:function(s){var o=this;if(o._endTimers[s]){if(typeof o._endTimers[s]!="function")clearTimeout(o._endTimers[s]);else{var d=o._soundById(s);d&&d._node&&d._node.removeEventListener("ended",o._endTimers[s],!1)}delete o._endTimers[s]}return o},_soundById:function(s){for(var o=this,d=0;d<o._sounds.length;d++)if(s===o._sounds[d]._id)return o._sounds[d];return null},_inactiveSound:function(){var s=this;s._drain();for(var o=0;o<s._sounds.length;o++)if(s._sounds[o]._ended)return s._sounds[o].reset();return new i(s)},_drain:function(){var s=this,o=s._pool,d=0,_=0;if(!(s._sounds.length<o)){for(_=0;_<s._sounds.length;_++)s._sounds[_]._ended&&d++;for(_=s._sounds.length-1;_>=0;_--){if(d<=o)return;s._sounds[_]._ended&&(s._webAudio&&s._sounds[_]._node&&s._sounds[_]._node.disconnect(0),s._sounds.splice(_,1),d--)}}},_getSoundIds:function(s){var o=this;if(typeof s>"u"){for(var d=[],_=0;_<o._sounds.length;_++)d.push(o._sounds[_]._id);return d}else return[s]},_refreshBuffer:function(s){var o=this;return s._node.bufferSource=t.ctx.createBufferSource(),s._node.bufferSource.buffer=a[o._src],s._panner?s._node.bufferSource.connect(s._panner):s._node.bufferSource.connect(s._node),s._node.bufferSource.loop=s._loop,s._loop&&(s._node.bufferSource.loopStart=s._start||0,s._node.bufferSource.loopEnd=s._stop||0),s._node.bufferSource.playbackRate.setValueAtTime(s._rate,t.ctx.currentTime),o},_cleanBuffer:function(s){var o=this,d=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!s.bufferSource)return o;if(t._scratchBuffer&&s.bufferSource&&(s.bufferSource.onended=null,s.bufferSource.disconnect(0),d))try{s.bufferSource.buffer=t._scratchBuffer}catch{}return s.bufferSource=null,o},_clearSound:function(s){var o=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);o||(s.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(s){this._parent=s,this.init()};i.prototype={init:function(){var s=this,o=s._parent;return s._muted=o._muted,s._loop=o._loop,s._volume=o._volume,s._rate=o._rate,s._seek=0,s._paused=!0,s._ended=!0,s._sprite="__default",s._id=++t._counter,o._sounds.push(s),s.create(),s},create:function(){var s=this,o=s._parent,d=t._muted||s._muted||s._parent._muted?0:s._volume;return o._webAudio?(s._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),s._node.gain.setValueAtTime(d,t.ctx.currentTime),s._node.paused=!0,s._node.connect(t.masterGain)):t.noAudio||(s._node=t._obtainHtml5Audio(),s._errorFn=s._errorListener.bind(s),s._node.addEventListener("error",s._errorFn,!1),s._loadFn=s._loadListener.bind(s),s._node.addEventListener(t._canPlayEvent,s._loadFn,!1),s._endFn=s._endListener.bind(s),s._node.addEventListener("ended",s._endFn,!1),s._node.src=o._src,s._node.preload=o._preload===!0?"auto":o._preload,s._node.volume=d*t.volume(),s._node.load()),s},reset:function(){var s=this,o=s._parent;return s._muted=o._muted,s._loop=o._loop,s._volume=o._volume,s._rate=o._rate,s._seek=0,s._rateSeek=0,s._paused=!0,s._ended=!0,s._sprite="__default",s._id=++t._counter,s},_errorListener:function(){var s=this;s._parent._emit("loaderror",s._id,s._node.error?s._node.error.code:0),s._node.removeEventListener("error",s._errorFn,!1)},_loadListener:function(){var s=this,o=s._parent;o._duration=Math.ceil(s._node.duration*10)/10,Object.keys(o._sprite).length===0&&(o._sprite={__default:[0,o._duration*1e3]}),o._state!=="loaded"&&(o._state="loaded",o._emit("load"),o._loadQueue()),s._node.removeEventListener(t._canPlayEvent,s._loadFn,!1)},_endListener:function(){var s=this,o=s._parent;o._duration===1/0&&(o._duration=Math.ceil(s._node.duration*10)/10,o._sprite.__default[1]===1/0&&(o._sprite.__default[1]=o._duration*1e3),o._ended(s)),s._node.removeEventListener("ended",s._endFn,!1)}};var a={},c=function(s){var o=s._src;if(a[o]){s._duration=a[o].duration,u(s);return}if(/^data:[^;]+;base64,/.test(o)){for(var d=atob(o.split(",")[1]),_=new Uint8Array(d.length),g=0;g<d.length;++g)_[g]=d.charCodeAt(g);f(_.buffer,s)}else{var p=new XMLHttpRequest;p.open(s._xhr.method,o,!0),p.withCredentials=s._xhr.withCredentials,p.responseType="arraybuffer",s._xhr.headers&&Object.keys(s._xhr.headers).forEach(function(h){p.setRequestHeader(h,s._xhr.headers[h])}),p.onload=function(){var h=(p.status+"")[0];if(h!=="0"&&h!=="2"&&h!=="3"){s._emit("loaderror",null,"Failed loading audio file with status: "+p.status+".");return}f(p.response,s)},p.onerror=function(){s._webAudio&&(s._html5=!0,s._webAudio=!1,s._sounds=[],delete a[o],s.load())},l(p)}},l=function(s){try{s.send()}catch{s.onerror()}},f=function(s,o){var d=function(){o._emit("loaderror",null,"Decoding audio data failed.")},_=function(g){g&&o._sounds.length>0?(a[o._src]=g,u(o,g)):d()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(s).then(_).catch(d):t.ctx.decodeAudioData(s,_,d)},u=function(s,o){o&&!s._duration&&(s._duration=o.duration),Object.keys(s._sprite).length===0&&(s._sprite={__default:[0,s._duration*1e3]}),s._state!=="loaded"&&(s._state="loaded",s._emit("load"),s._loadQueue())},m=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var s=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),o=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=o?parseInt(o[1],10):null;if(s&&d&&d<9){var _=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!_&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};r.Howler=t,r.Howl=n,typeof ri<"u"?(ri.HowlerGlobal=e,ri.Howler=t,ri.Howl=n,ri.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var i=n._howls.length-1;i>=0;i--)n._howls[i].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,i){var a=this;if(!a.ctx||!a.ctx.listener)return a;if(n=typeof n!="number"?a._pos[1]:n,i=typeof i!="number"?a._pos[2]:i,typeof t=="number")a._pos=[t,n,i],typeof a.ctx.listener.positionX<"u"?(a.ctx.listener.positionX.setTargetAtTime(a._pos[0],Howler.ctx.currentTime,.1),a.ctx.listener.positionY.setTargetAtTime(a._pos[1],Howler.ctx.currentTime,.1),a.ctx.listener.positionZ.setTargetAtTime(a._pos[2],Howler.ctx.currentTime,.1)):a.ctx.listener.setPosition(a._pos[0],a._pos[1],a._pos[2]);else return a._pos;return a},HowlerGlobal.prototype.orientation=function(t,n,i,a,c,l){var f=this;if(!f.ctx||!f.ctx.listener)return f;var u=f._orientation;if(n=typeof n!="number"?u[1]:n,i=typeof i!="number"?u[2]:i,a=typeof a!="number"?u[3]:a,c=typeof c!="number"?u[4]:c,l=typeof l!="number"?u[5]:l,typeof t=="number")f._orientation=[t,n,i,a,c,l],typeof f.ctx.listener.forwardX<"u"?(f.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),f.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),f.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),f.ctx.listener.upX.setTargetAtTime(a,Howler.ctx.currentTime,.1),f.ctx.listener.upY.setTargetAtTime(c,Howler.ctx.currentTime,.1),f.ctx.listener.upZ.setTargetAtTime(l,Howler.ctx.currentTime,.1)):f.ctx.listener.setOrientation(t,n,i,a,c,l);else return u;return f},Howl.prototype.init=function(t){return function(n){var i=this;return i._orientation=n.orientation||[1,0,0],i._stereo=n.stereo||null,i._pos=n.pos||null,i._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},i._onstereo=n.onstereo?[{fn:n.onstereo}]:[],i._onpos=n.onpos?[{fn:n.onpos}]:[],i._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(t,n)}}),i;var a=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")i._stereo=t,i._pos=[t,0,0];else return i._stereo;for(var c=i._getSoundIds(n),l=0;l<c.length;l++){var f=i._soundById(c[l]);if(f)if(typeof t=="number")f._stereo=t,f._pos=[t,0,0],f._node&&(f._pannerAttr.panningModel="equalpower",(!f._panner||!f._panner.pan)&&e(f,a),a==="spatial"?typeof f._panner.positionX<"u"?(f._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),f._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),f._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):f._panner.setPosition(t,0,0):f._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),i._emit("stereo",f._id);else return f._stereo}return i},Howl.prototype.pos=function(t,n,i,a){var c=this;if(!c._webAudio)return c;if(c._state!=="loaded")return c._queue.push({event:"pos",action:function(){c.pos(t,n,i,a)}}),c;if(n=typeof n!="number"?0:n,i=typeof i!="number"?-.5:i,typeof a>"u")if(typeof t=="number")c._pos=[t,n,i];else return c._pos;for(var l=c._getSoundIds(a),f=0;f<l.length;f++){var u=c._soundById(l[f]);if(u)if(typeof t=="number")u._pos=[t,n,i],u._node&&((!u._panner||u._panner.pan)&&e(u,"spatial"),typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):u._panner.setPosition(t,n,i)),c._emit("pos",u._id);else return u._pos}return c},Howl.prototype.orientation=function(t,n,i,a){var c=this;if(!c._webAudio)return c;if(c._state!=="loaded")return c._queue.push({event:"orientation",action:function(){c.orientation(t,n,i,a)}}),c;if(n=typeof n!="number"?c._orientation[1]:n,i=typeof i!="number"?c._orientation[2]:i,typeof a>"u")if(typeof t=="number")c._orientation=[t,n,i];else return c._orientation;for(var l=c._getSoundIds(a),f=0;f<l.length;f++){var u=c._soundById(l[f]);if(u)if(typeof t=="number")u._orientation=[t,n,i],u._node&&(u._panner||(u._pos||(u._pos=c._pos||[0,0,-.5]),e(u,"spatial")),typeof u._panner.orientationX<"u"?(u._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):u._panner.setOrientation(t,n,i)),c._emit("orientation",u._id);else return u._orientation}return c},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,i,a,c;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")i=n[0],typeof a>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),t._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:t._panningModel});else return c=t._soundById(parseInt(n[0],10)),c?c._pannerAttr:t._pannerAttr;else n.length===2&&(i=n[0],a=parseInt(n[1],10));for(var l=t._getSoundIds(a),f=0;f<l.length;f++)if(c=t._soundById(l[f]),c){var u=c._pannerAttr;u={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:u.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:u.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:u.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:u.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:u.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:u.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:u.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:u.panningModel};var m=c._panner;m||(c._pos||(c._pos=t._pos||[0,0,-.5]),e(c,"spatial"),m=c._panner),m.coneInnerAngle=u.coneInnerAngle,m.coneOuterAngle=u.coneOuterAngle,m.coneOuterGain=u.coneOuterGain,m.distanceModel=u.distanceModel,m.maxDistance=u.maxDistance,m.refDistance=u.refDistance,m.rolloffFactor=u.rolloffFactor,m.panningModel=u.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,i=n._parent;n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,t.call(this),n._stereo?i.stereo(n._stereo):n._pos&&i.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,i=n._parent;return n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,n._stereo?i.stereo(n._stereo):n._pos?i.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,i._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(Mo);window.addEventListener("load",()=>{Yh()});function Yh(){let r,e,t,n,i=0;var a=new Mo.Howl({src:["/audio/sorry.mp3"]});c(),f();function c(){n=new Bh,n.start(),r=new Rt(45,window.innerWidth/window.innerHeight),r.position.x=0,r.position.y=0,r.position.z=25,i=r.position.z,e=new Ch;const u=new Fh(16777215);e.add(u);const m=function(s){s.lengthComputable};new Hh().setPath("/assets/corridor_elevator/").load("corridor_elevator_textured.mtl",function(s){s.preload(),new qh().setMaterials(s).setPath("/assets/corridor_elevator/").load("corridor_elevator_textured.obj",function(o){o.rotateX(0*Math.PI/180),e.add(o)},m)}),t=new _o({antialias:!0}),t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(t.domElement),window.addEventListener("resize",l)}function l(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}function f(){requestAnimationFrame(f),t.render(e,r),r.position.z+=(i-r.position.z)*.05}document.addEventListener("keydown",u=>{u.code==="KeyS"&&a.play()}),document.addEventListener("keyup",u=>{u.code==="KeyS"&&(i-=.1)})}
