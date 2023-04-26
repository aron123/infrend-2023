# Webshop projekt kódrészletek

<details>
<summary>Termék űrlap</summary>

```html
<div class="row justify-content-md-center">
    <div class="col-md-6">
        <h4>Termék adatok</h4>
        <hr>
    </div>
</div>

<div class="row justify-content-md-center">
    <div class="col-md-6">
        <form>
            <div class="mb-3">
                <label for="title" class="form-label">Megnevezés</label>
                <input type="text" class="form-control" id="title" name="title">
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Ár</label>
                <div class="input-group">
                    <input type="number" step="0.5" class="form-control text-end pe-1" id="price" name="price">
                    <span class="input-group-text">$</span>
                </div>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Leírás</label>
                <textarea class="form-control" name="description" id="description" rows="2"></textarea>
            </div>
            <div class="mb-3">
                <label for="imgUrl" class="form-label">Kép link</label>
                <input type="text" class="form-control" id="imgUrl" name="imgUrl">
            </div>
            <div class="mb-3">
                <label for="brand" class="form-label">Márka</label>
                <input type="text" class="form-control" id="brand" name="brand">
            </div>
            <div class="text-end">
                <button class="btn btn-outline-primary">Mentés</button>
            </div>
        </form>
    </div>
</div>
```
</details>

<details>
<summary>Általános kontroller</summary>
    
```ts
import { Repository } from "typeorm";

export abstract class Controller {
    repository: Repository<any>;

    getAll = async (req, res) => {
        try {
            const entities = await this.repository.find();
            res.json(entities);
        } catch (err) {
            this.handleError(res, err);
        }
    };

    getOne = async (req, res) => {
        try {
            const entity = await this.repository.findOneBy({ id: req.params.id });
            if (!entity) {
                return this.handleError(res, null, 404, 'No entity found with this id.');
            }

            res.json(entity);
        } catch (err) {
            this.handleError(res, err);
        }
    };

    create = async (req, res) => {
        try {
            const entity = this.repository.create(req.body as object);
            entity.id = null;
            
            const result = await this.repository.insert(entity);
            const inserted = await this.repository.findOneBy({ id: result.raw.insertId });
 
            res.json(inserted);
        } catch (err) {
            this.handleError(res, err);
        }
    };

    update = async (req, res) => {
        try {
            let entity = await this.repository.findOneBy({ id: req.body.id });
            if (!entity || !req.body.id) {
                return this.handleError(res, null, 404, 'No entity found with this id.');
            }

            entity = this.repository.create(req.body as object);
            const result = await this.repository.save(entity);
 
            res.json(result);
        } catch (err) {
            this.handleError(res, err);
        }
    };

    delete = async (req, res) => {
        try {
            const entity = await this.repository.findOneBy({ id: req.params.id });
            if (!entity) {
                return this.handleError(res, null, 404, 'No entity found with this id.');
            }

            await this.repository.delete(entity.id);
            res.status(200).send();
        } catch (err) {
            this.handleError(res, err);
        }
    }

    handleError(res, err = null, status = 500, message = 'Database error occurred.') {
        if (err) {
            console.error(err);
        }

        res.status(status).json({ error: message });
    }
}
```
</details>
    
<details>
<summary>Kontrollerek route-olása</summary>
    
 ```ts
import express from 'express';
import { ProductController } from './controller/product.controller';

export function getRouter() {
    const router = express.Router();
    
    const productController = new ProductController();

    router.get('/products', productController.getAll);
    router.get('/products/:id', productController.getOne);
    router.post('/products', productController.create);
    router.put('/products', productController.update);
    router.delete('/products/:id', productController.delete);

    return router;
}
 ```
</details>
