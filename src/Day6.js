import { useEffect, useState } from "react";

//Basicform
function BasicForm() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`ຊື່ທີ່ຖືກສົ່ງ:${name}`)
    };
    return (
        <div>
            <p>Basic form</p>
            <form onSubmit={handleSubmit}>
                <input value={name} type="text" placeholder="ກະລຸນາປ້ອນຊື່ຂອງທ່ານ" onChange={(e) => setName(e.target.value)}></input>
                <button type="submit">ສົ່ງຂໍ້ມູນ</button>
            </form>
        </div>
    )
}
const MultipleInputForm = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`ຂໍ້ມູນທີ່ຖືກສົ່ງ ${JSON.stringify(formData)}`)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="firstName"
                    placeholder="ຊື່"
                    value={formData.firstname}
                    onChange={handleSubmit}></input>
                <input
                    name="lastName"
                    placeholder="ນາມສະກຸນ"
                    value={formData.lastname}
                    onChange={handleSubmit}
                ></input>
                <input
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleSubmit}
                ></input>
                <button name="submit" >ສົ່ງຂໍ້ມູນ</button>
            </form>
        </div>
    )
}
const SelectAndRadio = () => {
    const [selectFruit, setSelectFuit] = useState("");
    const [gender, setGender] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    };
    return (
        <div>
            <from onSubmit={handleSubmit}>
                <select
                    value={selectFruit}
                    onChange={(e) => setSelectFuit(e.target.value)}
                >
                    <option value="">ເລືອກໝາກໄມ້</option>
                    <option value="banana">ໝາກກ້ວຍ</option>
                    <option value="apple">ໝາກແອັບເປິນ</option>
                    <option value="orange">ໝາກກ້ຽງ</option>
                    <option value="mangle">ໝາກມ່ວງ</option>
                    <option value="grab">ໝາກອາງຸ່ນ</option>
                </select>
                {selectFruit && <h4>ໝາກໄມ້ທີ່ທ່ານເລືອກ: {selectFruit}</h4>}
                <div>
                    <input onChange={(e) => setGender(e.target.value)} type="radio" id="male" name="gender" value="ຊາຍ"></input>
                    <label>ຊາຍ</label>
                    <input onChange={(e) => setGender(e.target.value)} type="radio" id="female" name="gender" value="ຍິງ"></input>
                    <label>ຍິງ</label>
                </div>
                {gender && <h4>ເພດຂອງທ່ານແມ່ນ: {gender}</h4>}
                <button type="submit">ສົ່ງຂໍ້ມູນ</button>
            </from>
        </div>
    );
};
const ProducSearch = () => {
    const [sortOrder, setSortOrder] = useState("asc");
    const [priceFilter, setPriceFilter] = useState({ min: "", max: "" })
    const [searchTerm, setSearchTerm] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;
    const [result, setResult] = useState([
        {
            id: 1, name: "ໂທລະສັບມືຖື", price: 5
        },
        {
            id: 2, name: "ແລັບທັອບ", price: 7
        },
        {
            id: 3, name: "ຄອມພິວເຕີ", price: 10
        },
        {
            id: 4, name: "ຫູຟັງ", price: 2
        },
        {
            id: 5, name: "ລຳໄພງບ", price: 4
        },
        {
            id: 6, name: "ສາຍສາກ", price: 3
        },
    ])
    const product = [
        {
            id: 1, name: "ໂທລະສັບມືຖື", price: 5
        },
        {
            id: 2, name: "ແລັບທັອບ", price: 7
        },
        {
            id: 3, name: "ຄອມພິວເຕີ", price: 10
        },
        {
            id: 4, name: "ຫູຟັງ", price: 2
        },
        {
            id: 5, name: "ລຳໄພງບ", price: 4
        },
        {
            id: 6, name: "ສາຍສາກ", price: 3
        },
    ]

    useEffect(() => {
        handleSearch();
    },  [sortOrder, priceFilter, currentPage]);

    const handleSearch = () => {
        let filterProducts = product.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Filter by price
        if (priceFilter.min !== "") {
            filterProducts = filterProducts.filter(
                product => product.price >= parseInt(priceFilter.min)
            );
        }

        if (priceFilter.max !== "") {
            filterProducts = filterProducts.filter(
                product => product.price <= parseInt(priceFilter.max)
            );
        }

        filterProducts.sort((a, b) => {
            return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
        });
        setResult(filterProducts);
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    }

    const handlePriceFilterChange = (e) => {
        setPriceFilter({ ...priceFilter, [e.target.name]: [e.target.value] });
    }

    //ການແບ່ງໜ້າ
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = result.slice(indexOfFirstItem, indexOfLastItem);
    const totalPage = Math.ceil(result.length / itemsPerPage);


    return (
        <div>
            <h2>Product items Search</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
            }}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                ></input>
                <button type="submit">ຄົ້ນຫາ</button>
            </form>
            <div>
                <label>
                    ຈັດລຽງຕາມລາຄາ: <select onChange={handleSortChange}>
                    <option value='asc'>ລາຄາ (ຕ່ຳ-ສູງ)</option>
                    <option value='edsc'>ລາຄາ (ສູງ-ຕ່ຳ)</option>
                    </select>
                </label>
            </div>
            <div>
                <label>ລາຄາຕ່ຳສຸດ <input
                    type="number"
                    name="min"
                    value={priceFilter.min}
                    onChange={handlePriceFilterChange}
                ></input></label>
                <label>ລາຄາສູງສຸດ <input
                    type="number"
                    name="max"
                    value={priceFilter.max}
                    onChange={handlePriceFilterChange}
                ></input></label>
            </div>
            <ul>
                {currentItem.map((product, index) => (
                    <li key={product.id}>
                        {index + 1}. {product.name}, ລາຄາ: {product.price} USD
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled = {currentPage === 1}
                >ກ່ອນໜ້າ</button>
                <span>
                    ໜ້າ {currentPage} ຈາກ {totalPage}
                </span>
                <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPage))}
                disabled = {currentPage === totalPage}
                >ຖັດໄປ</button>
            </div>
        </div>
    )
}

const Day6 = () => {
    return (
        <div>
            <p>ສະບາຍດີ ມື້ທີ 6</p>
            <h1>ການສ້າງຟອມ ແລະ Controlled Components ໃນ React</h1>
            <h2>ແບບຟອມພື້ນຖານ</h2>
            <BasicForm></BasicForm>
            <h2>ຟອມທີ່ມີຫຼາຍ Input</h2>
            <MultipleInputForm></MultipleInputForm>
            <h2>ການເລືອກ Radido ແລະ Dropdow</h2>
            <SelectAndRadio></SelectAndRadio>
            <h2>ລະບົບຄົ້ນຫາ</h2>
            <ProducSearch></ProducSearch>
            <style jsx>
                {`
                    .container {
                        max-width: 800px;
                        margin:0 aoto;
                        pdding: 20px;
                    }
                    form{
                        margin-bottom: 20px;
                    }
                    input, 
                    select{
                        margin: 5px 0;
                        padding: 5px;
                    }
                    button{
                        margin-top: 10px;
                        padding; 5px 10px;
                        backgroung-color: black;
                        color: white;
                        border: none;
                        currsor:pointer
                    }
                    .error{
                        font-zise: 20px;
                        color: red;
                    }
                    ul{
                        list-style-type: none;
                        padding: 0;
                    }
                    li{
                        width: 300px;
                        margin: 5px 0;
                        padding: 5px;
                        background-color: #34dfeb;
                        border-radius: 3px;
                        text-align: left;
                    }
                `}
            </style>
        </div>
    );

}

export default Day6