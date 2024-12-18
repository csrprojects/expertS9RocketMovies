import { Container, Main, Title, Form, Space, Tags, Footer } from './styles';
import { Header } from '../../components/Header';
import { FiArrowLeft, FiX } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';
import { Textarea } from '../../components/Textarea';
import { Link } from 'react-router-dom';

export function New() {
    return (
        <Container>
            <Header />
            <Main>
                <Form>
                    <Title>
                        <Link to="/">
                            <FiArrowLeft size={20} />
                            Voltar
                        </Link>
                        <h1>Novo Filme</h1>
                    </Title>
                    <Space>
                        <Input placeholder="Título" />
                        <Input placeholder="Sua nota (de 0 a 5)" />
                    </Space>
                    <Textarea placeholder="Observações" />

                    <Tags>
                        <h2>Marcadores</h2>
                        <div>
                            <Tag title="React" icon={FiX} />
                            <Input placeholder="Novo marcador" isnew />
                        </div>
                    </Tags>
                    <Space>
                        <Button title="Excluir filme" data-view={'inverse'} />
                        <Button title="Salvar alterações" />
                    </Space>
                </Form>
            </Main>
            <Footer />
        </Container>
    );
}
