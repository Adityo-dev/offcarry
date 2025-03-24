"use client";
import { PrinterIcon } from "lucide-react";
import React from "react";
import { VoucherTemplateOrder } from "../../_components/VoucherTemplateOrder";

export default function Print({ orderData }) {
  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(VoucherTemplateOrder(orderData));
      printWindow.document.close();
      printWindow.print();
    }
  };
  return (
    <button
      className="flex gap-2 items-center justify-center px-4 py-2 text-sm font-medium text-balck border border-gray-500  rounded-md hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      onClick={handlePrint}
    >
      <PrinterIcon /> Print
    </button>
  );
}
