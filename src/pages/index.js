import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const LinkStyle = {
  textDecoration: "none"
}
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to Lalitalaxmi's blog.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image filename="shreepad-hegde.png"/>
    </div>
    <Link to="/bimba-gatibimba/" style={LinkStyle}>ಬಿಂಬ - ಗತಿಬಿಂಬ</Link>
  </Layout>
)

export default IndexPage
