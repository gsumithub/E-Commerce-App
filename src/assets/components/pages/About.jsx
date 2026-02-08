import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

import { questions } from "../../../data/Questions";

export default function About() {
  let [currentQuestionId, setCurrentQuestion] = useState(0);
  return (
    <>
      <div className="bg-gray-50 py-20">
  <div className="max-w-[1100px] mx-auto px-6">

    {/* Page Title */}
    <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
      About Us
    </h1>

    <div className="grid md:grid-cols-2 gap-10">

      {/* Who We Are */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">
          Who We Are
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      {/* Our Mission */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">
          Our Mission
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Viverra nam libero justo laoreet sit amet cursus sit amet.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Consequat interdum varius sit amet mattis vulputate enim nulla aliquet.
        </p>
      </div>

      {/* Our Vision */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">
          Our Vision
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Nunc sed augue lacus viverra vitae congue eu consequat ac felis.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Integer feugiat scelerisque varius morbi enim nunc faucibus.
        </p>
      </div>

      {/* Our Values */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">
          Our Values
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Gravida quis blandit turpis cursus in hac habitasse platea dictumst.
        </p>
      </div>

    </div>

  </div>
</div>

      <main className="max-w-[1320px] mx-auto">
        <h1 className="text-4xl font-bold text-center">
          FAQ{currentQuestionId}
        </h1>
        <div className="max-w-desktop mx-auto mt-5">
          {questions.map((obj, i) => {
            return (
              <div className="border-[#ccc] my-2">
                <h2
                  onClick={() =>
                    setCurrentQuestion(obj.id == currentQuestionId ? 0 : obj.id)
                  }
                  className="p-3 bg-blue-800 text-white font-bold text-[20px] relative"
                >
                  {obj.question}
                  <span className=" absolute right-4 ">
                    {obj.id == currentQuestionId ? (
                      <CiCircleMinus />
                    ) : (
                      <CiCirclePlus />
                    )}
                  </span>
                </h2>
                <p
                  className={`px-3 duration-200 ${obj.id == currentQuestionId ? "scale-y-100 py-3" : "scale-y-0 py-0"}`}
                >
                  {obj.answer}
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
