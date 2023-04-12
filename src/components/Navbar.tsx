function Navbar () {
    return (
        <div className="w-full flex items-center justify-between h-20 bg-white shadow-md">
            <div className="p-6">
                <h1 className="text-2xl font-normal font-['Poppins']">Víctor Eduardo</h1>
            </div>
            <div className="flex gap-4 p-6">
                <button className="p-3 hover:bg-[#008fee] hover:text-white transition delay-200 rounded-sm">About me</button>
                <button className="p-3 hover:bg-[#008fee] hover:text-white transition delay-200 rounded-sm">Projects</button>
                <button className="p-3 hover:bg-[#008fee] hover:text-white transition delay-200 rounded-sm">Contact</button>
            </div>
        </div>
    )
} export default Navbar