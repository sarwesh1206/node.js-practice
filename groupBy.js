// import "core-js/actual/array/group-by";

const products = [
    { name: "apples", category: "fruits" },
    { name: "oranges", category: "fruits" },
    { name: "potatoes", category: "vegetables" }
];

const groupByCategory = products.groupBy((product) => {
    return product.category;
});

console.log(JSON.stringify(groupByCategory, null, 2));
