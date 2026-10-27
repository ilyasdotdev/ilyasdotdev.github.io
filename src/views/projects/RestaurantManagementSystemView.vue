<script setup lang="ts">
import Image from 'primevue/image'
import Tag from 'primevue/tag'

// Plain #anchors would be read as routes by the hash router, so scroll by hand
const scrollToScreens = () => document.getElementById('screens')?.scrollIntoView({ behavior: 'smooth' })

const highlights = [
  { value: '< 1 s', label: 'from waiter phone to kitchen screen' },
  { value: 'Offline', label: 'service never waits for the internet' },
  { value: '60', label: 'devices per branch at once' },
  { value: '1', label: 'server per branch, set up with one script' }
]

const features = [
  {
    icon: 'pi pi-desktop',
    title: 'Point of sale',
    text: 'Live floor plan, dine-in, takeaway and delivery. Split bills, discounts with approval, tips, complimentary bills, refunds and shift close with an X report.'
  },
  {
    icon: 'pi pi-mobile',
    title: 'Waiter app on any phone',
    text: 'Waiters sign in with a PIN, take the order at the table and send it straight to the kitchen. They get a buzz when food is ready. Runs in the phone browser, nothing to install.'
  },
  {
    icon: 'pi pi-stopwatch',
    title: 'Kitchen display',
    text: 'A screen for each station with ageing tickets, an all-day count of every pending item and one-tap bump. Falls back to the station printer if a screen is off.'
  },
  {
    icon: 'pi pi-truck',
    title: 'Delivery with your own riders',
    text: 'Customer lookup by phone, delivery charge by area, dispatch to riders, a rider app and cash hand-over that shows any shortfall.'
  },
  {
    icon: 'pi pi-calendar',
    title: 'Reservations and waitlist',
    text: 'Bookings with table suggestions, deposits, no-shows and a walk-in waitlist that shows how long each party has waited.'
  },
  {
    icon: 'pi pi-box',
    title: 'Inventory and purchasing',
    text: 'Stock deducted by recipe, main and kitchen stores, purchase orders, receiving by brand, wastage, counts, low-stock and expiry alerts. Stock never blocks a sale.'
  },
  {
    icon: 'pi pi-book',
    title: 'Built-in accounting',
    text: 'A double-entry ledger that every sale, purchase and payment posts to automatically. Profit and loss, balance sheet, cash book, supplier payables and credit customers.'
  },
  {
    icon: 'pi pi-chart-bar',
    title: 'Reports that answer questions',
    text: 'Sales by hour and item, a 30-day trend, profit by month, waiter performance, kitchen times, food cost, theoretical vs actual use, voids and discounts.'
  },
  {
    icon: 'pi pi-percentage',
    title: 'Your tax rules',
    text: 'Tax by payment method (for example a lower rate for card), optional service charge, rounding and currency are all settings, not code.'
  }
]

const advantages = [
  {
    title: 'Keeps working when the internet does not',
    text: 'Each branch runs on its own server on the restaurant network. Orders, kitchen and billing never wait for the cloud.'
  },
  {
    title: 'One view of every branch',
    text: 'An optional central cloud server collects a copy of each branch\'s data for head-office reports, branch comparison, license delivery and off-site backups. Each branch still sets its own menu and prices.'
  },
  {
    title: 'Numbers that always agree',
    text: 'Sales, stock and accounts are updated together in one step, so the ledger, the stock report and the till never tell different stories.'
  },
  {
    title: 'Every action has a name on it',
    text: 'Every staff member signs in, sensitive actions need a manager\'s approval, and the audit log is kept for years.'
  },
  {
    title: 'Simple to run',
    text: 'Install, start, back up, restore and upgrade with ready-made scripts. Nightly backups are automatic and an upgrade can be rolled back.'
  },
  {
    title: 'Fair licensing',
    text: 'A license file per branch, installed from the admin screen or delivered from the central server. If it lapses, a grace period comes first and your data stays readable.'
  }
]

const screens = [
  {
    src: '/images/rms/pos-floor.webp',
    title: 'Point of sale',
    caption: 'Live floor plan: free tables, bills requested, takeaway and delivery queue.'
  },
  {
    src: '/images/rms/pos-payment.webp',
    title: 'Taking payment',
    caption: 'Cash or a named card machine, tips and change. The card total is shown too when tax differs.'
  },
  {
    src: '/images/rms/kitchen-display.webp',
    title: 'Kitchen display',
    caption: 'Tickets per station with a running timer and an all-day count.'
  },
  {
    src: '/images/rms/reports-dashboard.webp',
    title: 'Owner dashboard',
    caption: 'Today against the same day last week, and net sales for the last 30 days.'
  },
  {
    src: '/images/rms/inventory-stock.webp',
    title: 'Inventory',
    caption: 'Stock per store with value, reorder levels and expiry alerts.'
  },
  {
    src: '/images/rms/profit-and-loss.webp',
    title: 'Profit and loss',
    caption: 'Straight from the ledger, with no spreadsheets.'
  },
  {
    src: '/images/rms/reservations.webp',
    title: 'Reservations',
    caption: 'Bookings, deposits and a walk-in waitlist for the host.'
  }
]
</script>

