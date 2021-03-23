// This shader is heavily copied from/based on:
// https://github.com/jacomyal/sigma.js/blob/v2/src/renderers/webgl/shaders/node.fast.frag.glsl

precision mediump float;

varying vec4 v_color;
varying float v_border;

const float radius = 0.5;

void main(void) {
  vec4 color0 = vec4(0.0, 0.0, 0.0, 0.0);
  vec2 m = gl_PointCoord - vec2(0.5, 0.5);
  float dist = radius - length(m);

  float t = 0.0;
  if (dist > v_border)
    t = 1.0;
  else if (dist > 0.0)
    t = dist / v_border;

  gl_FragColor = mix(color0, v_color, t);
}
