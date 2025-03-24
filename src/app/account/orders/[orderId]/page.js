import React from "react";

import Print from "./Print";
import { VoucherTemplateOrder } from "../../_components/VoucherTemplateOrder";

export default async function OrderView({ params }) {
  const orderId = params.orderId;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/orders/${orderId}`,
    {
      headers: {
        "X-Website-Origin": "true",
      },
    }
  );
  const data = await res.json();
  if (!data) {
    return <div>Order not found</div>;
  }

  return (
    <div className="">
      <div className="flex gap-2 items-center justify-center ">
        <Print orderData={data} />
      </div>
      <div
        className="flex flex-col items-center justify-center space-y-4"
        dangerouslySetInnerHTML={{
          __html: VoucherTemplateOrder(data),
        }}
      />
    </div>
  );
}
