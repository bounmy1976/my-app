import { useState } from "react";
import Swal from "sweetalert2";

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        gender: "",
        message: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }
        ));
    }
    const handleSubmit =async (e) => {
        //ຖາມລູກຄ້າວ່າຈະສົ່ງແທ້ບໍ
        e.preventDefault();
        if (formData.firstName === "" || 
            formData.lastName  === "" || 
            formData.gender === ""  ||
            formData.dateOfBirth === ""  ||
            formData.email === ""  ||
            formData.message === ""
        ) {
            return Swal.fire({
                title: "ທ່ານປ້ອນຂໍ້ມູນບໍ່ຄົບ",
                text: "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ",
                icon: "warning",
                confirmButtonText: "ຕົກລົງ",
            });
        }

    const isSubmit = await Swal.fire({
        title: "ທ່ານແນ່ໃຈບໍທີ່ຈະສົ່ງຂໍ່ມູນ",
        text: "ຂໍ່ມູນຂອງທ່ານຈະຖືກສົ່ງ",
        icon: "question",
        confirmButtonText: "ຕົກລົງ",
        cancelButtonText: "ຍົກເລີກ",
        showCloseButton: true,
        showCancelButton: true
    });
    if (!isSubmit.isConfirmed){return;}
        onSubmit(formData);
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            dateOfBirth: "",
            gender: "",
            message: "",
        });
        Swal.fire({
            title: "ສຳເລັດ",
            text: "ຂໍ້ມູນທ່ານໄດ້ຖືກສົ່ງສຳເລັດແລ້ວ",
            icon: "success",
            confirmButtonText: "ຕົກລົງ",
            cancelButtonText: "ຍົກເລີກ",
        });
        
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input onChange={handleChange} value={formData.firstName} type="text" name="firstName" placeholder="ຊື່:"></input>
            <input onChange={handleChange} value={formData.lastName} type="text" name="lastName" placeholder="ນາມສະກຸນ:"></input>
            <select onChange={handleChange} value={formData.gender} name="gender">
                <option value="">ເພດ</option>
                <option value="ຊາຍ">ຊາຍ</option>
                <option value="ຍິງ">ຍິງ</option>
                <option value="ອື່ນໆ">ອື່ນໆ</option>
            </select>
            <input onChange={handleChange} value={formData.dateOfBirth} type="date" name="dateOfBirth" placeholder="ວັນເດືອນປີເກີດ:"></input>
            <input onChange={handleChange} value={formData.email} type="email" placeholder="email" name="email"></input>
            <textarea onChange={handleChange} value={formData.message} name="message" placeholder="ຂໍ້ຄວາມ" ></textarea>
            <button type="submit">ສົ່ງ</button>
        </form>
    );
};

const Day3 = () => {
    const [submission, setSubmission] = useState([]);
    const handleSubmit = (formData) => {
        setSubmission([...submission, formData]);
    }
    return (
        <div className="container">
            <Form onSubmit={handleSubmit}></Form>
            <div className="submission">
                <h2>ຂໍ້ມູນໄດ້ຮັບ</h2>
                {submission.map((ss, index) => (
                    <div className="submission-item">
                        <p>
                            <strong>ຊື່:</strong> {ss.firstName}
                        </p>
                        <p>
                            <strong>ນາມສະກຸນ:</strong> {ss.lastName}
                        </p>
                        <p>
                            <strong>ວັນເດືອນປີເກີດ:</strong> {ss.dateOfBirth}
                        </p>
                        <p>
                            <strong>ເພດ:</strong> {ss.gender}
                        </p>
                        <p>
                            <strong>ອີເມວ:</strong> {ss.email}
                        </p>
                        <p>
                            <strong>ຂໍ້ຄວາມ:</strong> {ss.message}
                        </p>
                    </div>
                ))}
            </div>
            <style jsx>
                {
                    `
                    .container {
                        min-height: 200vh;
                        background-color: #e87de8;
                        padding: 20px;
                        max-width: 600px;
                        text-align: center;
                        margin:0 auto;
                    }
                    .form {
                        width: 100%;
                        padding: 20px;
                        background-color: blue;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0 ,0.1);
                        margin-bottom: 20px;
                    }
                        
                    .form input, .form textarea, .form select, .form button {
                        width: 300px;
                        margin: 10px 0;
                        padding: 10px;
                        border-radius: 4px;
                        border: 1px solid #add;
                        font-size: 16px;
                    }
                    .form textarea {
                        width: 300px;
                        height: 100px

                    }
                    .form button {
                        margin: 10px 0;
                        padding: 8px;
                        backfround-color: green;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        font-size: 16px;
                        cursor: pionter;
                    }
                    .submission {
                        width: 100%;
                         max-width: 500px;
                        margin-top: 20px;
                        text-align: left;
                    }
                    .submission-item {
                        background-color: green;
                        border-radius: 8px;
                        padding: 15px;
                        margin-bottom: 15px;
                        box-shadow: 0 0 5px rgba(0, 0, 0 0.1);
                    }        
                `}
            </style>
        </div>
    );

}

export default Day3