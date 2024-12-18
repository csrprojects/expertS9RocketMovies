import { Container, Profile } from './styles';
import { ProfileImg } from '../ProfileImg';
import { Link } from 'react-router-dom';
import { Input } from '../Input';

export function Header() {
    return (
        <Container>
            <Link to="/">RocketMovies</Link>
            <Input placeholder="Pesquise filmes..." />
            <Profile>
                <div>
                    <strong>Rodrigo Gonçalves</strong>
                    <Link to="/">Sair</Link>
                </div>
                <Link to="/profile">
                    <ProfileImg username="csrprojects" />
                </Link>
            </Profile>
        </Container>
    );
}
