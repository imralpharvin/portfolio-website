import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { div } from "prelude-ls"

const query = graphql`
  {
    allContentfulProject(sort: { fields: order, order: ASC }) {
      nodes {
        title
        year
        tags
        link
        description {
          description
        }
        image {
          title
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        order
      }
    }
  }
`

const AllProjects = () => {
  const data = useStaticQuery(query)
  const projects = data.allContentfulProject.nodes
  return (
    <main className="allProjects">
      {projects.map(project => {
        const { title, year, description, image, link, tags } = project
        return (
          <>
            <div>{title}</div>
            <div>{year}</div>
            <div>{description.description}</div>
            <div>{link}</div>
            {tags.map(tag => (
              <div>{tag}</div>
            ))}
          </>
        )
      })}
    </main>
  )
}

export default AllProjects
