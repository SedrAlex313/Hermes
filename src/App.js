
import Directory from './components/directory/directory.component';
const App =  () => {
  const categories = 
[
  {
     id : 1,
     title : 'Colliers',
     imageUrl:'https://i.pinimg.com/564x/b9/e0/d9/b9e0d9ab43e81e3ad10751c88c053c49.jpg'

  },
  {
      id : 2,
      title : "Des boucles d'oreilles",
      imageUrl:'https://i.pinimg.com/564x/e7/16/da/e716dafa9be14d6a7f1e2ee54734e9d8.jpg'
  },
  {
    id : 3,
    title : 'Anneaux',
    imageUrl:'https://i.pinimg.com/564x/e2/07/b0/e207b0d38a7ec76dac9c46fab857ef62.jpg'
  },
  {
    id : 4,
    title : 'Bracelets',
    imageUrl:'https://i.pinimg.com/564x/8d/cf/9b/8dcf9b7799a8e8d8ba6197a4c38f272d.jpg'
  },
  {
    id : 5,
    title : 'Pendentifs',
    imageUrl:'https://i.pinimg.com/564x/79/bb/b7/79bbb7c421f28d153f147a2b40c7b4b8.jpg'
  },
  {
    id : 6,
    title : 'montres',
    imageUrl: 'https://i.pinimg.com/564x/20/57/fa/2057fa5b64328f40b424f1ce1fe91adf.jpg',
  },
];
  return  <Directory categories={categories}/>;
};

export default App;
