type CardProps = { children: JSX.Element; backgroundUrl?: string };

export default function Card({ children, backgroundUrl }: CardProps) {
  return (
    <div
      className="sm:h-96 bg-black text-white rounded-3xl py-8 px-6 bg-cover"
      style={{
        ...(backgroundUrl && {
          filter: "saturate(0.5) contrast(1.2)",
          backgroundImage: `url(${backgroundUrl})`,
        }),
      }}
    >
      {children}
    </div>
  );
}
