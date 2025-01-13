import G from "../assets/images/G.png";
import { Link } from "react-router-dom";
const EmployeeDetail = () => {
  return (
    <div className="my-5">
      <article id="page1" className="bg-white w-full h-screen ">
        <div className="container mx-auto px-6 py-12">
          <p className="text-3xl mb-4">Detail KPIs Assigned Task</p>
          <p className="text-xl font-light">
            Choose the most relevant KPIs from the list to assign to your
            employees.
          </p>
          <div className="flex flex-row gap-6 mt-7">
            <img src={G} alt="G" width="60" />
            <div className="flex flex-col gap-1">
              <p className="mt-2">Georgia Russel</p>
              <p className="text-[#6C6C6C] text-sm font-light">HR Specialist</p>
            </div>
          </div>
          <p className="text-xl font-semibold mt-10 mb-8">Category List</p>
          <div className="flex flex-row gap-5">
            <div className="bg-[#E4E3FB] text-[#4F46E5] font-light p-5 rounded-lg w-fit">
              Project Management
            </div>
            <div className="bg-[#E4E3FB] text-[#4F46E5] font-light p-5 rounded-lg w-fit">
              Customer Services
            </div>
            <div className="bg-[#E4E3FB] text-[#4F46E5] font-light p-5 rounded-lg w-fit">
              Team Management
            </div>
          </div>
          <p className="text-xl font-semibold mt-10 mb-8">Select KPIs List</p>
          <div className="flex flex-row gap-5">
            <div className="bg-[#E4E3FB] text-[#4F46E5] font-light p-5 rounded-lg w-fit">
                First Contact Resolution rate
            </div>
            <div className="bg-[#E4E3FB] text-[#4F46E5] font-light p-5 rounded-lg w-fit">
            Manage
            </div>
            <div className="bg-[#E4E3FB] text-[#4F46E5] font-light p-5 rounded-lg w-fit">
            Quality Metrics
            </div>
            <div className="bg-[#E4E3FB] text-[#4F46E5] font-light p-5 rounded-lg w-fit">
            Always be ready to help
            </div>
          </div>
          <div className="flex flex-row gap-5 mt-5">
            <div className="bg-[#E4E3FB] text-[#4F46E5] font-light p-5 rounded-lg w-fit">
            Behavior and Attitude towards others
            </div>
            <div className="bg-[#E4E3FB] text-[#4F46E5] font-light p-5 rounded-lg w-fit">
            Demonstrate Leadership with client
            </div>
            <div className="bg-[#E4E3FB] text-[#4F46E5] font-light p-5 rounded-lg w-fit">
            Scheduling
            </div>
          </div>
           <div className="container mx-auto px-4 pb-10">
                <div className="flex justify-end mt-10 ">
                <Link to="/Summary">
                    <button
                    className=" button__style  background_blue"

                    >
                    Close
                    </button>
                </Link>
                </div>
            </div>
        </div>
      </article>
    </div>
  );
};

export default EmployeeDetail;
