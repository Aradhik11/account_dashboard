"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import EmptyState from "@/components/EmptyState";
import AddAccountModal from "@/components/AddAccountModal";
import { useSnackbar } from "@/contexts/SnackbarContext";

interface AccountHolder {
  id: string;
  firstName: string;
  lastName: string;
  occupation: string;
  imageUrl?: string;
}

export default function Dashboard() {
  const { showSnackbar } = useSnackbar();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountHolders, setAccountHolders] = useState<AccountHolder[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAccountHolders();
  }, []);

  const fetchAccountHolders = async () => {
    try {
      const response = await fetch("/api/account-holders");
      if (!response.ok) throw new Error("Failed to fetch account holders");
      const data = await response.json();
      setAccountHolders(data);
    } catch (error) {
      console.error("Error fetching account holders:", error);
    }
  };

  const handleAddAccountHolder = async (data: Omit<AccountHolder, "id">) => {
    try {
      setLoading(true);
      console.log("Attempting to create account holder:", data);

      // First, test the basic API connectivity
      try {
        const testResponse = await fetch("/api/test");
        const testResult = await testResponse.json();
        console.log("Test API response:", testResult);
      } catch (testError) {
        console.error("Test API failed:", testError);
        throw new Error(
          "Cannot connect to server. Please check if the server is running."
        );
      }

      // If test passes, try the actual request
      const response = await fetch("/api/account-holders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error("Server error response:", {
          status: response.status,
          statusText: response.statusText,
          data: errorData,
        });
        throw new Error(
          errorData?.error ||
            `Server error: ${response.status} ${response.statusText}`
        );
      }

      const result = await response.json();
      console.log("Success response:", result);

      setAccountHolders([...accountHolders, result]);
      setIsModalOpen(false);
      showSnackbar("Account holder details created successfully.", "success");
    } catch (error) {
      console.error("Full error details:", error);
      showSnackbar(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1  mt-[3.5em]">
          <div className=" mx-auto">
            <Header />

            {/* Greeting Section */}
            <div className="mt-4 mb-6 bg-[#ffffff] border-t-[1px] border-t-[#DDE6F0] p-2 flex flex-col gap-2">
              <h2 className="text-xl font-bold text-gray-800">Hi Nike</h2>
              <p className="text-sm text-gray-600">
                Good morning, here is all the accounts added to date
              </p>
            </div>

            <div className=" mt-[-24px] p-3">
              <div className="h-[73vh] bg-white px-6">
                <p className="border-b py-3 font-bold">Dashboard</p>
                {accountHolders.length === 0 ? (
                  <EmptyState onAddClick={() => setIsModalOpen(true)} />
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {accountHolders.map((holder) => (
                      <div
                        key={holder.id}
                        className="bg-white rounded-lg shadow p-4"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                            {holder.imageUrl ? (
                              <img
                                src={holder.imageUrl}
                                alt={`${holder.firstName} ${holder.lastName}`}
                                className="w-full h-full rounded-full object-cover"
                              />
                            ) : (
                              <span className="text-xl text-gray-600">
                                {holder.firstName[0]}
                                {holder.lastName[0]}
                              </span>
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              {holder.firstName} {holder.lastName}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {holder.occupation}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      <AddAccountModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddAccountHolder}
      />
    </div>
  );
}
