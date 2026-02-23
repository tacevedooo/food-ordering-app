const Footer = () => {
    return (<div className="bg-violet-500 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-3x1 text-white font-bold tracking-tight">
                StackFood.com
            </span>
            <span className="text-white font-bold tracking-tight flex gap-4">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </span>
        </div>
    </div>);
};

export default Footer;