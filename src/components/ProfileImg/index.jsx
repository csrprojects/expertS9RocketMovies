import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function ProfileImg({ username }) {
    const [profileImage, setProfileImage] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((userData) => {
                setProfileImage(userData.avatar_url);
            })
            .catch((error) => {
                console.error('Erro:', error);
            });
    }, [username]);

    return profileImage ? (
        <img src={profileImage} alt={`Foto ${username}`} />
    ) : null;
}

ProfileImg.propTypes = {
    username: PropTypes.string.isRequired,
};
