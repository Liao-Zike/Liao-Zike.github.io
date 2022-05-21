import{neonCursor} from "./coollightchd.js"
neonCursor({
  el: document.getElementById('app'),
  shaderPoints: 20,//20
  curvePoints: 100,//長度
  curveLerp: 0.6,//速度
  radius1: 5,//粗
  radius2: 5,//周圍顏色
  velocityTreshold: 2,
  sleepRadiusX: 105,
  sleepRadiusY: 105,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025
});