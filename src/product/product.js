class Product {
    constructor(id, type, name, version) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.version = version;
        this.dependencies = [];
    }
}

module.exports = Product;