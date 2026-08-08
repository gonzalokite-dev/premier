export default function Divider({ className = "" }: { className?: string }) {
  return <hr className={`border-t border-gray-300 ${className}`} />;
}
