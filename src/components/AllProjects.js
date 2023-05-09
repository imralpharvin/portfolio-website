import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BiLinkExternal } from "react-icons/bi"

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
    <main className="projects-list">
      {projects.map(project => {
        const { title, year, description, image, link, tags } = project
        const pathToImage = getImage(image)
        return (
          <div className="project">
            <GatsbyImage image={pathToImage} alt={title} />
            <div>
              <h2 style={{ color: "#19647e" }}>{title}</h2>
              <div className="tags">
                {tags.map(tag => (
                  <div className="tag">{tag}</div>
                ))}
              </div>
            </div>
            <div>{description.description}</div>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="project-external-button">
                View Project <BiLinkExternal />
              </button>
            </a>
          </div>
        )
      })}
    </main>
  )
}

export default AllProjects
