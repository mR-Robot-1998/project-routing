export default function Login() {
  return (
    <>
      <div style={{display:'flex',justifyContent:'center',marginTop:50}}>
        <h1 >Login</h1>
        <input
        style={{marginLeft:40}} 
        type="text" 
        placeholder="Enter UserName"/>
        <input style={{marginLeft:40}} type="password" placeholder="Enter Your Password"/>
      <button >Login</button>
      </div>
    </>
    )
}
