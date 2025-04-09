"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PersonalInfo({ user }) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: user?.id,
    name: user?.name || "",
    email: user?.email || "",
    phone_number: user?.mobile || "",
    address: user?.address || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    // Here, you would call an API to update the user's data
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ROUT_URL}/users/${user.id}`,
      {
        method: "put",
        body: JSON.stringify(formData),
      }
    );
    if (res.ok) {
      router.refresh();

      toast.success("Data updated successfully!");
    }
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
      <div className="px-4 py-5 sm:px-6 flex justify-between">
        <h2 className="text-lg leading-6 font-medium text-gray-900">
          Personal Information
        </h2>
        <button
          onClick={signOut}
          className="px-4 inline-flex items-center gap-2 bg-red-300 py-1 rounded-md text-red-900 font-medium"
        >
          <LogOut /> Log Out
        </button>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                disabled={!isEditing}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                disabled={!isEditing}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone number</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                disabled={!isEditing}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </dd>
          </div>
          {/* <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </dd>
          </div> */}
        </dl>
        {/* <div className="flex justify-end mt-4 px-10 py-5">
          {isEditing ? (
            <div className="space-x-2">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-rose-500 text-white rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Save Changes
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-yellow-300 text-gray-900 rounded-md"
            >
              Edit
            </button>
          )}
        </div> */}
      </div>
    </div>
  );
}
