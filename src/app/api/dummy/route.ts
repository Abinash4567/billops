import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {
    try {
            const response = await db.orgModel.create({ data: {
                orgName: "Nestle",
                password: "Hellowerw23322",
                address: "NYC",
                workEmail: "abiash@gmil.com",
                contact: "984u59345",
            } });
            console.log(response);
            return NextResponse.json("success");
        }
        catch (error) {
        return NextResponse.json('error');
    
}
}