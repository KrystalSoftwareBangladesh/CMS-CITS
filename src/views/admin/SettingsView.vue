<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseTextarea from '@/components/ui/BaseTextarea.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import BaseSwitch from '@/components/ui/BaseSwitch.vue'
import BaseTabs from '@/components/ui/BaseTabs.vue'
import BaseAlert from '@/components/ui/BaseAlert.vue'
import type { TabItem, SelectOption } from '@/types/admin'
import { Save, Globe, Palette, Shield } from 'lucide-vue-next'

const route = useRoute()

const tabs: TabItem[] = [
  { id: 'general', label: 'General' },
  { id: 'appearance', label: 'Appearance' },
  { id: 'security', label: 'Security' }
]

const getInitialTab = (): string => {
  const path = route.path
  if (path.includes('appearance')) return 'appearance'
  if (path.includes('security')) return 'security'
  return 'general'
}

const activeTab = ref(getInitialTab())
const isSaving = ref(false)
const showSuccess = ref(false)

const generalSettings = ref({
  siteName: 'My CMS Site',
  siteDescription: 'A modern content management system',
  siteUrl: 'https://example.com',
  adminEmail: 'admin@example.com',
  timezone: 'UTC',
  dateFormat: 'YYYY-MM-DD'
})

const appearanceSettings = ref({
  theme: 'light',
  primaryColor: '#F36C21',
  logoUrl: '',
  favicon: '',
  showBreadcrumbs: true,
  compactSidebar: false
})

const securitySettings = ref({
  twoFactorAuth: false,
  sessionTimeout: '30',
  passwordMinLength: '8',
  requireSpecialChars: true,
  maxLoginAttempts: '5',
  ipWhitelist: ''
})

const timezoneOptions: SelectOption[] = [
  { label: 'UTC', value: 'UTC' },
  { label: 'America/New_York', value: 'America/New_York' },
  { label: 'Europe/London', value: 'Europe/London' },
  { label: 'Asia/Tokyo', value: 'Asia/Tokyo' }
]

const themeOptions: SelectOption[] = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'System', value: 'system' }
]

const sessionTimeoutOptions: SelectOption[] = [
  { label: '15 minutes', value: '15' },
  { label: '30 minutes', value: '30' },
  { label: '1 hour', value: '60' },
  { label: '2 hours', value: '120' }
]

async function saveSettings() {
  isSaving.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  isSaving.value = false
  showSuccess.value = true
  setTimeout(() => {
    showSuccess.value = false
  }, 3000)
}
</script>

<template>
  <div class="max-w-4xl">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Settings</h1>
      <p class="text-sm text-gray-500">Manage your application settings and preferences</p>
    </div>

    <BaseAlert v-if="showSuccess" variant="success" dismissible class="mb-6" @dismiss="showSuccess = false">
      Settings saved successfully!
    </BaseAlert>

    <BaseTabs v-model="activeTab" :tabs="tabs">
      <template #default="{ activeTab: currentTab }">
        <div v-if="currentTab === 'general'" class="space-y-6">
          <BaseCard>
            <div class="flex items-center gap-3 mb-6">
              <div class="p-2 bg-blue-100 rounded-lg">
                <Globe class="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 class="text-lg font-semibold text-gray-900">General Settings</h2>
                <p class="text-sm text-gray-500">Basic site configuration</p>
              </div>
            </div>
            <div class="space-y-4">
              <BaseInput
                v-model="generalSettings.siteName"
                label="Site Name"
                placeholder="Enter site name"
              />
              <BaseTextarea
                v-model="generalSettings.siteDescription"
                label="Site Description"
                placeholder="Enter site description"
                :rows="3"
              />
              <BaseInput
                v-model="generalSettings.siteUrl"
                type="url"
                label="Site URL"
                placeholder="https://example.com"
              />
              <BaseInput
                v-model="generalSettings.adminEmail"
                type="email"
                label="Admin Email"
                placeholder="admin@example.com"
              />
              <BaseSelect
                v-model="generalSettings.timezone"
                label="Timezone"
                :options="timezoneOptions"
              />
            </div>
          </BaseCard>
        </div>

        <div v-else-if="currentTab === 'appearance'" class="space-y-6">
          <BaseCard>
            <div class="flex items-center gap-3 mb-6">
              <div class="p-2 bg-purple-100 rounded-lg">
                <Palette class="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h2 class="text-lg font-semibold text-gray-900">Appearance Settings</h2>
                <p class="text-sm text-gray-500">Customize the look and feel</p>
              </div>
            </div>
            <div class="space-y-4">
              <BaseSelect
                v-model="appearanceSettings.theme"
                label="Theme"
                :options="themeOptions"
              />
              <BaseInput
                v-model="appearanceSettings.primaryColor"
                label="Primary Color"
                type="text"
                placeholder="#F36C21"
              />
              <BaseInput
                v-model="appearanceSettings.logoUrl"
                label="Logo URL"
                type="url"
                placeholder="https://example.com/logo.png"
              />
              <div class="pt-4 border-t border-gray-200 space-y-4">
                <BaseSwitch
                  v-model="appearanceSettings.showBreadcrumbs"
                  label="Show breadcrumbs in navigation"
                />
                <BaseSwitch
                  v-model="appearanceSettings.compactSidebar"
                  label="Use compact sidebar by default"
                />
              </div>
            </div>
          </BaseCard>
        </div>

        <div v-else-if="currentTab === 'security'" class="space-y-6">
          <BaseCard>
            <div class="flex items-center gap-3 mb-6">
              <div class="p-2 bg-red-100 rounded-lg">
                <Shield class="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h2 class="text-lg font-semibold text-gray-900">Security Settings</h2>
                <p class="text-sm text-gray-500">Configure security options</p>
              </div>
            </div>
            <div class="space-y-4">
              <BaseSwitch
                v-model="securitySettings.twoFactorAuth"
                label="Require two-factor authentication"
              />
              <BaseSelect
                v-model="securitySettings.sessionTimeout"
                label="Session Timeout"
                :options="sessionTimeoutOptions"
              />
              <BaseInput
                v-model="securitySettings.passwordMinLength"
                type="number"
                label="Minimum Password Length"
              />
              <BaseSwitch
                v-model="securitySettings.requireSpecialChars"
                label="Require special characters in passwords"
              />
              <BaseInput
                v-model="securitySettings.maxLoginAttempts"
                type="number"
                label="Max Login Attempts"
                hint="Number of failed attempts before account lockout"
              />
              <BaseTextarea
                v-model="securitySettings.ipWhitelist"
                label="IP Whitelist"
                placeholder="Enter IP addresses, one per line"
                hint="Leave empty to allow all IPs"
                :rows="3"
              />
            </div>
          </BaseCard>
        </div>
      </template>
    </BaseTabs>

    <div class="flex justify-end mt-6 sticky bottom-0 bg-gray-50 -mx-6 px-6 py-4 border-t border-gray-200">
      <BaseButton :loading="isSaving" @click="saveSettings">
        <Save class="w-4 h-4 mr-2" />
        Save Changes
      </BaseButton>
    </div>
  </div>
</template>
