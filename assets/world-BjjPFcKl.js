/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ci={ROTATE:0,DOLLY:1,PAN:2},oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nl=0,Do=1,Fl=2,Xa=1,Ya=2,an=3,bn=0,Pe=1,We=2,yn=0,hi=1,Io=2,Uo=3,No=4,Ol=5,Un=100,zl=101,Bl=102,Hl=103,Vl=104,kl=200,Gl=201,Wl=202,Xl=203,pr=204,mr=205,Yl=206,ql=207,Zl=208,Kl=209,jl=210,Jl=211,$l=212,Ql=213,tc=214,_r=0,gr=1,vr=2,di=3,xr=4,Mr=5,Sr=6,yr=7,qa=0,ec=1,nc=2,En=0,ic=1,sc=2,rc=3,oc=4,ac=5,lc=6,cc=7,Za=300,pi=301,mi=302,Er=303,Tr=304,Cs=306,br=1e3,Fn=1001,Ar=1002,qe=1003,hc=1004,qi=1005,je=1006,Us=1007,On=1008,un=1009,Ka=1010,ja=1011,Oi=1012,ro=1013,zn=1014,ln=1015,ki=1016,oo=1017,ao=1018,_i=1020,Ja=35902,$a=1021,Qa=1022,Ye=1023,tl=1024,el=1025,ui=1026,gi=1027,nl=1028,lo=1029,il=1030,co=1031,ho=1033,vs=33776,xs=33777,Ms=33778,Ss=33779,wr=35840,Rr=35841,Cr=35842,Pr=35843,Lr=36196,Dr=37492,Ir=37496,Ur=37808,Nr=37809,Fr=37810,Or=37811,zr=37812,Br=37813,Hr=37814,Vr=37815,kr=37816,Gr=37817,Wr=37818,Xr=37819,Yr=37820,qr=37821,ys=36492,Zr=36494,Kr=36495,sl=36283,jr=36284,Jr=36285,$r=36286,uc=3200,fc=3201,rl=0,dc=1,Sn="",Fe="srgb",xi="srgb-linear",Ps="linear",ee="srgb",Xn=7680,Fo=519,pc=512,mc=513,_c=514,ol=515,gc=516,vc=517,xc=518,Mc=519,Oo=35044,zo="300 es",cn=2e3,bs=2001;class kn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bo=1234567;const Li=Math.PI/180,zi=180/Math.PI;function Gn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function ve(i,t,e){return Math.max(t,Math.min(e,i))}function uo(i,t){return(i%t+t)%t}function Sc(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function yc(i,t,e){return i!==t?(e-i)/(t-i):0}function Di(i,t,e){return(1-e)*i+e*t}function Ec(i,t,e,n){return Di(i,t,1-Math.exp(-e*n))}function Tc(i,t=1){return t-Math.abs(uo(i,t*2)-t)}function bc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ac(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function wc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Rc(i,t){return i+Math.random()*(t-i)}function Cc(i){return i*(.5-Math.random())}function Pc(i){i!==void 0&&(Bo=i);let t=Bo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lc(i){return i*Li}function Dc(i){return i*zi}function Ic(i){return(i&i-1)===0&&i!==0}function Uc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fc(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),m=o((t-n)/2),p=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*f,l*m,a*c);break;case"YZY":i.set(l*m,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*m,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ri(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Es={DEG2RAD:Li,RAD2DEG:zi,generateUUID:Gn,clamp:ve,euclideanModulo:uo,mapLinear:Sc,inverseLerp:yc,lerp:Di,damp:Ec,pingpong:Tc,smoothstep:bc,smootherstep:Ac,randInt:wc,randFloat:Rc,randFloatSpread:Cc,seededRandom:Pc,degToRad:Lc,radToDeg:Dc,isPowerOfTwo:Ic,ceilPowerOfTwo:Uc,floorPowerOfTwo:Nc,setQuaternionFromProperEuler:Fc,normalize:Te,denormalize:ri};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,s,r,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],m=n[2],p=n[5],_=n[8],v=s[0],d=s[3],h=s[6],A=s[1],E=s[4],S=s[7],H=s[2],R=s[5],L=s[8];return r[0]=o*v+a*A+l*H,r[3]=o*d+a*E+l*R,r[6]=o*h+a*S+l*L,r[1]=c*v+u*A+f*H,r[4]=c*d+u*E+f*R,r[7]=c*h+u*S+f*L,r[2]=m*v+p*A+_*H,r[5]=m*d+p*E+_*R,r[8]=m*h+p*S+_*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,m=a*l-u*r,p=c*r-o*l,_=e*f+n*m+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=f*v,t[1]=(s*c-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=m*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ns.makeScale(t,e)),this}rotate(t){return this.premultiply(Ns.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ns.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new kt;function al(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function As(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oc(){const i=As("canvas");return i.style.display="block",i}const Ho={};function Ci(i){i in Ho||(Ho[i]=!0,console.warn(i))}function zc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Bc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kt={enabled:!0,workingColorSpace:xi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(i.r=hn(i.r),i.g=hn(i.g),i.b=hn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(i.r=fi(i.r),i.g=fi(i.g),i.b=fi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Sn?Ps:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Vo=[.64,.33,.3,.6,.15,.06],ko=[.2126,.7152,.0722],Go=[.3127,.329],Wo=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xo=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[xi]:{primaries:Vo,whitePoint:Go,transfer:Ps,toXYZ:Wo,fromXYZ:Xo,luminanceCoefficients:ko,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:Vo,whitePoint:Go,transfer:ee,toXYZ:Wo,fromXYZ:Xo,luminanceCoefficients:ko,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}});let Yn;class Vc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yn===void 0&&(Yn=As("canvas")),Yn.width=t.width,Yn.height=t.height;const n=Yn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=As("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hn(e[n]/255)*255):e[n]=hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kc=0;class ll{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fs(s[o].image)):r.push(Fs(s[o]))}else r=Fs(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gc=0;class Le extends kn{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=Fn,s=Fn,r=je,o=On,a=Ye,l=un,c=Le.DEFAULT_ANISOTROPY,u=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Gn(),this.name="",this.source=new ll(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Za)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case br:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case Ar:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case br:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case Ar:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Za;Le.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],m=l[1],p=l[5],_=l[9],v=l[2],d=l[6],h=l[10];if(Math.abs(u-m)<.01&&Math.abs(f-v)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+m)<.1&&Math.abs(f+v)<.1&&Math.abs(_+d)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,S=(p+1)/2,H=(h+1)/2,R=(u+m)/4,L=(f+v)/4,F=(_+d)/4;return E>S&&E>H?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=R/n,r=L/n):S>H?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=R/s,r=F/s):H<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(H),n=L/r,s=F/r),this.set(n,s,r,e),this}let A=Math.sqrt((d-_)*(d-_)+(f-v)*(f-v)+(m-u)*(m-u));return Math.abs(A)<.001&&(A=1),this.x=(d-_)/A,this.y=(f-v)/A,this.z=(m-u)/A,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wc extends kn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Le(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ll(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends Wc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class cl extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xc extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const m=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=m,t[e+1]=p,t[e+2]=_,t[e+3]=v;return}if(f!==v||l!==m||c!==p||u!==_){let d=1-a;const h=l*m+c*p+u*_+f*v,A=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const H=Math.sqrt(E),R=Math.atan2(H,h*A);d=Math.sin(d*R)/H,a=Math.sin(a*R)/H}const S=a*A;if(l=l*d+m*S,c=c*d+p*S,u=u*d+_*S,f=f*d+v*S,d===1-a){const H=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=H,c*=H,u*=H,f*=H}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],m=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+u*f+l*p-c*m,t[e+1]=l*_+u*m+c*f-a*p,t[e+2]=c*_+u*p+a*m-l*f,t[e+3]=u*_-a*f-l*m-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),m=l(n/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=m*u*f+c*p*_,this._y=c*p*f-m*u*_,this._z=c*u*_+m*p*f,this._w=c*u*f-m*p*_;break;case"YXZ":this._x=m*u*f+c*p*_,this._y=c*p*f-m*u*_,this._z=c*u*_-m*p*f,this._w=c*u*f+m*p*_;break;case"ZXY":this._x=m*u*f-c*p*_,this._y=c*p*f+m*u*_,this._z=c*u*_+m*p*f,this._w=c*u*f-m*p*_;break;case"ZYX":this._x=m*u*f-c*p*_,this._y=c*p*f+m*u*_,this._z=c*u*_-m*p*f,this._w=c*u*f+m*p*_;break;case"YZX":this._x=m*u*f+c*p*_,this._y=c*p*f+m*u*_,this._z=c*u*_-m*p*f,this._w=c*u*f-m*p*_;break;case"XZY":this._x=m*u*f-c*p*_,this._y=c*p*f-m*u*_,this._z=c*u*_+m*p*f,this._w=c*u*f+m*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],m=n+a+f;if(m>0){const p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,m=Math.sin(e*u)/c;return this._w=o*f+this._w*m,this._x=n*f+this._x*m,this._y=s*f+this._y*m,this._z=r*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Os.copy(this).projectOnVector(t),this.sub(Os)}reflect(t){return this.sub(Os.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Os=new U,Yo=new Hn;class Gi{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,He):He.fromBufferAttribute(r,o),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zi.copy(n.boundingBox)),Zi.applyMatrix4(t.matrixWorld),this.union(Zi)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bi),Ki.subVectors(this.max,bi),qn.subVectors(t.a,bi),Zn.subVectors(t.b,bi),Kn.subVectors(t.c,bi),pn.subVectors(Zn,qn),mn.subVectors(Kn,Zn),wn.subVectors(qn,Kn);let e=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-wn.z,wn.y,pn.z,0,-pn.x,mn.z,0,-mn.x,wn.z,0,-wn.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-wn.y,wn.x,0];return!zs(e,qn,Zn,Kn,Ki)||(e=[1,0,0,0,1,0,0,0,1],!zs(e,qn,Zn,Kn,Ki))?!1:(ji.crossVectors(pn,mn),e=[ji.x,ji.y,ji.z],zs(e,qn,Zn,Kn,Ki))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(en),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const en=[new U,new U,new U,new U,new U,new U,new U,new U],He=new U,Zi=new Gi,qn=new U,Zn=new U,Kn=new U,pn=new U,mn=new U,wn=new U,bi=new U,Ki=new U,ji=new U,Rn=new U;function zs(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Rn.fromArray(i,r);const a=s.x*Math.abs(Rn.x)+s.y*Math.abs(Rn.y)+s.z*Math.abs(Rn.z),l=t.dot(Rn),c=e.dot(Rn),u=n.dot(Rn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Yc=new Gi,Ai=new U,Bs=new U;class fo{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ai.subVectors(t,this.center);const e=Ai.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ai,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ai.copy(t.center).add(Bs)),this.expandByPoint(Ai.copy(t.center).sub(Bs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new U,Hs=new U,Ji=new U,_n=new U,Vs=new U,$i=new U,ks=new U;class po{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nn.copy(this.origin).addScaledVector(this.direction,e),nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Hs.copy(t).add(e).multiplyScalar(.5),Ji.copy(e).sub(t).normalize(),_n.copy(this.origin).sub(Hs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ji),a=_n.dot(this.direction),l=-_n.dot(Ji),c=_n.lengthSq(),u=Math.abs(1-o*o);let f,m,p,_;if(u>0)if(f=o*l-a,m=o*a-l,_=r*u,f>=0)if(m>=-_)if(m<=_){const v=1/u;f*=v,m*=v,p=f*(f+o*m+2*a)+m*(o*f+m+2*l)+c}else m=r,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*l)+c;else m=-r,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*l)+c;else m<=-_?(f=Math.max(0,-(-o*r+a)),m=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+m*(m+2*l)+c):m<=_?(f=0,m=Math.min(Math.max(-r,-l),r),p=m*(m+2*l)+c):(f=Math.max(0,-(o*r+a)),m=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+m*(m+2*l)+c);else m=o>0?-r:r,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Hs).addScaledVector(Ji,m),p}intersectSphere(t,e){nn.subVectors(t.center,this.origin);const n=nn.dot(this.direction),s=nn.dot(nn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,m=this.origin;return c>=0?(n=(t.min.x-m.x)*c,s=(t.max.x-m.x)*c):(n=(t.max.x-m.x)*c,s=(t.min.x-m.x)*c),u>=0?(r=(t.min.y-m.y)*u,o=(t.max.y-m.y)*u):(r=(t.max.y-m.y)*u,o=(t.min.y-m.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-m.z)*f,l=(t.max.z-m.z)*f):(a=(t.max.z-m.z)*f,l=(t.min.z-m.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,nn)!==null}intersectTriangle(t,e,n,s,r){Vs.subVectors(e,t),$i.subVectors(n,t),ks.crossVectors(Vs,$i);let o=this.direction.dot(ks),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_n.subVectors(this.origin,t);const l=a*this.direction.dot($i.crossVectors(_n,$i));if(l<0)return null;const c=a*this.direction.dot(Vs.cross(_n));if(c<0||l+c>o)return null;const u=-a*_n.dot(ks);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,o,a,l,c,u,f,m,p,_,v,d){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,f,m,p,_,v,d)}set(t,e,n,s,r,o,a,l,c,u,f,m,p,_,v,d){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=m,h[3]=p,h[7]=_,h[11]=v,h[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/jn.setFromMatrixColumn(t,0).length(),r=1/jn.setFromMatrixColumn(t,1).length(),o=1/jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const m=o*u,p=o*f,_=a*u,v=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+_*c,e[5]=m-v*c,e[9]=-a*l,e[2]=v-m*c,e[6]=_+p*c,e[10]=o*l}else if(t.order==="YXZ"){const m=l*u,p=l*f,_=c*u,v=c*f;e[0]=m+v*a,e[4]=_*a-p,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=p*a-_,e[6]=v+m*a,e[10]=o*l}else if(t.order==="ZXY"){const m=l*u,p=l*f,_=c*u,v=c*f;e[0]=m-v*a,e[4]=-o*f,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*u,e[9]=v-m*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const m=o*u,p=o*f,_=a*u,v=a*f;e[0]=l*u,e[4]=_*c-p,e[8]=m*c+v,e[1]=l*f,e[5]=v*c+m,e[9]=p*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const m=o*l,p=o*c,_=a*l,v=a*c;e[0]=l*u,e[4]=v-m*f,e[8]=_*f+p,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*f+_,e[10]=m-v*f}else if(t.order==="XZY"){const m=o*l,p=o*c,_=a*l,v=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=m*f+v,e[5]=o*u,e[9]=p*f-_,e[2]=_*f-p,e[6]=a*u,e[10]=v*f+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qc,t,Zc)}lookAt(t,e,n){const s=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),gn.crossVectors(n,Ue),gn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),gn.crossVectors(n,Ue)),gn.normalize(),Qi.crossVectors(Ue,gn),s[0]=gn.x,s[4]=Qi.x,s[8]=Ue.x,s[1]=gn.y,s[5]=Qi.y,s[9]=Ue.y,s[2]=gn.z,s[6]=Qi.z,s[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],m=n[9],p=n[13],_=n[2],v=n[6],d=n[10],h=n[14],A=n[3],E=n[7],S=n[11],H=n[15],R=s[0],L=s[4],F=s[8],T=s[12],M=s[1],P=s[5],q=s[9],B=s[13],G=s[2],J=s[6],Y=s[10],nt=s[14],K=s[3],pt=s[7],vt=s[11],ht=s[15];return r[0]=o*R+a*M+l*G+c*K,r[4]=o*L+a*P+l*J+c*pt,r[8]=o*F+a*q+l*Y+c*vt,r[12]=o*T+a*B+l*nt+c*ht,r[1]=u*R+f*M+m*G+p*K,r[5]=u*L+f*P+m*J+p*pt,r[9]=u*F+f*q+m*Y+p*vt,r[13]=u*T+f*B+m*nt+p*ht,r[2]=_*R+v*M+d*G+h*K,r[6]=_*L+v*P+d*J+h*pt,r[10]=_*F+v*q+d*Y+h*vt,r[14]=_*T+v*B+d*nt+h*ht,r[3]=A*R+E*M+S*G+H*K,r[7]=A*L+E*P+S*J+H*pt,r[11]=A*F+E*q+S*Y+H*vt,r[15]=A*T+E*B+S*nt+H*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],m=t[10],p=t[14],_=t[3],v=t[7],d=t[11],h=t[15];return _*(+r*l*f-s*c*f-r*a*m+n*c*m+s*a*p-n*l*p)+v*(+e*l*p-e*c*m+r*o*m-s*o*p+s*c*u-r*l*u)+d*(+e*c*f-e*a*p-r*o*f+n*o*p+r*a*u-n*c*u)+h*(-s*a*u-e*l*f+e*a*m+s*o*f-n*o*m+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],m=t[10],p=t[11],_=t[12],v=t[13],d=t[14],h=t[15],A=f*d*c-v*m*c+v*l*p-a*d*p-f*l*h+a*m*h,E=_*m*c-u*d*c-_*l*p+o*d*p+u*l*h-o*m*h,S=u*v*c-_*f*c+_*a*p-o*v*p-u*a*h+o*f*h,H=_*f*l-u*v*l-_*a*m+o*v*m+u*a*d-o*f*d,R=e*A+n*E+s*S+r*H;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return t[0]=A*L,t[1]=(v*m*r-f*d*r-v*s*p+n*d*p+f*s*h-n*m*h)*L,t[2]=(a*d*r-v*l*r+v*s*c-n*d*c-a*s*h+n*l*h)*L,t[3]=(f*l*r-a*m*r-f*s*c+n*m*c+a*s*p-n*l*p)*L,t[4]=E*L,t[5]=(u*d*r-_*m*r+_*s*p-e*d*p-u*s*h+e*m*h)*L,t[6]=(_*l*r-o*d*r-_*s*c+e*d*c+o*s*h-e*l*h)*L,t[7]=(o*m*r-u*l*r+u*s*c-e*m*c-o*s*p+e*l*p)*L,t[8]=S*L,t[9]=(_*f*r-u*v*r-_*n*p+e*v*p+u*n*h-e*f*h)*L,t[10]=(o*v*r-_*a*r+_*n*c-e*v*c-o*n*h+e*a*h)*L,t[11]=(u*a*r-o*f*r-u*n*c+e*f*c+o*n*p-e*a*p)*L,t[12]=H*L,t[13]=(u*v*s-_*f*s+_*n*m-e*v*m-u*n*d+e*f*d)*L,t[14]=(_*a*s-o*v*s-_*n*l+e*v*l+o*n*d-e*a*d)*L,t[15]=(o*f*s-u*a*s+u*n*l-e*f*l-o*n*m+e*a*m)*L,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,m=r*c,p=r*u,_=r*f,v=o*u,d=o*f,h=a*f,A=l*c,E=l*u,S=l*f,H=n.x,R=n.y,L=n.z;return s[0]=(1-(v+h))*H,s[1]=(p+S)*H,s[2]=(_-E)*H,s[3]=0,s[4]=(p-S)*R,s[5]=(1-(m+h))*R,s[6]=(d+A)*R,s[7]=0,s[8]=(_+E)*L,s[9]=(d-A)*L,s[10]=(1-(m+v))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=jn.set(s[0],s[1],s[2]).length();const o=jn.set(s[4],s[5],s[6]).length(),a=jn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ve.copy(this);const c=1/r,u=1/o,f=1/a;return Ve.elements[0]*=c,Ve.elements[1]*=c,Ve.elements[2]*=c,Ve.elements[4]*=u,Ve.elements[5]*=u,Ve.elements[6]*=u,Ve.elements[8]*=f,Ve.elements[9]*=f,Ve.elements[10]*=f,e.setFromRotationMatrix(Ve),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=cn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),m=(n+s)/(n-s);let p,_;if(a===cn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===bs)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=cn){const l=this.elements,c=1/(e-t),u=1/(n-s),f=1/(o-r),m=(e+t)*c,p=(n+s)*u;let _,v;if(a===cn)_=(o+r)*f,v=-2*f;else if(a===bs)_=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const jn=new U,Ve=new le,qc=new U(0,0,0),Zc=new U(1,1,1),gn=new U,Qi=new U,Ue=new U,qo=new le,Zo=new Hn;class $e{constructor(t=0,e=0,n=0,s=$e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],m=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zo.setFromEuler(this),this.setFromQuaternion(Zo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$e.DEFAULT_ORDER="XYZ";class mo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kc=0;const Ko=new U,Jn=new Hn,sn=new le,ts=new U,wi=new U,jc=new U,Jc=new Hn,jo=new U(1,0,0),Jo=new U(0,1,0),$o=new U(0,0,1),Qo={type:"added"},$c={type:"removed"},$n={type:"childadded",child:null},Gs={type:"childremoved",child:null};class Ee extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new U,e=new $e,n=new Hn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new kt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.premultiply(Jn),this}rotateX(t){return this.rotateOnAxis(jo,t)}rotateY(t){return this.rotateOnAxis(Jo,t)}rotateZ(t){return this.rotateOnAxis($o,t)}translateOnAxis(t,e){return Ko.copy(t).applyQuaternion(this.quaternion),this.position.add(Ko.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jo,t)}translateY(t){return this.translateOnAxis(Jo,t)}translateZ(t){return this.translateOnAxis($o,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ts.copy(t):ts.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(wi,ts,this.up):sn.lookAt(ts,wi,this.up),this.quaternion.setFromRotationMatrix(sn),s&&(sn.extractRotation(s.matrixWorld),Jn.setFromRotationMatrix(sn),this.quaternion.premultiply(Jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qo),$n.child=t,this.dispatchEvent($n),$n.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($c),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qo),$n.child=t,this.dispatchEvent($n),$n.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,t,jc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,Jc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),m=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new U(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ke=new U,rn=new U,Ws=new U,on=new U,Qn=new U,ti=new U,ta=new U,Xs=new U,Ys=new U,qs=new U,Zs=new he,Ks=new he,js=new he;class Xe{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ke.subVectors(t,e),s.cross(ke);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ke.subVectors(s,e),rn.subVectors(n,e),Ws.subVectors(t,e);const o=ke.dot(ke),a=ke.dot(rn),l=ke.dot(Ws),c=rn.dot(rn),u=rn.dot(Ws),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const m=1/f,p=(c*l-a*u)*m,_=(o*u-a*l)*m;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,on)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,on.x),l.addScaledVector(o,on.y),l.addScaledVector(a,on.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Zs.setScalar(0),Ks.setScalar(0),js.setScalar(0),Zs.fromBufferAttribute(t,e),Ks.fromBufferAttribute(t,n),js.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Zs,r.x),o.addScaledVector(Ks,r.y),o.addScaledVector(js,r.z),o}static isFrontFacing(t,e,n,s){return ke.subVectors(n,e),rn.subVectors(t,e),ke.cross(rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ke.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),ke.cross(rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Qn.subVectors(s,n),ti.subVectors(r,n),Xs.subVectors(t,n);const l=Qn.dot(Xs),c=ti.dot(Xs);if(l<=0&&c<=0)return e.copy(n);Ys.subVectors(t,s);const u=Qn.dot(Ys),f=ti.dot(Ys);if(u>=0&&f<=u)return e.copy(s);const m=l*f-u*c;if(m<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Qn,o);qs.subVectors(t,r);const p=Qn.dot(qs),_=ti.dot(qs);if(_>=0&&p<=_)return e.copy(r);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(ti,a);const d=u*_-p*f;if(d<=0&&f-u>=0&&p-_>=0)return ta.subVectors(r,s),a=(f-u)/(f-u+(p-_)),e.copy(s).addScaledVector(ta,a);const h=1/(d+v+m);return o=v*h,a=m*h,e.copy(n).addScaledVector(Qn,o).addScaledVector(ti,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},es={h:0,s:0,l:0};function Js(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=uo(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Js(o,r,t+1/3),this.g=Js(o,r,t),this.b=Js(o,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=hl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hn(t.r),this.g=hn(t.g),this.b=hn(t.b),this}copyLinearToSRGB(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Kt.fromWorkingColorSpace(ye.copy(this),t),Math.round(ve(ye.r*255,0,255))*65536+Math.round(ve(ye.g*255,0,255))*256+Math.round(ve(ye.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(ye.copy(this),e);const n=ye.r,s=ye.g,r=ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=Fe){Kt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,n=ye.g,s=ye.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vn),this.setHSL(vn.h+t,vn.s+e,vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vn),t.getHSL(es);const n=Di(vn.h,es.h,e),s=Di(vn.s,es.s,e),r=Di(vn.l,es.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Jt;Jt.NAMES=hl;let Qc=0;class Mi extends kn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=Gn(),this.name="",this.blending=hi,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pr,this.blendDst=mr,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pr&&(n.blendSrc=this.blendSrc),this.blendDst!==mr&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ii extends Mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new U,ns=new at;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oo,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ns.fromBufferAttribute(this,e),ns.applyMatrix3(t),this.setXY(e,ns.x,ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oo&&(t.usage=this.usage),t}}class ul extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class fl extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let th=0;const ze=new le,$s=new Ee,ei=new U,Ne=new Gi,Ri=new Gi,_e=new U;class De extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(al(t)?fl:ul)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return $s.lookAt(t),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ae(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ri.setFromBufferAttribute(a),this.morphTargetsRelative?(_e.addVectors(Ne.min,Ri.min),Ne.expandByPoint(_e),_e.addVectors(Ne.max,Ri.max),Ne.expandByPoint(_e)):(Ne.expandByPoint(Ri.min),Ne.expandByPoint(Ri.max))}Ne.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_e.fromBufferAttribute(a,c),l&&(ei.fromBufferAttribute(t,c),_e.add(ei)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new U,l[F]=new U;const c=new U,u=new U,f=new U,m=new at,p=new at,_=new at,v=new U,d=new U;function h(F,T,M){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,M),m.fromBufferAttribute(r,F),p.fromBufferAttribute(r,T),_.fromBufferAttribute(r,M),u.sub(c),f.sub(c),p.sub(m),_.sub(m);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(P),d.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),a[F].add(v),a[T].add(v),a[M].add(v),l[F].add(d),l[T].add(d),l[M].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let F=0,T=A.length;F<T;++F){const M=A[F],P=M.start,q=M.count;for(let B=P,G=P+q;B<G;B+=3)h(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const E=new U,S=new U,H=new U,R=new U;function L(F){H.fromBufferAttribute(s,F),R.copy(H);const T=a[F];E.copy(T),E.sub(H.multiplyScalar(H.dot(T))).normalize(),S.crossVectors(R,T);const P=S.dot(l[F])<0?-1:1;o.setXYZW(F,E.x,E.y,E.z,P)}for(let F=0,T=A.length;F<T;++F){const M=A[F],P=M.start,q=M.count;for(let B=P,G=P+q;B<G;B+=3)L(t.getX(B+0)),L(t.getX(B+1)),L(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,p=n.count;m<p;m++)n.setXYZ(m,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,f=new U;if(t)for(let m=0,p=t.count;m<p;m+=3){const _=t.getX(m+0),v=t.getX(m+1),d=t.getX(m+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,d),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let m=0,p=e.count;m<p;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(m+0,u.x,u.y,u.z),n.setXYZ(m+1,u.x,u.y,u.z),n.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,m=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,d=l.length;v<d;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)m[_++]=c[p++]}return new Je(m,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const m=c[u],p=t(m,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,m=c.length;f<m;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let m=0,p=f.length;m<p;m++)u.push(f[m].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ea=new le,Cn=new po,is=new fo,na=new U,ss=new U,rs=new U,os=new U,Qs=new U,as=new U,ia=new U,ls=new U;class Ae extends Ee{constructor(t=new De,e=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){as.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Qs.fromBufferAttribute(f,t),o?as.addScaledVector(Qs,u):as.addScaledVector(Qs.sub(e),u))}e.add(as)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(r),Cn.copy(t.ray).recast(t.near),!(is.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(is,na)===null||Cn.origin.distanceToSquared(na)>(t.far-t.near)**2))&&(ea.copy(r).invert(),Cn.copy(t.ray).applyMatrix4(ea),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,m=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=m.length;_<v;_++){const d=m[_],h=o[d.materialIndex],A=Math.max(d.start,p.start),E=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let S=A,H=E;S<H;S+=3){const R=a.getX(S),L=a.getX(S+1),F=a.getX(S+2);s=cs(this,h,t,n,c,u,f,R,L,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let d=_,h=v;d<h;d+=3){const A=a.getX(d),E=a.getX(d+1),S=a.getX(d+2);s=cs(this,o,t,n,c,u,f,A,E,S),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=m.length;_<v;_++){const d=m[_],h=o[d.materialIndex],A=Math.max(d.start,p.start),E=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let S=A,H=E;S<H;S+=3){const R=S,L=S+1,F=S+2;s=cs(this,h,t,n,c,u,f,R,L,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let d=_,h=v;d<h;d+=3){const A=d,E=d+1,S=d+2;s=cs(this,o,t,n,c,u,f,A,E,S),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function eh(i,t,e,n,s,r,o,a){let l;if(t.side===Pe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===bn,a),l===null)return null;ls.copy(a),ls.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ls);return c<e.near||c>e.far?null:{distance:c,point:ls.clone(),object:i}}function cs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ss),i.getVertexPosition(l,rs),i.getVertexPosition(c,os);const u=eh(i,t,e,n,ss,rs,os,ia);if(u){const f=new U;Xe.getBarycoord(ia,ss,rs,os,f),s&&(u.uv=Xe.getInterpolatedAttribute(s,a,l,c,f,new at)),r&&(u.uv1=Xe.getInterpolatedAttribute(r,a,l,c,f,new at)),o&&(u.normal=Xe.getInterpolatedAttribute(o,a,l,c,f,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const m={a,b:l,c,normal:new U,materialIndex:0};Xe.getNormal(ss,rs,os,m.normal),u.face=m,u.barycoord=f}return u}class Si extends De{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let m=0,p=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(f,2));function _(v,d,h,A,E,S,H,R,L,F,T){const M=S/L,P=H/F,q=S/2,B=H/2,G=R/2,J=L+1,Y=F+1;let nt=0,K=0;const pt=new U;for(let vt=0;vt<Y;vt++){const ht=vt*P-B;for(let It=0;It<J;It++){const Yt=It*M-q;pt[v]=Yt*A,pt[d]=ht*E,pt[h]=G,c.push(pt.x,pt.y,pt.z),pt[v]=0,pt[d]=0,pt[h]=R>0?1:-1,u.push(pt.x,pt.y,pt.z),f.push(It/L),f.push(1-vt/F),nt+=1}}for(let vt=0;vt<F;vt++)for(let ht=0;ht<L;ht++){const It=m+ht+J*vt,Yt=m+ht+J*(vt+1),Q=m+(ht+1)+J*(vt+1),rt=m+(ht+1)+J*vt;l.push(It,Yt,rt),l.push(Yt,Q,rt),K+=6}a.addGroup(p,K,T),p+=K,m+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function be(i){const t={};for(let e=0;e<i.length;e++){const n=vi(i[e]);for(const s in n)t[s]=n[s]}return t}function nh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const ih={clone:vi,merge:be};var sh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sh,this.fragmentShader=rh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vi(t.uniforms),this.uniformsGroups=nh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class pl extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xn=new U,sa=new at,ra=new at;class Ge extends pl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Li*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zi*2*Math.atan(Math.tan(Li*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xn.x,xn.y).multiplyScalar(-t/xn.z),xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xn.x,xn.y).multiplyScalar(-t/xn.z)}getViewSize(t,e){return this.getViewBounds(t,sa,ra),e.subVectors(ra,sa)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Li*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ni=-90,ii=1;class oh extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ge(ni,ii,t,e);s.layers=this.layers,this.add(s);const r=new Ge(ni,ii,t,e);r.layers=this.layers,this.add(r);const o=new Ge(ni,ii,t,e);o.layers=this.layers,this.add(o);const a=new Ge(ni,ii,t,e);a.layers=this.layers,this.add(a);const l=new Ge(ni,ii,t,e);l.layers=this.layers,this.add(l);const c=new Ge(ni,ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),m=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,m,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ml extends Le{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:pi,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ah extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ml(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Si(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:yn});r.uniforms.tEquirect.value=e;const o=new Ae(s,r),a=e.minFilter;return e.minFilter===On&&(e.minFilter=je),new oh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const tr=new U,lh=new U,ch=new kt;class Mn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=tr.subVectors(n,e).cross(lh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(tr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ch.getNormalMatrix(t),s=this.coplanarPoint(tr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new fo,hs=new U;class _o{constructor(t=new Mn,e=new Mn,n=new Mn,s=new Mn,r=new Mn,o=new Mn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],m=s[7],p=s[8],_=s[9],v=s[10],d=s[11],h=s[12],A=s[13],E=s[14],S=s[15];if(n[0].setComponents(l-r,m-c,d-p,S-h).normalize(),n[1].setComponents(l+r,m+c,d+p,S+h).normalize(),n[2].setComponents(l+o,m+u,d+_,S+A).normalize(),n[3].setComponents(l-o,m-u,d-_,S-A).normalize(),n[4].setComponents(l-a,m-f,d-v,S-E).normalize(),e===cn)n[5].setComponents(l+a,m+f,d+v,S+E).normalize();else if(e===bs)n[5].setComponents(a,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(t){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(hs.x=s.normal.x>0?t.max.x:t.min.x,hs.y=s.normal.y>0?t.max.y:t.min.y,hs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _l(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function hh(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let m=0;for(let p=1;p<f.length;p++){const _=f[m],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++m,f[m]=v)}f.length=m+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Wi extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,m=e/l,p=[],_=[],v=[],d=[];for(let h=0;h<u;h++){const A=h*m-o;for(let E=0;E<c;E++){const S=E*f-r;_.push(S,-A,0),v.push(0,0,1),d.push(E/a),d.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<a;A++){const E=A+c*h,S=A+c*(h+1),H=A+1+c*(h+1),R=A+1+c*h;p.push(E,S,R),p.push(S,H,R)}this.setIndex(p),this.setAttribute("position",new ae(_,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.width,t.height,t.widthSegments,t.heightSegments)}}var uh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fh=`#ifdef USE_ALPHAHASH
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
#endif`,dh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ph=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gh=`#ifdef USE_AOMAP
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
#endif`,vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xh=`#ifdef USE_BATCHING
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
#endif`,Mh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Th=`#ifdef USE_IRIDESCENCE
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
#endif`,bh=`#ifdef USE_BUMPMAP
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
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Uh=`#define PI 3.141592653589793
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
} // validated`,Nh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fh=`vec3 transformedNormal = objectNormal;
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
#endif`,Oh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vh="gl_FragColor = linearToOutputTexel( gl_FragColor );",kh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gh=`#ifdef USE_ENVMAP
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
#endif`,Wh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xh=`#ifdef USE_ENVMAP
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
#endif`,Yh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qh=`#ifdef USE_ENVMAP
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
#endif`,Zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$h=`#ifdef USE_GRADIENTMAP
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
}`,Qh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nu=`uniform bool receiveShadow;
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
#endif`,iu=`#ifdef USE_ENVMAP
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
#endif`,su=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ru=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ou=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,au=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lu=`PhysicalMaterial material;
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
#endif`,cu=`struct PhysicalMaterial {
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
}`,hu=`
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
#endif`,uu=`#if defined( RE_IndirectDiffuse )
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
#endif`,fu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,du=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_u=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mu=`#if defined( USE_POINTS_UV )
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
#endif`,Su=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Au=`#ifdef USE_MORPHTARGETS
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
#endif`,wu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ru=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Du=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iu=`#ifdef USE_NORMALMAP
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
#endif`,Uu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ou=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ku=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ku=`float getShadowMask() {
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
}`,ju=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ju=`#ifdef USE_SKINNING
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
#endif`,$u=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qu=`#ifdef USE_SKINNING
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
#endif`,tf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ef=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rf=`#ifdef USE_TRANSMISSION
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
#endif`,of=`#ifdef USE_TRANSMISSION
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
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ff=`uniform sampler2D t2D;
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
}`,df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`#include <common>
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
}`,vf=`#if DEPTH_PACKING == 3200
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
}`,xf=`#define DISTANCE
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
}`,Mf=`#define DISTANCE
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
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`uniform float scale;
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
}`,Tf=`uniform vec3 diffuse;
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
}`,bf=`#include <common>
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
}`,Af=`uniform vec3 diffuse;
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
}`,wf=`#define LAMBERT
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
}`,Rf=`#define LAMBERT
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
}`,Cf=`#define MATCAP
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
}`,Pf=`#define MATCAP
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
}`,Lf=`#define NORMAL
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
}`,Df=`#define NORMAL
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
}`,If=`#define PHONG
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
}`,Uf=`#define PHONG
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
}`,Nf=`#define STANDARD
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
}`,Ff=`#define STANDARD
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
}`,Of=`#define TOON
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
}`,zf=`#define TOON
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
}`,Bf=`uniform float size;
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Vf=`#include <common>
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
}`,kf=`uniform vec3 color;
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
}`,Gf=`uniform float rotation;
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:uh,alphahash_pars_fragment:fh,alphamap_fragment:dh,alphamap_pars_fragment:ph,alphatest_fragment:mh,alphatest_pars_fragment:_h,aomap_fragment:gh,aomap_pars_fragment:vh,batching_pars_vertex:xh,batching_vertex:Mh,begin_vertex:Sh,beginnormal_vertex:yh,bsdfs:Eh,iridescence_fragment:Th,bumpmap_pars_fragment:bh,clipping_planes_fragment:Ah,clipping_planes_pars_fragment:wh,clipping_planes_pars_vertex:Rh,clipping_planes_vertex:Ch,color_fragment:Ph,color_pars_fragment:Lh,color_pars_vertex:Dh,color_vertex:Ih,common:Uh,cube_uv_reflection_fragment:Nh,defaultnormal_vertex:Fh,displacementmap_pars_vertex:Oh,displacementmap_vertex:zh,emissivemap_fragment:Bh,emissivemap_pars_fragment:Hh,colorspace_fragment:Vh,colorspace_pars_fragment:kh,envmap_fragment:Gh,envmap_common_pars_fragment:Wh,envmap_pars_fragment:Xh,envmap_pars_vertex:Yh,envmap_physical_pars_fragment:iu,envmap_vertex:qh,fog_vertex:Zh,fog_pars_vertex:Kh,fog_fragment:jh,fog_pars_fragment:Jh,gradientmap_pars_fragment:$h,lightmap_pars_fragment:Qh,lights_lambert_fragment:tu,lights_lambert_pars_fragment:eu,lights_pars_begin:nu,lights_toon_fragment:su,lights_toon_pars_fragment:ru,lights_phong_fragment:ou,lights_phong_pars_fragment:au,lights_physical_fragment:lu,lights_physical_pars_fragment:cu,lights_fragment_begin:hu,lights_fragment_maps:uu,lights_fragment_end:fu,logdepthbuf_fragment:du,logdepthbuf_pars_fragment:pu,logdepthbuf_pars_vertex:mu,logdepthbuf_vertex:_u,map_fragment:gu,map_pars_fragment:vu,map_particle_fragment:xu,map_particle_pars_fragment:Mu,metalnessmap_fragment:Su,metalnessmap_pars_fragment:yu,morphinstance_vertex:Eu,morphcolor_vertex:Tu,morphnormal_vertex:bu,morphtarget_pars_vertex:Au,morphtarget_vertex:wu,normal_fragment_begin:Ru,normal_fragment_maps:Cu,normal_pars_fragment:Pu,normal_pars_vertex:Lu,normal_vertex:Du,normalmap_pars_fragment:Iu,clearcoat_normal_fragment_begin:Uu,clearcoat_normal_fragment_maps:Nu,clearcoat_pars_fragment:Fu,iridescence_pars_fragment:Ou,opaque_fragment:zu,packing:Bu,premultiplied_alpha_fragment:Hu,project_vertex:Vu,dithering_fragment:ku,dithering_pars_fragment:Gu,roughnessmap_fragment:Wu,roughnessmap_pars_fragment:Xu,shadowmap_pars_fragment:Yu,shadowmap_pars_vertex:qu,shadowmap_vertex:Zu,shadowmask_pars_fragment:Ku,skinbase_vertex:ju,skinning_pars_vertex:Ju,skinning_vertex:$u,skinnormal_vertex:Qu,specularmap_fragment:tf,specularmap_pars_fragment:ef,tonemapping_fragment:nf,tonemapping_pars_fragment:sf,transmission_fragment:rf,transmission_pars_fragment:of,uv_pars_fragment:af,uv_pars_vertex:lf,uv_vertex:cf,worldpos_vertex:hf,background_vert:uf,background_frag:ff,backgroundCube_vert:df,backgroundCube_frag:pf,cube_vert:mf,cube_frag:_f,depth_vert:gf,depth_frag:vf,distanceRGBA_vert:xf,distanceRGBA_frag:Mf,equirect_vert:Sf,equirect_frag:yf,linedashed_vert:Ef,linedashed_frag:Tf,meshbasic_vert:bf,meshbasic_frag:Af,meshlambert_vert:wf,meshlambert_frag:Rf,meshmatcap_vert:Cf,meshmatcap_frag:Pf,meshnormal_vert:Lf,meshnormal_frag:Df,meshphong_vert:If,meshphong_frag:Uf,meshphysical_vert:Nf,meshphysical_frag:Ff,meshtoon_vert:Of,meshtoon_frag:zf,points_vert:Bf,points_frag:Hf,shadow_vert:Vf,shadow_frag:kf,sprite_vert:Gf,sprite_frag:Wf},_t={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Ke={basic:{uniforms:be([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:be([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:be([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:be([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:be([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:be([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:be([_t.points,_t.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:be([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:be([_t.common,_t.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:be([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:be([_t.sprite,_t.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:be([_t.common,_t.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:be([_t.lights,_t.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Ke.physical={uniforms:be([Ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const us={r:0,b:0,g:0},Ln=new $e,Xf=new le;function Yf(i,t,e,n,s,r,o){const a=new Jt(0);let l=r===!0?0:1,c,u,f=null,m=0,p=null;function _(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?e:t).get(E)),E}function v(A){let E=!1;const S=_(A);S===null?h(a,l):S&&S.isColor&&(h(S,1),E=!0);const H=i.xr.getEnvironmentBlendMode();H==="additive"?n.buffers.color.setClear(0,0,0,1,o):H==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(A,E){const S=_(E);S&&(S.isCubeTexture||S.mapping===Cs)?(u===void 0&&(u=new Ae(new Si(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:vi(Ke.backgroundCube.uniforms),vertexShader:Ke.backgroundCube.vertexShader,fragmentShader:Ke.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(H,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ln.copy(E.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xf.makeRotationFromEuler(Ln)),u.material.toneMapped=Kt.getTransfer(S.colorSpace)!==ee,(f!==S||m!==S.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,m=S.version,p=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ae(new Wi(2,2),new An({name:"BackgroundMaterial",uniforms:vi(Ke.background.uniforms),vertexShader:Ke.background.vertexShader,fragmentShader:Ke.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(S.colorSpace)!==ee,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||m!==S.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,m=S.version,p=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function h(A,E){A.getRGB(us,dl(i)),n.buffers.color.setClear(us.r,us.g,us.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(A,E=1){a.set(A),l=E,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,h(a,l)},render:v,addToRenderList:d}}function qf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null);let r=s,o=!1;function a(M,P,q,B,G){let J=!1;const Y=f(B,q,P);r!==Y&&(r=Y,c(r.object)),J=p(M,B,q,G),J&&_(M,B,q,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,S(M,P,q,B),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function f(M,P,q){const B=q.wireframe===!0;let G=n[M.id];G===void 0&&(G={},n[M.id]=G);let J=G[P.id];J===void 0&&(J={},G[P.id]=J);let Y=J[B];return Y===void 0&&(Y=m(l()),J[B]=Y),Y}function m(M){const P=[],q=[],B=[];for(let G=0;G<e;G++)P[G]=0,q[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:q,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,P,q,B){const G=r.attributes,J=P.attributes;let Y=0;const nt=q.getAttributes();for(const K in nt)if(nt[K].location>=0){const vt=G[K];let ht=J[K];if(ht===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor)),vt===void 0||vt.attribute!==ht||ht&&vt.data!==ht.data)return!0;Y++}return r.attributesNum!==Y||r.index!==B}function _(M,P,q,B){const G={},J=P.attributes;let Y=0;const nt=q.getAttributes();for(const K in nt)if(nt[K].location>=0){let vt=J[K];vt===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor));const ht={};ht.attribute=vt,vt&&vt.data&&(ht.data=vt.data),G[K]=ht,Y++}r.attributes=G,r.attributesNum=Y,r.index=B}function v(){const M=r.newAttributes;for(let P=0,q=M.length;P<q;P++)M[P]=0}function d(M){h(M,0)}function h(M,P){const q=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;q[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),G[M]!==P&&(i.vertexAttribDivisor(M,P),G[M]=P)}function A(){const M=r.newAttributes,P=r.enabledAttributes;for(let q=0,B=P.length;q<B;q++)P[q]!==M[q]&&(i.disableVertexAttribArray(q),P[q]=0)}function E(M,P,q,B,G,J,Y){Y===!0?i.vertexAttribIPointer(M,P,q,G,J):i.vertexAttribPointer(M,P,q,B,G,J)}function S(M,P,q,B){v();const G=B.attributes,J=q.getAttributes(),Y=P.defaultAttributeValues;for(const nt in J){const K=J[nt];if(K.location>=0){let pt=G[nt];if(pt===void 0&&(nt==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),nt==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),pt!==void 0){const vt=pt.normalized,ht=pt.itemSize,It=t.get(pt);if(It===void 0)continue;const Yt=It.buffer,Q=It.type,rt=It.bytesPerElement,bt=Q===i.INT||Q===i.UNSIGNED_INT||pt.gpuType===ro;if(pt.isInterleavedBufferAttribute){const lt=pt.data,Dt=lt.stride,Ot=pt.offset;if(lt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<K.locationSize;Ut++)h(K.location+Ut,lt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ut=0;Ut<K.locationSize;Ut++)d(K.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let Ut=0;Ut<K.locationSize;Ut++)E(K.location+Ut,ht/K.locationSize,Q,vt,Dt*rt,(Ot+ht/K.locationSize*Ut)*rt,bt)}else{if(pt.isInstancedBufferAttribute){for(let lt=0;lt<K.locationSize;lt++)h(K.location+lt,pt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let lt=0;lt<K.locationSize;lt++)d(K.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let lt=0;lt<K.locationSize;lt++)E(K.location+lt,ht/K.locationSize,Q,vt,ht*rt,ht/K.locationSize*lt*rt,bt)}}else if(Y!==void 0){const vt=Y[nt];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(K.location,vt);break;case 3:i.vertexAttrib3fv(K.location,vt);break;case 4:i.vertexAttrib4fv(K.location,vt);break;default:i.vertexAttrib1fv(K.location,vt)}}}}A()}function H(){F();for(const M in n){const P=n[M];for(const q in P){const B=P[q];for(const G in B)u(B[G].object),delete B[G];delete P[q]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const q in P){const B=P[q];for(const G in B)u(B[G].object),delete B[G];delete P[q]}delete n[M.id]}function L(M){for(const P in n){const q=n[P];if(q[M.id]===void 0)continue;const B=q[M.id];for(const G in B)u(B[G].object),delete B[G];delete q[M.id]}}function F(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:T,dispose:H,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:d,disableUnusedAttributes:A}}function Zf(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];e.update(p,n,1)}function l(c,u,f,m){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],m[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,m,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*m[v];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Kf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Ye&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const F=L===ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==un&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ln&&!F)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,m=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),H=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:m,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:d,maxAttributes:h,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:H,maxSamples:R}}function jf(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Mn,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const p=f.length!==0||m||n!==0||s;return s=m,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,m){e=u(f,m,0)},this.setState=function(f,m,p){const _=f.clippingPlanes,v=f.clipIntersection,d=f.clipShadows,h=i.get(f);if(!s||_===null||_.length===0||r&&!d)r?u(null):c();else{const A=r?0:n,E=A*4;let S=h.clippingState||null;l.value=S,S=u(_,m,E,p);for(let H=0;H!==E;++H)S[H]=e[H];h.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,m,p,_){const v=f!==null?f.length:0;let d=null;if(v!==0){if(d=l.value,_!==!0||d===null){const h=p+v*4,A=m.matrixWorldInverse;a.getNormalMatrix(A),(d===null||d.length<h)&&(d=new Float32Array(h));for(let E=0,S=p;E!==v;++E,S+=4)o.copy(f[E]).applyMatrix4(A,a),o.normal.toArray(d,S),d[S+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,d}}function Jf(i){let t=new WeakMap;function e(o,a){return a===Er?o.mapping=pi:a===Tr&&(o.mapping=mi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Er||a===Tr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ah(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class go extends pl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ai=4,oa=[.125,.215,.35,.446,.526,.582],Nn=20,er=new go,aa=new Jt;let nr=null,ir=0,sr=0,rr=!1;const In=(1+Math.sqrt(5))/2,si=1/In,la=[new U(-In,si,0),new U(In,si,0),new U(-si,0,In),new U(si,0,In),new U(0,In,-si),new U(0,In,si),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class ca{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){nr=this._renderer.getRenderTarget(),ir=this._renderer.getActiveCubeFace(),sr=this._renderer.getActiveMipmapLevel(),rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ua(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nr,ir,sr),this._renderer.xr.enabled=rr,t.scissorTest=!1,fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pi||t.mapping===mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nr=this._renderer.getRenderTarget(),ir=this._renderer.getActiveCubeFace(),sr=this._renderer.getActiveMipmapLevel(),rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:ki,format:Ye,colorSpace:xi,depthBuffer:!1},s=ha(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ha(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$f(r)),this._blurMaterial=Qf(r,t,e)}return s}_compileMaterial(t){const e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,er)}_sceneToCubeUV(t,e,n,s){const a=new Ge(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(aa),u.toneMapping=En,u.autoClear=!1;const p=new Ii({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),_=new Ae(new Si,p);let v=!1;const d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,v=!0):(p.color.copy(aa),v=!0);for(let h=0;h<6;h++){const A=h%3;A===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):A===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const E=this._cubeSize;fs(s,A*E,h>2?E:0,E,E),u.setRenderTarget(s),v&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=m,u.autoClear=f,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===pi||t.mapping===mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ua());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;fs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,er)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=la[(s-r-1)%la.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ae(this._lodPlanes[s],c),m=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Nn-1),v=r/_,d=isFinite(r)?1+Math.floor(u*v):Nn;d>Nn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Nn}`);const h=[];let A=0;for(let L=0;L<Nn;++L){const F=L/v,T=Math.exp(-F*F/2);h.push(T),L===0?A+=T:L<d&&(A+=2*T)}for(let L=0;L<h.length;L++)h[L]=h[L]/A;m.envMap.value=t.texture,m.samples.value=d,m.weights.value=h,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:E}=this;m.dTheta.value=_,m.mipInt.value=E-n;const S=this._sizeLods[s],H=3*S*(s>E-ai?s-E+ai:0),R=4*(this._cubeSize-S);fs(e,H,R,3*S,2*S),l.setRenderTarget(e),l.render(f,er)}}function $f(i){const t=[],e=[],n=[];let s=i;const r=i-ai+1+oa.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ai?l=oa[o-i+ai-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,m=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,v=3,d=2,h=1,A=new Float32Array(v*_*p),E=new Float32Array(d*_*p),S=new Float32Array(h*_*p);for(let R=0;R<p;R++){const L=R%3*2/3-1,F=R>2?0:-1,T=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];A.set(T,v*_*R),E.set(m,d*_*R);const M=[R,R,R,R,R,R];S.set(M,h*_*R)}const H=new De;H.setAttribute("position",new Je(A,v)),H.setAttribute("uv",new Je(E,d)),H.setAttribute("faceIndex",new Je(S,h)),t.push(H),s>ai&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ha(i,t,e){const n=new Bn(i,t,e);return n.texture.mapping=Cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Qf(i,t,e){const n=new Float32Array(Nn),s=new U(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vo(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function ua(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function fa(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function vo(){return`

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
	`}function td(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Er||l===Tr,u=l===pi||l===mi;if(c||u){let f=t.get(a);const m=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return e===null&&(e=new ca(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new ca(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ed(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ci("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function nd(i,t,e,n){const s={},r=new WeakMap;function o(f){const m=f.target;m.index!==null&&t.remove(m.index);for(const _ in m.attributes)t.remove(m.attributes[_]);for(const _ in m.morphAttributes){const v=m.morphAttributes[_];for(let d=0,h=v.length;d<h;d++)t.remove(v[d])}m.removeEventListener("dispose",o),delete s[m.id];const p=r.get(m);p&&(t.remove(p),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(f,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,e.memory.geometries++),m}function l(f){const m=f.attributes;for(const _ in m)t.update(m[_],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const v=p[_];for(let d=0,h=v.length;d<h;d++)t.update(v[d],i.ARRAY_BUFFER)}}function c(f){const m=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const A=p.array;v=p.version;for(let E=0,S=A.length;E<S;E+=3){const H=A[E+0],R=A[E+1],L=A[E+2];m.push(H,R,R,L,L,H)}}else if(_!==void 0){const A=_.array;v=_.version;for(let E=0,S=A.length/3-1;E<S;E+=3){const H=E+0,R=E+1,L=E+2;m.push(H,R,R,L,L,H)}}else return;const d=new(al(m)?fl:ul)(m,1);d.version=v;const h=r.get(f);h&&t.remove(h),r.set(f,d)}function u(f){const m=r.get(f);if(m){const p=f.index;p!==null&&m.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function id(i,t,e){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function l(m,p){i.drawElements(n,p,r,m*o),e.update(p,n,1)}function c(m,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,m*o,_),e.update(p,n,_))}function u(m,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,m,0,_);let d=0;for(let h=0;h<_;h++)d+=p[h];e.update(d,n,1)}function f(m,p,_,v){if(_===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<m.length;h++)c(m[h]/o,p[h],v[h]);else{d.multiDrawElementsInstancedWEBGL(n,p,0,r,m,0,v,0,_);let h=0;for(let A=0;A<_;A++)h+=p[A]*v[A];e.update(h,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function sd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rd(i,t,e){const n=new WeakMap,s=new he;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let m=n.get(a);if(m===void 0||m.count!==f){let T=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",T)};m!==void 0&&m.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let E=0;p===!0&&(E=1),_===!0&&(E=2),v===!0&&(E=3);let S=a.attributes.position.count*E,H=1;S>t.maxTextureSize&&(H=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const R=new Float32Array(S*H*4*f),L=new cl(R,S,H,f);L.type=ln,L.needsUpdate=!0;const F=E*4;for(let M=0;M<f;M++){const P=d[M],q=h[M],B=A[M],G=S*H*4*M;for(let J=0;J<P.count;J++){const Y=J*F;p===!0&&(s.fromBufferAttribute(P,J),R[G+Y+0]=s.x,R[G+Y+1]=s.y,R[G+Y+2]=s.z,R[G+Y+3]=0),_===!0&&(s.fromBufferAttribute(q,J),R[G+Y+4]=s.x,R[G+Y+5]=s.y,R[G+Y+6]=s.z,R[G+Y+7]=0),v===!0&&(s.fromBufferAttribute(B,J),R[G+Y+8]=s.x,R[G+Y+9]=s.y,R[G+Y+10]=s.z,R[G+Y+11]=B.itemSize===4?s.w:1)}}m={count:f,texture:L,size:new at(S,H)},n.set(a,m),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function od(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==c&&(m.update(),s.set(m,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class gl extends Le{constructor(t,e,n,s,r,o,a,l,c,u=ui){if(u!==ui&&u!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ui&&(n=zn),n===void 0&&u===gi&&(n=_i),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=l!==void 0?l:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const vl=new Le,da=new gl(1,1),xl=new cl,Ml=new Xc,Sl=new ml,pa=[],ma=[],_a=new Float32Array(16),ga=new Float32Array(9),va=new Float32Array(4);function yi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=pa[s];if(r===void 0&&(r=new Float32Array(s),pa[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ls(i,t){let e=ma[t];e===void 0&&(e=new Int32Array(t),ma[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ad(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ld(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function cd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function hd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function ud(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;va.set(n),i.uniformMatrix2fv(this.addr,!1,va),me(e,n)}}function fd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;ga.set(n),i.uniformMatrix3fv(this.addr,!1,ga),me(e,n)}}function dd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;_a.set(n),i.uniformMatrix4fv(this.addr,!1,_a),me(e,n)}}function pd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function md(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function _d(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function gd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function vd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function Md(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function Sd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function yd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(da.compareFunction=ol,r=da):r=vl,e.setTexture2D(t||r,s)}function Ed(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ml,s)}function Td(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Sl,s)}function bd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xl,s)}function Ad(i){switch(i){case 5126:return ad;case 35664:return ld;case 35665:return cd;case 35666:return hd;case 35674:return ud;case 35675:return fd;case 35676:return dd;case 5124:case 35670:return pd;case 35667:case 35671:return md;case 35668:case 35672:return _d;case 35669:case 35673:return gd;case 5125:return vd;case 36294:return xd;case 36295:return Md;case 36296:return Sd;case 35678:case 36198:case 36298:case 36306:case 35682:return yd;case 35679:case 36299:case 36307:return Ed;case 35680:case 36300:case 36308:case 36293:return Td;case 36289:case 36303:case 36311:case 36292:return bd}}function wd(i,t){i.uniform1fv(this.addr,t)}function Rd(i,t){const e=yi(t,this.size,2);i.uniform2fv(this.addr,e)}function Cd(i,t){const e=yi(t,this.size,3);i.uniform3fv(this.addr,e)}function Pd(i,t){const e=yi(t,this.size,4);i.uniform4fv(this.addr,e)}function Ld(i,t){const e=yi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Dd(i,t){const e=yi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Id(i,t){const e=yi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ud(i,t){i.uniform1iv(this.addr,t)}function Nd(i,t){i.uniform2iv(this.addr,t)}function Fd(i,t){i.uniform3iv(this.addr,t)}function Od(i,t){i.uniform4iv(this.addr,t)}function zd(i,t){i.uniform1uiv(this.addr,t)}function Bd(i,t){i.uniform2uiv(this.addr,t)}function Hd(i,t){i.uniform3uiv(this.addr,t)}function Vd(i,t){i.uniform4uiv(this.addr,t)}function kd(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||vl,r[o])}function Gd(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ml,r[o])}function Wd(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Sl,r[o])}function Xd(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||xl,r[o])}function Yd(i){switch(i){case 5126:return wd;case 35664:return Rd;case 35665:return Cd;case 35666:return Pd;case 35674:return Ld;case 35675:return Dd;case 35676:return Id;case 5124:case 35670:return Ud;case 35667:case 35671:return Nd;case 35668:case 35672:return Fd;case 35669:case 35673:return Od;case 5125:return zd;case 36294:return Bd;case 36295:return Hd;case 36296:return Vd;case 35678:case 36198:case 36298:case 36306:case 35682:return kd;case 35679:case 36299:case 36307:return Gd;case 35680:case 36300:case 36308:case 36293:return Wd;case 36289:case 36303:case 36311:case 36292:return Xd}}class qd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ad(e.type)}}class Zd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yd(e.type)}}class Kd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const or=/(\w+)(\])?(\[|\.)?/g;function xa(i,t){i.seq.push(t),i.map[t.id]=t}function jd(i,t,e){const n=i.name,s=n.length;for(or.lastIndex=0;;){const r=or.exec(n),o=or.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){xa(e,c===void 0?new qd(a,i,t):new Zd(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Kd(a),xa(e,f)),e=f}}}class Ts{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);jd(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ma(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Jd=37297;let $d=0;function Qd(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Sa=new kt;function tp(i){Kt._getMatrix(Sa,Kt.workingColorSpace,i);const t=`mat3( ${Sa.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case Ps:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ya(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Qd(i.getShaderSource(t),o)}else return s}function ep(i,t){const e=tp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function np(i,t){let e;switch(t){case ic:e="Linear";break;case sc:e="Reinhard";break;case rc:e="Cineon";break;case oc:e="ACESFilmic";break;case lc:e="AgX";break;case cc:e="Neutral";break;case ac:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ds=new U;function ip(){Kt.getLuminanceCoefficients(ds);const i=ds.x.toFixed(4),t=ds.y.toFixed(4),e=ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pi).join(`
`)}function rp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function op(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Pi(i){return i!==""}function Ea(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ta(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qr(i){return i.replace(ap,cp)}const lp=new Map;function cp(i,t){let e=Gt[t];if(e===void 0){const n=lp.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qr(e)}const hp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ba(i){return i.replace(hp,up)}function up(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Aa(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function fp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ya?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===an&&(t="SHADOWMAP_TYPE_VSM"),t}function dp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pi:case mi:t="ENVMAP_TYPE_CUBE";break;case Cs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mi:t="ENVMAP_MODE_REFRACTION";break}return t}function mp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qa:t="ENVMAP_BLENDING_MULTIPLY";break;case ec:t="ENVMAP_BLENDING_MIX";break;case nc:t="ENVMAP_BLENDING_ADD";break}return t}function _p(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function gp(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=fp(e),c=dp(e),u=pp(e),f=mp(e),m=_p(e),p=sp(e),_=rp(r),v=s.createProgram();let d,h,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Pi).join(`
`),d.length>0&&(d+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Pi).join(`
`),h.length>0&&(h+=`
`)):(d=[Aa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),h=[Aa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?Gt.tonemapping_pars_fragment:"",e.toneMapping!==En?np("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,ep("linearToOutputTexel",e.outputColorSpace),ip(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pi).join(`
`)),o=Qr(o),o=Ea(o,e),o=Ta(o,e),a=Qr(a),a=Ea(a,e),a=Ta(a,e),o=ba(o),a=ba(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,h=["#define varying in",e.glslVersion===zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=A+d+o,S=A+h+a,H=Ma(s,s.VERTEX_SHADER,E),R=Ma(s,s.FRAGMENT_SHADER,S);s.attachShader(v,H),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(P){if(i.debug.checkShaderErrors){const q=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(H).trim(),G=s.getShaderInfoLog(R).trim();let J=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,H,R);else{const nt=ya(s,H,"vertex"),K=ya(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+q+`
`+nt+`
`+K)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(B===""||G==="")&&(Y=!1);Y&&(P.diagnostics={runnable:J,programLog:q,vertexShader:{log:B,prefix:d},fragmentShader:{log:G,prefix:h}})}s.deleteShader(H),s.deleteShader(R),F=new Ts(s,v),T=op(s,v)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Jd)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$d++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=H,this.fragmentShader=R,this}let vp=0;class xp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mp(t),e.set(t,n)),n}}class Mp{constructor(t){this.id=vp++,this.code=t,this.usedTimes=0}}function Sp(i,t,e,n,s,r,o){const a=new mo,l=new xp,c=new Set,u=[],f=s.logarithmicDepthBuffer,m=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function d(T,M,P,q,B){const G=q.fog,J=B.geometry,Y=T.isMeshStandardMaterial?q.environment:null,nt=(T.isMeshStandardMaterial?e:t).get(T.envMap||Y),K=nt&&nt.mapping===Cs?nt.image.height:null,pt=_[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const vt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ht=vt!==void 0?vt.length:0;let It=0;J.morphAttributes.position!==void 0&&(It=1),J.morphAttributes.normal!==void 0&&(It=2),J.morphAttributes.color!==void 0&&(It=3);let Yt,Q,rt,bt;if(pt){const gt=Ke[pt];Yt=gt.vertexShader,Q=gt.fragmentShader}else Yt=T.vertexShader,Q=T.fragmentShader,l.update(T),rt=l.getVertexShaderID(T),bt=l.getFragmentShaderID(T);const lt=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),Ot=B.isInstancedMesh===!0,Ut=B.isBatchedMesh===!0,qt=!!T.map,tt=!!T.matcap,ot=!!nt,w=!!T.aoMap,wt=!!T.lightMap,it=!!T.bumpMap,ft=!!T.normalMap,dt=!!T.displacementMap,Nt=!!T.emissiveMap,Mt=!!T.metalnessMap,b=!!T.roughnessMap,g=T.anisotropy>0,V=T.clearcoat>0,$=T.dispersion>0,et=T.iridescence>0,j=T.sheen>0,yt=T.transmission>0,mt=g&&!!T.anisotropyMap,St=V&&!!T.clearcoatMap,Wt=V&&!!T.clearcoatNormalMap,st=V&&!!T.clearcoatRoughnessMap,Et=et&&!!T.iridescenceMap,Ft=et&&!!T.iridescenceThicknessMap,zt=j&&!!T.sheenColorMap,Tt=j&&!!T.sheenRoughnessMap,Xt=!!T.specularMap,Ht=!!T.specularColorMap,$t=!!T.specularIntensityMap,x=yt&&!!T.transmissionMap,D=yt&&!!T.thicknessMap,C=!!T.gradientMap,I=!!T.alphaMap,k=T.alphaTest>0,N=!!T.alphaHash,Z=!!T.extensions;let ct=En;T.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ct=i.toneMapping);const At={shaderID:pt,shaderType:T.type,shaderName:T.name,vertexShader:Yt,fragmentShader:Q,defines:T.defines,customVertexShaderID:rt,customFragmentShaderID:bt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ut,batchingColor:Ut&&B._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&B.instanceColor!==null,instancingMorph:Ot&&B.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:xi,alphaToCoverage:!!T.alphaToCoverage,map:qt,matcap:tt,envMap:ot,envMapMode:ot&&nt.mapping,envMapCubeUVHeight:K,aoMap:w,lightMap:wt,bumpMap:it,normalMap:ft,displacementMap:m&&dt,emissiveMap:Nt,normalMapObjectSpace:ft&&T.normalMapType===dc,normalMapTangentSpace:ft&&T.normalMapType===rl,metalnessMap:Mt,roughnessMap:b,anisotropy:g,anisotropyMap:mt,clearcoat:V,clearcoatMap:St,clearcoatNormalMap:Wt,clearcoatRoughnessMap:st,dispersion:$,iridescence:et,iridescenceMap:Et,iridescenceThicknessMap:Ft,sheen:j,sheenColorMap:zt,sheenRoughnessMap:Tt,specularMap:Xt,specularColorMap:Ht,specularIntensityMap:$t,transmission:yt,transmissionMap:x,thicknessMap:D,gradientMap:C,opaque:T.transparent===!1&&T.blending===hi&&T.alphaToCoverage===!1,alphaMap:I,alphaTest:k,alphaHash:N,combine:T.combine,mapUv:qt&&v(T.map.channel),aoMapUv:w&&v(T.aoMap.channel),lightMapUv:wt&&v(T.lightMap.channel),bumpMapUv:it&&v(T.bumpMap.channel),normalMapUv:ft&&v(T.normalMap.channel),displacementMapUv:dt&&v(T.displacementMap.channel),emissiveMapUv:Nt&&v(T.emissiveMap.channel),metalnessMapUv:Mt&&v(T.metalnessMap.channel),roughnessMapUv:b&&v(T.roughnessMap.channel),anisotropyMapUv:mt&&v(T.anisotropyMap.channel),clearcoatMapUv:St&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&v(T.sheenRoughnessMap.channel),specularMapUv:Xt&&v(T.specularMap.channel),specularColorMapUv:Ht&&v(T.specularColorMap.channel),specularIntensityMapUv:$t&&v(T.specularIntensityMap.channel),transmissionMapUv:x&&v(T.transmissionMap.channel),thicknessMapUv:D&&v(T.thicknessMap.channel),alphaMapUv:I&&v(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ft||g),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(qt||I),fog:!!G,useFog:T.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Dt,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:It,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,decodeVideoTexture:qt&&T.map.isVideoTexture===!0&&Kt.getTransfer(T.map.colorSpace)===ee,decodeVideoTextureEmissive:Nt&&T.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(T.emissiveMap.colorSpace)===ee,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===We,flipSided:T.side===Pe,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Z&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Z&&T.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function h(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)M.push(P),M.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(A(M,T),E(M,T),M.push(i.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function A(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function E(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function S(T){const M=_[T.type];let P;if(M){const q=Ke[M];P=ih.clone(q.uniforms)}else P=T.uniforms;return P}function H(T,M){let P;for(let q=0,B=u.length;q<B;q++){const G=u[q];if(G.cacheKey===M){P=G,++P.usedTimes;break}}return P===void 0&&(P=new gp(i,M,T,r),u.push(P)),P}function R(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function L(T){l.remove(T)}function F(){l.dispose()}return{getParameters:d,getProgramCacheKey:h,getUniforms:S,acquireProgram:H,releaseProgram:R,releaseShaderCache:L,programs:u,dispose:F}}function yp(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ep(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function wa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ra(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,m,p,_,v,d){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:m,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:d},i[t]=h):(h.id=f.id,h.object=f,h.geometry=m,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=v,h.group=d),t++,h}function a(f,m,p,_,v,d){const h=o(f,m,p,_,v,d);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(f,m,p,_,v,d){const h=o(f,m,p,_,v,d);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function c(f,m){e.length>1&&e.sort(f||Ep),n.length>1&&n.sort(m||wa),s.length>1&&s.sort(m||wa)}function u(){for(let f=t,m=i.length;f<m;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Tp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ra,i.set(n,[o])):s>=r.length?(o=new Ra,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function bp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Jt};break;case"SpotLight":e={position:new U,direction:new U,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Ap(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let wp=0;function Rp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Cp(i){const t=new bp,e=Ap(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new le,o=new le;function a(c){let u=0,f=0,m=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,_=0,v=0,d=0,h=0,A=0,E=0,S=0,H=0,R=0,L=0;c.sort(Rp);for(let T=0,M=c.length;T<M;T++){const P=c[T],q=P.color,B=P.intensity,G=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=q.r*B,f+=q.g*B,m+=q.b*B;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],B);L++}else if(P.isDirectionalLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const nt=P.shadow,K=e.get(P);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=P.shadow.matrix,A++}n.directional[p]=Y,p++}else if(P.isSpotLight){const Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(q).multiplyScalar(B),Y.distance=G,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[v]=Y;const nt=P.shadow;if(P.map&&(n.spotLightMap[H]=P.map,H++,nt.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[v]=nt.matrix,P.castShadow){const K=e.get(P);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,n.spotShadow[v]=K,n.spotShadowMap[v]=J,S++}v++}else if(P.isRectAreaLight){const Y=t.get(P);Y.color.copy(q).multiplyScalar(B),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[d]=Y,d++}else if(P.isPointLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const nt=P.shadow,K=e.get(P);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,K.shadowCameraNear=nt.camera.near,K.shadowCameraFar=nt.camera.far,n.pointShadow[_]=K,n.pointShadowMap[_]=J,n.pointShadowMatrix[_]=P.shadow.matrix,E++}n.point[_]=Y,_++}else if(P.isHemisphereLight){const Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(B),Y.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[h]=Y,h++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=m;const F=n.hash;(F.directionalLength!==p||F.pointLength!==_||F.spotLength!==v||F.rectAreaLength!==d||F.hemiLength!==h||F.numDirectionalShadows!==A||F.numPointShadows!==E||F.numSpotShadows!==S||F.numSpotMaps!==H||F.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=d,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+H-R,n.spotLightMap.length=H,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=L,F.directionalLength=p,F.pointLength=_,F.spotLength=v,F.rectAreaLength=d,F.hemiLength=h,F.numDirectionalShadows=A,F.numPointShadows=E,F.numSpotShadows=S,F.numSpotMaps=H,F.numLightProbes=L,n.version=wp++)}function l(c,u){let f=0,m=0,p=0,_=0,v=0;const d=u.matrixWorldInverse;for(let h=0,A=c.length;h<A;h++){const E=c[h];if(E.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),f++}else if(E.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),p++}else if(E.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(d),o.identity(),r.copy(E.matrixWorld),r.premultiply(d),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const S=n.point[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(d),m++}else if(E.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(d),v++}}}return{setup:a,setupView:l,state:n}}function Ca(i){const t=new Cp(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Pp(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ca(i),t.set(s,[a])):r>=o.length?(a=new Ca(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Lp extends Mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dp extends Mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ip=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Up=`uniform sampler2D shadow_pass;
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
}`;function Np(i,t,e){let n=new _o;const s=new at,r=new at,o=new he,a=new Lp({depthPacking:fc}),l=new Dp,c={},u=e.maxTextureSize,f={[bn]:Pe,[Pe]:bn,[We]:We},m=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Ip,fragmentShader:Up}),p=m.clone();p.defines.HORIZONTAL_PASS=1;const _=new De;_.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ae(_,m),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xa;let h=this.type;this.render=function(R,L,F){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;const T=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),q=i.state;q.setBlending(yn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const B=h!==an&&this.type===an,G=h===an&&this.type!==an;for(let J=0,Y=R.length;J<Y;J++){const nt=R[J],K=nt.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const pt=K.getFrameExtents();if(s.multiply(pt),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pt.x),s.x=r.x*pt.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pt.y),s.y=r.y*pt.y,K.mapSize.y=r.y)),K.map===null||B===!0||G===!0){const ht=this.type!==an?{minFilter:qe,magFilter:qe}:{};K.map!==null&&K.map.dispose(),K.map=new Bn(s.x,s.y,ht),K.map.texture.name=nt.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const vt=K.getViewportCount();for(let ht=0;ht<vt;ht++){const It=K.getViewport(ht);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),q.viewport(o),K.updateMatrices(nt,ht),n=K.getFrustum(),S(L,F,K.camera,nt,this.type)}K.isPointLightShadow!==!0&&this.type===an&&A(K,F),K.needsUpdate=!1}h=this.type,d.needsUpdate=!1,i.setRenderTarget(T,M,P)};function A(R,L){const F=t.update(v);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Bn(s.x,s.y)),m.uniforms.shadow_pass.value=R.map.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(L,null,F,m,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(L,null,F,p,v,null)}function E(R,L,F,T){let M=null;const P=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)M=P;else if(M=F.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const q=M.uuid,B=L.uuid;let G=c[q];G===void 0&&(G={},c[q]=G);let J=G[B];J===void 0&&(J=M.clone(),G[B]=J,L.addEventListener("dispose",H)),M=J}if(M.visible=L.visible,M.wireframe=L.wireframe,T===an?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:f[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=i.properties.get(M);q.light=F}return M}function S(R,L,F,T,M){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===an)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const B=t.update(R),G=R.material;if(Array.isArray(G)){const J=B.groups;for(let Y=0,nt=J.length;Y<nt;Y++){const K=J[Y],pt=G[K.materialIndex];if(pt&&pt.visible){const vt=E(R,pt,T,M);R.onBeforeShadow(i,R,L,F,B,vt,K),i.renderBufferDirect(F,null,B,vt,R,K),R.onAfterShadow(i,R,L,F,B,vt,K)}}}else if(G.visible){const J=E(R,G,T,M);R.onBeforeShadow(i,R,L,F,B,J,null),i.renderBufferDirect(F,null,B,J,R,null),R.onAfterShadow(i,R,L,F,B,J,null)}}const q=R.children;for(let B=0,G=q.length;B<G;B++)S(q[B],L,F,T,M)}function H(R){R.target.removeEventListener("dispose",H);for(const F in c){const T=c[F],M=R.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const Fp={[_r]:gr,[vr]:Sr,[xr]:yr,[di]:Mr,[gr]:_r,[Sr]:vr,[yr]:xr,[Mr]:di};function Op(i,t){function e(){let x=!1;const D=new he;let C=null;const I=new he(0,0,0,0);return{setMask:function(k){C!==k&&!x&&(i.colorMask(k,k,k,k),C=k)},setLocked:function(k){x=k},setClear:function(k,N,Z,ct,At){At===!0&&(k*=ct,N*=ct,Z*=ct),D.set(k,N,Z,ct),I.equals(D)===!1&&(i.clearColor(k,N,Z,ct),I.copy(D))},reset:function(){x=!1,C=null,I.set(-1,0,0,0)}}}function n(){let x=!1,D=!1,C=null,I=null,k=null;return{setReversed:function(N){if(D!==N){const Z=t.get("EXT_clip_control");D?Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.ZERO_TO_ONE_EXT):Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.NEGATIVE_ONE_TO_ONE_EXT);const ct=k;k=null,this.setClear(ct)}D=N},getReversed:function(){return D},setTest:function(N){N?lt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(N){C!==N&&!x&&(i.depthMask(N),C=N)},setFunc:function(N){if(D&&(N=Fp[N]),I!==N){switch(N){case _r:i.depthFunc(i.NEVER);break;case gr:i.depthFunc(i.ALWAYS);break;case vr:i.depthFunc(i.LESS);break;case di:i.depthFunc(i.LEQUAL);break;case xr:i.depthFunc(i.EQUAL);break;case Mr:i.depthFunc(i.GEQUAL);break;case Sr:i.depthFunc(i.GREATER);break;case yr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}I=N}},setLocked:function(N){x=N},setClear:function(N){k!==N&&(D&&(N=1-N),i.clearDepth(N),k=N)},reset:function(){x=!1,C=null,I=null,k=null,D=!1}}}function s(){let x=!1,D=null,C=null,I=null,k=null,N=null,Z=null,ct=null,At=null;return{setTest:function(gt){x||(gt?lt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(gt){D!==gt&&!x&&(i.stencilMask(gt),D=gt)},setFunc:function(gt,Zt,ie){(C!==gt||I!==Zt||k!==ie)&&(i.stencilFunc(gt,Zt,ie),C=gt,I=Zt,k=ie)},setOp:function(gt,Zt,ie){(N!==gt||Z!==Zt||ct!==ie)&&(i.stencilOp(gt,Zt,ie),N=gt,Z=Zt,ct=ie)},setLocked:function(gt){x=gt},setClear:function(gt){At!==gt&&(i.clearStencil(gt),At=gt)},reset:function(){x=!1,D=null,C=null,I=null,k=null,N=null,Z=null,ct=null,At=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},m=new WeakMap,p=[],_=null,v=!1,d=null,h=null,A=null,E=null,S=null,H=null,R=null,L=new Jt(0,0,0),F=0,T=!1,M=null,P=null,q=null,B=null,G=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,nt=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=nt>=1):K.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=nt>=2);let pt=null,vt={};const ht=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),Yt=new he().fromArray(ht),Q=new he().fromArray(It);function rt(x,D,C,I){const k=new Uint8Array(4),N=i.createTexture();i.bindTexture(x,N),i.texParameteri(x,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(x,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Z=0;Z<C;Z++)x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY?i.texImage3D(D,0,i.RGBA,1,1,I,0,i.RGBA,i.UNSIGNED_BYTE,k):i.texImage2D(D+Z,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,k);return N}const bt={};bt[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(di),it(!1),ft(Do),lt(i.CULL_FACE),w(yn);function lt(x){u[x]!==!0&&(i.enable(x),u[x]=!0)}function Dt(x){u[x]!==!1&&(i.disable(x),u[x]=!1)}function Ot(x,D){return f[x]!==D?(i.bindFramebuffer(x,D),f[x]=D,x===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=D),x===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=D),!0):!1}function Ut(x,D){let C=p,I=!1;if(x){C=m.get(D),C===void 0&&(C=[],m.set(D,C));const k=x.textures;if(C.length!==k.length||C[0]!==i.COLOR_ATTACHMENT0){for(let N=0,Z=k.length;N<Z;N++)C[N]=i.COLOR_ATTACHMENT0+N;C.length=k.length,I=!0}}else C[0]!==i.BACK&&(C[0]=i.BACK,I=!0);I&&i.drawBuffers(C)}function qt(x){return _!==x?(i.useProgram(x),_=x,!0):!1}const tt={[Un]:i.FUNC_ADD,[zl]:i.FUNC_SUBTRACT,[Bl]:i.FUNC_REVERSE_SUBTRACT};tt[Hl]=i.MIN,tt[Vl]=i.MAX;const ot={[kl]:i.ZERO,[Gl]:i.ONE,[Wl]:i.SRC_COLOR,[pr]:i.SRC_ALPHA,[jl]:i.SRC_ALPHA_SATURATE,[Zl]:i.DST_COLOR,[Yl]:i.DST_ALPHA,[Xl]:i.ONE_MINUS_SRC_COLOR,[mr]:i.ONE_MINUS_SRC_ALPHA,[Kl]:i.ONE_MINUS_DST_COLOR,[ql]:i.ONE_MINUS_DST_ALPHA,[Jl]:i.CONSTANT_COLOR,[$l]:i.ONE_MINUS_CONSTANT_COLOR,[Ql]:i.CONSTANT_ALPHA,[tc]:i.ONE_MINUS_CONSTANT_ALPHA};function w(x,D,C,I,k,N,Z,ct,At,gt){if(x===yn){v===!0&&(Dt(i.BLEND),v=!1);return}if(v===!1&&(lt(i.BLEND),v=!0),x!==Ol){if(x!==d||gt!==T){if((h!==Un||S!==Un)&&(i.blendEquation(i.FUNC_ADD),h=Un,S=Un),gt)switch(x){case hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Io:i.blendFunc(i.ONE,i.ONE);break;case Uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case No:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Io:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case No:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}A=null,E=null,H=null,R=null,L.set(0,0,0),F=0,d=x,T=gt}return}k=k||D,N=N||C,Z=Z||I,(D!==h||k!==S)&&(i.blendEquationSeparate(tt[D],tt[k]),h=D,S=k),(C!==A||I!==E||N!==H||Z!==R)&&(i.blendFuncSeparate(ot[C],ot[I],ot[N],ot[Z]),A=C,E=I,H=N,R=Z),(ct.equals(L)===!1||At!==F)&&(i.blendColor(ct.r,ct.g,ct.b,At),L.copy(ct),F=At),d=x,T=!1}function wt(x,D){x.side===We?Dt(i.CULL_FACE):lt(i.CULL_FACE);let C=x.side===Pe;D&&(C=!C),it(C),x.blending===hi&&x.transparent===!1?w(yn):w(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),o.setFunc(x.depthFunc),o.setTest(x.depthTest),o.setMask(x.depthWrite),r.setMask(x.colorWrite);const I=x.stencilWrite;a.setTest(I),I&&(a.setMask(x.stencilWriteMask),a.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),a.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),Nt(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(x){M!==x&&(x?i.frontFace(i.CW):i.frontFace(i.CCW),M=x)}function ft(x){x!==Nl?(lt(i.CULL_FACE),x!==P&&(x===Do?i.cullFace(i.BACK):x===Fl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),P=x}function dt(x){x!==q&&(Y&&i.lineWidth(x),q=x)}function Nt(x,D,C){x?(lt(i.POLYGON_OFFSET_FILL),(B!==D||G!==C)&&(i.polygonOffset(D,C),B=D,G=C)):Dt(i.POLYGON_OFFSET_FILL)}function Mt(x){x?lt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function b(x){x===void 0&&(x=i.TEXTURE0+J-1),pt!==x&&(i.activeTexture(x),pt=x)}function g(x,D,C){C===void 0&&(pt===null?C=i.TEXTURE0+J-1:C=pt);let I=vt[C];I===void 0&&(I={type:void 0,texture:void 0},vt[C]=I),(I.type!==x||I.texture!==D)&&(pt!==C&&(i.activeTexture(C),pt=C),i.bindTexture(x,D||bt[x]),I.type=x,I.texture=D)}function V(){const x=vt[pt];x!==void 0&&x.type!==void 0&&(i.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function zt(x){Yt.equals(x)===!1&&(i.scissor(x.x,x.y,x.z,x.w),Yt.copy(x))}function Tt(x){Q.equals(x)===!1&&(i.viewport(x.x,x.y,x.z,x.w),Q.copy(x))}function Xt(x,D){let C=c.get(D);C===void 0&&(C=new WeakMap,c.set(D,C));let I=C.get(x);I===void 0&&(I=i.getUniformBlockIndex(D,x.name),C.set(x,I))}function Ht(x,D){const I=c.get(D).get(x);l.get(D)!==I&&(i.uniformBlockBinding(D,I,x.__bindingPointIndex),l.set(D,I))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},pt=null,vt={},f={},m=new WeakMap,p=[],_=null,v=!1,d=null,h=null,A=null,E=null,S=null,H=null,R=null,L=new Jt(0,0,0),F=0,T=!1,M=null,P=null,q=null,B=null,G=null,Yt.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Dt,bindFramebuffer:Ot,drawBuffers:Ut,useProgram:qt,setBlending:w,setMaterial:wt,setFlipSided:it,setCullFace:ft,setLineWidth:dt,setPolygonOffset:Nt,setScissorTest:Mt,activeTexture:b,bindTexture:g,unbindTexture:V,compressedTexImage2D:$,compressedTexImage3D:et,texImage2D:Et,texImage3D:Ft,updateUBOMapping:Xt,uniformBlockBinding:Ht,texStorage2D:Wt,texStorage3D:st,texSubImage2D:j,texSubImage3D:yt,compressedTexSubImage2D:mt,compressedTexSubImage3D:St,scissor:zt,viewport:Tt,reset:$t}}function Pa(i,t,e,n){const s=zp(n);switch(e){case $a:return i*t;case tl:return i*t;case el:return i*t*2;case nl:return i*t/s.components*s.byteLength;case lo:return i*t/s.components*s.byteLength;case il:return i*t*2/s.components*s.byteLength;case co:return i*t*2/s.components*s.byteLength;case Qa:return i*t*3/s.components*s.byteLength;case Ye:return i*t*4/s.components*s.byteLength;case ho:return i*t*4/s.components*s.byteLength;case vs:case xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ms:case Ss:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rr:case Pr:return Math.max(i,16)*Math.max(t,8)/4;case wr:case Cr:return Math.max(i,8)*Math.max(t,8)/2;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Or:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case zr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Br:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Hr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case kr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Gr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Yr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ys:case Zr:case Kr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case sl:case jr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Jr:case $r:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zp(i){switch(i){case un:case Ka:return{byteLength:1,components:1};case Oi:case ja:case ki:return{byteLength:2,components:1};case oo:case ao:return{byteLength:2,components:4};case zn:case ro:case ln:return{byteLength:4,components:1};case Ja:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Bp(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let f;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,g){return p?new OffscreenCanvas(b,g):As("canvas")}function v(b,g,V){let $=1;const et=Mt(b);if((et.width>V||et.height>V)&&($=V/Math.max(et.width,et.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const j=Math.floor($*et.width),yt=Math.floor($*et.height);f===void 0&&(f=_(j,yt));const mt=g?_(j,yt):f;return mt.width=j,mt.height=yt,mt.getContext("2d").drawImage(b,0,0,j,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+yt+")."),mt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),b;return b}function d(b){return b.generateMipmaps}function h(b){i.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,g,V,$,et=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let j=g;if(g===i.RED&&(V===i.FLOAT&&(j=i.R32F),V===i.HALF_FLOAT&&(j=i.R16F),V===i.UNSIGNED_BYTE&&(j=i.R8)),g===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.R8UI),V===i.UNSIGNED_SHORT&&(j=i.R16UI),V===i.UNSIGNED_INT&&(j=i.R32UI),V===i.BYTE&&(j=i.R8I),V===i.SHORT&&(j=i.R16I),V===i.INT&&(j=i.R32I)),g===i.RG&&(V===i.FLOAT&&(j=i.RG32F),V===i.HALF_FLOAT&&(j=i.RG16F),V===i.UNSIGNED_BYTE&&(j=i.RG8)),g===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RG8UI),V===i.UNSIGNED_SHORT&&(j=i.RG16UI),V===i.UNSIGNED_INT&&(j=i.RG32UI),V===i.BYTE&&(j=i.RG8I),V===i.SHORT&&(j=i.RG16I),V===i.INT&&(j=i.RG32I)),g===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGB8UI),V===i.UNSIGNED_SHORT&&(j=i.RGB16UI),V===i.UNSIGNED_INT&&(j=i.RGB32UI),V===i.BYTE&&(j=i.RGB8I),V===i.SHORT&&(j=i.RGB16I),V===i.INT&&(j=i.RGB32I)),g===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),V===i.UNSIGNED_INT&&(j=i.RGBA32UI),V===i.BYTE&&(j=i.RGBA8I),V===i.SHORT&&(j=i.RGBA16I),V===i.INT&&(j=i.RGBA32I)),g===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),g===i.RGBA){const yt=et?Ps:Kt.getTransfer($);V===i.FLOAT&&(j=i.RGBA32F),V===i.HALF_FLOAT&&(j=i.RGBA16F),V===i.UNSIGNED_BYTE&&(j=yt===ee?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function S(b,g){let V;return b?g===null||g===zn||g===_i?V=i.DEPTH24_STENCIL8:g===ln?V=i.DEPTH32F_STENCIL8:g===Oi&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===zn||g===_i?V=i.DEPTH_COMPONENT24:g===ln?V=i.DEPTH_COMPONENT32F:g===Oi&&(V=i.DEPTH_COMPONENT16),V}function H(b,g){return d(b)===!0||b.isFramebufferTexture&&b.minFilter!==qe&&b.minFilter!==je?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function R(b){const g=b.target;g.removeEventListener("dispose",R),F(g),g.isVideoTexture&&u.delete(g)}function L(b){const g=b.target;g.removeEventListener("dispose",L),M(g)}function F(b){const g=n.get(b);if(g.__webglInit===void 0)return;const V=b.source,$=m.get(V);if($){const et=$[g.__cacheKey];et.usedTimes--,et.usedTimes===0&&T(b),Object.keys($).length===0&&m.delete(V)}n.remove(b)}function T(b){const g=n.get(b);i.deleteTexture(g.__webglTexture);const V=b.source,$=m.get(V);delete $[g.__cacheKey],o.memory.textures--}function M(b){const g=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(g.__webglFramebuffer[$]))for(let et=0;et<g.__webglFramebuffer[$].length;et++)i.deleteFramebuffer(g.__webglFramebuffer[$][et]);else i.deleteFramebuffer(g.__webglFramebuffer[$]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[$])}else{if(Array.isArray(g.__webglFramebuffer))for(let $=0;$<g.__webglFramebuffer.length;$++)i.deleteFramebuffer(g.__webglFramebuffer[$]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let $=0;$<g.__webglColorRenderbuffer.length;$++)g.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const V=b.textures;for(let $=0,et=V.length;$<et;$++){const j=n.get(V[$]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(V[$])}n.remove(b)}let P=0;function q(){P=0}function B(){const b=P;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),P+=1,b}function G(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function J(b,g){const V=n.get(b);if(b.isVideoTexture&&dt(b),b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,b,g);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+g)}function Y(b,g){const V=n.get(b);if(b.version>0&&V.__version!==b.version){Q(V,b,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+g)}function nt(b,g){const V=n.get(b);if(b.version>0&&V.__version!==b.version){Q(V,b,g);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+g)}function K(b,g){const V=n.get(b);if(b.version>0&&V.__version!==b.version){rt(V,b,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+g)}const pt={[br]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Ar]:i.MIRRORED_REPEAT},vt={[qe]:i.NEAREST,[hc]:i.NEAREST_MIPMAP_NEAREST,[qi]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[Us]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},ht={[pc]:i.NEVER,[Mc]:i.ALWAYS,[mc]:i.LESS,[ol]:i.LEQUAL,[_c]:i.EQUAL,[xc]:i.GEQUAL,[gc]:i.GREATER,[vc]:i.NOTEQUAL};function It(b,g){if(g.type===ln&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===je||g.magFilter===Us||g.magFilter===qi||g.magFilter===On||g.minFilter===je||g.minFilter===Us||g.minFilter===qi||g.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,pt[g.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,pt[g.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,pt[g.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,vt[g.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,vt[g.minFilter]),g.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ht[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===qe||g.minFilter!==qi&&g.minFilter!==On||g.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Yt(b,g){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",R));const $=g.source;let et=m.get($);et===void 0&&(et={},m.set($,et));const j=G(g);if(j!==b.__cacheKey){et[j]===void 0&&(et[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),et[j].usedTimes++;const yt=et[b.__cacheKey];yt!==void 0&&(et[b.__cacheKey].usedTimes--,yt.usedTimes===0&&T(g)),b.__cacheKey=j,b.__webglTexture=et[j].texture}return V}function Q(b,g,V){let $=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=i.TEXTURE_3D);const et=Yt(b,g),j=g.source;e.bindTexture($,b.__webglTexture,i.TEXTURE0+V);const yt=n.get(j);if(j.version!==yt.__version||et===!0){e.activeTexture(i.TEXTURE0+V);const mt=Kt.getPrimaries(Kt.workingColorSpace),St=g.colorSpace===Sn?null:Kt.getPrimaries(g.colorSpace),Wt=g.colorSpace===Sn||mt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let st=v(g.image,!1,s.maxTextureSize);st=Nt(g,st);const Et=r.convert(g.format,g.colorSpace),Ft=r.convert(g.type);let zt=E(g.internalFormat,Et,Ft,g.colorSpace,g.isVideoTexture);It($,g);let Tt;const Xt=g.mipmaps,Ht=g.isVideoTexture!==!0,$t=yt.__version===void 0||et===!0,x=j.dataReady,D=H(g,st);if(g.isDepthTexture)zt=S(g.format===gi,g.type),$t&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,zt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,zt,st.width,st.height,0,Et,Ft,null));else if(g.isDataTexture)if(Xt.length>0){Ht&&$t&&e.texStorage2D(i.TEXTURE_2D,D,zt,Xt[0].width,Xt[0].height);for(let C=0,I=Xt.length;C<I;C++)Tt=Xt[C],Ht?x&&e.texSubImage2D(i.TEXTURE_2D,C,0,0,Tt.width,Tt.height,Et,Ft,Tt.data):e.texImage2D(i.TEXTURE_2D,C,zt,Tt.width,Tt.height,0,Et,Ft,Tt.data);g.generateMipmaps=!1}else Ht?($t&&e.texStorage2D(i.TEXTURE_2D,D,zt,st.width,st.height),x&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,Et,Ft,st.data)):e.texImage2D(i.TEXTURE_2D,0,zt,st.width,st.height,0,Et,Ft,st.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ht&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,D,zt,Xt[0].width,Xt[0].height,st.depth);for(let C=0,I=Xt.length;C<I;C++)if(Tt=Xt[C],g.format!==Ye)if(Et!==null)if(Ht){if(x)if(g.layerUpdates.size>0){const k=Pa(Tt.width,Tt.height,g.format,g.type);for(const N of g.layerUpdates){const Z=Tt.data.subarray(N*k/Tt.data.BYTES_PER_ELEMENT,(N+1)*k/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,C,0,0,N,Tt.width,Tt.height,1,Et,Z)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,C,0,0,0,Tt.width,Tt.height,st.depth,Et,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,C,zt,Tt.width,Tt.height,st.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?x&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,C,0,0,0,Tt.width,Tt.height,st.depth,Et,Ft,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,C,zt,Tt.width,Tt.height,st.depth,0,Et,Ft,Tt.data)}else{Ht&&$t&&e.texStorage2D(i.TEXTURE_2D,D,zt,Xt[0].width,Xt[0].height);for(let C=0,I=Xt.length;C<I;C++)Tt=Xt[C],g.format!==Ye?Et!==null?Ht?x&&e.compressedTexSubImage2D(i.TEXTURE_2D,C,0,0,Tt.width,Tt.height,Et,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,C,zt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?x&&e.texSubImage2D(i.TEXTURE_2D,C,0,0,Tt.width,Tt.height,Et,Ft,Tt.data):e.texImage2D(i.TEXTURE_2D,C,zt,Tt.width,Tt.height,0,Et,Ft,Tt.data)}else if(g.isDataArrayTexture)if(Ht){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,D,zt,st.width,st.height,st.depth),x)if(g.layerUpdates.size>0){const C=Pa(st.width,st.height,g.format,g.type);for(const I of g.layerUpdates){const k=st.data.subarray(I*C/st.data.BYTES_PER_ELEMENT,(I+1)*C/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,I,st.width,st.height,1,Et,Ft,k)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Et,Ft,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,st.width,st.height,st.depth,0,Et,Ft,st.data);else if(g.isData3DTexture)Ht?($t&&e.texStorage3D(i.TEXTURE_3D,D,zt,st.width,st.height,st.depth),x&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Et,Ft,st.data)):e.texImage3D(i.TEXTURE_3D,0,zt,st.width,st.height,st.depth,0,Et,Ft,st.data);else if(g.isFramebufferTexture){if($t)if(Ht)e.texStorage2D(i.TEXTURE_2D,D,zt,st.width,st.height);else{let C=st.width,I=st.height;for(let k=0;k<D;k++)e.texImage2D(i.TEXTURE_2D,k,zt,C,I,0,Et,Ft,null),C>>=1,I>>=1}}else if(Xt.length>0){if(Ht&&$t){const C=Mt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,D,zt,C.width,C.height)}for(let C=0,I=Xt.length;C<I;C++)Tt=Xt[C],Ht?x&&e.texSubImage2D(i.TEXTURE_2D,C,0,0,Et,Ft,Tt):e.texImage2D(i.TEXTURE_2D,C,zt,Et,Ft,Tt);g.generateMipmaps=!1}else if(Ht){if($t){const C=Mt(st);e.texStorage2D(i.TEXTURE_2D,D,zt,C.width,C.height)}x&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Ft,st)}else e.texImage2D(i.TEXTURE_2D,0,zt,Et,Ft,st);d(g)&&h($),yt.__version=j.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function rt(b,g,V){if(g.image.length!==6)return;const $=Yt(b,g),et=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+V);const j=n.get(et);if(et.version!==j.__version||$===!0){e.activeTexture(i.TEXTURE0+V);const yt=Kt.getPrimaries(Kt.workingColorSpace),mt=g.colorSpace===Sn?null:Kt.getPrimaries(g.colorSpace),St=g.colorSpace===Sn||yt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Wt=g.isCompressedTexture||g.image[0].isCompressedTexture,st=g.image[0]&&g.image[0].isDataTexture,Et=[];for(let I=0;I<6;I++)!Wt&&!st?Et[I]=v(g.image[I],!0,s.maxCubemapSize):Et[I]=st?g.image[I].image:g.image[I],Et[I]=Nt(g,Et[I]);const Ft=Et[0],zt=r.convert(g.format,g.colorSpace),Tt=r.convert(g.type),Xt=E(g.internalFormat,zt,Tt,g.colorSpace),Ht=g.isVideoTexture!==!0,$t=j.__version===void 0||$===!0,x=et.dataReady;let D=H(g,Ft);It(i.TEXTURE_CUBE_MAP,g);let C;if(Wt){Ht&&$t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,D,Xt,Ft.width,Ft.height);for(let I=0;I<6;I++){C=Et[I].mipmaps;for(let k=0;k<C.length;k++){const N=C[k];g.format!==Ye?zt!==null?Ht?x&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,k,0,0,N.width,N.height,zt,N.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,k,Xt,N.width,N.height,0,N.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?x&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,k,0,0,N.width,N.height,zt,Tt,N.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,k,Xt,N.width,N.height,0,zt,Tt,N.data)}}}else{if(C=g.mipmaps,Ht&&$t){C.length>0&&D++;const I=Mt(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,D,Xt,I.width,I.height)}for(let I=0;I<6;I++)if(st){Ht?x&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,Et[I].width,Et[I].height,zt,Tt,Et[I].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,Xt,Et[I].width,Et[I].height,0,zt,Tt,Et[I].data);for(let k=0;k<C.length;k++){const Z=C[k].image[I].image;Ht?x&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,k+1,0,0,Z.width,Z.height,zt,Tt,Z.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,k+1,Xt,Z.width,Z.height,0,zt,Tt,Z.data)}}else{Ht?x&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,zt,Tt,Et[I]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,Xt,zt,Tt,Et[I]);for(let k=0;k<C.length;k++){const N=C[k];Ht?x&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,k+1,0,0,zt,Tt,N.image[I]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,k+1,Xt,zt,Tt,N.image[I])}}}d(g)&&h(i.TEXTURE_CUBE_MAP),j.__version=et.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function bt(b,g,V,$,et,j){const yt=r.convert(V.format,V.colorSpace),mt=r.convert(V.type),St=E(V.internalFormat,yt,mt,V.colorSpace),Wt=n.get(g),st=n.get(V);if(st.__renderTarget=g,!Wt.__hasExternalTextures){const Et=Math.max(1,g.width>>j),Ft=Math.max(1,g.height>>j);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,j,St,Et,Ft,g.depth,0,yt,mt,null):e.texImage2D(et,j,St,Et,Ft,0,yt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),ft(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,et,st.__webglTexture,0,it(g)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,et,st.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(b,g,V){if(i.bindRenderbuffer(i.RENDERBUFFER,b),g.depthBuffer){const $=g.depthTexture,et=$&&$.isDepthTexture?$.type:null,j=S(g.stencilBuffer,et),yt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=it(g);ft(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,j,g.width,g.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,j,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,j,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,b)}else{const $=g.textures;for(let et=0;et<$.length;et++){const j=$[et],yt=r.convert(j.format,j.colorSpace),mt=r.convert(j.type),St=E(j.internalFormat,yt,mt,j.colorSpace),Wt=it(g);V&&ft(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,St,g.width,g.height):ft(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,St,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,St,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(g.depthTexture);$.__renderTarget=g,(!$.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),J(g.depthTexture,0);const et=$.__webglTexture,j=it(g);if(g.depthTexture.format===ui)ft(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(g.depthTexture.format===gi)ft(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ot(b){const g=n.get(b),V=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),$){const et=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,$.removeEventListener("dispose",et)};$.addEventListener("dispose",et),g.__depthDisposeCallback=et}g.__boundDepthTexture=$}if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Dt(g.__webglFramebuffer,b)}else if(V){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]===void 0)g.__webglDepthbuffer[$]=i.createRenderbuffer(),lt(g.__webglDepthbuffer[$],b,!1);else{const et=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=g.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),lt(g.__webglDepthbuffer,b,!1);else{const $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(b,g,V){const $=n.get(b);g!==void 0&&bt($.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ot(b)}function qt(b){const g=b.texture,V=n.get(b),$=n.get(g);b.addEventListener("dispose",L);const et=b.textures,j=b.isWebGLCubeRenderTarget===!0,yt=et.length>1;if(yt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=g.version,o.memory.textures++),j){V.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer[mt]=[];for(let St=0;St<g.mipmaps.length;St++)V.__webglFramebuffer[mt][St]=i.createFramebuffer()}else V.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer=[];for(let mt=0;mt<g.mipmaps.length;mt++)V.__webglFramebuffer[mt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(yt)for(let mt=0,St=et.length;mt<St;mt++){const Wt=n.get(et[mt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&ft(b)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let mt=0;mt<et.length;mt++){const St=et[mt];V.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[mt]);const Wt=r.convert(St.format,St.colorSpace),st=r.convert(St.type),Et=E(St.internalFormat,Wt,st,St.colorSpace,b.isXRRenderTarget===!0),Ft=it(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Et,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,V.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(V.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),It(i.TEXTURE_CUBE_MAP,g);for(let mt=0;mt<6;mt++)if(g.mipmaps&&g.mipmaps.length>0)for(let St=0;St<g.mipmaps.length;St++)bt(V.__webglFramebuffer[mt][St],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,St);else bt(V.__webglFramebuffer[mt],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);d(g)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let mt=0,St=et.length;mt<St;mt++){const Wt=et[mt],st=n.get(Wt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),It(i.TEXTURE_2D,Wt),bt(V.__webglFramebuffer,b,Wt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),d(Wt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(mt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,$.__webglTexture),It(mt,g),g.mipmaps&&g.mipmaps.length>0)for(let St=0;St<g.mipmaps.length;St++)bt(V.__webglFramebuffer[St],b,g,i.COLOR_ATTACHMENT0,mt,St);else bt(V.__webglFramebuffer,b,g,i.COLOR_ATTACHMENT0,mt,0);d(g)&&h(mt),e.unbindTexture()}b.depthBuffer&&Ot(b)}function tt(b){const g=b.textures;for(let V=0,$=g.length;V<$;V++){const et=g[V];if(d(et)){const j=A(b),yt=n.get(et).__webglTexture;e.bindTexture(j,yt),h(j),e.unbindTexture()}}}const ot=[],w=[];function wt(b){if(b.samples>0){if(ft(b)===!1){const g=b.textures,V=b.width,$=b.height;let et=i.COLOR_BUFFER_BIT;const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(b),mt=g.length>1;if(mt)for(let St=0;St<g.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let St=0;St<g.length;St++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[St]);const Wt=n.get(g[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,V,$,0,0,V,$,et,i.NEAREST),l===!0&&(ot.length=0,w.length=0,ot.push(i.COLOR_ATTACHMENT0+St),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ot.push(j),w.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let St=0;St<g.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,yt.__webglColorRenderbuffer[St]);const Wt=n.get(g[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const g=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function it(b){return Math.min(s.maxSamples,b.samples)}function ft(b){const g=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function dt(b){const g=o.render.frame;u.get(b)!==g&&(u.set(b,g),b.update())}function Nt(b,g){const V=b.colorSpace,$=b.format,et=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||V!==xi&&V!==Sn&&(Kt.getTransfer(V)===ee?($!==Ye||et!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),g}function Mt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=q,this.setTexture2D=J,this.setTexture2DArray=Y,this.setTexture3D=nt,this.setTextureCube=K,this.rebindTextures=Ut,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=ft}function Hp(i,t){function e(n,s=Sn){let r;const o=Kt.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===oo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ja)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ka)return i.BYTE;if(n===ja)return i.SHORT;if(n===Oi)return i.UNSIGNED_SHORT;if(n===ro)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===ki)return i.HALF_FLOAT;if(n===$a)return i.ALPHA;if(n===Qa)return i.RGB;if(n===Ye)return i.RGBA;if(n===tl)return i.LUMINANCE;if(n===el)return i.LUMINANCE_ALPHA;if(n===ui)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===nl)return i.RED;if(n===lo)return i.RED_INTEGER;if(n===il)return i.RG;if(n===co)return i.RG_INTEGER;if(n===ho)return i.RGBA_INTEGER;if(n===vs||n===xs||n===Ms||n===Ss)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ss)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wr||n===Rr||n===Cr||n===Pr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lr||n===Dr||n===Ir)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lr||n===Dr)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ir)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ur||n===Nr||n===Fr||n===Or||n===zr||n===Br||n===Hr||n===Vr||n===kr||n===Gr||n===Wr||n===Xr||n===Yr||n===qr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ur)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nr)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fr)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Or)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zr)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Br)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hr)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vr)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kr)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gr)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wr)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xr)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yr)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qr)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ys||n===Zr||n===Kr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ys)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sl||n===jr||n===Jr||n===$r)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ys)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$r)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Vp extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ge extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kp={type:"move"};class ar{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const d=e.getJointPose(v,n),h=this._getHandJoint(c,v);d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=d.radius),h.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],m=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&m>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Gp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wp=`
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

}`;class Xp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Le,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new An({vertexShader:Gp,fragmentShader:Wp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new Wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yp extends kn{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,m=null,p=null,_=null;const v=new Xp,d=e.getContextAttributes();let h=null,A=null;const E=[],S=[],H=new at;let R=null;const L=new Ge;L.viewport=new he;const F=new Ge;F.viewport=new he;const T=[L,F],M=new Vp;let P=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let rt=E[Q];return rt===void 0&&(rt=new ar,E[Q]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Q){let rt=E[Q];return rt===void 0&&(rt=new ar,E[Q]=rt),rt.getGripSpace()},this.getHand=function(Q){let rt=E[Q];return rt===void 0&&(rt=new ar,E[Q]=rt),rt.getHandSpace()};function B(Q){const rt=S.indexOf(Q.inputSource);if(rt===-1)return;const bt=E[rt];bt!==void 0&&(bt.update(Q.inputSource,Q.frame,c||o),bt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",J);for(let Q=0;Q<E.length;Q++){const rt=S[Q];rt!==null&&(S[Q]=null,E[Q].disconnect(rt))}P=null,q=null,v.reset(),t.setRenderTarget(h),p=null,m=null,f=null,s=null,A=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(H.width,H.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",J),d.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(H),s.renderState.layers===void 0){const rt={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Bn(p.framebufferWidth,p.framebufferHeight,{format:Ye,type:un,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let rt=null,bt=null,lt=null;d.depth&&(lt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=d.stencil?gi:ui,bt=d.stencil?_i:zn);const Dt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};f=new XRWebGLBinding(s,e),m=f.createProjectionLayer(Dt),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),A=new Bn(m.textureWidth,m.textureHeight,{format:Ye,type:un,depthTexture:new gl(m.textureWidth,m.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(Q){for(let rt=0;rt<Q.removed.length;rt++){const bt=Q.removed[rt],lt=S.indexOf(bt);lt>=0&&(S[lt]=null,E[lt].disconnect(bt))}for(let rt=0;rt<Q.added.length;rt++){const bt=Q.added[rt];let lt=S.indexOf(bt);if(lt===-1){for(let Ot=0;Ot<E.length;Ot++)if(Ot>=S.length){S.push(bt),lt=Ot;break}else if(S[Ot]===null){S[Ot]=bt,lt=Ot;break}if(lt===-1)break}const Dt=E[lt];Dt&&Dt.connect(bt)}}const Y=new U,nt=new U;function K(Q,rt,bt){Y.setFromMatrixPosition(rt.matrixWorld),nt.setFromMatrixPosition(bt.matrixWorld);const lt=Y.distanceTo(nt),Dt=rt.projectionMatrix.elements,Ot=bt.projectionMatrix.elements,Ut=Dt[14]/(Dt[10]-1),qt=Dt[14]/(Dt[10]+1),tt=(Dt[9]+1)/Dt[5],ot=(Dt[9]-1)/Dt[5],w=(Dt[8]-1)/Dt[0],wt=(Ot[8]+1)/Ot[0],it=Ut*w,ft=Ut*wt,dt=lt/(-w+wt),Nt=dt*-w;if(rt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Nt),Q.translateZ(dt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Dt[10]===-1)Q.projectionMatrix.copy(rt.projectionMatrix),Q.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Mt=Ut+dt,b=qt+dt,g=it-Nt,V=ft+(lt-Nt),$=tt*qt/b*Mt,et=ot*qt/b*Mt;Q.projectionMatrix.makePerspective(g,V,$,et,Mt,b),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function pt(Q,rt){rt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(rt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let rt=Q.near,bt=Q.far;v.texture!==null&&(v.depthNear>0&&(rt=v.depthNear),v.depthFar>0&&(bt=v.depthFar)),M.near=F.near=L.near=rt,M.far=F.far=L.far=bt,(P!==M.near||q!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,q=M.far),L.layers.mask=Q.layers.mask|2,F.layers.mask=Q.layers.mask|4,M.layers.mask=L.layers.mask|F.layers.mask;const lt=Q.parent,Dt=M.cameras;pt(M,lt);for(let Ot=0;Ot<Dt.length;Ot++)pt(Dt[Ot],lt);Dt.length===2?K(M,L,F):M.projectionMatrix.copy(L.projectionMatrix),vt(Q,M,lt)};function vt(Q,rt,bt){bt===null?Q.matrix.copy(rt.matrixWorld):(Q.matrix.copy(bt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(rt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(rt.projectionMatrix),Q.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=zi*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(m===null&&p===null))return l},this.setFoveation=function(Q){l=Q,m!==null&&(m.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ht=null;function It(Q,rt){if(u=rt.getViewerPose(c||o),_=rt,u!==null){const bt=u.views;p!==null&&(t.setRenderTargetFramebuffer(A,p.framebuffer),t.setRenderTarget(A));let lt=!1;bt.length!==M.cameras.length&&(M.cameras.length=0,lt=!0);for(let Ot=0;Ot<bt.length;Ot++){const Ut=bt[Ot];let qt=null;if(p!==null)qt=p.getViewport(Ut);else{const ot=f.getViewSubImage(m,Ut);qt=ot.viewport,Ot===0&&(t.setRenderTargetTextures(A,ot.colorTexture,m.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(A))}let tt=T[Ot];tt===void 0&&(tt=new Ge,tt.layers.enable(Ot),tt.viewport=new he,T[Ot]=tt),tt.matrix.fromArray(Ut.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Ut.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(qt.x,qt.y,qt.width,qt.height),Ot===0&&(M.matrix.copy(tt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),lt===!0&&M.cameras.push(tt)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Ot=f.getDepthInformation(bt[0]);Ot&&Ot.isValid&&Ot.texture&&v.init(t,Ot,s.renderState)}}for(let bt=0;bt<E.length;bt++){const lt=S[bt],Dt=E[bt];lt!==null&&Dt!==void 0&&Dt.update(lt,rt,c||o)}ht&&ht(Q,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),_=null}const Yt=new _l;Yt.setAnimationLoop(It),this.setAnimationLoop=function(Q){ht=Q},this.dispose=function(){}}}const Dn=new $e,qp=new le;function Zp(i,t){function e(d,h){d.matrixAutoUpdate===!0&&d.updateMatrix(),h.value.copy(d.matrix)}function n(d,h){h.color.getRGB(d.fogColor.value,dl(i)),h.isFog?(d.fogNear.value=h.near,d.fogFar.value=h.far):h.isFogExp2&&(d.fogDensity.value=h.density)}function s(d,h,A,E,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(d,h):h.isMeshToonMaterial?(r(d,h),f(d,h)):h.isMeshPhongMaterial?(r(d,h),u(d,h)):h.isMeshStandardMaterial?(r(d,h),m(d,h),h.isMeshPhysicalMaterial&&p(d,h,S)):h.isMeshMatcapMaterial?(r(d,h),_(d,h)):h.isMeshDepthMaterial?r(d,h):h.isMeshDistanceMaterial?(r(d,h),v(d,h)):h.isMeshNormalMaterial?r(d,h):h.isLineBasicMaterial?(o(d,h),h.isLineDashedMaterial&&a(d,h)):h.isPointsMaterial?l(d,h,A,E):h.isSpriteMaterial?c(d,h):h.isShadowMaterial?(d.color.value.copy(h.color),d.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(d,h){d.opacity.value=h.opacity,h.color&&d.diffuse.value.copy(h.color),h.emissive&&d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.bumpMap&&(d.bumpMap.value=h.bumpMap,e(h.bumpMap,d.bumpMapTransform),d.bumpScale.value=h.bumpScale,h.side===Pe&&(d.bumpScale.value*=-1)),h.normalMap&&(d.normalMap.value=h.normalMap,e(h.normalMap,d.normalMapTransform),d.normalScale.value.copy(h.normalScale),h.side===Pe&&d.normalScale.value.negate()),h.displacementMap&&(d.displacementMap.value=h.displacementMap,e(h.displacementMap,d.displacementMapTransform),d.displacementScale.value=h.displacementScale,d.displacementBias.value=h.displacementBias),h.emissiveMap&&(d.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,d.emissiveMapTransform)),h.specularMap&&(d.specularMap.value=h.specularMap,e(h.specularMap,d.specularMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest);const A=t.get(h),E=A.envMap,S=A.envMapRotation;E&&(d.envMap.value=E,Dn.copy(S),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),d.envMapRotation.value.setFromMatrix4(qp.makeRotationFromEuler(Dn)),d.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=h.reflectivity,d.ior.value=h.ior,d.refractionRatio.value=h.refractionRatio),h.lightMap&&(d.lightMap.value=h.lightMap,d.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,d.lightMapTransform)),h.aoMap&&(d.aoMap.value=h.aoMap,d.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,d.aoMapTransform))}function o(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform))}function a(d,h){d.dashSize.value=h.dashSize,d.totalSize.value=h.dashSize+h.gapSize,d.scale.value=h.scale}function l(d,h,A,E){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.size.value=h.size*A,d.scale.value=E*.5,h.map&&(d.map.value=h.map,e(h.map,d.uvTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function c(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.rotation.value=h.rotation,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function u(d,h){d.specular.value.copy(h.specular),d.shininess.value=Math.max(h.shininess,1e-4)}function f(d,h){h.gradientMap&&(d.gradientMap.value=h.gradientMap)}function m(d,h){d.metalness.value=h.metalness,h.metalnessMap&&(d.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,d.metalnessMapTransform)),d.roughness.value=h.roughness,h.roughnessMap&&(d.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,d.roughnessMapTransform)),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)}function p(d,h,A){d.ior.value=h.ior,h.sheen>0&&(d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),d.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(d.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,d.sheenColorMapTransform)),h.sheenRoughnessMap&&(d.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,d.sheenRoughnessMapTransform))),h.clearcoat>0&&(d.clearcoat.value=h.clearcoat,d.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(d.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,d.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(d.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Pe&&d.clearcoatNormalScale.value.negate())),h.dispersion>0&&(d.dispersion.value=h.dispersion),h.iridescence>0&&(d.iridescence.value=h.iridescence,d.iridescenceIOR.value=h.iridescenceIOR,d.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(d.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,d.iridescenceMapTransform)),h.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),h.transmission>0&&(d.transmission.value=h.transmission,d.transmissionSamplerMap.value=A.texture,d.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(d.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,d.transmissionMapTransform)),d.thickness.value=h.thickness,h.thicknessMap&&(d.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=h.attenuationDistance,d.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(d.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(d.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=h.specularIntensity,d.specularColor.value.copy(h.specularColor),h.specularColorMap&&(d.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,d.specularColorMapTransform)),h.specularIntensityMap&&(d.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,h){h.matcap&&(d.matcap.value=h.matcap)}function v(d,h){const A=t.get(h).light;d.referencePosition.value.setFromMatrixPosition(A.matrixWorld),d.nearDistance.value=A.shadow.camera.near,d.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Kp(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const S=E.program;n.uniformBlockBinding(A,S)}function c(A,E){let S=s[A.id];S===void 0&&(_(A),S=u(A),s[A.id]=S,A.addEventListener("dispose",d));const H=E.program;n.updateUBOMapping(A,H);const R=t.render.frame;r[A.id]!==R&&(m(A),r[A.id]=R)}function u(A){const E=f();A.__bindingPointIndex=E;const S=i.createBuffer(),H=A.__size,R=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,H,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(A){const E=s[A.id],S=A.uniforms,H=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,L=S.length;R<L;R++){const F=Array.isArray(S[R])?S[R]:[S[R]];for(let T=0,M=F.length;T<M;T++){const P=F[T];if(p(P,R,T,H)===!0){const q=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let J=0;J<B.length;J++){const Y=B[J],nt=v(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,q+G,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,G),G+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,E,S,H){const R=A.value,L=E+"_"+S;if(H[L]===void 0)return typeof R=="number"||typeof R=="boolean"?H[L]=R:H[L]=R.clone(),!0;{const F=H[L];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return H[L]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function _(A){const E=A.uniforms;let S=0;const H=16;for(let L=0,F=E.length;L<F;L++){const T=Array.isArray(E[L])?E[L]:[E[L]];for(let M=0,P=T.length;M<P;M++){const q=T[M],B=Array.isArray(q.value)?q.value:[q.value];for(let G=0,J=B.length;G<J;G++){const Y=B[G],nt=v(Y),K=S%H,pt=K%nt.boundary,vt=K+pt;S+=pt,vt!==0&&H-vt<nt.storage&&(S+=H-vt),q.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=nt.storage}}}const R=S%H;return R>0&&(S+=H-R),A.__size=S,A.__cache={},this}function v(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function d(A){const E=A.target;E.removeEventListener("dispose",d);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function h(){for(const A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class jp{constructor(t={}){const{canvas:e=Oc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let d=null,h=null;const A=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=En,this.toneMappingExposure=1;const S=this;let H=!1,R=0,L=0,F=null,T=-1,M=null;const P=new he,q=new he;let B=null;const G=new Jt(0);let J=0,Y=e.width,nt=e.height,K=1,pt=null,vt=null;const ht=new he(0,0,Y,nt),It=new he(0,0,Y,nt);let Yt=!1;const Q=new _o;let rt=!1,bt=!1;const lt=new le,Dt=new le,Ot=new U,Ut=new he,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function ot(){return F===null?K:1}let w=n;function wt(y,O){return e.getContext(y,O)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",I,!1),e.addEventListener("webglcontextrestored",k,!1),e.addEventListener("webglcontextcreationerror",N,!1),w===null){const O="webgl2";if(w=wt(O,y),w===null)throw wt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let it,ft,dt,Nt,Mt,b,g,V,$,et,j,yt,mt,St,Wt,st,Et,Ft,zt,Tt,Xt,Ht,$t,x;function D(){it=new ed(w),it.init(),Ht=new Hp(w,it),ft=new Kf(w,it,t,Ht),dt=new Op(w,it),ft.reverseDepthBuffer&&m&&dt.buffers.depth.setReversed(!0),Nt=new sd(w),Mt=new yp,b=new Bp(w,it,dt,Mt,ft,Ht,Nt),g=new Jf(S),V=new td(S),$=new hh(w),$t=new qf(w,$),et=new nd(w,$,Nt,$t),j=new od(w,et,$,Nt),zt=new rd(w,ft,b),st=new jf(Mt),yt=new Sp(S,g,V,it,ft,$t,st),mt=new Zp(S,Mt),St=new Tp,Wt=new Pp(it),Ft=new Yf(S,g,V,dt,j,p,l),Et=new Np(S,j,ft),x=new Kp(w,Nt,ft,dt),Tt=new Zf(w,it,Nt),Xt=new id(w,it,Nt),Nt.programs=yt.programs,S.capabilities=ft,S.extensions=it,S.properties=Mt,S.renderLists=St,S.shadowMap=Et,S.state=dt,S.info=Nt}D();const C=new Yp(S,w);this.xr=C,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const y=it.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=it.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(y){y!==void 0&&(K=y,this.setSize(Y,nt,!1))},this.getSize=function(y){return y.set(Y,nt)},this.setSize=function(y,O,W=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,nt=O,e.width=Math.floor(y*K),e.height=Math.floor(O*K),W===!0&&(e.style.width=y+"px",e.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(Y*K,nt*K).floor()},this.setDrawingBufferSize=function(y,O,W){Y=y,nt=O,K=W,e.width=Math.floor(y*W),e.height=Math.floor(O*W),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(ht)},this.setViewport=function(y,O,W,X){y.isVector4?ht.set(y.x,y.y,y.z,y.w):ht.set(y,O,W,X),dt.viewport(P.copy(ht).multiplyScalar(K).round())},this.getScissor=function(y){return y.copy(It)},this.setScissor=function(y,O,W,X){y.isVector4?It.set(y.x,y.y,y.z,y.w):It.set(y,O,W,X),dt.scissor(q.copy(It).multiplyScalar(K).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(y){dt.setScissorTest(Yt=y)},this.setOpaqueSort=function(y){pt=y},this.setTransparentSort=function(y){vt=y},this.getClearColor=function(y){return y.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(y=!0,O=!0,W=!0){let X=0;if(y){let z=!1;if(F!==null){const ut=F.texture.format;z=ut===ho||ut===co||ut===lo}if(z){const ut=F.texture.type,xt=ut===un||ut===zn||ut===Oi||ut===_i||ut===oo||ut===ao,Rt=Ft.getClearColor(),Ct=Ft.getClearAlpha(),Bt=Rt.r,Vt=Rt.g,Pt=Rt.b;xt?(_[0]=Bt,_[1]=Vt,_[2]=Pt,_[3]=Ct,w.clearBufferuiv(w.COLOR,0,_)):(v[0]=Bt,v[1]=Vt,v[2]=Pt,v[3]=Ct,w.clearBufferiv(w.COLOR,0,v))}else X|=w.COLOR_BUFFER_BIT}O&&(X|=w.DEPTH_BUFFER_BIT),W&&(X|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",I,!1),e.removeEventListener("webglcontextrestored",k,!1),e.removeEventListener("webglcontextcreationerror",N,!1),St.dispose(),Wt.dispose(),Mt.dispose(),g.dispose(),V.dispose(),j.dispose(),$t.dispose(),x.dispose(),yt.dispose(),C.dispose(),C.removeEventListener("sessionstart",ue),C.removeEventListener("sessionend",we),xe.stop()};function I(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const y=Nt.autoReset,O=Et.enabled,W=Et.autoUpdate,X=Et.needsUpdate,z=Et.type;D(),Nt.autoReset=y,Et.enabled=O,Et.autoUpdate=W,Et.needsUpdate=X,Et.type=z}function N(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Z(y){const O=y.target;O.removeEventListener("dispose",Z),ct(O)}function ct(y){At(y),Mt.remove(y)}function At(y){const O=Mt.get(y).programs;O!==void 0&&(O.forEach(function(W){yt.releaseProgram(W)}),y.isShaderMaterial&&yt.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,W,X,z,ut){O===null&&(O=qt);const xt=z.isMesh&&z.matrixWorld.determinant()<0,Rt=Dl(y,O,W,X,z);dt.setMaterial(X,xt);let Ct=W.index,Bt=1;if(X.wireframe===!0){if(Ct=et.getWireframeAttribute(W),Ct===void 0)return;Bt=2}const Vt=W.drawRange,Pt=W.attributes.position;let jt=Vt.start*Bt,se=(Vt.start+Vt.count)*Bt;ut!==null&&(jt=Math.max(jt,ut.start*Bt),se=Math.min(se,(ut.start+ut.count)*Bt)),Ct!==null?(jt=Math.max(jt,0),se=Math.min(se,Ct.count)):Pt!=null&&(jt=Math.max(jt,0),se=Math.min(se,Pt.count));const re=se-jt;if(re<0||re===1/0)return;$t.setup(z,X,Rt,W,Ct);let Re,Qt=Tt;if(Ct!==null&&(Re=$.get(Ct),Qt=Xt,Qt.setIndex(Re)),z.isMesh)X.wireframe===!0?(dt.setLineWidth(X.wireframeLinewidth*ot()),Qt.setMode(w.LINES)):Qt.setMode(w.TRIANGLES);else if(z.isLine){let Lt=X.linewidth;Lt===void 0&&(Lt=1),dt.setLineWidth(Lt*ot()),z.isLineSegments?Qt.setMode(w.LINES):z.isLineLoop?Qt.setMode(w.LINE_LOOP):Qt.setMode(w.LINE_STRIP)}else z.isPoints?Qt.setMode(w.POINTS):z.isSprite&&Qt.setMode(w.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Qt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))Qt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Lt=z._multiDrawStarts,tn=z._multiDrawCounts,te=z._multiDrawCount,Be=Ct?$.get(Ct).bytesPerElement:1,Wn=Mt.get(X).currentProgram.getUniforms();for(let Ie=0;Ie<te;Ie++)Wn.setValue(w,"_gl_DrawID",Ie),Qt.render(Lt[Ie]/Be,tn[Ie])}else if(z.isInstancedMesh)Qt.renderInstances(jt,re,z.count);else if(W.isInstancedBufferGeometry){const Lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,tn=Math.min(W.instanceCount,Lt);Qt.renderInstances(jt,re,tn)}else Qt.render(jt,re)};function gt(y,O,W){y.transparent===!0&&y.side===We&&y.forceSinglePass===!1?(y.side=Pe,y.needsUpdate=!0,Yi(y,O,W),y.side=bn,y.needsUpdate=!0,Yi(y,O,W),y.side=We):Yi(y,O,W)}this.compile=function(y,O,W=null){W===null&&(W=y),h=Wt.get(W),h.init(O),E.push(h),W.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),y!==W&&y.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),h.setupLights();const X=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ut=z.material;if(ut)if(Array.isArray(ut))for(let xt=0;xt<ut.length;xt++){const Rt=ut[xt];gt(Rt,W,z),X.add(Rt)}else gt(ut,W,z),X.add(ut)}),E.pop(),h=null,X},this.compileAsync=function(y,O,W=null){const X=this.compile(y,O,W);return new Promise(z=>{function ut(){if(X.forEach(function(xt){Mt.get(xt).currentProgram.isReady()&&X.delete(xt)}),X.size===0){z(y);return}setTimeout(ut,10)}it.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Zt=null;function ie(y){Zt&&Zt(y)}function ue(){xe.stop()}function we(){xe.start()}const xe=new _l;xe.setAnimationLoop(ie),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(y){Zt=y,C.setAnimationLoop(y),y===null?xe.stop():xe.start()},C.addEventListener("sessionstart",ue),C.addEventListener("sessionend",we),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(O),O=C.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,O,F),h=Wt.get(y,E.length),h.init(O),E.push(h),Dt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(Dt),bt=this.localClippingEnabled,rt=st.init(this.clippingPlanes,bt),d=St.get(y,A.length),d.init(),A.push(d),C.enabled===!0&&C.isPresenting===!0){const ut=S.xr.getDepthSensingMesh();ut!==null&&Is(ut,O,-1/0,S.sortObjects)}Is(y,O,0,S.sortObjects),d.finish(),S.sortObjects===!0&&d.sort(pt,vt),tt=C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1,tt&&Ft.addToRenderList(d,y),this.info.render.frame++,rt===!0&&st.beginShadows();const W=h.state.shadowsArray;Et.render(W,y,O),rt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=d.opaque,z=d.transmissive;if(h.setupLights(),O.isArrayCamera){const ut=O.cameras;if(z.length>0)for(let xt=0,Rt=ut.length;xt<Rt;xt++){const Ct=ut[xt];wo(X,z,y,Ct)}tt&&Ft.render(y);for(let xt=0,Rt=ut.length;xt<Rt;xt++){const Ct=ut[xt];Ao(d,y,Ct,Ct.viewport)}}else z.length>0&&wo(X,z,y,O),tt&&Ft.render(y),Ao(d,y,O);F!==null&&(b.updateMultisampleRenderTarget(F),b.updateRenderTargetMipmap(F)),y.isScene===!0&&y.onAfterRender(S,y,O),$t.resetDefaultState(),T=-1,M=null,E.pop(),E.length>0?(h=E[E.length-1],rt===!0&&st.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?d=A[A.length-1]:d=null};function Is(y,O,W,X){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Q.intersectsSprite(y)){X&&Ut.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Dt);const xt=j.update(y),Rt=y.material;Rt.visible&&d.push(y,xt,Rt,W,Ut.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Q.intersectsObject(y))){const xt=j.update(y),Rt=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ut.copy(y.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ut.copy(xt.boundingSphere.center)),Ut.applyMatrix4(y.matrixWorld).applyMatrix4(Dt)),Array.isArray(Rt)){const Ct=xt.groups;for(let Bt=0,Vt=Ct.length;Bt<Vt;Bt++){const Pt=Ct[Bt],jt=Rt[Pt.materialIndex];jt&&jt.visible&&d.push(y,xt,jt,W,Ut.z,Pt)}}else Rt.visible&&d.push(y,xt,Rt,W,Ut.z,null)}}const ut=y.children;for(let xt=0,Rt=ut.length;xt<Rt;xt++)Is(ut[xt],O,W,X)}function Ao(y,O,W,X){const z=y.opaque,ut=y.transmissive,xt=y.transparent;h.setupLightsView(W),rt===!0&&st.setGlobalState(S.clippingPlanes,W),X&&dt.viewport(P.copy(X)),z.length>0&&Xi(z,O,W),ut.length>0&&Xi(ut,O,W),xt.length>0&&Xi(xt,O,W),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function wo(y,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[X.id]===void 0&&(h.state.transmissionRenderTarget[X.id]=new Bn(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?ki:un,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const ut=h.state.transmissionRenderTarget[X.id],xt=X.viewport||P;ut.setSize(xt.z,xt.w);const Rt=S.getRenderTarget();S.setRenderTarget(ut),S.getClearColor(G),J=S.getClearAlpha(),J<1&&S.setClearColor(16777215,.5),S.clear(),tt&&Ft.render(W);const Ct=S.toneMapping;S.toneMapping=En;const Bt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),h.setupLightsView(X),rt===!0&&st.setGlobalState(S.clippingPlanes,X),Xi(y,W,X),b.updateMultisampleRenderTarget(ut),b.updateRenderTargetMipmap(ut),it.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Pt=0,jt=O.length;Pt<jt;Pt++){const se=O[Pt],re=se.object,Re=se.geometry,Qt=se.material,Lt=se.group;if(Qt.side===We&&re.layers.test(X.layers)){const tn=Qt.side;Qt.side=Pe,Qt.needsUpdate=!0,Ro(re,W,X,Re,Qt,Lt),Qt.side=tn,Qt.needsUpdate=!0,Vt=!0}}Vt===!0&&(b.updateMultisampleRenderTarget(ut),b.updateRenderTargetMipmap(ut))}S.setRenderTarget(Rt),S.setClearColor(G,J),Bt!==void 0&&(X.viewport=Bt),S.toneMapping=Ct}function Xi(y,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ut=y.length;z<ut;z++){const xt=y[z],Rt=xt.object,Ct=xt.geometry,Bt=X===null?xt.material:X,Vt=xt.group;Rt.layers.test(W.layers)&&Ro(Rt,O,W,Ct,Bt,Vt)}}function Ro(y,O,W,X,z,ut){y.onBeforeRender(S,O,W,X,z,ut),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(S,O,W,X,y,ut),z.transparent===!0&&z.side===We&&z.forceSinglePass===!1?(z.side=Pe,z.needsUpdate=!0,S.renderBufferDirect(W,O,X,z,y,ut),z.side=bn,z.needsUpdate=!0,S.renderBufferDirect(W,O,X,z,y,ut),z.side=We):S.renderBufferDirect(W,O,X,z,y,ut),y.onAfterRender(S,O,W,X,z,ut)}function Yi(y,O,W){O.isScene!==!0&&(O=qt);const X=Mt.get(y),z=h.state.lights,ut=h.state.shadowsArray,xt=z.state.version,Rt=yt.getParameters(y,z.state,ut,O,W),Ct=yt.getProgramCacheKey(Rt);let Bt=X.programs;X.environment=y.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(y.isMeshStandardMaterial?V:g).get(y.envMap||X.environment),X.envMapRotation=X.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Bt===void 0&&(y.addEventListener("dispose",Z),Bt=new Map,X.programs=Bt);let Vt=Bt.get(Ct);if(Vt!==void 0){if(X.currentProgram===Vt&&X.lightsStateVersion===xt)return Po(y,Rt),Vt}else Rt.uniforms=yt.getUniforms(y),y.onBeforeCompile(Rt,S),Vt=yt.acquireProgram(Rt,Ct),Bt.set(Ct,Vt),X.uniforms=Rt.uniforms;const Pt=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pt.clippingPlanes=st.uniform),Po(y,Rt),X.needsLights=Ul(y),X.lightsStateVersion=xt,X.needsLights&&(Pt.ambientLightColor.value=z.state.ambient,Pt.lightProbe.value=z.state.probe,Pt.directionalLights.value=z.state.directional,Pt.directionalLightShadows.value=z.state.directionalShadow,Pt.spotLights.value=z.state.spot,Pt.spotLightShadows.value=z.state.spotShadow,Pt.rectAreaLights.value=z.state.rectArea,Pt.ltc_1.value=z.state.rectAreaLTC1,Pt.ltc_2.value=z.state.rectAreaLTC2,Pt.pointLights.value=z.state.point,Pt.pointLightShadows.value=z.state.pointShadow,Pt.hemisphereLights.value=z.state.hemi,Pt.directionalShadowMap.value=z.state.directionalShadowMap,Pt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pt.spotShadowMap.value=z.state.spotShadowMap,Pt.spotLightMatrix.value=z.state.spotLightMatrix,Pt.spotLightMap.value=z.state.spotLightMap,Pt.pointShadowMap.value=z.state.pointShadowMap,Pt.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Vt,X.uniformsList=null,Vt}function Co(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=Ts.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function Po(y,O){const W=Mt.get(y);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Dl(y,O,W,X,z){O.isScene!==!0&&(O=qt),b.resetTextureUnits();const ut=O.fog,xt=X.isMeshStandardMaterial?O.environment:null,Rt=F===null?S.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:xi,Ct=(X.isMeshStandardMaterial?V:g).get(X.envMap||xt),Bt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Vt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pt=!!W.morphAttributes.position,jt=!!W.morphAttributes.normal,se=!!W.morphAttributes.color;let re=En;X.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(re=S.toneMapping);const Re=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Qt=Re!==void 0?Re.length:0,Lt=Mt.get(X),tn=h.state.lights;if(rt===!0&&(bt===!0||y!==M)){const Oe=y===M&&X.id===T;st.setState(X,y,Oe)}let te=!1;X.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==tn.state.version||Lt.outputColorSpace!==Rt||z.isBatchedMesh&&Lt.batching===!1||!z.isBatchedMesh&&Lt.batching===!0||z.isBatchedMesh&&Lt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Lt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Lt.instancing===!1||!z.isInstancedMesh&&Lt.instancing===!0||z.isSkinnedMesh&&Lt.skinning===!1||!z.isSkinnedMesh&&Lt.skinning===!0||z.isInstancedMesh&&Lt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Lt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Lt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Lt.instancingMorph===!1&&z.morphTexture!==null||Lt.envMap!==Ct||X.fog===!0&&Lt.fog!==ut||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==st.numPlanes||Lt.numIntersection!==st.numIntersection)||Lt.vertexAlphas!==Bt||Lt.vertexTangents!==Vt||Lt.morphTargets!==Pt||Lt.morphNormals!==jt||Lt.morphColors!==se||Lt.toneMapping!==re||Lt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Lt.__version=X.version);let Be=Lt.currentProgram;te===!0&&(Be=Yi(X,O,z));let Wn=!1,Ie=!1,Ei=!1;const oe=Be.getUniforms(),Ze=Lt.uniforms;if(dt.useProgram(Be.program)&&(Wn=!0,Ie=!0,Ei=!0),X.id!==T&&(T=X.id,Ie=!0),Wn||M!==y){dt.buffers.depth.getReversed()?(lt.copy(y.projectionMatrix),Bc(lt),Hc(lt),oe.setValue(w,"projectionMatrix",lt)):oe.setValue(w,"projectionMatrix",y.projectionMatrix),oe.setValue(w,"viewMatrix",y.matrixWorldInverse);const fn=oe.map.cameraPosition;fn!==void 0&&fn.setValue(w,Ot.setFromMatrixPosition(y.matrixWorld)),ft.logarithmicDepthBuffer&&oe.setValue(w,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&oe.setValue(w,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Ie=!0,Ei=!0)}if(z.isSkinnedMesh){oe.setOptional(w,z,"bindMatrix"),oe.setOptional(w,z,"bindMatrixInverse");const Oe=z.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),oe.setValue(w,"boneTexture",Oe.boneTexture,b))}z.isBatchedMesh&&(oe.setOptional(w,z,"batchingTexture"),oe.setValue(w,"batchingTexture",z._matricesTexture,b),oe.setOptional(w,z,"batchingIdTexture"),oe.setValue(w,"batchingIdTexture",z._indirectTexture,b),oe.setOptional(w,z,"batchingColorTexture"),z._colorsTexture!==null&&oe.setValue(w,"batchingColorTexture",z._colorsTexture,b));const Ti=W.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&zt.update(z,W,Be),(Ie||Lt.receiveShadow!==z.receiveShadow)&&(Lt.receiveShadow=z.receiveShadow,oe.setValue(w,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ze.envMap.value=Ct,Ze.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(Ze.envMapIntensity.value=O.environmentIntensity),Ie&&(oe.setValue(w,"toneMappingExposure",S.toneMappingExposure),Lt.needsLights&&Il(Ze,Ei),ut&&X.fog===!0&&mt.refreshFogUniforms(Ze,ut),mt.refreshMaterialUniforms(Ze,X,K,nt,h.state.transmissionRenderTarget[y.id]),Ts.upload(w,Co(Lt),Ze,b)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ts.upload(w,Co(Lt),Ze,b),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&oe.setValue(w,"center",z.center),oe.setValue(w,"modelViewMatrix",z.modelViewMatrix),oe.setValue(w,"normalMatrix",z.normalMatrix),oe.setValue(w,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Oe=X.uniformsGroups;for(let fn=0,dn=Oe.length;fn<dn;fn++){const Lo=Oe[fn];x.update(Lo,Be),x.bind(Lo,Be)}}return Be}function Il(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function Ul(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(y,O,W){Mt.get(y.texture).__webglTexture=O,Mt.get(y.depthTexture).__webglTexture=W;const X=Mt.get(y);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,O){const W=Mt.get(y);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,W=0){F=y,R=O,L=W;let X=!0,z=null,ut=!1,xt=!1;if(y){const Ct=Mt.get(y);if(Ct.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(w.FRAMEBUFFER,null),X=!1;else if(Ct.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(Ct.__hasExternalTextures)b.rebindTextures(y,Mt.get(y.texture).__webglTexture,Mt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Pt=y.depthTexture;if(Ct.__boundDepthTexture!==Pt){if(Pt!==null&&Mt.has(Pt)&&(y.width!==Pt.image.width||y.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}const Bt=y.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(xt=!0);const Vt=Mt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Vt[O])?z=Vt[O][W]:z=Vt[O],ut=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?z=Mt.get(y).__webglMultisampledFramebuffer:Array.isArray(Vt)?z=Vt[W]:z=Vt,P.copy(y.viewport),q.copy(y.scissor),B=y.scissorTest}else P.copy(ht).multiplyScalar(K).floor(),q.copy(It).multiplyScalar(K).floor(),B=Yt;if(dt.bindFramebuffer(w.FRAMEBUFFER,z)&&X&&dt.drawBuffers(y,z),dt.viewport(P),dt.scissor(q),dt.setScissorTest(B),ut){const Ct=Mt.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ct.__webglTexture,W)}else if(xt){const Ct=Mt.get(y.texture),Bt=O||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ct.__webglTexture,W||0,Bt)}T=-1},this.readRenderTargetPixels=function(y,O,W,X,z,ut,xt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xt!==void 0&&(Rt=Rt[xt]),Rt){dt.bindFramebuffer(w.FRAMEBUFFER,Rt);try{const Ct=y.texture,Bt=Ct.format,Vt=Ct.type;if(!ft.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-X&&W>=0&&W<=y.height-z&&w.readPixels(O,W,X,z,Ht.convert(Bt),Ht.convert(Vt),ut)}finally{const Ct=F!==null?Mt.get(F).__webglFramebuffer:null;dt.bindFramebuffer(w.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(y,O,W,X,z,ut,xt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xt!==void 0&&(Rt=Rt[xt]),Rt){const Ct=y.texture,Bt=Ct.format,Vt=Ct.type;if(!ft.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=y.width-X&&W>=0&&W<=y.height-z){dt.bindFramebuffer(w.FRAMEBUFFER,Rt);const Pt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Pt),w.bufferData(w.PIXEL_PACK_BUFFER,ut.byteLength,w.STREAM_READ),w.readPixels(O,W,X,z,Ht.convert(Bt),Ht.convert(Vt),0);const jt=F!==null?Mt.get(F).__webglFramebuffer:null;dt.bindFramebuffer(w.FRAMEBUFFER,jt);const se=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await zc(w,se,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Pt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ut),w.deleteBuffer(Pt),w.deleteSync(se),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,O=null,W=0){y.isTexture!==!0&&(Ci("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,y=arguments[1]);const X=Math.pow(2,-W),z=Math.floor(y.image.width*X),ut=Math.floor(y.image.height*X),xt=O!==null?O.x:0,Rt=O!==null?O.y:0;b.setTexture2D(y,0),w.copyTexSubImage2D(w.TEXTURE_2D,W,0,0,xt,Rt,z,ut),dt.unbindTexture()},this.copyTextureToTexture=function(y,O,W=null,X=null,z=0){y.isTexture!==!0&&(Ci("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,y=arguments[1],O=arguments[2],z=arguments[3]||0,W=null);let ut,xt,Rt,Ct,Bt,Vt,Pt,jt,se;const re=y.isCompressedTexture?y.mipmaps[z]:y.image;W!==null?(ut=W.max.x-W.min.x,xt=W.max.y-W.min.y,Rt=W.isBox3?W.max.z-W.min.z:1,Ct=W.min.x,Bt=W.min.y,Vt=W.isBox3?W.min.z:0):(ut=re.width,xt=re.height,Rt=re.depth||1,Ct=0,Bt=0,Vt=0),X!==null?(Pt=X.x,jt=X.y,se=X.z):(Pt=0,jt=0,se=0);const Re=Ht.convert(O.format),Qt=Ht.convert(O.type);let Lt;O.isData3DTexture?(b.setTexture3D(O,0),Lt=w.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(b.setTexture2DArray(O,0),Lt=w.TEXTURE_2D_ARRAY):(b.setTexture2D(O,0),Lt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,O.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,O.unpackAlignment);const tn=w.getParameter(w.UNPACK_ROW_LENGTH),te=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Be=w.getParameter(w.UNPACK_SKIP_PIXELS),Wn=w.getParameter(w.UNPACK_SKIP_ROWS),Ie=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,re.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,re.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ct),w.pixelStorei(w.UNPACK_SKIP_ROWS,Bt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Vt);const Ei=y.isDataArrayTexture||y.isData3DTexture,oe=O.isDataArrayTexture||O.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const Ze=Mt.get(y),Ti=Mt.get(O),Oe=Mt.get(Ze.__renderTarget),fn=Mt.get(Ti.__renderTarget);dt.bindFramebuffer(w.READ_FRAMEBUFFER,Oe.__webglFramebuffer),dt.bindFramebuffer(w.DRAW_FRAMEBUFFER,fn.__webglFramebuffer);for(let dn=0;dn<Rt;dn++)Ei&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Mt.get(y).__webglTexture,z,Vt+dn),y.isDepthTexture?(oe&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Mt.get(O).__webglTexture,z,se+dn),w.blitFramebuffer(Ct,Bt,ut,xt,Pt,jt,ut,xt,w.DEPTH_BUFFER_BIT,w.NEAREST)):oe?w.copyTexSubImage3D(Lt,z,Pt,jt,se+dn,Ct,Bt,ut,xt):w.copyTexSubImage2D(Lt,z,Pt,jt,se+dn,Ct,Bt,ut,xt);dt.bindFramebuffer(w.READ_FRAMEBUFFER,null),dt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else oe?y.isDataTexture||y.isData3DTexture?w.texSubImage3D(Lt,z,Pt,jt,se,ut,xt,Rt,Re,Qt,re.data):O.isCompressedArrayTexture?w.compressedTexSubImage3D(Lt,z,Pt,jt,se,ut,xt,Rt,Re,re.data):w.texSubImage3D(Lt,z,Pt,jt,se,ut,xt,Rt,Re,Qt,re):y.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,z,Pt,jt,ut,xt,Re,Qt,re.data):y.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,z,Pt,jt,re.width,re.height,Re,re.data):w.texSubImage2D(w.TEXTURE_2D,z,Pt,jt,ut,xt,Re,Qt,re);w.pixelStorei(w.UNPACK_ROW_LENGTH,tn),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,te),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Be),w.pixelStorei(w.UNPACK_SKIP_ROWS,Wn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ie),z===0&&O.generateMipmaps&&w.generateMipmap(Lt),dt.unbindTexture()},this.copyTextureToTexture3D=function(y,O,W=null,X=null,z=0){return y.isTexture!==!0&&(Ci("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,y=arguments[2],O=arguments[3],z=arguments[4]||0),Ci('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,O,W,X,z)},this.initRenderTarget=function(y){Mt.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),dt.unbindTexture()},this.resetState=function(){R=0,L=0,F=null,dt.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}class Jp extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Qe{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],m=n[s+1]-u,p=(o-u)/m;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new at:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new U,s=[],r=[],o=[],a=new U,l=new le;for(let p=0;p<=t;p++){const _=p/t;s[p]=this.getTangentAt(_,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),m=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),m<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(ve(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(ve(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class xo extends Qe{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),m=l-this.aX,p=c-this.aY;l=m*u-p*f+this.aX,c=m*f+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $p extends xo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Mo(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let m=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;m*=u,p*=u,s(o,a,m,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ps=new U,lr=new Mo,cr=new Mo,hr=new Mo;class to extends Qe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(ps.subVectors(s[0],s[1]).add(s[0]),c=ps);const f=s[a%r],m=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ps.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ps),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(m),p),d=Math.pow(m.distanceToSquared(u),p);v<1e-4&&(v=1),_<1e-4&&(_=v),d<1e-4&&(d=v),lr.initNonuniformCatmullRom(c.x,f.x,m.x,u.x,_,v,d),cr.initNonuniformCatmullRom(c.y,f.y,m.y,u.y,_,v,d),hr.initNonuniformCatmullRom(c.z,f.z,m.z,u.z,_,v,d)}else this.curveType==="catmullrom"&&(lr.initCatmullRom(c.x,f.x,m.x,u.x,this.tension),cr.initCatmullRom(c.y,f.y,m.y,u.y,this.tension),hr.initCatmullRom(c.z,f.z,m.z,u.z,this.tension));return n.set(lr.calc(l),cr.calc(l),hr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function La(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Qp(i,t){const e=1-i;return e*e*t}function tm(i,t){return 2*(1-i)*i*t}function em(i,t){return i*i*t}function Ui(i,t,e,n){return Qp(i,t)+tm(i,e)+em(i,n)}function nm(i,t){const e=1-i;return e*e*e*t}function im(i,t){const e=1-i;return 3*e*e*i*t}function sm(i,t){return 3*(1-i)*i*i*t}function rm(i,t){return i*i*i*t}function Ni(i,t,e,n,s){return nm(i,t)+im(i,e)+sm(i,n)+rm(i,s)}class yl extends Qe{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ni(t,s.x,r.x,o.x,a.x),Ni(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class om extends Qe{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ni(t,s.x,r.x,o.x,a.x),Ni(t,s.y,r.y,o.y,a.y),Ni(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class El extends Qe{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class am extends Qe{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tl extends Qe{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ui(t,s.x,r.x,o.x),Ui(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lm extends Qe{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ui(t,s.x,r.x,o.x),Ui(t,s.y,r.y,o.y),Ui(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bl extends Qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(La(a,l.x,c.x,u.x,f.x),La(a,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var eo=Object.freeze({__proto__:null,ArcCurve:$p,CatmullRomCurve3:to,CubicBezierCurve:yl,CubicBezierCurve3:om,EllipseCurve:xo,LineCurve:El,LineCurve3:am,QuadraticBezierCurve:Tl,QuadraticBezierCurve3:lm,SplineCurve:bl});class cm extends Qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new eo[s.type]().fromJSON(s))}return this}}class Da extends cm{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new El(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Tl(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new yl(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new bl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new xo(t,e,n,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ws extends De{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new U,u=new at;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,m=3;f<=e;f++,m+=3){const p=n+f/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[m]/t+1)/2,u.y=(o[m+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class So extends De{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],m=[],p=[];let _=0;const v=[],d=n/2;let h=0;A(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new ae(f,3)),this.setAttribute("normal",new ae(m,3)),this.setAttribute("uv",new ae(p,2));function A(){const S=new U,H=new U;let R=0;const L=(e-t)/n;for(let F=0;F<=r;F++){const T=[],M=F/r,P=M*(e-t)+t;for(let q=0;q<=s;q++){const B=q/s,G=B*l+a,J=Math.sin(G),Y=Math.cos(G);H.x=P*J,H.y=-M*n+d,H.z=P*Y,f.push(H.x,H.y,H.z),S.set(J,L,Y).normalize(),m.push(S.x,S.y,S.z),p.push(B,1-M),T.push(_++)}v.push(T)}for(let F=0;F<s;F++)for(let T=0;T<r;T++){const M=v[T][F],P=v[T+1][F],q=v[T+1][F+1],B=v[T][F+1];(t>0||T!==0)&&(u.push(M,P,B),R+=3),(e>0||T!==r-1)&&(u.push(P,q,B),R+=3)}c.addGroup(h,R,0),h+=R}function E(S){const H=_,R=new at,L=new U;let F=0;const T=S===!0?t:e,M=S===!0?1:-1;for(let q=1;q<=s;q++)f.push(0,d*M,0),m.push(0,M,0),p.push(.5,.5),_++;const P=_;for(let q=0;q<=s;q++){const G=q/s*l+a,J=Math.cos(G),Y=Math.sin(G);L.x=T*Y,L.y=d*M,L.z=T*J,f.push(L.x,L.y,L.z),m.push(0,M,0),R.x=J*.5+.5,R.y=Y*.5*M+.5,p.push(R.x,R.y),_++}for(let q=0;q<s;q++){const B=H+q,G=P+q;S===!0?u.push(G,G+1,B):u.push(G+1,G,B),F+=3}c.addGroup(h,F,S===!0?1:2),h+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new So(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rs extends Da{constructor(t){super(t),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Da().fromJSON(s))}return this}}const hm={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Al(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,f,m,p;if(n&&(r=mm(i,t,r,e)),i.length>80*e){a=c=i[0],l=u=i[1];for(let _=e;_<s;_+=e)f=i[_],m=i[_+1],f<a&&(a=f),m<l&&(l=m),f>c&&(c=f),m>u&&(u=m);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Bi(r,o,e,a,l,p,0),o}};function Al(i,t,e,n,s){let r,o;if(s===Am(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Ia(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ia(r,i[r],i[r+1],o);return o&&Ds(o,o.next)&&(Vi(o),o=o.next),o}function Vn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ds(e,e.next)||ce(e.prev,e,e.next)===0)){if(Vi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Bi(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Mm(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?fm(i,n,s,r):um(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Vi(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=dm(Vn(i),t,e),Bi(i,t,e,n,s,r,2)):o===2&&pm(i,t,e,n,s,r):Bi(Vn(i),t,e,n,s,r,1);break}}}function um(i){const t=i.prev,e=i,n=i.next;if(ce(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,m=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=m&&_.y>=f&&_.y<=p&&li(s,a,r,l,o,c,_.x,_.y)&&ce(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function fm(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ce(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,m=o.y,p=a<l?a<c?a:c:l<c?l:c,_=u<f?u<m?u:m:f<m?f:m,v=a>l?a>c?a:c:l>c?l:c,d=u>f?u>m?u:m:f>m?f:m,h=no(p,_,t,e,n),A=no(v,d,t,e,n);let E=i.prevZ,S=i.nextZ;for(;E&&E.z>=h&&S&&S.z<=A;){if(E.x>=p&&E.x<=v&&E.y>=_&&E.y<=d&&E!==s&&E!==o&&li(a,u,l,f,c,m,E.x,E.y)&&ce(E.prev,E,E.next)>=0||(E=E.prevZ,S.x>=p&&S.x<=v&&S.y>=_&&S.y<=d&&S!==s&&S!==o&&li(a,u,l,f,c,m,S.x,S.y)&&ce(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;E&&E.z>=h;){if(E.x>=p&&E.x<=v&&E.y>=_&&E.y<=d&&E!==s&&E!==o&&li(a,u,l,f,c,m,E.x,E.y)&&ce(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;S&&S.z<=A;){if(S.x>=p&&S.x<=v&&S.y>=_&&S.y<=d&&S!==s&&S!==o&&li(a,u,l,f,c,m,S.x,S.y)&&ce(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function dm(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Ds(s,r)&&wl(s,n,n.next,r)&&Hi(s,r)&&Hi(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Vi(n),Vi(n.next),n=i=r),n=n.next}while(n!==i);return Vn(n)}function pm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Em(o,a)){let l=Rl(o,a);o=Vn(o,o.next),l=Vn(l,l.next),Bi(o,t,e,n,s,r,0),Bi(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function mm(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Al(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(ym(c));for(s.sort(_m),r=0;r<s.length;r++)e=gm(s[r],e);return e}function _m(i,t){return i.x-t.x}function gm(i,t){const e=vm(i,t);if(!e)return t;const n=Rl(e,i);return Vn(n,n.next),Vn(e,e.next)}function vm(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const m=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=r&&m>n&&(n=m,s=e.x<e.next.x?e:e.next,m===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&li(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),Hi(e,i)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&xm(s,e)))&&(s=e,u=f)),e=e.next;while(e!==a);return s}function xm(i,t){return ce(i.prev,i,t.prev)<0&&ce(t.next,i,i.next)<0}function Mm(i,t,e,n){let s=i;do s.z===0&&(s.z=no(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Sm(s)}function Sm(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function no(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ym(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function li(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Em(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Tm(i,t)&&(Hi(i,t)&&Hi(t,i)&&bm(i,t)&&(ce(i.prev,i,t.prev)||ce(i,t.prev,t))||Ds(i,t)&&ce(i.prev,i,i.next)>0&&ce(t.prev,t,t.next)>0)}function ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ds(i,t){return i.x===t.x&&i.y===t.y}function wl(i,t,e,n){const s=_s(ce(i,t,e)),r=_s(ce(i,t,n)),o=_s(ce(e,n,i)),a=_s(ce(e,n,t));return!!(s!==r&&o!==a||s===0&&ms(i,e,t)||r===0&&ms(i,n,t)||o===0&&ms(e,i,n)||a===0&&ms(e,t,n))}function ms(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _s(i){return i>0?1:i<0?-1:0}function Tm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&wl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Hi(i,t){return ce(i.prev,i,i.next)<0?ce(i,t,i.next)>=0&&ce(i,i.prev,t)>=0:ce(i,t,i.prev)<0||ce(i,i.next,t)<0}function bm(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Rl(i,t){const e=new io(i.i,i.x,i.y),n=new io(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ia(i,t,e,n){const s=new io(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function io(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Am(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Tn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Tn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Ua(t),Na(n,t);let o=t.length;e.forEach(Ua);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Na(n,e[l]);const a=hm.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ua(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Na(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class yo extends De{constructor(t=new Rs([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ae(s,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3;const h=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:wm;let E,S=!1,H,R,L,F;h&&(E=h.getSpacedPoints(u),S=!0,m=!1,H=h.computeFrenetFrames(u,!1),R=new U,L=new U,F=new U),m||(d=0,p=0,_=0,v=0);const T=a.extractPoints(c);let M=T.shape;const P=T.holes;if(!Tn.isClockWise(M)){M=M.reverse();for(let tt=0,ot=P.length;tt<ot;tt++){const w=P[tt];Tn.isClockWise(w)&&(P[tt]=w.reverse())}}const B=Tn.triangulateShape(M,P),G=M;for(let tt=0,ot=P.length;tt<ot;tt++){const w=P[tt];M=M.concat(w)}function J(tt,ot,w){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(ot,w)}const Y=M.length,nt=B.length;function K(tt,ot,w){let wt,it,ft;const dt=tt.x-ot.x,Nt=tt.y-ot.y,Mt=w.x-tt.x,b=w.y-tt.y,g=dt*dt+Nt*Nt,V=dt*b-Nt*Mt;if(Math.abs(V)>Number.EPSILON){const $=Math.sqrt(g),et=Math.sqrt(Mt*Mt+b*b),j=ot.x-Nt/$,yt=ot.y+dt/$,mt=w.x-b/et,St=w.y+Mt/et,Wt=((mt-j)*b-(St-yt)*Mt)/(dt*b-Nt*Mt);wt=j+dt*Wt-tt.x,it=yt+Nt*Wt-tt.y;const st=wt*wt+it*it;if(st<=2)return new at(wt,it);ft=Math.sqrt(st/2)}else{let $=!1;dt>Number.EPSILON?Mt>Number.EPSILON&&($=!0):dt<-Number.EPSILON?Mt<-Number.EPSILON&&($=!0):Math.sign(Nt)===Math.sign(b)&&($=!0),$?(wt=-Nt,it=dt,ft=Math.sqrt(g)):(wt=dt,it=Nt,ft=Math.sqrt(g/2))}return new at(wt/ft,it/ft)}const pt=[];for(let tt=0,ot=G.length,w=ot-1,wt=tt+1;tt<ot;tt++,w++,wt++)w===ot&&(w=0),wt===ot&&(wt=0),pt[tt]=K(G[tt],G[w],G[wt]);const vt=[];let ht,It=pt.concat();for(let tt=0,ot=P.length;tt<ot;tt++){const w=P[tt];ht=[];for(let wt=0,it=w.length,ft=it-1,dt=wt+1;wt<it;wt++,ft++,dt++)ft===it&&(ft=0),dt===it&&(dt=0),ht[wt]=K(w[wt],w[ft],w[dt]);vt.push(ht),It=It.concat(ht)}for(let tt=0;tt<d;tt++){const ot=tt/d,w=p*Math.cos(ot*Math.PI/2),wt=_*Math.sin(ot*Math.PI/2)+v;for(let it=0,ft=G.length;it<ft;it++){const dt=J(G[it],pt[it],wt);lt(dt.x,dt.y,-w)}for(let it=0,ft=P.length;it<ft;it++){const dt=P[it];ht=vt[it];for(let Nt=0,Mt=dt.length;Nt<Mt;Nt++){const b=J(dt[Nt],ht[Nt],wt);lt(b.x,b.y,-w)}}}const Yt=_+v;for(let tt=0;tt<Y;tt++){const ot=m?J(M[tt],It[tt],Yt):M[tt];S?(L.copy(H.normals[0]).multiplyScalar(ot.x),R.copy(H.binormals[0]).multiplyScalar(ot.y),F.copy(E[0]).add(L).add(R),lt(F.x,F.y,F.z)):lt(ot.x,ot.y,0)}for(let tt=1;tt<=u;tt++)for(let ot=0;ot<Y;ot++){const w=m?J(M[ot],It[ot],Yt):M[ot];S?(L.copy(H.normals[tt]).multiplyScalar(w.x),R.copy(H.binormals[tt]).multiplyScalar(w.y),F.copy(E[tt]).add(L).add(R),lt(F.x,F.y,F.z)):lt(w.x,w.y,f/u*tt)}for(let tt=d-1;tt>=0;tt--){const ot=tt/d,w=p*Math.cos(ot*Math.PI/2),wt=_*Math.sin(ot*Math.PI/2)+v;for(let it=0,ft=G.length;it<ft;it++){const dt=J(G[it],pt[it],wt);lt(dt.x,dt.y,f+w)}for(let it=0,ft=P.length;it<ft;it++){const dt=P[it];ht=vt[it];for(let Nt=0,Mt=dt.length;Nt<Mt;Nt++){const b=J(dt[Nt],ht[Nt],wt);S?lt(b.x,b.y+E[u-1].y,E[u-1].x+w):lt(b.x,b.y,f+w)}}}Q(),rt();function Q(){const tt=s.length/3;if(m){let ot=0,w=Y*ot;for(let wt=0;wt<nt;wt++){const it=B[wt];Dt(it[2]+w,it[1]+w,it[0]+w)}ot=u+d*2,w=Y*ot;for(let wt=0;wt<nt;wt++){const it=B[wt];Dt(it[0]+w,it[1]+w,it[2]+w)}}else{for(let ot=0;ot<nt;ot++){const w=B[ot];Dt(w[2],w[1],w[0])}for(let ot=0;ot<nt;ot++){const w=B[ot];Dt(w[0]+Y*u,w[1]+Y*u,w[2]+Y*u)}}n.addGroup(tt,s.length/3-tt,0)}function rt(){const tt=s.length/3;let ot=0;bt(G,ot),ot+=G.length;for(let w=0,wt=P.length;w<wt;w++){const it=P[w];bt(it,ot),ot+=it.length}n.addGroup(tt,s.length/3-tt,1)}function bt(tt,ot){let w=tt.length;for(;--w>=0;){const wt=w;let it=w-1;it<0&&(it=tt.length-1);for(let ft=0,dt=u+d*2;ft<dt;ft++){const Nt=Y*ft,Mt=Y*(ft+1),b=ot+wt+Nt,g=ot+it+Nt,V=ot+it+Mt,$=ot+wt+Mt;Ot(b,g,V,$)}}}function lt(tt,ot,w){l.push(tt),l.push(ot),l.push(w)}function Dt(tt,ot,w){Ut(tt),Ut(ot),Ut(w);const wt=s.length/3,it=A.generateTopUV(n,s,wt-3,wt-2,wt-1);qt(it[0]),qt(it[1]),qt(it[2])}function Ot(tt,ot,w,wt){Ut(tt),Ut(ot),Ut(wt),Ut(ot),Ut(w),Ut(wt);const it=s.length/3,ft=A.generateSideWallUV(n,s,it-6,it-3,it-2,it-1);qt(ft[0]),qt(ft[1]),qt(ft[3]),qt(ft[1]),qt(ft[2]),qt(ft[3])}function Ut(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function qt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Rm(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new eo[s.type]().fromJSON(s)),new yo(n,t.options)}}const wm={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new at(r,o),new at(a,l),new at(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],m=t[s*3],p=t[s*3+1],_=t[s*3+2],v=t[r*3],d=t[r*3+1],h=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new at(o,1-l),new at(c,1-f),new at(m,1-_),new at(v,1-h)]:[new at(a,1-l),new at(u,1-f),new at(p,1-_),new at(d,1-h)]}};function Rm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Eo extends De{constructor(t=new Rs([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(r,3)),this.setAttribute("uv",new ae(o,2));function c(u){const f=s.length/3,m=u.extractPoints(e);let p=m.shape;const _=m.holes;Tn.isClockWise(p)===!1&&(p=p.reverse());for(let d=0,h=_.length;d<h;d++){const A=_[d];Tn.isClockWise(A)===!0&&(_[d]=A.reverse())}const v=Tn.triangulateShape(p,_);for(let d=0,h=_.length;d<h;d++){const A=_[d];p=p.concat(A)}for(let d=0,h=p.length;d<h;d++){const A=p[d];s.push(A.x,A.y,0),r.push(0,0,1),o.push(A.x,A.y)}for(let d=0,h=v.length;d<h;d++){const A=v[d],E=A[0]+f,S=A[1]+f,H=A[2]+f;n.push(E,S,H),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Cm(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Eo(n,t.curveSegments)}}function Cm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class To extends De{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new U,m=new U,p=[],_=[],v=[],d=[];for(let h=0;h<=n;h++){const A=[],E=h/n;let S=0;h===0&&o===0?S=.5/e:h===n&&l===Math.PI&&(S=-.5/e);for(let H=0;H<=e;H++){const R=H/e;f.x=-t*Math.cos(s+R*r)*Math.sin(o+E*a),f.y=t*Math.cos(o+E*a),f.z=t*Math.sin(s+R*r)*Math.sin(o+E*a),_.push(f.x,f.y,f.z),m.copy(f).normalize(),v.push(m.x,m.y,m.z),d.push(R+S,1-E),A.push(c++)}u.push(A)}for(let h=0;h<n;h++)for(let A=0;A<e;A++){const E=u[h][A+1],S=u[h][A],H=u[h+1][A],R=u[h+1][A+1];(h!==0||o>0)&&p.push(E,S,R),(h!==n-1||l<Math.PI)&&p.push(S,H,R)}this.setIndex(p),this.setAttribute("position",new ae(_,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new To(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fi extends De{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new U,f=new U,m=new U;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){const v=_/s*r,d=p/n*Math.PI*2;f.x=(t+e*Math.cos(d))*Math.cos(v),f.y=(t+e*Math.cos(d))*Math.sin(v),f.z=e*Math.sin(d),a.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),m.subVectors(f,u).normalize(),l.push(m.x,m.y,m.z),c.push(_/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){const v=(s+1)*p+_-1,d=(s+1)*(p-1)+_-1,h=(s+1)*(p-1)+_,A=(s+1)*p+_;o.push(v,d,A),o.push(d,h,A)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Pm extends Mi{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new Jt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class ur extends Mi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rl,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cl extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const fr=new le,Fa=new U,Oa=new U;class Lm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Fa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fa),Oa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oa),e.updateMatrixWorld(),fr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Dm extends Lm{constructor(){super(new go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Im extends Cl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Dm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Um extends Cl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=za(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=za();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function za(){return performance.now()}const Ba=new le;class Fm{constructor(t,e,n=0,s=1/0){this.ray=new po(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ba.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ba),this}intersectObject(t,e=!0,n=[]){return so(t,this,n,e),n.sort(Ha),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)so(t[s],this,n,e);return n.sort(Ha),n}}function Ha(i,t){return i.distance-t.distance}function so(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)so(r[o],t,e,!0)}}class Va{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Om extends kn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");const Pl={wander:"娃娃們正在各個小島之間散步",swing:"娃娃們在河畔公園一起盪鞦韆",play:"娃娃們在公園追球、一起玩耍"};function ka(i,t=Math.random){const e=Object.keys(Pl).filter(n=>n!==i);return e[Math.min(e.length-1,Math.floor(t()*e.length))]}function zm(i,t,e){const n=[[i]],s=new Set([i]);for(;n.length;){const r=n.shift(),o=r.at(-1);if(o===t)return r;for(const[a,l]of e){const c=a===o?l:l===o?a:null;c&&!s.has(c)&&(s.add(c),n.push([...r,c]))}}throw new Error(`No walking path between ${i} and ${t}`)}const Me={id:"park",x:0,z:13.8,seats:[{x:1.45,z:3.8},{x:2.95,z:3.8}],pusher:{x:2.2,z:5.1},play:{x:-.7,z:3.7}};function Bm(i,t,e,n,s,r){const o=zm(i,t,n),a=[s],l=c=>({x:c.x,z:c.z+1.6});for(let c=0;c<o.length-1;c++){const u=e.find(d=>d.id===o[c]),f=e.find(d=>d.id===o[c+1]),m=f.x-u.x,p=f.z-u.z,_=Math.hypot(m,p),v=5.64;a.push(l(u)),p<-1&&(u.id==="park"?a.push({x:u.x+.45,z:u.z+1.1},{x:u.x,z:u.z-2}):a.push({x:u.x+2.4,z:u.z+1.4},{x:u.x+2.4,z:u.z-2.1})),a.push({x:u.x+m/_*v,z:u.z+p/_*v},{x:f.x-m/_*v,z:f.z-p/_*v}),p>1&&(f.id==="park"?a.push({x:f.x,z:f.z-2},{x:f.x+.45,z:f.z+1.1}):a.push({x:f.x+2.4,z:f.z-2.1},{x:f.x+2.4,z:f.z+1.4})),a.push(l(f))}return a.push(r),a.filter((c,u)=>u===0||Math.hypot(c.x-a[u-1].x,c.z-a[u-1].z)>.001)}function Hm({nodes:i,links:t,previous:e,random:n=Math.random}){const s=[0,1,2].sort(()=>n()-.5);let r=ka(e,n),o=0,a=55+n()*15;const l=r,c=i.find(d=>d.id==="park"),u=d=>{const h=i.filter(A=>A.id!==d);return h[Math.floor(n()*h.length)%h.length]},f=[0,1,2].map(d=>({id:d,slot:s[d],phase:n()*Math.PI*2,x:0,z:0,yOffset:0,heading:0,node:"park",state:"waiting",goalMode:r,walkTime:0,playTime:0,swingTime:2,wait:0}));function m(d){if(r==="wander"){const A=u(d.node);return{node:A.id,point:{x:A.x,z:A.z+1.6},state:"waiting"}}if(r==="swing"){const A=d.slot<2?Me.seats[d.slot]:Me.pusher;return{node:"park",point:{x:c.x+A.x,z:c.z+A.z},state:d.slot<2?"swinging":"pushing"}}const h=d.slot*Math.PI*2/3;return{node:"park",point:{x:c.x+Me.play.x+Math.cos(h)*1.2,z:c.z+Me.play.z+Math.sin(h)*1.2},state:"playing"}}function p(d){const h=m(d);d.goalMode=r,d.target=h,d.route=Bm(d.node,h.node,i,t,{x:d.x,z:d.z},h.point),d.routeIndex=1,d.state="walking",d.yOffset=0,d.swingAngle=0,d.playTime=0,d.swingTime=0}for(const d of f)if(r==="wander"){const h=i[(d.slot+Math.floor(n()*i.length))%i.length];d.node=h.id,d.x=h.x,d.z=h.z+1.6,p(d)}else{const h=m(d);d.node=h.node,d.x=h.point.x,d.z=h.point.z,d.state=h.state,d.target=h}function _(d){o+=d,o>=a&&(r=ka(r,n),a=o+55+n()*15);for(const h of f)if(h.yOffset=0,h.swingAngle=0,h.state!=="walking"&&h.goalMode!==r&&p(h),h.state==="walking"){let A=d*.95;for(h.walkTime+=d;A>0&&h.routeIndex<h.route.length;){const E=h.route[h.routeIndex],S=E.x-h.x,H=E.z-h.z,R=Math.hypot(S,H);h.heading=Math.atan2(S,H),R<=A?(h.x=E.x,h.z=E.z,A-=R,h.routeIndex++):(h.x+=S/R*A,h.z+=H/R*A,A=0)}h.yOffset=Math.abs(Math.sin(h.walkTime*8))*.04,h.routeIndex>=h.route.length&&(h.node=h.target.node,h.state=h.target.state,h.wait=1.5+n()*3,h.playTime=0)}else if(h.state==="waiting")h.wait-=d,h.wait<=0&&p(h);else if(h.state==="swinging")h.swingTime+=d,h.swingAngle=Math.sin(h.swingTime*1.7+h.slot*.65)*.4*Math.min(1,h.swingTime/1.5),h.x=c.x+Me.seats[h.slot].x,h.z=c.z+Me.seats[h.slot].z+Math.sin(h.swingAngle)*1.75,h.yOffset=2.8-Math.cos(h.swingAngle)*1.75-.1,h.heading=0;else if(h.state==="pushing")h.heading=Math.PI,h.yOffset=Math.max(0,Math.sin(o*1.7))*.04;else if(h.state==="playing"){h.playTime+=d;const A=h.playTime*.62+h.slot*Math.PI*2/3;h.x=c.x+Me.play.x+Math.cos(A)*1.2,h.z=c.z+Me.play.z+Math.sin(A)*1.2,h.heading=-A,h.yOffset=Math.abs(Math.sin(h.playTime*5+h.slot))*.17}}function v(){return f.map(d=>({state:d.state,label:{walking:"跨島散步中",waiting:"在島上看風景",swinging:"在公園盪鞦韆",pushing:"陪朋友一起盪鞦韆",playing:"在公園一起玩球"}[d.state]}))}return{actors:f,update:_,descriptions:v,initialMode:l,get mode(){return r},get elapsed(){return o}}}const Ga={type:"change"},bo={type:"start"},Ll={type:"end"},gs=new po,Wa=new Mn,Vm=Math.cos(70*Es.DEG2RAD),de=new U,Ce=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dr=1e-6;class km extends Om{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ci.ROTATE,MIDDLE:ci.DOLLY,RIGHT:ci.PAN},this.touches={ONE:oi.ROTATE,TWO:oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Hn,this._lastTargetPosition=new U,this._quat=new Hn().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Va,this._sphericalDelta=new Va,this._scale=1,this._panOffset=new U,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new U,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Wm.bind(this),this._onPointerDown=Gm.bind(this),this._onPointerUp=Xm.bind(this),this._onContextMenu=$m.bind(this),this._onMouseWheel=Zm.bind(this),this._onKeyDown=Km.bind(this),this._onTouchStart=jm.bind(this),this._onTouchMove=Jm.bind(this),this._onMouseDown=Ym.bind(this),this._onMouseMove=qm.bind(this),this._interceptControlDown=Qm.bind(this),this._interceptControlUp=t_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ga),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;de.copy(e).sub(this.target),de.applyQuaternion(this._quat),this._spherical.setFromVector3(de),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ce:n>Math.PI&&(n-=Ce),s<-Math.PI?s+=Ce:s>Math.PI&&(s-=Ce),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(de.setFromSpherical(this._spherical),de.applyQuaternion(this._quatInverse),e.copy(this.target).add(de),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=de.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=de.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(gs.origin.copy(this.object.position),gs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gs.direction))<Vm?this.object.lookAt(this.target):(Wa.setFromNormalAndCoplanarPoint(this.object.up,this.target),gs.intersectPlane(Wa,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>dr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dr||this._lastTargetPosition.distanceToSquared(this.target)>dr?(this.dispatchEvent(Ga),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ce/60*this.autoRotateSpeed*t:Ce/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){de.setFromMatrixColumn(e,0),de.multiplyScalar(-t),this._panOffset.add(de)}_panUp(t,e){this.screenSpacePanning===!0?de.setFromMatrixColumn(e,1):(de.setFromMatrixColumn(e,0),de.crossVectors(this.object.up,de)),de.multiplyScalar(t),this._panOffset.add(de)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;de.copy(s).sub(this.target);let r=de.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ce*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ce*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ce*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ce*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ce*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ce*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ce*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ce*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new at,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Gm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Wm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Xm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ll),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Ym(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ci.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ne.DOLLY;break;case ci.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}break;case ci.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(bo)}function qm(i){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Zm(i){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(i.preventDefault(),this.dispatchEvent(bo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ll))}function Km(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function jm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case oi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ne.TOUCH_ROTATE;break;case oi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case oi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ne.TOUCH_DOLLY_PAN;break;case oi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(bo)}function Jm(i){switch(this._trackPointer(i),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ne.NONE}}function $m(i){this.enabled!==!1&&i.preventDefault()}function Qm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function t_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function e_(i,t,e){const n=i.querySelector("canvas"),s=new jp({canvas:n,antialias:!0,alpha:!0});s.setClearColor(16316656,0),s.setPixelRatio(Math.min(devicePixelRatio,1.5)),s.shadowMap.enabled=!0,s.shadowMap.type=Ya,s.outputColorSpace=Fe;const r=new Jp,o=new go(-13,13,10,-10,.1,120);o.position.set(42,53,65);let a=innerWidth<=760?1.4:1;o.zoom=a;const l=new km(o,n);l.enablePan=!1,l.enableDamping=!0,l.minZoom=.68,l.maxZoom=4.5,l.enablePan=!0,l.screenSpacePanning=!1,l.minPolarAngle=.4,l.maxPolarAngle=1.22,l.target.set(0,.1,1.8),l.rotateSpeed=.55,l.update(),l.saveState(),r.add(new Um(16775657,2.3));const c=new Im(16774367,3.2);c.position.set(-25,55,32),c.castShadow=!0,c.shadow.mapSize.set(1024,1024),Object.assign(c.shadow.camera,{left:-40,right:40,top:40,bottom:-40,near:1,far:130}),c.shadow.normalBias=.06,c.shadow.bias=-1e-4,r.add(c);const u=new Map;function f(x){return u.has(x)||u.set(x,new ur({color:x,roughness:1})),u.get(x)}function m(x,D,C=r){const I=new Ae(x,f(D));return I.castShadow=I.receiveShadow=!0,C.add(I),I}function p(x,D,C,I,k=0,N=0,Z=0,ct=r){const At=m(new Si(x,D,C),I,ct);return At.position.set(k,N,Z),At}function _(x,D,C,I,k,N=r,Z=[1,1,1]){const ct=m(new To(x,12,9),D,N);return ct.position.set(C,I,k),ct.scale.set(...Z),ct}function v(x,D,C,I,k,N,Z,ct=r,At=12){const gt=m(new So(x,D,C,At),I,ct);return gt.position.set(k,N,Z),gt}const d=2.4,h=.67,A=[{id:"home",x:0,z:0,c:"#afc588"},{id:"todo",x:-5.75,z:0,c:"#a9c28e"},{id:"note",x:-2.88,z:-5.05,c:"#bdc88f"},{id:"friends",x:2.88,z:-5.05,c:"#abc597"},{id:"memories",x:5.75,z:0,c:"#bac99e"}],E={},S=[];A.forEach(x=>{x.x*=d,x.z*=d;const D=new ge;D.position.set(x.x,0,x.z),r.add(D),E[x.id]=D;for(const[C,I,k,N,Z]of[[2.95,2.65,1.18,"#c8ae80",-.12],[3.04,2.95,.23,"#efdeb1",.38],[2.93,3.02,.22,x.c,.56]]){const ct=v(C*d,I*d,k,N,0,Z,0,D,6);ct.rotation.y=Math.PI/6,Z===.56&&(ct.userData.id=x.id,S.push(ct))}for(let C=0;C<8;C++){const I=C*Math.PI/4;_(.17,"#bfa984",Math.cos(I)*2.65*d,-.5,Math.sin(I)*2.65*d,D,[1,.6,.7])}});for(let x=3;x>=0;x--){const D=new Ae(new ws((12.3+x*.8)*d,64),new Ii({color:["#aecfbe","#c2d9c5","#d9e4d0","#ebeedf"][x],transparent:!0,opacity:.63}));D.rotation.x=-Math.PI/2,D.position.set(0,-.83-x*.01,-.6),r.add(D)}const H=new Ae(new Wi(140,140),new Pm({opacity:.12}));H.rotation.x=-Math.PI/2,H.position.y=-.88,H.receiveShadow=!0,r.add(H);function R(x,D,C,I,k=0){const N=new ge;if(N.position.set(x,h,D),N.scale.setScalar(C),I.add(N),v(.12,.18,1.2,"#94775c",0,.6,0,N,7),k===1)for(let Z=0;Z<3;Z++)v(0,.85-Z*.17,1.25-Z*.13,["#72976b","#86a778","#9bb683"][Z],0,1.35+Z*.53,0,N,7);else if(_(.95,"#86a86e",0,1.65,0,N,[1,1.12,1]),_(.72,"#a0ba7d",-.35,2.05,.06,N),_(.67,"#93af74",.38,2.05,-.1,N),k===2)for(let Z=0;Z<5;Z++){let ct=Z*2.4;_(.14,"#df9b70",Math.sin(ct)*.78,1.7+Math.cos(Z*3)*.45,Math.cos(ct)*.65,N)}}function L(x,D,C,I="#f6e3ab",k=9){for(let N=0;N<k;N++){const Z=new ge;Z.position.set(x+Math.sin(N*3.88)*.55,h,D+Math.cos(N*3.88)*.55),Z.rotation.y=N*2,C.add(Z),v(.015,.018,.27,"#849461",0,.12,0,Z,5);for(let ct=0;ct<5;ct++){const At=ct*Math.PI*2/5;_(.065,I,Math.cos(At)*.075,.3+Math.sin(At)*.075,0,Z,[1,1,.55])}_(.04,"#dcba66",0,.3,.025,Z)}}function F(x,D,C,I,k=0){const N=new ge;N.position.set(x,h,D),N.rotation.y=k,I.add(N);for(let Z=0;Z<=C;Z++)p(.1,.63,.1,"#f1e7cc",Z*.5,.31,0,N),_(.07,"#f5ecd7",Z*.5,.65,0,N);for(const Z of[.2,.43])p(C*.5,.08,.07,"#f1e7cc",C*.25,Z,0,N)}function T(x,D,C,I,k){p(C,.035,I,"#e7d6ae",x,h+.01,D,k)}function M(x,{x:D=0,z:C=0,w:I=2.2,h:k=1.7,d:N=1.7,wall:Z="#f4e5bc",roof:ct="#b97959",shop:At=!1}={}){const gt=new ge;gt.position.set(D,h,C),x.add(gt),p(I,k,N,Z,0,k/2,0,gt),p(I+.18,.16,N+.12,"#e4d2a4",0,.06,0,gt);const Zt=new Rs;Zt.moveTo(-I/2-.2,0),Zt.lineTo(0,.92),Zt.lineTo(I/2+.2,0),Zt.closePath(),m(new yo(Zt,{depth:N+.4,bevelEnabled:!1}),ct,gt).position.set(0,k,-N/2-.2),p(.65,1.12,.08,"#9a7758",0,.56,N/2+.05,gt),p(.45,.77,.025,"#adcaac",0,.69,N/2+.1,gt),p(.55,.09,.1,"#f2e0b7",0,.7,N/2+.14,gt),_(.045,"#d6ae64",.19,.57,N/2+.15,gt);for(const ue of[-1,1]){p(.52,.61,.1,"#e4cf9b",ue*I*.33,k*.62,N/2+.06,gt),p(.38,.46,.12,"#a3c4bb",ue*I*.33,k*.62,N/2+.07,gt),p(.025,.46,.13,"#fff2ce",ue*I*.33,k*.62,N/2+.08,gt),p(.4,.025,.13,"#fff2ce",ue*I*.33,k*.62,N/2+.08,gt),p(.66,.13,.22,"#b37f5c",ue*I*.33,k*.4,N/2+.1,gt);for(let we=0;we<3;we++)_(.09,"#8da66c",ue*I*.33-.21+we*.21,k*.45,N/2+.15,gt),_(.055,"#e7b2a2",ue*I*.33-.21+we*.21,k*.5,N/2+.19,gt)}if(p(.34,.75,.4,"#ead5ad",I*.29,k+.48,-N*.17,gt),p(.44,.1,.5,ct,I*.29,k+.86,-N*.17,gt),p(.88,.11,.34,"#e8dac0",0,.05,N/2+.23,gt),At){const ue=p(I+.12,.12,.65,"#f0d5a6",0,k*.7,N/2+.3,gt);ue.rotation.x=.12;for(let we=0;we<6;we++)p(I/12,.13,.64,"#b58d72",-I/2+we*I/6,0,0,ue)}}function P(x,D,C,I=0){const k=new ge;C.add(k),k.position.set(x,h,D),k.rotation.y=I;for(let N=0;N<3;N++)p(1.1,.075,.11,"#b28d63",0,.4,N*.13,k);for(const N of[.73,.9])p(1.1,.12,.08,"#b28d63",0,N,-.05,k);for(const N of[-.4,.4])p(.08,.45,.08,"#788371",N,.2,.12,k),p(.06,.8,.06,"#788371",N,.5,-.05,k)}function q(x,D,C){v(.035,.06,1.55,"#7b8370",x,h+.77,D,C,8),p(.3,.34,.3,"#fff1c5",x,h+1.57,D,C),v(0,.25,.22,"#73816b",x,h+1.85,D,C,4)}const B=E.home;T(0,1.3,.75,2.5,B),T(1.5,.85,2.5,.65,B),M(B,{z:-.6,w:2.35,h:1.65,d:1.9}),R(-1.9,-1.05,.86,B,2),R(1.9,-1.4,.86,B),L(-1.6,1.55,B),L(1.6,1.5,B,"#e7a49a"),F(-1,-2.25,4,B),q(-.8,1.8,B),p(.34,.3,.4,"#7e9a87",.83,1.33,1.8,B),v(.045,.045,.6,"#b09876",.83,.94,1.8,B);const G=E.todo;M(G,{x:-.4,z:-.7,w:1.8,h:1.3,d:1.5,roof:"#8b9b75"}),T(.1,1,.65,2.4,G),R(-1.8,.35,.77,G,1),R(.9,-1.7,.9,G,2),P(1.35,.65,G,-.3),F(-1.3,1.9,3,G),L(-1.5,1.2,G),L(1.8,-.5,G,"#faf1d3",7);const J=E.note;M(J,{z:-.3,w:1.9,h:1.4,d:1.5,wall:"#f1d5b7",roof:"#c18a75",shop:!0}),T(0,1.2,.65,2.1,J),R(-1.8,-.6,.92,J),R(1.8,-1.1,.7,J,1),v(.53,.53,.1,"#d2af7d",1.4,1.13,1.05,J),v(.09,.14,.47,"#ae8b63",1.4,.87,1.05,J);for(const[x,D]of[[.7,1.3],[1.9,1.65]])v(.25,.28,.45,"#d7b981",x,.85,D,J);p(.27,.04,.35,"#f9eed5",1.4,1.21,1.05,J),L(-1.65,1.3,J,"#e2a395"),F(-1.3,-2.15,5,J);const Y=E.friends;T(0,.5,.9,4.8,Y),R(-1.65,-1.2,1.05,Y,1),R(1.7,-.7,.88,Y,2),R(.7,-2,.75,Y),P(-1.4,.6,Y,.7),L(1.5,1.5,Y,"#eed38b",11),L(-1.7,1.5,Y,"#faf2d5",10),F(-.8,-2.2,4,Y);const nt=E.memories;R(1.5,-1.3,1.03,nt,2),R(-.8,-1.8,.8,nt),p(1.8,.035,1.45,"#edc7b3",-.15,h+.03,.25,nt);for(let x=0;x<5;x++)p(.07,.015,1.45,"#fff0d7",-.9+x*.36,h+.055,.25,nt);for(let x=0;x<4;x++)p(1.8,.015,.06,"#fff0d7",-.15,h+.06,-.3+x*.35,nt);p(.45,.32,.32,"#c5a174",.25,.86,.25,nt),m(new Fi(.17,.03,6,12,Math.PI),"#aa895e",nt).position.set(.25,1.04,.25),p(.3,.19,.15,"#6d7b70",-.5,.79,.48,nt);const pt=v(.07,.07,.08,"#455950",-.5,.8,.59,nt);pt.rotation.x=Math.PI/2,P(-1.7,.2,nt,.9),L(1.5,.9,nt,"#d5b1bc",11),L(-.9,1.8,nt),F(.4,1.9,3,nt),q(-1.3,1.2,nt);function vt(x,D){const C=D.x-x.x,I=D.z-x.z,k=Math.max(.8,Math.hypot(C,I)-4.7*d),N=new ge;N.position.set((x.x+D.x)/2,h-.05,(x.z+D.z)/2),N.rotation.y=Math.atan2(C,I),r.add(N);for(let Z=0;Z<8;Z++)p(.75,.1,k/8*.88,"#c9a878",0,0,-k/2+(Z+.5)*k/8,N);for(const Z of[-1,1]){for(const ct of[-k/2,k/2])v(.04,.05,.55,"#b89c73",Z*.41,.23,ct,N,6);p(.055,.055,k,"#d8ba8b",Z*.41,.46,0,N)}}[[0,1],[0,2],[0,3],[0,4],[2,3]].forEach(([x,D])=>vt(A[x],A[D]));const ht=new ge;ht.position.set(0,0,13.8),ht.name="riverside-park",r.add(ht);for(const[x,D,C,I,k]of[[7.08,6.36,1.18,"#c8ae80",-.12],[7.3,7.08,.23,"#efdeb1",.38],[7.03,7.25,.22,"#b4c991",.56]]){const N=v(x,D,C,I,0,k,0,ht,6);N.rotation.y=Math.PI/6}vt(A[0],{x:0,z:13.8});for(let x=0;x<12;x++)p(1.4,.12,.24,"#c4a579",14.8,-.12,7+x*.25);for(const x of[14.15,15.45])for(const D of[7,9.8])v(.08,.09,.65,"#ae906b",x,-.13,D);const It=new ge;It.position.set(16.8,-.46,10.2),It.rotation.y=-.6,r.add(It),_(.6,"#e9d3a3",0,0,0,It,[.55,.35,1.5]),p(.5,.08,1.2,"#b29368",0,.08,0,It),p(.52,.06,.17,"#dfc596",0,.19,.2,It),v(.02,.025,1.7,"#b99b71",0,.85,-.15,It);const Yt=new Rs;Yt.moveTo(0,0),Yt.lineTo(0,1.25),Yt.lineTo(.73,.1),Yt.closePath();const Q=new Ae(new Eo(Yt),new ur({color:"#fff2d8",side:We}));Q.position.set(.03,.4,-.15),It.add(Q);const rt=[];function bt(x,D,C,I,k){const N=x.getPoints(70),Z=[],ct=[];N.forEach((Zt,ie)=>{const ue=x.getTangent(ie/70),we=new U(-ue.z,0,ue.x).normalize();for(const xe of[-1,1])Z.push(Zt.x+we.x*D*xe/2,C,Zt.z+we.z*D*xe/2);if(ie<70){const xe=ie*2;ct.push(xe,xe+2,xe+1,xe+1,xe+2,xe+3)}});const At=new De;At.setAttribute("position",new ae(Z,3)),At.setIndex(ct),At.computeVertexNormals();const gt=m(At,I,k);return gt.material=new ur({color:I,roughness:.8,side:We}),gt.castShadow=!1,gt}function lt(x,D,C=.75){const I=new to(x.map(([k,N])=>new U(k,0,N)));bt(I,C,h+.025,"#e5d6ad",D)}function Dt(x,D,C=1){const I=new to(x.map(([N,Z])=>new U(N,0,Z)));bt(I,C+.32,h+.035,"#e9dbb6",D);const k=bt(I,C,h+.06,"#91c6bb",D);k.name="winding-river";for(let N=0;N<7;N++){const Z=new Ae(new ws(.11,10),new Ii({color:"#d9eee0",transparent:!0,opacity:.7}));Z.rotation.x=-Math.PI/2,Z.scale.set(2.5,.4,1),D.add(Z),rt.push({glint:Z,curve:I,offset:N/7})}return I}function Ot(x,D,C,I){const k=_(1,"#9dbb80",x,h-.1,D,I,[C,C*.65,C*.82]);k.name="grassy-hill",_(1,"#b4cb91",x-C*.5,h-.12,D+C*.2,I,[C*.7,C*.4,C*.67]),R(x-C*.8,D-.5,.9,I,1)}function Ut(x,D,C,I=0){const k=new ge;k.position.set(x,h+.18,D),k.rotation.y=I,C.add(k);for(let N=0;N<12;N++)p(.95,.1,.15,"#c4a071",0,Math.sin(N/11*Math.PI)*.15,-.9+N*.16,k);for(const N of[-1,1]){for(const Z of[-.9,0,.9])v(.04,.05,.68,"#ae8f68",N*.5,.33,Z,k,6);p(.055,.06,1.9,"#d6b789",N*.5,.65,0,k)}}Object.entries(E).forEach(([x,D],C)=>{lt([[-5.6,0],[-3.4,.4],[0,1.6],[3.8,1],[5.7,0]],D),Ot(-3.6,-3.25,1.65,D);for(let I=0;I<7;I++){const k=.3+I*.82;R(Math.cos(k)*5,Math.sin(k)*4.7,.72+I%3*.16,D,I%3===0?1:0)}P(3.8,2.8,D,-.6),q(3.3,2.6,D),L(-3.7,2.7,D,C%2?"#eab5a5":"#f2e5b1",6),L(3.2,-3,D,"#d1b4c9",6),F(-2.5,4.9,5,D)}),Dt([[-6,1.4],[-4.2,2],[-2.4,3.2],[0,3.5],[2.6,3],[4.5,2.2],[6,1.3]],B,1.05),Ut(.2,3.5,B,.2),lt([[0,1.5],[.2,3.5],[0,5.9]],B,.8),M(G,{x:3.5,z:-2.8,w:1.65,h:1.25,d:1.4,roof:"#b2a178"}),M(J,{x:3.7,z:1,w:1.5,h:1.25,d:1.3,roof:"#a3ae89",wall:"#f0e5c6"}),Ot(3.4,-3.4,1.5,nt),Dt([[-6.1,-1.1],[-4,-.8],[-2,.3],[0,1.2],[2.1,.8],[4,-.4],[6.1,-1.2]],ht,1.4),Ot(-2.6,-3.4,2,ht),Ot(2,-3.8,1.5,ht),lt([[-4.9,1.2],[-2.5,2.4],[0,3.2],[3,2.8],[4.8,1.4]],ht,.9),lt([[0,-6],[.4,-3],[.5,0],[.3,3.2],[0,5.6]],ht,.8),Ut(.45,1.1,ht,.05),Ut(-4.3,-.8,ht,-.5);for(const[x,D]of[[-5,-2.6],[-4,3.3],[-2.7,4.5],[4.9,2.4],[4.7,-3.1]])R(x,D,.85,ht);for(const[x,D,C]of[[-2,2.2,.1],[2.8,-1.4,-.3],[-4.5,1.4,1.1]])P(x,D,ht,C);L(-2,3.9,ht,"#e7b6b3",8),L(3.9,1.9,ht,"#f7e8ad",8),q(-1.3,2.3,ht),q(2.8,2.4,ht),v(1.05,1.1,.14,"#e8d6b0",-3.8,h+.1,2.7,ht,6);for(let x=0;x<6;x++){const D=x*Math.PI/3;v(.045,.06,1.6,"#c8ac7b",-3.8+Math.cos(D)*.82,h+.95,2.7+Math.sin(D)*.82,ht,6)}v(0,1.25,.85,"#ba8c70",-3.8,h+2.05,2.7,ht,6),i.dataset.landAreaMultiplier=String(d**2),i.dataset.scenery="park hills river";function qt(x,D,C,I,k){const N=new U(...x),Z=new U(...D),ct=Z.clone().sub(N),At=v(C,C,ct.length(),I,0,0,0,k,8);return At.position.copy(N.add(Z).multiplyScalar(.5)),At.quaternion.setFromUnitVectors(new U(0,1,0),ct.normalize()),At}const tt=new ge;ht.add(tt),tt.name="park-swings";for(const x of[.65,3.75])for(const D of[2.85,4.75])qt([x,h,D],[x,h+2.9,3.8],.075,"#b69a70",tt);qt([.4,h+2.9,3.8],[4,h+2.9,3.8],.1,"#c3a77d",tt);const ot=Me.seats.map(x=>{const D=new ge;D.position.set(x.x,h+2.8,x.z),tt.add(D);for(const C of[-.29,.29])v(.018,.018,1.75,"#8f967d",C,-.875,0,D,6);return p(.8,.1,.48,"#ccac7d",0,-1.75,0,D),D}),w=_(.22,"#e2b187",Me.play.x,h+.23,Me.play.z,ht);w.name="residents-play-ball";const wt=m(new Fi(.221,.018,5,16),"#fff0d1",w);wt.rotation.x=.6;let it;try{it=sessionStorage.getItem("little-island-last-activity")}catch{}const ft=Hm({nodes:[...A,Me],links:[["home","todo"],["home","note"],["home","friends"],["home","memories"],["note","friends"],["home","park"]],previous:it});try{sessionStorage.setItem("little-island-last-activity",ft.initialMode)}catch{}const dt=document.querySelector("#resident-activity");function Nt(){i.dataset.residentActivity=ft.mode,dt&&(dt.textContent=Pl[ft.mode])}Nt(),ft.update(0);for(const[x,D]of[[0,2],[0,3],[2,3]]){const C=A[x],I=A[D],k=Math.hypot(I.x-C.x,I.z-C.z);for(const[N,Z]of[[C,I],[I,C]]){const ct=(Z.x-N.x)/k,At=(Z.z-N.z)/k,gt=[[0,1.6]];At<-.1&&gt.push([2.4,1.4],[2.4,-2.1]),gt.push([ct*5.64,At*5.64]),lt(gt,E[N.id],.65)}}const Mt=[];function b(x,D,C,I,k,N,Z){const ct=new ge;I.add(ct),ct.scale.setScalar(.85),_(.32,D,0,.43,0,ct,[1,1.2,.8]),_(.41,D,0,1.02,.025,ct,[1,.9,.9]);const At=[];for(const Zt of[-1,1]){if(x==="rabbit"){const ie=_(.115,D,Zt*.2,1.5,0,ct,[1,2.6,.8]);ie.rotation.z=Zt*-.14,_(.065,"#e0b9ab",Zt*.2,1.54,.075,ct,[1,2.7,.4])}else _(.145,D,Zt*.31,1.28,0,ct),_(.08,"#d3b99d",Zt*.31,1.28,.09,ct);_(.028,"#514a3c",Zt*.145,1.06,.36,ct),_(.065,"#d9a398",Zt*.27,.96,.32,ct,[1,.5,.25]),At.push(_(.12,D,Zt*.34,.52,0,ct,[.8,1.5,.8]))}_(.2,"#f3e6cb",0,.93,.3,ct,[1,.7,.35]),_(.04,"#67533f",0,.98,.38,ct,[1,.7,.7]),_(.28,C,0,.5,.015,ct,[1,1,.88]),_(.04,"#e8cf85",0,.56,.25,ct);const gt=[_(.135,D,-.18,.1,.08,ct,[1,.7,1.4]),_(.135,D,.18,.1,.08,ct,[1,.7,1.4])];ct.position.set(k,h,N),Mt.push({g:ct,feet:gt,arms:At})}b("bear","#bb956e","#90a080",r,0,0),b("rabbit","#f0e0c9","#d9a28f",r,0,0),b("bear","#a9b18a","#d8bc7c",r,0,0);const g=[];for(const[x,D,C,I]of[[-9,5,-7,1],[7,6,-6,.7],[-7,4,6,.6]]){const k=new ge;k.position.set(x*d,D+2,C*d),k.scale.setScalar(I*1.4),r.add(k);for(const[N,Z,ct,At]of[[0,0,0,.8],[-.7,-.1,0,.55],[.65,-.1,.1,.6],[.2,.3,0,.6]]){const gt=_(At,"#fff9e9",N,Z,ct,k,[1,.63,.75]);gt.castShadow=!1}g.push({g:k,x:x*d})}for(let x=0;x<12;x++){const D=x*2.4,C=new Ae(new Fi(.25+x%3*.08,.015,4,24,Math.PI*1.4),new Ii({color:"#eff6e5",transparent:!0,opacity:.55}));C.rotation.x=-Math.PI/2,C.rotation.z=D,C.position.set(Math.cos(D)*(9+x%3)*d,-.78,(Math.sin(D)*(7+x%3)-.4)*d),r.add(C)}const $=[["todo","待辦事項島","一步一步，慢慢來",-5.75,1.9,1.4],["note","記事本島","留住想說的話",-2.88,3.9,-5.05],["friends","家人朋友島","今天也一起散步",2.88,3.8,-5.05],["memories","美好回憶島","收藏閃閃發光的日子",5.75,2.2,.4]].map(([x,D,C,I,k,N])=>{const Z=document.createElement("button");return Z.className="map-label label-"+x,Z.innerHTML=`<span class="label-symbol">${e(x)}</span><span><strong>${D}</strong><small>${C}</small></span><span class="label-arrow">↗</span>`,Z.onclick=()=>t(x),i.querySelector("#world-labels").append(Z),{el:Z,point:new U(I*d,k+1,N*d)}}),et=document.createElement("div");et.className="home-label",et.textContent="✿ 中央河畔公園",i.querySelector("#world-labels").append(et);let j=1,yt=1;function mt(){if(j=i.clientWidth,yt=i.clientHeight,!j||!yt)return;s.setSize(j,yt,!1);const x=j<600?1.4:1;o.zoom===a&&(o.zoom=x),a=x;const D=j/yt,C=j<600?25/Math.min(D,1):22;o.left=-C*D,o.right=C*D,o.top=C,o.bottom=-C,o.updateProjectionMatrix()}const St=new ResizeObserver(mt);St.observe(i),mt();const Wt=new Nm,st=matchMedia("(prefers-reduced-motion: reduce)").matches;let Et=0,Ft=0,zt,Tt=0;function Xt(){if(zt=requestAnimationFrame(Xt),document.hidden||document.body.classList.contains("modal-open"))return;const x=Wt.getElapsedTime();l.update();const D=Math.min(.05,Math.max(0,x-Tt));Tt=x;const C=st?0:x,I=ft.mode;st||ft.update(D),I!==ft.mode&&Nt();{Mt.forEach((Z,ct)=>{const At=ft.actors[ct];let gt=0;for(const ie of[{x:.2,z:3.5},{x:.45,z:Me.z+1.1}])At.state==="walking"&&Math.abs(At.x-ie.x)<.55&&Math.abs(At.z-ie.z)<1&&(gt=.28+Math.cos((At.z-ie.z)*Math.PI/2)*.1);Z.g.position.set(At.x,h+At.yOffset+gt,At.z),Z.g.rotation.set(0,At.heading,0);const Zt=At.state==="swinging";Z.feet.forEach((ie,ue)=>{ie.position.y=Zt?.23:.1,ie.position.z=Zt?.3:.08+(At.state==="walking"?Math.sin(At.walkTime*8+ue*Math.PI)*.09:0)}),Z.arms.forEach((ie,ue)=>{ie.rotation.x=Zt?-1.1:At.state==="pushing"?-.8+Math.sin(C*1.7)*.25:0,ie.rotation.z=At.state==="playing"?Math.sin(C*4+ue)*.5:0}),!st&&x<Et&&ct===Ft&&!Zt&&(Z.g.position.y+=Math.abs(Math.sin(x*8))*.14,Z.arms[1].rotation.z=-1.2+Math.sin(x*7)*.4)}),ot.forEach((Z,ct)=>{const At=ft.actors.find(gt=>gt.slot===ct&&gt.state==="swinging");Z.rotation.x=-((At==null?void 0:At.swingAngle)||0)});const N=ft.actors.some(Z=>Z.state==="playing");w.position.set(Me.play.x+(N?Math.cos(ft.elapsed*1.1)*.75:0),h+.23+(N?Math.abs(Math.sin(ft.elapsed*3))*.45:0),Me.play.z+(N?Math.sin(ft.elapsed*1.1)*.75:0)),w.rotation.z=N?ft.elapsed*2:0,st||(g.forEach((Z,ct)=>Z.g.position.x=Z.x+Math.sin(x*.07+ct)*.4),It.position.y=-.45+Math.sin(x*1.3)*.035,It.rotation.z=Math.sin(x)*.025)}for(const N of rt){const Z=N.curve.getPoint(((st?0:x)*.025+N.offset)%1);N.glint.position.set(Z.x,h+.08,Z.z)}for(const N of $){const Z=N.point.clone().project(o),ct=N.el.offsetWidth/2+8,At=Es.clamp((Z.x*.5+.5)*j,ct,j-ct),gt=Es.clamp((-Z.y*.5+.5)*yt,N.el.offsetHeight+95,yt-20);N.el.style.transform=`translate(-50%,-100%) translate(${At}px,${gt}px)`}const k=new U(0,1.1,13.8).project(o);et.style.transform=`translate(-50%,0) translate(${(k.x*.5+.5)*j}px,${(-k.y*.5+.5)*yt}px)`,s.render(r,o)}Xt(),i.querySelector(".world-loading").remove();const Ht=new Fm;let $t;return n.addEventListener("pointerdown",x=>$t={x:x.clientX,y:x.clientY}),n.addEventListener("pointerup",x=>{if(!$t||Math.hypot(x.clientX-$t.x,x.clientY-$t.y)>6)return;const D=n.getBoundingClientRect();Ht.setFromCamera(new at((x.clientX-D.left)/D.width*2-1,-(x.clientY-D.top)/D.height*2+1),o);const C=Ht.intersectObjects(S)[0];C&&C.object.userData.id!=="home"&&t(C.object.userData.id)}),{dispose(){cancelAnimationFrame(zt),St.disconnect(),l.dispose(),r.traverse(x=>{var D;(D=x.geometry)==null||D.dispose()});for(const x of u.values())x.dispose();s.dispose()},zoom(x){o.zoom=Es.clamp(o.zoom*x,.68,4.5),o.updateProjectionMatrix()},reset(){l.reset(),o.zoom=a,o.updateProjectionMatrix()},focusIsland(){},getResidentActivities(){return ft.descriptions()},watchResidents(){const x=ft.actors[0],D=ft.mode==="wander"?x:{x:Me.x,z:Me.z+1.5};l.target.set(D.x,.8,D.z),o.zoom=2.8,o.updateProjectionMatrix()},tour(){o.zoom=Math.max(a,1.2),o.updateProjectionMatrix()},greet(x){Ft=x,Et=Wt.getElapsedTime()+3}}}export{e_ as createWorld};
