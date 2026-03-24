function User(props){
    const {userObj}=props
    return(
        <div className="shadow-2xl rounded-2xl bg-gradient-to-r from-red-400 to-blue-400">
            <img className="mx-auto rounded-full" src={userObj.image} alt="" />
            <p className="text-center">{userObj.name}</p>
            <p className="text-center">{userObj.email}</p>
        </div>
    )
}
export default User