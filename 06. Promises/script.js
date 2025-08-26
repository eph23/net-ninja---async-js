"use strict";

const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject("Error getting resource");
            }
        });

        request.open("GET", resource);
        request.send();
    });
};

getTodos("./luigi.json")
    .then((data) => {
        console.log("Promise resolved:", data);
    })
    .catch((err) => {
        console.log("promise rejected:", err);
    });

/* const getSomething = () => {
    return new Promise((resolve, reject) => {
        resolve("Some data");
        reject("Some error");
    });
}; */

/* getSomething().then(
    (data) => {
        console.log(data);
    },
    (err) => {
        console.log(err);
    }
); */

/* getSomething()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
 */
