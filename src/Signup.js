const Signup = () => {
    const handleSignUp = (e) => {
        e.preventDefault();
    }
    return (<div className="signup positnabsolute">
        <div className="card text-center">
            <div className="card-header text-white bg-info fw-bold" onClick={handleSignUp}>
                Signup
            </div>
            <div className="card-body">
                <label>Username</label>
                <input type="text" required />
                <label>Email</label>
                <input type="email" />
                <label>Kgp Roll No: </label>
                <input type="text" />
                <label>Hall of Residence</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" required />
                <label>Confirm Password</label>
                <input type="password" required />
                <input type="submit" value="SignUp" className="bg-primary text-white" />
            </div>
        </div>
    </div>);
}

export default Signup;