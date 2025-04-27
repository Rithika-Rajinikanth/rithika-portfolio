"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaMedium } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";


const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const item = {
    hidden: { scale: 0 },
    show: { scale: 1 },
};

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const sendEmail = (params) => {
        const toastId = toast.loading("Sending your message, please wait...");
        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                params,
                { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY }
            )
            .then(
                () => {
                    toast.success("I have received your message!", { id: toastId });
                },
                () => {
                    toast.error("Error sending message. Please try again later.", { id: toastId });
                }
            );
    };

    const onSubmit = (data) => {
        const templateParams = {
            to_name: "Rithika R",
            from_name: data.name,
            reply_to: data.email,
            message: data.message,
        };
        sendEmail(templateParams);
    };

    return (
        <div className="w-full px-6 py-16 flex items-start justify-center">
            <div className="w-full max-w-screen-xl flex flex-col lg:flex-row items-start justify-between gap-24">

                {/* Contact Form */}
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-start space-y-4">
                    <Toaster richColors />
                    <motion.form
                        variants={container}
                        initial="hidden"
                        animate="show"
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col space-y-5 w-full"
                    >
                        <motion.input
                            variants={item}
                            type="text"
                            placeholder="Name"
                            {...register("name", {
                                required: "This field is required!",
                                minLength: { value: 3, message: "Name must be at least 3 characters" },
                            })}
                            className="w-full p-3 rounded-md bg-black/50 text-white border border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                        {errors.name && <span className="text-red-400 text-sm">{errors.name.message}</span>}

                        <motion.input
                            variants={item}
                            type="email"
                            placeholder="Email"
                            {...register("email", {
                                required: "This field is required!",
                            })}
                            className="w-full p-3 rounded-md bg-black/50 text-white border border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                        {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}

                        <motion.textarea
                            variants={item}
                            placeholder="Message"
                            rows={5}
                            {...register("message", {
                                required: "This field is required!",
                                minLength: { value: 50, message: "Message must be at least 50 characters" },
                                maxLength: { value: 500, message: "Message must be less than 500 characters" },
                            })}
                            className="w-full p-3 rounded-md bg-black/50 text-white border border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                        {errors.message && <span className="text-red-400 text-sm">{errors.message.message}</span>}

                        <motion.input
                            variants={item}
                            type="submit"
                            value="Cast your message!"
                            className="w-full py-3 rounded-md bg-sky-600 hover:bg-sky-700 transition duration-200 text-white font-semibold cursor-pointer"
                        />
                    </motion.form>
                </div>

                {/* Social Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-start justify-start space-y-6 text-white">
                    <h2 className="text-2xl font-semibold">Connect with Me</h2>
                    <div className="flex flex-col space-y-5 text-xl text-sky-500">
                        <a href="https://www.linkedin.com/in/rithikarajinikanth/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center space-x-3 hover:underline">
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/rithikarajinikanth" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center space-x-3 hover:underline">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                        <a href="https://x.com/RithikaR129177" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex items-center space-x-3 hover:underline">
                            <FaTwitter />
                            <span>Twitter</span>
                        </a>
                        <a href="https://medium.com/@yourmedium" target="_blank" rel="noopener noreferrer" aria-label="Medium Blog" className="flex items-center space-x-3 hover:underline">
                            <FaMedium />
                            <span>Medium Blog</span>
                        </a>
                        <a href="https://leetcode.com/u/rithika19/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="flex items-center space-x-3 hover:underline">
                            <SiLeetcode />
                            <span>LeetCode</span>
                        </a>
                        <a href="https://www.hackerrank.com/profile/rithika19_03_201" target="_blank" rel="noopener noreferrer" aria-label="HackerRank" className="flex items-center space-x-3 hover:underline">
                            <SiHackerrank />
                            <span>HackerRank</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

