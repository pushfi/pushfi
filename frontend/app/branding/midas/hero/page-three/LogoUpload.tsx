import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdOutlineStar } from "react-icons/md";
import { FiXCircle } from "react-icons/fi";
const LogoUpload = ({
    logofiles,
    setlogofiles,
}: {
    logofiles: any;
    setlogofiles: any;
}) => {
    const onDrop = (acceptedFiles: any) => {
        setlogofiles(
            acceptedFiles.map((file: any) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            )
        ); // Cast to the custom type
    };
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });
    useEffect(() => {
        return () => {
            logofiles.forEach((file: any) => URL.revokeObjectURL(file.preview));
        };
    }, [logofiles]);

    const handleRemoveFile = (fileToRemove: any) => {
        setlogofiles((prevFiles: any) =>
            prevFiles.filter((file: any) => file !== fileToRemove)
        );
    };
    return (
        <div className="flex w-full ">
            <div className="flex flex-col w-full gap-1">
                <p className="flex">
                    Logo Updload{" "}
                    <span className="text-red-500">
                        <MdOutlineStar className="text-sm" />
                    </span>
                </p>
                <div
                    {...getRootProps()}
                    className="flex gap-4 border border-dashed border-yellow-200/50 p-2 rounded-lg w-full"
                >
                    <label
                        htmlFor="logoupload"
                        className="bg-yellow-300 text-gray-700 p-1 rounded-md"
                    >
                        <button>upload</button>
                    </label>

                    <input
                        {...getInputProps()}
                        id="logoupload"
                        className="hidden"
                    />
                    {isDragActive ? (
                        <div className="">Drop the files here ...</div>
                    ) : (
                        <p>or drag files here</p>
                    )}
                </div>
                <div className="flex flex-wrap">
                    {logofiles.map((file: any) => (
                        <div key={file.name} className="relative m-2">
                            <img
                                src={file.preview}
                                alt=""
                                className="max-w-xs rounded w-24"
                            />
                            <button
                                onClick={() => handleRemoveFile(file)}
                                className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full hover:bg-red-700 focus:outline-none"
                            >
                                <FiXCircle size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoUpload;
