"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import addAcct from "../../public/image-file-upload.svg";
import { set } from "zod";

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

const submit = async (
  firstName: string,
  lastName: string,
  address: string,
  phoneNumber: string,
  email: string
) => {
  try {
    const response = await fetch(
      "https://dashboard-backend-rml6.onrender.com/api/accounts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          address,
          email,
          phoneNumber,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create account holder");
    }

    const data = await response.json();
    alert("Account holder created successfully");
    return data;
  } catch (error) {
    console.error("Error creating account holder:", error);
    throw error;
  }
};

export default function AddAccountModal({
  isOpen,
  onClose,
  onSubmit,
}: AddAccountModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState<File | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!firstName || !lastName || !occupation || !phoneNumber || !email) {
      alert("Please fill in all fields");
      return;
    }
    await submit(firstName, lastName, address, phoneNumber, email).then(() => {
      setLoading(false);
    });
    // Reset form
    setImage(null);
    setFirstName("");
    setLastName("");
    setOccupation("");
    setPhoneNumber("");
    setEmail("");
    setAddress("");
    onClose();

    // Remove image handling for now since we don't have image upload set up
    // We'll implement proper image upload later
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full">
        <div className="w-screen max-w-md">
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-semibold text-gray-900">
                  Add an account holder
                </h2>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500"
                  onClick={onClose}
                >
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="mt-1 flex items-center justify-center">
                    <div className="relative group cursor-pointer w-32 h-32">
                      <div className="border-2 border-dashed border-green-300 rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                        {image ? (
                          <img
                            src={URL.createObjectURL(image)}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div>
                            <Image
                              src={addAcct}
                              alt="Upload"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                      <input
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={(e) =>
                          e.target.files && setImage(e.target.files[0])
                        }
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    value={firstName}
                    onChange={(e) =>
                      // setFormData({ ...formData, firstName: e.target.value })
                      setFirstName(e.target.value)
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    value={lastName}
                    onChange={(e) =>
                      // setFormData({ ...formData, lastName: e.target.value })
                      setLastName(e.target.value)
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    value={email}
                    onChange={(e) =>
                      // setFormData({ ...formData, Email: e.target.value })
                      setEmail(e.target.value)
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    value={phoneNumber}
                    onChange={(e) =>
                      // setFormData({ ...formData, lastName: e.target.value })
                      setPhoneNumber(e.target.value)
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="Address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="Address"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    value={address}
                    onChange={(e) =>
                      // setFormData({ ...formData, lastName: e.target.value })
                      setAddress(e.target.value)
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="occupation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Occupation
                  </label>
                  <select
                    id="occupation"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    value={occupation}
                    onChange={(e) =>
                      // setFormData({ ...formData, occupation: e.target.value })
                      setOccupation(e.target.value)
                    }
                  >
                    <option value="">Select occupation</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    {loading ? "saving..." : "Save"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
