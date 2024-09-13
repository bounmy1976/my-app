import React, { useState, useEffect } from "react";
//FunctionalCounter
const FunctionalCounter = () => {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    document.title = `Func udate ${count}`
  })
  return (
    <div className="counter">
      <h1>This is FunctionalCounter</h1>

      <p>Number: {count} </p>
      <button onClick={() => {
        setCount(count + 2);
      }}>
        add</button>
      <button onClick={() => {
        if (count > 0)
          setCount(count - 1);
      }}>delete</button>
      <button onClick={() => {
        setCount(0);
      }}>reset</button>
    </div>
  );
};
//Class Component
class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidUpdate() {
    document.title = `Number: ${this.state.count}`;
  }
  render() {
    return (
      <div className="counter2">
        <h1>Class Component</h1>
        <h1>Laos</h1>

        <p>Number: {this.state.count}</p>
        <button className="aad-btn" onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}>add</button>
        <button className="delete-btn" onClick={() => {
          this.setState({ count: this.state.count - 1 });
        }}>delate</button>
        <button className="delete-btn" onClick={() => {
          this.setState({ count: this.state.count = 0 });
        }}>reset</button>
      </div>
    );
  };
};
const BlogPost = (props) => {
  const [like, setLike] = useState(0);
  return (
    <div>
      <h1>Name and Suename: {props.title}</h1>
      <h1>{props.conten}</h1>
      <p> ທ. ບຸນມີ ຄໍາອິນຊູ ເປັນຄູສອນວິຊາ ຄະນິດສາດຢູ່ ຄະນະວິທະຍາສາດທຳມະຊາດ(ຄວທ) ມະຫາວິທະຍາໄລແຫ້ງຊາດ (ມຊ) </p>
      <h2>ການສຶກສາ</h2>
      <p>ປະລິນຍາຕີ ສາຂາ ຄະນິດສາດ ທີ່ມະຫາວິທະຍາໄລ ແຫ່ງຊາດ</p>
      <p>ປະລິນຍາໂທ ສາຂາ ຄະນິດສາດ ທີ່ມະຫາວິທະຍາໄລ ແຫ່ງຊາດ</p>
      <p>ປະລິນຍາເອກ ສາຂາ ຄະນິດສາດ ທີ່ມະຫາວິທະຍາໄລ ບູລະພາ (ປະເທດໄທ)</p>

      <button onClick={() => {
        setLike(like + 1);
      }}
      >
        <img
          width={60}
          heigth={60}
          src="https://s.isanook.com/ca/0/ud/282/1414083/red-heart_2764-fe0f.png?ip/resize/w728/q80/png"
        ></img>
      </button>

      <h2>{like}</h2>
    </div>
  )
}
//Product Component
const ProductComp = (props) => {
  return (
    <div className="product-class">
      <p>Bounmy</p>
      <h1>{props.productTitle}</h1>

      <img width={150} className="product-img" src={props.productImg}></img>
      <p>{props.productPrice}</p>
      <p>{props.index}</p>
      <p>{props.productDetail}</p>
    </div>
  )
  
}
//Main Component
const Day2 = () => {
  const title = "ຫົວຂໍ້"
  const content = "ເນຶ້ອຫາ"
  const productTitle = "ຈາວາສະຄິບ"
  const productPrice = "250,000 LAK"
  const productDetail = [
    {
      title: "JAVAScript",
      description: "Basic",
      img: "https://iconape.com/wp-content/files/ez/353342/svg/javascript-seeklogo.com.svg",
      price: "550000"
    },
    
    {
      title: "python",
      description: "Basic",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/219px-Python-logo-notext.svg.png",
      price: "450000"
    },
    {
      title: "C++",
      description: "Basic",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTREadhYWxcLBoldO_5kFkZWJk_hceOMM1CxQ&s",
      price: "350000"
    }
  ]
  return (
    <div className="app">


      <FunctionalCounter></FunctionalCounter>
      <ClassCounter></ClassCounter>
      <BlogPost title="Bounmy Khaminsou" conten="Exellent"></BlogPost>
      { 
        productDetail.map((element, index) => (
          <ProductComp
          index = {index + 1}
            productTitle={element.title}
            productPrice={element.price}
            productImg={element.img}
            productDetail={element.description}
          ></ProductComp>
        ))}
      

      <hr></hr>
      ສ້າງໂພສບົດຄວາມໂດຍມີຊື່ຜູ້ຂຽນ

      <style jsx>
        {
          `
          .app{
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            text-align: center;
          }
            .counter {
            margin: 20px 0;
            padding: 0 auto;
            border: 1px solid #add;
            background-color: #4287f5;
            }
          .counter2 {
            margin: 20px 0;
            padding: 0 auto;
            border: 1px solid #add;
            background-color: #1ddbd5;
            }
          button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #d99c64;
            color: white;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
            margin: 20px 10px;
            }
          
          .add-btn {
            background-color: black;
            }
            .product-class {
            margin: 20px 0;
            padding: 0 auto;
            border: 1px solid #add;
            background-color: #8be09e;
            
            }
          .product-img{
            margin: 20px 10px;
            width = 300px
            heigth = 300px
            }
          `
        }
      </style>

    </div>
  );
};

export default Day2;