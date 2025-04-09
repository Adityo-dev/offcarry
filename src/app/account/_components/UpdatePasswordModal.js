import { useState } from "react";

const UpdatePasswordModal = ({ isOpen, onClose, id }) => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if the new password and confirm password match
    if (formData.newPassword === formData.confirmPassword) {
      try {
        // Add password update logic here
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_ROUT_URL}/users/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "X-Website-Origin": "true",
            },
            body: JSON.stringify({
              customerId: id,
              currentPassword: formData.currentPassword,
              newPassword: formData.newPassword,
            }),
          }
        );

        if (response.ok) {
          // Notify the user of success
          alert("Password updated successfully!");
          // Optionally reset the form
          setFormData({
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
          });
          onClose();
        } else {
          // Handle errors from the server
          const errorData = await response.json();
          alert(errorData.message || "Failed to update password");
        }
      } catch (error) {
        console.error("Error updating password:", error);
        alert("Something went wrong. Please try again later.");
      }
    } else {
      // Handle mismatched passwords
      alert("Passwords do not match. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Form Header */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Update Password
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.currentPassword}
              onChange={(e) =>
                setFormData({ ...formData, currentPassword: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.newPassword}
              onChange={(e) =>
                setFormData({ ...formData, newPassword: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePasswordModal;
