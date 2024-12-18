import { Container, Form, Background } from './styles';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';


export function SignUp() {

    return (
        <Container>
            <Form>
                <h1>Rocket Movies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>
                <Input placeholder="Nome" icon={FiUser} type="text" />
                <Input placeholder="E-mail" icon={FiMail} type="text" />
                <Input placeholder="Senha" type="password" icon={FiLock} />
                <Button title="Cadastrar" />
                <Link to="/signin"><FiArrowLeft /> Voltar para login</Link>
            </Form>
            <Background />
        </Container>
    );
}
