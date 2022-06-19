type TextCardProps = { paragraphs: string[] };

export default function TextCardFiller({ paragraphs }: TextCardProps) {
  return (
    <div className="font-medium text-lg pr-10 mb-52">
      {paragraphs.map((p) => (
        <p className="mb-2" key={p}>
          {p}
        </p>
      ))}
    </div>
  );
}
