"use client";
import React from "react";
import UpdatePasswordModal from "./UpdatePasswordModal";
import { useState } from "react";
export default function AccountSetting({ user }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">
          Account Settings
        </h2>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Change password
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setIsModalOpen(true)}
              >
                Update Password
              </button>
              <UpdatePasswordModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                setIsModalOpen={setIsModalOpen}
                id={user?._id}
              />
            </dd>
          </div>
          {/* <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Notification preferences
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                  checked
                />
                <span className="ml-2">Receive email notifications</span>
              </label>
            </dd>
          </div> */}
          {/* <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Delete account
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <button
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cursor-not-allowed"
                disabled
              >
                Delete Account
              </button>
            </dd>
          </div> */}
        </dl>
      </div>
    </div>
  );
}
