'use client';
import { Button } from '@/components/ui/button'
import { Copy } from "lucide-react"
import { useSession } from 'next-auth/react';
import React from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import generateRandomString from '@/lib/common/random';
import { setAPIKey } from '@/lib/dashboard/serverMethods';
import { toast } from '@/components/ui/use-toast';

export default function Settings() {
  const session = useSession();
  const orgName = session.data?.user.OrgName;
  const workEmail = session.data?.user.workEmail;
  const orgId: string = session.data?.user.id!;

  async function handleClick() {
    const key: string = generateRandomString(10);
    await navigator.clipboard.writeText(key);
    const res = setAPIKey({ orgId: parseInt(orgId), key });
    toast({
      title: "API key was changed.",
      description: "Use API endpoints with this one.",
  })
  }


  
  return (
    <div className="border border-slate-800 w-[calc(100vw-240px)] h-screen pt-5 pl-5">
      <div className="text-4xl font-extrabold text-slate-300">Settings</div>

      <div className="mt-5 text-slate-400">
        Name:{" "}
        <span className="font-semibold tracking-wide text-slate-300">
          {orgName}
        </span>
      </div>

      <div className="mt-5 text-slate-400">
        OrgId:{" "}
        <span className="font-semibold tracking-wide text-slate-300">
          {orgId}
        </span>
      </div>

      <div className="mt-2 text-slate-400">
        Work Email:{" "}
        <span className="font-semibold tracking-wide text-slate-300">
          {workEmail}
        </span>
      </div>

      <div className="mt-2 text-slate-400">
        API Key:{" "}
        <span className="font-semibold tracking-wide text-slate-300">
          *******
        </span>
        <span className="ml-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                Generate New
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>New API key Generated</DialogTitle>
                <DialogDescription>
                  Copy this key. You won&apos;t be able to retrieve this after
                  closing this window.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Link
                  </Label>
                  <Input
                    id="link"
                    defaultValue="***************"
                    readOnly
                  />
                </div>
                <Button type="submit" size="sm" className="px-3" onClick={handleClick}>
                  <span className="sr-only">Copy</span>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </span>
      </div>
    </div>
  );
}


