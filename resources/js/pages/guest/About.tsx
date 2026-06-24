import { Link } from "@inertiajs/react";
import GuestLayout from "@/layouts/GuestLayout";
import { useState } from "react";

export default function About() {
    const [loginOpen, setLoginOpen] = useState(false);
    return (
        <GuestLayout>
            <section className="relative min-h-[870px] flex items-center overflow-hidden px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                            About MARKAS Assistant
                        </h1>
                        <p className="text-lg text-gray-400">
                            MARKAS Assistant is an AI-powered platform designed to provide users with a seamless and efficient experience. Our mission is to leverage cutting-edge technology to assist users in various tasks, making their lives easier and more productive.
                        </p>
                        <p className="text-lg text-gray-400">
                            With a focus on user-centric design and advanced AI capabilities, MARKAS Assistant aims to revolutionize the way individuals interact with technology. Whether it's through natural language processing, machine learning, or other AI-driven features, we are committed to delivering a top-notch experience for our users.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img src="https://picsum.photos/2000/2000" alt="About MARKAS Assistant" className="w-full max-w-md rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>
            <section className="bg-[#0D0D0F] py-16">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6">
                        Our Vision
                    </h2>
                    <p className="text-lg text-gray-400 mb-4">
                        At MARKAS Assistant, we envision a future where AI seamlessly integrates into everyday life, enhancing productivity and simplifying complex tasks. Our goal is to create an intuitive platform that empowers users to achieve more with less effort.
                    </p>
                    <p className="text-lg text-gray-400">
                        We are dedicated to continuous innovation and improvement, ensuring that our users always have access to the latest advancements in AI technology. By prioritizing user feedback and staying ahead of industry trends, we strive to maintain our position as a leading provider of AI solutions that truly make a difference in people's lives.
                    </p>
                </div>
            </section>
            <section className="bg-[#0D0D0F] py-16">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6">
                        Our Team
                    </h2>
                    <p className="text-lg text-gray-400 mb-4">
                        Our team consists of passionate individuals with diverse backgrounds in AI, software development, and user experience design. We are united by a common goal: to create an AI assistant that truly understands and meets the needs of our users.
                    </p>
                    <p className="text-lg text-gray-400">
                        We believe that collaboration and innovation are key to our success. By fostering a culture of creativity and continuous learning, we ensure that our team remains at the forefront of AI technology, delivering solutions that exceed expectations.
                    </p>
                </div>
            </section>
        </GuestLayout>
    );
}
