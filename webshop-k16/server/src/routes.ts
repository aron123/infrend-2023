import express from 'express';
import { CategoryController } from './controller/category.controller';
import { ProductController } from './controller/product.controller';
import { UserController } from './controller/user.controller';
import { checkUser } from './protect-routes';

export function getRoutes() {
    const router = express.Router();

    const productController = new ProductController();

    router.get('/products', productController.getAll);
    router.get('/products/:id', productController.getOne);
    router.post('/products', checkUser, productController.create);
    router.put('/products', checkUser, productController.update);
    router.delete('/products/:id', checkUser, productController.delete);

    const userController = new UserController();

    router.get('/users', userController.getAll);
    router.get('/users/:id', userController.getOne);
    router.post('/users', userController.create);
    router.put('/users', checkUser, userController.update);
    router.delete('/users/:id', checkUser, userController.delete);

    router.post('/users/login', userController.login);

    const categoryController = new CategoryController();

    router.get('/categories', categoryController.getAll);
    router.get('/categories/:id', categoryController.getOne);
    router.post('/categories', checkUser, categoryController.create);
    router.put('/categories', checkUser, categoryController.update);
    router.delete('/categories/:id', checkUser, categoryController.delete);

    return router;
}
