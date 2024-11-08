import React from "react";
import binary_project from "../../public/images/project_images/binary.png";
import food_awesome from "../../public/images/project_images/food_awesome.png";
import book_heaven from "../../public/images/project_images/book_heaven.png";
import bindu_theke_sindhu from "../../public/images/project_images/bindu-theke-sindhu.png";
const Project = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 
  justify-center items-center gap-3 mt-10  "
    >
      <div
        className=" mx-auto xs:w-[19rem] xs:-ml-11 flex flex-col justify-center  items-start gap-1 bg-base-100 shadow-lg font-bold  p-2
      rounded-lg"
      >
        <div>
          <img src={binary_project} alt="binary project" />
        </div>

        <p className=" ">Binary Planet Ltd.</p>
        <a
          className="text-[blue]"
          href="https://binary-planet.netlify.app"
          target="_blank"
        >
          Live URL
        </a>
        <a
          className="text-[blue]"
          href="https://github.com/rehanuddin1991/binary-planet-client.git"
          target="_blank"
        >
          GitHub URL
        </a>
        <a
          className="text-[blue]"
          href="https://github.com/rehanuddin1991/binary-planet-backend.git"
          target="_blank"
        >
          GitHub URL Backend
        </a>

        <p>Admin User: admin@gmail.com</p>
        <p>Admin Pass: 123456</p>
        <p>User: user@gmail.com</p>
        <p>Pass: 123456</p>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-primary mx-auto"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Details
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-[darkorange]">
              Binary Planet Ltd.
            </h3>
            <p className="py-5 font-semibold">
              Binary Planet: Your One-Stop Shop for Premium Computer
              Accessories.
              <br />
              <span className="text-[darkcyan] text-justify">
                At Binary Planet, we specialize in providing a wide range of
                high-quality computer accessories to enhance your digital
                experience. Whether you're a gamer, a professional, or a tech
                enthusiast, we have everything you need to optimize your setup.
                From ergonomic keyboards and precision mice to high-performance
                gaming headsets, webcams, external hard drives, and more, we
                offer products from top brands known for reliability and
                innovation.
              </span>
              <br /> <br />
              Here I have used
              <br />
              1.React Js <br />
              2.Tailwind Css <br />
              3.Daisy UI <br />
              4.Javascript ES6
              <br />
              5.React Icon, Router DOM, Helmet <br />
              6.Firebase Authentication <br />
              7.MongoDB <br />
              8.Image BB <br />
              9. HTML-5
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      {/* food awesome project */}
      <div
        className=" mx-auto xs:w-[19rem] xs:-ml-11  flex flex-col justify-center items-start gap-1 bg-base-100 shadow-2xl font-bold  p-2
      rounded-lg"
      >
        <div>
          <img src={food_awesome} alt="binary project" />
        </div>

        <p className=" ">Food Awesome Ltd.</p>
        <a
          className="text-[blue]"
          href="https://rehanuddin1991.github.io/food_awesome/"
          target="_blank"
        >
          Live URL
        </a>
        <a
          className="text-[blue]"
          href="https://github.com/rehanuddin1991/food_awesome"
          target="_blank"
        >
          GitHub URL
        </a>

        <a
          className="text-[blue]"
          href="https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
          target="_blank"
        >
          API
        </a>

        <p>Others</p>

        <br />
        <br />
        <br />

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-primary mx-auto"
          onClick={() => document.getElementById("my_modal_6").showModal()}
        >
          Details
        </button>
        <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-[darkorange]">
              Food Awesome Ltd.
            </h3>
            <p className="py-5 font-semibold">
              <span className="text-[darkcyan] text-justify">
                Project Details: Food Awesome is a food related website.there
                are many sections like header,carousel,category wise data,
                faq,review,footer. here we have 5 clickable menu. when you will
                click in a specific category, this will load related food. this
                site fully responsive. you could access through any devices and
                i think it would be fully smooth.
              </span>
              <br /> <br />
              Technologies i used <br /> 1) HTML5 <br />2) Tailwind CSS <br />3) Daisyui <br />4) Modern
              Javascript (ES6) <br />5) Api call by ES6 <br />6) Vite <br />7) Git and Github for
              version control
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      {/* Book Heaven project */}
      <div
        className=" mx-auto  xs:w-[19rem] xs:-ml-11 flex flex-col justify-center items-start gap-1 bg-base-100 shadow-2xl font-bold  p-2
      rounded-lg"
      >
        <div>
          <img src={book_heaven} alt="binary project" />
        </div>

        <p className=" ">Book's Heaven Ltd.</p>
        <a
          className="text-[blue]"
          href="https://books-heaven.netlify.app/"
          target="_blank"
        >
          Live URL
        </a>
        <a
          className="text-[blue]"
          href="https://github.com/rehanuddin1991/books_heaven_project.git"
          target="_blank"
        >
          GitHub URL
        </a>

        <p>API</p>

        <p>Others</p>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-primary mx-auto"
          onClick={() => document.getElementById("modal_books_heaven").showModal()}
        >
          Details
        </button>
        <dialog id="modal_books_heaven" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-[darkorange]">
              Book's Heaven Ltd.
            </h3>
            <p className="py-5 font-semibold">
              <span className="text-[darkcyan] text-justify">
                Book's Heaven is a simple online book shop. This website fully
                responsive. you would access from any devices. There is a header
                section where i implement react router dom. In Books collection
                section after carousel all books from json file will be loaded
                as a Book Card. You could see book details by clicking Details
                button. in FAQ section you will find some important questions
                regarding react. let's enjoy happy browsing
              </span>
              <br /> <br />
              <br />
              Technologies, I have Touched <br />
              1) HTML5 <br />
              2) Tailwind CSS <br />
              3) Daisy UI <br />
              4) React js <br />
              6) React Router DOM <br />
              5) Vite <br />
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      {/* Bindu theke Sindhu project */}
      <div
        className=" mx-auto w-full    xs:w-[19rem] xs:-ml-11 flex flex-col justify-center items-start gap-1 bg-base-100 shadow-2xl font-bold  p-2
      rounded-lg"
      >
        <div>
          <img src={bindu_theke_sindhu} className="  " alt="bindu theke sindhu project" />
        </div>

        <p className=" ">Bindu Theke Sindhu</p>
        <a
          className="text-[blue]"
          href="https://bindu-theke-sindhu.netlify.app/"
          target="_blank"
        >
          Live URL
        </a>
        <a
          className="text-[blue]"
          href="https://github.com/rehanuddin1991/bindu-theke-sindhu.git"
          target="_blank"
        >
          GitHub URL
        </a>

        <a
          className="text-[blue]"
          href=" https://bindu-backend.vercel.app/course"
          target="_blank"
        >
          Backend URL
        </a>
        <a
          className="text-[blue]"
          href="https://github.com/rehanuddin1991/backend_express_server.git"
          target="_blank"
        >
          GitHub Backend URL
        </a>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-primary mx-auto"
          onClick={() => document.getElementById("modal_bindu").showModal()}
        >
          Details
        </button>
        <dialog id="modal_bindu" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-[darkorange]">
            bindu theke sindhu
            </h3>
            <p className="py-5 font-semibold">
              <span className="text-[darkcyan] text-justify">
                assignment: bindu theke sindhu project
                git:https://github.com/rehanuddin1991/bindu-theke-sindhu.git
                live: https://bindu-theke-sindhu.netlify.app/ backend server
                git:
                https://github.com/rehanuddin1991/backend_express_server.git
                live: https://bindu-backend.vercel.app/course
              </span>
              <br /> <br />
              <br />
              Technologies, I have Touched <br />
              1) HTML5 <br />
              2) Tailwind CSS <br />
              3) Daisy UI <br />
              4) React js <br />
              6) React Router DOM <br />
              5) Express <br />
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Project;
