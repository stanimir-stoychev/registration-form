import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faUntappd } from '@fortawesome/free-brands-svg-icons';

export default function Navigation() {
    return (
        <nav className="w-full container mx-auto p-6">
            <div className="w-full flex items-center justify-between">
                <Link
                    className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                    href="/"
                >
                    <FontAwesomeIcon icon={faUntappd} className="mr-2" />
                    Home
                </Link>

                <div className="flex w-1/2 justify-end content-center">
                    <Link
                        className="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4"
                        href="https://github.com/stanimir-stoychev/registration-form"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
