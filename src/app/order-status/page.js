// This is a Server Component, so we don't need "use client"
import { Check, X, ArrowLeft, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function OrderStatusPage({ searchParams }) {
  // Get order details from URL parameters
  const orderId = searchParams.orderId || "#ORD-0000"
  const orderStatus = searchParams.status || "completed"
  const orderDate = searchParams.date || "April 18, 2024"
  const orderTotal = searchParams.total || "$0.00"

  // Uncomment this when your API is ready
  const orderRes = await fetch(`${process.env.NEXT_PUBLIC_API_ROUT_URL}/orders/${orderId}`);
  const order = await orderRes.json();
//   if (!order.id) {
//     return <div className="container max-w-lg mx-auto px-4 py-12 md:py-20 text-center">Order not found</div>;
//   }
  const orderData = {
    orderId: order.orderNumber,
    date: order.createdAt?.split("T")[0],
    total: order.total,
  }

  // Server-side console logs will only appear in your terminal, not browser console
  console.log("Order search params:", order)

  return (
    <div className="container max-w-lg mx-auto px-4 py-12 md:py-20 text-center">
      {/* Status Icon */}
      <div
        className="mx-auto flex items-center justify-center w-24 h-24 rounded-full mb-6 bg-opacity-10 border-2 border-opacity-20"
        style={{
          backgroundColor: orderStatus === "completed" ? "rgba(34, 197, 94, 0.1)" : "rgba(100, 116, 139, 0.1)",
          borderColor: orderStatus === "completed" ? "rgba(34, 197, 94, 0.2)" : "rgba(100, 116, 139, 0.2)",
        }}
      >
        {orderStatus === "completed" ? (
          <Check className="h-12 w-12 text-green-500" />
        ) : (
          <X className="h-12 w-12 text-slate-500" />
        )}
      </div>

      {/* Big Status Message */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        {orderStatus === "completed" ? "Order Complete!" : "Order Cancelled"}
      </h1>

      {/* Order Information */}
      <div className="mb-8 space-y-2">
        <p className="text-xl font-semibold">Order {orderData.orderId}</p>
        <p className="text-gray-500">Placed on {orderData.date}</p>
        {orderStatus === "completed" && <p className="text-lg font-medium mt-2">Total: ৳{orderData.total}</p>}
      </div>

      {/* Simple Message */}
      <p className="text-gray-600 mb-10 max-w-md mx-auto">
        {orderStatus === "completed"
          ? "Thank you for your purchase! We'll send you shipping updates via email."
          : "Your order has been cancelled. If you have any questions, please contact customer support."}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="outline" className="flex items-center gap-2" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Return to Home
          </Link>
        </Button>
        <Button className="flex items-center gap-2" asChild>
          <Link href="/shop">
            <ShoppingBag className="h-4 w-4" />
            {orderStatus === "completed" ? "Continue Shopping" : "Shop Again"}
          </Link>
        </Button>
      </div>
    </div>
  )
}
