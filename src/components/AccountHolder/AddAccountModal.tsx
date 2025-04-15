// src/components/AccountHolder/AddAccountModal.tsx
import { FC, useState } from "react";
import addAcct from "../../../public/image-file-upload.svg";
import Image from "next/image";

interface AddAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: AccountHolderData) => void;
}

interface AccountHolderData {
  firstName: string;
  lastName: string;
  occupation: string;
  imageUrl?: string;
}

const AddAccountModal: FC<AddAccountModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<AccountHolderData>({
    firstName: "",
    lastName: "",
    occupation: "",
  });
  const [image, setImage] = useState<File | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end">
      <div className="bg-white w-[480px] h-full p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Add an account holder</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <div className="border-2 border-dashed border-green-200 rounded-full w-32 h-32 mx-auto flex items-center justify-center cursor-pointer hover:border-green-300">
              {image ? (
                <Image
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <p className="text-sm text-gray-500">Choose image</p>
                  <p className="text-xs text-gray-400">or drag and drop</p>
                </div>
              )}
              <input
                type="file"
                className="hidden"
                onChange={(e) => e.target.files && setImage(e.target.files[0])}
                accept="image/*"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Occupation
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                value={formData.occupation}
                onChange={(e) =>
                  setFormData({ ...formData, occupation: e.target.value })
                }
              >
                <option value="">Select occupation</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAccountModal;
