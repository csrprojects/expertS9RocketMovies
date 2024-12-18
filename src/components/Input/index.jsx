import { Container } from './styles';
import { FiPlus } from 'react-icons/fi';
import PropTypes from 'prop-types';

export function Input({ icon: Icon = null, isnew = false, ...rest }) {
    return (
        <Container $isnew={isnew.toString()}>
            {Icon && <Icon size={20} />}
            <input {...rest} />
            {isnew && (
                <button
                    type="button"
                    onClick={onclick}
                    className={isnew ? 'button-add' : 'button-delete'}
                >
                    <FiPlus />
                </button>
            )}
        </Container>
    );
}

Input.propTypes = {
    isnew: PropTypes.bool,
    icon: PropTypes.elementType,
};
