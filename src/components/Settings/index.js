import React from 'react'
import PropTypes from 'prop-types'
import StyledSettings, { SettingsItemControl, StyledSettingsGroup, StyledSettingsItem } from './style'
import Paragraph from '../Paragraph'
import Switch from '../Switch'
import Icon from '../Icon'
import Seperator from "../Seperator"
import {ReactComponent as ArrowMenuRight} from "../../assests/icons/arrowMenuRight.svg"
import { Link } from 'react-router-dom'


function Settings({children, ...rest }) {
    return (
<StyledSettings {...rest}>
      <SettingsGroup groupName="Privacy Settings">
        <SettingsItem label="Verification required when adding friends" />
        <SettingsItem
          label="Refer friends according to directory"
          description="The uploaded directory is only used to match the friend list."
        />
        <SettingsItem label="Only can be found by phone number" />
      </SettingsGroup>
      <SettingsGroup groupName="Notification Settings">
        <SettingsItem label="Notification of new messages" />
        <SettingsItem label="Voice and video call alerts" />
        <SettingsItem label="Show notification details" />
        <SettingsItem label="Sound" />
                
        <Link to={'/settings/blocked'} style={{textDecoration:"none", color:"inherit"}} >
            <SettingsItem label="View the list of muted friends" type="menu" />                    
        </Link>

        
      </SettingsGroup>
    </StyledSettings>
    )
}

function SettingsGroup({groupName, children, ...rest}) {
    return (
        <StyledSettingsGroup>
            <Paragraph size="xxlarge" style={{paddingBottom:"24px"}} >
                {groupName}
            </Paragraph>
            {children}
        </StyledSettingsGroup>
    )

}

function SettingsItem({type="switch", label, description, children, ...rest}) {

    return (
        <StyledSettingsItem>
            <SettingsItemControl>
                <Paragraph size="large">{label}</Paragraph>
                {type === "switch"&&<Switch/>}
                {type === "menu" && <Icon icon={ArrowMenuRight} />}            
            </SettingsItemControl>

            {description && (
                <Paragraph type="secondary" style={{ margin: "4px 0" }}>
                    {description}
                </Paragraph>
            )}

            <Seperator style={{ marginTop: "8px", marginBottom: "20px" }} />

        </StyledSettingsItem>
    )
}


Settings.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.any,
}

export default Settings
export {SettingsItem}

