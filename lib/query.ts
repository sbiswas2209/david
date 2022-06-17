export const DATA_QUERY=`query MyQuery {
    allClubRoles {
      clubName
      startDate
      endDate
      role
      link
    }
    allProducts {
      title
    }
    allProjects {
      projectName
      description(markdown: true)
      endDate
      projectLink
      stack
      startDate
    }
    allRoles {
      companyName
      companyWebsite
      companyRole
      endDate
      startDate
    }
    allSkills {
      skillName
    }
    contactDetail {
      email
      id
      phone
      linkedin
      instagram
      github
      name
      resume {
        url
        filename
        mimeType
      }
    }
  }
  `;

  export const BLOG_DATA_QUERY = `query MyQuery {
    allBlogs {
      contentData {
        ... on BlogContentRecord {
          id
          content {
            blocks
            links
            value
          }
        }
        ... on BlogImageRecord {
          id
          image {
            mimeType
            title
            url
            height
            width
          }
        }
        ... on BlogVideoRecord {
          id
          video {
            url
            mimeType
            filename
          }
        }
      }
      _updatedAt
      createdAt
      id
      landingImage {
        alt
        title
        url
      }
      publishedOn
      slug
      title
      updatedAt
    }
  }
  `;

  export const BLOG_QUERY_BY_SLUG = (slug) => `{
    blog(filter: {slug: {eq: "${slug}"}}) {
      slug
      title
      publishedOn
      landingImage {
        alt
        url
        title
      }
      updatedAt
      contentData {
        ... on BlogContentRecord {
          id
          content {
            blocks
            links
            value
          }
        }
        ... on BlogImageRecord {
          id
          image {
            alt
            height
            width
            title
            url
          }
        }
        ... on BlogVideoRecord {
          id
          createdAt
          updatedAt
          video {
            title
            url
            mimeType
          }
        }
      }
    }
  }
  `;