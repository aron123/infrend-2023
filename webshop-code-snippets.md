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
