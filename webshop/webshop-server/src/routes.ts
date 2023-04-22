import express from 'express';
import { CategoryController } from './controller/category.controller';
import { ProductController } from './controller/product.controller';
import { UserController } from './controller/user.controller';

export function getRouter() {
    const router = express.Router();
    
    const productController = new ProductController();

    router.get('/products', productController.getAll);
    router.get('/products/:id', productController.getOne);
    router.post('/products', productController.create);
    router.put('/products', productController.update);
    router.delete('/products/:id', productController.delete);

    const userController = new UserController();

    router.get('/users', userController.getAll);

    const categoryController = new CategoryController();

    router.get('/categories', categoryController.getAll);

    return router;
}
