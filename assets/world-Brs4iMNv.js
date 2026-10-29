/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const In={ROTATE:0,DOLLY:1,PAN:2},Dn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gl=0,ra=1,_l=2,Ac=1,wc=2,vn=3,On=0,ke=1,en=2,Un=0,Ti=1,oa=2,aa=3,ca=4,vl=5,Yn=100,xl=101,Ml=102,Sl=103,yl=104,El=200,Tl=201,bl=202,Al=203,Wr=204,Xr=205,wl=206,Rl=207,Cl=208,Pl=209,Ll=210,Dl=211,Il=212,Ul=213,Nl=214,Yr=0,qr=1,Zr=2,Ri=3,jr=4,Kr=5,$r=6,Jr=7,Rc=0,Fl=1,Ol=2,Nn=0,zl=1,Bl=2,Hl=3,Cc=4,kl=5,Vl=6,Gl=7,Pc=300,Ci=301,Pi=302,Qr=303,to=304,tr=306,Xs=1e3,Zn=1001,eo=1002,Xe=1003,Wl=1004,as=1005,cn=1006,ar=1007,jn=1008,Sn=1009,Lc=1010,Dc=1011,ts=1012,Uo=1013,Kn=1014,ln=1015,rs=1016,No=1017,Fo=1018,Li=1020,Ic=35902,Uc=1021,Nc=1022,nn=1023,Fc=1024,Oc=1025,bi=1026,Di=1027,Oo=1028,zo=1029,zc=1030,Bo=1031,Ho=1033,Bs=33776,Hs=33777,ks=33778,Vs=33779,no=35840,io=35841,so=35842,ro=35843,oo=36196,ao=37492,co=37496,lo=37808,ho=37809,uo=37810,fo=37811,po=37812,mo=37813,go=37814,_o=37815,vo=37816,xo=37817,Mo=37818,So=37819,yo=37820,Eo=37821,Gs=36492,To=36494,bo=36495,Bc=36283,Ao=36284,wo=36285,Ro=36286,Xl=3200,Yl=3201,Hc=0,ql=1,Ln="",He="srgb",Ni="srgb-linear",er="linear",he="srgb",ri=7680,la=519,Zl=512,jl=513,Kl=514,kc=515,$l=516,Jl=517,Ql=518,th=519,ha=35044,ua="300 es",xn=2e3,Ys=2001;class ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fa=1234567;const Ai=Math.PI/180,es=180/Math.PI;function ei(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function ko(i,t){return(i%t+t)%t}function eh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function nh(i,t,e){return i!==t?(e-i)/(t-i):0}function Ki(i,t,e){return(1-e)*i+e*t}function ih(i,t,e,n){return Ki(i,t,1-Math.exp(-e*n))}function sh(i,t=1){return t-Math.abs(ko(i,t*2)-t)}function rh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function oh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ah(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ch(i,t){return i+Math.random()*(t-i)}function lh(i){return i*(.5-Math.random())}function hh(i){i!==void 0&&(fa=i);let t=fa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uh(i){return i*Ai}function fh(i){return i*es}function dh(i){return(i&i-1)===0&&i!==0}function ph(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function mh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gh(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),d=o((t-n)/2),m=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*f,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Si={DEG2RAD:Ai,RAD2DEG:es,generateUUID:ei,clamp:Ce,euclideanModulo:ko,mapLinear:eh,inverseLerp:nh,lerp:Ki,damp:ih,pingpong:sh,smoothstep:rh,smootherstep:oh,randInt:ah,randFloat:ch,randFloatSpread:lh,seededRandom:hh,degToRad:uh,radToDeg:fh,isPowerOfTwo:dh,ceilPowerOfTwo:ph,floorPowerOfTwo:mh,setQuaternionFromProperEuler:gh,normalize:Fe,denormalize:Mi};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,s,r,o,a,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],m=n[5],g=n[8],v=s[0],p=s[3],h=s[6],S=s[1],x=s[4],_=s[7],D=s[2],A=s[5],R=s[8];return r[0]=o*v+a*S+c*D,r[3]=o*p+a*x+c*A,r[6]=o*h+a*_+c*R,r[1]=l*v+u*S+f*D,r[4]=l*p+u*x+f*A,r[7]=l*h+u*_+f*R,r[2]=d*v+m*S+g*D,r[5]=d*p+m*x+g*A,r[8]=d*h+m*_+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,d=a*c-u*r,m=l*r-o*c,g=e*f+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=f*v,t[1]=(s*l-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=m*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(cr.makeScale(t,e)),this}rotate(t){return this.premultiply(cr.makeRotation(-t)),this}translate(t,e){return this.premultiply(cr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cr=new Kt;function Vc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _h(){const i=qs("canvas");return i.style.display="block",i}const da={};function Zi(i){i in da||(da[i]=!0,console.warn(i))}function vh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function xh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Mh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const se={enabled:!0,workingColorSpace:Ni,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(i.r=Mn(i.r),i.g=Mn(i.g),i.b=Mn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(i.r=wi(i.r),i.g=wi(i.g),i.b=wi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ln?er:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const pa=[.64,.33,.3,.6,.15,.06],ma=[.2126,.7152,.0722],ga=[.3127,.329],_a=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),va=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se.define({[Ni]:{primaries:pa,whitePoint:ga,transfer:er,toXYZ:_a,fromXYZ:va,luminanceCoefficients:ma,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:pa,whitePoint:ga,transfer:he,toXYZ:_a,fromXYZ:va,luminanceCoefficients:ma,outputColorSpaceConfig:{drawingBufferColorSpace:He}}});let oi;class Sh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{oi===void 0&&(oi=qs("canvas")),oi.width=t.width,oi.height=t.height;const n=oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mn(e[n]/255)*255):e[n]=Mn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yh=0;class Gc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=ei(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(lr(s[o].image)):r.push(lr(s[o]))}else r=lr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function lr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eh=0;class Ne extends ti{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=Zn,s=Zn,r=cn,o=jn,a=nn,c=Sn,l=Ne.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=ei(),this.name="",this.source=new Gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xs:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xs:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Pc;Ne.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,s=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],f=c[8],d=c[1],m=c[5],g=c[9],v=c[2],p=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,_=(m+1)/2,D=(h+1)/2,A=(u+d)/4,R=(f+v)/4,C=(g+p)/4;return x>_&&x>D?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=R/n):_>D?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=C/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=R/r,s=C/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-v)/S,this.z=(d-u)/S,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Th extends ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ne(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends Th{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wc extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bh extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3];const d=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(f!==v||c!==d||l!==m||u!==g){let p=1-a;const h=c*d+l*m+u*g+f*v,S=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const D=Math.sqrt(x),A=Math.atan2(D,h*S);p=Math.sin(p*A)/D,a=Math.sin(a*A)/D}const _=a*S;if(c=c*p+d*_,l=l*p+m*_,u=u*p+g*_,f=f*p+v*_,p===1-a){const D=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=D,l*=D,u*=D,f*=D}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+u*f+c*m-l*d,t[e+1]=c*g+u*d+l*f-a*m,t[e+2]=l*g+u*m+a*d-c*f,t[e+3]=u*g-a*f-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),d=c(n/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*f+l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f+d*m*g;break;case"YZX":this._x=d*u*f+l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f-d*m*g;break;case"XZY":this._x=d*u*f-l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],d=n+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return hr.copy(this).projectOnVector(t),this.sub(hr)}reflect(t){return this.sub(hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hr=new P,xa=new Jn;class ni{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,$e):$e.fromBufferAttribute(r,o),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cs.copy(n.boundingBox)),cs.applyMatrix4(t.matrixWorld),this.union(cs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ki),ls.subVectors(this.max,ki),ai.subVectors(t.a,ki),ci.subVectors(t.b,ki),li.subVectors(t.c,ki),Tn.subVectors(ci,ai),bn.subVectors(li,ci),Bn.subVectors(ai,li);let e=[0,-Tn.z,Tn.y,0,-bn.z,bn.y,0,-Bn.z,Bn.y,Tn.z,0,-Tn.x,bn.z,0,-bn.x,Bn.z,0,-Bn.x,-Tn.y,Tn.x,0,-bn.y,bn.x,0,-Bn.y,Bn.x,0];return!ur(e,ai,ci,li,ls)||(e=[1,0,0,0,1,0,0,0,1],!ur(e,ai,ci,li,ls))?!1:(hs.crossVectors(Tn,bn),e=[hs.x,hs.y,hs.z],ur(e,ai,ci,li,ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const dn=[new P,new P,new P,new P,new P,new P,new P,new P],$e=new P,cs=new ni,ai=new P,ci=new P,li=new P,Tn=new P,bn=new P,Bn=new P,ki=new P,ls=new P,hs=new P,Hn=new P;function ur(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hn.fromArray(i,r);const a=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),c=t.dot(Hn),l=e.dot(Hn),u=n.dot(Hn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ah=new ni,Vi=new P,fr=new P;class Fi{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ah.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vi.subVectors(t,this.center);const e=Vi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Vi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vi.copy(t.center).add(fr)),this.expandByPoint(Vi.copy(t.center).sub(fr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new P,dr=new P,us=new P,An=new P,pr=new P,fs=new P,mr=new P;class nr{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){dr.copy(t).add(e).multiplyScalar(.5),us.copy(e).sub(t).normalize(),An.copy(this.origin).sub(dr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(us),a=An.dot(this.direction),c=-An.dot(us),l=An.lengthSq(),u=Math.abs(1-o*o);let f,d,m,g;if(u>0)if(f=o*c-a,d=o*a-c,g=r*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,m=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(dr).addScaledVector(us,d),m}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,s,r){pr.subVectors(e,t),fs.subVectors(n,t),mr.crossVectors(pr,fs);let o=this.direction.dot(mr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;An.subVectors(this.origin,t);const c=a*this.direction.dot(fs.crossVectors(An,fs));if(c<0)return null;const l=a*this.direction.dot(pr.cross(An));if(l<0||c+l>o)return null;const u=-a*An.dot(mr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,s,r,o,a,c,l,u,f,d,m,g,v,p){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,f,d,m,g,v,p)}set(t,e,n,s,r,o,a,c,l,u,f,d,m,g,v,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=g,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/hi.setFromMatrixColumn(t,0).length(),r=1/hi.setFromMatrixColumn(t,1).length(),o=1/hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=o*u,m=o*f,g=a*u,v=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=m+g*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,m=c*f,g=l*u,v=l*f;e[0]=d+v*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,m=c*f,g=l*u,v=l*f;e[0]=d-v*a,e[4]=-o*f,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,m=o*f,g=a*u,v=a*f;e[0]=c*u,e[4]=g*l-m,e[8]=d*l+v,e[1]=c*f,e[5]=v*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,m=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=v-d*f,e[8]=g*f+m,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*f+g,e[10]=d-v*f}else if(t.order==="XZY"){const d=o*c,m=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=d*f+v,e[5]=o*u,e[9]=m*f-g,e[2]=g*f-m,e[6]=a*u,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wh,t,Rh)}lookAt(t,e,n){const s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),wn.crossVectors(n,Ge),wn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),wn.crossVectors(n,Ge)),wn.normalize(),ds.crossVectors(Ge,wn),s[0]=wn.x,s[4]=ds.x,s[8]=Ge.x,s[1]=wn.y,s[5]=ds.y,s[9]=Ge.y,s[2]=wn.z,s[6]=ds.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],m=n[13],g=n[2],v=n[6],p=n[10],h=n[14],S=n[3],x=n[7],_=n[11],D=n[15],A=s[0],R=s[4],C=s[8],E=s[12],y=s[1],L=s[5],k=s[9],B=s[13],H=s[2],K=s[6],G=s[10],nt=s[14],V=s[3],mt=s[7],Et=s[11],Rt=s[15];return r[0]=o*A+a*y+c*H+l*V,r[4]=o*R+a*L+c*K+l*mt,r[8]=o*C+a*k+c*G+l*Et,r[12]=o*E+a*B+c*nt+l*Rt,r[1]=u*A+f*y+d*H+m*V,r[5]=u*R+f*L+d*K+m*mt,r[9]=u*C+f*k+d*G+m*Et,r[13]=u*E+f*B+d*nt+m*Rt,r[2]=g*A+v*y+p*H+h*V,r[6]=g*R+v*L+p*K+h*mt,r[10]=g*C+v*k+p*G+h*Et,r[14]=g*E+v*B+p*nt+h*Rt,r[3]=S*A+x*y+_*H+D*V,r[7]=S*R+x*L+_*K+D*mt,r[11]=S*C+x*k+_*G+D*Et,r[15]=S*E+x*B+_*nt+D*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],d=t[10],m=t[14],g=t[3],v=t[7],p=t[11],h=t[15];return g*(+r*c*f-s*l*f-r*a*d+n*l*d+s*a*m-n*c*m)+v*(+e*c*m-e*l*d+r*o*d-s*o*m+s*l*u-r*c*u)+p*(+e*l*f-e*a*m-r*o*f+n*o*m+r*a*u-n*l*u)+h*(-s*a*u-e*c*f+e*a*d+s*o*f-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],d=t[10],m=t[11],g=t[12],v=t[13],p=t[14],h=t[15],S=f*p*l-v*d*l+v*c*m-a*p*m-f*c*h+a*d*h,x=g*d*l-u*p*l-g*c*m+o*p*m+u*c*h-o*d*h,_=u*v*l-g*f*l+g*a*m-o*v*m-u*a*h+o*f*h,D=g*f*c-u*v*c-g*a*d+o*v*d+u*a*p-o*f*p,A=e*S+n*x+s*_+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=S*R,t[1]=(v*d*r-f*p*r-v*s*m+n*p*m+f*s*h-n*d*h)*R,t[2]=(a*p*r-v*c*r+v*s*l-n*p*l-a*s*h+n*c*h)*R,t[3]=(f*c*r-a*d*r-f*s*l+n*d*l+a*s*m-n*c*m)*R,t[4]=x*R,t[5]=(u*p*r-g*d*r+g*s*m-e*p*m-u*s*h+e*d*h)*R,t[6]=(g*c*r-o*p*r-g*s*l+e*p*l+o*s*h-e*c*h)*R,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*m+e*c*m)*R,t[8]=_*R,t[9]=(g*f*r-u*v*r-g*n*m+e*v*m+u*n*h-e*f*h)*R,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*h+e*a*h)*R,t[11]=(u*a*r-o*f*r-u*n*l+e*f*l+o*n*m-e*a*m)*R,t[12]=D*R,t[13]=(u*v*s-g*f*s+g*n*d-e*v*d-u*n*p+e*f*p)*R,t[14]=(g*a*s-o*v*s-g*n*c+e*v*c+o*n*p-e*a*p)*R,t[15]=(o*f*s-u*a*s+u*n*c-e*f*c-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,d=r*l,m=r*u,g=r*f,v=o*u,p=o*f,h=a*f,S=c*l,x=c*u,_=c*f,D=n.x,A=n.y,R=n.z;return s[0]=(1-(v+h))*D,s[1]=(m+_)*D,s[2]=(g-x)*D,s[3]=0,s[4]=(m-_)*A,s[5]=(1-(d+h))*A,s[6]=(p+S)*A,s[7]=0,s[8]=(g+x)*R,s[9]=(p-S)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=hi.set(s[0],s[1],s[2]).length();const o=hi.set(s[4],s[5],s[6]).length(),a=hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Je.copy(this);const l=1/r,u=1/o,f=1/a;return Je.elements[0]*=l,Je.elements[1]*=l,Je.elements[2]*=l,Je.elements[4]*=u,Je.elements[5]*=u,Je.elements[6]*=u,Je.elements[8]*=f,Je.elements[9]*=f,Je.elements[10]*=f,e.setFromRotationMatrix(Je),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=xn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let m,g;if(a===xn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ys)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=xn){const c=this.elements,l=1/(e-t),u=1/(n-s),f=1/(o-r),d=(e+t)*l,m=(n+s)*u;let g,v;if(a===xn)g=(o+r)*f,v=-2*f;else if(a===Ys)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hi=new P,Je=new fe,wh=new P(0,0,0),Rh=new P(1,1,1),wn=new P,ds=new P,Ge=new P,Ma=new fe,Sa=new Jn;class hn{constructor(t=0,e=0,n=0,s=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ce(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ma.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ma,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sa.setFromEuler(this),this.setFromQuaternion(Sa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Vo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ch=0;const ya=new P,ui=new Jn,mn=new fe,ps=new P,Gi=new P,Ph=new P,Lh=new Jn,Ea=new P(1,0,0),Ta=new P(0,1,0),ba=new P(0,0,1),Aa={type:"added"},Dh={type:"removed"},fi={type:"childadded",child:null},gr={type:"childremoved",child:null};class Le extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new P,e=new hn,n=new Jn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Kt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.multiply(ui),this}rotateOnWorldAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.premultiply(ui),this}rotateX(t){return this.rotateOnAxis(Ea,t)}rotateY(t){return this.rotateOnAxis(Ta,t)}rotateZ(t){return this.rotateOnAxis(ba,t)}translateOnAxis(t,e){return ya.copy(t).applyQuaternion(this.quaternion),this.position.add(ya.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ea,t)}translateY(t){return this.translateOnAxis(Ta,t)}translateZ(t){return this.translateOnAxis(ba,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ps.copy(t):ps.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Gi,ps,this.up):mn.lookAt(ps,Gi,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),ui.setFromRotationMatrix(mn),this.quaternion.premultiply(ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Aa),fi.child=t,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dh),gr.child=t,this.dispatchEvent(gr),gr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Aa),fi.child=t,this.dispatchEvent(fi),fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,t,Ph),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Lh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Le.DEFAULT_UP=new P(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qe=new P,gn=new P,_r=new P,_n=new P,di=new P,pi=new P,wa=new P,vr=new P,xr=new P,Mr=new P,Sr=new Me,yr=new Me,Er=new Me;class Ze{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qe.subVectors(t,e),s.cross(Qe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qe.subVectors(s,e),gn.subVectors(n,e),_r.subVectors(t,e);const o=Qe.dot(Qe),a=Qe.dot(gn),c=Qe.dot(_r),l=gn.dot(gn),u=gn.dot(_r),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,m=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,_n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_n.x),c.addScaledVector(o,_n.y),c.addScaledVector(a,_n.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Sr.setScalar(0),yr.setScalar(0),Er.setScalar(0),Sr.fromBufferAttribute(t,e),yr.fromBufferAttribute(t,n),Er.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Sr,r.x),o.addScaledVector(yr,r.y),o.addScaledVector(Er,r.z),o}static isFrontFacing(t,e,n,s){return Qe.subVectors(n,e),gn.subVectors(t,e),Qe.cross(gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Qe.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;di.subVectors(s,n),pi.subVectors(r,n),vr.subVectors(t,n);const c=di.dot(vr),l=pi.dot(vr);if(c<=0&&l<=0)return e.copy(n);xr.subVectors(t,s);const u=di.dot(xr),f=pi.dot(xr);if(u>=0&&f<=u)return e.copy(s);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(di,o);Mr.subVectors(t,r);const m=di.dot(Mr),g=pi.dot(Mr);if(g>=0&&m<=g)return e.copy(r);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(pi,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return wa.subVectors(r,s),a=(f-u)/(f-u+(m-g)),e.copy(s).addScaledVector(wa,a);const h=1/(p+v+d);return o=v*h,a=d*h,e.copy(n).addScaledVector(di,o).addScaledVector(pi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},ms={h:0,s:0,l:0};function Tr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=ko(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Tr(o,r,t+1/3),this.g=Tr(o,r,t),this.b=Tr(o,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const n=Xc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return se.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Ce(Ue.r*255,0,255))*65536+Math.round(Ce(Ue.g*255,0,255))*256+Math.round(Ce(Ue.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,s=Ue.g,r=Ue.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=He){se.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,s=Ue.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(ms);const n=Ki(Rn.h,ms.h,e),s=Ki(Rn.s,ms.s,e),r=Ki(Rn.l,ms.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new ee;ee.NAMES=Xc;let Ih=0;class ii extends ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=ei(),this.name="",this.blending=Ti,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wr,this.blendDst=Xr,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=la,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wr&&(n.blendSrc=this.blendSrc),this.blendDst!==Xr&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==la&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zs extends ii{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new P,gs=new at;class sn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ha,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gs.fromBufferAttribute(this,e),gs.applyMatrix3(t),this.setXY(e,gs.x,gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ha&&(t.usage=this.usage),t}}class Yc extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qc extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Uh=0;const qe=new fe,br=new Le,mi=new P,We=new ni,Wi=new ni,Re=new P;class we extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vc(t)?qc:Yc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return br.lookAt(t),br.updateMatrix(),this.applyMatrix4(br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Wi.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(We.min,Wi.min),We.expandByPoint(Re),Re.addVectors(We.max,Wi.max),We.expandByPoint(Re)):(We.expandByPoint(Wi.min),We.expandByPoint(Wi.max))}We.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Re.fromBufferAttribute(a,l),c&&(mi.fromBufferAttribute(t,l),Re.add(mi)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new P,c[C]=new P;const l=new P,u=new P,f=new P,d=new at,m=new at,g=new at,v=new P,p=new P;function h(C,E,y){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,y),d.fromBufferAttribute(r,C),m.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),u.sub(l),f.sub(l),m.sub(d),g.sub(d);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(L),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(L),a[C].add(v),a[E].add(v),a[y].add(v),c[C].add(p),c[E].add(p),c[y].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let C=0,E=S.length;C<E;++C){const y=S[C],L=y.start,k=y.count;for(let B=L,H=L+k;B<H;B+=3)h(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const x=new P,_=new P,D=new P,A=new P;function R(C){D.fromBufferAttribute(s,C),A.copy(D);const E=a[C];x.copy(E),x.sub(D.multiplyScalar(D.dot(E))).normalize(),_.crossVectors(A,E);const L=_.dot(c[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,L)}for(let C=0,E=S.length;C<E;++C){const y=S[C],L=y.start,k=y.count;for(let B=L,H=L+k;B<H;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,u=new P,f=new P;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*u;for(let h=0;h<u;h++)d[g++]=l[m++]}return new sn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];u.push(m.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ra=new fe,kn=new nr,_s=new Fi,Ca=new P,vs=new P,xs=new P,Ms=new P,Ar=new P,Ss=new P,Pa=new P,ys=new P;class Pe extends Le{constructor(t=new we,e=new Zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ss.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(Ar.fromBufferAttribute(f,t),o?Ss.addScaledVector(Ar,u):Ss.addScaledVector(Ar.sub(e),u))}e.add(Ss)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(r),kn.copy(t.ray).recast(t.near),!(_s.containsPoint(kn.origin)===!1&&(kn.intersectSphere(_s,Ca)===null||kn.origin.distanceToSquared(Ca)>(t.far-t.near)**2))&&(Ra.copy(r).invert(),kn.copy(t.ray).applyMatrix4(Ra),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,kn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],h=o[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let _=S,D=x;_<D;_+=3){const A=a.getX(_),R=a.getX(_+1),C=a.getX(_+2);s=Es(this,h,t,n,l,u,f,A,R,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const S=a.getX(p),x=a.getX(p+1),_=a.getX(p+2);s=Es(this,o,t,n,l,u,f,S,x,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],h=o[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let _=S,D=x;_<D;_+=3){const A=_,R=_+1,C=_+2;s=Es(this,h,t,n,l,u,f,A,R,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const S=p,x=p+1,_=p+2;s=Es(this,o,t,n,l,u,f,S,x,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Nh(i,t,e,n,s,r,o,a){let c;if(t.side===ke?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===On,a),c===null)return null;ys.copy(a),ys.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ys);return l<e.near||l>e.far?null:{distance:l,point:ys.clone(),object:i}}function Es(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,vs),i.getVertexPosition(c,xs),i.getVertexPosition(l,Ms);const u=Nh(i,t,e,n,vs,xs,Ms,Pa);if(u){const f=new P;Ze.getBarycoord(Pa,vs,xs,Ms,f),s&&(u.uv=Ze.getInterpolatedAttribute(s,a,c,l,f,new at)),r&&(u.uv1=Ze.getInterpolatedAttribute(r,a,c,l,f,new at)),o&&(u.normal=Ze.getInterpolatedAttribute(o,a,c,l,f,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new P,materialIndex:0};Ze.getNormal(vs,xs,Ms,d.normal),u.face=d,u.barycoord=f}return u}class Oi extends we{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(f,2));function g(v,p,h,S,x,_,D,A,R,C,E){const y=_/R,L=D/C,k=_/2,B=D/2,H=A/2,K=R+1,G=C+1;let nt=0,V=0;const mt=new P;for(let Et=0;Et<G;Et++){const Rt=Et*L-B;for(let wt=0;wt<K;wt++){const Zt=wt*y-k;mt[v]=Zt*S,mt[p]=Rt*x,mt[h]=H,l.push(mt.x,mt.y,mt.z),mt[v]=0,mt[p]=0,mt[h]=A>0?1:-1,u.push(mt.x,mt.y,mt.z),f.push(wt/R),f.push(1-Et/C),nt+=1}}for(let Et=0;Et<C;Et++)for(let Rt=0;Rt<R;Rt++){const wt=d+Rt+K*Et,Zt=d+Rt+K*(Et+1),Z=d+(Rt+1)+K*(Et+1),lt=d+(Rt+1)+K*Et;c.push(wt,Zt,lt),c.push(Zt,Z,lt),V+=6}a.addGroup(m,V,E),m+=V,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ii(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=Ii(i[e]);for(const s in n)t[s]=n[s]}return t}function Fh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const Oh={clone:Ii,merge:Oe};var zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends ii{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zh,this.fragmentShader=Bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=Fh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class jc extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new P,La=new at,Da=new at;class tn extends jc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ai*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Ai*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,La,Da),e.subVectors(Da,La)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ai*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gi=-90,_i=1;class Hh extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(gi,_i,t,e);s.layers=this.layers,this.add(s);const r=new tn(gi,_i,t,e);r.layers=this.layers,this.add(r);const o=new tn(gi,_i,t,e);o.layers=this.layers,this.add(o);const a=new tn(gi,_i,t,e);a.layers=this.layers,this.add(a);const c=new tn(gi,_i,t,e);c.layers=this.layers,this.add(c);const l=new tn(gi,_i,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kc extends Ne{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ci,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kh extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Kc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oi(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Un});r.uniforms.tEquirect.value=e;const o=new Pe(s,r),a=e.minFilter;return e.minFilter===jn&&(e.minFilter=cn),new Hh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const wr=new P,Vh=new P,Gh=new Kt;class Pn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=wr.subVectors(n,e).cross(Vh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(wr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gh.getNormalMatrix(t),s=this.coplanarPoint(wr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new Fi,Ts=new P;class Go{constructor(t=new Pn,e=new Pn,n=new Pn,s=new Pn,r=new Pn,o=new Pn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],f=s[6],d=s[7],m=s[8],g=s[9],v=s[10],p=s[11],h=s[12],S=s[13],x=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,p-m,_-h).normalize(),n[1].setComponents(c+r,d+l,p+m,_+h).normalize(),n[2].setComponents(c+o,d+u,p+g,_+S).normalize(),n[3].setComponents(c-o,d-u,p-g,_-S).normalize(),n[4].setComponents(c-a,d-f,p-v,_-x).normalize(),e===xn)n[5].setComponents(c+a,d+f,p+v,_+x).normalize();else if(e===Ys)n[5].setComponents(a,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(t){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ts.x=s.normal.x>0?t.max.x:t.min.x,Ts.y=s.normal.y>0?t.max.y:t.min.y,Ts.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $c(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wh(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){const g=f[d],v=f[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){const v=f[m];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class os extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=t/a,d=e/c,m=[],g=[],v=[],p=[];for(let h=0;h<u;h++){const S=h*d-o;for(let x=0;x<l;x++){const _=x*f-r;g.push(_,-S,0),v.push(0,0,1),p.push(x/a),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let S=0;S<a;S++){const x=S+l*h,_=S+l*(h+1),D=S+1+l*(h+1),A=S+1+l*h;m.push(x,_,A),m.push(_,D,A)}this.setIndex(m),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.width,t.height,t.widthSegments,t.heightSegments)}}var Xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yh=`#ifdef USE_ALPHAHASH
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
#endif`,qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$h=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,su=`#ifdef USE_IRIDESCENCE
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
#endif`,ru=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pu=`#define PI 3.141592653589793
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
} // validated`,mu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,gu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Su="gl_FragColor = linearToOutputTexel( gl_FragColor );",yu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bu=`#ifdef USE_ENVMAP
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
#endif`,Au=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
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
#endif`,Ru=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Du=`#ifdef USE_GRADIENTMAP
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
}`,Iu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fu=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Ou=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,zu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vu=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
}`,Wu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ju=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ku=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$u=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tf=`#if defined( USE_POINTS_UV )
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
#endif`,ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,af=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pf=`#ifdef USE_NORMALMAP
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
#endif`,mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Af=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Df=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,If=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uf=`#ifdef USE_SKINNING
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
#endif`,Nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Of=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zf=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yf=`uniform sampler2D t2D;
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
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Jf=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,td=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,id=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rd=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,od=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ad=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,cd=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ld=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,hd=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ud=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,fd=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,pd=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,md=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,gd=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_d=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,vd=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,xd=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Md=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Sd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,yd=`uniform vec3 color;
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
}`,Ed=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Td=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,$t={alphahash_fragment:Xh,alphahash_pars_fragment:Yh,alphamap_fragment:qh,alphamap_pars_fragment:Zh,alphatest_fragment:jh,alphatest_pars_fragment:Kh,aomap_fragment:$h,aomap_pars_fragment:Jh,batching_pars_vertex:Qh,batching_vertex:tu,begin_vertex:eu,beginnormal_vertex:nu,bsdfs:iu,iridescence_fragment:su,bumpmap_pars_fragment:ru,clipping_planes_fragment:ou,clipping_planes_pars_fragment:au,clipping_planes_pars_vertex:cu,clipping_planes_vertex:lu,color_fragment:hu,color_pars_fragment:uu,color_pars_vertex:fu,color_vertex:du,common:pu,cube_uv_reflection_fragment:mu,defaultnormal_vertex:gu,displacementmap_pars_vertex:_u,displacementmap_vertex:vu,emissivemap_fragment:xu,emissivemap_pars_fragment:Mu,colorspace_fragment:Su,colorspace_pars_fragment:yu,envmap_fragment:Eu,envmap_common_pars_fragment:Tu,envmap_pars_fragment:bu,envmap_pars_vertex:Au,envmap_physical_pars_fragment:Ou,envmap_vertex:wu,fog_vertex:Ru,fog_pars_vertex:Cu,fog_fragment:Pu,fog_pars_fragment:Lu,gradientmap_pars_fragment:Du,lightmap_pars_fragment:Iu,lights_lambert_fragment:Uu,lights_lambert_pars_fragment:Nu,lights_pars_begin:Fu,lights_toon_fragment:zu,lights_toon_pars_fragment:Bu,lights_phong_fragment:Hu,lights_phong_pars_fragment:ku,lights_physical_fragment:Vu,lights_physical_pars_fragment:Gu,lights_fragment_begin:Wu,lights_fragment_maps:Xu,lights_fragment_end:Yu,logdepthbuf_fragment:qu,logdepthbuf_pars_fragment:Zu,logdepthbuf_pars_vertex:ju,logdepthbuf_vertex:Ku,map_fragment:$u,map_pars_fragment:Ju,map_particle_fragment:Qu,map_particle_pars_fragment:tf,metalnessmap_fragment:ef,metalnessmap_pars_fragment:nf,morphinstance_vertex:sf,morphcolor_vertex:rf,morphnormal_vertex:of,morphtarget_pars_vertex:af,morphtarget_vertex:cf,normal_fragment_begin:lf,normal_fragment_maps:hf,normal_pars_fragment:uf,normal_pars_vertex:ff,normal_vertex:df,normalmap_pars_fragment:pf,clearcoat_normal_fragment_begin:mf,clearcoat_normal_fragment_maps:gf,clearcoat_pars_fragment:_f,iridescence_pars_fragment:vf,opaque_fragment:xf,packing:Mf,premultiplied_alpha_fragment:Sf,project_vertex:yf,dithering_fragment:Ef,dithering_pars_fragment:Tf,roughnessmap_fragment:bf,roughnessmap_pars_fragment:Af,shadowmap_pars_fragment:wf,shadowmap_pars_vertex:Rf,shadowmap_vertex:Cf,shadowmask_pars_fragment:Pf,skinbase_vertex:Lf,skinning_pars_vertex:Df,skinning_vertex:If,skinnormal_vertex:Uf,specularmap_fragment:Nf,specularmap_pars_fragment:Ff,tonemapping_fragment:Of,tonemapping_pars_fragment:zf,transmission_fragment:Bf,transmission_pars_fragment:Hf,uv_pars_fragment:kf,uv_pars_vertex:Vf,uv_vertex:Gf,worldpos_vertex:Wf,background_vert:Xf,background_frag:Yf,backgroundCube_vert:qf,backgroundCube_frag:Zf,cube_vert:jf,cube_frag:Kf,depth_vert:$f,depth_frag:Jf,distanceRGBA_vert:Qf,distanceRGBA_frag:td,equirect_vert:ed,equirect_frag:nd,linedashed_vert:id,linedashed_frag:sd,meshbasic_vert:rd,meshbasic_frag:od,meshlambert_vert:ad,meshlambert_frag:cd,meshmatcap_vert:ld,meshmatcap_frag:hd,meshnormal_vert:ud,meshnormal_frag:fd,meshphong_vert:dd,meshphong_frag:pd,meshphysical_vert:md,meshphysical_frag:gd,meshtoon_vert:_d,meshtoon_frag:vd,points_vert:xd,points_frag:Md,shadow_vert:Sd,shadow_frag:yd,sprite_vert:Ed,sprite_frag:Td},vt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},an={basic:{uniforms:Oe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Oe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ee(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Oe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Oe([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Oe([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new ee(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Oe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Oe([vt.points,vt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Oe([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Oe([vt.common,vt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Oe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Oe([vt.sprite,vt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Oe([vt.common,vt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Oe([vt.lights,vt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};an.physical={uniforms:Oe([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const bs={r:0,b:0,g:0},Gn=new hn,bd=new fe;function Ad(i,t,e,n,s,r,o){const a=new ee(0);let c=r===!0?0:1,l,u,f=null,d=0,m=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function v(S){let x=!1;const _=g(S);_===null?h(a,c):_&&_.isColor&&(h(_,1),x=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,x){const _=g(x);_&&(_.isCubeTexture||_.mapping===tr)?(u===void 0&&(u=new Pe(new Oi(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Ii(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Gn.copy(x.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bd.makeRotationFromEuler(Gn)),u.material.toneMapped=se.getTransfer(_.colorSpace)!==he,(f!==_||d!==_.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=_,d=_.version,m=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Pe(new os(2,2),new zn({name:"BackgroundMaterial",uniforms:Ii(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=se.getTransfer(_.colorSpace)!==he,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=_,d=_.version,m=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function h(S,x){S.getRGB(bs,Zc(i)),n.buffers.color.setClear(bs.r,bs.g,bs.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),c=x,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,h(a,c)},render:v,addToRenderList:p}}function wd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,L,k,B,H){let K=!1;const G=f(B,k,L);r!==G&&(r=G,l(r.object)),K=m(y,B,k,H),K&&g(y,B,k,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,_(y,L,k,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function f(y,L,k){const B=k.wireframe===!0;let H=n[y.id];H===void 0&&(H={},n[y.id]=H);let K=H[L.id];K===void 0&&(K={},H[L.id]=K);let G=K[B];return G===void 0&&(G=d(c()),K[B]=G),G}function d(y){const L=[],k=[],B=[];for(let H=0;H<e;H++)L[H]=0,k[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:B,object:y,attributes:{},index:null}}function m(y,L,k,B){const H=r.attributes,K=L.attributes;let G=0;const nt=k.getAttributes();for(const V in nt)if(nt[V].location>=0){const Et=H[V];let Rt=K[V];if(Rt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(Rt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(Rt=y.instanceColor)),Et===void 0||Et.attribute!==Rt||Rt&&Et.data!==Rt.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function g(y,L,k,B){const H={},K=L.attributes;let G=0;const nt=k.getAttributes();for(const V in nt)if(nt[V].location>=0){let Et=K[V];Et===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(Et=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(Et=y.instanceColor));const Rt={};Rt.attribute=Et,Et&&Et.data&&(Rt.data=Et.data),H[V]=Rt,G++}r.attributes=H,r.attributesNum=G,r.index=B}function v(){const y=r.newAttributes;for(let L=0,k=y.length;L<k;L++)y[L]=0}function p(y){h(y,0)}function h(y,L){const k=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;k[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),H[y]!==L&&(i.vertexAttribDivisor(y,L),H[y]=L)}function S(){const y=r.newAttributes,L=r.enabledAttributes;for(let k=0,B=L.length;k<B;k++)L[k]!==y[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function x(y,L,k,B,H,K,G){G===!0?i.vertexAttribIPointer(y,L,k,H,K):i.vertexAttribPointer(y,L,k,B,H,K)}function _(y,L,k,B){v();const H=B.attributes,K=k.getAttributes(),G=L.defaultAttributeValues;for(const nt in K){const V=K[nt];if(V.location>=0){let mt=H[nt];if(mt===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),mt!==void 0){const Et=mt.normalized,Rt=mt.itemSize,wt=t.get(mt);if(wt===void 0)continue;const Zt=wt.buffer,Z=wt.type,lt=wt.bytesPerElement,Pt=Z===i.INT||Z===i.UNSIGNED_INT||mt.gpuType===Uo;if(mt.isInterleavedBufferAttribute){const ft=mt.data,Ut=ft.stride,Wt=mt.offset;if(ft.isInstancedInterleavedBuffer){for(let Vt=0;Vt<V.locationSize;Vt++)h(V.location+Vt,ft.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Vt=0;Vt<V.locationSize;Vt++)p(V.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Vt=0;Vt<V.locationSize;Vt++)x(V.location+Vt,Rt/V.locationSize,Z,Et,Ut*lt,(Wt+Rt/V.locationSize*Vt)*lt,Pt)}else{if(mt.isInstancedBufferAttribute){for(let ft=0;ft<V.locationSize;ft++)h(V.location+ft,mt.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let ft=0;ft<V.locationSize;ft++)p(V.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let ft=0;ft<V.locationSize;ft++)x(V.location+ft,Rt/V.locationSize,Z,Et,Rt*lt,Rt/V.locationSize*ft*lt,Pt)}}else if(G!==void 0){const Et=G[nt];if(Et!==void 0)switch(Et.length){case 2:i.vertexAttrib2fv(V.location,Et);break;case 3:i.vertexAttrib3fv(V.location,Et);break;case 4:i.vertexAttrib4fv(V.location,Et);break;default:i.vertexAttrib1fv(V.location,Et)}}}}S()}function D(){C();for(const y in n){const L=n[y];for(const k in L){const B=L[k];for(const H in B)u(B[H].object),delete B[H];delete L[k]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const k in L){const B=L[k];for(const H in B)u(B[H].object),delete B[H];delete L[k]}delete n[y.id]}function R(y){for(const L in n){const k=n[L];if(k[y.id]===void 0)continue;const B=k[y.id];for(const H in B)u(B[H].object),delete B[H];delete k[y.id]}}function C(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:S}}function Rd(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),e.update(u,n,f))}function a(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];e.update(m,n,1)}function c(l,u,f,d){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Cd(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==nn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ln&&!C)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:D,maxSamples:A}}function Pd(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Pn,a=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||s;return s=d,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,h=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const S=r?0:n,x=S*4;let _=h.clippingState||null;c.value=_,_=u(g,d,x,m);for(let D=0;D!==x;++D)_[D]=e[D];h.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,m,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const h=m+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<h)&&(p=new Float32Array(h));for(let x=0,_=m;x!==v;++x,_+=4)o.copy(f[x]).applyMatrix4(S,a),o.normal.toArray(p,_),p[_+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Ld(i){let t=new WeakMap;function e(o,a){return a===Qr?o.mapping=Ci:a===to&&(o.mapping=Pi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qr||a===to)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new kh(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Wo extends jc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const yi=4,Ia=[.125,.215,.35,.446,.526,.582],qn=20,Rr=new Wo,Ua=new ee;let Cr=null,Pr=0,Lr=0,Dr=!1;const Xn=(1+Math.sqrt(5))/2,vi=1/Xn,Na=[new P(-Xn,vi,0),new P(Xn,vi,0),new P(-vi,0,Xn),new P(vi,0,Xn),new P(0,Xn,-vi),new P(0,Xn,vi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Fa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=za(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cr,Pr,Lr),this._renderer.xr.enabled=Dr,t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:rs,format:nn,colorSpace:Ni,depthBuffer:!1},s=Oa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dd(r)),this._blurMaterial=Id(r,t,e)}return s}_compileMaterial(t){const e=new Pe(this._lodPlanes[0],t);this._renderer.compile(e,Rr)}_sceneToCubeUV(t,e,n,s){const a=new tn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ua),u.toneMapping=Nn,u.autoClear=!1;const m=new Zs({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new Pe(new Oi,m);let v=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(Ua),v=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):S===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));const x=this._cubeSize;As(s,S*x,h>2?x:0,x,x),u.setRenderTarget(s),v&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ci||t.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=za());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;As(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Rr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Na[(s-r-1)%Na.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Pe(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*qn-1),v=r/g,p=isFinite(r)?1+Math.floor(u*v):qn;p>qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qn}`);const h=[];let S=0;for(let R=0;R<qn;++R){const C=R/v,E=Math.exp(-C*C/2);h.push(E),R===0?S+=E:R<p&&(S+=2*E)}for(let R=0;R<h.length;R++)h[R]=h[R]/S;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const _=this._sizeLods[s],D=3*_*(s>x-yi?s-x+yi:0),A=4*(this._cubeSize-_);As(e,D,A,3*_,2*_),c.setRenderTarget(e),c.render(f,Rr)}}function Dd(i){const t=[],e=[],n=[];let s=i;const r=i-yi+1+Ia.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-yi?c=Ia[o-i+yi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,v=3,p=2,h=1,S=new Float32Array(v*g*m),x=new Float32Array(p*g*m),_=new Float32Array(h*g*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,C=A>2?0:-1,E=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];S.set(E,v*g*A),x.set(d,p*g*A);const y=[A,A,A,A,A,A];_.set(y,h*g*A)}const D=new we;D.setAttribute("position",new sn(S,v)),D.setAttribute("uv",new sn(x,p)),D.setAttribute("faceIndex",new sn(_,h)),t.push(D),s>yi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Oa(i,t,e){const n=new $n(i,t,e);return n.texture.mapping=tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Id(i,t,e){const n=new Float32Array(qn),s=new P(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function za(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ba(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Xo(){return`

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
	`}function Ud(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Qr||c===to,u=c===Ci||c===Pi;if(l||u){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Fa(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new Fa(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Nd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Zi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fd(i,t,e,n){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let p=0,h=v.length;p<h;p++)t.remove(v[p])}d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const v=m[g];for(let p=0,h=v.length;p<h;p++)t.update(v[p],i.ARRAY_BUFFER)}}function l(f){const d=[],m=f.index,g=f.attributes.position;let v=0;if(m!==null){const S=m.array;v=m.version;for(let x=0,_=S.length;x<_;x+=3){const D=S[x+0],A=S[x+1],R=S[x+2];d.push(D,A,A,R,R,D)}}else if(g!==void 0){const S=g.array;v=g.version;for(let x=0,_=S.length/3-1;x<_;x+=3){const D=x+0,A=x+1,R=x+2;d.push(D,A,A,R,R,D)}}else return;const p=new(Vc(d)?qc:Yc)(d,1);p.version=v;const h=r.get(f);h&&t.remove(h),r.set(f,p)}function u(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Od(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,m){i.drawElements(n,m,r,d*o),e.update(m,n,1)}function l(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,d*o,g),e.update(m,n,g))}function u(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];e.update(p,n,1)}function f(d,m,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)l(d[h]/o,m[h],v[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,v,0,g);let h=0;for(let S=0;S<g;S++)h+=m[S]*v[S];e.update(h,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function zd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Bd(i,t,e){const n=new WeakMap,s=new Me;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let E=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let _=a.attributes.position.count*x,D=1;_>t.maxTextureSize&&(D=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const A=new Float32Array(_*D*4*f),R=new Wc(A,_,D,f);R.type=ln,R.needsUpdate=!0;const C=x*4;for(let y=0;y<f;y++){const L=p[y],k=h[y],B=S[y],H=_*D*4*y;for(let K=0;K<L.count;K++){const G=K*C;m===!0&&(s.fromBufferAttribute(L,K),A[H+G+0]=s.x,A[H+G+1]=s.y,A[H+G+2]=s.z,A[H+G+3]=0),g===!0&&(s.fromBufferAttribute(k,K),A[H+G+4]=s.x,A[H+G+5]=s.y,A[H+G+6]=s.z,A[H+G+7]=0),v===!0&&(s.fromBufferAttribute(B,K),A[H+G+8]=s.x,A[H+G+9]=s.y,A[H+G+10]=s.z,A[H+G+11]=B.itemSize===4?s.w:1)}}d={count:f,texture:R,size:new at(_,D)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];const g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Hd(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Jc extends Ne{constructor(t,e,n,s,r,o,a,c,l,u=bi){if(u!==bi&&u!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===bi&&(n=Kn),n===void 0&&u===Di&&(n=Li),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xe,this.minFilter=c!==void 0?c:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Qc=new Ne,Ha=new Jc(1,1),tl=new Wc,el=new bh,nl=new Kc,ka=[],Va=[],Ga=new Float32Array(16),Wa=new Float32Array(9),Xa=new Float32Array(4);function zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ka[s];if(r===void 0&&(r=new Float32Array(s),ka[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ir(i,t){let e=Va[t];e===void 0&&(e=new Int32Array(t),Va[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function kd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function Gd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function Wd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function Xd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,n))return;Xa.set(n),i.uniformMatrix2fv(this.addr,!1,Xa),Ae(e,n)}}function Yd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,n))return;Wa.set(n),i.uniformMatrix3fv(this.addr,!1,Wa),Ae(e,n)}}function qd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,n))return;Ga.set(n),i.uniformMatrix4fv(this.addr,!1,Ga),Ae(e,n)}}function Zd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function Kd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function $d(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function Jd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function np(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ha.compareFunction=kc,r=Ha):r=Qc,e.setTexture2D(t||r,s)}function ip(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||el,s)}function sp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||nl,s)}function rp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||tl,s)}function op(i){switch(i){case 5126:return kd;case 35664:return Vd;case 35665:return Gd;case 35666:return Wd;case 35674:return Xd;case 35675:return Yd;case 35676:return qd;case 5124:case 35670:return Zd;case 35667:case 35671:return jd;case 35668:case 35672:return Kd;case 35669:case 35673:return $d;case 5125:return Jd;case 36294:return Qd;case 36295:return tp;case 36296:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return ip;case 35680:case 36300:case 36308:case 36293:return sp;case 36289:case 36303:case 36311:case 36292:return rp}}function ap(i,t){i.uniform1fv(this.addr,t)}function cp(i,t){const e=zi(t,this.size,2);i.uniform2fv(this.addr,e)}function lp(i,t){const e=zi(t,this.size,3);i.uniform3fv(this.addr,e)}function hp(i,t){const e=zi(t,this.size,4);i.uniform4fv(this.addr,e)}function up(i,t){const e=zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fp(i,t){const e=zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dp(i,t){const e=zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pp(i,t){i.uniform1iv(this.addr,t)}function mp(i,t){i.uniform2iv(this.addr,t)}function gp(i,t){i.uniform3iv(this.addr,t)}function _p(i,t){i.uniform4iv(this.addr,t)}function vp(i,t){i.uniform1uiv(this.addr,t)}function xp(i,t){i.uniform2uiv(this.addr,t)}function Mp(i,t){i.uniform3uiv(this.addr,t)}function Sp(i,t){i.uniform4uiv(this.addr,t)}function yp(i,t,e){const n=this.cache,s=t.length,r=ir(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Qc,r[o])}function Ep(i,t,e){const n=this.cache,s=t.length,r=ir(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||el,r[o])}function Tp(i,t,e){const n=this.cache,s=t.length,r=ir(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||nl,r[o])}function bp(i,t,e){const n=this.cache,s=t.length,r=ir(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||tl,r[o])}function Ap(i){switch(i){case 5126:return ap;case 35664:return cp;case 35665:return lp;case 35666:return hp;case 35674:return up;case 35675:return fp;case 35676:return dp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return vp;case 36294:return xp;case 36295:return Mp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return Ep;case 35680:case 36300:case 36308:case 36293:return Tp;case 36289:case 36303:case 36311:case 36292:return bp}}class wp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=op(e.type)}}class Rp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ap(e.type)}}class Cp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function Ya(i,t){i.seq.push(t),i.map[t.id]=t}function Pp(i,t,e){const n=i.name,s=n.length;for(Ir.lastIndex=0;;){const r=Ir.exec(n),o=Ir.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ya(e,l===void 0?new wp(a,i,t):new Rp(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Cp(a),Ya(e,f)),e=f}}}class Ws{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Pp(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function qa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Lp=37297;let Dp=0;function Ip(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Za=new Kt;function Up(i){se._getMatrix(Za,se.workingColorSpace,i);const t=`mat3( ${Za.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case er:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ja(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ip(i.getShaderSource(t),o)}else return s}function Np(i,t){const e=Up(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Fp(i,t){let e;switch(t){case zl:e="Linear";break;case Bl:e="Reinhard";break;case Hl:e="Cineon";break;case Cc:e="ACESFilmic";break;case Vl:e="AgX";break;case Gl:e="Neutral";break;case kl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ws=new P;function Op(){se.getLuminanceCoefficients(ws);const i=ws.x.toFixed(4),t=ws.y.toFixed(4),e=ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ji).join(`
`)}function Bp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ji(i){return i!==""}function Ka(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $a(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(i){return i.replace(kp,Gp)}const Vp=new Map;function Gp(i,t){let e=$t[t];if(e===void 0){const n=Vp.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Co(e)}const Wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ja(i){return i.replace(Wp,Xp)}function Xp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qa(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Yp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ac?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function qp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ci:case Pi:t="ENVMAP_TYPE_CUBE";break;case tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:t="ENVMAP_MODE_REFRACTION";break}return t}function jp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rc:t="ENVMAP_BLENDING_MULTIPLY";break;case Fl:t="ENVMAP_BLENDING_MIX";break;case Ol:t="ENVMAP_BLENDING_ADD";break}return t}function Kp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $p(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Yp(e),l=qp(e),u=Zp(e),f=jp(e),d=Kp(e),m=zp(e),g=Bp(r),v=s.createProgram();let p,h,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ji).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ji).join(`
`),h.length>0&&(h+=`
`)):(p=[Qa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),h=[Qa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Nn?Fp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Np("linearToOutputTexel",e.outputColorSpace),Op(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ji).join(`
`)),o=Co(o),o=Ka(o,e),o=$a(o,e),a=Co(a),a=Ka(a,e),a=$a(a,e),o=Ja(o),a=Ja(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=S+p+o,_=S+h+a,D=qa(s,s.VERTEX_SHADER,x),A=qa(s,s.FRAGMENT_SHADER,_);s.attachShader(v,D),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(L){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(D).trim(),H=s.getShaderInfoLog(A).trim();let K=!0,G=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,D,A);else{const nt=ja(s,D,"vertex"),V=ja(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+nt+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||H==="")&&(G=!1);G&&(L.diagnostics={runnable:K,programLog:k,vertexShader:{log:B,prefix:p},fragmentShader:{log:H,prefix:h}})}s.deleteShader(D),s.deleteShader(A),C=new Ws(s,v),E=Hp(s,v)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Lp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dp++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=A,this}let Jp=0;class Qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tm(t),e.set(t,n)),n}}class tm{constructor(t){this.id=Jp++,this.code=t,this.usedTimes=0}}function em(i,t,e,n,s,r,o){const a=new Vo,c=new Qp,l=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function p(E,y,L,k,B){const H=k.fog,K=B.geometry,G=E.isMeshStandardMaterial?k.environment:null,nt=(E.isMeshStandardMaterial?e:t).get(E.envMap||G),V=nt&&nt.mapping===tr?nt.image.height:null,mt=g[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const Et=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Rt=Et!==void 0?Et.length:0;let wt=0;K.morphAttributes.position!==void 0&&(wt=1),K.morphAttributes.normal!==void 0&&(wt=2),K.morphAttributes.color!==void 0&&(wt=3);let Zt,Z,lt,Pt;if(mt){const O=an[mt];Zt=O.vertexShader,Z=O.fragmentShader}else Zt=E.vertexShader,Z=E.fragmentShader,c.update(E),lt=c.getVertexShaderID(E),Pt=c.getFragmentShaderID(E);const ft=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),Wt=B.isInstancedMesh===!0,Vt=B.isBatchedMesh===!0,Qt=!!E.map,Q=!!E.matcap,rt=!!nt,w=!!E.aoMap,Dt=!!E.lightMap,st=!!E.bumpMap,At=!!E.normalMap,it=!!E.displacementMap,Gt=!!E.emissiveMap,bt=!!E.metalnessMap,b=!!E.roughnessMap,M=E.anisotropy>0,z=E.clearcoat>0,j=E.dispersion>0,tt=E.iridescence>0,Y=E.sheen>0,It=E.transmission>0,gt=M&&!!E.anisotropyMap,St=z&&!!E.clearcoatMap,Jt=z&&!!E.clearcoatNormalMap,ct=z&&!!E.clearcoatRoughnessMap,Ct=tt&&!!E.iridescenceMap,Ht=tt&&!!E.iridescenceThicknessMap,Nt=Y&&!!E.sheenColorMap,xt=Y&&!!E.sheenRoughnessMap,te=!!E.specularMap,qt=!!E.specularColorMap,le=!!E.specularIntensityMap,I=It&&!!E.transmissionMap,_t=It&&!!E.thicknessMap,q=!!E.gradientMap,J=!!E.alphaMap,yt=E.alphaTest>0,Mt=!!E.alphaHash,Xt=!!E.extensions;let de=Nn;E.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(de=i.toneMapping);const U={shaderID:mt,shaderType:E.type,shaderName:E.name,vertexShader:Zt,fragmentShader:Z,defines:E.defines,customVertexShaderID:lt,customFragmentShaderID:Pt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Vt,batchingColor:Vt&&B._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&B.instanceColor!==null,instancingMorph:Wt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Ni,alphaToCoverage:!!E.alphaToCoverage,map:Qt,matcap:Q,envMap:rt,envMapMode:rt&&nt.mapping,envMapCubeUVHeight:V,aoMap:w,lightMap:Dt,bumpMap:st,normalMap:At,displacementMap:d&&it,emissiveMap:Gt,normalMapObjectSpace:At&&E.normalMapType===ql,normalMapTangentSpace:At&&E.normalMapType===Hc,metalnessMap:bt,roughnessMap:b,anisotropy:M,anisotropyMap:gt,clearcoat:z,clearcoatMap:St,clearcoatNormalMap:Jt,clearcoatRoughnessMap:ct,dispersion:j,iridescence:tt,iridescenceMap:Ct,iridescenceThicknessMap:Ht,sheen:Y,sheenColorMap:Nt,sheenRoughnessMap:xt,specularMap:te,specularColorMap:qt,specularIntensityMap:le,transmission:It,transmissionMap:I,thicknessMap:_t,gradientMap:q,opaque:E.transparent===!1&&E.blending===Ti&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:yt,alphaHash:Mt,combine:E.combine,mapUv:Qt&&v(E.map.channel),aoMapUv:w&&v(E.aoMap.channel),lightMapUv:Dt&&v(E.lightMap.channel),bumpMapUv:st&&v(E.bumpMap.channel),normalMapUv:At&&v(E.normalMap.channel),displacementMapUv:it&&v(E.displacementMap.channel),emissiveMapUv:Gt&&v(E.emissiveMap.channel),metalnessMapUv:bt&&v(E.metalnessMap.channel),roughnessMapUv:b&&v(E.roughnessMap.channel),anisotropyMapUv:gt&&v(E.anisotropyMap.channel),clearcoatMapUv:St&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:xt&&v(E.sheenRoughnessMap.channel),specularMapUv:te&&v(E.specularMap.channel),specularColorMapUv:qt&&v(E.specularColorMap.channel),specularIntensityMapUv:le&&v(E.specularIntensityMap.channel),transmissionMapUv:I&&v(E.transmissionMap.channel),thicknessMapUv:_t&&v(E.thicknessMap.channel),alphaMapUv:J&&v(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(At||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(Qt||J),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ut,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:wt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:Qt&&E.map.isVideoTexture===!0&&se.getTransfer(E.map.colorSpace)===he,decodeVideoTextureEmissive:Gt&&E.emissiveMap.isVideoTexture===!0&&se.getTransfer(E.emissiveMap.colorSpace)===he,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===en,flipSided:E.side===ke,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Xt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&E.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return U.vertexUv1s=l.has(1),U.vertexUv2s=l.has(2),U.vertexUv3s=l.has(3),l.clear(),U}function h(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)y.push(L),y.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(S(y,E),x(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function S(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function x(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),E.push(a.mask)}function _(E){const y=g[E.type];let L;if(y){const k=an[y];L=Oh.clone(k.uniforms)}else L=E.uniforms;return L}function D(E,y){let L;for(let k=0,B=u.length;k<B;k++){const H=u[k];if(H.cacheKey===y){L=H,++L.usedTimes;break}}return L===void 0&&(L=new $p(i,y,E,r),u.push(L)),L}function A(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function R(E){c.remove(E)}function C(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:_,acquireProgram:D,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:C}}function nm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function im(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function tc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ec(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,d,m,g,v,p){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:v,group:p},i[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=p),t++,h}function a(f,d,m,g,v,p){const h=o(f,d,m,g,v,p);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):e.push(h)}function c(f,d,m,g,v,p){const h=o(f,d,m,g,v,p);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):e.unshift(h)}function l(f,d){e.length>1&&e.sort(f||im),n.length>1&&n.sort(d||tc),s.length>1&&s.sort(d||tc)}function u(){for(let f=t,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function sm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ec,i.set(n,[o])):s>=r.length?(o=new ec,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function rm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new ee};break;case"SpotLight":e={position:new P,direction:new P,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function om(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let am=0;function cm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function lm(i){const t=new rm,e=om(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new fe,o=new fe;function a(l){let u=0,f=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,g=0,v=0,p=0,h=0,S=0,x=0,_=0,D=0,A=0,R=0;l.sort(cm);for(let E=0,y=l.length;E<y;E++){const L=l[E],k=L.color,B=L.intensity,H=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=k.r*B,f+=k.g*B,d+=k.b*B;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],B);R++}else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const nt=L.shadow,V=e.get(L);V.shadowIntensity=nt.intensity,V.shadowBias=nt.bias,V.shadowNormalBias=nt.normalBias,V.shadowRadius=nt.radius,V.shadowMapSize=nt.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=L.shadow.matrix,S++}n.directional[m]=G,m++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(k).multiplyScalar(B),G.distance=H,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[v]=G;const nt=L.shadow;if(L.map&&(n.spotLightMap[D]=L.map,D++,nt.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[v]=nt.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=nt.intensity,V.shadowBias=nt.bias,V.shadowNormalBias=nt.normalBias,V.shadowRadius=nt.radius,V.shadowMapSize=nt.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=K,_++}v++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(k).multiplyScalar(B),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=G,p++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const nt=L.shadow,V=e.get(L);V.shadowIntensity=nt.intensity,V.shadowBias=nt.bias,V.shadowNormalBias=nt.normalBias,V.shadowRadius=nt.radius,V.shadowMapSize=nt.mapSize,V.shadowCameraNear=nt.camera.near,V.shadowCameraFar=nt.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=G,g++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(B),G.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[h]=G,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==p||C.hemiLength!==h||C.numDirectionalShadows!==S||C.numPointShadows!==x||C.numSpotShadows!==_||C.numSpotMaps!==D||C.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+D-A,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,C.directionalLength=m,C.pointLength=g,C.spotLength=v,C.rectAreaLength=p,C.hemiLength=h,C.numDirectionalShadows=S,C.numPointShadows=x,C.numSpotShadows=_,C.numSpotMaps=D,C.numLightProbes=R,n.version=am++)}function c(l,u){let f=0,d=0,m=0,g=0,v=0;const p=u.matrixWorldInverse;for(let h=0,S=l.length;h<S;h++){const x=l[h];if(x.isDirectionalLight){const _=n.directional[f];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),f++}else if(x.isSpotLight){const _=n.spot[m];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(p),v++}}}return{setup:a,setupView:c,state:n}}function nc(i){const t=new lm(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function hm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new nc(i),t.set(s,[a])):r>=o.length?(a=new nc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class um extends ii{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fm extends ii{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pm=`uniform sampler2D shadow_pass;
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
}`;function mm(i,t,e){let n=new Go;const s=new at,r=new at,o=new Me,a=new um({depthPacking:Yl}),c=new fm,l={},u=e.maxTextureSize,f={[On]:ke,[ke]:On,[en]:en},d=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:dm,fragmentShader:pm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Pe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac;let h=this.type;this.render=function(A,R,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Un),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=h!==vn&&this.type===vn,H=h===vn&&this.type!==vn;for(let K=0,G=A.length;K<G;K++){const nt=A[K],V=nt.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const mt=V.getFrameExtents();if(s.multiply(mt),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/mt.x),s.x=r.x*mt.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/mt.y),s.y=r.y*mt.y,V.mapSize.y=r.y)),V.map===null||B===!0||H===!0){const Rt=this.type!==vn?{minFilter:Xe,magFilter:Xe}:{};V.map!==null&&V.map.dispose(),V.map=new $n(s.x,s.y,Rt),V.map.texture.name=nt.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const Et=V.getViewportCount();for(let Rt=0;Rt<Et;Rt++){const wt=V.getViewport(Rt);o.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),k.viewport(o),V.updateMatrices(nt,Rt),n=V.getFrustum(),_(R,C,V.camera,nt,this.type)}V.isPointLightShadow!==!0&&this.type===vn&&S(V,C),V.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(E,y,L)};function S(A,R){const C=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new $n(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,C,d,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,C,m,v,null)}function x(A,R,C,E){let y=null;const L=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)y=L;else if(y=C.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const k=y.uuid,B=R.uuid;let H=l[k];H===void 0&&(H={},l[k]=H);let K=H[B];K===void 0&&(K=y.clone(),H[B]=K,R.addEventListener("dispose",D)),y=K}if(y.visible=R.visible,y.wireframe=R.wireframe,E===vn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:f[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=i.properties.get(y);k.light=C}return y}function _(A,R,C,E,y){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===vn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const B=t.update(A),H=A.material;if(Array.isArray(H)){const K=B.groups;for(let G=0,nt=K.length;G<nt;G++){const V=K[G],mt=H[V.materialIndex];if(mt&&mt.visible){const Et=x(A,mt,E,y);A.onBeforeShadow(i,A,R,C,B,Et,V),i.renderBufferDirect(C,null,B,Et,A,V),A.onAfterShadow(i,A,R,C,B,Et,V)}}}else if(H.visible){const K=x(A,H,E,y);A.onBeforeShadow(i,A,R,C,B,K,null),i.renderBufferDirect(C,null,B,K,A,null),A.onAfterShadow(i,A,R,C,B,K,null)}}const k=A.children;for(let B=0,H=k.length;B<H;B++)_(k[B],R,C,E,y)}function D(A){A.target.removeEventListener("dispose",D);for(const C in l){const E=l[C],y=A.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const gm={[Yr]:qr,[Zr]:$r,[jr]:Jr,[Ri]:Kr,[qr]:Yr,[$r]:Zr,[Jr]:jr,[Kr]:Ri};function _m(i,t){function e(){let I=!1;const _t=new Me;let q=null;const J=new Me(0,0,0,0);return{setMask:function(yt){q!==yt&&!I&&(i.colorMask(yt,yt,yt,yt),q=yt)},setLocked:function(yt){I=yt},setClear:function(yt,Mt,Xt,de,U){U===!0&&(yt*=de,Mt*=de,Xt*=de),_t.set(yt,Mt,Xt,de),J.equals(_t)===!1&&(i.clearColor(yt,Mt,Xt,de),J.copy(_t))},reset:function(){I=!1,q=null,J.set(-1,0,0,0)}}}function n(){let I=!1,_t=!1,q=null,J=null,yt=null;return{setReversed:function(Mt){if(_t!==Mt){const Xt=t.get("EXT_clip_control");_t?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const de=yt;yt=null,this.setClear(de)}_t=Mt},getReversed:function(){return _t},setTest:function(Mt){Mt?ft(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(Mt){q!==Mt&&!I&&(i.depthMask(Mt),q=Mt)},setFunc:function(Mt){if(_t&&(Mt=gm[Mt]),J!==Mt){switch(Mt){case Yr:i.depthFunc(i.NEVER);break;case qr:i.depthFunc(i.ALWAYS);break;case Zr:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case jr:i.depthFunc(i.EQUAL);break;case Kr:i.depthFunc(i.GEQUAL);break;case $r:i.depthFunc(i.GREATER);break;case Jr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=Mt}},setLocked:function(Mt){I=Mt},setClear:function(Mt){yt!==Mt&&(_t&&(Mt=1-Mt),i.clearDepth(Mt),yt=Mt)},reset:function(){I=!1,q=null,J=null,yt=null,_t=!1}}}function s(){let I=!1,_t=null,q=null,J=null,yt=null,Mt=null,Xt=null,de=null,U=null;return{setTest:function(O){I||(O?ft(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(O){_t!==O&&!I&&(i.stencilMask(O),_t=O)},setFunc:function(O,$,ut){(q!==O||J!==$||yt!==ut)&&(i.stencilFunc(O,$,ut),q=O,J=$,yt=ut)},setOp:function(O,$,ut){(Mt!==O||Xt!==$||de!==ut)&&(i.stencilOp(O,$,ut),Mt=O,Xt=$,de=ut)},setLocked:function(O){I=O},setClear:function(O){U!==O&&(i.clearStencil(O),U=O)},reset:function(){I=!1,_t=null,q=null,J=null,yt=null,Mt=null,Xt=null,de=null,U=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,m=[],g=null,v=!1,p=null,h=null,S=null,x=null,_=null,D=null,A=null,R=new ee(0,0,0),C=0,E=!1,y=null,L=null,k=null,B=null,H=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,nt=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=nt>=1):V.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=nt>=2);let mt=null,Et={};const Rt=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),Zt=new Me().fromArray(Rt),Z=new Me().fromArray(wt);function lt(I,_t,q,J){const yt=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(I,Mt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<q;Xt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(_t+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return Mt}const Pt={};Pt[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),Pt[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pt[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(i.DEPTH_TEST),o.setFunc(Ri),st(!1),At(ra),ft(i.CULL_FACE),w(Un);function ft(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Ut(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Wt(I,_t){return f[I]!==_t?(i.bindFramebuffer(I,_t),f[I]=_t,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=_t),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function Vt(I,_t){let q=m,J=!1;if(I){q=d.get(_t),q===void 0&&(q=[],d.set(_t,q));const yt=I.textures;if(q.length!==yt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,Xt=yt.length;Mt<Xt;Mt++)q[Mt]=i.COLOR_ATTACHMENT0+Mt;q.length=yt.length,J=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,J=!0);J&&i.drawBuffers(q)}function Qt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Q={[Yn]:i.FUNC_ADD,[xl]:i.FUNC_SUBTRACT,[Ml]:i.FUNC_REVERSE_SUBTRACT};Q[Sl]=i.MIN,Q[yl]=i.MAX;const rt={[El]:i.ZERO,[Tl]:i.ONE,[bl]:i.SRC_COLOR,[Wr]:i.SRC_ALPHA,[Ll]:i.SRC_ALPHA_SATURATE,[Cl]:i.DST_COLOR,[wl]:i.DST_ALPHA,[Al]:i.ONE_MINUS_SRC_COLOR,[Xr]:i.ONE_MINUS_SRC_ALPHA,[Pl]:i.ONE_MINUS_DST_COLOR,[Rl]:i.ONE_MINUS_DST_ALPHA,[Dl]:i.CONSTANT_COLOR,[Il]:i.ONE_MINUS_CONSTANT_COLOR,[Ul]:i.CONSTANT_ALPHA,[Nl]:i.ONE_MINUS_CONSTANT_ALPHA};function w(I,_t,q,J,yt,Mt,Xt,de,U,O){if(I===Un){v===!0&&(Ut(i.BLEND),v=!1);return}if(v===!1&&(ft(i.BLEND),v=!0),I!==vl){if(I!==p||O!==E){if((h!==Yn||_!==Yn)&&(i.blendEquation(i.FUNC_ADD),h=Yn,_=Yn),O)switch(I){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oa:i.blendFunc(i.ONE,i.ONE);break;case aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ca:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ca:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,x=null,D=null,A=null,R.set(0,0,0),C=0,p=I,E=O}return}yt=yt||_t,Mt=Mt||q,Xt=Xt||J,(_t!==h||yt!==_)&&(i.blendEquationSeparate(Q[_t],Q[yt]),h=_t,_=yt),(q!==S||J!==x||Mt!==D||Xt!==A)&&(i.blendFuncSeparate(rt[q],rt[J],rt[Mt],rt[Xt]),S=q,x=J,D=Mt,A=Xt),(de.equals(R)===!1||U!==C)&&(i.blendColor(de.r,de.g,de.b,U),R.copy(de),C=U),p=I,E=!1}function Dt(I,_t){I.side===en?Ut(i.CULL_FACE):ft(i.CULL_FACE);let q=I.side===ke;_t&&(q=!q),st(q),I.blending===Ti&&I.transparent===!1?w(Un):w(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Gt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function At(I){I!==gl?(ft(i.CULL_FACE),I!==L&&(I===ra?i.cullFace(i.BACK):I===_l?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),L=I}function it(I){I!==k&&(G&&i.lineWidth(I),k=I)}function Gt(I,_t,q){I?(ft(i.POLYGON_OFFSET_FILL),(B!==_t||H!==q)&&(i.polygonOffset(_t,q),B=_t,H=q)):Ut(i.POLYGON_OFFSET_FILL)}function bt(I){I?ft(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function b(I){I===void 0&&(I=i.TEXTURE0+K-1),mt!==I&&(i.activeTexture(I),mt=I)}function M(I,_t,q){q===void 0&&(mt===null?q=i.TEXTURE0+K-1:q=mt);let J=Et[q];J===void 0&&(J={type:void 0,texture:void 0},Et[q]=J),(J.type!==I||J.texture!==_t)&&(mt!==q&&(i.activeTexture(q),mt=q),i.bindTexture(I,_t||Pt[I]),J.type=I,J.texture=_t)}function z(){const I=Et[mt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ht(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(I){Zt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Zt.copy(I))}function xt(I){Z.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Z.copy(I))}function te(I,_t){let q=l.get(_t);q===void 0&&(q=new WeakMap,l.set(_t,q));let J=q.get(I);J===void 0&&(J=i.getUniformBlockIndex(_t,I.name),q.set(I,J))}function qt(I,_t){const J=l.get(_t).get(I);c.get(_t)!==J&&(i.uniformBlockBinding(_t,J,I.__bindingPointIndex),c.set(_t,J))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},mt=null,Et={},f={},d=new WeakMap,m=[],g=null,v=!1,p=null,h=null,S=null,x=null,_=null,D=null,A=null,R=new ee(0,0,0),C=0,E=!1,y=null,L=null,k=null,B=null,H=null,Zt.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ft,disable:Ut,bindFramebuffer:Wt,drawBuffers:Vt,useProgram:Qt,setBlending:w,setMaterial:Dt,setFlipSided:st,setCullFace:At,setLineWidth:it,setPolygonOffset:Gt,setScissorTest:bt,activeTexture:b,bindTexture:M,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:tt,texImage2D:Ct,texImage3D:Ht,updateUBOMapping:te,uniformBlockBinding:qt,texStorage2D:Jt,texStorage3D:ct,texSubImage2D:Y,texSubImage3D:It,compressedTexSubImage2D:gt,compressedTexSubImage3D:St,scissor:Nt,viewport:xt,reset:le}}function ic(i,t,e,n){const s=vm(n);switch(e){case Uc:return i*t;case Fc:return i*t;case Oc:return i*t*2;case Oo:return i*t/s.components*s.byteLength;case zo:return i*t/s.components*s.byteLength;case zc:return i*t*2/s.components*s.byteLength;case Bo:return i*t*2/s.components*s.byteLength;case Nc:return i*t*3/s.components*s.byteLength;case nn:return i*t*4/s.components*s.byteLength;case Ho:return i*t*4/s.components*s.byteLength;case Bs:case Hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ks:case Vs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case io:case ro:return Math.max(i,16)*Math.max(t,8)/4;case no:case so:return Math.max(i,8)*Math.max(t,8)/2;case oo:case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ho:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case go:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case vo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gs:case To:case bo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bc:case Ao:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wo:case Ro:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vm(i){switch(i){case Sn:case Lc:return{byteLength:1,components:1};case ts:case Dc:case rs:return{byteLength:2,components:1};case No:case Fo:return{byteLength:2,components:4};case Kn:case Uo:case ln:return{byteLength:4,components:1};case Ic:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function xm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return m?new OffscreenCanvas(b,M):qs("canvas")}function v(b,M,z){let j=1;const tt=bt(b);if((tt.width>z||tt.height>z)&&(j=z/Math.max(tt.width,tt.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(j*tt.width),It=Math.floor(j*tt.height);f===void 0&&(f=g(Y,It));const gt=M?g(Y,It):f;return gt.width=Y,gt.height=It,gt.getContext("2d").drawImage(b,0,0,Y,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Y+"x"+It+")."),gt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),b;return b}function p(b){return b.generateMipmaps}function h(b){i.generateMipmap(b)}function S(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(b,M,z,j,tt=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=M;if(M===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),M===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),M===i.RGBA){const It=tt?er:se.getTransfer(j);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=It===he?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(b,M){let z;return b?M===null||M===Kn||M===Li?z=i.DEPTH24_STENCIL8:M===ln?z=i.DEPTH32F_STENCIL8:M===ts&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Kn||M===Li?z=i.DEPTH_COMPONENT24:M===ln?z=i.DEPTH_COMPONENT32F:M===ts&&(z=i.DEPTH_COMPONENT16),z}function D(b,M){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Xe&&b.minFilter!==cn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function A(b){const M=b.target;M.removeEventListener("dispose",A),C(M),M.isVideoTexture&&u.delete(M)}function R(b){const M=b.target;M.removeEventListener("dispose",R),y(M)}function C(b){const M=n.get(b);if(M.__webglInit===void 0)return;const z=b.source,j=d.get(z);if(j){const tt=j[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(b),Object.keys(j).length===0&&d.delete(z)}n.remove(b)}function E(b){const M=n.get(b);i.deleteTexture(M.__webglTexture);const z=b.source,j=d.get(z);delete j[M.__cacheKey],o.memory.textures--}function y(b){const M=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let tt=0;tt<M.__webglFramebuffer[j].length;tt++)i.deleteFramebuffer(M.__webglFramebuffer[j][tt]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=b.textures;for(let j=0,tt=z.length;j<tt;j++){const Y=n.get(z[j]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[j])}n.remove(b)}let L=0;function k(){L=0}function B(){const b=L;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),L+=1,b}function H(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function K(b,M){const z=n.get(b);if(b.isVideoTexture&&it(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const j=b.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,b,M);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function G(b,M){const z=n.get(b);if(b.version>0&&z.__version!==b.version){Z(z,b,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function nt(b,M){const z=n.get(b);if(b.version>0&&z.__version!==b.version){Z(z,b,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function V(b,M){const z=n.get(b);if(b.version>0&&z.__version!==b.version){lt(z,b,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const mt={[Xs]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[eo]:i.MIRRORED_REPEAT},Et={[Xe]:i.NEAREST,[Wl]:i.NEAREST_MIPMAP_NEAREST,[as]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[ar]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},Rt={[Zl]:i.NEVER,[th]:i.ALWAYS,[jl]:i.LESS,[kc]:i.LEQUAL,[Kl]:i.EQUAL,[Ql]:i.GEQUAL,[$l]:i.GREATER,[Jl]:i.NOTEQUAL};function wt(b,M){if(M.type===ln&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===cn||M.magFilter===ar||M.magFilter===as||M.magFilter===jn||M.minFilter===cn||M.minFilter===ar||M.minFilter===as||M.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,mt[M.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,mt[M.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,mt[M.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Et[M.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Et[M.minFilter]),M.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Rt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Xe||M.minFilter!==as&&M.minFilter!==jn||M.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Zt(b,M){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",A));const j=M.source;let tt=d.get(j);tt===void 0&&(tt={},d.set(j,tt));const Y=H(M);if(Y!==b.__cacheKey){tt[Y]===void 0&&(tt[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),tt[Y].usedTimes++;const It=tt[b.__cacheKey];It!==void 0&&(tt[b.__cacheKey].usedTimes--,It.usedTimes===0&&E(M)),b.__cacheKey=Y,b.__webglTexture=tt[Y].texture}return z}function Z(b,M,z){let j=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=i.TEXTURE_3D);const tt=Zt(b,M),Y=M.source;e.bindTexture(j,b.__webglTexture,i.TEXTURE0+z);const It=n.get(Y);if(Y.version!==It.__version||tt===!0){e.activeTexture(i.TEXTURE0+z);const gt=se.getPrimaries(se.workingColorSpace),St=M.colorSpace===Ln?null:se.getPrimaries(M.colorSpace),Jt=M.colorSpace===Ln||gt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let ct=v(M.image,!1,s.maxTextureSize);ct=Gt(M,ct);const Ct=r.convert(M.format,M.colorSpace),Ht=r.convert(M.type);let Nt=x(M.internalFormat,Ct,Ht,M.colorSpace,M.isVideoTexture);wt(j,M);let xt;const te=M.mipmaps,qt=M.isVideoTexture!==!0,le=It.__version===void 0||tt===!0,I=Y.dataReady,_t=D(M,ct);if(M.isDepthTexture)Nt=_(M.format===Di,M.type),le&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Nt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Nt,ct.width,ct.height,0,Ct,Ht,null));else if(M.isDataTexture)if(te.length>0){qt&&le&&e.texStorage2D(i.TEXTURE_2D,_t,Nt,te[0].width,te[0].height);for(let q=0,J=te.length;q<J;q++)xt=te[q],qt?I&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,xt.width,xt.height,Ct,Ht,xt.data):e.texImage2D(i.TEXTURE_2D,q,Nt,xt.width,xt.height,0,Ct,Ht,xt.data);M.generateMipmaps=!1}else qt?(le&&e.texStorage2D(i.TEXTURE_2D,_t,Nt,ct.width,ct.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,Ct,Ht,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,ct.width,ct.height,0,Ct,Ht,ct.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qt&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Nt,te[0].width,te[0].height,ct.depth);for(let q=0,J=te.length;q<J;q++)if(xt=te[q],M.format!==nn)if(Ct!==null)if(qt){if(I)if(M.layerUpdates.size>0){const yt=ic(xt.width,xt.height,M.format,M.type);for(const Mt of M.layerUpdates){const Xt=xt.data.subarray(Mt*yt/xt.data.BYTES_PER_ELEMENT,(Mt+1)*yt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,Mt,xt.width,xt.height,1,Ct,Xt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,xt.width,xt.height,ct.depth,Ct,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Nt,xt.width,xt.height,ct.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,xt.width,xt.height,ct.depth,Ct,Ht,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Nt,xt.width,xt.height,ct.depth,0,Ct,Ht,xt.data)}else{qt&&le&&e.texStorage2D(i.TEXTURE_2D,_t,Nt,te[0].width,te[0].height);for(let q=0,J=te.length;q<J;q++)xt=te[q],M.format!==nn?Ct!==null?qt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,xt.width,xt.height,Ct,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Nt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?I&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,xt.width,xt.height,Ct,Ht,xt.data):e.texImage2D(i.TEXTURE_2D,q,Nt,xt.width,xt.height,0,Ct,Ht,xt.data)}else if(M.isDataArrayTexture)if(qt){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Nt,ct.width,ct.height,ct.depth),I)if(M.layerUpdates.size>0){const q=ic(ct.width,ct.height,M.format,M.type);for(const J of M.layerUpdates){const yt=ct.data.subarray(J*q/ct.data.BYTES_PER_ELEMENT,(J+1)*q/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ct.width,ct.height,1,Ct,Ht,yt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Ct,Ht,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,ct.width,ct.height,ct.depth,0,Ct,Ht,ct.data);else if(M.isData3DTexture)qt?(le&&e.texStorage3D(i.TEXTURE_3D,_t,Nt,ct.width,ct.height,ct.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Ct,Ht,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,ct.width,ct.height,ct.depth,0,Ct,Ht,ct.data);else if(M.isFramebufferTexture){if(le)if(qt)e.texStorage2D(i.TEXTURE_2D,_t,Nt,ct.width,ct.height);else{let q=ct.width,J=ct.height;for(let yt=0;yt<_t;yt++)e.texImage2D(i.TEXTURE_2D,yt,Nt,q,J,0,Ct,Ht,null),q>>=1,J>>=1}}else if(te.length>0){if(qt&&le){const q=bt(te[0]);e.texStorage2D(i.TEXTURE_2D,_t,Nt,q.width,q.height)}for(let q=0,J=te.length;q<J;q++)xt=te[q],qt?I&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Ct,Ht,xt):e.texImage2D(i.TEXTURE_2D,q,Nt,Ct,Ht,xt);M.generateMipmaps=!1}else if(qt){if(le){const q=bt(ct);e.texStorage2D(i.TEXTURE_2D,_t,Nt,q.width,q.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Ht,ct)}else e.texImage2D(i.TEXTURE_2D,0,Nt,Ct,Ht,ct);p(M)&&h(j),It.__version=Y.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function lt(b,M,z){if(M.image.length!==6)return;const j=Zt(b,M),tt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+z);const Y=n.get(tt);if(tt.version!==Y.__version||j===!0){e.activeTexture(i.TEXTURE0+z);const It=se.getPrimaries(se.workingColorSpace),gt=M.colorSpace===Ln?null:se.getPrimaries(M.colorSpace),St=M.colorSpace===Ln||It===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Jt=M.isCompressedTexture||M.image[0].isCompressedTexture,ct=M.image[0]&&M.image[0].isDataTexture,Ct=[];for(let J=0;J<6;J++)!Jt&&!ct?Ct[J]=v(M.image[J],!0,s.maxCubemapSize):Ct[J]=ct?M.image[J].image:M.image[J],Ct[J]=Gt(M,Ct[J]);const Ht=Ct[0],Nt=r.convert(M.format,M.colorSpace),xt=r.convert(M.type),te=x(M.internalFormat,Nt,xt,M.colorSpace),qt=M.isVideoTexture!==!0,le=Y.__version===void 0||j===!0,I=tt.dataReady;let _t=D(M,Ht);wt(i.TEXTURE_CUBE_MAP,M);let q;if(Jt){qt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,te,Ht.width,Ht.height);for(let J=0;J<6;J++){q=Ct[J].mipmaps;for(let yt=0;yt<q.length;yt++){const Mt=q[yt];M.format!==nn?Nt!==null?qt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,0,0,Mt.width,Mt.height,Nt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,te,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,0,0,Mt.width,Mt.height,Nt,xt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt,te,Mt.width,Mt.height,0,Nt,xt,Mt.data)}}}else{if(q=M.mipmaps,qt&&le){q.length>0&&_t++;const J=bt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,te,J.width,J.height)}for(let J=0;J<6;J++)if(ct){qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ct[J].width,Ct[J].height,Nt,xt,Ct[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,te,Ct[J].width,Ct[J].height,0,Nt,xt,Ct[J].data);for(let yt=0;yt<q.length;yt++){const Xt=q[yt].image[J].image;qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,0,0,Xt.width,Xt.height,Nt,xt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,te,Xt.width,Xt.height,0,Nt,xt,Xt.data)}}else{qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Nt,xt,Ct[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,te,Nt,xt,Ct[J]);for(let yt=0;yt<q.length;yt++){const Mt=q[yt];qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,0,0,Nt,xt,Mt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,yt+1,te,Nt,xt,Mt.image[J])}}}p(M)&&h(i.TEXTURE_CUBE_MAP),Y.__version=tt.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Pt(b,M,z,j,tt,Y){const It=r.convert(z.format,z.colorSpace),gt=r.convert(z.type),St=x(z.internalFormat,It,gt,z.colorSpace),Jt=n.get(M),ct=n.get(z);if(ct.__renderTarget=M,!Jt.__hasExternalTextures){const Ct=Math.max(1,M.width>>Y),Ht=Math.max(1,M.height>>Y);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Y,St,Ct,Ht,M.depth,0,It,gt,null):e.texImage2D(tt,Y,St,Ct,Ht,0,It,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),At(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,tt,ct.__webglTexture,0,st(M)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,tt,ct.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(b,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,b),M.depthBuffer){const j=M.depthTexture,tt=j&&j.isDepthTexture?j.type:null,Y=_(M.stencilBuffer,tt),It=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=st(M);At(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,Y,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,Y,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Y,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,b)}else{const j=M.textures;for(let tt=0;tt<j.length;tt++){const Y=j[tt],It=r.convert(Y.format,Y.colorSpace),gt=r.convert(Y.type),St=x(Y.internalFormat,It,gt,Y.colorSpace),Jt=st(M);z&&At(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,St,M.width,M.height):At(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,St,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,St,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(M.depthTexture);j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const tt=j.__webglTexture,Y=st(M);if(M.depthTexture.format===bi)At(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(M.depthTexture.format===Di)At(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Wt(b){const M=n.get(b),z=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const j=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",tt)};j.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=j}if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ut(M.__webglFramebuffer,b)}else if(z){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=i.createRenderbuffer(),ft(M.__webglDepthbuffer[j],b,!1);else{const tt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ft(M.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(b,M,z){const j=n.get(b);M!==void 0&&Pt(j.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Wt(b)}function Qt(b){const M=b.texture,z=n.get(b),j=n.get(M);b.addEventListener("dispose",R);const tt=b.textures,Y=b.isWebGLCubeRenderTarget===!0,It=tt.length>1;if(It||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=M.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[gt]=[];for(let St=0;St<M.mipmaps.length;St++)z.__webglFramebuffer[gt][St]=i.createFramebuffer()}else z.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let gt=0;gt<M.mipmaps.length;gt++)z.__webglFramebuffer[gt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(It)for(let gt=0,St=tt.length;gt<St;gt++){const Jt=n.get(tt[gt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&At(b)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let gt=0;gt<tt.length;gt++){const St=tt[gt];z.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[gt]);const Jt=r.convert(St.format,St.colorSpace),ct=r.convert(St.type),Ct=x(St.internalFormat,Jt,ct,St.colorSpace,b.isXRRenderTarget===!0),Ht=st(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Ct,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,z.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(z.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),wt(i.TEXTURE_CUBE_MAP,M);for(let gt=0;gt<6;gt++)if(M.mipmaps&&M.mipmaps.length>0)for(let St=0;St<M.mipmaps.length;St++)Pt(z.__webglFramebuffer[gt][St],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,St);else Pt(z.__webglFramebuffer[gt],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);p(M)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let gt=0,St=tt.length;gt<St;gt++){const Jt=tt[gt],ct=n.get(Jt);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),wt(i.TEXTURE_2D,Jt),Pt(z.__webglFramebuffer,b,Jt,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),p(Jt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(gt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,j.__webglTexture),wt(gt,M),M.mipmaps&&M.mipmaps.length>0)for(let St=0;St<M.mipmaps.length;St++)Pt(z.__webglFramebuffer[St],b,M,i.COLOR_ATTACHMENT0,gt,St);else Pt(z.__webglFramebuffer,b,M,i.COLOR_ATTACHMENT0,gt,0);p(M)&&h(gt),e.unbindTexture()}b.depthBuffer&&Wt(b)}function Q(b){const M=b.textures;for(let z=0,j=M.length;z<j;z++){const tt=M[z];if(p(tt)){const Y=S(b),It=n.get(tt).__webglTexture;e.bindTexture(Y,It),h(Y),e.unbindTexture()}}}const rt=[],w=[];function Dt(b){if(b.samples>0){if(At(b)===!1){const M=b.textures,z=b.width,j=b.height;let tt=i.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(b),gt=M.length>1;if(gt)for(let St=0;St<M.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let St=0;St<M.length;St++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[St]);const Jt=n.get(M[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,z,j,0,0,z,j,tt,i.NEAREST),c===!0&&(rt.length=0,w.length=0,rt.push(i.COLOR_ATTACHMENT0+St),b.depthBuffer&&b.resolveDepthBuffer===!1&&(rt.push(Y),w.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let St=0;St<M.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,It.__webglColorRenderbuffer[St]);const Jt=n.get(M[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const M=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function st(b){return Math.min(s.maxSamples,b.samples)}function At(b){const M=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function it(b){const M=o.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function Gt(b,M){const z=b.colorSpace,j=b.format,tt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||z!==Ni&&z!==Ln&&(se.getTransfer(z)===he?(j!==nn||tt!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function bt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=nt,this.setTextureCube=V,this.rebindTextures=Vt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=At}function Mm(i,t){function e(n,s=Ln){let r;const o=se.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===No)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ic)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lc)return i.BYTE;if(n===Dc)return i.SHORT;if(n===ts)return i.UNSIGNED_SHORT;if(n===Uo)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===rs)return i.HALF_FLOAT;if(n===Uc)return i.ALPHA;if(n===Nc)return i.RGB;if(n===nn)return i.RGBA;if(n===Fc)return i.LUMINANCE;if(n===Oc)return i.LUMINANCE_ALPHA;if(n===bi)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===Oo)return i.RED;if(n===zo)return i.RED_INTEGER;if(n===zc)return i.RG;if(n===Bo)return i.RG_INTEGER;if(n===Ho)return i.RGBA_INTEGER;if(n===Bs||n===Hs||n===ks||n===Vs)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===no||n===io||n===so||n===ro)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===no)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===so)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oo||n===ao||n===co)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oo||n===ao)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===co)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===lo||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===vo||n===xo||n===Mo||n===So||n===yo||n===Eo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ho)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===po)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===go)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_o)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gs||n===To||n===bo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gs)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===Ao||n===wo||n===Ro)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Sm extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Se extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ym={type:"move"};class Ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),h=this._getHandJoint(l,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ym)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Em=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ne,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new zn({vertexShader:Em,fragmentShader:Tm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new os(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Am extends ti{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,m=null,g=null;const v=new bm,p=e.getContextAttributes();let h=null,S=null;const x=[],_=[],D=new at;let A=null;const R=new tn;R.viewport=new Me;const C=new tn;C.viewport=new Me;const E=[R,C],y=new Sm;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let lt=x[Z];return lt===void 0&&(lt=new Ur,x[Z]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(Z){let lt=x[Z];return lt===void 0&&(lt=new Ur,x[Z]=lt),lt.getGripSpace()},this.getHand=function(Z){let lt=x[Z];return lt===void 0&&(lt=new Ur,x[Z]=lt),lt.getHandSpace()};function B(Z){const lt=_.indexOf(Z.inputSource);if(lt===-1)return;const Pt=x[lt];Pt!==void 0&&(Pt.update(Z.inputSource,Z.frame,l||o),Pt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",K);for(let Z=0;Z<x.length;Z++){const lt=_[Z];lt!==null&&(_[Z]=null,x[Z].disconnect(lt))}L=null,k=null,v.reset(),t.setRenderTarget(h),m=null,d=null,f=null,s=null,S=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const lt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new $n(m.framebufferWidth,m.framebufferHeight,{format:nn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let lt=null,Pt=null,ft=null;p.depth&&(ft=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=p.stencil?Di:bi,Pt=p.stencil?Li:Kn);const Ut={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new $n(d.textureWidth,d.textureHeight,{format:nn,type:Sn,depthTexture:new Jc(d.textureWidth,d.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(Z){for(let lt=0;lt<Z.removed.length;lt++){const Pt=Z.removed[lt],ft=_.indexOf(Pt);ft>=0&&(_[ft]=null,x[ft].disconnect(Pt))}for(let lt=0;lt<Z.added.length;lt++){const Pt=Z.added[lt];let ft=_.indexOf(Pt);if(ft===-1){for(let Wt=0;Wt<x.length;Wt++)if(Wt>=_.length){_.push(Pt),ft=Wt;break}else if(_[Wt]===null){_[Wt]=Pt,ft=Wt;break}if(ft===-1)break}const Ut=x[ft];Ut&&Ut.connect(Pt)}}const G=new P,nt=new P;function V(Z,lt,Pt){G.setFromMatrixPosition(lt.matrixWorld),nt.setFromMatrixPosition(Pt.matrixWorld);const ft=G.distanceTo(nt),Ut=lt.projectionMatrix.elements,Wt=Pt.projectionMatrix.elements,Vt=Ut[14]/(Ut[10]-1),Qt=Ut[14]/(Ut[10]+1),Q=(Ut[9]+1)/Ut[5],rt=(Ut[9]-1)/Ut[5],w=(Ut[8]-1)/Ut[0],Dt=(Wt[8]+1)/Wt[0],st=Vt*w,At=Vt*Dt,it=ft/(-w+Dt),Gt=it*-w;if(lt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Gt),Z.translateZ(it),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ut[10]===-1)Z.projectionMatrix.copy(lt.projectionMatrix),Z.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const bt=Vt+it,b=Qt+it,M=st-Gt,z=At+(ft-Gt),j=Q*Qt/b*bt,tt=rt*Qt/b*bt;Z.projectionMatrix.makePerspective(M,z,j,tt,bt,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function mt(Z,lt){lt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(lt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let lt=Z.near,Pt=Z.far;v.texture!==null&&(v.depthNear>0&&(lt=v.depthNear),v.depthFar>0&&(Pt=v.depthFar)),y.near=C.near=R.near=lt,y.far=C.far=R.far=Pt,(L!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,k=y.far),R.layers.mask=Z.layers.mask|2,C.layers.mask=Z.layers.mask|4,y.layers.mask=R.layers.mask|C.layers.mask;const ft=Z.parent,Ut=y.cameras;mt(y,ft);for(let Wt=0;Wt<Ut.length;Wt++)mt(Ut[Wt],ft);Ut.length===2?V(y,R,C):y.projectionMatrix.copy(R.projectionMatrix),Et(Z,y,ft)};function Et(Z,lt,Pt){Pt===null?Z.matrix.copy(lt.matrixWorld):(Z.matrix.copy(Pt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(lt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(lt.projectionMatrix),Z.projectionMatrixInverse.copy(lt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=es*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Rt=null;function wt(Z,lt){if(u=lt.getViewerPose(l||o),g=lt,u!==null){const Pt=u.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let ft=!1;Pt.length!==y.cameras.length&&(y.cameras.length=0,ft=!0);for(let Wt=0;Wt<Pt.length;Wt++){const Vt=Pt[Wt];let Qt=null;if(m!==null)Qt=m.getViewport(Vt);else{const rt=f.getViewSubImage(d,Vt);Qt=rt.viewport,Wt===0&&(t.setRenderTargetTextures(S,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(S))}let Q=E[Wt];Q===void 0&&(Q=new tn,Q.layers.enable(Wt),Q.viewport=new Me,E[Wt]=Q),Q.matrix.fromArray(Vt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Vt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Wt===0&&(y.matrix.copy(Q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ft===!0&&y.cameras.push(Q)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const Wt=f.getDepthInformation(Pt[0]);Wt&&Wt.isValid&&Wt.texture&&v.init(t,Wt,s.renderState)}}for(let Pt=0;Pt<x.length;Pt++){const ft=_[Pt],Ut=x[Pt];ft!==null&&Ut!==void 0&&Ut.update(ft,lt,l||o)}Rt&&Rt(Z,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),g=null}const Zt=new $c;Zt.setAnimationLoop(wt),this.setAnimationLoop=function(Z){Rt=Z},this.dispose=function(){}}}const Wn=new hn,wm=new fe;function Rm(i,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Zc(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,S,x,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),f(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,_)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),v(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?c(p,h,S,x):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===ke&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===ke&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const S=t.get(h),x=S.envMap,_=S.envMapRotation;x&&(p.envMap.value=x,Wn.copy(_),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),p.envMapRotation.value.setFromMatrix4(wm.makeRotationFromEuler(Wn)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,S,x){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*S,p.scale.value=x*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,S){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ke&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const S=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cm(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,x){const _=x.program;n.uniformBlockBinding(S,_)}function l(S,x){let _=s[S.id];_===void 0&&(g(S),_=u(S),s[S.id]=_,S.addEventListener("dispose",p));const D=x.program;n.updateUBOMapping(S,D);const A=t.render.frame;r[S.id]!==A&&(d(S),r[S.id]=A)}function u(S){const x=f();S.__bindingPointIndex=x;const _=i.createBuffer(),D=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,D,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=s[S.id],_=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,R=_.length;A<R;A++){const C=Array.isArray(_[A])?_[A]:[_[A]];for(let E=0,y=C.length;E<y;E++){const L=C[E];if(m(L,A,E,D)===!0){const k=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let H=0;for(let K=0;K<B.length;K++){const G=B[K],nt=v(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,k+H,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,H),H+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,x,_,D){const A=S.value,R=x+"_"+_;if(D[R]===void 0)return typeof A=="number"||typeof A=="boolean"?D[R]=A:D[R]=A.clone(),!0;{const C=D[R];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return D[R]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(S){const x=S.uniforms;let _=0;const D=16;for(let R=0,C=x.length;R<C;R++){const E=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,L=E.length;y<L;y++){const k=E[y],B=Array.isArray(k.value)?k.value:[k.value];for(let H=0,K=B.length;H<K;H++){const G=B[H],nt=v(G),V=_%D,mt=V%nt.boundary,Et=V+mt;_+=mt,Et!==0&&D-Et<nt.storage&&(_+=D-Et),k.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=nt.storage}}}const A=_%D;return A>0&&(_+=D-A),S.__size=_,S.__cache={},this}function v(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){const x=S.target;x.removeEventListener("dispose",p);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function h(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:h}}class Pm{constructor(t={}){const{canvas:e=_h(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,h=null;const S=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this.toneMapping=Nn,this.toneMappingExposure=1;const _=this;let D=!1,A=0,R=0,C=null,E=-1,y=null;const L=new Me,k=new Me;let B=null;const H=new ee(0);let K=0,G=e.width,nt=e.height,V=1,mt=null,Et=null;const Rt=new Me(0,0,G,nt),wt=new Me(0,0,G,nt);let Zt=!1;const Z=new Go;let lt=!1,Pt=!1;const ft=new fe,Ut=new fe,Wt=new P,Vt=new Me,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function rt(){return C===null?V:1}let w=n;function Dt(T,N){return e.getContext(T,N)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),w===null){const N="webgl2";if(w=Dt(N,T),w===null)throw Dt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let st,At,it,Gt,bt,b,M,z,j,tt,Y,It,gt,St,Jt,ct,Ct,Ht,Nt,xt,te,qt,le,I;function _t(){st=new Nd(w),st.init(),qt=new Mm(w,st),At=new Cd(w,st,t,qt),it=new _m(w,st),At.reverseDepthBuffer&&d&&it.buffers.depth.setReversed(!0),Gt=new zd(w),bt=new nm,b=new xm(w,st,it,bt,At,qt,Gt),M=new Ld(_),z=new Ud(_),j=new Wh(w),le=new wd(w,j),tt=new Fd(w,j,Gt,le),Y=new Hd(w,tt,j,Gt),Nt=new Bd(w,At,b),ct=new Pd(bt),It=new em(_,M,z,st,At,le,ct),gt=new Rm(_,bt),St=new sm,Jt=new hm(st),Ht=new Ad(_,M,z,it,Y,m,c),Ct=new mm(_,Y,At),I=new Cm(w,Gt,At,it),xt=new Rd(w,st,Gt),te=new Od(w,st,Gt),Gt.programs=It.programs,_.capabilities=At,_.extensions=st,_.properties=bt,_.renderLists=St,_.shadowMap=Ct,_.state=it,_.info=Gt}_t();const q=new Am(_,w);this.xr=q,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const T=st.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=st.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(G,nt,!1))},this.getSize=function(T){return T.set(G,nt)},this.setSize=function(T,N,W=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,nt=N,e.width=Math.floor(T*V),e.height=Math.floor(N*V),W===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(G*V,nt*V).floor()},this.setDrawingBufferSize=function(T,N,W){G=T,nt=N,V=W,e.width=Math.floor(T*W),e.height=Math.floor(N*W),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(Rt)},this.setViewport=function(T,N,W,X){T.isVector4?Rt.set(T.x,T.y,T.z,T.w):Rt.set(T,N,W,X),it.viewport(L.copy(Rt).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(wt)},this.setScissor=function(T,N,W,X){T.isVector4?wt.set(T.x,T.y,T.z,T.w):wt.set(T,N,W,X),it.scissor(k.copy(wt).multiplyScalar(V).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(T){it.setScissorTest(Zt=T)},this.setOpaqueSort=function(T){mt=T},this.setTransparentSort=function(T){Et=T},this.getClearColor=function(T){return T.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(T=!0,N=!0,W=!0){let X=0;if(T){let F=!1;if(C!==null){const pt=C.texture.format;F=pt===Ho||pt===Bo||pt===zo}if(F){const pt=C.texture.type,Tt=pt===Sn||pt===Kn||pt===ts||pt===Li||pt===No||pt===Fo,Ft=Ht.getClearColor(),Ot=Ht.getClearAlpha(),Yt=Ft.r,jt=Ft.g,zt=Ft.b;Tt?(g[0]=Yt,g[1]=jt,g[2]=zt,g[3]=Ot,w.clearBufferuiv(w.COLOR,0,g)):(v[0]=Yt,v[1]=jt,v[2]=zt,v[3]=Ot,w.clearBufferiv(w.COLOR,0,v))}else X|=w.COLOR_BUFFER_BIT}N&&(X|=w.DEPTH_BUFFER_BIT),W&&(X|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),St.dispose(),Jt.dispose(),bt.dispose(),M.dispose(),z.dispose(),Y.dispose(),le.dispose(),I.dispose(),It.dispose(),q.dispose(),q.removeEventListener("sessionstart",ht),q.removeEventListener("sessionend",ot),et.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const T=Gt.autoReset,N=Ct.enabled,W=Ct.autoUpdate,X=Ct.needsUpdate,F=Ct.type;_t(),Gt.autoReset=T,Ct.enabled=N,Ct.autoUpdate=W,Ct.needsUpdate=X,Ct.type=F}function Mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Xt(T){const N=T.target;N.removeEventListener("dispose",Xt),de(N)}function de(T){U(T),bt.remove(T)}function U(T){const N=bt.get(T).programs;N!==void 0&&(N.forEach(function(W){It.releaseProgram(W)}),T.isShaderMaterial&&It.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,W,X,F,pt){N===null&&(N=Qt);const Tt=F.isMesh&&F.matrixWorld.determinant()<0,Ft=rn(T,N,W,X,F);it.setMaterial(X,Tt);let Ot=W.index,Yt=1;if(X.wireframe===!0){if(Ot=tt.getWireframeAttribute(W),Ot===void 0)return;Yt=2}const jt=W.drawRange,zt=W.attributes.position;let oe=jt.start*Yt,me=(jt.start+jt.count)*Yt;pt!==null&&(oe=Math.max(oe,pt.start*Yt),me=Math.min(me,(pt.start+pt.count)*Yt)),Ot!==null?(oe=Math.max(oe,0),me=Math.min(me,Ot.count)):zt!=null&&(oe=Math.max(oe,0),me=Math.min(me,zt.count));const ge=me-oe;if(ge<0||ge===1/0)return;le.setup(F,X,Ft,W,Ot);let ze,ae=xt;if(Ot!==null&&(ze=j.get(Ot),ae=te,ae.setIndex(ze)),F.isMesh)X.wireframe===!0?(it.setLineWidth(X.wireframeLinewidth*rt()),ae.setMode(w.LINES)):ae.setMode(w.TRIANGLES);else if(F.isLine){let Bt=X.linewidth;Bt===void 0&&(Bt=1),it.setLineWidth(Bt*rt()),F.isLineSegments?ae.setMode(w.LINES):F.isLineLoop?ae.setMode(w.LINE_LOOP):ae.setMode(w.LINE_STRIP)}else F.isPoints?ae.setMode(w.POINTS):F.isSprite&&ae.setMode(w.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ae.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ae.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Bt=F._multiDrawStarts,fn=F._multiDrawCounts,ce=F._multiDrawCount,Ke=Ot?j.get(Ot).bytesPerElement:1,si=bt.get(X).currentProgram.getUniforms();for(let Ve=0;Ve<ce;Ve++)si.setValue(w,"_gl_DrawID",Ve),ae.render(Bt[Ve]/Ke,fn[Ve])}else if(F.isInstancedMesh)ae.renderInstances(oe,ge,F.count);else if(W.isInstancedBufferGeometry){const Bt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,fn=Math.min(W.instanceCount,Bt);ae.renderInstances(oe,ge,fn)}else ae.render(oe,ge)};function O(T,N,W){T.transparent===!0&&T.side===en&&T.forceSinglePass===!1?(T.side=ke,T.needsUpdate=!0,re(T,N,W),T.side=On,T.needsUpdate=!0,re(T,N,W),T.side=en):re(T,N,W)}this.compile=function(T,N,W=null){W===null&&(W=T),h=Jt.get(W),h.init(N),x.push(h),W.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),T!==W&&T.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const X=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const pt=F.material;if(pt)if(Array.isArray(pt))for(let Tt=0;Tt<pt.length;Tt++){const Ft=pt[Tt];O(Ft,W,F),X.add(Ft)}else O(pt,W,F),X.add(pt)}),x.pop(),h=null,X},this.compileAsync=function(T,N,W=null){const X=this.compile(T,N,W);return new Promise(F=>{function pt(){if(X.forEach(function(Tt){bt.get(Tt).currentProgram.isReady()&&X.delete(Tt)}),X.size===0){F(T);return}setTimeout(pt,10)}st.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let $=null;function ut(T){$&&$(T)}function ht(){et.stop()}function ot(){et.start()}const et=new $c;et.setAnimationLoop(ut),typeof self<"u"&&et.setContext(self),this.setAnimationLoop=function(T){$=T,q.setAnimationLoop(T),T===null?et.stop():et.start()},q.addEventListener("sessionstart",ht),q.addEventListener("sessionend",ot),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,N,C),h=Jt.get(T,x.length),h.init(N),x.push(h),Ut.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(Ut),Pt=this.localClippingEnabled,lt=ct.init(this.clippingPlanes,Pt),p=St.get(T,S.length),p.init(),S.push(p),q.enabled===!0&&q.isPresenting===!0){const pt=_.xr.getDepthSensingMesh();pt!==null&&dt(pt,N,-1/0,_.sortObjects)}dt(T,N,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(mt,Et),Q=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Q&&Ht.addToRenderList(p,T),this.info.render.frame++,lt===!0&&ct.beginShadows();const W=h.state.shadowsArray;Ct.render(W,T,N),lt===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=p.opaque,F=p.transmissive;if(h.setupLights(),N.isArrayCamera){const pt=N.cameras;if(F.length>0)for(let Tt=0,Ft=pt.length;Tt<Ft;Tt++){const Ot=pt[Tt];kt(X,F,T,Ot)}Q&&Ht.render(T);for(let Tt=0,Ft=pt.length;Tt<Ft;Tt++){const Ot=pt[Tt];Lt(p,T,Ot,Ot.viewport)}}else F.length>0&&kt(X,F,T,N),Q&&Ht.render(T),Lt(p,T,N);C!==null&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(_,T,N),le.resetDefaultState(),E=-1,y=null,x.pop(),x.length>0?(h=x[x.length-1],lt===!0&&ct.setGlobalState(_.clippingPlanes,h.state.camera)):h=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function dt(T,N,W,X){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){X&&Vt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ut);const Tt=Y.update(T),Ft=T.material;Ft.visible&&p.push(T,Tt,Ft,W,Vt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){const Tt=Y.update(T),Ft=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Vt.copy(T.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Vt.copy(Tt.boundingSphere.center)),Vt.applyMatrix4(T.matrixWorld).applyMatrix4(Ut)),Array.isArray(Ft)){const Ot=Tt.groups;for(let Yt=0,jt=Ot.length;Yt<jt;Yt++){const zt=Ot[Yt],oe=Ft[zt.materialIndex];oe&&oe.visible&&p.push(T,Tt,oe,W,Vt.z,zt)}}else Ft.visible&&p.push(T,Tt,Ft,W,Vt.z,null)}}const pt=T.children;for(let Tt=0,Ft=pt.length;Tt<Ft;Tt++)dt(pt[Tt],N,W,X)}function Lt(T,N,W,X){const F=T.opaque,pt=T.transmissive,Tt=T.transparent;h.setupLightsView(W),lt===!0&&ct.setGlobalState(_.clippingPlanes,W),X&&it.viewport(L.copy(X)),F.length>0&&pe(F,N,W),pt.length>0&&pe(pt,N,W),Tt.length>0&&pe(Tt,N,W),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function kt(T,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[X.id]===void 0&&(h.state.transmissionRenderTarget[X.id]=new $n(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?rs:Sn,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const pt=h.state.transmissionRenderTarget[X.id],Tt=X.viewport||L;pt.setSize(Tt.z,Tt.w);const Ft=_.getRenderTarget();_.setRenderTarget(pt),_.getClearColor(H),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),Q&&Ht.render(W);const Ot=_.toneMapping;_.toneMapping=Nn;const Yt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),h.setupLightsView(X),lt===!0&&ct.setGlobalState(_.clippingPlanes,X),pe(T,W,X),b.updateMultisampleRenderTarget(pt),b.updateRenderTargetMipmap(pt),st.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let zt=0,oe=N.length;zt<oe;zt++){const me=N[zt],ge=me.object,ze=me.geometry,ae=me.material,Bt=me.group;if(ae.side===en&&ge.layers.test(X.layers)){const fn=ae.side;ae.side=ke,ae.needsUpdate=!0,ne(ge,W,X,ze,ae,Bt),ae.side=fn,ae.needsUpdate=!0,jt=!0}}jt===!0&&(b.updateMultisampleRenderTarget(pt),b.updateRenderTargetMipmap(pt))}_.setRenderTarget(Ft),_.setClearColor(H,K),Yt!==void 0&&(X.viewport=Yt),_.toneMapping=Ot}function pe(T,N,W){const X=N.isScene===!0?N.overrideMaterial:null;for(let F=0,pt=T.length;F<pt;F++){const Tt=T[F],Ft=Tt.object,Ot=Tt.geometry,Yt=X===null?Tt.material:X,jt=Tt.group;Ft.layers.test(W.layers)&&ne(Ft,N,W,Ot,Yt,jt)}}function ne(T,N,W,X,F,pt){T.onBeforeRender(_,N,W,X,F,pt),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(_,N,W,X,T,pt),F.transparent===!0&&F.side===en&&F.forceSinglePass===!1?(F.side=ke,F.needsUpdate=!0,_.renderBufferDirect(W,N,X,F,T,pt),F.side=On,F.needsUpdate=!0,_.renderBufferDirect(W,N,X,F,T,pt),F.side=en):_.renderBufferDirect(W,N,X,F,T,pt),T.onAfterRender(_,N,W,X,F,pt)}function re(T,N,W){N.isScene!==!0&&(N=Qt);const X=bt.get(T),F=h.state.lights,pt=h.state.shadowsArray,Tt=F.state.version,Ft=It.getParameters(T,F.state,pt,N,W),Ot=It.getProgramCacheKey(Ft);let Yt=X.programs;X.environment=T.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(T.isMeshStandardMaterial?z:M).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Yt===void 0&&(T.addEventListener("dispose",Xt),Yt=new Map,X.programs=Yt);let jt=Yt.get(Ot);if(jt!==void 0){if(X.currentProgram===jt&&X.lightsStateVersion===Tt)return ve(T,Ft),jt}else Ft.uniforms=It.getUniforms(T),T.onBeforeCompile(Ft,_),jt=It.acquireProgram(Ft,Ot),Yt.set(Ot,jt),X.uniforms=Ft.uniforms;const zt=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(zt.clippingPlanes=ct.uniform),ve(T,Ft),X.needsLights=or(T),X.lightsStateVersion=Tt,X.needsLights&&(zt.ambientLightColor.value=F.state.ambient,zt.lightProbe.value=F.state.probe,zt.directionalLights.value=F.state.directional,zt.directionalLightShadows.value=F.state.directionalShadow,zt.spotLights.value=F.state.spot,zt.spotLightShadows.value=F.state.spotShadow,zt.rectAreaLights.value=F.state.rectArea,zt.ltc_1.value=F.state.rectAreaLTC1,zt.ltc_2.value=F.state.rectAreaLTC2,zt.pointLights.value=F.state.point,zt.pointLightShadows.value=F.state.pointShadow,zt.hemisphereLights.value=F.state.hemi,zt.directionalShadowMap.value=F.state.directionalShadowMap,zt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,zt.spotShadowMap.value=F.state.spotShadowMap,zt.spotLightMatrix.value=F.state.spotLightMatrix,zt.spotLightMap.value=F.state.spotLightMap,zt.pointShadowMap.value=F.state.pointShadowMap,zt.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=jt,X.uniformsList=null,jt}function De(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Ws.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function ve(T,N){const W=bt.get(T);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function rn(T,N,W,X,F){N.isScene!==!0&&(N=Qt),b.resetTextureUnits();const pt=N.fog,Tt=X.isMeshStandardMaterial?N.environment:null,Ft=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ni,Ot=(X.isMeshStandardMaterial?z:M).get(X.envMap||Tt),Yt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,jt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),zt=!!W.morphAttributes.position,oe=!!W.morphAttributes.normal,me=!!W.morphAttributes.color;let ge=Nn;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ge=_.toneMapping);const ze=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ae=ze!==void 0?ze.length:0,Bt=bt.get(X),fn=h.state.lights;if(lt===!0&&(Pt===!0||T!==y)){const Ye=T===y&&X.id===E;ct.setState(X,T,Ye)}let ce=!1;X.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==fn.state.version||Bt.outputColorSpace!==Ft||F.isBatchedMesh&&Bt.batching===!1||!F.isBatchedMesh&&Bt.batching===!0||F.isBatchedMesh&&Bt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Bt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Bt.instancing===!1||!F.isInstancedMesh&&Bt.instancing===!0||F.isSkinnedMesh&&Bt.skinning===!1||!F.isSkinnedMesh&&Bt.skinning===!0||F.isInstancedMesh&&Bt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Bt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Bt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Bt.instancingMorph===!1&&F.morphTexture!==null||Bt.envMap!==Ot||X.fog===!0&&Bt.fog!==pt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ct.numPlanes||Bt.numIntersection!==ct.numIntersection)||Bt.vertexAlphas!==Yt||Bt.vertexTangents!==jt||Bt.morphTargets!==zt||Bt.morphNormals!==oe||Bt.morphColors!==me||Bt.toneMapping!==ge||Bt.morphTargetsCount!==ae)&&(ce=!0):(ce=!0,Bt.__version=X.version);let Ke=Bt.currentProgram;ce===!0&&(Ke=re(X,N,F));let si=!1,Ve=!1,Bi=!1;const _e=Ke.getUniforms(),on=Bt.uniforms;if(it.useProgram(Ke.program)&&(si=!0,Ve=!0,Bi=!0),X.id!==E&&(E=X.id,Ve=!0),si||y!==T){it.buffers.depth.getReversed()?(ft.copy(T.projectionMatrix),xh(ft),Mh(ft),_e.setValue(w,"projectionMatrix",ft)):_e.setValue(w,"projectionMatrix",T.projectionMatrix),_e.setValue(w,"viewMatrix",T.matrixWorldInverse);const yn=_e.map.cameraPosition;yn!==void 0&&yn.setValue(w,Wt.setFromMatrixPosition(T.matrixWorld)),At.logarithmicDepthBuffer&&_e.setValue(w,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&_e.setValue(w,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Ve=!0,Bi=!0)}if(F.isSkinnedMesh){_e.setOptional(w,F,"bindMatrix"),_e.setOptional(w,F,"bindMatrixInverse");const Ye=F.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),_e.setValue(w,"boneTexture",Ye.boneTexture,b))}F.isBatchedMesh&&(_e.setOptional(w,F,"batchingTexture"),_e.setValue(w,"batchingTexture",F._matricesTexture,b),_e.setOptional(w,F,"batchingIdTexture"),_e.setValue(w,"batchingIdTexture",F._indirectTexture,b),_e.setOptional(w,F,"batchingColorTexture"),F._colorsTexture!==null&&_e.setValue(w,"batchingColorTexture",F._colorsTexture,b));const Hi=W.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&Nt.update(F,W,Ke),(Ve||Bt.receiveShadow!==F.receiveShadow)&&(Bt.receiveShadow=F.receiveShadow,_e.setValue(w,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(on.envMap.value=Ot,on.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(on.envMapIntensity.value=N.environmentIntensity),Ve&&(_e.setValue(w,"toneMappingExposure",_.toneMappingExposure),Bt.needsLights&&rr(on,Bi),pt&&X.fog===!0&&gt.refreshFogUniforms(on,pt),gt.refreshMaterialUniforms(on,X,V,nt,h.state.transmissionRenderTarget[T.id]),Ws.upload(w,De(Bt),on,b)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ws.upload(w,De(Bt),on,b),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&_e.setValue(w,"center",F.center),_e.setValue(w,"modelViewMatrix",F.modelViewMatrix),_e.setValue(w,"normalMatrix",F.normalMatrix),_e.setValue(w,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ye=X.uniformsGroups;for(let yn=0,En=Ye.length;yn<En;yn++){const sa=Ye[yn];I.update(sa,Ke),I.bind(sa,Ke)}}return Ke}function rr(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function or(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,N,W){bt.get(T.texture).__webglTexture=N,bt.get(T.depthTexture).__webglTexture=W;const X=bt.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){const W=bt.get(T);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,W=0){C=T,A=N,R=W;let X=!0,F=null,pt=!1,Tt=!1;if(T){const Ot=bt.get(T);if(Ot.__useDefaultFramebuffer!==void 0)it.bindFramebuffer(w.FRAMEBUFFER,null),X=!1;else if(Ot.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(Ot.__hasExternalTextures)b.rebindTextures(T,bt.get(T.texture).__webglTexture,bt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const zt=T.depthTexture;if(Ot.__boundDepthTexture!==zt){if(zt!==null&&bt.has(zt)&&(T.width!==zt.image.width||T.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const Yt=T.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Tt=!0);const jt=bt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(jt[N])?F=jt[N][W]:F=jt[N],pt=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?F=bt.get(T).__webglMultisampledFramebuffer:Array.isArray(jt)?F=jt[W]:F=jt,L.copy(T.viewport),k.copy(T.scissor),B=T.scissorTest}else L.copy(Rt).multiplyScalar(V).floor(),k.copy(wt).multiplyScalar(V).floor(),B=Zt;if(it.bindFramebuffer(w.FRAMEBUFFER,F)&&X&&it.drawBuffers(T,F),it.viewport(L),it.scissor(k),it.setScissorTest(B),pt){const Ot=bt.get(T.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ot.__webglTexture,W)}else if(Tt){const Ot=bt.get(T.texture),Yt=N||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ot.__webglTexture,W||0,Yt)}E=-1},this.readRenderTargetPixels=function(T,N,W,X,F,pt,Tt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ft=Ft[Tt]),Ft){it.bindFramebuffer(w.FRAMEBUFFER,Ft);try{const Ot=T.texture,Yt=Ot.format,jt=Ot.type;if(!At.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-X&&W>=0&&W<=T.height-F&&w.readPixels(N,W,X,F,qt.convert(Yt),qt.convert(jt),pt)}finally{const Ot=C!==null?bt.get(C).__webglFramebuffer:null;it.bindFramebuffer(w.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(T,N,W,X,F,pt,Tt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ft=Ft[Tt]),Ft){const Ot=T.texture,Yt=Ot.format,jt=Ot.type;if(!At.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-X&&W>=0&&W<=T.height-F){it.bindFramebuffer(w.FRAMEBUFFER,Ft);const zt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,zt),w.bufferData(w.PIXEL_PACK_BUFFER,pt.byteLength,w.STREAM_READ),w.readPixels(N,W,X,F,qt.convert(Yt),qt.convert(jt),0);const oe=C!==null?bt.get(C).__webglFramebuffer:null;it.bindFramebuffer(w.FRAMEBUFFER,oe);const me=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await vh(w,me,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,zt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,pt),w.deleteBuffer(zt),w.deleteSync(me),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,W=0){T.isTexture!==!0&&(Zi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-W),F=Math.floor(T.image.width*X),pt=Math.floor(T.image.height*X),Tt=N!==null?N.x:0,Ft=N!==null?N.y:0;b.setTexture2D(T,0),w.copyTexSubImage2D(w.TEXTURE_2D,W,0,0,Tt,Ft,F,pt),it.unbindTexture()},this.copyTextureToTexture=function(T,N,W=null,X=null,F=0){T.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],N=arguments[2],F=arguments[3]||0,W=null);let pt,Tt,Ft,Ot,Yt,jt,zt,oe,me;const ge=T.isCompressedTexture?T.mipmaps[F]:T.image;W!==null?(pt=W.max.x-W.min.x,Tt=W.max.y-W.min.y,Ft=W.isBox3?W.max.z-W.min.z:1,Ot=W.min.x,Yt=W.min.y,jt=W.isBox3?W.min.z:0):(pt=ge.width,Tt=ge.height,Ft=ge.depth||1,Ot=0,Yt=0,jt=0),X!==null?(zt=X.x,oe=X.y,me=X.z):(zt=0,oe=0,me=0);const ze=qt.convert(N.format),ae=qt.convert(N.type);let Bt;N.isData3DTexture?(b.setTexture3D(N,0),Bt=w.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(b.setTexture2DArray(N,0),Bt=w.TEXTURE_2D_ARRAY):(b.setTexture2D(N,0),Bt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,N.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,N.unpackAlignment);const fn=w.getParameter(w.UNPACK_ROW_LENGTH),ce=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ke=w.getParameter(w.UNPACK_SKIP_PIXELS),si=w.getParameter(w.UNPACK_SKIP_ROWS),Ve=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ge.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ge.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ot),w.pixelStorei(w.UNPACK_SKIP_ROWS,Yt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,jt);const Bi=T.isDataArrayTexture||T.isData3DTexture,_e=N.isDataArrayTexture||N.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const on=bt.get(T),Hi=bt.get(N),Ye=bt.get(on.__renderTarget),yn=bt.get(Hi.__renderTarget);it.bindFramebuffer(w.READ_FRAMEBUFFER,Ye.__webglFramebuffer),it.bindFramebuffer(w.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let En=0;En<Ft;En++)Bi&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,bt.get(T).__webglTexture,F,jt+En),T.isDepthTexture?(_e&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,bt.get(N).__webglTexture,F,me+En),w.blitFramebuffer(Ot,Yt,pt,Tt,zt,oe,pt,Tt,w.DEPTH_BUFFER_BIT,w.NEAREST)):_e?w.copyTexSubImage3D(Bt,F,zt,oe,me+En,Ot,Yt,pt,Tt):w.copyTexSubImage2D(Bt,F,zt,oe,me+En,Ot,Yt,pt,Tt);it.bindFramebuffer(w.READ_FRAMEBUFFER,null),it.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else _e?T.isDataTexture||T.isData3DTexture?w.texSubImage3D(Bt,F,zt,oe,me,pt,Tt,Ft,ze,ae,ge.data):N.isCompressedArrayTexture?w.compressedTexSubImage3D(Bt,F,zt,oe,me,pt,Tt,Ft,ze,ge.data):w.texSubImage3D(Bt,F,zt,oe,me,pt,Tt,Ft,ze,ae,ge):T.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,F,zt,oe,pt,Tt,ze,ae,ge.data):T.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,F,zt,oe,ge.width,ge.height,ze,ge.data):w.texSubImage2D(w.TEXTURE_2D,F,zt,oe,pt,Tt,ze,ae,ge);w.pixelStorei(w.UNPACK_ROW_LENGTH,fn),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ce),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ke),w.pixelStorei(w.UNPACK_SKIP_ROWS,si),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ve),F===0&&N.generateMipmaps&&w.generateMipmap(Bt),it.unbindTexture()},this.copyTextureToTexture3D=function(T,N,W=null,X=null,F=0){return T.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,T=arguments[2],N=arguments[3],F=arguments[4]||0),Zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,W,X,F)},this.initRenderTarget=function(T){bt.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),it.unbindTexture()},this.resetState=function(){A=0,R=0,C=null,it.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}class Lm extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Dm extends Ne{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Xe,u=Xe,f,d){super(null,o,a,c,l,u,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sc extends sn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xi=new fe,rc=new fe,Rs=[],oc=new ni,Im=new fe,Xi=new Pe,Yi=new Fi;class Um extends Pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Im)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xi),oc.copy(t.boundingBox).applyMatrix4(xi),this.boundingBox.union(oc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xi),Yi.copy(t.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(Yi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Xi.geometry=this.geometry,Xi.material=this.material,Xi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yi.copy(this.boundingSphere),Yi.applyMatrix4(n),t.ray.intersectsSphere(Yi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xi),rc.multiplyMatrices(n,xi),Xi.matrixWorld=rc,Xi.raycast(t,Rs);for(let o=0,a=Rs.length;o<a;o++){const c=Rs[o];c.instanceId=r,c.object=this,e.push(c)}Rs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new sc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dm(new Float32Array(s*this.count),s,this.count,Oo,ln));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Yo extends ii{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const js=new P,Ks=new P,ac=new fe,qi=new nr,Cs=new Fi,Nr=new P,cc=new P;class il extends Le{constructor(t=new we,e=new Yo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)js.fromBufferAttribute(e,s-1),Ks.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=js.distanceTo(Ks);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(s),Cs.radius+=r,t.ray.intersectsSphere(Cs)===!1)return;ac.copy(s).invert(),qi.copy(t.ray).applyMatrix4(ac);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=m,p=g-1;v<p;v+=l){const h=u.getX(v),S=u.getX(v+1),x=Ps(this,t,qi,c,h,S);x&&e.push(x)}if(this.isLineLoop){const v=u.getX(g-1),p=u.getX(m),h=Ps(this,t,qi,c,v,p);h&&e.push(h)}}else{const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=m,p=g-1;v<p;v+=l){const h=Ps(this,t,qi,c,v,v+1);h&&e.push(h)}if(this.isLineLoop){const v=Ps(this,t,qi,c,g-1,m);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ps(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(js.fromBufferAttribute(o,s),Ks.fromBufferAttribute(o,r),e.distanceSqToSegment(js,Ks,Nr,cc)>n)return;Nr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Nr);if(!(c<t.near||c>t.far))return{distance:c,point:cc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const lc=new P,hc=new P;class Nm extends il{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)lc.fromBufferAttribute(e,s),hc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+lc.distanceTo(hc);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fm extends il{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class sl extends Ne{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,m=(o-u)/d;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new at:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],o=[],a=new P,c=new fe;for(let m=0;m<=t;m++){const g=m/t;s[m]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ce(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Ce(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class qo extends un{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new at){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*u-m*f+this.aX,l=d*f+m*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Om extends qo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Zo(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,m=(a-o)/u-(c-o)/(u+f)+(c-a)/f;d*=u,m*=u,s(o,a,d,m)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ls=new P,Fr=new Zo,Or=new Zo,zr=new Zo;class Po extends un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Ls.subVectors(s[0],s[1]).add(s[0]),l=Ls);const f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ls.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ls),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),m),v=Math.pow(f.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(u),m);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Fr.initNonuniformCatmullRom(l.x,f.x,d.x,u.x,g,v,p),Or.initNonuniformCatmullRom(l.y,f.y,d.y,u.y,g,v,p),zr.initNonuniformCatmullRom(l.z,f.z,d.z,u.z,g,v,p)}else this.curveType==="catmullrom"&&(Fr.initCatmullRom(l.x,f.x,d.x,u.x,this.tension),Or.initCatmullRom(l.y,f.y,d.y,u.y,this.tension),zr.initCatmullRom(l.z,f.z,d.z,u.z,this.tension));return n.set(Fr.calc(c),Or.calc(c),zr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function uc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function zm(i,t){const e=1-i;return e*e*t}function Bm(i,t){return 2*(1-i)*i*t}function Hm(i,t){return i*i*t}function $i(i,t,e,n){return zm(i,t)+Bm(i,e)+Hm(i,n)}function km(i,t){const e=1-i;return e*e*e*t}function Vm(i,t){const e=1-i;return 3*e*e*i*t}function Gm(i,t){return 3*(1-i)*i*i*t}function Wm(i,t){return i*i*i*t}function Ji(i,t,e,n,s){return km(i,t)+Vm(i,e)+Gm(i,n)+Wm(i,s)}class rl extends un{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ji(t,s.x,r.x,o.x,a.x),Ji(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xm extends un{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ji(t,s.x,r.x,o.x,a.x),Ji(t,s.y,r.y,o.y,a.y),Ji(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ol extends un{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ym extends un{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class al extends un{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set($i(t,s.x,r.x,o.x),$i(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jo extends un{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set($i(t,s.x,r.x,o.x),$i(t,s.y,r.y,o.y),$i(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cl extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(uc(a,c.x,l.x,u.x,f.x),uc(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var $s=Object.freeze({__proto__:null,ArcCurve:Om,CatmullRomCurve3:Po,CubicBezierCurve:rl,CubicBezierCurve3:Xm,EllipseCurve:qo,LineCurve:ol,LineCurve3:Ym,QuadraticBezierCurve:al,QuadraticBezierCurve3:jo,SplineCurve:cl});class qm extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $s[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new $s[s.type]().fromJSON(s))}return this}}class fc extends qm{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ol(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new al(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new rl(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new cl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new qo(t,e,n,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ko extends we{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new P,u=new at;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const m=n+f/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class $o extends we{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],m=[];let g=0;const v=[],p=n/2;let h=0;S(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new ie(f,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(m,2));function S(){const _=new P,D=new P;let A=0;const R=(e-t)/n;for(let C=0;C<=r;C++){const E=[],y=C/r,L=y*(e-t)+t;for(let k=0;k<=s;k++){const B=k/s,H=B*c+a,K=Math.sin(H),G=Math.cos(H);D.x=L*K,D.y=-y*n+p,D.z=L*G,f.push(D.x,D.y,D.z),_.set(K,R,G).normalize(),d.push(_.x,_.y,_.z),m.push(B,1-y),E.push(g++)}v.push(E)}for(let C=0;C<s;C++)for(let E=0;E<r;E++){const y=v[E][C],L=v[E+1][C],k=v[E+1][C+1],B=v[E][C+1];(t>0||E!==0)&&(u.push(y,L,B),A+=3),(e>0||E!==r-1)&&(u.push(L,k,B),A+=3)}l.addGroup(h,A,0),h+=A}function x(_){const D=g,A=new at,R=new P;let C=0;const E=_===!0?t:e,y=_===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,p*y,0),d.push(0,y,0),m.push(.5,.5),g++;const L=g;for(let k=0;k<=s;k++){const H=k/s*c+a,K=Math.cos(H),G=Math.sin(H);R.x=E*G,R.y=p*y,R.z=E*K,f.push(R.x,R.y,R.z),d.push(0,y,0),A.x=K*.5+.5,A.y=G*.5*y+.5,m.push(A.x,A.y),g++}for(let k=0;k<s;k++){const B=D+k,H=L+k;_===!0?u.push(H,H+1,B):u.push(H+1,H,B),C+=3}l.addGroup(h,C,_===!0?1:2),h+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jo extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const x=new P,_=new P,D=new P;for(let A=0;A<e.length;A+=3)m(e[A+0],x),m(e[A+1],_),m(e[A+2],D),c(x,_,D,S)}function c(S,x,_,D){const A=D+1,R=[];for(let C=0;C<=A;C++){R[C]=[];const E=S.clone().lerp(_,C/A),y=x.clone().lerp(_,C/A),L=A-C;for(let k=0;k<=L;k++)k===0&&C===A?R[C][k]=E:R[C][k]=E.clone().lerp(y,k/L)}for(let C=0;C<A;C++)for(let E=0;E<2*(A-C)-1;E++){const y=Math.floor(E/2);E%2===0?(d(R[C][y+1]),d(R[C+1][y]),d(R[C][y])):(d(R[C][y+1]),d(R[C+1][y+1]),d(R[C+1][y]))}}function l(S){const x=new P;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(S),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function u(){const S=new P;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];const _=p(S)/2/Math.PI+.5,D=h(S)/Math.PI+.5;o.push(_,1-D)}g(),f()}function f(){for(let S=0;S<o.length;S+=6){const x=o[S+0],_=o[S+2],D=o[S+4],A=Math.max(x,_,D),R=Math.min(x,_,D);A>.9&&R<.1&&(x<.2&&(o[S+0]+=1),_<.2&&(o[S+2]+=1),D<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function m(S,x){const _=S*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function g(){const S=new P,x=new P,_=new P,D=new P,A=new at,R=new at,C=new at;for(let E=0,y=0;E<r.length;E+=9,y+=6){S.set(r[E+0],r[E+1],r[E+2]),x.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),A.set(o[y+0],o[y+1]),R.set(o[y+2],o[y+3]),C.set(o[y+4],o[y+5]),D.copy(S).add(x).add(_).divideScalar(3);const L=p(D);v(A,y+0,S,L),v(R,y+2,x,L),v(C,y+4,_,L)}}function v(S,x,_,D){D<0&&S.x===1&&(o[x]=S.x-1),_.x===0&&_.z===0&&(o[x]=D/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function h(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.vertices,t.indices,t.radius,t.details)}}class Js extends Jo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Js(t.radius,t.detail)}}const Ds=new P,Is=new P,Br=new P,Us=new Ze;class Zm extends we{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Ai*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],f=new Array(3),d={},m=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:p,c:h}=Us;if(v.fromBufferAttribute(a,l[0]),p.fromBufferAttribute(a,l[1]),h.fromBufferAttribute(a,l[2]),Us.getNormal(Br),f[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,f[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,f[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let S=0;S<3;S++){const x=(S+1)%3,_=f[S],D=f[x],A=Us[u[S]],R=Us[u[x]],C=`${_}_${D}`,E=`${D}_${_}`;E in d&&d[E]?(Br.dot(d[E].normal)<=r&&(m.push(A.x,A.y,A.z),m.push(R.x,R.y,R.z)),d[E]=null):C in d||(d[C]={index0:l[S],index1:l[x],normal:Br.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:p}=d[g];Ds.fromBufferAttribute(a,v),Is.fromBufferAttribute(a,p),m.push(Ds.x,Ds.y,Ds.z),m.push(Is.x,Is.y,Is.z)}this.setAttribute("position",new ie(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Qs extends fc{constructor(t){super(t),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new fc().fromJSON(s))}return this}}const jm={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=ll(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,f,d,m;if(n&&(r=t0(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)f=i[g],d=i[g+1],f<a&&(a=f),d<c&&(c=d),f>l&&(l=f),d>u&&(u=d);m=Math.max(l-a,u-c),m=m!==0?32767/m:0}return ns(r,o,e,a,c,m,0),o}};function ll(i,t,e,n,s){let r,o;if(s===u0(i,t,e,n)>0)for(r=t;r<e;r+=n)o=dc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=dc(r,i[r],i[r+1],o);return o&&sr(o,o.next)&&(ss(o),o=o.next),o}function Qn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(sr(e,e.next)||xe(e.prev,e,e.next)===0)){if(ss(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ns(i,t,e,n,s,r,o){if(!i)return;!o&&r&&r0(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?$m(i,n,s,r):Km(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ss(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Jm(Qn(i),t,e),ns(i,t,e,n,s,r,2)):o===2&&Qm(i,t,e,n,s,r):ns(Qn(i),t,e,n,s,r,1);break}}}function Km(i){const t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,m=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=m&&Ei(s,a,r,c,o,l,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $m(i,t,e,n){const s=i.prev,r=i,o=i.next;if(xe(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,d=o.y,m=a<c?a<l?a:l:c<l?c:l,g=u<f?u<d?u:d:f<d?f:d,v=a>c?a>l?a:l:c>l?c:l,p=u>f?u>d?u:d:f>d?f:d,h=Lo(m,g,t,e,n),S=Lo(v,p,t,e,n);let x=i.prevZ,_=i.nextZ;for(;x&&x.z>=h&&_&&_.z<=S;){if(x.x>=m&&x.x<=v&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&Ei(a,u,c,f,l,d,x.x,x.y)&&xe(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=m&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&Ei(a,u,c,f,l,d,_.x,_.y)&&xe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=h;){if(x.x>=m&&x.x<=v&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&Ei(a,u,c,f,l,d,x.x,x.y)&&xe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=S;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&Ei(a,u,c,f,l,d,_.x,_.y)&&xe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Jm(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!sr(s,r)&&hl(s,n,n.next,r)&&is(s,r)&&is(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ss(n),ss(n.next),n=i=r),n=n.next}while(n!==i);return Qn(n)}function Qm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&c0(o,a)){let c=ul(o,a);o=Qn(o,o.next),c=Qn(c,c.next),ns(o,t,e,n,s,r,0),ns(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function t0(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=ll(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(a0(l));for(s.sort(e0),r=0;r<s.length;r++)e=n0(s[r],e);return e}function e0(i,t){return i.x-t.x}function n0(i,t){const e=i0(i,t);if(!e)return t;const n=ul(e,i);return Qn(n,n.next),Qn(e,e.next)}function i0(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ei(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),is(e,i)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&s0(s,e)))&&(s=e,u=f)),e=e.next;while(e!==a);return s}function s0(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function r0(i,t,e,n){let s=i;do s.z===0&&(s.z=Lo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,o0(s)}function o0(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Lo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function a0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ei(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function c0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!l0(i,t)&&(is(i,t)&&is(t,i)&&h0(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||sr(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function sr(i,t){return i.x===t.x&&i.y===t.y}function hl(i,t,e,n){const s=Fs(xe(i,t,e)),r=Fs(xe(i,t,n)),o=Fs(xe(e,n,i)),a=Fs(xe(e,n,t));return!!(s!==r&&o!==a||s===0&&Ns(i,e,t)||r===0&&Ns(i,n,t)||o===0&&Ns(e,i,n)||a===0&&Ns(e,t,n))}function Ns(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fs(i){return i>0?1:i<0?-1:0}function l0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&hl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function is(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function h0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ul(i,t){const e=new Do(i.i,i.x,i.y),n=new Do(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function dc(i,t,e,n){const s=new Do(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ss(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Do(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function u0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Fn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Fn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];pc(t),mc(n,t);let o=t.length;e.forEach(pc);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,mc(n,e[c]);const a=jm.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function pc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function mc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Qo extends we{constructor(t=new Qs([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const h=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:f0;let x,_=!1,D,A,R,C;h&&(x=h.getSpacedPoints(u),_=!0,d=!1,D=h.computeFrenetFrames(u,!1),A=new P,R=new P,C=new P),d||(p=0,m=0,g=0,v=0);const E=a.extractPoints(l);let y=E.shape;const L=E.holes;if(!Fn.isClockWise(y)){y=y.reverse();for(let Q=0,rt=L.length;Q<rt;Q++){const w=L[Q];Fn.isClockWise(w)&&(L[Q]=w.reverse())}}const B=Fn.triangulateShape(y,L),H=y;for(let Q=0,rt=L.length;Q<rt;Q++){const w=L[Q];y=y.concat(w)}function K(Q,rt,w){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(rt,w)}const G=y.length,nt=B.length;function V(Q,rt,w){let Dt,st,At;const it=Q.x-rt.x,Gt=Q.y-rt.y,bt=w.x-Q.x,b=w.y-Q.y,M=it*it+Gt*Gt,z=it*b-Gt*bt;if(Math.abs(z)>Number.EPSILON){const j=Math.sqrt(M),tt=Math.sqrt(bt*bt+b*b),Y=rt.x-Gt/j,It=rt.y+it/j,gt=w.x-b/tt,St=w.y+bt/tt,Jt=((gt-Y)*b-(St-It)*bt)/(it*b-Gt*bt);Dt=Y+it*Jt-Q.x,st=It+Gt*Jt-Q.y;const ct=Dt*Dt+st*st;if(ct<=2)return new at(Dt,st);At=Math.sqrt(ct/2)}else{let j=!1;it>Number.EPSILON?bt>Number.EPSILON&&(j=!0):it<-Number.EPSILON?bt<-Number.EPSILON&&(j=!0):Math.sign(Gt)===Math.sign(b)&&(j=!0),j?(Dt=-Gt,st=it,At=Math.sqrt(M)):(Dt=it,st=Gt,At=Math.sqrt(M/2))}return new at(Dt/At,st/At)}const mt=[];for(let Q=0,rt=H.length,w=rt-1,Dt=Q+1;Q<rt;Q++,w++,Dt++)w===rt&&(w=0),Dt===rt&&(Dt=0),mt[Q]=V(H[Q],H[w],H[Dt]);const Et=[];let Rt,wt=mt.concat();for(let Q=0,rt=L.length;Q<rt;Q++){const w=L[Q];Rt=[];for(let Dt=0,st=w.length,At=st-1,it=Dt+1;Dt<st;Dt++,At++,it++)At===st&&(At=0),it===st&&(it=0),Rt[Dt]=V(w[Dt],w[At],w[it]);Et.push(Rt),wt=wt.concat(Rt)}for(let Q=0;Q<p;Q++){const rt=Q/p,w=m*Math.cos(rt*Math.PI/2),Dt=g*Math.sin(rt*Math.PI/2)+v;for(let st=0,At=H.length;st<At;st++){const it=K(H[st],mt[st],Dt);ft(it.x,it.y,-w)}for(let st=0,At=L.length;st<At;st++){const it=L[st];Rt=Et[st];for(let Gt=0,bt=it.length;Gt<bt;Gt++){const b=K(it[Gt],Rt[Gt],Dt);ft(b.x,b.y,-w)}}}const Zt=g+v;for(let Q=0;Q<G;Q++){const rt=d?K(y[Q],wt[Q],Zt):y[Q];_?(R.copy(D.normals[0]).multiplyScalar(rt.x),A.copy(D.binormals[0]).multiplyScalar(rt.y),C.copy(x[0]).add(R).add(A),ft(C.x,C.y,C.z)):ft(rt.x,rt.y,0)}for(let Q=1;Q<=u;Q++)for(let rt=0;rt<G;rt++){const w=d?K(y[rt],wt[rt],Zt):y[rt];_?(R.copy(D.normals[Q]).multiplyScalar(w.x),A.copy(D.binormals[Q]).multiplyScalar(w.y),C.copy(x[Q]).add(R).add(A),ft(C.x,C.y,C.z)):ft(w.x,w.y,f/u*Q)}for(let Q=p-1;Q>=0;Q--){const rt=Q/p,w=m*Math.cos(rt*Math.PI/2),Dt=g*Math.sin(rt*Math.PI/2)+v;for(let st=0,At=H.length;st<At;st++){const it=K(H[st],mt[st],Dt);ft(it.x,it.y,f+w)}for(let st=0,At=L.length;st<At;st++){const it=L[st];Rt=Et[st];for(let Gt=0,bt=it.length;Gt<bt;Gt++){const b=K(it[Gt],Rt[Gt],Dt);_?ft(b.x,b.y+x[u-1].y,x[u-1].x+w):ft(b.x,b.y,f+w)}}}Z(),lt();function Z(){const Q=s.length/3;if(d){let rt=0,w=G*rt;for(let Dt=0;Dt<nt;Dt++){const st=B[Dt];Ut(st[2]+w,st[1]+w,st[0]+w)}rt=u+p*2,w=G*rt;for(let Dt=0;Dt<nt;Dt++){const st=B[Dt];Ut(st[0]+w,st[1]+w,st[2]+w)}}else{for(let rt=0;rt<nt;rt++){const w=B[rt];Ut(w[2],w[1],w[0])}for(let rt=0;rt<nt;rt++){const w=B[rt];Ut(w[0]+G*u,w[1]+G*u,w[2]+G*u)}}n.addGroup(Q,s.length/3-Q,0)}function lt(){const Q=s.length/3;let rt=0;Pt(H,rt),rt+=H.length;for(let w=0,Dt=L.length;w<Dt;w++){const st=L[w];Pt(st,rt),rt+=st.length}n.addGroup(Q,s.length/3-Q,1)}function Pt(Q,rt){let w=Q.length;for(;--w>=0;){const Dt=w;let st=w-1;st<0&&(st=Q.length-1);for(let At=0,it=u+p*2;At<it;At++){const Gt=G*At,bt=G*(At+1),b=rt+Dt+Gt,M=rt+st+Gt,z=rt+st+bt,j=rt+Dt+bt;Wt(b,M,z,j)}}}function ft(Q,rt,w){c.push(Q),c.push(rt),c.push(w)}function Ut(Q,rt,w){Vt(Q),Vt(rt),Vt(w);const Dt=s.length/3,st=S.generateTopUV(n,s,Dt-3,Dt-2,Dt-1);Qt(st[0]),Qt(st[1]),Qt(st[2])}function Wt(Q,rt,w,Dt){Vt(Q),Vt(rt),Vt(Dt),Vt(rt),Vt(w),Vt(Dt);const st=s.length/3,At=S.generateSideWallUV(n,s,st-6,st-3,st-2,st-1);Qt(At[0]),Qt(At[1]),Qt(At[3]),Qt(At[1]),Qt(At[2]),Qt(At[3])}function Vt(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function Qt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return d0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new $s[s.type]().fromJSON(s)),new Qo(n,t.options)}}const f0={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new at(r,o),new at(a,c),new at(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],d=t[s*3],m=t[s*3+1],g=t[s*3+2],v=t[r*3],p=t[r*3+1],h=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new at(o,1-c),new at(l,1-f),new at(d,1-g),new at(v,1-h)]:[new at(a,1-c),new at(u,1-f),new at(m,1-g),new at(p,1-h)]}};function d0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ta extends we{constructor(t=new Qs([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(r,3)),this.setAttribute("uv",new ie(o,2));function l(u){const f=s.length/3,d=u.extractPoints(e);let m=d.shape;const g=d.holes;Fn.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,h=g.length;p<h;p++){const S=g[p];Fn.isClockWise(S)===!0&&(g[p]=S.reverse())}const v=Fn.triangulateShape(m,g);for(let p=0,h=g.length;p<h;p++){const S=g[p];m=m.concat(S)}for(let p=0,h=m.length;p<h;p++){const S=m[p];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let p=0,h=v.length;p<h;p++){const S=v[p],x=S[0]+f,_=S[1]+f,D=S[2]+f;n.push(x,_,D),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return p0(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new ta(n,t.curveSegments)}}function p0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ui extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new P,d=new P,m=[],g=[],v=[],p=[];for(let h=0;h<=n;h++){const S=[],x=h/n;let _=0;h===0&&o===0?_=.5/e:h===n&&c===Math.PI&&(_=-.5/e);for(let D=0;D<=e;D++){const A=D/e;f.x=-t*Math.cos(s+A*r)*Math.sin(o+x*a),f.y=t*Math.cos(o+x*a),f.z=t*Math.sin(s+A*r)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),p.push(A+_,1-x),S.push(l++)}u.push(S)}for(let h=0;h<n;h++)for(let S=0;S<e;S++){const x=u[h][S+1],_=u[h][S],D=u[h+1][S],A=u[h+1][S+1];(h!==0||o>0)&&m.push(x,_,A),(h!==n-1||c<Math.PI)&&m.push(_,D,A)}this.setIndex(m),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qi extends we{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new P,f=new P,d=new P;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const v=g/s*r,p=m/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(v),f.y=(t+e*Math.cos(p))*Math.sin(v),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),d.subVectors(f,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const v=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,h=(s+1)*(m-1)+g,S=(s+1)*m+g;o.push(v,p,S),o.push(p,h,S)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ea extends we{constructor(t=new jo(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,c=new P,l=new at;let u=new P;const f=[],d=[],m=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ie(f,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(m,2));function v(){for(let x=0;x<e;x++)p(x);p(r===!1?e:0),S(),h()}function p(x){u=t.getPointAt(x/e,u);const _=o.normals[x],D=o.binormals[x];for(let A=0;A<=s;A++){const R=A/s*Math.PI*2,C=Math.sin(R),E=-Math.cos(R);c.x=E*_.x+C*D.x,c.y=E*_.y+C*D.y,c.z=E*_.z+C*D.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,f.push(a.x,a.y,a.z)}}function h(){for(let x=1;x<=e;x++)for(let _=1;_<=s;_++){const D=(s+1)*(x-1)+(_-1),A=(s+1)*x+(_-1),R=(s+1)*x+_,C=(s+1)*(x-1)+_;g.push(D,A,C),g.push(A,R,C)}}function S(){for(let x=0;x<=e;x++)for(let _=0;_<=s;_++)l.x=x/e,l.y=_/s,m.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ea(new $s[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class m0 extends ii{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new ee(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class je extends ii{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fl extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Hr=new fe,gc=new P,_c=new P;class g0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Go,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;gc.setFromMatrixPosition(t.matrixWorld),e.position.copy(gc),_c.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_c),e.updateMatrixWorld(),Hr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _0 extends g0{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class v0 extends fl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new _0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class x0 extends fl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class M0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=vc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function vc(){return performance.now()}const xc=new fe;class S0{constructor(t,e,n=0,s=1/0){this.ray=new nr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xc),this}intersectObject(t,e=!0,n=[]){return Io(t,this,n,e),n.sort(Mc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Io(t[s],this,n,e);return n.sort(Mc),n}}function Mc(i,t){return i.distance-t.distance}function Io(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Io(r[o],t,e,!0)}}class Sc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class y0 extends ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function E0(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.fillStyle="#909090",t.fillRect(0,0,256,256);let e=1729;const n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296);for(let f=0;f<12e3;f++){const d=90+Math.floor(n()*100);t.strokeStyle=`rgb(${d},${d},${d})`;const m=n()*256,g=n()*256;t.beginPath(),t.moveTo(m,g),t.lineTo(m+n()*2-1,g+1+n()*3),t.stroke()}const s=new sl(i);s.wrapS=s.wrapT=Xs,s.repeat.set(3,2);const r=new Ui(1,40,28),o=new Ui(1,5,3),a=new Map,c=[];function l(f,d){const m=`${f}:${d}`;return a.has(m)||a.set(m,new je({color:f,flatShading:!1,roughness:d==="eye"?.3:1,...d==="pile"?{transparent:!0,opacity:.38,depthWrite:!1}:{},...d==="fur"||d==="fabric"?{bumpMap:s,bumpScale:d==="fur"?.008:.004}:{}})),a.get(m)}function u(f,d,m,g,v,p,h=[1,1,1],S="fur"){const x=new Pe(r,l(d,S));if(x.position.set(m,g,v),x.scale.set(...h.map(_=>_*f)),x.castShadow=x.receiveShadow=!0,p.add(x),S==="fur"){const _=f>.3?1200:f>.15?300:140,D=new Um(o,l(d,"pile"),_),A=new Le,R=new P(0,1,0);for(let C=0;C<_;C++){const E=1-2*(C+.5)/_,y=C*Math.PI*(3-Math.sqrt(5)),L=Math.sqrt(1-E*E),k=new P(Math.cos(y)*L,E,Math.sin(y)*L);A.position.copy(k).multiplyScalar(.998),A.quaternion.setFromUnitVectors(R,k),A.scale.set(.004/f,(.004+n()*.003)/f,.004/f),A.updateMatrix(),D.setMatrixAt(C,A.matrix)}D.instanceMatrix.needsUpdate=!0,x.add(D),c.push(D)}return x}return{ball:u,dispose(){for(const f of c)f.dispose();r.dispose(),o.dispose(),s.dispose();for(const f of a.values())f.dispose()}}}const Os={todo:{terrain:"forest",color:"#3d6443",piece:"#a64331",number:5},note:{terrain:"grain",color:"#c5a14c",piece:"#386879",number:8},friends:{terrain:"pasture",color:"#8a9c52",piece:"#dfceb0",number:6},memories:{terrain:"mountain",color:"#8d8b81",piece:"#b67b32",number:9},home:{terrain:"clay",color:"#bd8059",piece:"#a64331",number:4},park:{terrain:"pasture",color:"#8a9c52",piece:"#386879",number:10}},kr=new Map;function T0(i=27){return()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296)}function dl(i){const t=new sl(i);return t.colorSpace=He,t.anisotropy=4,t}function na(i){if(kr.has(i))return kr.get(i);const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d"),n=T0(i.length*47+i.charCodeAt(0)),s={forest:"#426747",grain:"#c7a456",pasture:"#909e58",mountain:"#929187",clay:"#b77d55",sea:"#326c82",wood:"#987045"};e.fillStyle=s[i],e.fillRect(0,0,512,512);for(let o=0;o<6500;o++){const a=n();e.fillStyle=a>.5?"#fff5d208":"#2b25100b",e.fillRect(n()*512,n()*512,n()*3+1,n()*2+1)}if(e.lineCap="round",i==="grain"){for(let o=0;o<10;o++)e.strokeStyle=o%2?"#e2be67":"#9c7c38",e.lineWidth=13,e.beginPath(),e.moveTo(-20,o*59),e.bezierCurveTo(130,o*59-35,300,o*59+30,540,o*59-12),e.stroke();for(let o=0;o<180;o++){const a=n()*512,c=n()*512;e.strokeStyle="#f2d990",e.lineWidth=2,e.beginPath(),e.moveTo(a,c+10),e.lineTo(a,c-8),e.moveTo(a,c),e.lineTo(a-5,c-5),e.moveTo(a,c-4),e.lineTo(a+5,c-9),e.stroke()}}else if(i==="forest")for(let o=0;o<160;o++){const a=n()*512,c=n()*512,l=8+n()*17;e.fillStyle=["#294d37","#557b4a","#6c8850"][o%3],e.beginPath(),e.moveTo(a,c-l),e.lineTo(a-l*.65,c+l*.55),e.lineTo(a+l*.65,c+l*.55),e.fill()}else if(i==="pasture")for(let o=0;o<320;o++){const a=n()*512,c=n()*512;e.strokeStyle=o%3?"#64783e88":"#c5ca7b",e.lineWidth=1.5,e.beginPath(),e.moveTo(a-3,c-5),e.lineTo(a,c),e.lineTo(a+3,c-7),e.stroke()}else if(i==="mountain")for(let o=0;o<55;o++){const a=n()*512,c=n()*512,l=12+n()*28;e.fillStyle=o%2?"#6d756d":"#b4b3a0",e.beginPath(),e.moveTo(a-l,c+l*.5),e.lineTo(a,c-l),e.lineTo(a+l,c+l*.5),e.closePath(),e.fill(),e.strokeStyle="#dedac5",e.lineWidth=1,e.stroke()}else if(i==="clay")for(let o=0;o<14;o++)for(let a=0;a<12;a++)e.fillStyle=(a+o)%3?"#8f563b44":"#d9a57566",e.fillRect(a*48+o%2*24,o*38,43,30);else if(i==="sea")for(let o=0;o<140;o++){const a=n()*512,c=n()*512;e.strokeStyle="#b9d4c04d",e.lineWidth=1,e.beginPath(),e.moveTo(a,c),e.quadraticCurveTo(a+8,c+5,a+16,c),e.stroke()}else if(i==="wood")for(let o=0;o<70;o++)e.strokeStyle=o%3?"#402b151c":"#efca8c36",e.lineWidth=1+n()*2,e.beginPath(),e.moveTo(0,o*8),e.bezierCurveTo(190,o*8+n()*9,320,o*8-9,512,o*8+n()*5),e.stroke();const r=dl(t);return kr.set(i,r),r}function yc(i,t){i.material=[new je({color:"#b79456",roughness:1}),new je({map:na(t),roughness:1}),new je({color:"#805533",roughness:1})],i.userData.terrain=t}function Vr(){return new je({map:na("wood"),color:"#b99a70",roughness:1})}function b0(i){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d");e.fillStyle="#f3e2b8",e.fillRect(0,0,256,256),e.strokeStyle="#b39059",e.lineWidth=3,e.beginPath(),e.arc(128,128,111,0,Math.PI*2),e.stroke(),e.strokeStyle="#d4bb86",e.lineWidth=1,e.beginPath(),e.arc(128,128,101,0,Math.PI*2),e.stroke(),e.fillStyle=[6,8].includes(i)?"#9f3f2d":"#493624",e.font="bold 112px Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.fillText(String(i),128,117);const n={4:3,5:4,6:5,8:5,9:4,10:3}[i]||2;for(let s=0;s<n;s++)e.beginPath(),e.arc(128+(s-(n-1)/2)*17,187,4.4,0,Math.PI*2),e.fill();return dl(t)}function A0(i,t,{box:e,ball:n,cyl:s,mesh:r,top:o}){const a=new Se;a.position.set(t.terrain==="mountain"?-1.5:1.1,o+.12,t.terrain==="mountain"?3.6:-3.5),i.add(a),a.name="board-number-token",s(.99,.99,.12,"#90683d",0,0,0,a,48);const c=s(.92,.92,.05,"#f3e2b8",0,.085,0,a,48);c.material=[new je({color:"#d8bb82"}),new je({map:b0(t.number),roughness:1}),new je({color:"#d8bb82"})];for(const f of[Math.PI*.65,Math.PI*1.35]){const d=Math.sin(f)*6.3,m=Math.cos(f)*6.3;for(let g=0;g<3;g++){const v=e(1.14,.17,.22,t.piece,d+(g-1)*1.25*Math.cos(f),o+.1,m-(g-1)*1.25*Math.sin(f),i);v.rotation.y=f}}const l=[];for(let f=0;f<6;f++)l.push(new P(Math.sin(f*Math.PI/3)*6.98,o+.015,Math.cos(f*Math.PI/3)*6.98));const u=new Fm(new we().setFromPoints(l),new Yo({color:"#e6c88a"}));if(i.add(u),t.terrain==="grain")for(const[f,d]of[[-3.9,1.6],[3.7,3.3],[-.9,4.3]]){e(2.05,.045,1.3,"#a9853b",f,o+.04,d,i);for(let m=0;m<7;m++)e(.1,.18,1.2,"#d7b65d",f-.85+m*.28,o+.13,d,i);for(let m=0;m<3;m++)s(.21,.21,.45,"#d8b461",f-.5+m*.5,o+.27,d-.4,i,9)}else if(t.terrain==="mountain")for(const[f,d,m,g]of[[3.2,-3.4,3.5,1.7],[4.6,-2.8,2.3,1.2],[2.2,-4.3,2.4,1.25]]){const v=s(0,g,m,"#777e78",f,o+m/2,d,i,5);v.rotation.y=f;const p=s(0,g*.24,m*.27,"#e3dfc9",f,o+m*.87,d,i,5);p.rotation.y=f}else if(t.terrain==="pasture")for(const[f,d]of[[-4,1],[4,1.7]]){n(.28,"#e7dfc6",f,o+.35,d,i,[1.3,.85,.8]),n(.13,"#77755e",f+.32,o+.4,d,i);for(const m of[-.17,.17])for(const g of[-.12,.12])s(.025,.03,.2,"#69644d",f+m,o+.12,d+g,i,5)}else if(t.terrain==="clay")for(let f=0;f<3;f++)for(let d=0;d<4-f;d++)e(.5,.23,.32,f%2?"#9b5e3e":"#b7794d",3.1+d*.54+f*.2,o+.12+f*.23,2.6,i)}const pl={wander:"娃娃們正在各個小島之間散步",swing:"娃娃們在河畔公園一起盪鞦韆",play:"娃娃們在公園追球、一起玩耍"};function Ec(i,t=Math.random){const e=Object.keys(pl).filter(n=>n!==i);return e[Math.min(e.length-1,Math.floor(t()*e.length))]}function w0(i,t,e){const n=[[i]],s=new Set([i]);for(;n.length;){const r=n.shift(),o=r.at(-1);if(o===t)return r;for(const[a,c]of e){const l=a===o?c:c===o?a:null;l&&!s.has(l)&&(s.add(l),n.push([...r,l]))}}throw new Error(`No walking path between ${i} and ${t}`)}const Ee={id:"park",x:0,z:14.8,seats:[{x:1.45,z:3.8},{x:2.95,z:3.8}],pusher:{x:2.2,z:5.1},play:{x:-.7,z:3.7}};function R0(i,t,e,n,s,r){const o=w0(i,t,n),a=[s],c=l=>({x:l.x,z:l.z+1.6});for(let l=0;l<o.length-1;l++){const u=e.find(p=>p.id===o[l]),f=e.find(p=>p.id===o[l+1]),d=f.x-u.x,m=f.z-u.z,g=Math.hypot(d,m),v=5.64;a.push(c(u)),m<-1&&(u.id==="park"?a.push({x:u.x+.45,z:u.z+1.1},{x:u.x,z:u.z-2}):a.push({x:u.x+2.4,z:u.z+1.4},{x:u.x+2.4,z:u.z-2.1})),a.push({x:u.x+d/g*v,z:u.z+m/g*v},{x:f.x-d/g*v,z:f.z-m/g*v}),m>1&&(f.id==="park"?a.push({x:f.x,z:f.z-2},{x:f.x+.45,z:f.z+1.1}):a.push({x:f.x+2.4,z:f.z-2.1},{x:f.x+2.4,z:f.z+1.4})),a.push(c(f))}return a.push(r),a.filter((l,u)=>u===0||Math.hypot(l.x-a[u-1].x,l.z-a[u-1].z)>.001)}function C0({nodes:i,links:t,previous:e,random:n=Math.random}){const s=[0,1,2].sort(()=>n()-.5);let r=Ec(e,n),o=0,a=55+n()*15;const c=r,l=i.find(p=>p.id==="park"),u=p=>{const h=i.filter(S=>S.id!==p);return h[Math.floor(n()*h.length)%h.length]},f=[0,1,2].map(p=>({id:p,slot:s[p],phase:n()*Math.PI*2,x:0,z:0,yOffset:0,heading:0,node:"park",state:"waiting",goalMode:r,walkTime:0,playTime:0,swingTime:2,wait:0}));function d(p){if(r==="wander"){const S=u(p.node);return{node:S.id,point:{x:S.x,z:S.z+1.6},state:"waiting"}}if(r==="swing"){const S=p.slot<2?Ee.seats[p.slot]:Ee.pusher;return{node:"park",point:{x:l.x+S.x,z:l.z+S.z},state:p.slot<2?"swinging":"pushing"}}const h=p.slot*Math.PI*2/3;return{node:"park",point:{x:l.x+Ee.play.x+Math.cos(h)*1.2,z:l.z+Ee.play.z+Math.sin(h)*1.2},state:"playing"}}function m(p){const h=d(p);p.goalMode=r,p.target=h,p.route=R0(p.node,h.node,i,t,{x:p.x,z:p.z},h.point),p.routeIndex=1,p.state="walking",p.yOffset=0,p.swingAngle=0,p.playTime=0,p.swingTime=0}for(const p of f)if(r==="wander"){const h=i[(p.slot+Math.floor(n()*i.length))%i.length];p.node=h.id,p.x=h.x,p.z=h.z+1.6,m(p)}else{const h=d(p);p.node=h.node,p.x=h.point.x,p.z=h.point.z,p.state=h.state,p.target=h}function g(p){o+=p,o>=a&&(r=Ec(r,n),a=o+55+n()*15);for(const h of f)if(h.yOffset=0,h.swingAngle=0,h.state!=="walking"&&h.goalMode!==r&&m(h),h.state==="walking"){let S=p*.95;for(h.walkTime+=p;S>0&&h.routeIndex<h.route.length;){const x=h.route[h.routeIndex],_=x.x-h.x,D=x.z-h.z,A=Math.hypot(_,D);h.heading=Math.atan2(_,D),A<=S?(h.x=x.x,h.z=x.z,S-=A,h.routeIndex++):(h.x+=_/A*S,h.z+=D/A*S,S=0)}h.yOffset=Math.abs(Math.sin(h.walkTime*8))*.04,h.routeIndex>=h.route.length&&(h.node=h.target.node,h.state=h.target.state,h.wait=1.5+n()*3,h.playTime=0)}else if(h.state==="waiting")h.wait-=p,h.wait<=0&&m(h);else if(h.state==="swinging")h.swingTime+=p,h.swingAngle=Math.sin(h.swingTime*1.7+h.slot*.65)*.4*Math.min(1,h.swingTime/1.5),h.x=l.x+Ee.seats[h.slot].x,h.z=l.z+Ee.seats[h.slot].z+Math.sin(h.swingAngle)*1.75,h.yOffset=2.8-Math.cos(h.swingAngle)*1.75-.1,h.heading=0;else if(h.state==="pushing")h.heading=Math.PI,h.yOffset=Math.max(0,Math.sin(o*1.7))*.04;else if(h.state==="playing"){h.playTime+=p;const S=h.playTime*.62+h.slot*Math.PI*2/3;h.x=l.x+Ee.play.x+Math.cos(S)*1.2,h.z=l.z+Ee.play.z+Math.sin(S)*1.2,h.heading=-S,h.yOffset=Math.abs(Math.sin(h.playTime*5+h.slot))*.17}}function v(){return f.map(p=>({state:p.state,label:{walking:"跨島散步中",waiting:"在島上看風景",swinging:"在公園盪鞦韆",pushing:"陪朋友一起盪鞦韆",playing:"在公園一起玩球"}[p.state]}))}return{actors:f,update:g,descriptions:v,initialMode:c,get mode(){return r},get elapsed(){return o}}}const Tc={type:"change"},ia={type:"start"},ml={type:"end"},zs=new nr,bc=new Pn,P0=Math.cos(70*Si.DEG2RAD),Te=new P,Be=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gr=1e-6;class L0 extends y0{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:In.ROTATE,MIDDLE:In.DOLLY,RIGHT:In.PAN},this.touches={ONE:Dn.ROTATE,TWO:Dn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Jn,this._lastTargetPosition=new P,this._quat=new Jn().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sc,this._sphericalDelta=new Sc,this._scale=1,this._panOffset=new P,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new P,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=I0.bind(this),this._onPointerDown=D0.bind(this),this._onPointerUp=U0.bind(this),this._onContextMenu=k0.bind(this),this._onMouseWheel=O0.bind(this),this._onKeyDown=z0.bind(this),this._onTouchStart=B0.bind(this),this._onTouchMove=H0.bind(this),this._onMouseDown=N0.bind(this),this._onMouseMove=F0.bind(this),this._interceptControlDown=V0.bind(this),this._interceptControlUp=G0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tc),this.update(),this.state=ue.NONE}update(t=null){const e=this.object.position;Te.copy(e).sub(this.target),Te.applyQuaternion(this._quat),this._spherical.setFromVector3(Te),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Be:n>Math.PI&&(n-=Be),s<-Math.PI?s+=Be:s>Math.PI&&(s-=Be),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Te.setFromSpherical(this._spherical),Te.applyQuaternion(this._quatInverse),e.copy(this.target).add(Te),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Te.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Te.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(zs.origin.copy(this.object.position),zs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zs.direction))<P0?this.object.lookAt(this.target):(bc.setFromNormalAndCoplanarPoint(this.object.up,this.target),zs.intersectPlane(bc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Gr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gr||this._lastTargetPosition.distanceToSquared(this.target)>Gr?(this.dispatchEvent(Tc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Be/60*this.autoRotateSpeed*t:Be/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Te.setFromMatrixColumn(e,0),Te.multiplyScalar(-t),this._panOffset.add(Te)}_panUp(t,e){this.screenSpacePanning===!0?Te.setFromMatrixColumn(e,1):(Te.setFromMatrixColumn(e,0),Te.crossVectors(this.object.up,Te)),Te.multiplyScalar(t),this._panOffset.add(Te)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Te.copy(s).sub(this.target);let r=Te.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new at,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function D0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function I0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function U0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ml),this.state=ue.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function N0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case In.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ue.DOLLY;break;case In.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}break;case In.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(ia)}function F0(i){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function O0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(i.preventDefault(),this.dispatchEvent(ia),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ml))}function z0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function B0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Dn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ue.TOUCH_ROTATE;break;case Dn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case Dn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ue.TOUCH_DOLLY_PAN;break;case Dn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(ia)}function H0(i){switch(this._trackPointer(i),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ue.NONE}}function k0(i){this.enabled!==!1&&i.preventDefault()}function V0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function G0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function W0(i,t,e,n=()=>t("todo")){const s=i.querySelector("canvas"),r=new Pm({canvas:s,antialias:!0,alpha:!0});r.setClearColor(16316656,0),r.setPixelRatio(Math.min(devicePixelRatio,1.5)),r.shadowMap.enabled=!0,r.shadowMap.type=wc,r.outputColorSpace=He,r.toneMapping=Cc,r.toneMappingExposure=1.05;const o=new Lm,a=new Wo(-13,13,10,-10,.1,240);a.position.set(42,53,65);let c=innerWidth<=760?1.4:1;a.zoom=c;const l=new L0(a,s);l.enableDamping=!0,l.minZoom=.68,l.maxZoom=8,l.enablePan=!0,l.screenSpacePanning=!1,l.minPolarAngle=.4,l.maxPolarAngle=1.22,l.target.set(0,.1,1.8),l.rotateSpeed=.55,l.update(),l.saveState(),o.add(new x0(16773846,1.55));const u=new v0(16773330,2.5);u.position.set(-25,55,32),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-40,right:40,top:40,bottom:-40,near:1,far:130}),u.shadow.normalBias=.06,u.shadow.bias=-1e-4,o.add(u);const f=new Map;function d(U){return f.has(U)||f.set(U,new je({color:U,roughness:1,flatShading:!0})),f.get(U)}function m(U,O,$=o){const ut=new Pe(U,d(O));return ut.castShadow=ut.receiveShadow=!0,$.add(ut),ut}function g(U,O,$,ut,ht=0,ot=0,et=0,dt=o){const Lt=m(new Oi(U,O,$),ut,dt);return Lt.position.set(ht,ot,et),Lt}function v(U,O,$,ut,ht,ot=o,et=[1,1,1]){const dt=m(new Ui(U,12,9),O,ot);return dt.position.set($,ut,ht),dt.scale.set(...et),dt}function p(U,O,$,ut,ht,ot,et,dt=o,Lt=12){const kt=m(new $o(U,O,$,Lt),ut,dt);return kt.position.set(ht,ot,et),kt}const h=2.4,S=.67,x=[{id:"home",x:0,z:0,c:"#afc588"},{id:"todo",x:-5.75,z:0,c:"#a9c28e"},{id:"note",x:-2.88,z:-5.05,c:"#bdc88f"},{id:"friends",x:2.88,z:-5.05,c:"#abc597"},{id:"memories",x:5.75,z:0,c:"#bac99e"}],_={},D=[];x.forEach(U=>{U.x*=h*.9,U.z*=h*.9;const O=new Se;O.position.set(U.x,0,U.z),o.add(O),_[U.id]=O,O.userData.playerColor=Os[U.id].piece;for(const[$,ut,ht,ot,et]of[[2.95,2.65,1.18,"#c8ae80",-.12],[3.04,2.95,.23,"#efdeb1",.38],[2.93,3.02,.22,U.c,.56]]){const dt=p($*h,ut*h,ht,ot,0,et,0,O,6);dt.rotation.y=0,et===-.12&&(dt.material=Vr()),et===.56&&(yc(dt,Os[U.id].terrain),dt.userData.id=U.id,D.push(dt))}for(let $=0;$<8;$++){const ut=$*Math.PI/4;v(.17,"#bfa984",Math.cos(ut)*2.65*h,-.5,Math.sin(ut)*2.65*h,O,[1,.6,.7])}});for(const[U,O,$,ut]of[[48.4,-1.12,.45,"#68462e"],[47.9,-.88,.1,"#c5a56c"],[47.3,-.81,.06,"#347387"]]){const ht=p(U,U,$,ut,0,O,1,o,6);ht.rotation.y=0,U===47.3&&(ht.material=[d("#28566b"),new je({map:na("sea"),roughness:1}),d("#28566b")]),U===48.4&&(ht.material=Vr())}const A=new Pe(new os(140,140),new m0({opacity:.12}));A.rotation.x=-Math.PI/2,A.position.y=-1.38,A.receiveShadow=!0,o.add(A);function R(U,O,$,ut,ht=0){const ot=new Se;if(ot.position.set(U,S,O),ot.scale.setScalar($),ut.add(ot),p(.12,.18,1.2,"#94775c",0,.6,0,ot,7),ht===1)for(let et=0;et<3;et++)p(0,.85-et*.17,1.25-et*.13,["#35563c","#426749","#6c8550"][et],0,1.35+et*.53,0,ot,7);else{const et=m(new Js(.95,0),"#426447",ot);if(et.position.set(0,1.8,0),et.scale.y=1.2,m(new Js(.62,0),"#58794c",ot).position.set(-.3,2.3,0),ht===2)for(let Lt=0;Lt<5;Lt++){let kt=Lt*2.4;v(.14,"#df9b70",Math.sin(kt)*.78,1.7+Math.cos(Lt*3)*.45,Math.cos(kt)*.65,ot)}}}function C(U,O,$,ut="#f6e3ab",ht=9){for(let ot=0;ot<ht;ot++){const et=new Se;et.position.set(U+Math.sin(ot*3.88)*.55,S,O+Math.cos(ot*3.88)*.55),et.rotation.y=ot*2,$.add(et),p(.015,.018,.27,"#849461",0,.12,0,et,5);for(let dt=0;dt<5;dt++){const Lt=dt*Math.PI*2/5;v(.065,ut,Math.cos(Lt)*.075,.3+Math.sin(Lt)*.075,0,et,[1,1,.55])}v(.04,"#dcba66",0,.3,.025,et)}}function E(U,O,$,ut,ht=0){const ot=new Se;ot.position.set(U,S,O),ot.rotation.y=ht,ut.add(ot);for(let et=0;et<=$;et++)g(.1,.63,.1,"#b59a70",et*.5,.31,0,ot),v(.07,"#ccb48b",et*.5,.65,0,ot);for(const et of[.2,.43])g($*.5,.08,.07,"#b59a70",$*.25,et,0,ot)}function y(U,O,$,ut,ht){g($,.035,ut,"#c9ad77",U,S+.01,O,ht)}function L(U,{x:O=0,z:$=0,w:ut=2.2,h:ht=1.7,d:ot=1.7}={}){const et=new Se;et.position.set(O,S,$),U.add(et);const dt=U.userData.playerColor||"#a64331",Lt=g(ut,ht*.75,ot,dt,0,ht*.375,0,et),kt=new Qs;kt.moveTo(-ut/2-.04,0),kt.lineTo(0,ht*.55),kt.lineTo(ut/2+.04,0),kt.closePath();const pe=m(new Qo(kt,{depth:ot+.08,bevelEnabled:!1}),dt,et);pe.position.set(0,ht*.75,-ot/2-.04);for(const ne of[Lt,pe]){const re=new Nm(new Zm(ne.geometry),new Yo({color:new ee(dt).multiplyScalar(.65),transparent:!0,opacity:.4}));ne.add(re)}g(ut*.19,ht*.34,.025,new ee(dt).multiplyScalar(.65).getStyle(),0,ht*.17,ot/2+.018,et),U===_.home&&g(ut*.48,ht*1.05,ot*.7,dt,ut*.58,ht*.525,-.1,et)}function k(U,O,$,ut=0){const ht=new Se;$.add(ht),ht.position.set(U,S,O),ht.rotation.y=ut;for(let ot=0;ot<3;ot++)g(1.1,.075,.11,"#b28d63",0,.4,ot*.13,ht);for(const ot of[.73,.9])g(1.1,.12,.08,"#b28d63",0,ot,-.05,ht);for(const ot of[-.4,.4])g(.08,.45,.08,"#788371",ot,.2,.12,ht),g(.06,.8,.06,"#788371",ot,.5,-.05,ht)}function B(U,O,$){p(.035,.06,1.55,"#7b8370",U,S+.77,O,$,8),g(.3,.34,.3,"#fff1c5",U,S+1.57,O,$),p(0,.25,.22,"#73816b",U,S+1.85,O,$,4)}const H=_.home;y(0,1.3,.75,2.5,H),y(1.5,.85,2.5,.65,H),L(H,{z:-.6,w:2.35,h:1.65,d:1.9}),R(-1.9,-1.05,.86,H,2),R(1.9,-1.4,.86,H),C(-1.6,1.55,H),C(1.6,1.5,H,"#e7a49a"),E(-1,-2.25,4,H),B(-.8,1.8,H),g(.34,.3,.4,"#7e9a87",.83,1.33,1.8,H),p(.045,.045,.6,"#b09876",.83,.94,1.8,H);const K=_.todo;L(K,{x:-.4,z:-.7,w:1.8,h:1.3,d:1.5}),y(.1,1,.65,2.4,K),R(-1.8,.35,.77,K,1),R(.9,-1.7,.9,K,2),k(1.35,.65,K,-.3),E(-1.3,1.9,3,K),C(-1.5,1.2,K),C(1.8,-.5,K,"#faf1d3",7);const G=_.note;L(G,{z:-.3,w:1.9,h:1.4,d:1.5}),y(0,1.2,.65,2.1,G),R(-1.8,-.6,.92,G),R(1.8,-1.1,.7,G,1),p(.53,.53,.1,"#d2af7d",1.4,1.13,1.05,G),p(.09,.14,.47,"#ae8b63",1.4,.87,1.05,G);for(const[U,O]of[[.7,1.3],[1.9,1.65]])p(.25,.28,.45,"#d7b981",U,.85,O,G);g(.27,.04,.35,"#f9eed5",1.4,1.21,1.05,G),C(-1.65,1.3,G,"#e2a395"),E(-1.3,-2.15,5,G);const nt=_.friends;y(0,.5,.9,4.8,nt),R(-1.65,-1.2,1.05,nt,1),R(1.7,-.7,.88,nt,2),R(.7,-2,.75,nt),k(-1.4,.6,nt,.7),C(1.5,1.5,nt,"#eed38b",11),C(-1.7,1.5,nt,"#faf2d5",10),E(-.8,-2.2,4,nt);const V=_.memories;R(1.5,-1.3,1.03,V,2),R(-.8,-1.8,.8,V),g(1.8,.035,1.45,"#edc7b3",-.15,S+.03,.25,V);for(let U=0;U<5;U++)g(.07,.015,1.45,"#fff0d7",-.9+U*.36,S+.055,.25,V);for(let U=0;U<4;U++)g(1.8,.015,.06,"#fff0d7",-.15,S+.06,-.3+U*.35,V);g(.45,.32,.32,"#c5a174",.25,.86,.25,V),m(new Qi(.17,.03,6,12,Math.PI),"#aa895e",V).position.set(.25,1.04,.25),g(.3,.19,.15,"#6d7b70",-.5,.79,.48,V);const Et=p(.07,.07,.08,"#455950",-.5,.8,.59,V);Et.rotation.x=Math.PI/2,k(-1.7,.2,V,.9),C(1.5,.9,V,"#d5b1bc",11),C(-.9,1.8,V),E(.4,1.9,3,V),B(-1.3,1.2,V);function Rt(U,O){const $=O.x-U.x,ut=O.z-U.z,ht=Math.max(.8,Math.hypot($,ut)-4.7*h),ot=new Se;ot.position.set((U.x+O.x)/2,S-.05,(U.z+O.z)/2),ot.rotation.y=Math.atan2($,ut),o.add(ot);for(let et=0;et<8;et++)g(.75,.1,ht/8*.88,"#c9a878",0,0,-ht/2+(et+.5)*ht/8,ot);for(const et of[-1,1]){for(const dt of[-ht/2,ht/2])p(.04,.05,.55,"#b89c73",et*.41,.23,dt,ot,6);g(.055,.055,ht,"#d8ba8b",et*.41,.46,0,ot)}}[[0,1],[0,2],[0,3],[0,4],[2,3]].forEach(([U,O])=>Rt(x[U],x[O]));const wt=new Se;wt.position.set(0,0,Ee.z),wt.userData.playerColor=Os.park.piece,wt.name="riverside-park",o.add(wt);for(const[U,O,$,ut,ht]of[[7.08,6.36,1.18,"#c8ae80",-.12],[7.3,7.08,.23,"#efdeb1",.38],[7.03,7.25,.22,"#b4c991",.56]]){const ot=p(U,O,$,ut,0,ht,0,wt,6);ot.rotation.y=0,ht===-.12&&(ot.material=Vr()),ht===.56&&yc(ot,"pasture")}Rt(x[0],{x:0,z:Ee.z});for(let U=0;U<12;U++)g(1.4,.12,.24,"#c4a579",14.8,-.12,7+U*.25);for(const U of[14.15,15.45])for(const O of[7,9.8])p(.08,.09,.65,"#ae906b",U,-.13,O);const Zt=new Se;Zt.position.set(16.8,-.46,10.2),Zt.rotation.y=-.6,o.add(Zt),v(.6,"#e9d3a3",0,0,0,Zt,[.55,.35,1.5]),g(.5,.08,1.2,"#b29368",0,.08,0,Zt),g(.52,.06,.17,"#dfc596",0,.19,.2,Zt),p(.02,.025,1.7,"#b99b71",0,.85,-.15,Zt);const Z=new Qs;Z.moveTo(0,0),Z.lineTo(0,1.25),Z.lineTo(.73,.1),Z.closePath();const lt=new Pe(new ta(Z),new je({color:"#fff2d8",side:en}));lt.position.set(.03,.4,-.15),Zt.add(lt);const Pt=[];function ft(U,O,$,ut,ht){const ot=U.getPoints(70),et=[],dt=[];ot.forEach((pe,ne)=>{const re=U.getTangent(ne/70),De=new P(-re.z,0,re.x).normalize();for(const ve of[-1,1])et.push(pe.x+De.x*O*ve/2,$,pe.z+De.z*O*ve/2);if(ne<70){const ve=ne*2;dt.push(ve,ve+2,ve+1,ve+1,ve+2,ve+3)}});const Lt=new we;Lt.setAttribute("position",new ie(et,3)),Lt.setIndex(dt),Lt.computeVertexNormals();const kt=m(Lt,ut,ht);return kt.material=new je({color:ut,roughness:.8,side:en}),kt.castShadow=!1,kt}function Ut(U,O,$=.75){const ut=new Po(U.map(([ht,ot])=>new P(ht,0,ot)));ft(ut,$,S+.025,"#e5d6ad",O)}function Wt(U,O,$=1){const ut=new Po(U.map(([ot,et])=>new P(ot,0,et)));ft(ut,$+.32,S+.035,"#e9dbb6",O);const ht=ft(ut,$,S+.06,"#91c6bb",O);ht.name="winding-river";for(let ot=0;ot<7;ot++){const et=new Pe(new Ko(.11,10),new Zs({color:"#d9eee0",transparent:!0,opacity:.7}));et.rotation.x=-Math.PI/2,et.scale.set(2.5,.4,1),O.add(et),Pt.push({glint:et,curve:ut,offset:ot/7})}return ut}function Vt(U,O,$,ut){const ht=v(1,"#858b53",U,S-.1,O,ut,[$,$*.65,$*.82]);ht.name="grassy-hill",v(1,"#a1a267",U-$*.5,S-.12,O+$*.2,ut,[$*.7,$*.4,$*.67]),R(U-$*.8,O-.5,.9,ut,1)}function Qt(U,O,$,ut=0){const ht=new Se;ht.position.set(U,S+.18,O),ht.rotation.y=ut,$.add(ht);for(let ot=0;ot<12;ot++)g(.95,.1,.15,"#c4a071",0,Math.sin(ot/11*Math.PI)*.15,-.9+ot*.16,ht);for(const ot of[-1,1]){for(const et of[-.9,0,.9])p(.04,.05,.68,"#ae8f68",ot*.5,.33,et,ht,6);g(.055,.06,1.9,"#d6b789",ot*.5,.65,0,ht)}}Object.entries(_).forEach(([U,O],$)=>{Ut([[-5.6,0],[-3.4,.4],[0,1.6],[3.8,1],[5.7,0]],O),Vt(-3.6,-3.25,1.65,O);for(let ut=0;ut<7;ut++){const ht=.3+ut*.82;R(Math.cos(ht)*5,Math.sin(ht)*4.7,.72+ut%3*.16,O,ut%3===0?1:0)}k(3.8,2.8,O,-.6),B(3.3,2.6,O),C(-3.7,2.7,O,$%2?"#eab5a5":"#f2e5b1",6),C(3.2,-3,O,"#d1b4c9",6),E(-2.5,4.9,5,O)}),Wt([[-6,1.4],[-4.2,2],[-2.4,3.2],[0,3.5],[2.6,3],[4.5,2.2],[6,1.3]],H,1.05),Qt(.2,3.5,H,.2),Ut([[0,1.5],[.2,3.5],[0,5.9]],H,.8),L(K,{x:3.5,z:-2.8,w:1.65,h:1.25,d:1.4}),L(G,{x:3.7,z:1,w:1.5,h:1.25,d:1.3}),Vt(3.4,-3.4,1.5,V),Wt([[-6.1,-1.1],[-4,-.8],[-2,.3],[0,1.2],[2.1,.8],[4,-.4],[6.1,-1.2]],wt,1.4),Vt(-2.6,-3.4,2,wt),Vt(2,-3.8,1.5,wt),Ut([[-4.9,1.2],[-2.5,2.4],[0,3.2],[3,2.8],[4.8,1.4]],wt,.9),Ut([[0,-6],[.4,-3],[.5,0],[.3,3.2],[0,5.6]],wt,.8),Qt(.45,1.1,wt,.05),Qt(-4.3,-.8,wt,-.5);for(const[U,O]of[[-5,-2.6],[-4,3.3],[-2.7,4.5],[4.9,2.4],[4.7,-3.1]])R(U,O,.85,wt);for(const[U,O,$]of[[-2,2.2,.1],[2.8,-1.4,-.3],[-4.5,1.4,1.1]])k(U,O,wt,$);C(-2,3.9,wt,"#e7b6b3",8),C(3.9,1.9,wt,"#f7e8ad",8),B(-1.3,2.3,wt),B(2.8,2.4,wt),p(1.05,1.1,.14,"#e8d6b0",-3.8,S+.1,2.7,wt,6);for(let U=0;U<6;U++){const O=U*Math.PI/3;p(.045,.06,1.6,"#c8ac7b",-3.8+Math.cos(O)*.82,S+.95,2.7+Math.sin(O)*.82,wt,6)}p(0,1.25,.85,"#ba8c70",-3.8,S+2.05,2.7,wt,6);for(const[U,O]of Object.entries({..._,park:wt}))A0(O,Os[U],{box:g,ball:v,cyl:p,mesh:m,top:S});i.dataset.artStyle="catan-inspired",i.dataset.landAreaMultiplier=String(h**2),i.dataset.scenery="park hills river";function Q(U,O,$,ut,ht){const ot=new P(...U),et=new P(...O),dt=et.clone().sub(ot),Lt=p($,$,dt.length(),ut,0,0,0,ht,8);return Lt.position.copy(ot.add(et).multiplyScalar(.5)),Lt.quaternion.setFromUnitVectors(new P(0,1,0),dt.normalize()),Lt}const rt=new Se;wt.add(rt),rt.name="park-swings";for(const U of[.65,3.75])for(const O of[2.85,4.75])Q([U,S,O],[U,S+2.9,3.8],.075,"#b69a70",rt);Q([.4,S+2.9,3.8],[4,S+2.9,3.8],.1,"#c3a77d",rt);const w=Ee.seats.map(U=>{const O=new Se;O.position.set(U.x,S+2.8,U.z),rt.add(O);for(const $ of[-.29,.29])p(.018,.018,1.75,"#8f967d",$,-.875,0,O,6);return g(.8,.1,.48,"#ccac7d",0,-1.75,0,O),O}),Dt=v(.22,"#e2b187",Ee.play.x,S+.23,Ee.play.z,wt);Dt.name="residents-play-ball";const st=m(new Qi(.221,.018,5,16),"#fff0d1",Dt);st.rotation.x=.6;let At;try{At=sessionStorage.getItem("little-island-last-activity")}catch{}const it=C0({nodes:[...x,Ee],links:[["home","todo"],["home","note"],["home","friends"],["home","memories"],["note","friends"],["home","park"]],previous:At});try{sessionStorage.setItem("little-island-last-activity",it.initialMode)}catch{}const Gt=document.querySelector("#resident-activity");function bt(){i.dataset.residentActivity=it.mode,Gt&&(Gt.textContent=pl[it.mode])}bt(),it.update(0);for(const[U,O]of[[0,2],[0,3],[2,3]]){const $=x[U],ut=x[O],ht=Math.hypot(ut.x-$.x,ut.z-$.z);for(const[ot,et]of[[$,ut],[ut,$]]){const dt=(et.x-ot.x)/ht,Lt=(et.z-ot.z)/ht,kt=[[0,1.6]];Lt<-.1&&kt.push([2.4,1.4],[2.4,-2.1]),kt.push([dt*5.64,Lt*5.64]),Ut(kt,_[ot.id],.65)}}const b=[],M=E0();function z(U,O,$,ut,ht,ot,et){const dt=new Se,Lt=(ne,re,De,ve,rn,rr,or)=>M.ball(ne,re,De,ve,rn,rr,or,re===O||re==="#f3e6cb"?"fur":re===$?"fabric":"smooth");ut.add(dt),dt.scale.setScalar(.85),Lt(.32,O,0,.43,0,dt,[1,1.2,.8]),Lt(.445,O,0,1.02,.025,dt,[1,.9,.9]);const kt=[];for(const ne of[-1,1]){if(U==="rabbit"){const re=Lt(.115,O,ne*.2,1.5,0,dt,[1,2.6,.8]);re.rotation.z=ne*-.14,Lt(.065,"#e0b9ab",ne*.2,1.54,.075,dt,[1,2.7,.4])}else Lt(.145,O,ne*.31,1.28,0,dt),Lt(.08,"#d3b99d",ne*.31,1.28,.09,dt);M.ball(.035,"#382d27",ne*.145,1.07,.398,dt,[1,1.1,.55],"eye"),M.ball(.009,"#fff8e9",ne*.145-.009,1.082,.414,dt,[1,1,.5],"eye"),Lt(.065,"#d9a398",ne*.27,.96,.35,dt,[1,.5,.25]),kt.push(Lt(.12,O,ne*.34,.52,0,dt,[.8,1.5,.8]))}Lt(.2,"#f3e6cb",0,.93,.355,dt,[1,.7,.35]),Lt(.04,"#67533f",0,.98,.435,dt,[1,.7,.7]);for(const ne of[-1,1]){const re=new jo(new P(0,.952,.436),new P(ne*.025,.91,.435),new P(ne*.052,.938,.424)),De=new Pe(new ea(re,12,.007,6,!1),d("#67533f"));dt.add(De)}Lt(.28,$,0,.5,.015,dt,[1,1,.88]),Lt(.04,"#e8cf85",0,.56,.25,dt);const pe=[Lt(.135,O,-.18,.1,.08,dt,[1,.7,1.4]),Lt(.135,O,.18,.1,.08,dt,[1,.7,1.4])];dt.position.set(ht,S,ot),b.push({g:dt,feet:pe,arms:kt})}z("bear","#bb956e","#90a080",o,0,0),z("rabbit","#f0e0c9","#d9a28f",o,0,0),z("bear","#a9b18a","#d8bc7c",o,0,0);const j=[];for(const[U,O,$,ut]of[[-9,5,-7,1],[7,6,-6,.7],[-7,4,6,.6]]){const ht=new Se;ht.position.set(U*h,O+2,$*h),ht.scale.setScalar(ut*1.4),o.add(ht);for(const[ot,et,dt,Lt]of[[0,0,0,.8],[-.7,-.1,0,.55],[.65,-.1,.1,.6],[.2,.3,0,.6]]){const kt=v(Lt,"#fff9e9",ot,et,dt,ht,[1,.63,.75]);kt.castShadow=!1}j.push({g:ht,x:U*h})}for(let U=0;U<12;U++){const O=U*2.4,$=new Pe(new Qi(.25+U%3*.08,.015,4,24,Math.PI*1.4),new Zs({color:"#eff6e5",transparent:!0,opacity:.55}));$.rotation.x=-Math.PI/2,$.rotation.z=O,$.position.set(Math.cos(O)*(9+U%3)*h,-.78,(Math.sin(O)*(7+U%3)-.4)*h),o.add($)}const tt=x.find(U=>U.id==="todo"),Y=new Se;Y.position.set(tt.x-2.8,10.8,tt.z+1.2),Y.visible=!1,o.add(Y),Y.name="todo-reminder-balloon";const gt=[v(.95,"#e9c36c",0,0,0,Y,[1,1.18,1])];for(let U=0;U<4;U++){const O=m(new Ui(.956,8,12,U*Math.PI/2,.3),"#f6df9b",Y);O.scale.y=1.18,gt.push(O)}p(.25,.22,.36,"#bb9970",0,-1.65,0,Y,8);for(const U of[-.23,.23])for(const O of[-.18,.18])p(.014,.014,.7,"#ae9575",U,-1.19,O,Y,5);const St=new Se;St.position.set(.43,.05,.84),Y.add(St),g(.13,.48,.035,"#fff8da",0,.12,0,St),v(.075,"#fff8da",0,-.27,0,St,[1,1,.3]);const Jt=i.querySelector("#todo-reminder");i.dataset.renderMode="three";const Ct=[["todo","待辦事項島","一步一步，慢慢來",-5.75,1.9,1.4],["note","記事本島","留住想說的話",-2.88,3.9,-5.05],["friends","家人朋友島","今天也一起散步",2.88,3.8,-5.05],["memories","美好回憶島","收藏閃閃發光的日子",5.75,2.2,.4]].map(([U,O,$,ut,ht,ot])=>{const et=document.createElement("button");return et.className="map-label label-"+U,et.innerHTML=`<span class="label-symbol">${e(U)}</span><span><strong>${O}</strong><small>${$}</small></span><span class="label-arrow">↗</span>`,et.onclick=()=>t(U),i.querySelector("#world-labels").append(et),{el:et,point:new P(ut*h*.9,ht+1,ot*h*.9)}}),Ht=document.createElement("div");Ht.className="home-label",Ht.textContent="✿ 中央河畔公園",i.querySelector("#world-labels").append(Ht);let Nt=1,xt=1;function te(){if(Nt=i.clientWidth,xt=i.clientHeight,!Nt||!xt)return;r.setSize(Nt,xt,!1);const U=Nt<600?1.4:1;a.zoom===c&&(a.zoom=U),c=U;const O=Nt/xt,$=Nt<600?25/Math.min(O,1):22;a.left=-$*O,a.right=$*O,a.top=$,a.bottom=-$,a.updateProjectionMatrix()}const qt=new ResizeObserver(te);qt.observe(i),te();const le=new M0,I=matchMedia("(prefers-reduced-motion: reduce)").matches;let _t=0,q=0,J,yt=0;function Mt(){if(J=requestAnimationFrame(Mt),document.hidden||document.body.classList.contains("modal-open"))return;const U=le.getElapsedTime();l.update();const O=Math.min(.05,Math.max(0,U-yt));yt=U;const $=I?0:U,ut=it.mode;I||it.update(O),ut!==it.mode&&bt();{b.forEach((dt,Lt)=>{const kt=it.actors[Lt];let pe=0;for(const re of[{x:.2,z:3.5},{x:.45,z:Ee.z+1.1}])kt.state==="walking"&&Math.abs(kt.x-re.x)<.55&&Math.abs(kt.z-re.z)<1&&(pe=.28+Math.cos((kt.z-re.z)*Math.PI/2)*.1);dt.g.position.set(kt.x,S+kt.yOffset+pe,kt.z),dt.g.rotation.set(0,kt.heading,0);const ne=kt.state==="swinging";dt.feet.forEach((re,De)=>{re.position.y=ne?.23:.1,re.position.z=ne?.3:.08+(kt.state==="walking"?Math.sin(kt.walkTime*8+De*Math.PI)*.09:0)}),dt.arms.forEach((re,De)=>{re.rotation.x=ne?-1.1:kt.state==="pushing"?-.8+Math.sin($*1.7)*.25:0,re.rotation.z=kt.state==="playing"?Math.sin($*4+De)*.5:0}),!I&&U<_t&&Lt===q&&!ne&&(dt.g.position.y+=Math.abs(Math.sin(U*8))*.14,dt.arms[1].rotation.z=-1.2+Math.sin(U*7)*.4)}),w.forEach((dt,Lt)=>{const kt=it.actors.find(pe=>pe.slot===Lt&&pe.state==="swinging");dt.rotation.x=-((kt==null?void 0:kt.swingAngle)||0)});const et=it.actors.some(dt=>dt.state==="playing");Dt.position.set(Ee.play.x+(et?Math.cos(it.elapsed*1.1)*.75:0),S+.23+(et?Math.abs(Math.sin(it.elapsed*3))*.45:0),Ee.play.z+(et?Math.sin(it.elapsed*1.1)*.75:0)),Dt.rotation.z=et?it.elapsed*2:0,I||(j.forEach((dt,Lt)=>dt.g.position.x=dt.x+Math.sin(U*.07+Lt)*.4),Zt.position.y=-.45+Math.sin(U*1.3)*.035,Zt.rotation.z=Math.sin(U)*.025)}for(const et of Pt){const dt=et.curve.getPoint(((I?0:U)*.025+et.offset)%1);et.glint.position.set(dt.x,S+.08,dt.z)}if(Y.visible){const et=Nt<600?12.8:10.8;Y.position.y=et+(I?0:Math.sin(U*.8)*.15),Y.rotation.z=I?0:Math.sin(U*.55)*.025,St.lookAt(a.position);const dt=new P(Y.position.x,et-2.1,Y.position.z).project(a),Lt=Jt.offsetWidth/2+8,kt=Si.clamp((dt.x*.5+.5)*Nt,Lt,Nt-Lt),pe=Si.clamp((-dt.y*.5+.5)*xt,135,xt-60);Jt.style.transform=`translate(-50%,0) translate(${kt}px,${pe}px)`}const ht=[];for(const et of Ct){const dt=et.point.clone().project(a),Lt=et.el.offsetWidth/2+8,kt=Si.clamp((dt.x*.5+.5)*Nt,Lt,Nt-Lt),pe=et.el.offsetHeight,ne=Si.clamp((-dt.y*.5+.5)*xt,pe+95,xt-20),re=[ne];for(let ve=pe+95;ve<=xt-20;ve+=pe+8)re.push(ve);re.sort((ve,rn)=>Math.abs(ve-ne)-Math.abs(rn-ne));const De=re.find(ve=>ht.every(rn=>kt+Lt<=rn.left||kt-Lt>=rn.right||ve+8<=rn.top||ve-pe>=rn.bottom+8))??ne;ht.push({left:kt-Lt,right:kt+Lt,top:De-pe,bottom:De}),et.el.style.transform=`translate(-50%,-100%) translate(${kt}px,${De}px)`}const ot=new P(0,1.1,Ee.z).project(a);Ht.style.transform=`translate(-50%,0) translate(${(ot.x*.5+.5)*Nt}px,${(-ot.y*.5+.5)*xt}px)`,r.render(o,a)}Mt(),i.querySelector(".world-loading").remove();const Xt=new S0;let de;return s.addEventListener("pointerdown",U=>de={x:U.clientX,y:U.clientY}),s.addEventListener("pointerup",U=>{if(!de||Math.hypot(U.clientX-de.x,U.clientY-de.y)>6)return;const O=s.getBoundingClientRect();Xt.setFromCamera(new at((U.clientX-O.left)/O.width*2-1,-(U.clientY-O.top)/O.height*2+1),a);const $=Xt.intersectObjects(Y.visible?[...D,...gt]:D)[0];if($&&gt.includes($.object)){n();return}$&&$.object.userData.id!=="home"&&t($.object.userData.id)}),{dispose(){cancelAnimationFrame(J),qt.disconnect(),l.dispose(),o.traverse(U=>{var O;(O=U.geometry)==null||O.dispose()});for(const U of f.values())U.dispose();M.dispose(),r.dispose()},zoom(U){a.zoom=Si.clamp(a.zoom*U,.68,8),a.updateProjectionMatrix()},setPanMode(U){l.mouseButtons.LEFT=U?In.PAN:In.ROTATE,l.touches.ONE=U?Dn.PAN:Dn.ROTATE,s.style.cursor=U?"grab":""},reset(){l.reset(),a.zoom=c,a.updateProjectionMatrix()},focusIsland(){},setTodoReminder(U){Y.visible=U>0},getResidentActivities(){return it.descriptions()},watchResidents(){const U=it.actors[0],O=it.mode==="wander"?U:{x:Ee.x,z:Ee.z+1.5},$=new P(O.x,.8,O.z);a.position.add($.clone().sub(l.target)),l.target.copy($),l.update(),a.zoom=2.8,a.updateProjectionMatrix()},tour(){a.zoom=Math.max(c,1.2),a.updateProjectionMatrix()},greet(U){q=U,_t=le.getElapsedTime()+3}}}export{W0 as createWorld};
