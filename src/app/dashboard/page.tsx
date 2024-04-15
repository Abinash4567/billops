import Analytics from "@/components/common/analytics";
import Chart from "@/components/common/chart";
import Sales, { SalesProps } from "@/components/common/sales";
import { CardContent } from "@/components/ui/card";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { Session, getServerSession } from "next-auth";
import { fetchTranscation, refineData } from "@/lib/dashboard/serverMethods";


// const uesrSalesData: SalesProps[] = [
//   {
//     name: "Olivia Martin",
//     email: "olivia.martin@email.com",
//     saleAmount: "+$1,999.00"
//   },
//   {
//     name: "Jackson Lee",
//     email: "isabella.nguyen@email.com",
//     saleAmount: "+$1,999.00"
//   },
//   {
//     name: "Isabella Nguyen",
//     email: "isabella.nguyen@email.com",
//     saleAmount: "+$39.00"
//   },
//   {
//     name: "William Kim",
//     email: "will@email.com",
//     saleAmount: "+$299.00"
//   },
//   {
//     name: "Sofia Davis",
//     email: "sofia.davis@email.com",
//     saleAmount: "+$39.00"
//   }
// ];

export default async function Dashboard() {
  const session: Session | null = await getServerSession(authOptions);
  const orgId: string = session?.user.id!;
  const transactionData = await fetchTranscation({ orgId });
  const transcation = transactionData[0];
  const uesrSalesData = refineData(transcation);
  const numberOfTranscations = transactionData[1];

  return (
    <div className="pt-4 ml-6 w-full">
      <h2 className="text-3xl font-bold ">Hi, Welcome back 👋</h2>
      <Analytics orgId={orgId} />
      <div className="flex mt-5">
        <Chart orgId={orgId} />

        <CardContent className="ml-2 pt-2 justify-between gap-4 w-1/2 border border-slate-400 rounded-lg overflow-y-scroll no-scrollbar h-[400px]">
          <section>
            <div>Recent Sales</div>
            <div className="text-sm text-gray-400">
              You made {numberOfTranscations} sales this month.
            </div>
          </section>
          {uesrSalesData.map((d, i) => (
            <Sales
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>
      </div>
    </div>
  );
}
