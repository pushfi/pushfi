import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdOutlineStar } from "react-icons/md";
import { FiXCircle } from "react-icons/fi";

const W9Upload = ({
    w9files,
    setw9files,
}: {
    w9files: any;
    setw9files: any;
}) => {
    const onDrop = (acceptedFiles: any) => {
        setw9files(
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
            w9files.forEach((file: any) => URL.revokeObjectURL(file.preview));
        };
    }, [w9files]);

    const handleRemoveFile = (fileToRemove: any) => {
        setw9files((prevFiles: any) =>
            prevFiles.filter((file: any) => file !== fileToRemove)
        );
    };
    return (
        <div className="flex w-full ">
            <div className="flex flex-col w-full gap-1">
                <p className="flex">w-9 Updload </p>
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
                    {w9files.map((file: any) => (
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

export default W9Upload;
