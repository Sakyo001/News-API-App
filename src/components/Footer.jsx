import React from 'react';

const Footer = () => {
    const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/34/Icon_hacker.png';

    return (
        <footer className="mt-4 bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between flex-wrap">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <img src={imageUrl} className="h-8 me-3" alt="FlowBite Logo" />
                            <span className="text-xl font-semibold whitespace-nowrap">WhiteHat News</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-6 sm:gap-6 sm:grid-cols-3 md:mb-0 sm:mb-6">
                        <div>
                            <h2 className="text-sm font-semibold uppercase mb-2">Resources</h2>
                            <ul className="text-sm font-medium">
                                <li className="mb-2">
                                    <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold uppercase mb-2">Follow us</h2>
                            <ul className="text-sm font-medium">
                                <li className="mb-2">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline">Github</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold uppercase mb-2">Legal</h2>
                            <ul className="text-sm font-medium">
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-700 lg:my-8" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-xs sm:text-sm">&copy; 2023 <a href="https://flowbite.com/" className="hover:underline">Sakyo™</a>. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
