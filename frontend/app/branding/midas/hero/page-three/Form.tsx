import { MdOutlineNavigateNext, MdOutlineStar } from "react-icons/md";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiXCircle } from "react-icons/fi";
import LogoUpload from "./LogoUpload";
import W9Upload from "./W9Upload";
import { TaddBrandSchema, addBrandSchema, validBrantTypes } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAddMidasBrandMutation } from "@/redux/slices/midas/midasApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { setFeedback, setLoading } from "@/redux/slices/public/publicSlice";

const Form = () => {
    const [w9files, setw9files] = useState<(File & { preview: string })[]>([]);
    const [w9Error, setw9Error] = useState(false);
    const [logofiles, setlogofiles] = useState<(File & { preview: string })[]>(
        []
    );
    const [logoErrors, setlogoErrors] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<TaddBrandSchema>({
        resolver: zodResolver(addBrandSchema),
    });

    //   submit data to backend
    const dispatch = useAppDispatch();
    const [addMidasBrand] = useAddMidasBrandMutation();
    const handleSubmitFunc = async (data: TaddBrandSchema) => {
        try {
            if (logofiles.length < 1) {
                return setlogoErrors(true);
            } else {
                setlogoErrors(false);
            }
            if (w9files.length < 1) {
                return setw9Error(true);
            } else {
                setw9Error(false);
            }
            const formdata = new FormData();
            formdata.append("logoimage", logofiles[0], logofiles[0].name);
            formdata.append("w9image", w9files[0], w9files[0].name);

            for (const [key, value] of Object.entries(data)) {
                if (key !== "logoimage" && key !== "w9image") {
                    formdata.append(key, value as string);
                }
            }
            dispatch(setLoading(true));
            const response = await addMidasBrand(formdata).unwrap();
            dispatch(setFeedback("success"));
            reset();
            setlogofiles([]);
            setw9files([]);
            setTimeout(() => {
                dispatch(setLoading(false));

                setTimeout(() => {
                    dispatch(setFeedback("loading"));
                }, 100);
            }, 300);
        } catch (error: any) {
            console.log(error);
            // notify(error?.data?.message, "top-right", "error");
        }
    };
    const onsubmit = (data: TaddBrandSchema) => {
        handleSubmitFunc(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onsubmit)}
            className="flex flex-col text-gray-200 w-full justify-center max-w-[600px]  gap-4 pb-20"
        >
            <div className="flex text-gray-200 mb-6">
                <p className="max-w-[500px]">
                    The Data/Information you enter below will be used to setup
                    your Unique Links, Back-Office & Branding.{" "}
                </p>
            </div>
            <div className="flex flex-col w-full gap-4 md:flex-row ">
                <div className="flex flex-col gap-2 w-full">
                    <p className="flex">
                        Email{" "}
                        <span className="text-red-500">
                            <MdOutlineStar className="text-sm" />
                        </span>
                    </p>
                    <input
                        type="email"
                        className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-red-500">{errors.email.message}</p>
                    )}
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <p className="flex">
                        Mobile Phone{" "}
                        <span className="text-red-500">
                            <MdOutlineStar className="text-sm" />
                        </span>
                    </p>
                    <input
                        className="h-11 bg-gray-100/20 rounded-md  px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                        {...register("phone")}
                    />
                    {errors.phone && (
                        <p className="text-red-500">{errors.phone.message}</p>
                    )}
                </div>
            </div>
            <div className="flex w-full flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-2 w-full">
                    <p className="flex">
                        Name{" "}
                        <span className="text-red-500">
                            <MdOutlineStar className="text-sm" />
                        </span>
                    </p>
                    <input
                        placeholder="First"
                        className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                        {...register("fName")}
                    />
                    {errors.fName && (
                        <p className="text-red-500">{errors.fName.message}</p>
                    )}
                </div>
                <div className="flex flex-col gap-2 justify-end w-full">
                    <input
                        placeholder="Last"
                        className="h-11 bg-gray-100/20 rounded-md  px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                        {...register("lName")}
                    />
                    {errors.lName && (
                        <p className="text-red-500">{errors.lName.message}</p>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="flex">
                    Company Name{" "}
                    <span className="text-red-500">
                        <MdOutlineStar className="text-sm" />
                    </span>
                </p>
                <input
                    className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                    {...register("cName")}
                />
                {errors.cName && (
                    <p className="text-red-500">{errors.cName.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <p className="flex">Website URL </p>
                <input
                    className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                    {...register("wUrl")}
                />
                {errors.wUrl && (
                    <p className="text-red-500">{errors.wUrl.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <p className="flex">
                    Disbursement Account Info{" "}
                    <span className="text-red-500">
                        <MdOutlineStar className="text-sm" />
                    </span>
                </p>
                <input
                    className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                    {...register("accountInfo")}
                />
                {errors.accountInfo && (
                    <p className="text-red-500">{errors.accountInfo.message}</p>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <p className="flex">
                    Branding Type{" "}
                    <span className="text-red-500">
                        <MdOutlineStar className="text-sm" />
                    </span>
                </p>
                <select
                    {...register("brandingType")}
                    className="h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]text-gray-700"
                >
                    <option value="" className="text-gray-900">
                        Choose Type
                    </option>

                    {validBrantTypes.map((brand) => {
                        return (
                            <option
                                value={brand}
                                key={brand}
                                className="text-gray-900"
                            >
                                {brand}
                            </option>
                        );
                    })}
                </select>
                {errors.brandingType && (
                    <p className="text-red-500">
                        {errors.brandingType.message}
                    </p>
                )}
            </div>
            <div className="flex w-full flex-col md:flex-row gap-4">
                <div className="flex w-full flex-col">
                    <LogoUpload
                        logofiles={logofiles}
                        setlogofiles={setlogofiles}
                    />
                    {logoErrors && logofiles.length < 1 && (
                        <p className="text-red-500">please upload logo image</p>
                    )}
                </div>
                <div className="flex w-full flex-col">
                    <W9Upload w9files={w9files} setw9files={setw9files} />
                    {w9Error && w9files.length < 1 && (
                        <p className="text-red-500">please upload w-9 image</p>
                    )}
                </div>
            </div>
            <div className="flex flex-col ">
                <p className="flex">
                    Enter Full Name for Digital Signature
                    <span className="text-red-500">
                        <MdOutlineStar className="text-sm" />
                    </span>
                </p>
                <input
                    className="mt-2 h-11 bg-gray-100/20 rounded-md px-2 outline-none focus:border-gray-200/50 focus:border-[1px]"
                    {...register("fullName")}
                />
                {errors.fullName && (
                    <p className="text-red-500">{errors.fullName.message}</p>
                )}
                <p className="italic text-[12px] mt-2">
                    By proceeding forward and signing this document by clicking
                    “I Agree” below this document, you are agreeing that you
                    have reviewed the following disclosure and consent to
                    conduct business using electronic communications, to receive
                    any document or communication electronically, and to utilize
                    your electronic signature in lieu of signing paper
                    documents.
                </p>
            </div>
            <h5 className="text-2xl text-yellow-300">FTC Guidelines</h5>
            <p className=" text-gray-200">
                These aren’t our rules… but the FTC says they are important!
            </p>
            <p className=" text-gray-200">
                Affiliate MUST read and understand the following guidelines from
                the FTC:
            </p>
            <ol className="pl-8 list-decimal text-[14px]">
                <li>
                    {" "}
                    <a
                        href="https://www.ftc.gov/sites/default/files/attachments/press-releases/ftc-publishes-final-guides-governing-endorsements-testimonials/091005revisedendorsementguides.pdf"
                        target="_blank"
                    >
                        FTC Endorsement Guidelines
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking"
                        target="_blank"
                    >
                        Endorsement Guidelines FAQ
                    </a>
                </li>
            </ol>
            <p className="font-semibold">Read Midas Terms of Service?</p>
            <div className="flex">
                <div className="flex gap-2 flex-col">
                    <div className="flex gap-2">
                        {" "}
                        <input type="checkbox" id="" {...register("terms")} />
                        <p>yes</p>
                    </div>
                    {errors.terms && (
                        <p className="text-red-500">{errors.terms.message}</p>
                    )}
                </div>
            </div>

            <input
                type="submit"
                className="flex items-center p-1 px-4  bg-yellow-300 text-gray-600 rounded-md cursor-pointer w-fit"
            />
        </form>
    );
};

export default Form;
