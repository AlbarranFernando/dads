const firebase = require("firebase");
require("firebase/firestore");
firebase.initializeApp({
    apiKey: "AIzaSyAHQfl0rUnps_rQDZ3b8Z9yWnyuqaT9eBw",
    authDomain: "dads-772b3.firebaseapp.com",
    projectId: "dads-772b3",
    storageBucket: "dads-772b3.appspot.com",
    messagingSenderId: "879622053536",
    appId: "1:879622053536:web:ad5294b2c38a994e7cb3c5"
});
var db = firebase.firestore();
var productos =[
    {
        "id": 1,
        "img":"https://placehold.it/200x200",
        "categoria":"golosinas",
        "producto":"Galletas",
        "precio":100,
        "cant":5,
        "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  "
    },
    {
        "id": 2,
        "img":"https://placehold.it/200x200",
        "categoria":"golosinas",
        "producto":"Caramelos",
        "precio":8,
        "cant":140,
        "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  "
    },
    {
        "id": 3,
        "img":"https://placehold.it/200x200",
        "categoria":"golosinas",
        "producto":"Chicles",
        "precio":5,
        "cant":50,
        "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  "
    },
    {
        "id": 4,
        "img":"https://placehold.it/200x200",
        "categoria":"golosinas",
        "producto":"Chocolate",
        "precio":200,
        "cant":8,
        "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  "
    },
    {
        "id": 5,
        "img":"https://placehold.it/200x200",
        "categoria":"gaseosas",
        "producto":"Sprite",
        "precio":180,
        "cant":8,
        "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  "
    },
    {
        "id": 6,
        "img":"https://placehold.it/200x200",
        "categoria":"gaseosas",
        "producto":"Pritty",
        "precio":150,
        "cant":10,
        "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  "
    },
    {
        "id": 7,
        "img":"https://placehold.it/200x200",
        "categoria":"gaseosas",
        "producto":"Fanta",
        "precio":120,
        "cant":9,
        "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  "
    },
    {
        "id": 8,
        "img":"https://placehold.it/200x200",
        "categoria":"cervezas",
        "producto":"Artesanal APA ",
        "precio":300,
        "cant":3,
        "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  "
    },
    {
        "id": 9,
        "img":"https://placehold.it/200x200",
        "categoria":"cervezas",
        "producto":"Artesanal Red ",
        "precio":300,
        "cant":8,
        "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  "
    },
    {
        "id": 10,
        "img":"https://placehold.it/200x200",
        "categoria":"cervezas",
        "producto":"Artesanal IPA ",
        "precio":300,
        "cant":5,
        "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  "
    },
    {
        "id": 11,
        "img":"https://placehold.it/200x200",
        "categoria":"almacen",
        "producto":"Harina 000",
        "precio":120,
        "cant":5,
        "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  "
    },
    {
        "id": 12,
        "img":"https://placehold.it/200x200",
        "categoria":"almacen",
        "producto":"Arvejas",
        "precio":70,
        "cant":8,
        "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  "
    },
    {
        "id": 13,
        "img":"https://placehold.it/200x200",
        "categoria":"almacen",
        "producto":"Arroz Integral",
        "precio":180,
        "cant":3,
        "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  "
    },
    {
        "id": 14,
        "img":"https://placehold.it/200x200",
        "categoria":"variedades",
        "producto":"Licor",
        "precio":300,
        "cant":3,
        "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  "
    },
    {
        "id": 15,
        "img":"https://placehold.it/200x200",
        "categoria":"variedades",
        "producto":"Mani Bolsa",
        "precio":80,
        "cant":14,
        "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  "
    },
    {
        "id": 16,
        "img":"https://placehold.it/200x200",
        "categoria":"variedades",
        "producto":"Encendedor",
        "precio":40,
        "cant":9,
        "descripcion":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatum, incidunt mollitia odio, blanditiis fugit nesciunt placeat dolores id nihil dignissimos inventore earum eveniet ad eum impedit, sapiente beatae quaerat!rem  "
    }
    ]
productos.forEach((obj) => {
    db.collection("productos").add({
        id: obj.id,
        img: obj.img,
        categoria: obj.categoria,
        producto: obj.producto,
        precio: obj.precio,
        cant: obj.cant,
        descripcion: obj.descripcion        
    }).then((docRef) => {
        console.log("Producto registrado con ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error al agregar un documento: ", error);
    });
});
