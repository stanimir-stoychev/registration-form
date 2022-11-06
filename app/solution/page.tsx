import { Page } from '@/src/components';
import styles from './page.module.css';
import { RegistrationForm } from './RegistrationForm';

export default function Solution() {
    return (
        <Page>
            <div className={styles['page-title-container']}>
                <h1>Registration</h1>
            </div>
            <div className={styles['page-content']}>
                <RegistrationForm />
            </div>
        </Page>
    );
}
