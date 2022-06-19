type CardProps = { text: string };

export default function Card({ text }: CardProps) {
  return (
    <div className="font-medium bg-black text-white rounded-3xl py-8 px-6 m-4">
      {text}
    </div>
  );
}
