import { redirect } from "next/navigation";
import AccountSetting from "./_components/AccountSetting";
import OrderHistory from "./_components/OrderHistory";
import PersonalInfo from "./_components/PersonalInfo";
import { auth } from "../auth";

export default async function AccountPage() {
  const session = await auth();
  if (!session) {
    return redirect("/account/login");
  }
  const reponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/users/${parseInt(
      session?.user?.sub
    )}`
  );

  const user = await reponse.json();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>
        <PersonalInfo user={user} />
        <OrderHistory user={user} />
        <AccountSetting user={user} />
      </div>
    </div>
  );
}
