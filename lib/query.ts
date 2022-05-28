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