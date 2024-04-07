"use client";
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";


export default function Login() {
    const router = useRouter();
    const FormSchema = z.object({
        email: z
            .string()
            .min(1, "Email is required")
            .email("Invalid Email"),

        password: z
            .string()
            .min(1, "Password is required")
            .min(8, "Password cannot be less than 8 characters")
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        // console.log(values);

        const signInData = await signIn(`credentials`, {
            WorkEmail: values.email,
            password: values.password,
            redirect: false
        });
        if(signInData?.error)
        {
            toast({
                variant: "destructive",
                title: "Uh oh! Provided Credentials were wrong.",
                description: "Try again with correct credentials.",
            })
            console.log(signInData.error);
        }
        else{
            toast({
                title: "Success Authentication.",
                description: "Proceeding to your Dashboard.",
            })
            router.push('/dashboard');
        }
}

    return (
        <div className="border border-sky-300 rounded-2xl mt-44 ml-16 p-5 w-4/5">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Email" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Password" type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Sign in</Button>
                </form>
                <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400 pr-12'>
                    or
                </div>

                {/* Sign Up Prompt */}
                <p className='text-center text-sm mt-4'>
                    New to <span className="font-bold">billops </span>? Please &nbsp;
                    <Link className='text-blue-500 hover:underline font-bold' href='/register'>
                        Sign up
                    </Link>
                </p>
            </Form>
        </div>
    )
}




