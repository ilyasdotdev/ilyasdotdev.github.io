<script setup lang="ts">
import Image from 'primevue/image'
import Tag from 'primevue/tag'

const email = 'm.ilyas@live.com'
const whatsappNumber = '+92-321-8916364'
const demoMessage = 'Hi, I would like a demo of Generic POS.'
const whatsappUrl = `https://wa.me/923218916364?text=${encodeURIComponent(demoMessage)}`
const emailUrl = `mailto:${email}?subject=${encodeURIComponent('Generic POS demo')}`

// Plain #anchors would be read as routes by the hash router, so scroll by hand
const scrollToScreens = () => document.getElementById('screens')?.scrollIntoView({ behavior: 'smooth' })

const highlights = [
  { value: '< 50 ms', label: 'from barcode scan to item on screen' },
  { value: '< 1 s', label: 'to settle a sale and start printing' },
  { value: '200,000', label: 'items with five years of sales on a laptop' },
  { value: '30 min', label: 'from install to the first sale' }
]

const features = [
  {
    icon: 'pi pi-shopping-cart',
    title: 'Counter sale',
    text: 'Scan, weigh or search, line and bill discounts, split payments across cash, card, wallet and credit, hold and recall, quotations, returns and exchanges.'
  },
  {
    icon: 'pi pi-search',
    title: 'Search that forgives typos',
    text: 'Find any of 200,000 items by name, Urdu name, barcode, SKU, part number or attribute in under 100 ms, even with a spelling mistake.'
  },
  {
    icon: 'pi pi-wallet',
    title: 'Khata and customer credit',
    text: 'Credit limits with a manager\'s approval above them, payments by any tender, statements, receivables ageing and WhatsApp or SMS reminders.'
  },
  {
    icon: 'pi pi-box',
    title: 'Stock and purchasing',
    text: 'Stock per location with full history, transfers, counts, purchase orders, receiving with average cost, supplier returns and a "what to buy" list.'
  },
  {
    icon: 'pi pi-money-bill',
    title: 'Shifts and cash',
    text: 'Opening float, cash in and out, expenses from the drawer, a closing count per shift and a day close with a Z report.'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Reports and dashboard',
    text: 'Sales by day, item, category, brand, cashier and customer, profit, stock value, dead and expiring stock, balances and the cash book. Export to Excel, CSV or PDF.'
  },
  {
    icon: 'pi pi-tags',
    title: 'Catalogue and labels',
    text: 'Items with packs, several barcodes and Urdu names, Excel import and export, price change history, quick keys and barcode labels.'
  },
  {
    icon: 'pi pi-print',
    title: 'Receipts in English and Urdu',
    text: '58 mm, 80 mm or A4 receipts on network or browser printers, with the tax breakdown, savings and a scannable receipt number.'
  },
  {
    icon: 'pi pi-users',
    title: 'Roles and PIN sign-in',
    text: 'Owner, manager, cashier, stock keeper and salesperson roles the owner can edit. Approved devices, PIN sign-in at the counter and manager overrides.'
  }
]

const shopTypes = [
  { icon: 'pi pi-shopping-bag', title: 'Mini mart and kiryana', text: 'Weighed items, scale labels, quick keys, batches and expiry, credit customers' },
  { icon: 'pi pi-wrench', title: 'Hardware', text: 'Measured units, variants, price tiers, quotations, part numbers' },
  { icon: 'pi pi-bolt', title: 'Electrical', text: 'Measured units, variants, optional serial numbers, price tiers, quotations' },
  { icon: 'pi pi-home', title: 'Sanitary', text: 'Measured units, variants, quotations' },
  { icon: 'pi pi-sparkles', title: 'Cosmetics', text: 'Shades and sizes, batches sold earliest expiry first' },
  { icon: 'pi pi-mobile', title: 'Mobile accessories', text: 'Variants, serial and IMEI numbers with warranty and history' },
  { icon: 'pi pi-car', title: 'Auto and motorcycle parts', text: 'Part numbers and alternates, find by vehicle, price tiers' },
  { icon: 'pi pi-tag', title: 'Garments and footwear', text: 'Size by colour grid for creating and receiving stock' },
  { icon: 'pi pi-shop', title: 'General retail', text: 'The core features, ready for any other shop' }
]

const screens = [
  {
    src: '/images/gpos/pos-sale.webp',
    title: 'Sale screen',
    caption: 'Scan or type a name, quick keys for loose items, and a shortcut key for every action.'
  },
  {
    src: '/images/gpos/pos-payment.webp',
    title: 'Taking payment',
    caption: 'Cash, card, JazzCash, Easypaisa, bank transfer or khata, with quick cash amounts and split payments.'
  },
  {
    src: '/images/gpos/owner-dashboard.webp',
    title: 'Owner dashboard',
    caption: 'Today\'s sales, profit, cash in drawers, money owed both ways and stock that needs attention.'
  },
  {
    src: '/images/gpos/reports.webp',
    title: 'Reports',
    caption: 'Pick a report and dates, then save it as Excel or CSV or print it.'
  },
  {
    src: '/images/gpos/customers.webp',
    title: 'Customers',
    caption: 'Every customer\'s credit limit and khata balance in one list.'
  },
  {
    src: '/images/gpos/who-owes-what.webp',
    title: 'Who owes what',
    caption: 'Customer balances by age, so you know who to remind first.'
  },
  {
    src: '/images/gpos/what-to-buy.webp',
    title: 'What to buy',
    caption: 'Items at or below their reorder level, turned into a purchase order in one click.'
  }
]

