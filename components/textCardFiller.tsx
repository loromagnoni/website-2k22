type TextCardProps = { paragraphs: string[]; highlight?: string[] };

export default function TextCardFiller({
  paragraphs,
  highlight = [],
}: TextCardProps) {
  return (
    <div className="font-medium text-lg pr-10 ">
      {paragraphs.map((p) => (
        <p className="mb-2" key={p}>
          {p
            .split(" ")
            .map((w) =>
              highlight.includes(w) ? (
                <span style={{ color: "#ed34b9" }}> {w} </span>
              ) : (
                ` ${w} `
              )
            )}
        </p>
      ))}
    </div>
  );
}
