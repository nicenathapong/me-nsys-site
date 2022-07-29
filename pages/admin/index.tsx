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
                                {/* <div className="mx-auto w-[300px]">
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
                                </div> */}
                                <div className="mx-auto w-[300px] bg-gradient-to-tr from-blue-900 to-blue-900/20 p-4 rounded-lg shadow-lg hover:shadow-xl shadow-blue-500/60 hover:shadow-blue-500/40 border-[1px] border-blue-500 transition">
                                    <div className="mb-8">
                                        <h1 className="text-2xl font-bold drop-shadow-md">
                                            Login
                                        </h1>
                                        <p className="text-white/60">
                                            เข้าสู่ระบบหลังบ้าน
                                        </p>
                                    </div>
                                    <form>
                                        <div className="space-y-2 mb-8">
                                            <div className="relative text-white/40">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    className="w-full py-1.5 pl-10 pr-3 bg-white/10 rounded-md"
                                                    placeholder="ชื่อผู้ใช้"
                                                />
                                                <a className="absolute left-4 top-[6px]">
                                                   <i className="fas fa-user" /> 
                                                </a>  
                                            </div>
                                            <div className="relative text-white/40">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="w-full py-1.5 pl-10 pr-3 bg-white/10 rounded-md"
                                                    placeholder="รหัสผ่าน"
                                                />
                                                <a className="absolute left-4 top-[6px]">
                                                    <i className="fas fa-key" />
                                                </a>  
                                            </div>
                                        </div>
                                        <button type="submit" className="w-full py-1.5 bg-gradient-to-tr from-white/40 to-white/10 rounded-md font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-white/40 transition">
                                            <i className="fas fa-sign-in" /> เข้าสู่ระบบเลย!
                                        </button>
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
