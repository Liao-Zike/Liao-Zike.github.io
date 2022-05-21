import{neonCursor} from "./coollightchd.js"
  var win = document.getElementById('app');//抓取寬度
  var wid = win.offsetWidth;  //寬度
  var big=105;
if(wid>=750)
  big=105;
else if(wid<750&&wid>=360)
  big=40;

neonCursor({
  el: document.getElementById('app'),
  shaderPoints: 20,//20
  curvePoints: 100,//長度
  curveLerp: 0.6,//速度
  radius1: 5,//粗
  radius2: 5,//周圍顏色
  velocityTreshold: 2,
  sleepRadiusX: big,
  sleepRadiusY: big,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025
});