<template>
  <div class="w-full flex justify-center mb-20">
    <div class="container px-4">
      <!-- Hero -->
      <section class="grid gap-10 lg:grid-cols-2 items-center py-10">
        <div>
          <Tag value="Project" severity="success" class="mb-4" />
          <h1 class="font-bold text-4xl lg:text-5xl py-3">Restaurant Management System</h1>
          <p class="text-lg text-gray-700">
            One system for the whole restaurant: point of sale, waiter phones, kitchen screens,
            delivery, reservations, inventory, accounting and reports. Each branch runs on its own
            server, so service carries on even when the internet is down.
          </p>
          <ul class="mt-5 space-y-2">
            <li class="flex gap-2"><i class="pi pi-check-circle text-green-700 mt-1" />Built for multi-branch restaurants, ready for a single branch</li>
            <li class="flex gap-2"><i class="pi pi-check-circle text-green-700 mt-1" />Runs on the restaurant's own network, no internet needed for service</li>
            <li class="flex gap-2"><i class="pi pi-check-circle text-green-700 mt-1" />Optional cloud head office for reports across all branches</li>
          </ul>
          <div class="mt-6 flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/muhammad-ilyas-2012/" target="_blank"
               class="inline-flex items-center gap-2 rounded bg-green-700 px-4 py-2 font-bold text-white hover:bg-green-800">
              <i class="pi pi-linkedin" /> Ask for a demo
            </a>
            <button type="button" @click="scrollToScreens"
               class="inline-flex items-center gap-2 rounded border border-green-700 px-4 py-2 font-bold text-green-700 hover:bg-green-50">
              <i class="pi pi-images" /> See the screens
            </button>
          </div>
        </div>
        <div class="flex justify-center gap-4 items-end">
          <Image src="/images/rms/pos-floor.webp" alt="Point of sale floor plan" preview
                 image-class="rounded-lg shadow-lg border border-gray-200" class="w-3/4" />
          <Image src="/images/rms/waiter-phone.webp" alt="Waiter ordering on a phone" preview
                 image-class="rounded-lg shadow-lg border border-gray-200" class="w-1/4" />
        </div>
      </section>

      <!-- Highlights -->
      <section class="grid grid-cols-2 lg:grid-cols-4 gap-4 my-5">
        <div v-for="h in highlights" :key="h.label" class="rounded-lg bg-gray-100 p-5 text-center">
          <p class="text-3xl font-bold text-green-700">{{ h.value }}</p>
          <p class="text-sm text-gray-600 mt-1">{{ h.label }}</p>
        </div>
      </section>

      <!-- Features -->
      <h2 class="text-3xl font-bold py-5">Features</h2>
      <section class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="f in features" :key="f.title" class="rounded-lg border border-gray-200 p-5">
          <i :class="[f.icon, 'text-2xl text-green-700']" />
          <h3 class="text-xl font-bold py-2">{{ f.title }}</h3>
          <p class="text-gray-700">{{ f.text }}</p>
        </div>
      </section>

      <!-- Screens -->
      <h2 id="screens" class="text-3xl font-bold py-5 mt-5">Screens</h2>
      <p class="text-lg mb-5">Click any screen to see it full size.</p>
      <section class="grid gap-8 md:grid-cols-2">
        <figure v-for="s in screens" :key="s.src">
          <Image :src="s.src" :alt="s.title" preview
                 image-class="w-full aspect-[16/10] object-cover object-top rounded-lg shadow border border-gray-200" />
          <figcaption class="mt-2">
            <span class="font-bold">{{ s.title }}.</span> {{ s.caption }}
          </figcaption>
        </figure>
      </section>

      <!-- Advantages -->
      <h2 class="text-3xl font-bold py-5 mt-5">Why restaurants choose it</h2>
      <section class="grid gap-5 md:grid-cols-2">
        <div v-for="a in advantages" :key="a.title" class="flex gap-3">
          <i class="pi pi-verified text-green-700 text-xl mt-1" />
          <div>
            <h3 class="text-xl font-bold">{{ a.title }}</h3>
            <p class="text-gray-700">{{ a.text }}</p>
          </div>
        </div>
      </section>

      <!-- How it is set up -->
      <h2 class="text-3xl font-bold py-5 mt-5">How it is set up</h2>
      <ol class="list-decimal ml-10 space-y-2 text-lg">
        <li>Each branch gets one small server on its local network. POS screens, kitchen screens and staff phones open it in the browser.</li>
        <li>A short setup wizard asks for tables, tax, service charge, payment methods and printers. Then add the menu and staff.</li>
        <li>Receipt and kitchen printers on the network print bills, tickets and purchase orders.</li>
        <li>For more than one branch, switch on the central cloud server to see every branch's reports in one place.</li>
      </ol>

      <div class="bg-gray-100 p-5 rounded-lg my-10">
        <p class="font-bold">Interested?</p>
        <p>
          RMS is built with and for a multi-branch restaurant in Pakistan, and works for any country's tax and currency. To see a demo or talk about your restaurant,
          message me on
          <a href="https://www.linkedin.com/in/muhammad-ilyas-2012/" target="_blank" class="text-blue-500">LinkedIn</a>.
        </p>
      </div>
    </div>
  </div>
</template>
