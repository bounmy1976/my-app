import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
    const [editPost, setEditPost]= useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    return (
        <div>
            <h2>Edit Post</h2>
            <form>
                <textarea 
                value={{editPost}} 
                onChange={(e) => setEditPost(e.target.value)}
                cols={40} rows={10} 
                placeholder="ແກ້ໄຂໂພສຂອງທ່ານ"
                ></textarea>
                <button>ອັບເດດໂພສ</button>
            </form>
            <button onClick={() => navigate("/")}>ກັບຄືນ</button>

        </div>
    );
}

export default EditPost;