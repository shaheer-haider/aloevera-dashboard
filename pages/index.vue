<template>

  <main class="bg-[#F1F4F8]">
    <div class="p-10 max-w-[1400px] m-auto">
      <h1 class="mb-4 text-[#8A9CAF]">Home/ <span class="text-primary-green">Tenants & Leases</span></h1>
      <section class="flex flex-wrap gap-y-2 gap-x-1 justify-between">
        <aside class="flex flex-wrap gap-2">
          <LibSelect @updateValue="updatePropertiesValues" :val="propertyVal" :values="propertiesValues" class="" />
          <LibSelect @updateValue="updatecurrentValues" :val="currentVal" :values="currentValues" class="" />
          <div class="border-2 w-max flex gap-2 items-center h-11 px-[15px] bg-white rounded-lg">
            <SearchIcon />
            <input class="outline-none min-w-[284px]" type="text" placeholder="Search by individual name or email" />
          </div>
        </aside>
        <aside class="flex flex-wrap gap-2">
          <LibBtn class="btn-gray-stroke rounded-[10px]" text="Message Tenants" :callback="deleteSelectedItems" />
          <LibBtn class="btn-primary rounded-[10px]" text="Add Tenant" :callback="deleteSelectedItems" />
          <LibBtn class="btn-danger rounded-[10px]" text="Delete selected items" :callback="deleteSelectedItems">
            <TrashIcon />
          </LibBtn>
        </aside>
      </section>

      <section class="mt-5 flex flex-wrap gap-2 justify-between">
        <FilterCard numberOfItems="03" />
        <FilterCard numberBoxClasses="bg-[#F1F4F8] text-primary-light-gray" />
        <FilterCard numberBoxClasses="bg-[#FF9999]" numberOfItems="12" />
        <FilterCard numberBoxClasses="bg-[#FF9999]" numberOfItems="01" />
      </section>

      <section class="mt-10 overflow-x-auto">
        <table class="w-full min-w-max text-primary-light-gray text-left border-collapse border-spacing-0">
          <thead class="uppercase mb-5">
            <tr class="h-[50px]">
              <th>
                <div :class="checked ? 'bg-primary-green' : 'border-2 border-[#D0D8DF]'"
                  class="relative w-4 h-4 rounded">
                  <img v-if="checked"
                    class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] select-none"
                    src="@/assets/icons/check.svg" alt="check">
                  <input @click="checked = !checked" type="checkbox"
                    class="absolute top-0 right-0 appearance-none cursor-pointer w-full h-full" />
                </div>
              </th>
              <th>
                Tenants
              </th>
              <th>
                property
              </th>
              <th>
                rent
              </th>
              <th>
                end date
              </th>
              <th>
                message
              </th>
              <th>
                docs
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="x in 15"
              class="bg-white border-spacing-0 border-[#F1F4F8] border-collapse border-t-[7px] h-[50px] rounded-xl">
              <td>
                <div :class="checked ? 'bg-primary-green' : 'border-2 border-[#D0D8DF]'"
                  class="relative w-4 h-4 rounded">
                  <img v-if="checked"
                    class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] select-none"
                    src="@/assets/icons/check.svg" alt="check">
                  <input @click="checked = !checked" type="checkbox"
                    class="absolute top-0 right-0 appearance-none cursor-pointer w-full h-full" />
                </div>
              </td>
              <td class="text-primary-gray font-[500] flex items-center gap-x-3">
                <img src="@/assets/icons/user.png" alt="user">
                Michael Jordan
              </td>
              <td>6875 sand lake road</td>
              <td>$2.200/mo</td>
              <td>month to month</td>
              <td class="flex items-center gap-x-3 relative bottom-[7px]">
                <img src="@/assets/icons/eye.svg" class="" alt="user">
                Michael Jordan
              </td>
              <td>1 lease / 9 total</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>

  </main>
</template>

<script setup lang="ts">
import SearchIcon from '~~/assets/icons/SearchIcon.vue';
import TrashIcon from '~~/assets/icons/TrashIcon.vue';
import FilterCard from '~~/components/Lib/FilterCard.vue';
const selectedItems = ref([])
function deleteSelectedItems() {
  console.log(selectedItems)
}

// select
const currentVal = ref("current")
const propertyVal = ref("properties")
const propertiesValues = ref([
  {
    "value": "properties",
    "name": "All properties"
  },
  {
    "value": "property",
    "name": "property"
  }
])
const currentValues = ref([
  {
    "value": "current",
    "name": "current"
  },
  {
    "value": "old",
    "name": "old"
  }
])

function updatePropertiesValues(value: any) {
  propertyVal.value = value
}
function updatecurrentValues(value: any) {
  currentVal.value = value
}

const checked = ref(false)
</script>

<style scoped>
tr td:last-child {
  border-right-style: solid;
  border-top-right-radius: 2vw;
  border-bottom-right-radius: 2vw;
}

tr td:first-child {
  border-right-style: solid;
  border-bottom-left-radius: 2vw;
  border-top-left-radius: 2vw;
}

th,
td {
  padding: 10px 20px;
}

/* width */
::-webkit-scrollbar {
  height: 4px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>