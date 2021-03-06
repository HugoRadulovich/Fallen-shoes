const products = [
{
    "id":1,"nombre":"NIKE X JORDAN ORANGE",
    "precio":150,
    "genero":"Female",
    "categoryId":9,
    "img":require("../multimedia/1.png"),
    "descripcion":'Virgil Abloh se unio a Nike para desconstruir el Air Jordan 1 High que presentaba el iconico color UNC. La seria Nike X OffWhite Air Jordan 1 atrae una gran cantidad de atencion y se vende al instante.',
    "cantidad":4},
{
    "id":2,"nombre":"NIKE X OFF WHITE RED",
    "precio":1000,
    "genero":"Male",
    "categoryId":6,
    "img":require("../multimedia/2.png"),
    "descripcion":'Virgil Abloh se unio a Nike para desconstruir el Air Jordan 1 High que presentaba el iconico color UNC. La seria Nike X OffWhite Air Jordan 1 atrae una gran cantidad de atencion y se vende al instante.',
    "cantidad":2},
{
    "id":3,
    "nombre":"NIKE X JORDAN BLACK/PINK",
    "precio":100,
    "genero":"Female",
    "categoryId":9,
    "img":require("../multimedia/3.png"),
    "descripcion":'Virgil Abloh se unio a Nike para desconstruir el Air Jordan 1 High que presentaba el iconico color UNC. La seria Nike X OffWhite Air Jordan 1 atrae una gran cantidad de atencion y se vende al instante.',
    "cantidad":8},
{
    "id":4,
    "nombre":"NIKE X OFF WHITE SKY",
    "precio":1200,
    "genero":"Male",
    "categoryId":6,
    "img":require("../multimedia/4.png"),
    "descripcion":'Virgil Abloh se unio a Nike para desconstruir el Air Jordan 1 High que presentaba el iconico color UNC. La seria Nike X OffWhite Air Jordan 1 atrae una gran cantidad de atencion y se vende al instante.',
    "cantidad":3},
{
    "id":5,"nombre":"NIKE X JORDAN RED",
    "precio":150,
    "genero":"Female",
    "categoryId":9,
    "img":require("../multimedia/5.png"),
    "descripcion":'Virgil Abloh se unio a Nike para desconstruir el Air Jordan 1 High que presentaba el iconico color UNC. La seria Nike X OffWhite Air Jordan 1 atrae una gran cantidad de atencion y se vende al instante.',
    "cantidad":10},
{
    "id":6,
    "nombre":"ADIDAS YEEZY 700",
    "precio":350,
    "genero":"Male",
    "categoryId":6,
    "img":require("../multimedia/6.png"),
    "descripcion":'Virgil Abloh se unio a Nike para desconstruir el Air Jordan 1 High que presentaba el iconico color UNC. La seria Nike X OffWhite Air Jordan 1 atrae una gran cantidad de atencion y se vende al instante.',
    "cantidad":5},
{
    "id":7,
    "nombre":"NIKE X JORDAN RED",
    "precio":100,
    "genero":"Male",
    "categoryId":6,
    "img":require("../multimedia/7.png"),
    "descripcion":'Virgil Abloh se unio a Nike para desconstruir el Air Jordan 1 High que presentaba el iconico color UNC. La seria Nike X OffWhite Air Jordan 1 atrae una gran cantidad de atencion y se vende al instante.',
    "cantidad":12},
{
    "id":8,"nombre":"NIKE X JORDAN",
    "precio":75,
    "genero":"Female",
    "categoryId":9,
    "img":require("../multimedia/8.png"),
    "descripcion":'Virgil Abloh se unio a Nike para desconstruir el Air Jordan 1 High que presentaba el iconico color UNC. La seria Nike X OffWhite Air Jordan 1 atrae una gran cantidad de atencion y se vende al instante.',
    "cantidad":14},
{
    "id":9,
    "nombre":"ADIDAS HUMAN RACE BLACK",
    "precio":90,
    "genero":"Female",
    "categoryId":9,
    "img":require("../multimedia/9.png"),
    "descripcion":'Virgil Abloh se unio a Nike para desconstruir el Air Jordan 1 High que presentaba el iconico color UNC. La seria Nike X OffWhite Air Jordan 1 atrae una gran cantidad de atencion y se vende al instante.',
    "cantidad":15},
{
    "id":10,
    "nombre":"ADIDAS YEEZY WHITE",
    "precio":250,
    "genero":"Female",
    "categoryId":9,
    "img":require("../multimedia/10.png"),
    "descripcion":'Virgil Abloh se unio a Nike para desconstruir el Air Jordan 1 High que presentaba el iconico color UNC. La seria Nike X OffWhite Air Jordan 1 atrae una gran cantidad de atencion y se vende al instante.',
    "cantidad":6},
{
    "id":11,
    "nombre":"JORDAN 4",
    "precio":150,
    "genero":"Male",
    "categoryId":6,
    "img":require("../multimedia/11.png"),
    "descripcion":'Virgil Abloh se unio a Nike para desconstruir el Air Jordan 1 High que presentaba el iconico color UNC. La seria Nike X OffWhite Air Jordan 1 atrae una gran cantidad de atencion y se vende al instante.',
    "cantidad ":5},
{
    "id":12,
    "nombre":"NIKE X JORDAN BLACK/BLUE",
    "precio":75,
    "genero":"Male",
    "categoryId":6,
    "img":require("../multimedia/12.png"),
    "descripcion":'Virgil Abloh se unio a Nike para desconstruir el Air Jordan 1 High que presentaba el iconico color UNC. La seria Nike X OffWhite Air Jordan 1 atrae una gran cantidad de atencion y se vende al instante.',
    "cantidad":14},
{
    "id":13,
    "nombre":"ADIDAS YEEZY GREY",
    "precio":250,
    "genero":"Male",
    "categoryId":6,
    "img":require("../multimedia/13.png"),
    "descripcion":'Virgil Abloh se unio a Nike para desconstruir el Air Jordan 1 High que presentaba el iconico color UNC. La seria Nike X OffWhite Air Jordan 1 atrae una gran cantidad de atencion y se vende al instante.',
    "cantidad":12},
{
    "id":14,
    "nombre":"ADIDAS HUMAN RACE YELLOW",
    "precio":150,
    "genero":"Male",
    "categoryId":6,
    "img":require("../multimedia/14.png"),
    "descripcion":'Virgil Abloh se unio a Nike para desconstruir el Air Jordan 1 High que presentaba el iconico color UNC. La seria Nike X OffWhite Air Jordan 1 atrae una gran cantidad de atencion y se vende al instante.',
    "cantidad":13},
{
    "id":15,
    "nombre":"VANS ORIGINAL",
    "precio":65,
    "genero":"Female",
    "categoryId":9,
    "img":require("../multimedia/15.png"),
    "descripcion":'Virgil Abloh se unio a Nike para desconstruir el Air Jordan 1 High que presentaba el iconico color UNC. La seria Nike X OffWhite Air Jordan 1 atrae una gran cantidad de atencion y se vende al instante.',
    "cantidad":20},
{
    "id":16,
    "nombre":"ADIDAS ULTRA BOOST",
    "precio":65,
    "genero":"Female",
    "categoryId":9,
    "img":require("../multimedia/16.png"),
    "descripcion":'Virgil Abloh se unio a Nike para desconstruir el Air Jordan 1 High que presentaba el iconico color UNC. La seria Nike X OffWhite Air Jordan 1 atrae una gran cantidad de atencion y se vende al instante.',
    "cantidad":25},
{
    "id":17,
    "nombre":"NIKE X JORDAN BLACK/YELLOW",
    "precio":120,
    "genero":"Male",
    "categoryId":6,
    "img":require("../multimedia/17.png"),
    "descripcion":'Virgil Abloh se unio a Nike para desconstruir el Air Jordan 1 High que presentaba el iconico color UNC. La seria Nike X OffWhite Air Jordan 1 atrae una gran cantidad de atencion y se vende al instante.',
    "cantidad":10},
{
    "id":18,
    "nombre":"ADIDAS ULTRA BOOST",
    "precio":65,
    "genero":"Female",
    "categoryId":9,
    "img":require("../multimedia/18.png"),
    "descripcion":'Virgil Abloh se unio a Nike para desconstruir el Air Jordan 1 High que presentaba el iconico color UNC. La seria Nike X OffWhite Air Jordan 1 atrae una gran cantidad de atencion y se vende al instante.',
    "cantidad ":13}
];

module.exports = {
    products,
} 