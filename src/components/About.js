import React from "react";

export default function About() {
    return ( <
        section id = "about" >
        <
        div className = "container mx-auto flex px-10 py-20 md:flex-row flex-col items-center" >
        <
        div className = "lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" >
        <
        h1 className = "title-font sm:text-4xl text-3xl mb-4 font-medium text-white" >
        Hi, I 'm Pratyush. <
        br className = "hidden lg:inline-block" / > I love to build amazing apps. <
        /h1> <
        p className = "mb-8 leading-relaxed" >
        I have recently completed my graduation from NIT Patna, I am fresher,
        And looking
        for job in reputed organization, And very egar to work as developer role. <
        /p> <
        div className = "flex justify-center" >
        <
        a href = "#contact"
        className = "inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg" >
        Work With Me <
        /a> <
        a href = "#projects"
        className = "ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg" >
        See My Past Work <
        /a> <
        /div> <
        /div> <
        div className = "lg:max-w-lg lg:w-full md:w-1/2 w-5/6" >
        <
        img className = "object-cover object-center rounded"
        alt = "hero"
        src = "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg" /
        >
        <
        /div> <
        /div> <
        /section>
    );
}