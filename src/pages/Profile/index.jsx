import { Container, Form, Avatar } from './styles';
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi';
import { ProfileImg } from '../../components/ProfileImg';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft size={24} />
                    Voltar
                </Link>
            </header>
            <Form>
                <Avatar>
                    <ProfileImg username="csrprojects" />
                    <label htmlFor="avatar">
                        <FiCamera size={24} />
                        <input type="file" id="avatar" />
                    </label>
                </Avatar>
                <Input placeholder="Nome" type="text" icon={FiUser} />
                <Input placeholder="E-mail" type="text" icon={FiMail} />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />
                <Input placeholder="Nova senha" type="password" icon={FiLock} />
                <Button title="Salvar" />
            </Form>
        </Container>
    );
}
