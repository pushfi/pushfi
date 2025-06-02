"use client";

import React from "react";
import { notFound } from "next/navigation";
import { useFetchLendingTreeQuery } from "@/redux/slices/assessment-data/assessmentDataApiSlice";

const LendingTree = ({ id }: { id: any }) => {
  // fetch user

  const { data, error, isFetching, isLoading } = useFetchLendingTreeQuery({
    id,
  });

  if (isFetching) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        please wait
      </div>
    );
  }
  if (error) {
    return notFound();
  }
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-b-lg">
        <div className="p-6 text-center">
          <div className="mb-4">
            <img
              src="https://share1.cloudhq-mkt3.net/edcfe9cd9be3e3.png"
              alt="Company Logo"
              className="w-48 mx-auto"
            />
          </div>
          <img
            src="https://share1.cloudhq-mkt3.net/55afdc7b4c2ad5.png"
            alt="HMB Logo"
            className="w-64 mx-auto"
          />
        </div>

        <div className="px-6 pb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Let&apos;s fund <span className="text-blue-600">Your Business</span>{" "}
            together!
          </h1>
        </div>

        <div className="px-6 pb-8">
          <p className="text-gray-600 mb-4">
            Hello <strong className="text-gray-800">{data?.name},</strong>
          </p>
          <p className="text-gray-700 mb-4">
            <strong className="text-blue-600">Great news!</strong> Your funding
            request has been processed, and we&#39;re tailoring custom options
            for you.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="text-gray-700">
              Our focus: <strong>Business Loans</strong> (long-term growth),{" "}
              <strong>Start-Up Loans</strong> (new ventures),{" "}
              <strong>Specialty Loans</strong> (niche needs), and{" "}
              <strong>Business Credit Cards</strong> (flexible spending).
            </p>
          </div>
          <p className="text-blue-600 font-medium">
            Please see the details below.
          </p>
        </div>
      </div>

      {/* Credit Score Section */}
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md my-6 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/4 p-4 flex justify-center">
            <img
              src="https://share1.cloudhq-mkt3.net/5e05ad3124c931.png"
              alt="Credit Score"
              className="w-32"
            />
          </div>

          <div className="w-full md:w-3/4 p-6">
            <h2 className="text-white text-xl font-semibold mb-2">
              Your Credit Score Analysis
            </h2>
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <p className="text-white">
                TransUnion ={" "}
                <span className="text-2xl font-bold">{data?.transUnion}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-10 p-3 rounded-lg">
            <p className="text-white text-sm">Unsecured Debt Balance</p>
            <p className="text-white font-bold">${data.UnsecuredDebtBalance}</p>
          </div>
          <div className="bg-white bg-opacity-10 p-3 rounded-lg">
            <p className="text-white text-sm">Revolving Debt Balance</p>
            <p className="text-white font-bold">${data.revolvingDebtBalance}</p>
          </div>
          <div className="bg-white bg-opacity-10 p-3 rounded-lg">
            <p className="text-white text-sm"># of Revolving Accounts</p>
            <p className="text-white font-bold">{data.revolvingAccounts}</p>
          </div>
        </div>
      </div>

      {/* Pre-Qualification Section */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm my-6 overflow-hidden">
        <div className="p-8 text-center bg-gradient-to-r from-blue-50 to-indigo-50">
          <h2 className="text-2xl font-bold text-blue-600">
            Below are details on your Pre-Qualification Offer — See Below! 🚀
          </h2>
        </div>
      </div>

      {/* Funding Offers Section */}
      <div className="max-w-3xl mx-auto space-y-6 my-6">
        {/* Specialty Loans */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-blue-600">
              Conditional Funding Offer
            </h3>
          </div>

          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-800 underline mb-4">
              Specialty/Start-Up Term Loans
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Minimum Estimated Range</p>
                <p className="text-gray-800 font-bold">{data.tMinRange}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Maximum Estimated Range</p>
                <p className="text-gray-800 font-bold">{data.tMaxRange}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Interest Rate Range</p>
                <p className="text-gray-800 font-bold">{data.tInterest}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Terms</p>
                <p className="text-gray-800 font-bold">5 years to 10 years+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Credit Cards */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-800 underline mb-4">
              Business Credit Card Lines
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Minimum Estimated Range</p>
                <p className="text-gray-800 font-bold">{data.cMinRange}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Maximum Estimated Range</p>
                <p className="text-gray-800 font-bold">{data.cMaxRange}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Interest Rate Range</p>
                <p className="text-gray-800 font-bold">
                  {data.tInterest} + 0% Promotion
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Terms</p>
                <p className="text-gray-800 font-bold">Revolving & Charge</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ready for Next Steps */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-8 text-center bg-gradient-to-r from-blue-50 to-indigo-50">
            <h2 className="text-3xl font-bold text-blue-600">
              Ready for Next Steps?
            </h2>
          </div>

          <div className="p-6">
            <p className="font-semibold text-gray-800 mb-4">
              After completing your loan agreement:
            </p>
            <ol className="list-decimal pl-5 space-y-3 text-gray-700">
              <li>
                Schedule a meeting to review expectations and processing
                instructions.
              </li>
              <li>
                Track progress and manage your loan through the client portal.
              </li>
              <li>
                <strong>Note</strong>:{" "}
                <em>
                  Proceeding into processing does not obligate you to accept any
                  offers.
                </em>
              </li>
            </ol>
            <p className="mt-6 font-semibold text-gray-800">
              Follow these steps for a smooth funding process.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm my-6 overflow-hidden">
        <div className="p-8 text-center">
          <a
            href="https://www.cognitoforms.com/PushFi1/HMB99Agreement"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
          >
            Proceed & Schedule Meeting
          </a>
        </div>

        {/* Logos */}
        <div className="p-6 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <img
            src="https://share1.cloudhq-mkt3.net/6a46ede08dbcb1.png"
            alt="Q1-2024"
            className="h-12"
          />
          <img
            src="https://share1.cloudhq-mkt3.net/610369a472f62f.png"
            alt="Q4-2024"
            className="h-12"
          />
        </div>

        {/* Social Icons */}
        <div className="p-6 text-center">
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/helpmewithmybusiness/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
            >
              <img
                src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/10857619/admin/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
            >
              <img
                src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.facebook.com/HelpMeWithMyBusiness/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
            >
              <img
                src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>

        {/* Footer Logo */}
        <div className="p-6 text-center border-t border-gray-100">
          <img
            src="https://share1.cloudhq-mkt3.net/d224ea0e7d4187.png"
            alt="HMB Logo"
            className="w-64 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LendingTree;
