import Image from 'next/image';
import clsx from 'clsx';

import styles from './page.module.css';

export default function Home() {
    return (
        <div
            className={clsx(
                'container',
                'pt-24',
                'md:pt-48',
                'px-6',
                'mx-auto',
                'flex',
                'flex-wrap',
                'flex-col',
                'md:flex-row',
                'items-center',
            )}
        >
            <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                <h1
                    className={clsx(
                        'my-4',
                        'text-3xl',
                        'md:text-5xl',
                        'text-purple-800',
                        'font-bold',
                        'leading-tight',
                        'text-center',
                        'md:text-left',
                        styles['slide-in-bottom-h1'],
                    )}
                >
                    Registration form
                </h1>
                <p
                    className={clsx(
                        'leading-normal',
                        'text-base',
                        'md:text-2xl',
                        'mb-8',
                        'text-center',
                        'md:text-left',
                        styles['fade-in'],
                    )}
                >
                    by Stanimir Stoychev
                </p>
            </div>

            <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
                <Image
                    className={clsx('w-5/6', 'mx-auto', 'lg:mr-0', styles['slide-in-bottom'])}
                    src="/devices.svg"
                    alt="Image of different devices"
                    width={100}
                    height={100}
                />
            </div>
        </div>
    );
}
