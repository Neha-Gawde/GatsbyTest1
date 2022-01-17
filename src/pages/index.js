import { Link } from "gatsby";
import React from "react"
import Layout from "../components/Layout";

function IndexPage() {
  return (
    <Layout>
      <h4>About page<Link to="/about">Click here</Link></h4>
      <h4>Blog page<Link to="/blog">Click here</Link></h4>
      <h4>Contact page<Link to="/contact">Click here</Link></h4>
    </Layout>
  )
};

export default IndexPage;