const Profile = () => {
    return (
        <div className="container">
            <h1>Welcome to My Web</h1>
            <h3>Mr. Bounmy Khaminsou</h3>
            <img src="/bounmy.png"></img>
            <h3>Mathematics Lecturer</h3>
            <style jsx>
                {`
        .container {
            max-width:300px;
            background-color: #42f5da;
            padding: 20px;
            max-width: 600px;
            text-align: center;
            margin:0 auto;
            color: #f59942
        }
            img {
            width: 300px;
            }
        h1 {
            color: "red"
            }
    `}
            </style>
        </div>
    );


}

export default Profile;