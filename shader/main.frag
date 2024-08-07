precision mediump float;

varying vec2 vTexCoord;

uniform float u_time;
uniform float u_vol;
uniform sampler2D u_tex;
uniform bool u_isBEffectEnabled;
uniform bool u_isNEffectEnabled;
uniform bool u_isMEffectEnabled;

float PI = 3.14159265358979;

float random(vec2 st){
    return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
}

vec2 mirror(vec2 uv){
    return abs(uv-.5);
}

vec2 mosaic(vec2 uv, float n){
    return floor(uv*n)/n;
}

vec2 grid(vec2 uv,float n){
    return mod(uv*n,1.);
}

vec2 zoom(vec2 uv,float factor){
    return .5+(uv-.5)*factor;
}

void main(void) {
    vec2 uv = vTexCoord;

    if(u_isBEffectEnabled){
        uv = mirror(uv);
    }
    if(u_isNEffectEnabled){
        uv = mosaic(uv, 10.0);
    }
    if(u_isMEffectEnabled){
        uv = mosaic(uv, 100.0);
    }

    vec4 col = texture2D(u_tex, uv);

    gl_FragColor = col;
}