// EXERCÍCIO - Parte 2

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// Resolução do gabarito B7.2 Exercicio 1
const customerInfo = (order) => {
  const address = 'address';
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerName = order['name'];
  const customerPhone = order['phoneNumber'];
  const street = order[address].street;
  const number = order[address].number;
  const apartment = order[address].apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
}
customerInfo(order); 

// EXERCÍCIO 2
const orderModifier = (order) => {
  let custumerN = order.name;
  const pizza1 = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  let value = order.payment.total;

  custumerN = 'Luiz Silva'
  value = '50';
  
  console.log(`Olá ${custumerN}, o total do seu pedido de ${pizza1[0]}, ${pizza1[1]} e ${drink} é R$ ${value}.`)
}
orderModifier(order);