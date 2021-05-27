import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledEditProfile from './style'
import Profile from '../Profile';

function EditProfile({ ...rest }) {
    const [showEdit, setShowEdit] = useState(false);
    if (!showEdit) {
        return <Profile
            onEdit={() => setShowEdit(true)}
            showEditBtn={true}
            showCloseIcon={false} />
    }
    return (
        <Profile />
    )
}

EditProfile.propTypes = {

}

export default EditProfile

