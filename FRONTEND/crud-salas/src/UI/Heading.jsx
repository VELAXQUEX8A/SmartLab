export default function Heading({ title, subtitle }) {
  return (
    <div className="text-center mb-4">
      <h1 className="text-3xl font-bold text-green-400">{title}</h1>
      {subtitle && <p className="text-gray-500">{subtitle}</p>}
    </div>
  );
}
