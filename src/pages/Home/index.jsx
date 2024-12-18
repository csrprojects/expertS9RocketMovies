import { Container, Title, Posts, Main } from './styles';
import { MoviePost } from '../../components/MoviePost';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

export function Home() {
    const navigate = useNavigate();

    const handleNavigate = (route) => {
        navigate(route);
    };

    return (
        <Container>
            <Header />
            <Main>
                <Title>
                    <h1>Meus Filmes</h1>
                    <Button
                        title="Adicionar Filme"
                        icon={FiPlus}
                        onClick={()=>handleNavigate('/new')}
                    />
                </Title>
                <Posts>
                    <MoviePost
                        data={{
                            id: 1,
                            title: 'Interestellar',
                            rating: 4,
                            tags: [
                                { id: 1, name: 'Ficção Científica' },
                                { id: 2, name: 'Drama' },
                                { id: 3, name: 'Família' },
                            ],
                            text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de',
                        }}
                        onClick={()=>handleNavigate('/movie/1')}
                    />
                    <MoviePost
                        data={{
                            id: 2,
                            title: 'Interestellar',
                            rating: 3,
                            tags: [
                                { id: 1, name: 'Ficção Científica' },
                                { id: 2, name: 'Drama' },
                                { id: 3, name: 'Família' },
                            ],
                            text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de',
                        }}
                        onClick={()=>handleNavigate('/movie/2')}
                    />
                    <MoviePost
                        data={{
                            id: 3,
                            title: 'Interestellar',
                            rating: 5,
                            tags: [
                                { id: 1, name: 'Ficção Científica' },
                                { id: 2, name: 'Drama' },
                                { id: 3, name: 'Família' },
                            ],
                            text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de',
                        }}
                        onClick={()=>handleNavigate('/movie/3')}
                    />
                </Posts>
            </Main>
        </Container>
    );
}
