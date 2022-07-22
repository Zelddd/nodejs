import { Router } from "express";
import { Order } from "models/order";
import { OrderLine } from "models/order_line";
import { Product } from "models/product";
import { Table } from "models/table";

const router = Router()

router.get('/', async (req, res) => res.render('dashboard/kitchen/orders', {title: 'Orders'}))

router.get('/view', async (req, res) => {
  res.render('dashboard/kitchen/orders_view', {
    layout: false,
    tables: await Table.findAll({
      include: {
        model: Order,
        include: [{
          model: OrderLine,
          include: [{
            model: Product
          }]
        }]
      }
    })
  })
})

router.put('/status/:id', async (req, res) => {
  await OrderLine.update({
    status: req.body.status
  }, {
    where: {
      id: req.params.id
    }
  })
  res.sendStatus(200)
})

export default router