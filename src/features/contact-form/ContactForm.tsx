'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { ArrowUpRight, Circle } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Name must be at least 2 characters.',
    }),
    email: z.string().email({
        message: 'Email must be a valid email.',
    }),
    message: z.string().min(10, {
        message: 'Message must be at least 10 characters.',
    }),
});

type FormType = z.infer<typeof formSchema>;

const ContactForm = () => {
    // 1. Define your form.
    const [loading, setLoading] = useState(false);
    const form = useForm<FormType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: FormType) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        try {
            setLoading(true);
            await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
        } catch (error) {
            console.error('Failed to send email:', error);
        } finally {
            setLoading(false);
            toast.success('Message sent! Thank you for contacting me.', {
                duration: 3000,
                position: 'bottom-right',
            });
            form.reset();
        }
    }

    return (
        <div className="mt-8">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <div className="flex flex-col md:flex-row gap-8 w-full">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="John Doe"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="your@email.com"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        rows={6}
                                        placeholder="Your message here..."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        loading={loading}
                        loadingText="Sending..."
                        type="submit"
                        variant="black"
                        className="w-60 flex items-center gap-1 group"
                    >
                        Submit
                        <ArrowUpRight
                            size={20}
                            className="inline-block group-hover:animate-arrow"
                        />
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default ContactForm;
