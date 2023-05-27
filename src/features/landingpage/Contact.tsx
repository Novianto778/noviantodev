import { WavingHand } from '@/assets/icon';
import Container from '@/components/layout/Container';
import ContactForm from '@/features/contact-form/ContactForm';
import Image from 'next/image';

type Props = {};

const Contact = (props: Props) => {
    return (
        <section className="mt-16" id="contact">
            <Container className="max-w-5xl">
                <h2 className="text-4xl font-semibold">
                    Love to hear from you,
                    <span className="flex items-center gap-2 mt-2">
                        Let's get in touch!
                        <Image
                            src={WavingHand.src}
                            width={36}
                            height={36}
                            alt="emoji"
                        />
                    </span>
                </h2>
                <ContactForm />
            </Container>
        </section>
    );
};

export default Contact;
