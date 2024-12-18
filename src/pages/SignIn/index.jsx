import { Container, Form, Background } from './styles';
import { FiLock, FiMail } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';


export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>Rocket Movies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>
                <Input placeholder="E-mail" icon={FiMail} type="text" />
                <Input placeholder="Senha" type="password" icon={FiLock} />
                <Button title="Entrar"/>
                <Link to="/signup">Criar conta</Link>
            </Form>
            <Background />
        </Container>
    );
}
