import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

const Login = () => {
    return (
        <section className="loginWrapper">
                <form action=""  className="inputsConteniner">
                    <h1>Customer Login</h1>
                    <Input type='text' queDigo='Ingrese un Email'/>
                    <Input type='password' queDigo='Ingrese una Contraseña'/>
                    <Button type='submit'/>
                </form>
        </section>
    )
   
}

export default Login;