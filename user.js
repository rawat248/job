const jobLists = [
  {
    JobsTitle: "Software Engineer",
    Salary: 7000000,
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptas adipisci ab voluptates pariatur esse tempore harum, blanditiis explicabo optio fugiat.",
    KeySkills: "Java, AWS, Cloud, Data-Structures",
    PublishedDate: "31-12-2022",
  },
  {
    JobsTitle: "Software Developer",
    Salary: 1800000,
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptas adipisci ab voluptates pariatur esse tempore harum, blanditiis explicabo optio fugiat.",
    KeySkills: "Java, AWS, Cloud, Data-Structures",
    PublishedDate: "05-01-2023",
  },
  {
    JobsTitle: "Web developer",
    Salary: 3000000,
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptas adipisci ab voluptates pariatur esse tempore harum, blanditiis explicabo optio fugiat.",
    KeySkills: "Java, AWS, Cloud, Data-Structures",
    PublishedDate: "31-12-2022",
  },
  {
    JobsTitle: "Frontened Developer",
    Salary: 1800000,
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptas adipisci ab voluptates pariatur esse tempore harum, blanditiis explicabo optio fugiat.",
    KeySkills: "Java, AWS, Cloud, Data-Structures",
    PublishedDate: "05-01-2023",
  },
  {
    JobsTitle: "Backened Engineer",
    Salary: 8000000,
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptas adipisci ab voluptates pariatur esse tempore harum, blanditiis explicabo optio fugiat.",
    KeySkills: "Java, AWS, Cloud, Data-Structures",
    PublishedDate: "31-12-2022",
  },
  {
    JobsTitle: "FullStack Developer",
    Salary: 1800000,
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptas adipisci ab voluptates pariatur esse tempore harum, blanditiis explicabo optio fugiat.",
    KeySkills: "Java, AWS, Cloud, Data-Structures",
    PublishedDate: "05-01-2023",
  },
];

const productsContainer = document.querySelector(".products");

const priceRange = document.querySelector(".salary");
const lastMonth = document.querySelector(".month");

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
          <span class="price"><b>KeySkills</b>: ${product.KeySkills}</span><br><br>
          <span class="price"><b>PublishedDate</b>: ${product.PublishedDate}</span><br><br>
          <button class="btn-readmore" id="trigger">Read more...</button>
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
