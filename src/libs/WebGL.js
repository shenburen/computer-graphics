const WebGL = {};

WebGL.init = (canvas) => {
  let gl = canvas.getContext("webgl");
  if (!gl) {
    throw new Error("Not Support WebGL");
  }

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  gl.viewport();
};

export default WebGL;
