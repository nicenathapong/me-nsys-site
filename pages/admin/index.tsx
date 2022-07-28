import type { NextPage } from "next";

const Admin: NextPage = () => {
    return (
        <>
            <div className="bg-black h-screen">
                <div className="flex bg-gradient-to-t from-blue-700/25 to-transparent h-full">
                    <div className="m-auto">
                        <div className="text-white">
                            <img
                                className="h-[64px] mb-12"
                                src="/images/nSys-Industries-white.png"
                                alt=""
                            />
                            <div className="flex">
                                <div className="mx-auto w-[300px]">
                                    <h1 className="text-2xl font-bold underline underline-offset-1 mb-4">
                                        Login
                                    </h1>
                                    <form>
                                        <div className="space-y-4">
                                            <div className="w-full">
                                                <p className="mb-2 text-sm text-white/60">username</p>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    className="w-full bg-transparent border-[1px] py-1.5 px-2"
                                                />
                                            </div>
                                            <div>
                                                <p className="mb-2 text-sm">password</p>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="w-full bg-transparent border-[1px] py-1.5 px-2"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;
