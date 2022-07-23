import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/solid";
import { UploadIcon } from "@heroicons/react/outline";

const OtherDetails = () => {
  const id = localStorage.getItem("id");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);

  const [publications, setPublications] = useState({
    totalPapers: "",
    referredJournals: "",
    sciIndexedJournal: "",
    internationalConferences: "",
    nationalConferences: "",
    bookChapters: "",
    sciIndexJournalOutsidePhd: "",
    books: "",
    patents: "",
  });

  const [researchExp, setResearchExp] = useState([
    {
      duration: "",
      organisation: "",
      area: "",
    },
  ]);

  const [industrialExp, setIndustrialExp] = useState([
    {
      organisation: "",
      designation: "",
      period: "",
      natureOfWork: "",
    },
  ]);

  const [administrativeExp, setAdministrativeExp] = useState([
    {
      organisation: "",
      designation: "",
      period: "",
      natureOfWork: "",
    },
  ]);

  const [coursesTaught, setCoursesTaught] = useState([
    {
      title: "",
      level: "",
      noOfTimes: "",
      developedByYou: "",
    },
  ]);

  const [thesis, setThesis] = useState({
    bachelorsLvl: "",
    mastersLvl: "",
    phdCo: "",
    phdSingle: "",
  });

  const [sponsoredProjects, setSponsoredProjects] = useState([
    {
      period: "",
      organisation: "",
      title: "",
      grantAmount: "",
      coInvestigators: "",
      status: "",
    },
  ]);

  const [consultancy, setConsultancy] = useState([
    {
      period: "",
      organisation: "",
      title: "",
      grantAmount: "",
      coInvestigators: "",
      status: "",
    },
  ]);

  const [refJournal, setRefJournal] = useState([
    {
      author: "",
      year: "",
      title: "",
      referenceOfJournal: "",
      impactFactor: "",
    },
  ]);

  const [sciIndexJournal, setSciIndexJournal] = useState([
    {
      author: "",
      year: "",
      title: "",
      referenceOfJournal: "",
      impactFactor: "",
    },
  ]);

  const [nationalConferences, setNationalConferences] = useState([
    {
      author: "",
      year: "",
      title: "",
      nameAndPlace: "",
      presentedOrPublished: "",
    },
  ]);

  const [internationalConferences, setInternationalConferences] = useState([
    {
      author: "",
      year: "",
      title: "",
      nameAndPlace: "",
      presentedOrPublished: "",
    },
  ]);

  const [books, setBooks] = useState([
    {
      name: "",
      year: "",
      title: "",
      publisher: "",
      coAuthor: "",
    },
  ]);

  const [examsCleared, setExamsCleared] = useState({
    net: "",
    gate: "",
    csirOrjrf: "",
    other1: "",
    other2: "",
    other3: "",
  });

  const [patent, setPatent] = useState([
    {
      filedNational: "",
      filedInternational: "",
      awardedNational: "",
      awardedIntenational: "",
    },
  ]);

  const [appendix7, setAppendix7] = useState("");
  const [appendix8, setAppendix8] = useState("");
  const [appendix9, setAppendix9] = useState("");
  const [appendix10, setAppendix10] = useState("");
  const [appendix11, setAppendix11] = useState("");
  const [appendix12, setAppendix12] = useState("");
  const [appendix13, setAppendix13] = useState("");
  const [appendix14, setAppendix14] = useState("");
  const [appendix15, setAppendix15] = useState("");
  const [appendix16, setAppendix16] = useState("");
  const [appendix17, setAppendix17] = useState("");
  const [appendix18, setAppendix18] = useState("");
  const [punishmentClg, setPunishmentClg] = useState("");
  const [punishmentCourt, setPunishmentCourt] = useState("");
  const [mentalHealth, setmentalHealth] = useState("");
  const [courtCases, setCourtCases] = useState("");

  const handleResearchExpChange = (index, e) => {
    let data = [...researchExp];
    data[index][e.target.name] = e.target.value;
    setResearchExp(data);
  };

  const addResearchExp = () => {
    let newData = {
      duration: "",
      organisation: "",
      area: "",
    };
    setResearchExp([...researchExp, newData]);
  };

  const removeResearchExp = (index) => {
    let data = [...researchExp];
    data.splice(index, 1);
    setResearchExp(data);
  };

  const handleIndustrialExpChange = (index, e) => {
    let data = [...industrialExp];
    data[index][e.target.name] = e.target.value;
    setIndustrialExp(data);
  };

  const addIndustrialExp = () => {
    let newIndustrialExp = {
      organisation: "",
      designation: "",
      period: "",
      natureOfWork: "",
    };
    setIndustrialExp([...industrialExp, newIndustrialExp]);
  };

  const removeIndustrialExp = (index) => {
    let data = [...industrialExp];
    data.splice(index, 1);
    setIndustrialExp(data);
  };

  const handleAdministrativeExpChange = (index, e) => {
    let data = [...administrativeExp];
    data[index][e.target.name] = e.target.value;
    setAdministrativeExp(data);
  };

  const addAdministrativeExp = () => {
    let newData = {
      organisation: "",
      designation: "",
      period: "",
      natureOfWork: "",
    };
    setAdministrativeExp([...administrativeExp, newData]);
  };

  const removeAdministrativeExp = (index) => {
    let data = [...administrativeExp];
    data.splice(index, 1);
    setAdministrativeExp(data);
  };

  const handleCoursesTaughtChange = (index, e) => {
    let data = [...coursesTaught];
    data[index][e.target.name] = e.target.value;
    setCoursesTaught(data);
  };

  const addCoursesTaught = () => {
    let newData = {
      title: "",
      level: "",
      noOfTimes: "",
      developedByYou: "",
    };
    setCoursesTaught([...coursesTaught, newData]);
  };

  const removeCoursesTaught = (index) => {
    let data = [...coursesTaught];
    data.splice(index, 1);
    setCoursesTaught(data);
  };

  const handleProjectsChange = (index, e) => {
    let data = [...sponsoredProjects];
    data[index][e.target.name] = e.target.value;
    setSponsoredProjects(data);
  };

  const addProjects = () => {
    let newData = {
      period: "",
      organisation: "",
      title: "",
      grantAmount: "",
      coInvestigators: "",
      status: "",
    };
    setSponsoredProjects([...sponsoredProjects, newData]);
  };

  const removeProjects = (index) => {
    let data = [...sponsoredProjects];
    data.splice(index, 1);
    setSponsoredProjects(data);
  };

  const handleConsultancyChange = (index, e) => {
    let data = [...consultancy];
    data[index][e.target.name] = e.target.value;
    setConsultancy(data);
  };

  const addConsultancy = () => {
    let newData = {
      period: "",
      organisation: "",
      title: "",
      grantAmount: "",
      coInvestigators: "",
      status: "",
    };
    setConsultancy([...consultancy, newData]);
  };

  const removeConsultancy = (index) => {
    let data = [...consultancy];
    data.splice(index, 1);
    setConsultancy(data);
  };

  const handleRefJournalChange = (index, e) => {
    let data = [...refJournal];
    data[index][e.target.name] = e.target.value;
    setRefJournal(data);
  };

  const addRefJournal = () => {
    let newData = {
      author: "",
      year: "",
      title: "",
      referenceOfJournal: "",
      impactFactor: "",
    };
    setRefJournal([...refJournal, newData]);
  };

  const removeRefJournal = (index) => {
    let data = [...refJournal];
    data.splice(index, 1);
    setRefJournal(data);
  };

  const handleSciIndexJournal = (index, e) => {
    let data = [...sciIndexJournal];
    data[index][e.target.name] = e.target.value;
    setSciIndexJournal(data);
  };

  const addSciIndexJournal = () => {
    let newData = {
      author: "",
      year: "",
      title: "",
      referenceOfJournal: "",
      impactFactor: "",
    };
    setSciIndexJournal([...sciIndexJournal, newData]);
  };
  const removeSciIndexJournal = (index) => {
    let data = [...sciIndexJournal];
    data.splice(index, 1);
    setSciIndexJournal(data);
  };

  const handleNationalConferences = (index, e) => {
    let data = [...nationalConferences];
    data[index][e.target.name] = e.target.value;
    setNationalConferences(data);
  };

  const addNationalConferences = () => {
    let newData = {
      author: "",
      year: "",
      title: "",
      nameAndPlace: "",
      presentedOrPublished: "",
    };
    setNationalConferences([...nationalConferences, newData]);
  };
  const removeNationalConferences = (index) => {
    let data = [...nationalConferences];
    data.splice(index, 1);
    setNationalConferences(data);
  };

  const handleInterationalConferences = (index, e) => {
    let data = [...internationalConferences];
    data[index][e.target.name] = e.target.value;
    setInternationalConferences(data);
  };

  const addInterationalConferences = () => {
    let newData = {
      author: "",
      year: "",
      title: "",
      nameAndPlace: "",
      presentedOrPublished: "",
    };
    setInternationalConferences([...internationalConferences, newData]);
  };
  const removeInterationalConferences = (index) => {
    let data = [...internationalConferences];
    data.splice(index, 1);
    setInternationalConferences(data);
  };

  const handleBooks = (index, e) => {
    let data = [...books];
    data[index][e.target.name] = e.target.value;
    setBooks(data);
  };

  const addBooks = () => {
    let newData = {
      name: "",
      year: "",
      title: "",
      publisher: "",
      coAuthor: "",
    };
    setBooks([...books, newData]);
  };
  const removeBooks = (index) => {
    let data = [...books];
    data.splice(index, 1);
    setBooks(data);
  };

  const handlePatents = (index, e) => {
    let data = [...patent];
    data[index][e.target.name] = e.target.value;
    setPatent(data);
  };

  const addPatents = () => {
    let newData = {
      filedNational: "",
      filedInternational: "",
      awardedNational: "",
      awardedIntenational: "",
    };
    setPatent([...patent, newData]);
  };
  const removePatents = (index) => {
    let data = [...patent];
    data.splice(index, 1);
    setPatent(data);
  };

  const uploadA7 = (files) => {
    const formData = new FormData();
    formData.append("file", appendix7);
    formData.append("upload_preset", "rivjkqek");

    axios
      .post("https://api.cloudinary.com/v1_1/saahildev/image/upload", formData)
      .then((response) => {
        setAppendix7(response.data.url);
      });
  };
  const uploadA8 = (files) => {
    const formData = new FormData();
    formData.append("file", appendix8);
    formData.append("upload_preset", "rivjkqek");

    axios
      .post("https://api.cloudinary.com/v1_1/saahildev/image/upload", formData)
      .then((response) => {
        setAppendix8(response.data.url);
      });
  };
  const uploadA9 = (files) => {
    const formData = new FormData();
    formData.append("file", appendix9);
    formData.append("upload_preset", "rivjkqek");

    axios
      .post("https://api.cloudinary.com/v1_1/saahildev/image/upload", formData)
      .then((response) => {
        setAppendix9(response.data.url);
      });
  };
  const uploadA10 = (files) => {
    const formData = new FormData();
    formData.append("file", appendix10);
    formData.append("upload_preset", "rivjkqek");

    axios
      .post("https://api.cloudinary.com/v1_1/saahildev/image/upload", formData)
      .then((response) => {
        setAppendix10(response.data.url);
      });
  };
  const uploadA11 = (files) => {
    const formData = new FormData();
    formData.append("file", appendix11);
    formData.append("upload_preset", "rivjkqek");

    axios
      .post("https://api.cloudinary.com/v1_1/saahildev/image/upload", formData)
      .then((response) => {
        setAppendix11(response.data.url);
      });
  };
  const uploadA12 = (files) => {
    const formData = new FormData();
    formData.append("file", appendix12);
    formData.append("upload_preset", "rivjkqek");

    axios
      .post("https://api.cloudinary.com/v1_1/saahildev/image/upload", formData)
      .then((response) => {
        setAppendix12(response.data.url);
      });
  };
  const uploadA13 = (files) => {
    const formData = new FormData();
    formData.append("file", appendix13);
    formData.append("upload_preset", "rivjkqek");

    axios
      .post("https://api.cloudinary.com/v1_1/saahildev/image/upload", formData)
      .then((response) => {
        setAppendix13(response.data.url);
      });
  };

  const uploadA14 = (files) => {
    const formData = new FormData();
    formData.append("file", appendix14);
    formData.append("upload_preset", "rivjkqek");

    axios
      .post("https://api.cloudinary.com/v1_1/saahildev/image/upload", formData)
      .then((response) => {
        setAppendix14(response.data.url);
      });
  };

  const uploadA15 = (files) => {
    const formData = new FormData();
    formData.append("file", appendix15);
    formData.append("upload_preset", "rivjkqek");

    axios
      .post("https://api.cloudinary.com/v1_1/saahildev/image/upload", formData)
      .then((response) => {
        setAppendix15(response.data.url);
      });
  };

  const uploadA16 = (files) => {
    const formData = new FormData();
    formData.append("file", appendix16);
    formData.append("upload_preset", "rivjkqek");

    axios
      .post("https://api.cloudinary.com/v1_1/saahildev/image/upload", formData)
      .then((response) => {
        setAppendix16(response.data.url);
      });
  };

  const uploadA17 = (files) => {
    const formData = new FormData();
    formData.append("file", appendix17);
    formData.append("upload_preset", "rivjkqek");

    axios
      .post("https://api.cloudinary.com/v1_1/saahildev/image/upload", formData)
      .then((response) => {
        setAppendix17(response.data.url);
      });
  };

  const uploadA18 = (files) => {
    const formData = new FormData();
    formData.append("file", appendix18);
    formData.append("upload_preset", "rivjkqek");

    axios
      .post("https://api.cloudinary.com/v1_1/saahildev/image/upload", formData)
      .then((response) => {
        setAppendix18(response.data.url);
      });
  };

  useEffect(() => {
    const userFormData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const { data } = await axios.get(`/api/form/forminfo/${id}`, config);
        if (data.user.publications) setPublications(data.user.publications);
        if (data.user.researchExp) setResearchExp(data.user.researchExp);
        if (data.user.industrialExp) setIndustrialExp(data.user.industrialExp);
        if (data.user.administrativeExp)
          setAdministrativeExp(data.user.administrativeExp);
        if (data.user.coursesTaught) setCoursesTaught(data.user.coursesTaught);
        if (data.user.thesis) setThesis(data.user.thesis);
        if (data.user.sponsoredProjects)
          setSponsoredProjects(data.user.sponsoredProjects);
        if (data.user.consultancy) setConsultancy(data.user.consultancy);
        if (data.user.refJournal) setRefJournal(data.user.refJournal);
        if (data.user.sciIndexJournal)
          setSciIndexJournal(data.user.sciIndexJournal);
        if (data.user.nationalConferences)
          setNationalConferences(data.user.nationalConferences);
        if (data.user.internationalConferences)
          setInternationalConferences(data.user.internationalConferences);
        if (data.user.books) setBooks(data.user.books);
        if (data.user.examsCleared) setExamsCleared(data.user.examsCleared);
        if (data.user.patent) setPatent(data.user.patent);
        if (data.user.punishmentClg) setPunishmentClg(data.user.punishmentClg);
        if (data.user.punishmentCourt)
          setPunishmentCourt(data.user.punishmentCourt);
        if (data.user.mentalHealth) setmentalHealth(data.user.mentalHealth);
        if (data.user.courtCases) setCourtCases(data.user.courtCases);
        if (data.user.appendix7) setAppendix7(data.user.appendix7);
        if (data.user.appendix8) setAppendix8(data.user.appendix8);
        if (data.user.appendix9) setAppendix9(data.user.appendix9);
        if (data.user.appendix10) setAppendix10(data.user.appendix10);
        if (data.user.appendix11) setAppendix11(data.user.appendix11);
        if (data.user.appendix12) setAppendix12(data.user.appendix12);
        if (data.user.appendix13) setAppendix13(data.user.appendix13);
        if (data.user.appendix14) setAppendix14(data.user.appendix14);
        if (data.user.appendix15) setAppendix15(data.user.appendix15);
        if (data.user.appendix16) setAppendix16(data.user.appendix16);
        if (data.user.appendix17) setAppendix17(data.user.appendix17);
        if (data.user.appendix18) setAppendix18(data.user.appendix18);
      } catch (error) {
        console.log(error);
      }
    };
    userFormData();
  }, []);

  const formHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(
        `/api/form/forminfo/${id}`,
        {
          publications,
          researchExp,
          industrialExp,
          administrativeExp,
          coursesTaught,
          thesis,
          sponsoredProjects,
          consultancy,
          refJournal,
          sciIndexJournal,
          nationalConferences,
          internationalConferences,
          books,
          examsCleared,
          patent,
          appendix7,
          appendix8,
          appendix9,
          appendix10,
          appendix11,
          appendix12,
          appendix13,
          appendix14,
          appendix15,
          appendix16,
          appendix17,
          appendix18,
          punishmentClg,
          punishmentCourt,
          mentalHealth,
          courtCases,
        },
        config
      );
      setSuccess("Form Updated");
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError("");
        setSuccess("");
      }, 5000);
    }
  };

  return (
    <>
      {success ? (
        <div className="alert alert-success shadow-sm w-11/12 sm:w-1/2 m-auto">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{success}</span>
          </div>
        </div>
      ) : (
        <></>
      )}
      <form
        onSubmit={formHandler}
        className="flex w-full my-6 p-4 border-2 border-gray-600 font-sans  lg:w-full"
      >
        <div className="flex flex-col p-3 w-full">
          <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
            Miscellaneous
          </h3>
          {/* <div className="flex justify-center">
            <div className="alert alert-warning shadow-sm rounded-none w-1/5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>Enter 3 References !</span>
              </div>
            </div>
          </div> */}
          {error && (
            <div className="alert alert-error shadow-sm my-2 text-sm h-6">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}
          <div className="flex justify-center w-full m-auto mb-6 p-4 font-sans ">
            <div className="flex flex-col  p-3">
              <h3 className="text-center p-3 text-2xl font-medium text-gray-700 mb-5 ">
                Publications
              </h3>
              <div className="mb-4 relative group grid place-content-center place-items-center m-auto grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 ">
                <div className="w-40">
                  <label className="text-sm font-light">
                    Total Number of papers
                  </label>
                  <input
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="number"
                    required
                    name="totalPapers"
                    autoComplete="true"
                    value={publications.totalPapers}
                    onChange={(e) =>
                      setPublications({
                        ...publications,
                        totalPapers: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">
                    Referred Journals
                  </label>
                  <input
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="number"
                    required
                    name="ReferredJournals"
                    autoComplete="true"
                    value={publications.referredJournals}
                    onChange={(e) =>
                      setPublications({
                        ...publications,
                        referredJournals: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">
                    SCI Indexed Journals
                  </label>
                  <input
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="number"
                    required
                    name="sciIndexedJournal"
                    autoComplete="true"
                    value={publications.sciIndexedJournal}
                    onChange={(e) =>
                      setPublications({
                        ...publications,
                        sciIndexedJournal: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">
                    National Conferences
                  </label>
                  <input
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="number"
                    required
                    name="nationalConferences"
                    autoComplete="true"
                    value={publications.nationalConferences}
                    onChange={(e) =>
                      setPublications({
                        ...publications,
                        nationalConferences: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">
                    International Conferences
                  </label>
                  <input
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="number"
                    required
                    name="internationalConferences"
                    autoComplete="true"
                    value={publications.internationalConferences}
                    onChange={(e) =>
                      setPublications({
                        ...publications,
                        internationalConferences: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-46">
                  <label className="text-sm font-light">
                    SCI Indexed journal(outside phd)
                  </label>
                  <input
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="number"
                    required
                    name="sciIndexJournalOutsidePhd"
                    autoComplete="true"
                    value={publications.sciIndexJournalOutsidePhd}
                    onChange={(e) =>
                      setPublications({
                        ...publications,
                        sciIndexJournalOutsidePhd: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">Book Chapters</label>
                  <input
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="number"
                    required
                    name="bookChapters"
                    autoComplete="true"
                    value={publications.bookChapters}
                    onChange={(e) =>
                      setPublications({
                        ...publications,
                        bookChapters: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">Books</label>
                  <input
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="number"
                    required
                    name="books"
                    autoComplete="true"
                    value={publications.books}
                    onChange={(e) =>
                      setPublications({
                        ...publications,
                        books: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">Patents</label>
                  <input
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="number"
                    required
                    name="patents"
                    autoComplete="true"
                    value={publications.patents}
                    onChange={(e) =>
                      setPublications({
                        ...publications,
                        patents: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-3/4 m-auto items-center">
            <div>
              <h2 className="text-lg">Publications</h2>
              <h2 className="font-light">
                (enclose reprints of 05 best papers as Appendix 7)
              </h2>
            </div>
            <div className="flex ">
              <input
                className="form-control
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mr-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
                type="file"
                required
                autoComplete="true"
                onChange={(e) => setAppendix7(e.target.files[0])}
              />
              <button
                type="button"
                onClick={uploadA7}
                className="btn bg-blue-800 hover:bg-blue-700 text-white px-6 border-none ml-3"
              >
                <UploadIcon className="h-4" />
              </button>
              {appendix7 && (
                <>
                  <a href={appendix7}>View</a>
                </>
              )}
            </div>
          </div>
          {/* divider for publications */}
          <div className="divider"></div>
          {/* start of research exp */}
          <div className="flex justify-center w-full m-auto my-6 p-4 font-sans ">
            <div className="flex flex-col p-3">
              <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
                Research Experience
              </h3>
              {researchExp.map((input, index) => {
                return (
                  <div
                    key={index}
                    className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-flow-col  gap-4 "
                  >
                    <div className="w-56 lg:w-40 p-2 xl:w-56">
                      <label className="text-sm font-light">Duration</label>
                      <input
                        className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                        type="text"
                        required
                        name="duration"
                        autoComplete="true"
                        placeholder="Enter duration"
                        value={input.duration}
                        onChange={(e) => handleResearchExpChange(index, e)}
                      />
                    </div>
                    <div className="w-56 lg:w-40 p-2 xl:w-56">
                      <label className="text-sm font-light">Organization</label>
                      <input
                        className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                        type="text"
                        required
                        name="organisation"
                        autoComplete="true"
                        placeholder="Enter organisation"
                        value={input.organisation}
                        onChange={(e) => handleResearchExpChange(index, e)}
                      />
                    </div>

                    <div className="w-56 lg:w-40 p-2 xl:w-56">
                      <label className="text-sm font-light">
                        Area of research
                      </label>
                      <input
                        className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                        type="text"
                        required
                        name="area"
                        autoComplete="true"
                        placeholder="Enter area"
                        value={input.area}
                        onChange={(e) => handleResearchExpChange(index, e)}
                      />
                    </div>

                    {researchExp.length > 1 ? (
                      <TrashIcon
                        className="h-8 mt-5 mx-4 text-red-600"
                        onClick={() => removeResearchExp(index)}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}

              <PlusCircleIcon
                className="h-12 p-2 mx-4 text-[#020493] mt-1"
                onClick={addResearchExp}
              />
            </div>
          </div>

          <div className="divider"></div>
          {/* end for research exp */}
          {/* start of industrial exp*/}
          <div className="flex justify-center w-full m-auto my-6 p-4 font-sans ">
            <div className="flex flex-col p-3">
              <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
                Industrial Experience
              </h3>
              {industrialExp.map((input, index) => (
                <div
                  key={index}
                  className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-flow-col  gap-4 "
                >
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Period</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="period"
                      autoComplete="true"
                      placeholder="Enter period"
                      value={input.period}
                      onChange={(e) => handleIndustrialExpChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Organization</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="organisation"
                      autoComplete="true"
                      placeholder="Enter organisation"
                      value={input.organisation}
                      onChange={(e) => handleIndustrialExpChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Designation</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="designation"
                      autoComplete="true"
                      placeholder="Enter designation"
                      value={input.designation}
                      onChange={(e) => handleIndustrialExpChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Nature of Work</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="natureOfWork"
                      autoComplete="true"
                      placeholder="Enter nature of work"
                      value={input.natureOfWork}
                      onChange={(e) => handleIndustrialExpChange(index, e)}
                    />
                  </div>

                  {industrialExp.length > 1 ? (
                    <TrashIcon
                      className="h-8 mt-5 mx-4 text-red-600"
                      onClick={() => removeIndustrialExp(index)}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
              <PlusCircleIcon
                className="h-12 p-2 mx-4 text-[#020493] mt-1"
                onClick={addIndustrialExp}
              />
            </div>
          </div>
          <div className="divider"></div>
          {/* end of industrial exp*/}
          {/* start of administrativeExp */}
          <div className="flex justify-center w-full m-auto my-6 p-4 font-sans ">
            <div className="flex flex-col p-3">
              <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
                Administrative Experience
              </h3>
              {administrativeExp.map((input, index) => (
                <div
                  key={index}
                  className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-flow-col  gap-4 "
                >
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Period</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="period"
                      autoComplete="true"
                      placeholder="Enter period"
                      value={input.period}
                      onChange={(e) => handleAdministrativeExpChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Organization</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="organisation"
                      autoComplete="true"
                      placeholder="Enter organisation"
                      value={input.organisation}
                      onChange={(e) => handleAdministrativeExpChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Designation</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="designation"
                      autoComplete="true"
                      placeholder="Enter designation"
                      value={input.designation}
                      onChange={(e) => handleAdministrativeExpChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Nature of Work</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="natureOfWork"
                      autoComplete="true"
                      placeholder="Enter nature of work"
                      value={input.natureOfWork}
                      onChange={(e) => handleAdministrativeExpChange(index, e)}
                    />
                  </div>

                  {administrativeExp.length > 1 ? (
                    <TrashIcon
                      className="h-8 mt-5 mx-4 text-red-600"
                      onClick={() => removeAdministrativeExp(index)}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
              <PlusCircleIcon
                className="h-12 p-2 mx-4 text-[#020493] mt-1"
                onClick={addAdministrativeExp}
              />
            </div>
          </div>
          <div className="divider"></div>
          {/* end of administrativeExp */}
          {/* start of courses taught */}
          <div className="flex justify-center w-full m-auto my-6 p-4 font-sans ">
            <div className="flex flex-col p-3">
              <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
                Courses Taught
              </h3>
              {coursesTaught.map((input, index) => (
                <div
                  key={index}
                  className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-flow-col  gap-4 "
                >
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Title</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="title"
                      autoComplete="true"
                      placeholder="Enter title"
                      value={input.title}
                      onChange={(e) => handleCoursesTaughtChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Level(UG/PG)</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="level"
                      autoComplete="true"
                      placeholder="Enter level"
                      value={input.level}
                      onChange={(e) => handleCoursesTaughtChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">No of Times</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="noOfTimes"
                      autoComplete="true"
                      placeholder="Enter no of times"
                      value={input.noOfTimes}
                      onChange={(e) => handleCoursesTaughtChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">
                      Developed By You ?
                    </label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="developedByYou"
                      autoComplete="true"
                      placeholder="Was it developed by you ?"
                      value={input.developedByYou}
                      onChange={(e) => handleCoursesTaughtChange(index, e)}
                    />
                  </div>

                  {coursesTaught.length > 1 ? (
                    <TrashIcon
                      className="h-8 mt-5 mx-4 text-red-600"
                      onClick={() => removeCoursesTaught(index)}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
              <PlusCircleIcon
                className="h-12 p-2 mx-4 text-[#020493] mt-1"
                onClick={addCoursesTaught}
              />
            </div>
          </div>
          <div className="divider"></div>
          {/* end of courses taught */}
          {/* start of thesis */}
          <div className="flex justify-center w-full m-auto mb-6 p-4 font-sans ">
            <div className="flex flex-col  p-3">
              <h3 className="text-center p-3 text-2xl font-medium text-gray-700 mb-5 ">
                Thesis
              </h3>
              <div className="mb-4 relative group grid place-content-center place-items-center m-auto grid-cols-1 lg:grid-cols-4 gap-4 ">
                <div className="w-40">
                  <label className="text-sm font-light">Bachelors level</label>
                  <input
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="number"
                    required
                    name="bachelorsLvl"
                    autoComplete="true"
                    value={thesis.bachelorsLvl}
                    onChange={(e) =>
                      setThesis({
                        ...thesis,
                        bachelorsLvl: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">Masters level</label>
                  <input
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="number"
                    required
                    name="mastersLvl"
                    autoComplete="true"
                    value={thesis.mastersLvl}
                    onChange={(e) =>
                      setThesis({
                        ...thesis,
                        mastersLvl: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">
                    Phd (Co-supervision)
                  </label>
                  <input
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="number"
                    required
                    name="phdCo"
                    autoComplete="true"
                    value={thesis.phdCo}
                    onChange={(e) =>
                      setThesis({
                        ...thesis,
                        phdCo: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">Phd (Single)</label>
                  <input
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="number"
                    required
                    name="phdSingle"
                    autoComplete="true"
                    value={thesis.phdSingle}
                    onChange={(e) =>
                      setThesis({
                        ...thesis,
                        phdSingle: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          {/* end of thesis */}
          {/* start of sponsored projects */}
          <div className="flex justify-center w-full m-auto my-6 p-4 font-sans ">
            <div className="flex flex-col p-3">
              <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
                Sponsored Projects
              </h3>
              {sponsoredProjects.map((input, index) => (
                <div
                  key={index}
                  className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-cols-4 lg:w-full  gap-4 "
                >
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Period</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="period"
                      autoComplete="true"
                      placeholder="Enter period"
                      value={input.period}
                      onChange={(e) => handleProjectsChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Organization</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="organisation"
                      autoComplete="true"
                      placeholder="Enter organisation"
                      value={input.organisation}
                      onChange={(e) => handleProjectsChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Title</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="title"
                      autoComplete="true"
                      placeholder="Enter title"
                      value={input.title}
                      onChange={(e) => handleProjectsChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Grant Amount</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="grantAmount"
                      autoComplete="true"
                      placeholder="Enter Grant amount"
                      value={input.grantAmount}
                      onChange={(e) => handleProjectsChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">
                      Co-Investigators
                    </label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="coInvestigators"
                      autoComplete="true"
                      placeholder="Enter coInvestigators"
                      value={input.coInvestigators}
                      onChange={(e) => handleProjectsChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">
                      Status(completed/ongoing)
                    </label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="status"
                      autoComplete="true"
                      placeholder="Enter status"
                      value={input.status}
                      onChange={(e) => handleProjectsChange(index, e)}
                    />
                  </div>
                  {sponsoredProjects.length > 1 ? (
                    <TrashIcon
                      className="h-8 mt-5 mx-4 text-red-600"
                      onClick={() => removeProjects(index)}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
              <PlusCircleIcon
                className="h-12 p-2 mx-4 text-[#020493] mt-1"
                onClick={addProjects}
              />
            </div>
          </div>
          <div className="divider"></div>
          {/* end of sponsored projects */}
          {/* start of consultancy */}
          <div className="flex justify-center w-full m-auto my-6 p-4 font-sans ">
            <div className="flex flex-col p-3">
              <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
                Consultancy
              </h3>
              {consultancy.map((input, index) => (
                <div
                  key={index}
                  className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-cols-4 lg:w-full  gap-4 "
                >
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Period</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="period"
                      autoComplete="true"
                      placeholder="Enter period"
                      value={input.period}
                      onChange={(e) => handleConsultancyChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Organization</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="organisation"
                      autoComplete="true"
                      placeholder="Enter organisation"
                      value={input.organisation}
                      onChange={(e) => handleConsultancyChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Title</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="title"
                      autoComplete="true"
                      placeholder="Enter title"
                      value={input.title}
                      onChange={(e) => handleConsultancyChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Grant Amount</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="grantAmount"
                      autoComplete="true"
                      placeholder="Enter Grant amount"
                      value={input.grantAmount}
                      onChange={(e) => handleConsultancyChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">
                      Co-Investigators
                    </label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="coInvestigators"
                      autoComplete="true"
                      placeholder="Enter coInvestigators"
                      value={input.coInvestigators}
                      onChange={(e) => handleConsultancyChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">
                      Status (completed/ongoing)
                    </label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="status"
                      autoComplete="true"
                      placeholder="Enter status"
                      value={input.status}
                      onChange={(e) => handleConsultancyChange(index, e)}
                    />
                  </div>
                  {consultancy.length > 1 ? (
                    <TrashIcon
                      className="h-8 mt-5 mx-4 text-red-600"
                      onClick={() => removeConsultancy(index)}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
              <PlusCircleIcon
                className="h-12 p-2 mx-4 text-[#020493] mt-1"
                onClick={addConsultancy}
              />
            </div>
          </div>
          <div className="divider"></div>
          {/* end of consultancy */}
          {/* start of refered journals */}
          <div className="flex justify-center w-full m-auto my-6 p-4 font-sans ">
            <div className="flex flex-col p-3">
              <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
                Papers in Refered Journals
              </h3>
              {refJournal.map((input, index) => (
                <div
                  key={index}
                  className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-cols-4 lg:w-full  gap-4 "
                >
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Author</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="author"
                      autoComplete="true"
                      placeholder="Enter author"
                      value={input.author}
                      onChange={(e) => handleRefJournalChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Year</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="date"
                      required
                      name="year"
                      autoComplete="true"
                      placeholder="Enter year"
                      value={input.year}
                      onChange={(e) => handleRefJournalChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Title</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="title"
                      autoComplete="true"
                      placeholder="Enter title"
                      value={input.title}
                      onChange={(e) => handleRefJournalChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">
                      Reference of Journal
                    </label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="referenceOfJournal"
                      autoComplete="true"
                      placeholder="Enter reference"
                      value={input.referenceOfJournal}
                      onChange={(e) => handleRefJournalChange(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Impact Factor</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="impactFactor"
                      autoComplete="true"
                      placeholder="Enter impactFactor"
                      value={input.impactFactor}
                      onChange={(e) => handleRefJournalChange(index, e)}
                    />
                  </div>
                  {refJournal.length > 1 ? (
                    <TrashIcon
                      className="h-8 mt-5 mx-4 text-red-600"
                      onClick={() => removeRefJournal(index)}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
              <PlusCircleIcon
                className="h-12 p-2 mx-4 text-[#020493] mt-1"
                onClick={addRefJournal}
              />
            </div>
          </div>
          <div className="flex justify-between w-3/4 m-auto items-center">
            <div>
              <h2 className="text-lg">Papers in referred Journals</h2>
              <h2 className="font-light">
                (Please attach a list as Appendix 8 in the format given below)
              </h2>
            </div>
            <div className="flex ">
              <input
                className="form-control
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mr-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
                type="file"
                required
                autoComplete="true"
                onChange={(e) => setAppendix8(e.target.files[0])}
              />
              <button
                type="button"
                onClick={uploadA8}
                className="btn bg-blue-800 hover:bg-blue-700 text-white px-6 border-none ml-3"
              >
                <UploadIcon className="h-4" />
              </button>
              {appendix8 && (
                <>
                  <a href={appendix8}>View</a>
                </>
              )}
            </div>
          </div>
          <div className="divider"></div>
          {/* end of refered journals */}
          {/* start of sci index journal */}
          <div className="flex justify-center w-full m-auto my-6 p-4 font-sans ">
            <div className="flex flex-col p-3">
              <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
                Papers in SCI Indexed Journals
              </h3>
              {sciIndexJournal.map((input, index) => (
                <div
                  key={index}
                  className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-cols-4 lg:w-full  gap-4 "
                >
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Author</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="author"
                      autoComplete="true"
                      placeholder="Enter author"
                      value={input.author}
                      onChange={(e) => handleSciIndexJournal(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Year</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="date"
                      required
                      name="year"
                      autoComplete="true"
                      placeholder="Enter year"
                      value={input.year}
                      onChange={(e) => handleSciIndexJournal(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Title</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="title"
                      autoComplete="true"
                      placeholder="Enter title"
                      value={input.title}
                      onChange={(e) => handleSciIndexJournal(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">
                      Reference of Journal
                    </label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="referenceOfJournal"
                      autoComplete="true"
                      placeholder="Enter reference"
                      value={input.referenceOfJournal}
                      onChange={(e) => handleSciIndexJournal(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Impact Factor</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="impactFactor"
                      autoComplete="true"
                      placeholder="Enter impactFactor"
                      value={input.impactFactor}
                      onChange={(e) => handleSciIndexJournal(index, e)}
                    />
                  </div>
                  {sciIndexJournal.length > 1 ? (
                    <TrashIcon
                      className="h-8 mt-5 mx-4 text-red-600"
                      onClick={() => removeSciIndexJournal(index)}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
              <PlusCircleIcon
                className="h-12 p-2 mx-4 text-[#020493] mt-1"
                onClick={addSciIndexJournal}
              />
            </div>
          </div>
          <div className="flex justify-between w-3/4 m-auto items-center">
            <div>
              <h2 className="text-lg">Papers in SCI Indexed Journals</h2>
              <h2 className="font-light">
                (Please attach a list as Appendix 9 in the format given below)
              </h2>
            </div>
            <div className="flex ">
              <input
                className="form-control
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mr-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
                type="file"
                required
                autoComplete="true"
                onChange={(e) => setAppendix9(e.target.files[0])}
              />
              <button
                type="button"
                onClick={uploadA9}
                className="btn bg-blue-800 hover:bg-blue-700 text-white px-6 border-none ml-3"
              >
                <UploadIcon className="h-4" />
              </button>
              {appendix9 && (
                <>
                  <a href={appendix9}>View</a>
                </>
              )}
            </div>
          </div>
          <div className="divider"></div>
          {/* end of sci index journal */}
          {/* start of national conference */}
          <div className="flex justify-center w-full m-auto my-6 p-4 font-sans ">
            <div className="flex flex-col p-3">
              <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
                National Conferences
              </h3>
              {nationalConferences.map((input, index) => (
                <div
                  key={index}
                  className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-cols-4 lg:w-full  gap-4 "
                >
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Author</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="author"
                      autoComplete="true"
                      placeholder="Enter author"
                      value={input.author}
                      onChange={(e) => handleNationalConferences(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Year</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="date"
                      required
                      name="year"
                      autoComplete="true"
                      placeholder="Enter year"
                      value={input.year}
                      onChange={(e) => handleNationalConferences(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Title</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="title"
                      autoComplete="true"
                      placeholder="Enter title"
                      value={input.title}
                      onChange={(e) => handleNationalConferences(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Name and Place</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="nameAndPlace"
                      autoComplete="true"
                      placeholder="Enter name and place"
                      value={input.nameAndPlace}
                      onChange={(e) => handleNationalConferences(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">
                      Presented/Published/Both
                    </label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="presentedOrPublished"
                      autoComplete="true"
                      placeholder="Presented/Published/Both"
                      value={input.presentedOrPublished}
                      onChange={(e) => handleNationalConferences(index, e)}
                    />
                  </div>
                  {nationalConferences.length > 1 ? (
                    <TrashIcon
                      className="h-8 mt-5 mx-4 text-red-600"
                      onClick={() => removeNationalConferences(index)}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
              <PlusCircleIcon
                className="h-12 p-2 mx-4 text-[#020493] mt-1"
                onClick={addNationalConferences}
              />
            </div>
          </div>
          <div className="flex justify-between w-3/4 m-auto items-center">
            <div>
              <h2 className="text-lg">National conference papers</h2>
              <h2 className="font-light">
                (Please attach a list as Appendix 10 in the format given below)
              </h2>
            </div>
            <div className="flex ">
              <input
                className="form-control
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mr-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
                type="file"
                required
                autoComplete="true"
                onChange={(e) => setAppendix10(e.target.files[0])}
              />
              <button
                type="button"
                onClick={uploadA10}
                className="btn bg-blue-800 hover:bg-blue-700 text-white px-6 border-none ml-3"
              >
                <UploadIcon className="h-4" />
              </button>
              {appendix10 && (
                <>
                  <a href={appendix10}>View</a>
                </>
              )}
            </div>
          </div>
          <div className="divider"></div>
          {/* end of national conference */}
          {/* start of internationalConferences */}
          <div className="flex justify-center w-full m-auto my-6 p-4 font-sans ">
            <div className="flex flex-col p-3">
              <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
                International Conferences
              </h3>
              {internationalConferences.map((input, index) => (
                <div
                  key={index}
                  className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-cols-4 lg:w-full  gap-4 "
                >
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Author</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="author"
                      autoComplete="true"
                      placeholder="Enter author"
                      value={input.author}
                      onChange={(e) => handleInterationalConferences(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Year</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="date"
                      required
                      name="year"
                      autoComplete="true"
                      placeholder="Enter year"
                      value={input.year}
                      onChange={(e) => handleInterationalConferences(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Title</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="title"
                      autoComplete="true"
                      placeholder="Enter title"
                      value={input.title}
                      onChange={(e) => handleInterationalConferences(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Name and Place</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="nameAndPlace"
                      autoComplete="true"
                      placeholder="Enter name and place"
                      value={input.nameAndPlace}
                      onChange={(e) => handleInterationalConferences(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">
                      Presented/Published/Both
                    </label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="presentedOrPublished"
                      autoComplete="true"
                      placeholder="Presented/Published/Both"
                      value={input.presentedOrPublished}
                      onChange={(e) => handleInterationalConferences(index, e)}
                    />
                  </div>
                  {internationalConferences.length > 1 ? (
                    <TrashIcon
                      className="h-8 mt-5 mx-4 text-red-600"
                      onClick={() => removeInterationalConferences(index)}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
              <PlusCircleIcon
                className="h-12 p-2 mx-4 text-[#020493] mt-1"
                onClick={addInterationalConferences}
              />
            </div>
          </div>
          <div className="flex justify-between w-3/4 m-auto items-center">
            <div>
              <h2 className="text-lg">International Conference papers</h2>
              <h2 className="font-light">
                (Please attach a list as Appendix 11)
              </h2>
            </div>
            <div className="flex ">
              <input
                className="form-control
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mr-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
                type="file"
                required
                autoComplete="true"
                onChange={(e) => setAppendix11(e.target.files[0])}
              />
              <button
                type="button"
                onClick={uploadA11}
                className="btn bg-blue-800 hover:bg-blue-700 text-white px-6 border-none ml-3"
              >
                <UploadIcon className="h-4" />
              </button>
              {appendix11 && (
                <>
                  <a href={appendix11}>View</a>
                </>
              )}
            </div>
          </div>
          <div className="divider"></div>
          {/* end of internationalConferences */}
          {/* start of books */}
          <div className="flex justify-center w-full m-auto my-6 p-4 font-sans ">
            <div className="flex flex-col p-3">
              <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
                Books
              </h3>
              {books.map((input, index) => (
                <div
                  key={index}
                  className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-cols-4 lg:w-full  gap-4 "
                >
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Name of Book</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="name"
                      autoComplete="true"
                      placeholder="Enter name"
                      value={input.name}
                      onChange={(e) => handleBooks(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Year</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="date"
                      required
                      name="year"
                      autoComplete="true"
                      placeholder="Enter year"
                      value={input.year}
                      onChange={(e) => handleBooks(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Title</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="title"
                      autoComplete="true"
                      placeholder="Enter title"
                      value={input.title}
                      onChange={(e) => handleBooks(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Publisher</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="publisher"
                      autoComplete="true"
                      placeholder="Enter publisher"
                      value={input.publisher}
                      onChange={(e) => handleBooks(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">Co-Author</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="coAuthor"
                      autoComplete="true"
                      placeholder="name of co-author"
                      value={input.coAuthor}
                      onChange={(e) => handleBooks(index, e)}
                    />
                  </div>
                  {books.length > 1 ? (
                    <TrashIcon
                      className="h-8 mt-5 mx-4 text-red-600"
                      onClick={() => removeBooks(index)}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
              <PlusCircleIcon
                className="h-12 p-2 mx-4 text-[#020493] mt-1"
                onClick={addBooks}
              />
            </div>
          </div>
          <div className="divider"></div>
          {/* end of books */}
          {/* start of exams cleared */}
          <div className="flex justify-center w-full m-auto mb-6 p-4 font-sans ">
            <div className="flex flex-col  p-3">
              <h3 className="text-center p-3 text-2xl font-medium text-gray-700 mb-5 ">
                Higher level exams cleared
              </h3>
              <div className="mb-4 relative group grid place-content-center place-items-center m-auto grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 ">
                <div className="w-40">
                  <label className="text-sm font-light">NET(UGC)</label>
                  <input
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="text"
                    required
                    name="net"
                    autoComplete="true"
                    value={examsCleared.net}
                    onChange={(e) =>
                      setExamsCleared({
                        ...examsCleared,
                        net: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">GATE</label>
                  <input
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="text"
                    required
                    name="gate"
                    autoComplete="true"
                    value={examsCleared.gate}
                    onChange={(e) =>
                      setExamsCleared({
                        ...examsCleared,
                        gate: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">CSIR / UGC JRF</label>
                  <input
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="text"
                    required
                    name="csirOrjrf"
                    autoComplete="true"
                    value={examsCleared.csirOrjrf}
                    onChange={(e) =>
                      setExamsCleared({
                        ...examsCleared,
                        csirOrjrf: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">Other</label>
                  <input
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="text"
                    name="other1"
                    autoComplete="true"
                    value={examsCleared.other1}
                    onChange={(e) =>
                      setExamsCleared({
                        ...examsCleared,
                        other1: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">Other</label>
                  <input
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="text"
                    name="other2"
                    autoComplete="true"
                    value={examsCleared.other2}
                    onChange={(e) =>
                      setExamsCleared({
                        ...examsCleared,
                        other2: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-40">
                  <label className="text-sm font-light">Other</label>
                  <input
                    className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    type="text"
                    name="other3"
                    autoComplete="true"
                    value={examsCleared.other3}
                    onChange={(e) =>
                      setExamsCleared({
                        ...examsCleared,
                        other3: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-3/4 m-auto items-center">
            <div>
              <h2 className="font-light">
                (Attach certificates as Appendix 12)
              </h2>
            </div>
            <div className="flex ">
              <input
                className="form-control
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mr-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
                type="file"
                required
                autoComplete="true"
                onChange={(e) => setAppendix12(e.target.files[0])}
              />
              <button
                type="button"
                onClick={uploadA12}
                className="btn bg-blue-800 hover:bg-blue-700 text-white px-6 border-none ml-3"
              >
                <UploadIcon className="h-4" />
              </button>
              {appendix12 && (
                <>
                  <a href={appendix12}>View</a>
                </>
              )}
            </div>
          </div>
          <div className="divider"></div>
          {/* end of exams cleared */}
          {/* start of patents */}
          <div className="flex justify-center w-full m-auto my-6 p-4 font-sans ">
            <div className="flex flex-col p-3">
              <h3 className="text-center p-3 text-3xl font-medium text-gray-700 mb-5 ">
                Patents
              </h3>
              {patent.map((input, index) => (
                <div
                  key={index}
                  className="w-56 mb-4 relative group grid place-content-center place-items-center m-auto lg:grid-cols-3 lg:w-full  gap-4 "
                >
                  <h2 className="text-lg">Filed</h2>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">National</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="filedNational"
                      autoComplete="true"
                      placeholder="Enter filedNational"
                      value={input.filedNational}
                      onChange={(e) => handlePatents(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">International</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="filedInternational"
                      autoComplete="true"
                      placeholder="Enter filedInternational"
                      value={input.filedInternational}
                      onChange={(e) => handlePatents(index, e)}
                    />
                  </div>
                  <h2 className="text-lg">Awarded/Granted</h2>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">National</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="awardedNational"
                      autoComplete="true"
                      placeholder="Enter awardedNational"
                      value={input.awardedNational}
                      onChange={(e) => handlePatents(index, e)}
                    />
                  </div>
                  <div className="w-56 lg:w-40 p-2 xl:w-56">
                    <label className="text-sm font-light">International</label>
                    <input
                      className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="text"
                      required
                      name="awardedIntenational"
                      autoComplete="true"
                      placeholder="Enter awardedIntenational"
                      value={input.awardedIntenational}
                      onChange={(e) => handlePatents(index, e)}
                    />
                  </div>
                  {patent.length > 1 ? (
                    <TrashIcon
                      className="h-8 mt-5 mx-4 text-red-600"
                      onClick={() => removePatents(index)}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
              <PlusCircleIcon
                className="h-12 p-2 mx-4 text-[#020493] mt-1"
                onClick={addPatents}
              />
            </div>
          </div>
          <div className="divider"></div>
          {/* end of patents */}

          <div className="flex justify-between w-3/4 m-auto items-center">
            <div>
              <h2 className="text-lg">
                Continuing education programme conducted{" "}
              </h2>
              <h2 className="font-light">(please attach as Appendix 13)</h2>
            </div>
            <div className="flex ">
              <input
                className="form-control
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mr-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
                type="file"
                required
                autoComplete="true"
                onChange={(e) => setAppendix13(e.target.files[0])}
              />
              <button
                type="button"
                onClick={uploadA13}
                className="btn bg-blue-800 hover:bg-blue-700 text-white px-6 border-none ml-3"
              >
                <UploadIcon className="h-4" />
              </button>
              {appendix13 && (
                <>
                  <a href={appendix13}>View</a>
                </>
              )}
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between w-3/4 m-auto items-center">
            <div>
              <h2 className="text-lg">
                Short term courses/workshops/seminars etc. organized
              </h2>
              <h2 className="font-light">(please attach as Appendix 14)</h2>
            </div>
            <div className="flex ">
              <input
                className="form-control
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mr-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
                type="file"
                required
                autoComplete="true"
                onChange={(e) => setAppendix14(e.target.files[0])}
              />
              <button
                type="button"
                onClick={uploadA14}
                className="btn bg-blue-800 hover:bg-blue-700 text-white px-6 border-none ml-3"
              >
                <UploadIcon className="h-4" />
              </button>
              {appendix13 && (
                <>
                  <a href={appendix14}>View</a>
                </>
              )}
            </div>
          </div>
          <div className="divider"></div>

          <div className="flex justify-between w-3/4 m-auto items-center">
            <div>
              <h2 className="text-lg">Awards and Recognitions</h2>
              <h2 className="font-light">(please attach as Appendix 15)</h2>
            </div>
            <div className="flex ">
              <input
                className="form-control
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mr-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
                type="file"
                required
                autoComplete="true"
                onChange={(e) => setAppendix15(e.target.files[0])}
              />
              <button
                type="button"
                onClick={uploadA15}
                className="btn bg-blue-800 hover:bg-blue-700 text-white px-6 border-none ml-3"
              >
                <UploadIcon className="h-4" />
              </button>
              {appendix13 && (
                <>
                  <a href={appendix15}>View</a>
                </>
              )}
            </div>
          </div>
          <div className="divider"></div>

          <div className="flex justify-between w-3/4 m-auto items-center">
            <div>
              <h2 className="text-lg">
                Other Academic and corporate activities{" "}
              </h2>
              <h2 className="font-light">(please attach as Appendix 16)</h2>
            </div>
            <div className="flex ">
              <input
                className="form-control
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mr-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
                type="file"
                required
                autoComplete="true"
                onChange={(e) => setAppendix16(e.target.files[0])}
              />
              <button
                type="button"
                onClick={uploadA16}
                className="btn bg-blue-800 hover:bg-blue-700 text-white px-6 border-none ml-3"
              >
                <UploadIcon className="h-4" />
              </button>
              {appendix13 && (
                <>
                  <a href={appendix16}>View</a>
                </>
              )}
            </div>
          </div>
          <div className="divider"></div>

          <div className="flex justify-between w-3/4 m-auto items-center">
            <div>
              <h2 className="text-lg">
                Brief write-up on your teaching and research plan at ABV-IIITM
                Gwalior (max 500 words.)
              </h2>
              <h2 className="font-light">(please attach as Appendix 17)</h2>
            </div>
            <div className="flex ">
              <input
                className="form-control
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mr-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
                type="file"
                required
                autoComplete="true"
                onChange={(e) => setAppendix17(e.target.files[0])}
              />
              <button
                type="button"
                onClick={uploadA17}
                className="btn bg-blue-800 hover:bg-blue-700 text-white px-6 border-none ml-3"
              >
                <UploadIcon className="h-4" />
              </button>
              {appendix13 && (
                <>
                  <a href={appendix17}>View</a>
                </>
              )}
            </div>
          </div>
          <div className="divider"></div>

          <div className="flex justify-between w-3/4 m-auto items-center">
            <div>
              <h2 className="text-lg">
                Have you been punished during your studies at College/
                University?
              </h2>
              <h2 className="font-light"> If so, give details.</h2>
            </div>
            <textarea
              className="form-control min-h-16
                w-1/2
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mr-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
              type="file"
              value={punishmentClg}
              required
              autoComplete="true"
              onChange={(e) => setPunishmentClg(e.target.value)}
            />
          </div>
          <div className="divider"></div>

          <div className="flex justify-between w-3/4 m-auto items-center">
            <div>
              <h2 className="text-lg w-3/4">
                Have you been punished during your services or convicted by
                court of Law?
              </h2>
              <h2 className="font-light"> If so, give details.</h2>
            </div>
            <textarea
              className="form-control min-h-16
                w-3/4
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mr-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
              type="file"
              value={punishmentCourt}
              required
              autoComplete="true"
              onChange={(e) => setPunishmentCourt(e.target.value)}
            />
          </div>
          <div className="divider"></div>

          <div className="flex justify-between w-3/4 m-auto items-center">
            <div>
              <h2 className="text-lg w-3/4">
                Were you at any time declared medically unfit or asked to submit
                your resignation or discharged or dismissed
              </h2>
              <h2 className="font-light"> If so, give details.</h2>
            </div>
            <textarea
              className="form-control min-h-16
                w-3/4
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mr-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
              type="file"
              value={mentalHealth}
              required
              autoComplete="true"
              onChange={(e) => setmentalHealth(e.target.value)}
            />
          </div>
          <div className="divider"></div>

          <div className="flex justify-between w-3/4 m-auto items-center">
            <div>
              <h2 className="text-lg w-3/4">
                Do you have any court cases pending as one of the parties?
              </h2>
              <h2 className="font-light"> If so, give details.</h2>
            </div>
            <textarea
              className="form-control min-h-16
                w-1/2
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mr-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
              type="file"
              value={courtCases}
              required
              autoComplete="true"
              onChange={(e) => setCourtCases(e.target.value)}
            />
          </div>
          <div className="divider"></div>

          <div className="flex justify-between w-3/4 m-auto items-center">
            <div>
              <h2 className="text-lg">
                Any other relevant information you may like to furnish
              </h2>
              <h2 className="font-light">(please attach as Appendix 18)</h2>
            </div>
            <div className="flex ">
              <input
                className="form-control
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mr-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
                type="file"
                required
                autoComplete="true"
                onChange={(e) => setAppendix18(e.target.files[0])}
              />
              <button
                type="button"
                onClick={uploadA18}
                className="btn bg-blue-800 hover:bg-blue-700 text-white px-6 border-none ml-3"
              >
                <UploadIcon className="h-4" />
              </button>
              {appendix13 && (
                <>
                  <a href={appendix18}>View</a>
                </>
              )}
            </div>
          </div>
          <div className="divider"></div>

          <div className="flex justify-center lg:justify-end">
            <button
              type="submit"
              className="btn bg-green-800 w-56 hover:bg-green-700 text-white px-6 border-none "
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default OtherDetails;
