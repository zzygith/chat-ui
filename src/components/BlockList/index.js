import React from 'react'
import PropTypes from 'prop-types'
import StyledBlockList, { BlockedAvatar, BlockedName, ClosableAvatar, CloseIcon, FriendList, SettingsMenu } from './style'
import Icon from '../Icon'
import Text from '../Text'
import { ReactComponent as ArrowMenuLeft } from "../../assests/icons/arrowMenuLeft.svg"
import { ReactComponent as closeCircle } from "../../assests/icons/closeCircle.svg"
import face3 from '../../assests/images/face-male-3.jpg'

function BlockList({ ...rest }) {
    return (
        <StyledBlockList {...rest} >
            <SettingsMenu>
                <Icon icon={ArrowMenuLeft} style={{ cursor: "pointer" }} />
                <Text size="xxlarge">Muted friends</Text>
            </SettingsMenu>

            <FriendList>
                {new Array(8).fill(0).map((_, i) => {
                    return ( <ClosableAvatar key={i}>
                    <BlockedAvatar size="105px" src={face3} />
                    <CloseIcon width={46} height={51} icon={closeCircle} />
                    <BlockedName>qq</BlockedName>
                </ClosableAvatar>)

                })}

            </FriendList>

            <ClosableAvatar>
                <BlockedAvatar size="105px" src={face3} />
                <CloseIcon width={46} height={51} icon={closeCircle} />
                <BlockedName>qq</BlockedName>
            </ClosableAvatar>
        </StyledBlockList>
    )
}

BlockList.propTypes = {

}

export default BlockList

