import { Container } from './styles';
import PropTypes from 'prop-types';

export function Tag({ title, icon: Icon = null, ...rest }) {
    return (
        <Container {...rest}>
            {title}
            {Icon && <Icon size={20} />}
        </Container>
    );
}

Tag.propTypes = {
    icon: PropTypes.elementType,
    title: PropTypes.string.isRequired,
};
