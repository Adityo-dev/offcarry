import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";

export default function OrderHistory({ user }) {
  // console.log(user.orders);
  if (user?.orders?.length == 0) {
    return (
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8 h-20 p-4 inline-flex items-center w-full gap-4">
        <h1>
          <strong>You Don&#39;t Order Anything Yet </strong>
        </h1>
        <Link
          className="text-green-600 font-bold inline-flex items-center gap-2  ring-1 ring-green-400 p-2 hover:bg-green-400/10 rounded-full"
          href={"/shop"}
        >
          <ShoppingBagIcon />
          Go To Shop
        </Link>
      </div>
    );
  }
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">
          Order History
        </h2>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {user?.Order?.map((order) => (
            <li key={order.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <Link
                  className="text-sm font-medium text-indigo-600 truncate"
                  href={`/account/orders/${order.id}`}
                >
                  Order #{order.orderNumber}
                </Link>
                <div className="ml-2 flex-shrink-0 flex">
                  <p className="px-2 inline-flex capitalize text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {order.status}
                  </p>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex gap-4">
                  <p className="flex items-center text-sm text-gray-500">
                    Date: {order.createdAt.split("T")[0]}
                  </p>
                  <p className="flex items-center text-sm text-gray-500">
                    Payment Method: {order.paymentMethod}
                  </p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 font-bold">
                  Total: {order.total_amount}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
