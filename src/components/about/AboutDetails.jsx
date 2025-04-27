import React from "react";
import ItemLayout from "./ItemLayout";
import Image from 'next/image';
import reddit from './../../../public/background/reddit.png';
import n8n from './../../../public/background/n8n.png';
import autodesk from './../../../public/background/autodesk.png';
import openai from './../../../public/background/openai.jpg';
import replit from './../../../public/background/replit.png';
import uipath from './../../../public/background/uipath.png';
import blender from './../../../public/background/blender.jpg';
import Epic from './../../../public/background/epic_games.png';
import Gemini from './../../../public/background/Gemini.png';

const AboutDetails = () => {
    return (
        <section className="w-full flex flex-col items-center">
            <div className="w-full max-w-6xl px-4">

                {/* About Text Section */}
                <ItemLayout className="w-full">
                    <div className="text-center text-white">
                        <p className="text-lg max-w-3xl mx-auto">
                            I am <span className="text-sky-400 font-semibold">Rithika R</span>, an
                            <span className="text-sky-400 font-semibold"> AI Engineer</span> and
                            <span className="text-sky-400 font-semibold"> Full Stack Developer</span> with a strong foundation in
                            <span className="text-sky-400 font-semibold"> artificial intelligence</span>,
                            <span className="text-sky-400 font-semibold"> machine learning</span>, and
                            <span className="text-sky-400 font-semibold"> end-to-end software development</span>.
                            I specialize in programming languages like <span className="text-sky-400 font-semibold">Python</span> and
                            <span className="text-sky-400 font-semibold"> JavaScript</span>, and I work extensively with frameworks and tools such as
                            <span className="text-sky-400 font-semibold"> React.js</span>,
                            <span className="text-sky-400 font-semibold"> Next.js</span>,
                            <span className="text-sky-400 font-semibold"> MERN stack</span>,
                            <span className="text-sky-400 font-semibold"> TensorFlow</span>, and
                            <span className="text-sky-400 font-semibold"> PyTorch</span>.
                        </p>

                        <p className="text-lg max-w-3xl mt-4 mx-auto">
                            As a <span className="text-sky-400 font-semibold">Full Stack Developer at Big Bucks</span>, I contributed to the development of
                            <span className="text-sky-400 font-semibold"> cross-platform mobile applications</span> using
                            <span className="text-sky-400 font-semibold"> React Native</span> and integrated
                            <span className="text-sky-400 font-semibold"> secure, scalable backend solutions</span> with
                            <span className="text-sky-400 font-semibold"> Firebase</span>.
                        </p>

                        <p className="text-lg max-w-3xl mt-4 mx-auto">
                            I am truly passionate about the field of
                            <span className="text-sky-400 font-semibold"> AI agents</span>, especially in areas like
                            <span className="text-sky-400 font-semibold"> Generative AI (GenAI)</span> and
                            <span className="text-sky-400 font-semibold"> intelligent decision-making systems</span>. I’ve developed various AI agents, including:
                            <br />
                            - A <span className="text-sky-400 font-semibold">healthcare agent</span> that evaluates stress levels through
                            <span className="text-sky-400 font-semibold"> real-time voice and text emotion analysis</span>.<br />
                            - A <span className="text-sky-400 font-semibold">finance agent</span> for
                            <span className="text-sky-400 font-semibold"> risk assessment</span> and
                            <span className="text-sky-400 font-semibold"> stock market prediction</span>.<br />
                            - A <span className="text-sky-400 font-semibold">real estate assistant</span> that processes
                            <span className="text-sky-400 font-semibold"> natural language queries</span> and generates
                            <span className="text-sky-400 font-semibold"> personalized property suggestions</span>, streamlining user interaction in real estate platforms.
                        </p>

                        <p className="text-lg max-w-3xl mt-4 mx-auto">
                            My curiosity also extends into
                            <span className="text-sky-400 font-semibold"> blockchain technology</span>, where I have explored the
                            <span className="text-sky-400 font-semibold"> core mathematical principles</span>,
                            <span className="text-sky-400 font-semibold"> cryptographic mechanisms</span>, and
                            <span className="text-sky-400 font-semibold"> distributed consensus algorithms</span> that power decentralized systems.
                            I am deeply interested in building innovative solutions that merge
                            <span className="text-sky-400 font-semibold"> AI with blockchain and finance</span>.
                            <br />
                            Additionally, I actively work on
                            <span className="text-sky-400 font-semibold"> data analytics</span>,
                            <span className="text-sky-400 font-semibold"> machine learning</span>,
                            <span className="text-sky-400 font-semibold"> web and app development</span>, and
                            <span className="text-sky-400 font-semibold"> game development</span> using
                            <span className="text-sky-400 font-semibold"> Unreal Engine</span> and
                            <span className="text-sky-400 font-semibold"> Unity</span>.
                            I also explore
                            <span className="text-sky-400 font-semibold"> architectural design</span> with tools like
                            <span className="text-sky-400 font-semibold"> Blender</span> and
                            <span className="text-sky-400 font-semibold"> Autodesk</span>, blending creativity with engineering precision.
                            <br />
                            I thrive at the intersection of
                            <span className="text-sky-400 font-semibold"> technology and impact</span>—driven by a vision to build
                            <span className="text-sky-400 font-semibold"> intelligent</span>,
                            <span className="text-sky-400 font-semibold"> scalable</span>, and
                            <span className="text-sky-400 font-semibold"> user-centric applications</span> across domains.
                        </p>
                    </div>
                </ItemLayout>



                {/* Spacer */}
                <div className="py-10" />

                {/* Skills Grid */}
                <ItemLayout className="w-full bg-black/50 backdrop-blur-md border border-sky-500 rounded-xl shadow-[0_0_20px_#0ea5e9] p-6">

                    {/* Left: Most Used Languages */}
                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-md">
                            <h2 className="text-sky-400 text-2xl font-bold mb-6">Most Used Languages</h2>
                            {[
                                { name: "JavaScript", percent: 70, color: "bg-sky-400" },
                                { name: "C++", percent: 90, color: "bg-blue-600" },
                                { name: "Python", percent: 70, color: "bg-sky-500" },
                                { name: "Solidity", percent: 5, color: "bg-blue-300" },
                                { name: "C", percent: 50, color: "bg-cyan-400" },
                                { name: "Rust", percent: 10, color: "bg-blue-200" },
                            ].map((lang, index) => (
                                <div key={index} className="mb-4">
                                    <div className="flex justify-between items-center mb-1 text-sm text-white">
                                        <span>{lang.name}</span>
                                        <span>{lang.percent}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                                        <div
                                            className={`${lang.color} h-2.5 rounded-full`}
                                            style={{ width: `${lang.percent}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Known Software */}
                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-md text-center">
                            <h2 className="text-sky-400 text-2xl font-bold mb-6">Known Software</h2>
                            <div className="w-full py-8"> {/* Added some vertical padding */}
                                <h2 className="text-2xl font-bold text-white text-center mb-6">Known Software & Technologies</h2>

                                {/* AI/ML Frameworks */}
                                <div>
                                    <h3 className="text-xl font-semibold text-sky-400 mb-2 text-center">AI/ML Frameworks</h3>
                                    <div className="flex flex-wrap justify-center gap-6 items-center mb-4">
                                        <Image src="https://avatars.githubusercontent.com/u/108914025?s=200&v=4" alt="LLaMA" width={40} height={40} title="LLaMA" />
                                        <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" alt="TensorFlow" width={40} height={40} title="TensorFlow" />
                                        {/* Add more AI/ML logos here */}
                                    </div>
                                </div>

                                {/* Development Tools */}
                                <div>
                                    <h3 className="text-xl font-semibold text-sky-400 mb-2 text-center">Development Tools</h3>
                                    <div className="flex flex-wrap justify-center gap-6 items-center mb-4">
                                        <Image src={n8n} alt="n8n" width={100} height={100} title="n8n" />
                                        <Image src={replit} alt="Replit" width={100} height={40} title="Replit" />
                                        <Image src="https://upload.wikimedia.org/wikipedia/commons/1/1d/PyCharm_Icon.svg" alt="PyCharm" width={40} height={40} title="PyCharm" />
                                        <Image src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VS Code" width={80} height={40} title="Visual Studio Code" />
                                        <Image src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" alt="Docker" width={80} height={80} title="Docker" />
                                        <Image src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" alt="Git" width={40} height={40} title="Git" />
                                        {/* Add more development tool logos here */}
                                    </div>
                                </div>

                                {/* Other Software */}
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-sky-400 mb-2 text-center">Other Software</h3>
                                    <div className="flex flex-wrap justify-center gap-6 items-center">
                                        <Image src={reddit} alt="Reddit" width={80} height={80} title="Reddit" />
                                        <Image src={Epic} alt="Epic Games" width={40} height={40} title="Epic Games" />
                                        <Image src={blender} alt="Blender" width={80} height={100} title="Blender" />
                                        <Image src={autodesk} alt="Autodesk" width={100} height={40} title="Autodesk" />
                                        <Image src={uipath} alt="UiPath" width={100} height={40} title="UiPath" />
                                        <Image src={Gemini} alt="Gemini" width={80} height={80} title="Gemini" />
                                        <Image src={openai} alt="OpenAI" width={80} height={80} title="OpenAI" />
                                        <Image src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" width={40} height={40} title="Power BI" />
                                        <Image src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" alt="Hugging Face" width={40} height={40} title="Hugging Face" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </ItemLayout>

                {/* Spacer */}
                <div className="py-10" />

            </div>
        </section>
    );
};
export default AboutDetails;
