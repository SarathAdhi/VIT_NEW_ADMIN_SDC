import { DEPARTMENT, DESIGNATION, FACULTYROLE, SALUTATION } from "./constants";

export const initialFacultyValues = {
  id: "",
  salutation: SALUTATION[0],
  name: "",
  email: "",
  image: "",
  designation: DESIGNATION[0],
  role: FACULTYROLE[0],
  // department: DEPARTMENT[0],
  school: "",
  educationalDetails: [
    {
      degree: "",
      university: "",
      specialization: "",
      graduatedYear: "",
    },
  ],
  postDoctoralExperience: "",
  researchDetails: {
    specialization: [],
    orcid: "",
    scopus: "",
    googleScholar: "",
    hIndex: 0,
    i10Index: 0,
  },
  ongoingConsultancyProjectDetails: [
    // {
    //   title: "",
    //   fundingAgency: "",
    // },
  ],
  completedConsultancyProjectDetails: [
    // {
    //   title: "",
    //   fundingAgency: "",
    // },
  ],
  ongoingFundedProjectDetails: [
    // {
    //   title: "",
    //   fundingAgency: "",
    // },
  ],
  completedFundedProjectDetails: [
    // {
    //   title: "",
    //   fundingAgency: "",
    // },
  ],
  patentPublishedDetails: [
    // {
    //   title: "",
    //   applicationNumber: "",
    // },
  ],
  patentGrantedDetails: [
    // {
    //   title: "",
    //   applicationNumber: "",
    // },
  ],
  bookPublishedDetails: [
    // {
    //   title: "",
    //   publisher: "",
    //   year: "",
    // },
  ],
  awardDetails: [],
  majorInternationalCollaborationsDetails: [],
  majorIndustryCollaborationsDetails: [],
  editorialExperience: "",
  personalWebsite: "",
};
