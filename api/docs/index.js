module.exports = (user) => {
  return `
  <!DOCTYPE html>
  <html>
  
    <head>
      <meta charset="utf-8"/>
      <title>PDF Result Template</title>
      <style>
  *{
    padding: 0;
    margin: 0;
  }
        .container{
          padding: 20px;
          max-width: 800px;
          margin: auto;
          --tw-border-opacity: 1;
          border-color: rgb(107 114 128 / var(--tw-border-opacity));
          --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
          --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
         /* 16px */
         font-size: 1rem;
          /* 24px */
          line-height: 1.5rem;
          position: relative;
        }
  
        .__left {
    position: absolute;
    right: 0%;
    transform: translateX(-70%);
  }
  .table_container{
    position: relative;
  }
      
        .border {
          border-width: 1px;
          border: 1px solid #eee;
        }
        .p-1 {
          /* 4px */
          padding: 0.25rem;
        }
  
        .my-4 {
          /* 16px */
          margin-top: 1rem;
          /* 16px */
          margin-bottom: 1rem;
        }
  
         .text-lg{
          /* 18px */
          font-size: 1.125rem;
          /* 28px */
          line-height: 1.75rem;
        }
        @media print {
    .new-page {
      page-break-before: always;
    }
  }
      </style>
    </head>
  
    <body>
      <div class="container">
        <span>
          <img src="http://www.iiitm.ac.in/templates/shaper_educon/images/presets/preset1/logo@2x.png" alt="logo" />
        </span>
        <div style="margin:auto; text-align:center; font-size: 16px; margin-bottom:25px; ">
          <div style="margin:auto; text-align:center; font-size: 20px; margin-bottom:5px; text-decoration: underline;">
            Application form for Faculty Position – Summary Document 
          </div>
  Please read the instructions in the advertisement carefully before filling the form. 
  Please provide the following information with application. 
        </div>
        <table class="">
          <tbody class="">
          <tr class="__left" >
            <h3>
              General Information
            </h3>
            <td>
              <img src=${
                user.userInfo.userPPUrl
              } style="width: 100%; max-width: 256px"/>
            </td>
          </tr>
            <tr>
              <td class="border p-1">Adno</td>
              <td class="border p-1">${user.userInfo.adNo}</td>
            </tr>
            <tr class="border p-1">
              <td class="border p-1">Post</td>
              <td class="border p-1">${user.userInfo.post}</td>
            </tr>
            <tr class="border p-1">
              <td class="border p-1">Discipline</td>
              <td class="border p-1">${user.userInfo.discipline}</td>
            </tr>
            <tr class="border p-1">
              <td class="border p-1">Name</td>
              <td class="border p-1">${`${user.userInfo.fname} ${user.userInfo.mname} ${user.userInfo.lname}`}</td>
            </tr>
            <tr class="border p-1">
              <td class="border p-1">Date of Birth</td>
              <td class="border p-1">${user.userInfo.dob}</td>
            </tr>
            <tr class="border p-1">
              <td class="border p-1">Category</td>
              <td class="border p-1">${user.userInfo.category}</td>
            </tr>
            <tr class="border p-1">
              <td class="border p-1">Phone Number</td>
              <td class="border p-1">${user.userInfo.phno}</td>
            </tr>
            <tr class="border p-1">
              <td class="border p-1">Email id</td>
              <td class="border p-1">${user.userInfo.email}</td>
            </tr>
            <tr class="border p-1">
              <td class="border p-1">Marital Status</td>
              <td class="border p-1">${user.userInfo.maritalStatus}</td>
            </tr>
          </tbody>
        </table>
        <div class="p-1">
          <h4>Address</h4>
          <table>
            <tr >
              <td class=" border p-1">Location</td>
              <td class=" border p-1">${user.userInfo.address.loc}</td>
            </tr>
            <tr >
              <td class=" border p-1">Pincode</td>
              <td class=" border p-1">${user.userInfo.address.pin}</td>
            </tr>
          </table>
        </div>
        <div class="p-1">
          <div class="my-4 new-page">
            <h4>
              Academic Qualifications
            </h4>
            <table class="border">
              <thead class="border p-1">
                <tr>
                  <td class="border p-1">Degree/Branch</td>
                  <td class="border p-1">Branch</td>
                  <td class="border p-1">Uni</td>
                  <td class="border p-1">Completion Year</td>
                  <td class="border p-1">Grade</td>
                </tr>
                <tbody>
                ${user.userInfo.academic.map((i) => {
                  return `
                     <tr>
                     <td class="border p-1">${i.degree}</td>
                     <td class="border p-1">${i.branch}</td>
                     <td class="border p-1">${i.university}</td>
                     <td class="border p-1">${i.completionYear}</td>
                     <td class="border p-1">${i.grade}</td>
                     </tr>
                     `;
                })}
                </tbody>
              </thead>
            </table>
          </div>
          <div class="my-4 ">
            <h4>
  
              Teaching Exp
            </h4>
            <table class="border">
              <thead class="border p-1">
                <tr>
                  <td class="border p-1">University</td>
                  <td class="border p-1">Designation</td>
                  <td class="border p-1">Date of Joining</td>
                  <td class="border p-1">Date of Leaving</td>
                  <td class="border p-1">Pay Level</td>
                  <td class="border p-1">Pay in Pay Level</td>
                  <td class="border p-1">GP</td>
                  <td class="border p-1">Reason for Leaving</td>
                </tr>
                <tbody>
                ${user.userInfo.teachingExp.map((i) => {
                  return `
                     <tr>
                     <td class="border p-1">${i.employer}</td>
                     <td class="border p-1">${i.position}</td>
                     <td class="border p-1">${i.dateOfJoining}</td>
                     <td class="border p-1">${i.dateOfLeaving}</td>
                     <td class="border p-1">${i.payLevel}</td>
                     <td class="border p-1">${i.PayInPayLevel}</td>
                     <td class="border p-1">${i.GP}</td>
                     <td class="border p-1">${i.reasonForLeaving}</td>
                     </tr>
                     `;
                })}
                </tbody>
              </thead>
            </table>
          </div>
        </div>
        <!-- break -->
        <div class="p-1 ">
          <div class="my-4  ">
            <h4>
              Industrial Exp
            </h4>
            <table class="border">
              <thead class="border p-1">
                <tr>
                  <td class="border p-1">Uni</td>
                  <td class="border p-1">Designation</td>
                  <td class="border p-1">Period</td>
                  <td class="border p-1">Nature of Work</td>
                </tr>
                <tbody>
                ${user.userInfo.industrialExp.map((i) => {
                  return `
                     <tr>
                     <td class="border p-1">${i.organisation}</td>
                     <td class="border p-1">${i.designation}</td>
                     <td class="border p-1">${i.period}</td>
                     <td class="border p-1">${i.natureOfWork}</td>
                     </tr>
                     `;
                })}
                </tbody>
              </thead>
            </table>
          </div>
          <div class="my-4 ">
            <h4>
              Consultancy
            </h4>
            <table class="border">
              <thead class="border p-1">
                <tr>
                  <td class="border p-1">University</td>
                  <td class="border p-1">Title</td>
                  <td class="border p-1">Period</td>
                  <td class="border p-1">Grant Amount</td>
                  <td class="border p-1">Co-Investigators</td>
                  <td class="border p-1">Status</td>
                </tr>
                <tbody>
                ${user.userInfo.consultancy.map((i) => {
                  return `
                     <tr>
                     <td class="border p-1">${i.organisation}</td>
                     <td class="border p-1">${i.title}</td>
                     <td class="border p-1">${i.period}</td>
                     <td class="border p-1">${i.grantAmount}</td>
                     <td class="border p-1">${i.coInvestigators}</td>
                     <td class="border p-1">${i.status}</td>
                     </tr>
                     `;
                })}
                </tbody>
              </thead>
            </table>
          </div>
        </div>
  
        <!-- break -->
  
        <div class="p-1 new-page">
          <!-- PHD Thesis Supervised -->
          <div class="my-4">
            <h4>
  
              PHD Thesis Supervised
            </h4>
            <table class="border">
              <thead class="border p-1">
                <tr>
                  <td class="border p-1">Status</td>
                  <td class="border p-1">No</td>
                </tr>
                <tbody>
                  <tr>
                    <td class="border p-1">Bachelor Level</td>
                    <td class="border p-1">${
                      user.userInfo.thesis.bachelorsLvl
                    }</td>
                  </tr>
                  <tr>
                    <td class="border p-1">Bachelor Level</td>
                    <td class="border p-1">${
                      user.userInfo.thesis.mastersLvl
                    }</td>
                  </tr>
                  <tr>
                    <td class="border p-1">PHD Co</td>
                    <td class="border p-1">${user.userInfo.thesis.phdCo}</td>
                  </tr>
                  <tr>
                    <td class="border p-1">PHD Single</td>
                    <td class="border p-1">${
                      user.userInfo.thesis.phdSingle
                    }</td>
                  </tr>
                </tbody>
              </thead>
            </table>
          </div>
          <div class="my-4">
            <h4>
              Sponsored Research Projects
            </h4>
            <table class="border">
              <thead class="border p-1">
                <tr>
                <td class="border p-1">University</td>
                <td class="border p-1">Title</td>
                <td class="border p-1">Period</td>
                <td class="border p-1">Grant Amount</td>
                <td class="border p-1">Co-Investigators</td>
                <td class="border p-1">Status</td>
                </tr>
                <tbody>
                ${user.userInfo.sponsoredProjects.map((i) => {
                  return `
                     <tr>
                     <td class="border p-1">${i.organisation}</td>
                     <td class="border p-1">${i.title}</td>
                     <td class="border p-1">${i.period}</td>
                     <td class="border p-1">${i.grantAmount}</td>
                     <td class="border p-1">${i.coInvestigators}</td>
                     <td class="border p-1">${i.status}</td>
                     </tr>
                     `;
                })}
                </tbody>
              </thead>
            </table>
          </div>
        </div>
        <div class="my-4">
          <h4>
  
            Publications
          </h4>
          <table class="border">
            <thead class="border p-1">
              <tr>
                <td class="border p-1">Books</td>
                <td class="border p-1">National Conferences</td>
                <td class="border p-1">I'National Conferences</td>
                <td class="border p-1">Book Chapters</td>
              </td>
            </tr>
            <tbody>
              <tr>
                <td class="border p-1">${user.userInfo.publications.books}</td>
                <td class="border p-1">${
                  user.userInfo.publications.nationalConferences
                }</td>
                <td class="border p-1">${
                  user.userInfo.publications.internationalConferences
                }</td>
                <td class="border p-1">${
                  user.userInfo.publications.bookChapters
                }</td>
              </tr>
            </tbody>
          </thead>
        </table>
      </div>
    </div>
  </body>
  
  </html>
  

    `;
};
