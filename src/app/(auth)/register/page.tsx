"use client";

import React from "react";

import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast"



export default function Login() {
    const router = useRouter();
    const { toast } = useToast()

    //validate form
    const FormSchema = z.object({
        email: z.string()
            .min(1, "Email is required")
            .email("Invalid Email"),

        password: z
            .string()
            .min(1, "Password is required")
            .min(8, "Password cannot be less than 8 characters"),

        orgName: z
            .string()
            .min(1, "Organization name cannot be empty")
            .regex(/^[a-zA-Z0-9]*$/)
            .max(20, "Organization name should be less than 20 characters"),

        confirmPassword: z
            .string()
            .min(1, "Password is required")
            .min(8, "Password cannot be less than 8 characters")
    })
        .refine((data) => data.password === data.confirmPassword, {
            path: ['confirmPassword'],
            message: 'Password do not match'
        })

    // default values
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
            orgName: ""
        }
    })

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        // console.log(values);
        const response = await fetch('/api/auth/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                orgName: values.orgName,
                email: values.email,
                password: values.password
            })
        })
        // console.log(response);

        if (response.ok) {

            toast({
                title: "Account Created Successfully.",
                description: "Proceed to login",
            })
            router.push('/login');
        }
        else {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem creating your account.",
            })
            console.error(`Registration failed.`)
        }
    }

    return (
        <div className="border border-sky-300 rounded-2xl mt-20 ml-16 p-5 w-9/12">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">

                    {/* OrgName */}
                    <FormField
                        control={form.control}
                        name="orgName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Organization name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Organization name" type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Work email */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Work Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Work Email" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Password */}
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

                    {/* Confirm Password */}
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Re-enter Password" type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button type="submit">Sign Up</Button>
                </form>

                
                <div className='mx-auto my-3 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400 pr-12'>
                    or
                </div>


                {/* Sign in Prompt */}
                <p className='text-center text-sm pt-3'>
                    If you have an account, please&nbsp;
                    <Link className='hover:underline font-bold text-blue-500' href='/login'>
                        Sign in
                    </Link>
                </p>
            </Form>
        </ div>
    )
}