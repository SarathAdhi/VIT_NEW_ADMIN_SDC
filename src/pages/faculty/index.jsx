import { LinkedItem } from "@elements/LinkedItem";
import { PageLayout } from "@layouts/PageLayout";
import axios from "@lib/axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ViewFaculties = () => {
  const [faculties, setFaculties] = useState([]);
  async function getFacutlies() {
    try {
      const faculties = await axios.get("/faculty");
      setFaculties(faculties);
    } catch ({ error }) {
      if (error) {
        // router.replace("/");
      }
    }
  }

  useEffect(() => {
    getFacutlies();
  }, []);

  return (
    <PageLayout>
      <div className="mt-5 md:mt-0 w-full p-4 bg-[#f1f1f1] grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {faculties.map((faculty) => (
          <div key={faculty.name} className="w-full sm:w-60">
            <div className="relative w-full h-60">
              {faculty?.image && <Image src={faculty.image} layout="fill" />}
            </div>

            <div className="text-white text-center bg-[#433840] py-4">
              <h4>{faculty.name}</h4>
              <p className="text-[#c6edff] text-sm">{faculty.designation}</p>
            </div>

            <div className="flex justify-between mt-2">
              <LinkedItem
                href="#"
                className="px-2 py-1 bg-[#375f8c] text-white rounded-md"
              >
                View
              </LinkedItem>

              <LinkedItem
                href={`/faculty/update/${faculty.id}`}
                className="px-2 py-1 bg-[#079d20] text-white rounded-md"
              >
                Update
              </LinkedItem>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default ViewFaculties;
