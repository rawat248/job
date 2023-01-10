const jobLists = [
  {
    id: 1,
    JobsTitle: "Software Engineer",
    Salary: 7000000,
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed expedita vero facilis eveniet nihil pariatur quibusdam earum. Asperiores delectus vel quia nihil distinctio iure ducimus, architecto autem ipsam? Eos, nostrum necessitatibus odio labore nulla ab eius? Distinctio ipsam accusantium placeat ratione!",
    KeySkills: "Java, AWS, Cloud, Data-Structures",
    PublishedDate: "31-12-2022",
  },
  {
    id: 2,
    JobsTitle: "Software Developer",
    Salary: 1800000,
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed expedita vero facilis eveniet nihil pariatur quibusdam earum. Asperiores delectus vel quia nihil distinctio iure ducimus, architecto autem ipsam? Eos, nostrum necessitatibus odio labore nulla ab eius? Distinctio ipsam accusantium placeat ratione!",
    KeySkills: "Cloud, Data-Structures,Java",
    PublishedDate: "05-01-2023",
  },
  {
    id: 3,
    JobsTitle: "Web developer",
    Salary: 3000000,
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed expedita vero facilis eveniet nihil pariatur quibusdam earum. Asperiores delectus vel quia nihil distinctio iure ducimus, architecto autem ipsam? Eos, nostrum necessitatibus odio labore nulla ab eius? Distinctio ipsam accusantium placeat ratione!",
    KeySkills: "html, AWS, Cloud",
    PublishedDate: "31-12-2022",
  },
  {
    id: 4,
    JobsTitle: "Frontened Developer",
    Salary: 1800000,
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed expedita vero facilis eveniet nihil pariatur quibusdam earum. Asperiores delectus vel quia nihil distinctio iure ducimus, architecto autem ipsam? Eos, nostrum necessitatibus odio labore nulla ab eius? Distinctio ipsam accusantium placeat ratione!",
    KeySkills: "Html,css,javascript",
    PublishedDate: "05-01-2023",
  },
  {
    id: 5,
    JobsTitle: "Backened Engineer",
    Salary: 8000000,
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed expedita vero facilis eveniet nihil pariatur quibusdam earum. Asperiores delectus vel quia nihil distinctio iure ducimus, architecto autem ipsam? Eos, nostrum necessitatibus odio labore nulla ab eius? Distinctio ipsam accusantium placeat ratione!.",
    KeySkills: "python, Data-Structures",
    PublishedDate: "31-12-2022",
  },
  {
    id: 6,
    JobsTitle: "FullStack Developer",
    Salary: 1800000,
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed expedita vero facilis eveniet nihil pariatur quibusdam earum. Asperiores delectus vel quia nihil distinctio iure ducimus, architecto autem ipsam? Eos, nostrum necessitatibus odio labore nulla ab eius? Distinctio ipsam accusantium placeat ratione!.",
    KeySkills: "MERN",
    PublishedDate: "05-01-2023",
  },
];

const productsContainer = document.querySelector(".products");
const priceRange = document.querySelector(".salary");
const lastMonth = document.querySelector(".month");
const skills = document.querySelector(".skills");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const btn = document.getElementsByClassName("btn-readmore");
const modalContainer = document.getElementById("para");

const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) => `
       <div class="product">
          <span class="name"><b>JobsTitle</b>: ${product.JobsTitle}</span><br><br>
          <span class="name"><b>Salary</b>: ${product.Salary}</span><br><br>
          <p class="name">
             <b>Description</b>: ${product.Description}
          </p><br>
          <span class="key"><b>KeySkills</b>: ${product.KeySkills}</span><br><br>
          <span class="key"><b>PublishedDate</b>: ${product.PublishedDate}</span><br><br>
          <button class="btn-readmore" id=${product.id}>Read more...</button>
        </div>
    `,
    )
    .join("");
};
displayProducts(jobLists);

priceRange.addEventListener("click", () => {
  displayProducts(jobLists.filter((item) => item.Salary <= 2500000));
});

