export default function Button({ children, onClick, type = 'button', className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-green-400 text-white px-4 py-2 rounded-xl hover:bg-green-800 transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
