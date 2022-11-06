import clsx from 'clsx';
import { BaseComponent } from '@/src/components/types';
import styles from './Checklist.module.css';

interface ChecklistItemProps extends BaseComponent<HTMLLIElement> {
    completed?: boolean;
}

function ChecklistItem({ className, children, completed = false, ...rest }: ChecklistItemProps) {
    return (
        <li className={clsx(className, styles['checklist-item'])} {...rest}>
            <span className={styles['status-indicator']} data-completed={completed}>
                {completed ? '✔︎' : '✘'}
            </span>
            {children}
        </li>
    );
}

export function Checklist({ className, ...rest }: BaseComponent<HTMLUListElement>) {
    return <ul className={clsx(className, styles.checklist)} {...rest} />;
}

Checklist.Item = ChecklistItem;
