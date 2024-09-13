import { useState } from "react";

const SampleList = () => {
    const fruit = ["Banana", "Orange", "Mango", "Apple", "Grabe"];
    return (
        <div>
            <h2>ລາຍການໝາກໄມ້</h2>
            <ul>
                {fruit.map((fruit, index) => (
                    <li key={{ index }}>{index + 1}. {fruit}</li>
                ))}
            </ul>
        </div>
    );
};
const Aaeancountry = () => {
    const country = ["Laos", "Thailand", "Vietnam", "Cambodia", "Singapore", "Myanmar", "Brunei", "Philippine", "Indonesia", "Malaysia"]
    return (
        <div>
            <h2>ຊື່ປະເທດ</h2>
            <ul>
                {country.map((country, index) => (
                    <li key={{ index }}>{index + 1}. {country}</li>
                ))}
            </ul>
        </div>
    );
}
const StudentList = () => {
    const students = [
        {
            name: "somvang",
            class: "A1",
            gender: "male"
        },
        {
            name: "somchai",
            class: "A1",
            gender: "female"
        },
        {
            name: "somkeo",
            class: "C1",
            gender: "female"
        },
        {
            name: "Jai",
            class: "A1",
            gender: "male"
        },
    ]
    return (
        <div>
            <h2>ລາຍຊື່ນັກຮຽນ</h2>
            <ul>
                {students
                    .filter((student) => student.class === "A1" && student.gender === "female")
                    .map((student, index) => (
                        <li key={index}>{index + 1}. {student.name} ຫ້ອງ {student.class} ເພດ: {student.gender}</li>
                    ))}

            </ul>
        </div>
    );
}

const TodoList = () => {
    const toggleTodo = (index) => {
        const Todos = [...todos];
        Todos[index].completed = !Todos[index].completed
        setTodos(Todos)
    }

    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: newTodo, completed: false }]);
        setNewTodo("");
    }
    const [todos, setTodos] = useState([
        {
            text: "ຮຽນ React",
            completed: false,
        },
        {
            text: "ສ້າງ To-Do app",
            completed: false,
        },
        {
            text: "ຝຶກຫັດໃຊ້  Lists & Keys",
            completed: false,
        },
    ]);
    const [newTodo, setNewTodo] = useState('')
    return (
        <div>
            <h2>ລາຍການທີ່ຕ້ອງເຮັດ</h2>
            <form onSubmit={addTodo}>
                <input
                    onChange={(event) => setNewTodo(event.target.value)}
                    value={newTodo}
                    type="text"
                    placeholder="ເພີ່ມລາຍການໃໝ່..."
                ></input>
                <button type="submit">ເພີ່ມ</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li onClick={() => toggleTodo(index)}
                        key={index} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    )
};

const ImageCarousel = ({ image }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length
        );

    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + image.length) % image.length);
    }
    return (
        <div className="carousel">
            <button className=".carousel-button prev " onClick={prevSlide} >&#10094;</button>
            {image.map((image,index) => 
            <img
                src={image}
                key={index}
                alt={`Slide ${index + 1}`}
                className={`carousel-image ${index === currentIndex ? "active" : ""}`}
        ></img>
            )}
            
            <button className=".carousel-button next" onClick={nextSlide} >&#10095;</button>
        </div>
    );
}

const Day5 = () => {
    const  carouselImage = ["https://thumbs.dreamstime.com/b/bottles-famous-global-beer-brands-poznan-pol-mar-including-heineken-becks-bud-miller-corona-stella-artois-san-miguel-143170440.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMF1jE_pMGo1D8T1j8PP3AkheUuONanelQtg&s",
        "https://images.news18.com/webstories/2023/09/image-64ff1b8238693.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYTx1evTDHv2fXuPNPul6TrCuiR4rSFYJBw&s"


    ]
    return (
        <div className="container">
            <h1>ສະບາຍດີ ວັນສຸກ ມື້ທີ 5</h1>
            <hr></hr>
            <SampleList></SampleList>
            <hr></hr>
            <Aaeancountry></Aaeancountry>
            <hr></hr>
            <StudentList></StudentList>
            <hr></hr>
            <TodoList></TodoList>
            <hr></hr>
            <ImageCarousel image={carouselImage}></ImageCarousel>
            <style jsx>{`
            hr {
                color: black;
                width: 100%;
            }
            .container{
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                padding: 20px;
                display: flex;
                flex-direction: column;
                align-items: start;
                min-height: 100vh;
                background-color: white;
                text-align: start;

            }

            form button {
                background-color: #992c7e;
                margin-left: 10px;
                cursor: pointer;
                padding: 5px 10px;
                
                color: white;
                border: none;
                border-radius: 3px;
            }
            ul{
                list-style-type: none;
                padding;0;
            }
            li{

                margin-bottom: 10px;
                padding: 10px;
                background-color: #a1b3ab;
                border-radius: 5px;
            }
            .carousel-image {
                width: 100%;
                height: auto;
                display: none;
            }
            .carousel-image.active{
                display: block;
            }
            .carousel-button{
                position: absolute;
                top: 50%;
                transform: translateY(-50);
                background-color: rgba(0, 0, 0, 0.5);
                color: white;
                border: none;
                padding: 10px 15px;
                currsor: pointer;
                font-size: 18px;
            }
            .prev{
                left: 10px;
            }
            .next{
                right: 10px;
            }
            
        `}

            </style>
        </div>
    );

}

export default Day5;