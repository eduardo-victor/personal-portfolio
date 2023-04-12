function LandingPage() {
    return (
        <div className="w-full h-screen">
            <div className="w-full h-screen">
                <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                    <img src="https://avatars.githubusercontent.com/u/100293881?s=400&u=8669f87a5f163b58feead5f56ac2ea5bdce8460d&v=4" alt="" className="w-36 h-36 rounded-full border-2 border-[#008fee]"/>
                    <h1 className="text-4xl font-['Poppins']">Hello, my name is <span className="font-['Poppins'] text-[#008fee] ">Víctor!</span></h1>
                    <h1 className="text-2xl">A young Web Developer and Information Security enthusiast.</h1>
                    {/* <div className="border-b-2 border-gray-300 w-[80%]"></div> */}
                </div>
                <div className="w-full h-full flex flex-col items-center mt-6 bg-[#008fee]">
                </div>
            </div>
        </div>
    )
} export default LandingPage