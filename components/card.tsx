type CardProps = { children: JSX.Element; backgroundUrl?: string };

export default function Card({ children, backgroundUrl }: CardProps) {
  return (
    <div
      className=" bg-black text-white rounded-3xl py-8 px-6 mx-4 my-8 bg-cover"
      style={{
        filter: "saturate(0.6) contrast(1.2)",
        ...(backgroundUrl && { backgroundImage: `url(${backgroundUrl})` }),
      }}
    >
      {children}
    </div>
  );
}
