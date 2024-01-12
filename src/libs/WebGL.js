const WebGL = {};

WebGL.init = (canvas) => {
  let gl = canvas.getContext("webgl");
  if (!gl) {
    throw new Error("Not Support WebGL");
  }

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  gl.viewport(0, 0, canvas.width, canvas.height);

  return gl;
};

export default WebGL;
