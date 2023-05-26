import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';

interface EmailProps {
    name: string;
    email: string;
    message: string;
}

export const Email: React.FC<Readonly<EmailProps>> = ({
    name,
    email,
    message,
}) => {
    const baseUrl = 'https://noviantodev.vercel.app/';
    return (
        <Html>
            <Head />
            <Tailwind>
                <Body className="mx-auto my-auto bg-white font-sans">
                    <Container className="mx-auto my-[40px] w-[600px] rounded border border-solid border-[#eaeaea] p-[20px]">
                        <Section
                            className="bg-[#f5f5f5]"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 30,
                            }}
                        >
                            <Img
                                src={`${baseUrl}noviantodev.png`}
                                alt="hero"
                                width={160}
                            />
                        </Section>
                        <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
                            You got a message!
                        </Heading>
                        <Text className="text-[14px] px-4 leading-[24px] text-black">
                            Hello Novianto,
                        </Text>
                        <Text className="text-[14px] px-4 leading-[24px] text-black">
                            You got an email from <strong>{name}</strong>.
                        </Text>
                        <Text className="text-[14px] px-4 leading-[24px] text-black">
                            Their email is {email}.
                        </Text>
                        <Text className="text-[14px] px-4 leading-[24px] text-black">
                            The message: <br />
                            {message}
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};
