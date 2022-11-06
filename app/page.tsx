import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faDna } from '@fortawesome/free-solid-svg-icons';

import { Page } from '@/src/components';
import styles from './page.module.css';

export default function Home() {
    return (
        <Page className={['pt-24', 'md:pt-48', 'flex', 'flex-wrap', 'flex-col', 'md:flex-row', 'items-center']}>
            <section className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                <Page.HeroTitle
                    className={[
                        'text-purple-800',
                        'leading-tight',
                        'text-center',
                        'md:text-left',
                        styles['slide-in-bottom-h1'],
                    ]}
                >
                    Registration form
                </Page.HeroTitle>

                <Page.HeroSubTitle
                    className={[
                        'leading-normal',
                        'mb-8',
                        'text-center',
                        'md:text-left',
                        styles['slide-in-bottom-subtitle'],
                    ]}
                >
                    by Stanimir Stoychev
                </Page.HeroSubTitle>

                <ul className={clsx('flex', 'space-x-2', styles['fade-in'])}>
                    <li>
                        <Link
                            href="/technical-challenge.pdf"
                            target="_blank"
                            className="bg-blue-100 hover:bg-indigo-800 text-gray-800 hover:text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center"
                        >
                            <FontAwesomeIcon icon={faDownload} className="mr-2" />
                            <span>Technical challenge</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/solution"
                            className="bg-blue-50 hover:bg-indigo-500 text-gray-800 hover:text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center"
                        >
                            <FontAwesomeIcon icon={faDna} className="mr-2" />
                            <span>Solution</span>
                        </Link>
                    </li>
                </ul>
            </section>

            <aside className="w-full xl:w-3/5 py-6 overflow-y-hidden">
                <Image
                    className={clsx('w-5/6', 'mx-auto', 'lg:mr-0', styles['slide-in-bottom'])}
                    src="/devices.svg"
                    alt="Image of different devices"
                    width={100}
                    height={100}
                />
            </aside>
        </Page>
    );
}
