import { Product, ProductType } from "./models/Product";
import { User } from "./models/User";
import { Comment } from "./models/Comment";

// Cenário1: Criando usuários
const user1 = new User('Juliano', 'Juliano123456', 'juliano@gmail.com')
const user2 = new User('Oliver', 'Oliver123', 'oliver@gmail.com')

// Cenário 2: Criando produtos
const product1 = new Product('Camisa', 50, ProductType.Clothes)
const product2 = new Product('Tênis', 150, ProductType.Shoes)
const product3 = new Product('Cama', 1000, ProductType.Home)

// Cenário 3: Adicionando produtos no carrinho
user1.addToCart(product1)
user1.addToCart(product2)
user2.addToCart(product3)

console.log('Produtos do carrinho de Juliano')
console.log(user1.showProducts())

// Cenário 4: Removendo um produto do carrinho
user1.removeFromCart(product1)

console.log('Produtos no carrinho de Juliano após remover camisa.')
user1.showProducts()

// Cenário 5: Adicionando comentários ao produto
product1.addComment('Ótima qualidade', user1)
product2.addComment('Muito confortável', user2)
product3.addComment('Dormi muito bem!', user1)



console.log('Usuário em formato JSON', user1.toJson())

// Cenário 6: Adicionando avaliações
product1.addRate(5, user1)
product1.addRate(3, user2)
product2.addRate(5, user1)
product2.addRate(4, user2)
product3.addRate(4, user1)
product3.addRate(3, user2)

console.log('Comentários')
console.log(user1.showProducts())