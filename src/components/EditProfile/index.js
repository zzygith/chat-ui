import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledEditProfile, { GroupTitle, SelectGroup } from './style'
import Profile from '../Profile';
import Avatar from '../Avatar';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import face from '../../assests/images/face-male-1.jpg'
import InputText from '../Input/InputText';
import LabelContainer from '../LabelContainer';
import Select from '../Select';
import Option from '../Option';

function EditProfile({ children, ...rest }) {
    const [showEdit, setShowEdit] = useState(false);

    if (!showEdit) {
        return (
            <Profile
                onEdit={() => setShowEdit(true)}
                showEditBtn
                showCloseIcon={false}
            />  
      );
    }
    return (
        <StyledEditProfile {...rest}>
            <Avatar src={face} size="160px" style={{
                gridArea: "1/1/2/2",
                justifySelf: "center",
                marginTop:"12px"
            }} />

            <Button size="52px"
                onClick={() => setShowEdit(false)}
                style={{
                    gridArea: "1/1/3/2",
                    zIndex:"10",
                    justifySelf: "end",
                    alignSelf: "end",
                
                
            }} >
                <FontAwesomeIcon icon={faCheck} />
            </Button>

            <GroupTitle>Personal Information</GroupTitle>

            <InputText label="Name" />

            <LabelContainer label="Address">
                <SelectGroup>
                    <Select type="form">
                        <Option>City</Option>
                    </Select>
                    <Select type="form">
                        <Option>Province</Option>
                    </Select>
                    <Select type="form">
                        <Option>Country</Option>
                    </Select>                    
                </SelectGroup>
            </LabelContainer>
            
            <InputText label="Status" />

            <GroupTitle>Personal Information</GroupTitle>
            <InputText label="Telephone" />
            <InputText label="Email" />
            <InputText label="Personal Website" />
            
        </StyledEditProfile>       
    )
}

EditProfile.propTypes = {

}

export default EditProfile

