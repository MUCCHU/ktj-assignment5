const Signin = () => {
    const handleSignIn = (e) => {
        e.preventDefault();
    }
    return (
        <div className="signin">
            <div className="card text-center signincard">
                <div className="card-header text-white bg-info fw-bold" onClick={handleSignIn}>
                    Signin
                </div>
                <div className="card-body">
                    <label>Username</label>
                    <input type="text" required />
                    <label>Password</label>
                    <input type="password" required />
                    <input type="submit" value="SignIn" className="bg-primary text-white" />
                </div>
            </div>
        </div>
    );
}

export default Signin;