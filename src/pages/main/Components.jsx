import React from "react";
import CoffeeContainer from "../../components/CoffeeContainer";
import CoffeeButton from "../../components/CoffeeButton";
import CoffeeBadge from "../../components/CoffeeBadge";
import CoffeeAvatar from "../../components/CoffeeAvatar";
import CoffeeSectionHeader from "../../components/CoffeeSectionHeader";
import CoffeeCard from "../../components/CoffeeCard";
import CoffeeItemRow from "../../components/CoffeeItemRow";
import CoffeeTable from "../../components/CoffeeTable";
import CoffeeStatCard from "../../components/CoffeeStatCard";
import CoffeeInput from "../../components/CoffeeInput";
import CoffeeSelect from "../../components/CoffeeSelect";
import CoffeeSwitch from "../../components/CoffeeSwitch";
import CoffeeAlert from "../../components/CoffeeAlert";
import CoffeeSkeleton from "../../components/CoffeeSkeleton";
import CoffeeHeroBlock from "../../components/CoffeeHeroBlock";

export default function Components() {
  const tableHeaders = ["No", "Barista", "Shift Status", "Total Orders"];

  return (
    <CoffeeContainer className="space-y-10 pb-20">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">Reusable Components</h1>
        <p className="text-stone-500 text-sm mt-1">CRM Coffee Shop Component Design Systems</p>
      </div>

      {/* SECTION 1: BASIC */}
      <CoffeeCard>
        <CoffeeSectionHeader title="1. Basic Components" subtitle="Buttons, badges, and profile image representation" />
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <CoffeeButton type="primary">Primary Brew</CoffeeButton>
            <CoffeeButton type="secondary">Secondary</CoffeeButton>
            <CoffeeButton type="accent">Order Active</CoffeeButton>
            <CoffeeButton type="danger">Void Item</CoffeeButton>
          </div>
          <div className="flex gap-3 items-center">
            <CoffeeBadge status="active">Completed</CoffeeBadge>
            <CoffeeBadge status="pending">Preparing</CoffeeBadge>
            <CoffeeBadge status="danger">Cancelled</CoffeeBadge>
          </div>
          <div className="flex gap-2">
            <CoffeeAvatar name="Sarah" />
            <CoffeeAvatar name="Budi" image="https://images.unsplash.com/photo-1534778101976-62847782c213?w=80&auto=format&fit=crop&q=80" />
          </div>
        </div>
      </CoffeeCard>

      {/* SECTION 2: DATA DISPLAY & LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <CoffeeCard>
            <CoffeeSectionHeader title="2. Data Display & Tables" subtitle="Tabular roster framework" />
            <CoffeeTable headers={tableHeaders}>
              <tr className="hover:bg-stone-50/50">
                <td className="px-4 py-3 font-semibold text-stone-400">1</td>
                <td className="px-4 py-3 font-bold text-stone-800">Sarah Johnson</td>
                <td className="px-4 py-3"><CoffeeBadge status="active">On Duty</CoffeeBadge></td>
                <td className="px-4 py-3 font-semibold">42 Orders</td>
              </tr>
              <tr className="hover:bg-stone-50/50">
                <td className="px-4 py-3 font-semibold text-stone-400">2</td>
                <td className="px-4 py-3 font-bold text-stone-800">Michael S.</td>
                <td className="px-4 py-3"><CoffeeBadge status="pending">Resting</CoffeeBadge></td>
                <td className="px-4 py-3 font-semibold">19 Orders</td>
              </tr>
            </CoffeeTable>
          </CoffeeCard>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CoffeeStatCard title="Today's Revenue" value="$1,452.00" icon="$" rate="+12.4%" />
            <CoffeeStatCard title="Cups Sold" value="384 Pcs" icon="☕" rate="+4.8%" />
          </div>
        </div>

        {/* List Card Column */}
        <CoffeeCard className="flex flex-col justify-between">
          <div>
            <CoffeeSectionHeader title="3. Row Item System" subtitle="Best seller menu display" />
            <div className="space-y-3">
              <CoffeeItemRow title="Ice Caramel Macchiato" subtext="120 Sold" price="$5.50" image="https://images.unsplash.com/photo-1534778101976-62847782c213?w=120&auto=format&fit=crop&q=80" />
              <CoffeeItemRow title="Butter Croissant" subtext="94 Sold" price="$3.80" image="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=120&auto=format&fit=crop&q=80" />
            </div>
          </div>
        </CoffeeCard>
      </div>

      {/* SECTION 3: FORMS & FEEDBACKS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CoffeeCard className="space-y-4">
          <CoffeeSectionHeader title="4. Form Inputs" subtitle="Cashier POS input simulation" />
          <CoffeeInput label="Menu Item Name" placeholder="e.g., Espresso Single Shot" />
          <CoffeeSelect label="Category Block" options={["Coffee", "Bakery", "Non-Coffee", "Merchandise"]} />
          <CoffeeSwitch label="Auto Print POS Receipt" defaultChecked={true} />
        </CoffeeCard>

        <CoffeeCard className="space-y-4">
          <CoffeeSectionHeader title="5. Feedback Notification" subtitle="System automated messages" />
          <CoffeeAlert message="Transaction secured. Receipt generated successfully." type="success" />
          <CoffeeSkeleton />
        </CoffeeCard>
      </div>

      {/* SECTION 4: SECTION HERO BLOCK */}
      <div className="space-y-4">
        <CoffeeSectionHeader title="6. Section Block Component" subtitle="Promotional banner components" />
        <CoffeeHeroBlock title="Upgrade to Enterprise Kitchen!" description="Manage multi-tier stock ingredients, automatic vendor purchase order logging, and comprehensive real-time financial tracking modules." actionText="Explore Feature" />
      </div>

    </CoffeeContainer>
  );
}