import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'
import { orders } from './get-orders-mock'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse | null
>('/orders/:orderId', ({ params }) => {
  const orderIndex = orders.findIndex(
    (order) => order.orderId === params.orderId,
  )

  if (orderIndex === -1) {
    return HttpResponse.json(null, { status: 400 })
  }

  const order = orders[orderIndex]

  return HttpResponse.json({
    id: order.orderId,
    customer: {
      name: order.customerName,
      email: 'johndoe@example.com',
      phone: '83461734627',
    },
    status: order.status,
    createdAt: order.createdAt,
    orderItems: [
      {
        id: 'order-item-1',
        product: {
          name: 'Pizza 01',
        },
        priceInCents: order.total / 2,
        quantity: 1,
      },
      {
        id: 'order-item-2',
        product: {
          name: 'Pizza 02',
        },
        priceInCents: order.total / 4,
        quantity: 2,
      },
    ],
    totalInCents: order.total,
  })
})