lastMonth.addEventListener("click", () => {
  const preMonthDate = new Date();

  const prevMonth = preMonthDate.getMonth() !== 0 ? preMonthDate.getMonth() : 12;

  const prevMonthYear = preMonthDate.getMonth() !== 0
    ? preMonthDate.getFullYear()
    : preMonthDate.getFullYear() - 1;
  displayProducts(
    jobLists.filter((item) => {
      const [, month, year] = item.PublishedDate.split("-");
      return month.trimStart("0") == prevMonth && prevMonthYear == year;
    }),
  );
});

const input = document.getElementById("name");
const filterUsers = skills.addEventListener("click", () => {
  const keyword = input.value.toLowerCase();
  const filteredUsers = jobLists.filter((user) => {
    const users = user.KeySkills.toLowerCase();
    return users.indexOf(keyword) > -1;
  });

  displayProducts(filteredUsers);
});
input.addEventListener("keyup", filterUsers);

window.onload = () => {
  const openModal = (event) => {
    modalContainer.innerHTML = "";

    const list = jobLists.find((item) => event.target.id == item.id);

    modal.style.display = "block";

    const jobTitleDiv = document.createElement("div");
    jobTitleDiv.className = "title";
    const jobTitleTag = document.createElement("p");
    jobTitleTag.className = "titleTag";
    jobTitleTag.innerHTML = "Job Title: ";
    const jobTitle = document.createElement("p");
    jobTitle.innerHTML = `${list.JobsTitle}`;
    jobTitleDiv.appendChild(jobTitleTag);
    jobTitleDiv.appendChild(jobTitle);
    modalContainer.appendChild(jobTitleDiv);

    const jobSalaryDiv = document.createElement("div");
    jobSalaryDiv.className = "salary";
    const jobSalaryTag = document.createElement("p");
    jobSalaryTag.className = "salaryTag";
    jobSalaryTag.innerHTML = "Salary:";
    const salaryTitle = document.createElement("p");
    salaryTitle.innerHTML = `${list.Salary}`;
    salaryTitle.className = "modalTitle";
    jobSalaryDiv.appendChild(jobSalaryTag);
    jobSalaryDiv.appendChild(salaryTitle);
    modalContainer.appendChild(jobSalaryDiv);

    const jobDescriptionDiv = document.createElement("div");
    jobDescriptionDiv.className = "description";
    const jobDescriptionTag = document.createElement("p");
    jobDescriptionTag.innerHTML = "Description:";
    const descriptionTitle = document.createElement("p");
    descriptionTitle.innerHTML = `${list.Description}`;
    descriptionTitle.className = "modalTitle";
    jobDescriptionDiv.appendChild(jobDescriptionTag);
    jobDescriptionDiv.appendChild(descriptionTitle);
    modalContainer.appendChild(jobDescriptionDiv);

    const jobSkillsDiv = document.createElement("div");
    jobSkillsDiv.className = "skills";
    const jobSkillsTag = document.createElement("p");
    jobSkillsTag.innerHTML = "KeySkills:";
    const keyTitle = document.createElement("p");
    keyTitle.innerHTML = `${list.KeySkills}`;
    keyTitle.className = "modalTitle";

    jobSkillsDiv.appendChild(jobSkillsTag);
    jobSkillsDiv.appendChild(keyTitle);
    modalContainer.appendChild(jobSkillsDiv);

    const jobDateDiv = document.createElement("div");
    jobDateDiv.className = "date";
    const jobDateTag = document.createElement("p");
    jobDateTag.innerHTML = "PublishedDate:";
    const publishTitle = document.createElement("p");
    publishTitle.innerHTML = `${list.PublishedDate}`;
    publishTitle.className = "modalTitle";

    jobDateDiv.appendChild(jobDateTag);
    jobDateDiv.appendChild(publishTitle);
    modalContainer.appendChild(jobDateDiv);
  };

  const closeModal = () => {
    modal.style.display = "none";
  };

  for (const button of btn) {
    button.addEventListener("click", openModal);
  }
  span.addEventListener("click", closeModal);
};
