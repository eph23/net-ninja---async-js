"use strict";

const getTodos = async () => {
    const response = await fetch("./eph.json");
    const data = await response.json();

    return data;
};

console.log(1);
console.log(2);

getTodos().then((data) => {
    console.log("Resolved", data);
});
console.log(3);
console.log(4);

/* fetch("./eph.json")
    .then((response) => {
        console.log("Resolved:", response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("Rejected", err);
    }); */
