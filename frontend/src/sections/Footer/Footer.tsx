

export default function Footer() {
    return(
    <footer className="text-white py-4">
        <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm">
            © 2024 SolidGuard. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
            </div>
        </div>
    </footer>
    );
}