import clsx from 'clsx';
import { BaseComponent } from './types';

function Container({ className, children, ...rest }: BaseComponent) {
    return (
        <main className={clsx('container', 'px-6', 'mx-auto', className)} {...rest}>
            {children}
        </main>
    );
}

function HeroTitle({ className, children, ...rest }: BaseComponent<HTMLHeadingElement>) {
    return (
        <h1 className={clsx('text-3xl', 'md:text-5xl', 'font-bold', 'my-4', className)} {...rest}>
            {children}
        </h1>
    );
}

function HeroSubTitle({ className, children, ...rest }: BaseComponent<HTMLHeadingElement>) {
    return (
        <h3 className={clsx('text-base', 'md:text-2xl', className)} {...rest}>
            {children}
        </h3>
    );
}

export function Page(props: BaseComponent) {
    return <Container {...props} />;
}

Page.Container = Container;
Page.HeroTitle = HeroTitle;
Page.HeroSubTitle = HeroSubTitle;
