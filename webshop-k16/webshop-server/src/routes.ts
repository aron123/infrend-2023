import express from 'express';
import { ProductController } from './controller/product.controller';

export function getRoutes() {
    const router = express.Router();

    const productController = new ProductController();

    router.get('/products', productController.getAll);
    router.get('/products/:id', productController.getOne);
    router.post('/products', productController.create);
    router.put('/products', productController.update);
    router.delete('/products/:id', productController.delete);

    return router;
}
