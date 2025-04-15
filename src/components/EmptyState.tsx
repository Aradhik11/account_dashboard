import user from "../../public/User.svg";
import Image from "next/image";
interface EmptyStateProps {
  onAddClick: () => void;
}

export default function EmptyState({ onAddClick }: EmptyStateProps) {
  return (
    <div className="text-center py-16">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
        <Image src={user} alt="User Icon" width={40} height={40} />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-gray-900">
        No account holder added
      </h2>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        You're yet to add an account holder. Adding an account would give you
        access to adding various valuable assets for each holder
      </p>
      <button
        onClick={onAddClick}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
      >
        Add an account holder
      </button>
    </div>
  );
}
