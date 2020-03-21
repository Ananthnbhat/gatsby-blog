import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const LinkStyle = {
  textDecoration: "none",
  color: "white",
  padding: "5px"
}
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
        <a rel="noreferrer noopener" href="https://www.facebook.com/people/Lalitalaxmi-Bhat/100010376881288" style={LinkStyle} target="_blank">Facebook</a>
        <a rel="noreferrer noopener" href="https://twitter.com/Lalitalaxmibhat" style={LinkStyle} target="_blank">Twitter</a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
