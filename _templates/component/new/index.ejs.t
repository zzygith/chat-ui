---
to: src/components/<%= name%>/index.js
---

import React from 'react'
import PropTypes from 'prop-types'
import Styled<%= name%> from './style'

function <%= name%>({ ...rest }) {
    return (
        <Styled<%= name%> {...rest} >
           
        </Styled<%= name%>>
    )
}

<%= name%>.propTypes = {

}

export default <%= name%>

