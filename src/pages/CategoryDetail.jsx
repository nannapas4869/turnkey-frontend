import G from "../assets/images/g.png";
import K from "../assets/images/k.png";
import { Link } from "react-router-dom";
const CategoryDetail = () => {
  return (
    <div className="my-5">
      <article id="page1" className="bg-white w-full h-screen ">
        <div className="container mx-auto px-6 py-12">
          <p className="text-3xl">Detail KPIs Assigned Task</p>
          <div className="container mx-auto px-4 mt-10">
            <p className="text-xl font-semibold">
              Category:{" "}
              <span className="ms-4 font-light">Leadership Management</span>
            </p>
            <p className="text-xl font-semibold mt-10 mb-8">
              Assign to employee
            </p>
            <div className="flex flex-row gap-6">
              <img src={G} alt="G" width="60" />
              <div className="flex flex-col gap-1">
                <p className="mt-2">Georgia Russel</p>
                <p className="text-[#6C6C6C] text-sm font-light">
                  HR Specialist
                </p>
              </div>
            </div>
            <p className="text-xl font-semibold mt-10 mb-8">Select KPIs List</p>
            <div className="bg-[#E4E3FB] text-[#4F46E5] font-light p-5 rounded-lg w-fit">
              Demonstrate Leadership with client
            </div>
            <p className="text-xl font-semibold mt-10 mb-8">
              Assign to employee
            </p>
            <div className="flex flex-row gap-6">
              <img src={K} alt="G" width="60" />
              <div className="flex flex-col gap-1">
                <p className="mt-2">Kay Fisher</p>
                <p className="text-[#6C6C6C] text-sm font-light">
                  HR Specialist
                </p>
              </div>
            </div>
            <p className="text-xl font-semibold mt-10 mb-8">Select KPIs List</p>
            <div className="flex flex-row gap-5">
                 <div className="bg-[#E4E3FB] text-[#4F46E5] font-light p-5 rounded-lg w-fit">
                    Behavior and Attitude towards others
                </div>
                <div className="bg-[#E4E3FB] text-[#4F46E5] font-light p-5 rounded-lg w-fit">
                Exhibits thought leadership around new ideas, strategies and opportunity
                </div>
            </div>
            <div className="container mx-auto px-4 ">
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
        </div>
      </article>
    </div>
  );
};

export default CategoryDetail;
