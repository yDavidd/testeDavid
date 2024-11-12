import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
    
    {id:1, name:'Livro de Eli', price:50.0, image:'../eli.png'},
    {id:2, name:'Garota do Liv0', price:30.5,image:'../garota.png'},
    {id:3, name:'A cinco passos0', price:61.0,image:'../cinco.png'},
    {id:4, name:'Mortais', price:50.0, image:'../mortais.png'},
    {id:5, name:'Garota', price:30.5,image:'../garota.png'},
    {id:6, name:'Historia ', price:61.0,image:'../historia.png'},
    {id:7, name:'Livres ', price:50.0, image:'../livres.png'},
    {id:8, name:'Matilda', price:30.5,image:'../matilda.png'},
    {id:9, name:'Vento', price:61.0,image:'../vento.png'},
    {id:10, name:'Amor', price:61.0,image:'../amor.png'},
    {id:11, name:'Escorpion', price:61.0,image:'../escorpion.png'},
    {id:12, name:'Silver', price:61.0,image:'../silver.png'},
    

  ];
  getProducts():Iproducts[]{
    return this.products;
  }
}
