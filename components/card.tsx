type CardProps = { children: JSX.Element; backgroundUrl?: string };

export default function Card({ children, backgroundUrl }: CardProps) {
  return (
    <div
      className="sm:h-96 bg-black text-white rounded-3xl py-8 px-6 mx-4 my-8 bg-cover max-w-xl"
      style={{
        filter: "saturate(0.6) contrast(1.2)",
        ...(backgroundUrl && { backgroundImage: `url(${backgroundUrl})` }),
      }}
    >
      {children}
    </div>
  );
}
