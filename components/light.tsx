type LightProps = {
  height: number;
  width: number;
  x?: number;
  r: number;
  g: number;
  b: number;
};

export default function Light({ height, width, r, g, b, x = 50 }: LightProps) {
  return (
    <div
      className={`absolute`}
      style={{
        zIndex: -1,
        transform: "translate(-50%,-50%)",
        left: `${x}%`,
        height: `${height}rem`,
        width: `${width}rem`,
        background: `radial-gradient(50% 50%, rgba(${r}, ${g}, ${b}, 0.5) 0%, rgba(255, 255, 255, 0) 100%)`,
      }}
    ></div>
  );
}
