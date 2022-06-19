type CardProps = { children: JSX.Element };

export default function Card({ children }: CardProps) {
  return (
    <div className=" bg-black text-white rounded-3xl py-8 pl-6 pr-16 mx-4 my-8">
      {children}
    </div>
  );
}