const advantages = [
  {
    title: 'No internet needed',
    text: 'GPOS runs on one laptop or small PC in the shop. Other counters, the back office and phones use it in the browser over the shop Wi-Fi.'
  },
  {
    title: 'Stock and cash always agree',
    text: 'Each sale, its stock movements, credit posting and audit record are saved together before the receipt prints. Nothing is ever edited after the fact.'
  },
  {
    title: 'One product for every shop',
    text: 'A new shop type is a setting, not new code. Switch features on or off at any time and add your own item fields, like wattage or fabric.'
  },
  {
    title: 'Every action has a name on it',
    text: 'A tamper-evident audit log records prices, discounts, voids, returns, overrides and cash movements, and is checked every night.'
  },
  {
    title: 'Your tax, your currency',
    text: 'Prices with or without tax, tax classes, tenders, rounding, currency and language are all settings. PKR and Urdu work out of the box.'
  },
  {
    title: 'Simple to run',
    text: 'Install with Docker, start, stop and back up with ready-made scripts. A daily check confirms no sale was lost, and a support bundle can be downloaded for help.'
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
          <h1 class="font-bold text-4xl lg:text-5xl py-3">Generic POS</h1>
          <p class="text-lg text-gray-700">
            A fast point of sale for small shops: kiryana and mini marts, hardware, electrical,
            sanitary, cosmetics, mobile accessories, auto parts, garments and most other retail.
            It runs on one computer in the shop and works without internet.
          </p>
          <ul class="mt-5 space-y-2">
            <li class="flex gap-2"><i class="pi pi-check-circle text-green-700 mt-1" />Checkout stays instant with 200,000 items</li>
            <li class="flex gap-2"><i class="pi pi-check-circle text-green-700 mt-1" />Khata, stock, suppliers and reports in one place</li>
            <li class="flex gap-2"><i class="pi pi-check-circle text-green-700 mt-1" />Nine ready shop types, set up from a short wizard</li>
          </ul>
          <div class="mt-6 flex flex-wrap gap-3">
            <a :href="whatsappUrl" target="_blank"
               class="inline-flex items-center gap-2 rounded bg-green-700 px-4 py-2 font-bold text-white hover:bg-green-800">
              <i class="pi pi-whatsapp" /> Ask for a demo
            </a>
            <a :href="emailUrl"
               class="inline-flex items-center gap-2 rounded border border-green-700 px-4 py-2 font-bold text-green-700 hover:bg-green-50">
              <i class="pi pi-envelope" /> Email
            </a>
            <button type="button" @click="scrollToScreens"
               class="inline-flex items-center gap-2 rounded border border-green-700 px-4 py-2 font-bold text-green-700 hover:bg-green-50">
              <i class="pi pi-images" /> See the screens
            </button>
          </div>
        </div>
        <Image src="/images/gpos/pos-sale.webp" alt="Generic POS sale screen" preview
               image-class="rounded-lg shadow-lg border border-gray-200" />
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

      <!-- Shop types -->
      <h2 id="shop-types" class="text-3xl font-bold py-5 mt-5">Made for your kind of shop</h2>
      <p class="text-lg mb-5">Pick a shop type at setup. Each one switches on the features that shop needs, and you can change them later.</p>
      <section class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="t in shopTypes" :key="t.title" class="flex gap-3 rounded-lg bg-gray-100 p-4">
          <i :class="[t.icon, 'text-xl text-green-700 mt-1']" />
          <div>
            <h3 class="font-bold">{{ t.title }}</h3>
            <p class="text-sm text-gray-600">{{ t.text }}</p>
          </div>
        </div>
      </section>

      <!-- Advantages -->
      <h2 class="text-3xl font-bold py-5 mt-5">Why shops choose it</h2>
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
        <li>Install GPOS on the shop's laptop or PC. Other counters and phones open it in the browser on the shop network.</li>
        <li>A short wizard asks for the shop's details, its type and how you charge tax, then creates the owner account.</li>
        <li>Import your items from Excel, add staff and approve the counters that will use PIN sign-in.</li>
        <li>Plug in a USB barcode scanner and a thermal printer, open the shift and start selling.</li>
      </ol>

      <div class="bg-gray-100 p-5 rounded-lg my-10">
        <p class="font-bold">Interested?</p>
        <p>
          GPOS is built for small shops in Pakistan, and works for any country's tax, currency and language.
          It is built by the same developer as the <RouterLink to="/projects/restaurant-management-system" class="text-blue-500">Restaurant Management System</RouterLink>.
          To see a demo or talk about your shop, get in touch:
        </p>
        <ul class="mt-3 space-y-2">
          <li class="flex items-center gap-2">
            <i class="pi pi-whatsapp text-green-700" />
            <a :href="whatsappUrl" target="_blank" class="text-blue-500">{{ whatsappNumber }}</a> (WhatsApp)
          </li>
          <li class="flex items-center gap-2">
            <i class="pi pi-envelope text-green-700" />
            <a :href="emailUrl" class="text-blue-500">{{ email }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
