// utils/VoucherTemplate.js
export function VoucherTemplateOrder(order = {}) {
    const css = `
      <style>
        .voucher-container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          // padding: 30px;
          width: 100%;
          // max-width: 1200px;
          margin: 0 auto;
          border-radius: 12px;
          // box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          background: linear-gradient(to bottom, #ffffff, #f9f9f9);
        }
        .logo-container {
          display: flex;
          justify-content: center;
          // margin-bottom: 10px;
        }
        .logo {
          width: 420px;
          height: 100px;
          object-fit: contain;
        }
        .voucher-header {
          text-align: center;
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 2px solid #f0f0f0;
        }
        
        .voucher-title {
          color: #2c3e50;
          font-size: 18px;
          margin: 0;
          font-weight: 600;
        }
        
        .voucher-subtitle {
          color: #7f8c8d;
          margin-top: 5px;
          font-size: 14px;
        }
        
        .details-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-bottom: 25px;
        }
        
        .detail-column {
          flex: 1;
          min-width: 250px;
        }
        
        .detail-column:first-child {
          margin-right: 20px;
        }
        
        .detail-box {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 15px;
        }
        
        .detail-title {
          color: #2c3e50;
          font-size: 16px;
          margin-top: 0;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .detail-row {
          margin: 8px 0;
          color: #444;
          display: flex;
          justify-content: space-between;
        }
        
        .detail-label {
          font-weight: 600;
          color: #7f8c8d;
        }
        
        .detail-value {
          font-weight: 500;
        }
        
        .status-badge {
          font-weight: 500;
          padding: 3px 10px;
          border-radius: 12px;
          font-size: 14px;
        }
        
        .status-completed {
          background-color: #e1f5fe;
          color: #0288d1;
        }
        
        .status-processing {
          background-color: #fff8e1;
          color: #ffa000;
        }
        
        .status-shipped {
          background-color: #e8f5e9;
          color: #43a047;
        }
        
        .status-other {
          background-color: #ffebee;
          color: #e53935;
        }
        
        .shipping-label {
          font-weight: 600;
          color: #7f8c8d;
          display: block;
          margin-bottom: 4px;
        }
        
        .shipping-value {
          font-weight: 500;
          line-height: 1.5;
        }
        
        .remarks-box {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 25px;
        }
        
        .remarks-text {
          margin: 0;
          color: #444;
          font-style: italic;
        }
        
        .items-container {
          margin-bottom: 25px;
        }
        
        .items-title {
          color: #2c3e50;
          font-size: 18px;
          margin-top: 0;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-bottom: 1px solid #f0f0f0;
          padding-bottom: 10px;
        }
        
        .items-table-container {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        
        .items-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .table-header {
          background-color: #2c3e50;
          color: white;
        }
        
        .table-header th {
          padding: 12px 15px;
          text-align: left;
          font-weight: 500;
        }
        
        .table-header th:nth-child(3) {
          text-align: center;
        }
        
        .table-header th:nth-child(4) {
          text-align: right;
        }
        
        .table-row-even {
          background-color: #ffffff;
        }
        
        .table-row-odd {
          background-color: #f9f9f9;
        }
        
        .table-cell {
          padding: 12px 15px;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .product-container {
          display: flex;
          align-items: center;
        }
        
        .product-image {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 6px;
          margin-right: 15px;
          border: 1px solid #eee;
        }
        
        .product-name {
          font-weight: 500;
          color: #2c3e50;
        }
        
        .variant-tag {
          background-color: #f0f0f0;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 14px;
          margin-right: 5px;
          text-transform: uppercase;
        }
        
        .quantity-cell {
          text-align: center;
          font-weight: 500;
        }
        
        .price-cell {
          text-align: right;
          font-weight: 700;
          color: #2c3e50;
        }
        
        .summary-container {
          display: flex;
          justify-content: flex-end;
        }
        
        .summary-box {
          width: 500px;
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
        }
        
        .summary-title {
          color: #2c3e50;
          font-size: 16px;
          margin-top: 0;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-bottom: 1px solid #f0f0f0;
          padding-bottom: 10px;
        }
        
        .summary-row {
          margin: 10px 0;
          display: flex;
          justify-content: space-between;
        }
        
        .summary-label {
          color: #7f8c8d;
        }
        
        .summary-value {
          font-weight: 500;
        }
        
        .discount-value {
          font-weight: 500;
          color: #e53935;
        }
        
        .total-row {
          margin: 15px 0 5px;
          padding-top: 10px;
          border-top: 2px dashed #e0e0e0;
          display: flex;
          justify-content: space-between;
        }
        
        .total-label {
          font-weight: 600;
          font-size: 18px;
          color: #2c3e50;
        }
        
        .total-value {
          font-weight: 700;
          font-size: 18px;
          color: #2c3e50;
        }
        
        .voucher-footer {
          margin-top: 30px;
          text-align: center;
          padding-top: 20px;
          border-top: 2px solid #f0f0f0;
        }
        
        .footer-text {
          color: #7f8c8d;
          font-size: 14px;
          margin: 0;
        }
        
        .footer-contact {
          color: #7f8c8d;
          font-size: 14px;
          margin: 5px 0 0;
        }
        
        @media (max-width: 768px) {
          .detail-column:first-child {
            margin-right: 0;
            margin-bottom: 15px;
          }
          
          .summary-box {
            width: 100%;
          }
        }
      </style>
    `;
  
    const getStatusClass = (status) => {
      switch (status) {
        case 'Completed': return 'status-completed';
        case 'Processing': return 'status-processing';
        case 'Shipped': return 'status-shipped';
        default: return 'status-other';
      }
    };
  
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    };
  
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Voucher</title>
        ${css}
      </head>
      <body>
        <div class="voucher-container">
          <div class="voucher-header">
             <div class="logo-container">
             <img  src="https://res.cloudinary.com/dubdyoo1r/image/upload/v1741775590/uploads/product/offcarry.png" alt="Logo" class="logo">
             </div>
            <h3 class="voucher-title">ORDER VOUCHER</h3>
            <p class="voucher-subtitle">Thank you for your purchase</p>
          </div>
  
          <div class="details-container">
            <div class="detail-column">
              <div class="detail-box">
                <h3 class="detail-title">Order Details</h3>
                <p class="detail-row">
                  <span class="detail-label">Order Number:</span>
                  <span class="detail-value">${order.orderNumber}</span>
                </p>
                <p class="detail-row">
                  <span class="detail-label">Date:</span>
                  <span class="detail-value">${formatDate(order.createdAt)}</span>
                </p>
                <p class="detail-row">
                  <span class="detail-label">Status:</span>
                  <span class="detail-value status-badge ${getStatusClass(order.status)}">${order.status}</span>
                </p>
              </div>
            </div>
            
            <div class="detail-column">
              <div class="detail-box">
                <h3 class="detail-title">Shipping Information</h3>
                <p class="detail-row">
                  <span class="shipping-label">Address:</span>
                  <span class="shipping-value">${order.shippingAddress}</span>
                </p>
                <p class="detail-row">
                  <span class="shipping-label">Payment Method:</span>
                  <span class="shipping-value">${order.paymentMethod}</span>
                </p>
              </div>
            </div>
          </div>
  
          ${order.remarks ? `
          <div class="remarks-box">
            <h3 class="detail-title">Remarks</h3>
            <p class="remarks-text">${order.remarks}</p>
          </div>
          ` : ''}
  
          <div class="items-container">
            <h3 class="items-title">Order Items</h3>
            <div class="items-table-container">
              <table class="items-table">
                <thead>
                  <tr class="table-header">
                    <th>Product</th>
                    <th>Variation</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  ${order.OrderItem.map((item, index) => {
                    const variationSize= item?.variation?.variationSize.find((size) => size.id === item?.sizeId)
                    return `
                      <tr class="${index % 2 === 0 ? 'table-row-even' : 'table-row-odd'}">
                        <td class="table-cell">
                          <div class="product-container">
                            <img class="product-image" src="${item.product.thumbnail}" alt="${item.product.name}" />
                            <span class="product-name">${item.product.name}</span>
                          </div>
                        </td>
                        <td class="table-cell">
                          <span class="variant-tag">${item.variation.color}</span>
                          <span class="variant-tag">${variationSize.name}</span>
                        </td>
                        <td class="table-cell quantity-cell quantity-cell">
                          <span class="variant-tag">৳${item.price}</span>
                        </td>
                        <td class="table-cell quantity-cell">
                          ${item.quantity}
                        </td>
                        <td class="table-cell price-cell">
                          ৳${item.price * item.quantity}
                        </td>
                      </tr>
                    `;
                  }).join("")}
                </tbody>
              </table>
            </div>
          </div>
  
          <div class="summary-container">
            <div class="summary-box">
              <h3 class="summary-title">Order Summary</h3>
              
              <div class="summary-row">
                <span class="summary-label">Subtotal:</span>
                <span class="summary-value">৳${order.subtotal}</span>
              </div>
              
              <div class="summary-row">
                <span class="summary-label">Tax:</span>
                <span class="summary-value">৳${order.tax}</span>
              </div>
              
              <div class="summary-row">
                <span class="summary-label">Discount:</span>
                <span class="discount-value">-৳${order.discount}</span>
              </div>
              
              <div class="summary-row">
                <span class="summary-label">Shipping:</span>
                <span class="summary-value">৳${order.shippingCost}</span>
              </div>
              
              <div class="total-row">
                <span class="total-label">Total:</span>
                <span class="total-value">৳${order.total}</span>
              </div>
            </div>
          </div>
  
          <div class="voucher-footer">
            <p class="footer-text">Thank you for shopping with us!</p>
            <p class="footer-contact">If you have any questions about your order, please contact our customer service.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }