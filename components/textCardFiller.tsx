type TextCardProps = { text: string };

export default function TextCardFiller({ text }: TextCardProps) {
  return <div className="font-medium text-lg">{text}</div>;
}
