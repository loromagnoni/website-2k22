type ListCardFillerProps = {
  title: string;
  items: { title: string; description: string; url: string }[];
};

export default function ListCardFiller({ title, items }: ListCardFillerProps) {
  return (
    <div>
      <div className="text-sm  text-zinc-300 tracking-wide mb-4">{title}</div>
      {items.map((i) => (
        <div key={i.title}>
          <div className="font-medium">{i.title}</div>
          <div className="text-sm" style={{ color: "#ed34b9" }}>
            {i.description}
          </div>
        </div>
      ))}
    </div>
  );
}
