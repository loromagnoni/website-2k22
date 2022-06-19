type LightProps = {
  height: number;
  width: number;
  xTraslation?: string;
  r: number;
  g: number;
  b: number;
};

export default function Light({
  height,
  width,
  r,
  g,
  b,
  xTraslation = "0",
}: LightProps) {
  return (
    <div
      className={`absolute`}
      style={{
        transform: `translate(${xTraslation},-50%)`,
        height: `${height}rem`,
        width: `${width}rem`,
        background: `radial-gradient(50% 50% at 50% 50%, rgba(${r}, ${g}, ${b}, 0.2) 0%, rgba(255, 255, 255, 0) 100%)`,
      }}
    ></div>
  );
}
